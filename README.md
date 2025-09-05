# @azirgopro/azirdesign

A React component library built with TypeScript, Tailwind CSS, and Radix UI.

## Installation

```bash
npm install "@azirgopro/azirdesign": "git@github.com:azirgo-company/azirdesign.git"
```

## Usage

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
  "tailwindcss": ">=3.4.0"
}
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
