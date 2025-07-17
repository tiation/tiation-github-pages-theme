---
layout: default
title: Tiation GitHub Pages Theme
---

<div class="hero-section">
  <div class="hero-content">
    <h1 class="glitch" data-text="Tiation GitHub Pages Theme">🚀 Tiation GitHub Pages Theme</h1>
    <p class="hero-subtitle">⚡ Lightning-fast Jekyll theme that turns boring documentation into stunning experiences</p>
    <div class="hero-buttons">
      <a href="#features" class="btn btn-primary pulse">🔥 Explore Features</a>
      <a href="#quick-start" class="btn btn-secondary">⚡ Quick Start</a>
    </div>
  </div>
  <div class="hero-animation">
    <div class="floating-icons">
      <div class="icon">🎨</div>
      <div class="icon">⚡</div>
      <div class="icon">🚀</div>
      <div class="icon">✨</div>
    </div>
  </div>
</div>

<style>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 1rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
}

.glitch {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  animation: glitch 2s infinite;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  10% { transform: translate(-2px, -2px); }
  20% { transform: translate(2px, 2px); }
  30% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -2px); }
  50% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  70% { transform: translate(-2px, 2px); }
  80% { transform: translate(2px, -2px); }
  90% { transform: translate(-2px, -2px); }
}

.hero-subtitle {
  font-size: 1.5rem;
  margin: 1rem 0 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: #ff6b6b;
  color: white;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 107, 107, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
}

.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.icon {
  position: absolute;
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

.icon:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.icon:nth-child(2) { top: 60%; left: 20%; animation-delay: 2s; }
.icon:nth-child(3) { top: 40%; right: 20%; animation-delay: 4s; }
.icon:nth-child(4) { top: 80%; right: 10%; animation-delay: 6s; }

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
</style>

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
