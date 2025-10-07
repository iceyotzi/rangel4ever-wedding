# RANGEL4EVER Wedding Website

A beautiful, responsive wedding website built with Tailwind CSS and deployed automatically via GitHub Actions.

## ✨ Features

- 🎨 Custom color palette with warm, elegant tones
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎬 Hero video section with autoplay
- 📊 Dynamic content powered by Google Sheets
- 🚀 Automated deployment with GitHub Actions
- 🌐 Custom domain support (rangel4ever.com)
- ⚡ Fast loading with optimized CSS

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development with live server
npm run dev
# Open http://localhost:8080

# Build for production
npm run build

# Deploy (automatic via GitHub Actions)
git add .
git commit -m "Update site"
git push
```

---

## 📁 Project Structure

```
rangel4ever-wedding/
├── src/                    # Source files (edit these)
│   ├── index.html         # Main HTML file
│   ├── input.css          # Tailwind CSS source
│   └── assets/            # Media files
├── dist/                   # Built files (auto-generated)
├── docs/                   # Documentation
│   ├── GETTING-STARTED.md # Setup and development guide
│   ├── DEPLOYMENT.md      # Deployment instructions
│   ├── GOOGLE-SHEETS.md   # Dynamic content setup
│   └── VIDEO-SETUP.md     # Video hosting options
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml         # Automated deployment
└── tailwind.config.js     # Tailwind configuration
```

---

## 📚 Documentation

- **[Getting Started](docs/GETTING-STARTED.md)** - Installation, development, and basic usage
- **[Deployment Guide](docs/DEPLOYMENT.md)** - GitHub Actions setup and custom domain configuration
- **[Google Sheets Integration](docs/GOOGLE-SHEETS.md)** - Dynamic content management
- **[Video Setup](docs/VIDEO-SETUP.md)** - Video hosting and optimization

---

## 🎨 Customization

### Edit Content
Edit `src/index.html` to modify:
- Navigation links
- Hero section
- Schedule and FAQ content
- Footer information

### Change Colors
Edit `tailwind.config.js` to customize the color palette:
- `chocolate_cosmos` - Dark burgundy
- `cordovan` - Medium red
- `redwood` - Bright red
- `melon` - Soft pink
- `apricot` - Peachy tone

### Update Fonts
Fonts are configured in `tailwind.config.js`:
- **Headings:** Libre Baskerville
- **Body:** Lora

---

## 📜 Available Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build all files to `dist/` |
| `npm run watch` | Watch CSS for changes |
| `npm run dev` | Build and serve locally |
| `npm run clean` | Delete dist folder |
| `npm run rebuild` | Clean and rebuild |
| `npm run serve` | Serve dist on localhost:8080 |

---

## 🌐 Deployment

This site uses **GitHub Actions** for automated deployment:

1. Push to `main` branch
2. GitHub Actions builds the site automatically
3. Deploys to GitHub Pages
4. Live at `https://rangel4ever.com`

No manual building required! Just push and deploy.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed setup instructions.

---

## 📊 Dynamic Content

Schedule and FAQ sections load from Google Sheets, allowing non-technical updates without rebuilding the site.

**Benefits:**
- ✅ Update content by editing a Google Sheet
- ✅ Changes appear instantly
- ✅ No git commits needed for content changes
- ✅ 5-10x faster than traditional APIs

See [docs/GOOGLE-SHEETS.md](docs/GOOGLE-SHEETS.md) for setup instructions.

---

## 🛠️ Tech Stack

- **Framework:** Tailwind CSS v3
- **Build Tool:** Tailwind CLI
- **Deployment:** GitHub Actions + GitHub Pages
- **Dynamic Content:** Google Sheets (CSV method)
- **Fonts:** Google Fonts (Libre Baskerville, Lora)

---

## 📦 Dependencies

- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS transformation
- `autoprefixer` - Vendor prefix automation
- `cpx2` - File copying utility

---

## 🔧 Troubleshooting

### CSS not updating?
```bash
npm run rebuild
```

### Site shows /dist in URL?
Make sure GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch")

### Video not showing?
Check that `src/assets/hero-video.mp4` exists and run `npm run build`

### Build fails?
```bash
npm run clean
rm -rf node_modules
npm install
npm run build
```

See [docs/GETTING-STARTED.md](docs/GETTING-STARTED.md) for more troubleshooting tips.

---

## 📄 License

ISC

---

## 🤝 Contributing

This is a personal wedding website. Feel free to fork and customize for your own use!

---

**Built with ❤️ and Tailwind CSS**

For detailed documentation, see the [docs/](docs/) folder.