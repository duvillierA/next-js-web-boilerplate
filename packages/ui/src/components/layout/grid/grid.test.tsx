import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Grid } from './grid'

describe('Grid', () => {
  it('renders with simple number cols', () => {
    const { container } = render(<Grid cols={3} />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid', 'grid-cols-3')
  })

  it('renders with simple string cols', () => {
    const { container } = render(<Grid cols="1fr auto" />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid')
    expect(grid.style.gridTemplateColumns).toBe('1fr auto')
  })

  it('renders with responsive cols object', () => {
    const { container } = render(<Grid cols={{ initial: 1, md: 2, lg: 3 }} />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid')
    expect(grid.style.getPropertyValue('--grid-cols-initial')).toBe('repeat(1, 1fr)')
    expect(grid.style.getPropertyValue('--grid-cols-md')).toBe('repeat(2, 1fr)')
    expect(grid.style.getPropertyValue('--grid-cols-lg')).toBe('repeat(3, 1fr)')
  })

  it('renders with responsive cols classes', () => {
    const { container } = render(<Grid cols={{ initial: 1, md: 2, lg: 3 }} />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid-cols-[var(--grid-cols-initial)]')
    expect(grid).toHaveClass('md:grid-cols-[var(--grid-cols-md)]')
    expect(grid).toHaveClass('lg:grid-cols-[var(--grid-cols-lg)]')
  })

  it('renders with responsive string cols object', () => {
    const { container } = render(<Grid cols={{ initial: '1fr', md: '1fr auto' }} />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid')
    expect(grid.style.getPropertyValue('--grid-cols-initial')).toBe('1fr')
    expect(grid.style.getPropertyValue('--grid-cols-md')).toBe('1fr auto')
  })

  it('renders with responsive string cols classes', () => {
    const { container } = render(<Grid cols={{ initial: '1fr', md: '1fr auto' }} />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid-cols-[var(--grid-cols-initial)]')
    expect(grid).toHaveClass('md:grid-cols-[var(--grid-cols-md)]')
  })

  it('renders with simple number rows', () => {
    const { container } = render(<Grid rows={2} />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid', 'grid-rows-2')
  })

  it('renders with responsive rows object', () => {
    const { container } = render(<Grid rows={{ initial: 'auto', lg: '1fr 1fr' }} />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid')
    expect(grid.style.getPropertyValue('--grid-rows-initial')).toBe('auto')
    expect(grid.style.getPropertyValue('--grid-rows-lg')).toBe('1fr 1fr')
  })

  it('renders with both cols and rows', () => {
    const { container } = render(
      <Grid cols={{ initial: 1, lg: 3 }} rows={{ initial: 'auto', lg: '1fr 1fr' }} />,
    )
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid')
    expect(grid.style.getPropertyValue('--grid-cols-initial')).toBe('repeat(1, 1fr)')
    expect(grid.style.getPropertyValue('--grid-cols-lg')).toBe('repeat(3, 1fr)')
    expect(grid.style.getPropertyValue('--grid-rows-initial')).toBe('auto')
    expect(grid.style.getPropertyValue('--grid-rows-lg')).toBe('1fr 1fr')
  })

  it('renders with gap and other props', () => {
    const { container } = render(<Grid cols={3} gap="lg" align="center" justify="center" />)
    const grid = container.firstChild as HTMLElement
    expect(grid).toHaveClass('grid', 'grid-cols-3', 'gap-6', 'items-center', 'justify-items-center')
  })
})
