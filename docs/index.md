---
layout: default
title: Tiation GitHub Pages Theme
---

# Tiation GitHub Pages Theme

**Enterprise-grade Jekyll theme for professional GitHub Pages sites**

## Features

- **🚀 Quick Setup**: Transform your README.md into a professional GitHub Pages site
- **🎨 Clean Design**: Modern, visually appealing styles optimized for technical documentation
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **🔧 Customizable**: Easy to customize colors, fonts, and layout
- **⚡ Fast Loading**: Optimized for performance and speed
- **🎯 SEO Optimized**: Built-in SEO features for better search visibility

## Quick Start

1. **Enable GitHub Pages** in your repository settings
2. **Create `_config.yml`** in your repository root:
   ```yaml
   remote_theme: tiation/tiation-github-pages-theme
   ```
3. **That's it!** Your site will be available at `https://yourusername.github.io/yourrepository`

## Configuration

### Basic Configuration

```yaml
# _config.yml
remote_theme: tiation/tiation-github-pages-theme
title: Your Project Name
description: Your project description
author:
  name: Your Name
  email: your.email@example.com
```

### Advanced Configuration

```yaml
# _config.yml
remote_theme: tiation/tiation-github-pages-theme
title: Your Project Name
description: Your project description
lang: en-US
bg_color: auto  # dark, light, or auto
theme_color: azure  # red, blue, green, purple, etc.

# SEO
keywords: "your, project, keywords"
gtag: G-XXXXXXXXXX  # Google Analytics

# Navigation
header_pages:
  - index.md
  - about.md
  - docs.md
```

## Available Theme Colors

- `red` - Bold red accent
- `blue` - Professional blue
- `green` - Natural green
- `purple` - Creative purple
- `orange` - Energetic orange
- `azure` - Modern azure (default)
- `grey` - Neutral grey

## Customization

### Custom CSS

Create `assets/css/custom.css` in your repository:

```css
/* Custom styles */
.site-header {
  background-color: #your-color;
}

.site-title {
  color: #your-title-color;
}
```

### Custom Favicon

Place your favicon at `assets/img/favicon.png`

### Ignoring Content

To hide content from the site but keep it in README.md:

```html
<p class="ignore">
  This content will not appear on the GitHub Pages site
</p>
```

## Examples

### Basic Project Site

```markdown
# My Awesome Project

This is a great project that does amazing things.

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

```bash
npm install my-awesome-project
```

## Usage

```javascript
const project = require('my-awesome-project');
project.doSomething();
```
```

### Documentation Site

```markdown
# API Documentation

## Getting Started

Welcome to our API documentation.

## Authentication

All API requests require authentication.

## Endpoints

### GET /api/users

Returns a list of users.
```

## Best Practices

1. **Use Clear Headers**: Structure your content with H1, H2, H3 headers
2. **Add Code Examples**: Include syntax-highlighted code blocks
3. **Include Images**: Add screenshots and diagrams to illustrate concepts
4. **Write Good Descriptions**: Use the description field in _config.yml
5. **Test Locally**: Use Jekyll locally to test before publishing

## Support

- **Issues**: [GitHub Issues](https://github.com/tiation/tiation-github-pages-theme/issues)
- **Documentation**: [Theme Documentation](https://github.com/tiation/tiation-github-pages-theme/wiki)
- **Examples**: [Live Examples](https://github.com/tiation/tiation-github-pages-theme/examples)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by <a href="https://tiation.com">Tiation</a>
</div>
