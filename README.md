# @azirgopro/azirdesign

A React component library built with TypeScript, Tailwind CSS, and Radix UI.

## Installation

```bash
npm install "@azirgopro/azirdesign": "git@github.com:azirgo-company/azirdesign.git"
```

## Usage

### 1. Import the styles

First, you need to import the CSS styles in your main file (e.g., `layout.tsx`, `_app.tsx`, or `globals.css`):

```tsx
// In your layout.tsx or _app.tsx
import "@azirgopro/azirdesign/styles.css"
```

Or in your CSS file:

```css
/* In your globals.css or main CSS file */
@import "@azirgopro/azirdesign/styles.css";
```

**Important:** This library uses Tailwind CSS. Make sure your project has Tailwind CSS installed and configured. The library includes its own styles, but you need to ensure Tailwind is processing them correctly in your build pipeline.

### 2. Use the components

```tsx
import { Button, Card, Avatar } from "@azirgopro/azirdesign"

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  )
}
```

## Components

### UI Components

- `Button` - Versatile button component with multiple variants
- `Card` - Card container component
- `Avatar` - User avatar component
- `Input` - Form input component
- `Select` - Dropdown select component
- `Table` - Data table component
- `Sidebar` - Navigation sidebar
- `Dialog` - Modal dialog component
- And many more...

### Business Components

- `AddCardForm` - Form for adding cards
- `AppSidebar` - Application sidebar navigation
- `PageHeader` - Page header with breadcrumbs
- `NavUser` - User navigation component
- `TeamSwitcher` - Team switching component

## Requirements

### Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "@radix-ui/react-accordion": ">=1.1.0",
  "@radix-ui/react-alert-dialog": ">=1.1.0",
  "@radix-ui/react-dialog": ">=1.1.0",
  "@radix-ui/react-dropdown-menu": ">=2.0.0",
  "class-variance-authority": ">=0.7.0",
  "lucide-react": ">=0.452.0",
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0",
  "tailwind-merge": ">=2.2.0",
  "tailwindcss": ">=3.4.0",
  "leaflet": ">=1.9.0"
}
```

## Troubleshooting

### Styles not loading

If the styles are not appearing in your project:

1. **Make sure you're importing the CSS file:**

   ```tsx
   import "@azirgopro/azirdesign/styles.css"
   ```

2. **Check your Tailwind CSS configuration:**
   Make sure your `tailwind.config.js` includes the library path:

   ```js
   module.exports = {
     content: [
       // ... your existing paths
       "./node_modules/@azirgopro/azirdesign/**/*.{js,ts,jsx,tsx}",
     ],
     // ... rest of config
   }
   ```

3. **Verify Tailwind CSS version compatibility:**
   This library is designed to work with Tailwind CSS v3.4.0+

4. **Check build order:**
   Make sure the CSS import comes before any component usage

### TypeScript errors

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom @types/react @types/react-dom
```

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests (when available)
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.
