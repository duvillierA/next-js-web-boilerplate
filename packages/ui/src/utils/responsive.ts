// Template types
export type Responsive<T> =
  | T
  | {
      initial: T
      md?: T
      lg?: T
      xl?: T
    }

/**
 * Processes a single template (cols or rows) and returns CSS properties
 * @param template - The template value (string, number, or ResponsiveTemplate)
 * @param type - The template type ('cols' or 'rows')
 * @returns CSS properties object for the template
 */
export const processResponsiveStyle = <T extends string | number>({
  value,
  cssProperty,
  cssVarPrefix,
  transform,
}: {
  value: Responsive<T>
  cssProperty: string
  cssVarPrefix: string
  transform: (value: string | number) => string
}): Record<string, string> => {
  const style: Record<string, string> = {}

  if (typeof value === 'string') {
    style[cssProperty] = transform(value)
  } else if (typeof value === 'number') {
    style[cssProperty] = transform(value)
  } else if (isResponsive(value)) {
    // Apply responsive grid values using CSS custom properties
    if (value.initial !== undefined) {
      style[`${cssVarPrefix}-initial`] = transform(value.initial)
    }
    if (value.md !== undefined) {
      style[`${cssVarPrefix}-md`] = transform(value.md)
    }
    if (value.lg !== undefined) {
      style[`${cssVarPrefix}-lg`] = transform(value.lg)
    }
    if (value.xl !== undefined) {
      style[`${cssVarPrefix}-xl`] = transform(value.xl)
    }
  }

  return style
}

/**
 * Processes a single template (cols or rows) and returns CSS classes
 * @param template - The template value (string, number, or ResponsiveTemplate)
 * @param type - The template type ('cols' or 'rows')
 * @returns Array of CSS class names for the template
 */
export const processResponsiveClasses = <T extends string | number>({
  value,
  cssVarPrefix,
  property,
}: {
  value: Responsive<T>
  cssVarPrefix: string
  property: string
}) => {
  const classes: string[] = []

  if (typeof value === 'object') {
    if (value.initial !== undefined) {
      classes.push(`${property}-[var(${cssVarPrefix}-initial)]`)
    }
    if (value.md !== undefined) {
      classes.push(`md:${property}-[var(${cssVarPrefix}-md)]`)
    }
    if (value.lg !== undefined) {
      classes.push(`lg:${property}-[var(${cssVarPrefix}-lg)]`)
    }
    if (value.xl !== undefined) {
      classes.push(`xl:${property}-[var(${cssVarPrefix}-xl)]`)
    }
  }

  return classes
}

export function isResponsive<T extends string | number>(value: unknown): value is Responsive<T> {
  return !!value && typeof value === 'object' && 'initial' in value
}
