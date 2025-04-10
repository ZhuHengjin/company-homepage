# CLAUDE.md - Coding Guidelines

## Build/Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Style

### Component Structure
- Use functional components with arrow function syntax
- PascalCase for component names (e.g., `Navbar.jsx`)
- One component per file, named same as component

### Imports/Exports
- React imports first, then components, then utilities
- Default export for components
- Group related imports together

### Formatting
- Use proper indentation for JSX (2 spaces)
- Multi-line JSX with props on new lines when multiple
- Use template literals for conditional class names
- Follow ESLint rules (ecmaVersion: 2020)

### Naming Conventions
- PascalCase for components
- camelCase for variables/functions
- Prefix state setters with "set"
- Use descriptive names for functions and variables

### Styling
- Use Tailwind CSS for styling
- Color scheme: primary (#000000), secondary (#ffffff), accent (#f0f0f0), accent-blue (#1B6398)
- Use Inter font for sans-serif text
- Prefer utility classes over custom CSS

### Error Handling
- Use try/catch for async operations
- Provide meaningful error messages
- Implement proper error boundaries for component failures