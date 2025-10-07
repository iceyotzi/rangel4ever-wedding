# ⚡ Quick Start Guide

## 🎯 Essential Commands

```bash
# Development
npm run watch          # Auto-rebuild CSS on changes

# Building
npm run build          # Build everything to dist/
npm run rebuild        # Clean and rebuild from scratch

# Deployment
npm run build          # Build first
git add .              # Stage changes
git commit -m "msg"    # Commit
git push               # Deploy
```

## 📁 Where to Edit

| What to Change | Edit This File |
|----------------|----------------|
| Page content | `src/index.html` |
| Colors/fonts | `tailwind.config.js` |
| Custom CSS | `src/input.css` |
| Video file | `src/assets/hero-video.mp4` |

## 🚀 Deploy to GitHub Pages

1. Build: `npm run build`
2. Push: `git add . && git commit -m "Deploy" && git push`
3. Settings → Pages → Source: `main` branch, `/dist` folder
4. Done! Site live at `yourusername.github.io/rangel4ever`

## 📂 Project Structure

```
src/          ← Edit these files
  ├── index.html
  ├── input.css
  └── assets/

dist/         ← Deploy this folder (auto-generated)
  ├── index.html
  ├── css/output.css
  └── assets/
```

## 🎨 Custom Colors

Your color palette (in `tailwind.config.js`):
- `chocolate_cosmos` - Dark burgundy
- `cordovan` - Medium red  
- `redwood` - Bright red
- `melon` - Soft pink
- `apricot` - Peachy tone

Use in HTML: `text-redwood`, `bg-melon-900`, etc.

## 🎬 Video Setup

1. Add video: `src/assets/hero-video.mp4`
2. Build: `npm run build`
3. Video appears in hero section automatically

For external hosting, see `VIDEO-HOSTING-GUIDE.md`

## 🔧 Common Tasks

### Change navigation links
Edit `src/index.html` around line 15-40

### Update schedule
Edit `src/index.html` around line 75-130

### Modify colors
Edit `tailwind.config.js` lines 9-69

### Change fonts
Edit `tailwind.config.js` lines 71-74

### Add new section
1. Edit `src/index.html`
2. Run `npm run build`
3. Done!

## ⚠️ Important Rules

1. **Always edit `src/` files, never `dist/` files**
2. **Run `npm run build` before deploying**
3. **Commit `dist/` folder to git** (needed for GitHub Pages)
4. **Video files must be under 100MB** (GitHub limit)

## 📚 Full Documentation

- [README.md](README.md) - Complete project documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [VIDEO-HOSTING-GUIDE.md](VIDEO-HOSTING-GUIDE.md) - Video hosting options

## 🆘 Troubleshooting

**CSS not updating?**
```bash
npm run rebuild
```

**Video not showing?**
- Check file exists: `src/assets/hero-video.mp4`
- Rebuild: `npm run build`

**Site not deploying?**
- Verify GitHub Pages settings: `/dist` folder
- Wait 2-3 minutes after push
- Check Actions tab for errors

---

**Need more help?** See the full documentation files above!
