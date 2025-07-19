# Next.js Project Template

A modern Next.js project template with TypeScript, Tailwind CSS, shadcn/ui components, and comprehensive testing setup.

## Features

| Feature | Description |
|---------|-------------|
| ⚡️ Next.js *15* | App Router support |
| 🔒 TypeScript *5* | Type safety |
| 💅 Tailwind CSS *4* | Modern styling |
| 🎨 shadcn/ui | UI component library |
| 🧪 Vitest | Testing framework:<br>• Unit tests (Node environment)<br>• DOM tests (JSDOM environment)<br> |
| 📦 Playwright | E2E testing framework |
| 📦 ESLint *9* | Linting with ESLint:<br>• jsx-a11y<br>• prettier<br>• vitest<br>• tailwindcss<br>• next/core-web-vitals<br>• next/typescript <br> |
| 📦 Pre-commit hooks | • Commit message linting (build, chore,ci, docs, feat, fix, perf, refactor, revert, style, test)<br>• Running tests / lint |
| 🚀 Turborepo | Monorepo build system with caching |

## Monorepo Structure

This project uses a monorepo architecture with the following structure:

```
boilerplate/
├── apps/                    # Application packages
│   └── web/                # Next.js web application
│       ├── src/            # Application source code
│       ├── public/         # Static assets
│       └── test/           # E2E and integration tests
├── packages/               # Shared packages
│   ├── ui/                # Reusable UI components (@boilerplate/ui)
│   │   ├── src/components/ # shadcn/ui components
│   │   └── src/utils/      # Utility functions
│   ├── eslintconfig/      # Shared ESLint configurations (@boilerplate/eslintconfig)
│   │   ├── base.mjs       # Base ESLint config
│   │   ├── nextjs.mjs     # Next.js specific config
│   │   └── react-library.mjs # React library config
│   └── tsconfig/          # Shared TypeScript configurations (@boilerplate/tsconfig)
│       ├── base.json      # Base TypeScript config
│       ├── nextjs.json    # Next.js specific config
│       └── react-library.json # React library config
├── package.json           # Root package.json with workspaces
└── turbo.json            # Turborepo configuration
```

### Package Dependencies

- **Root**: Manages workspace dependencies and Turborepo tasks
- **apps/web**: Main Next.js application that consumes shared packages
- **packages/ui**: Reusable UI component library built with shadcn/ui
- **packages/eslintconfig**: Shared ESLint configurations for consistent code quality
- **packages/tsconfig**: Shared TypeScript configurations for type safety

### Turborepo Tasks

The monorepo uses Turborepo for efficient task orchestration:

- `dev`: Runs development servers in parallel
- `build`: Builds all packages with dependency awareness
- `test`: Runs unit and E2E tests across all packages
- `lint`: Lints all packages with shared configurations
- `typecheck`: Performs TypeScript type checking

## Getting Started

1. Clone this repository
2. Install dependencies:

```bash
npm install
```

After running `npm install`, the `prepare` script will automatically:
- Set up Git hooks with Husky (`husky install`)
- Download browser binaries for Playwright (`playwright install`)

No additional setup is required for these tools.

## Monorepo Commands

### Development
- `npm run dev` - Start development servers for all apps
- `npm run build` - Build all packages and apps
- `npm run start` - Start production servers (requires build first)

### Code Quality
- `npm run lint` - Lint all packages
- `npm run format` - Format code across all packages
- `npm run typecheck` - Type check all packages

### Testing
- `npm run test` - Run all tests (unit + E2E)
- `npm run test:unit` - Run unit tests only
- `npm run test:e2e` - Run E2E tests only (requires build first)

### Maintenance
- `npm run clean` - Clean all build artifacts and node_modules


## Shadcn/ui

Add components to the project:

```bash
npx shadcn@latest add <component>
```

## Pre-commit hooks

- Linting with ESLint
- Running related tests with Vitest
