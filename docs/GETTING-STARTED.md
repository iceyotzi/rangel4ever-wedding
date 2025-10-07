# Getting Started with RANGEL4EVER

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
# Watch for CSS changes (auto-rebuild on save)
npm run watch

# Build and serve locally
npm run dev
# Then open http://localhost:8080
```

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
git add .
git commit -m "Deploy site"
git push
```

Then configure GitHub Pages:
- Go to repository **Settings** → **Pages**
- Under "Source", select: **GitHub Actions**
- Your site will deploy automatically!

---

## 📁 Project Structure

```
rangel4ever-wedding/
├── src/                    # Source files (edit these)
│   ├── index.html         # Main HTML file
│   ├── input.css          # Tailwind CSS source
│   └── assets/            # Media files (videos, images)
├── dist/                   # Built files (auto-generated)
│   ├── index.html         # Compiled HTML
│   ├── css/output.css     # Compiled CSS
│   └── assets/            # Copied media files
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml         # Automated deployment
├── docs/                   # Documentation
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Project dependencies
```

---

## 📜 Available Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build all files (CSS, HTML, assets, CNAME) to `dist/` |
| `npm run build:css` | Build only CSS |
| `npm run build:html` | Copy HTML to dist |
| `npm run build:assets` | Copy assets to dist |
| `npm run build:cname` | Copy CNAME to dist |
| `npm run watch` | Watch CSS for changes |
| `npm run clean` | Delete dist folder |
| `npm run rebuild` | Clean and build from scratch |
| `npm run serve` | Serve dist folder on http://localhost:8080 |
| `npm run dev` | Build and serve (one command) |

---

## 📂 Where to Edit

| What to Change | Edit This File |
|----------------|----------------|
| Page content | `src/index.html` |
| Colors/fonts | `tailwind.config.js` |
| Custom CSS | `src/input.css` |
| Video file | `src/assets/hero-video.mp4` |

---

## ⚠️ Important Rules

1. **Always edit `src/` files, never `dist/` files**
2. **Run `npm run build` before testing locally**
3. **GitHub Actions builds automatically on push to main**
4. **Video files must be under 100MB** (GitHub limit)

---

## 🎨 Customization

### Colors
Edit the custom color palette in `tailwind.config.js`:
- `chocolate_cosmos` - Dark burgundy
- `cordovan` - Medium red
- `redwood` - Bright red
- `melon` - Soft pink
- `apricot` - Peachy tone

Use in HTML: `text-redwood`, `bg-melon-900`, etc.

### Fonts
- **Headings**: Libre Baskerville
- **Body**: Lora

Change fonts in `tailwind.config.js` under `fontFamily`.

---

## 🔧 Troubleshooting

### CSS not updating?
```bash
npm run rebuild
```

### Video not showing?
- Check file exists: `src/assets/hero-video.mp4`
- Rebuild: `npm run build`
- Check browser console for errors

### Build fails?
```bash
npm run clean
rm -rf node_modules
npm install
npm run build
```

### Site shows /dist in URL?
- Make sure GitHub Pages source is set to "GitHub Actions" (not "Deploy from a branch")
- See `docs/DEPLOYMENT.md` for details

---

## 📚 More Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide and GitHub Actions setup
- [GOOGLE-SHEETS.md](GOOGLE-SHEETS.md) - Dynamic content with Google Sheets
- [VIDEO-SETUP.md](VIDEO-SETUP.md) - Video hosting options

---

**Built with ❤️ and Tailwind CSS**
