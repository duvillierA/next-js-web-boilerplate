# Next.js Project Template

A modern Next.js project template with TypeScript, Tailwind CSS, shadcn/ui components, and comprehensive testing setup.

## Features

| Feature | Description |
|---------|-------------|
| ⚡️ Next.js *15* | App Router support |
| 🔒 TypeScript *5* | Type safety |
| 💅 Tailwind CSS *4* | Modern styling |
| 🎨 shadcn/ui | UI component library |
| 🧪 Vitest | Testing framework:<br>• Unit tests (Node environment)<br>• DOM tests (JSDOM environment)<br>• E2E tests (Playwright) |
| 📦 ESLint *9* | Linting with ESLint:<br>• jsx-a11y<br>• prettier<br>• vitest<br>• tailwindcss<br>• next/core-web-vitals<br>• next/typescript <br> |
| 📦 Pre-commit hooks | • Commit message linting<br>• Running tests / lint |

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

3. Run the development server:

```bash
npm run dev
```

4. Run the tests and linting:

```bash
npm run test
npm run lint
```

## Pre-commit hooks

- Linting with ESLint
- Running related tests with Vitest

## code coverage

```bash
npm run test:coverage
```
