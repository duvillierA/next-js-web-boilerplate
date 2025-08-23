import { describe, expect, it } from 'vitest'
import {
  getColsClasses,
  getColsStyles,
  getRowsClasses,
  getRowsStyles,
  getTemplateClasses,
  getTemplateStyles,
} from './grid.utils'

describe('Grid Template Utilities', () => {
  describe('getColsStyles', () => {
    it('should return empty object for undefined cols', () => {
      const result = getColsStyles()
      expect(result).toEqual({})
    })

    it('should handle string cols', () => {
      const result = getColsStyles('1fr 2fr')
      expect(result).toEqual({ gridTemplateColumns: '1fr 2fr' })
    })

    it('should handle number cols', () => {
      const result = getColsStyles(3)
      expect(result).toEqual({ gridTemplateColumns: 'repeat(3, 1fr)' })
    })

    it('should handle responsive cols object', () => {
      const result = getColsStyles({
        initial: 1,
        md: 2,
        lg: 3,
      })
      expect(result).toEqual({
        '--grid-cols-initial': 'repeat(1, 1fr)',
        '--grid-cols-md': 'repeat(2, 1fr)',
        '--grid-cols-lg': 'repeat(3, 1fr)',
      })
    })
  })

  describe('getRowsStyles', () => {
    it('should return empty object for undefined rows', () => {
      const result = getRowsStyles()
      expect(result).toEqual({})
    })

    it('should handle string rows', () => {
      const result = getRowsStyles('auto 1fr')
      expect(result).toEqual({ gridTemplateRows: 'auto 1fr' })
    })

    it('should handle number rows', () => {
      const result = getRowsStyles(2)
      expect(result).toEqual({ gridTemplateRows: 'repeat(2, 1fr)' })
    })

    it('should handle responsive rows object', () => {
      const result = getRowsStyles({
        initial: 'auto',
        lg: '1fr 1fr',
      })
      expect(result).toEqual({
        '--grid-rows-initial': 'auto',
        '--grid-rows-lg': '1fr 1fr',
      })
    })
  })

  describe('getColsClasses', () => {
    it('should return empty array for undefined cols', () => {
      const result = getColsClasses()
      expect(result).toEqual([])
    })

    it('should return empty array for string cols', () => {
      const result = getColsClasses('1fr 2fr')
      expect(result).toEqual([])
    })

    it('should return empty array for number cols', () => {
      const result = getColsClasses(3)
      expect(result).toEqual([])
    })

    it('should handle responsive cols object', () => {
      const result = getColsClasses({
        initial: 1,
        md: 2,
        lg: 3,
      })
      expect(result).toEqual([
        'grid-cols-[var(--grid-cols-initial)]',
        'md:grid-cols-[var(--grid-cols-md)]',
        'lg:grid-cols-[var(--grid-cols-lg)]',
      ])
    })
  })

  describe('getRowsClasses', () => {
    it('should return empty array for undefined rows', () => {
      const result = getRowsClasses()
      expect(result).toEqual([])
    })

    it('should return empty array for string rows', () => {
      const result = getRowsClasses('auto 1fr')
      expect(result).toEqual([])
    })

    it('should return empty array for number rows', () => {
      const result = getRowsClasses(2)
      expect(result).toEqual([])
    })

    it('should handle responsive rows object', () => {
      const result = getRowsClasses({
        initial: 'auto',
        lg: '1fr 1fr',
      })
      expect(result).toEqual([
        'grid-rows-[var(--grid-rows-initial)]',
        'lg:grid-rows-[var(--grid-rows-lg)]',
      ])
    })
  })

  describe('getTemplateStyles', () => {
    it('should return empty object for empty template', () => {
      const result = getTemplateStyles({})
      expect(result).toEqual({})
    })

    it('should handle string columns template', () => {
      const template = { cols: '1fr 2fr' }
      const result = getTemplateStyles(template)
      expect(result).toEqual({ gridTemplateColumns: '1fr 2fr' })
    })

    it('should handle string rows template', () => {
      const template = { rows: 'auto 1fr' }
      const result = getTemplateStyles(template)
      expect(result).toEqual({ gridTemplateRows: 'auto 1fr' })
    })

    it('should handle responsive columns template', () => {
      const template = {
        cols: {
          initial: 1,
          md: 2,
          lg: 3,
        },
      }
      const result = getTemplateStyles(template)
      expect(result).toEqual({
        '--grid-cols-initial': 'repeat(1, 1fr)',
        '--grid-cols-md': 'repeat(2, 1fr)',
        '--grid-cols-lg': 'repeat(3, 1fr)',
      })
    })

    it('should handle responsive rows template', () => {
      const template = {
        rows: {
          initial: 'auto',
          lg: '1fr 1fr',
        },
      }
      const result = getTemplateStyles(template)
      expect(result).toEqual({
        '--grid-rows-initial': 'auto',
        '--grid-rows-lg': '1fr 1fr',
      })
    })

    it('should handle both columns and rows templates', () => {
      const template = {
        cols: '1fr 2fr',
        rows: 'auto 1fr',
      }
      const result = getTemplateStyles(template)
      expect(result).toEqual({
        gridTemplateColumns: '1fr 2fr',
        gridTemplateRows: 'auto 1fr',
      })
    })
  })

  describe('getTemplateClasses', () => {
    it('should return empty array for empty template', () => {
      const result = getTemplateClasses({})
      expect(result).toEqual([])
    })

    it('should return empty array for string template', () => {
      const template = { cols: '1fr 2fr' }
      const result = getTemplateClasses(template)
      expect(result).toEqual([])
    })

    it('should handle responsive columns classes', () => {
      const template = {
        cols: {
          initial: 1,
          md: 2,
          lg: 3,
        },
      }
      const result = getTemplateClasses(template)
      expect(result).toEqual([
        'grid-cols-[var(--grid-cols-initial)]',
        'md:grid-cols-[var(--grid-cols-md)]',
        'lg:grid-cols-[var(--grid-cols-lg)]',
      ])
    })

    it('should handle responsive rows classes', () => {
      const template = {
        rows: {
          initial: 'auto',
          lg: '1fr 1fr',
        },
      }
      const result = getTemplateClasses(template)
      expect(result).toEqual([
        'grid-rows-[var(--grid-rows-initial)]',
        'lg:grid-rows-[var(--grid-rows-lg)]',
      ])
    })

    it('should handle both columns and rows classes', () => {
      const template = {
        cols: {
          initial: 1,
          md: 2,
        },
        rows: {
          initial: 'auto',
          lg: '1fr 1fr',
        },
      }
      const result = getTemplateClasses(template)
      expect(result).toEqual([
        'grid-cols-[var(--grid-cols-initial)]',
        'md:grid-cols-[var(--grid-cols-md)]',
        'grid-rows-[var(--grid-rows-initial)]',
        'lg:grid-rows-[var(--grid-rows-lg)]',
      ])
    })
  })
})
