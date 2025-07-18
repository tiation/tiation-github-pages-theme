# Tiation Theme

A reusable theme package for Tiation projects featuring a modern cyan neon design system with animations and gradients.

## Features

- 🎨 **Cyan Neon Color Palette**: Custom cyan color scale with special neon accent
- ✨ **Animations**: Glow and float animations for interactive elements
- 🌙 **Dark Mode**: Complete dark mode support with CSS variables
- 🎯 **Utility Classes**: Pre-built utility classes for common Tiation patterns
- 🔧 **TypeScript**: Full TypeScript support with type definitions

## Installation

```bash
npm install @tiation/theme
```

## Usage

### With Tailwind CSS

1. **Import the theme in your `tailwind.config.js`:**

```javascript
const { tiationTheme } = require('@tiation/theme');

module.exports = {
  ...tiationTheme,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // your content paths
  ],
};
```

2. **Include the CSS in your main CSS file:**

```css
@import '@tiation/theme/styles.css';
```

### TypeScript Usage

```typescript
import { tiationTheme, tiationColors, tiationUtilities } from '@tiation/theme';

// Use in your Tailwind config
export default {
  ...tiationTheme,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

## Color Palette

### Cyan Scale
- `cyan-50` to `cyan-900`: Standard cyan color scale
- `cyan-neon`: Special neon cyan (`#00FFFF`)

### Semantic Colors
- `background` / `foreground`: Main background and text colors
- `primary` / `secondary`: Primary and secondary brand colors
- `accent`: Accent color for highlights
- `muted`: Muted text and backgrounds
- `border`: Border colors
- `card`: Card backgrounds

## Animations

### Glow Animation
Creates a pulsing neon glow effect:
```html
<div class="animate-glow">Glowing element</div>
```

### Float Animation
Creates a gentle floating motion:
```html
<div class="animate-float">Floating element</div>
```

## Utility Classes

### Tiation-specific utilities:
- `tiation-glow`: Apply glow animation
- `tiation-float`: Apply float animation
- `tiation-neon`: Neon cyan text color
- `tiation-neon-bg`: Neon cyan background
- `tiation-neon-border`: Neon cyan border
- `tiation-gradient`: Light gradient background
- `tiation-gradient-dark`: Dark gradient background
- `tiation-card`: Card styling
- `tiation-button-primary`: Primary button styling
- `tiation-button-outline`: Outline button styling
- `tiation-badge`: Badge styling
- `tiation-stat`: Stat number styling

## Example Usage

```html
<!-- Hero Section -->
<section class="tiation-gradient">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl font-bold text-gray-900 mb-6">
      Secure Your
      <span class="tiation-neon tiation-glow">Digital Life</span>
    </h1>
    
    <button class="tiation-button-primary px-8 py-4 rounded-lg">
      Get Started
    </button>
  </div>
</section>

<!-- Floating Element -->
<div class="tiation-float">
  <div class="w-32 h-32 bg-gradient-to-br from-cyan-neon/20 to-cyan-500/20 rounded-full">
    <!-- Content -->
  </div>
</div>

<!-- Stats -->
<div class="tiation-stat mb-2">99.9%</div>
<div class="text-gray-600">Uptime</div>
```

## Dark Mode

The theme includes comprehensive dark mode support. Simply add the `dark` class to your HTML element:

```html
<html class="dark">
  <!-- Your content -->
</html>
```

## CSS Variables

All colors are defined as CSS variables for easy customization:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --cyan-neon: #00FFFF;
  /* ... more variables */
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Tiation Brand Guidelines

This theme follows the Tiation brand guidelines:
- **Primary Color**: Cyan Neon (#00FFFF)
- **Typography**: Modern, clean sans-serif
- **Animations**: Subtle, purposeful, and performance-optimized
- **Gradients**: Light, ethereal gradients that complement the neon accent
- **Spacing**: Generous whitespace for clarity and focus

## Support

For support, questions, or custom theme development:
- **Email**: [tiatheone@protonmail.com](mailto:tiatheone@protonmail.com)
- **Issues**: [GitHub Issues](https://github.com/tiation/tiation-github-pages-theme/issues)
- **Documentation**: [Theme Documentation](https://tiation.github.io/tiation-github-pages-theme/)
