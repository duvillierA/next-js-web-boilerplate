#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Component categorization mapping (same as in add-component.js)
const componentCategories = {
  'accordion': 'interactive',
  'alert': 'feedback',
  'alert-dialog': 'overlays',
  'aspect-ratio': 'layout',
  'avatar': 'data-display',
  'badge': 'feedback',
  'button': 'interactive',
  'breadcrumb': 'navigation',
  'calendar': 'date-time',
  'card': 'interactive',
  'checkbox': 'data-entry',
  'collapsible': 'interactive',
  'command': 'navigation',
  'context-menu': 'navigation',
  'control-card': 'data-entry',
  'dialog': 'overlays',
  'drawer': 'overlays',
  'dropdown-menu': 'navigation',
  'form': 'data-entry',
  'heading': 'typography',
  'hover-card': 'overlays',
  'input': 'data-entry',
  'label': 'data-entry',
  'menubar': 'navigation',
  'navigation-menu': 'navigation',
  'popover': 'overlays',
  'progress': 'feedback',
  'radio-group': 'data-entry',
  'scroll-area': 'layout',
  'select': 'data-entry',
  'separator': 'layout',
  'sheet': 'overlays',
  'skeleton': 'feedback',
  'slider': 'data-entry',
  'sonner': 'feedback',
  'spinner': 'feedback',
  'switch': 'data-entry',
  'table': 'data-display',
  'tabs': 'navigation',
  'textarea': 'data-entry',
  'toast': 'feedback',
  'toggle': 'interactive',
  'tooltip': 'overlays'
}

function getComponentCategory(componentName) {
  return componentCategories[componentName] || 'misc'
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
    console.log(`✅ Created directory: ${dirPath}`)
  }
}

function createIndexFile(category, components) {
  const categoryDir = path.join(__dirname, '../src/components', category)
  const indexPath = path.join(categoryDir, 'index.ts')
  
  if (components.length === 0) return

  const exports = components.map(component => {
    const componentName = component.replace('.tsx', '')
    // Convert kebab-case to PascalCase for component names
    const pascalCaseName = componentName.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('')
    return `export { ${pascalCaseName} } from './${componentName}'`
  }).join('\n')
  
  fs.writeFileSync(indexPath, exports + '\n')
  console.log(`✅ Created index file for ${category}/`)
}

function updateMainIndexFile() {
  const categories = [
    'data-entry',
    'interactive', 
    'layout',
    'navigation',
    'data-display',
    'date-time',
    'feedback',
    'overlays',
    'typography',
    'misc'
  ]

  const mainIndexPath = path.join(__dirname, '../src/components/index.ts')
  const exports = categories
    .filter(category => fs.existsSync(path.join(__dirname, '../src/components', category)))
    .map(category => `export * from './${category}'`)
    .join('\n')

  fs.writeFileSync(mainIndexPath, exports + '\n')
  console.log('✅ Updated main index file')
}

function migrateComponents() {
  const componentsDir = path.join(__dirname, '../src/components')
  const files = fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.tsx'))
    .map(file => file.replace('.tsx', ''))

  console.log(`🚀 Starting migration of ${files.length} components...`)

  const categoryMap = {}

  // Group components by category
  files.forEach(componentName => {
    const category = getComponentCategory(componentName)
    if (!categoryMap[category]) {
      categoryMap[category] = []
    }
    categoryMap[category].push(componentName)
  })

  // Move components to their categories
  Object.entries(categoryMap).forEach(([category, components]) => {
    const categoryDir = path.join(componentsDir, category)
    ensureDirectoryExists(categoryDir)

    components.forEach(componentName => {
      const sourcePath = path.join(componentsDir, `${componentName}.tsx`)
      const targetPath = path.join(categoryDir, `${componentName}.tsx`)

      if (fs.existsSync(sourcePath)) {
        fs.renameSync(sourcePath, targetPath)
        console.log(`✅ Moved ${componentName}.tsx to ${category}/`)
      }
    })

    // Create index file for the category
    createIndexFile(category, components.map(c => `${c}.tsx`))
  })

  // Update main index file
  updateMainIndexFile()

  console.log('\n🎉 Migration completed successfully!')
  console.log('\n📊 Migration Summary:')
  Object.entries(categoryMap).forEach(([category, components]) => {
    console.log(`  ${category}: ${components.length} components`)
  })
}

function main() {
  try {
    migrateComponents()
  } catch (error) {
    console.error('❌ Migration failed:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = { migrateComponents, getComponentCategory }
