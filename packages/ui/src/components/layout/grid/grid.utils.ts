import {
  type Responsive,
  processResponsiveClasses,
  processResponsiveStyle,
} from '../../../utils/responsive'

export type GridResponsive = Responsive<string | number>

/**
 * Type guard to check if a value is a valid grid number (1-6)
 */
export function isValidGridNumber(value: unknown): value is 1 | 2 | 3 | 4 | 5 | 6 {
  return typeof value === 'number' && value >= 1 && value <= 6 && Number.isInteger(value)
}

/**
 * Type guard to check if a value is a valid CSS grid template string
 */
export function isValidGridTemplateString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Type guard to check if a value is a valid grid value (number, string, or Responsive object)
 */
export function isValidGridValue(value: unknown): value is GridResponsive {
  return isValidGridNumber(value) || isValidGridTemplateString(value) || isResponsiveGrid(value)
}

/**
 * Type guard to check if a value is a number that should be converted to grid template
 */
export function isGridNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value > 0
}

/**
 * Type guard to check if a value is a responsive object with grid properties
 */
export function isResponsiveGrid(
  value: unknown,
): value is Extract<GridResponsive, Record<string, unknown>> {
  return (
    typeof value === 'object' &&
    value !== null &&
    'initial' in value &&
    (typeof (value as Record<string, unknown>).initial === 'string' ||
      typeof (value as Record<string, unknown>).initial === 'number')
  )
}

/**
 * Generates CSS styles for grid columns configuration
 * @param cols - The columns value (string, number, or Responsive object)
 * @returns CSS properties object with grid template columns styles
 */
export const getColsStyles = (cols?: GridResponsive): React.CSSProperties => {
  if (!cols || !isValidGridValue(cols)) return {}

  return processResponsiveStyle({
    value: cols,
    cssProperty: 'gridTemplateColumns',
    cssVarPrefix: '--grid-cols',
    transform: (value) => {
      if (isGridNumber(value)) {
        return `repeat(${value}, 1fr)`
      }
      return value
    },
  })
}

/**
 * Generates CSS styles for grid rows configuration
 * @param rows - The rows value (string, number, or Responsive object)
 * @returns CSS properties object with grid template rows styles
 */
export const getRowsStyles = (rows?: GridResponsive): React.CSSProperties => {
  if (!rows || !isValidGridValue(rows)) return {}

  return processResponsiveStyle({
    value: rows,
    cssProperty: 'gridTemplateRows',
    cssVarPrefix: '--grid-rows',
    transform: (value) => {
      if (isGridNumber(value)) {
        return `repeat(${value}, 1fr)`
      }

      return value
    },
  })
}

/**
 * Generates CSS classes for responsive grid columns configuration
 * @param cols - The columns value (string, number, or Responsive object)
 * @returns Array of CSS class names
 */
export const getColsClasses = (cols?: GridResponsive): string[] => {
  if (!cols || !isValidGridValue(cols)) return []

  return processResponsiveClasses({
    value: cols,
    cssVarPrefix: '--grid-cols',
    property: 'grid-cols',
  })
}

/**
 * Generates CSS classes for responsive grid rows configuration
 * @param rows - The rows value (string, number, or Responsive object)
 * @returns Array of CSS class names
 */
export const getRowsClasses = (rows?: GridResponsive): string[] => {
  if (!rows || !isValidGridValue(rows)) return []

  return processResponsiveClasses({
    value: rows,
    cssVarPrefix: '--grid-rows',
    property: 'grid-rows',
  })
}

/**
 * Type guard to check if a template object has valid grid properties
 */
export function isValidGridTemplate(template: unknown): template is {
  cols?: GridResponsive
  rows?: GridResponsive
} {
  return (
    typeof template === 'object' &&
    template !== null &&
    ((template as Record<string, unknown>).cols !== undefined ||
      (template as Record<string, unknown>).rows !== undefined)
  )
}

/**
 * Generates CSS styles for grid template configuration (legacy support)
 * @param template - The template configuration object
 * @returns CSS properties object with grid template styles
 */
export const getTemplateStyles = (template: {
  cols?: GridResponsive
  rows?: GridResponsive
}): React.CSSProperties => {
  if (!isValidGridTemplate(template)) return {}

  const style: Record<string, string> = {}

  // Handle columns template
  if (template.cols && isValidGridValue(template.cols)) {
    Object.assign(style, getColsStyles(template.cols))
  }

  // Handle rows template
  if (template.rows && isValidGridValue(template.rows)) {
    Object.assign(style, getRowsStyles(template.rows))
  }

  return style
}

/**
 * Generates CSS classes for responsive grid template configuration (legacy support)
 * @param template - The template configuration object
 * @returns Array of CSS class names
 */
export const getTemplateClasses = (template: {
  cols?: GridResponsive
  rows?: GridResponsive
}): string[] => {
  if (!isValidGridTemplate(template)) return []

  const classes: string[] = []

  // Handle columns responsive classes
  if (template?.cols && isValidGridValue(template.cols)) {
    classes.push(...getColsClasses(template.cols))
  }

  // Handle rows responsive classes
  if (template?.rows && isValidGridValue(template.rows)) {
    classes.push(...getRowsClasses(template.rows))
  }

  return classes
}
