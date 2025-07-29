# Storybook Design System

This Storybook application showcases the design system components, colors, and templates for the boilerplate project.

## Structure

The Storybook is organized into the following sections:

### Colors
- **Light Theme Colors**: All color tokens for light mode
- **Dark Theme Colors**: All color tokens for dark mode
- **Chart Colors**: Color palette for data visualization
- **Sidebar Colors**: Specialized colors for sidebar components

### Components
- **UI Components**: Individual component showcases with all variants and states
- **Interactive Examples**: Components with full interactivity and controls

### Templates
- **Dashboard**: Complete dashboard layout with stats, activity feed, and quick actions
- **Forms**: Common form patterns and layouts
- **Landing Pages**: Marketing and product page templates

### Suggestions
- **Form Patterns**: Common form layouts and interaction patterns
- **Layout Patterns**: Reusable layout structures
- **Component Combinations**: How to combine components effectively

## Design System Colors

The design system uses a comprehensive color palette with both light and dark theme support:

### Core Colors
- **Background**: Main page background
- **Foreground**: Primary text color
- **Card**: Card component backgrounds
- **Primary**: Primary brand color
- **Secondary**: Secondary actions and highlights
- **Muted**: Subtle backgrounds and borders
- **Accent**: Interactive elements
- **Destructive**: Error states and dangerous actions

### Specialized Colors
- **Sidebar**: Dedicated sidebar color scheme
- **Chart**: Data visualization color palette
- **Border**: Consistent border colors
- **Input**: Form input styling
- **Ring**: Focus indicators

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open Storybook in your browser at `http://localhost:6006`

## Available Scripts

- `npm run dev`: Start Storybook development server
- `npm run build`: Build Storybook for production
- `npm run lint`: Run ESLint
- `npm run typecheck`: Run TypeScript type checking

## Adding New Stories

1. Create your story file in the appropriate directory:
   - `src/stories/colors/` for color showcases
   - `src/stories/components/ui/` for UI components
   - `src/stories/templates/` for page templates
   - `src/stories/suggestions/` for patterns and suggestions

2. Export your story with proper metadata and controls

3. Use the design system components from `@boilerplate/ui`

## Design Tokens

All design tokens are defined in CSS custom properties and can be accessed through Tailwind CSS classes. The color system uses OKLCH color space for better perceptual uniformity and accessibility.

## Contributing

When adding new components or patterns:

1. Follow the existing naming conventions
2. Include proper TypeScript types
3. Add comprehensive controls and documentation
4. Test in both light and dark themes
5. Ensure accessibility compliance 