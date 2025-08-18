#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

// Component categorization mapping
const componentCategories = {
  accordion: 'interactive',
  alert: 'feedback',
  'alert-dialog': 'overlays',
  'aspect-ratio': 'layout',
  avatar: 'data-display',
  badge: 'feedback',
  button: 'interactive',
  calendar: 'date-time',
  card: 'interactive',
  checkbox: 'data-entry',
  collapsible: 'interactive',
  command: 'navigation',
  'context-menu': 'navigation',
  dialog: 'overlays',
  drawer: 'overlays',
  'dropdown-menu': 'navigation',
  form: 'data-entry',
  'hover-card': 'overlays',
  input: 'data-entry',
  label: 'data-entry',
  menubar: 'navigation',
  'navigation-menu': 'navigation',
  popover: 'overlays',
  progress: 'feedback',
  'radio-group': 'data-entry',
  'scroll-area': 'layout',
  select: 'data-entry',
  separator: 'layout',
  sheet: 'overlays',
  skeleton: 'feedback',
  slider: 'data-entry',
  switch: 'data-entry',
  table: 'data-display',
  tabs: 'navigation',
  textarea: 'data-entry',
  toast: 'feedback',
  toggle: 'interactive',
  tooltip: 'overlays',
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

function moveComponentToCategory(componentName) {
  const category = getComponentCategory(componentName)

  // Check multiple possible source locations
  const possibleSources = [
    path.join(__dirname, '../src/components', `${componentName}.tsx`),
    path.join(__dirname, '../@/components/ui', `${componentName}.tsx`),
    path.join(__dirname, '../src/components/ui', `${componentName}.tsx`),
  ]

  const targetDir = path.join(__dirname, '../src/components', category)
  const targetPath = path.join(targetDir, `${componentName}.tsx`)

  // Ensure target directory exists
  ensureDirectoryExists(targetDir)

  // Find and move the component
  for (const sourcePath of possibleSources) {
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, targetPath)
      console.log(`✅ Moved ${componentName}.tsx to ${category}/`)
      return
    }
  }

  console.log(`⚠️  Could not find ${componentName}.tsx to move`)
}

function updateIndexFile(category) {
  const categoryDir = path.join(__dirname, '../src/components', category)
  const indexPath = path.join(categoryDir, 'index.ts')

  if (!fs.existsSync(categoryDir)) return

  const files = fs
    .readdirSync(categoryDir)
    .filter((file) => file.endsWith('.tsx') && !file.startsWith('index'))
    .map((file) => file.replace('.tsx', ''))

  if (files.length === 0) return

  const exports = files
    .map((file) => {
      // Convert kebab-case to PascalCase for component names
      const componentName = file
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
      return `export { ${componentName} } from './${file}'`
    })
    .join('\n')

  fs.writeFileSync(indexPath, exports + '\n')
  console.log(`✅ Updated index file for ${category}/`)
}

function main() {
  const componentName = process.argv[2]

  if (!componentName) {
    console.error('❌ Please provide a component name')
    console.log('Usage: node add-component.js <component-name>')
    process.exit(1)
  }

  try {
    // Run shadcn add command
    console.log(`🚀 Adding ${componentName} component...`)
    execSync(`npx shadcn@latest add ${componentName} --yes`, {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..'),
    })

    // Move component to appropriate category
    console.log(`📁 Organizing ${componentName} into category...`)
    moveComponentToCategory(componentName)

    // Update index file for the category
    const category = getComponentCategory(componentName)
    updateIndexFile(category)

    console.log(`✅ Successfully added and organized ${componentName} component!`)
    console.log(`📂 Component location: src/components/${category}/${componentName}.tsx`)
  } catch (error) {
    console.error('❌ Error adding component:', error.message)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

module.exports = { getComponentCategory, moveComponentToCategory, updateIndexFile }
