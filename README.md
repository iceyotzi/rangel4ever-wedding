# RANGEL4EVER

A beautiful static website built with Tailwind CSS, ready to be hosted on GitHub Pages.

## 📁 Project Structure

```
rangel4ever/
├── src/                    # Source files (edit these)
│   ├── index.html         # Main HTML file
│   ├── input.css          # Tailwind CSS source
│   └── assets/            # Media files (videos, images)
│       ├── hero-video.mp4
│       └── README.md
├── dist/                   # Built files (deploy this folder)
│   ├── index.html         # Compiled HTML
│   ├── css/
│   │   └── output.css     # Compiled & minified CSS
│   └── assets/            # Copied media files
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Project dependencies
└── VIDEO-HOSTING-GUIDE.md # Video hosting instructions

```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
# Watch for CSS changes (auto-rebuild on save)
npm run watch

# Open src/index.html in your browser to preview
```

### 3. Build for Production
```bash
# Build everything into dist/ folder
npm run build

# Or clean and rebuild
npm run rebuild
```

### 4. Deploy to GitHub Pages
```bash
# Commit the dist folder
git add dist/
git commit -m "Build for deployment"
git push

# Configure GitHub Pages to serve from /dist folder
# (See deployment instructions below)
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build all files (CSS, HTML, assets) to `dist/` |
| `npm run build:css` | Build only CSS |
| `npm run build:html` | Copy HTML to dist |
| `npm run build:assets` | Copy assets to dist |
| `npm run watch` | Watch CSS for changes |
| `npm run clean` | Delete dist folder |
| `npm run rebuild` | Clean and build from scratch |

## 🎨 Customization

### Colors
Edit the custom color palette in `tailwind.config.js`:
- `chocolate_cosmos` - Dark burgundy
- `cordovan` - Medium red
- `redwood` - Bright red
- `melon` - Soft pink
- `apricot` - Peachy tone

### Fonts
- **Headings**: Quicksand (Google Fonts)
- **Body**: Source Sans Pro (Google Fonts)

Change fonts in `tailwind.config.js` under `fontFamily`.

### Content
Edit `src/index.html` to modify:
- Navigation links
- Hero video section
- Schedule events
- Visitor guides
- Our story content
- FAQ items

### Video
Place your video in `src/assets/` and it will be automatically copied to `dist/assets/` during build.

See `VIDEO-HOSTING-GUIDE.md` for detailed video hosting options.

## 🌐 Deployment to GitHub Pages

### Option 1: Deploy from /dist folder (Recommended)

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **Commit the dist folder:**
   ```bash
   git add dist/
   git commit -m "Build for deployment"
   git push
   ```

3. **Configure GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select the `main` branch
   - Under "Folder", select `/dist`
   - Click "Save"

4. **Your site will be live at:**
   ```
   https://yourusername.github.io/rangel4ever/
   ```

### Option 2: Deploy with GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This automatically builds and deploys on every push to main.

## 📝 Development Workflow

1. **Edit source files** in `src/` folder
2. **Run `npm run watch`** to auto-rebuild CSS
3. **Preview** by opening `src/index.html` in browser
4. **Build** with `npm run build` when ready
5. **Deploy** the `dist/` folder to GitHub Pages

## 🎬 Video Setup

Your hero section uses a background video. To add your video:

1. Place video file in `src/assets/hero-video.mp4`
2. (Optional) Add `hero-video.webm` for better browser support
3. (Optional) Add `video-poster.jpg` as thumbnail
4. Run `npm run build` to copy to dist

For alternative hosting options (Cloudinary, YouTube, etc.), see `VIDEO-HOSTING-GUIDE.md`.

## 📊 Google Sheets Integration (Dynamic Content)

Your schedule section can dynamically load from Google Sheets, allowing you to update events without rebuilding the site!

### Quick Setup (5 minutes):
1. See **`GOOGLE-SHEETS-QUICKSTART.md`** for step-by-step instructions
2. Create a Google Sheet with your events
3. Deploy as a Web App using Google Apps Script
4. Add the API URL to `src/index.html` (line 299)
5. Build and deploy - done!

### Benefits:
- ✅ Update events by editing Google Sheet
- ✅ Changes appear instantly (no rebuild needed)
- ✅ Non-technical team members can update content
- ✅ No git commits required for content changes

### Documentation:
- **Quick Start**: `GOOGLE-SHEETS-QUICKSTART.md` (5-minute setup)
- **Full Guide**: `GOOGLE-SHEETS-SETUP.md` (detailed instructions)
- **Template**: `GOOGLE-SHEETS-TEMPLATE.txt` (copy-paste ready)

## 🔧 Troubleshooting

### CSS not updating?
```bash
npm run rebuild
```

### Video not showing?
- Check that video file exists in `src/assets/`
- Run `npm run build` to copy to dist
- Check browser console for errors

### Build fails?
```bash
# Clean and reinstall
npm run clean
rm -rf node_modules
npm install
npm run build
```

## 📦 Dependencies

- **Tailwind CSS v3** - Utility-first CSS framework
- **PostCSS** - CSS transformation
- **Autoprefixer** - Vendor prefix automation
- **cpx2** - File copying utility
- **html-minifier-terser** - HTML minification (future use)

## 🎯 Features

- ✅ Custom color palette
- ✅ Google Fonts integration (Quicksand + Source Sans Pro)
- ✅ Responsive navigation with mobile menu
- ✅ Autoplay looping video hero section
- ✅ **Dynamic schedule powered by Google Sheets** 🆕
- ✅ Schedule section with event cards
- ✅ Visitor guides with icons
- ✅ Our story narrative section
- ✅ FAQ with 6 common questions
- ✅ Smooth scroll navigation
- ✅ Fully responsive design
- ✅ Static build for GitHub Pages

## 📄 License

ISC

## 🤝 Contributing

Feel free to customize this template for your own projects!

---

**Built with ❤️ and Tailwind CSS**
