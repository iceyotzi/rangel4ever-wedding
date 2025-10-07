# Documentation

Welcome to the RANGEL4EVER wedding website documentation!

## 📚 Documentation Files

### [GETTING-STARTED.md](GETTING-STARTED.md)
**Start here!** Complete guide to installation, development, and basic usage.

**Topics covered:**
- Quick start commands
- Project structure
- Available npm scripts
- Where to edit files
- Customization (colors, fonts)
- Troubleshooting common issues

---

### [DEPLOYMENT.md](DEPLOYMENT.md)
Everything you need to know about deploying your site.

**Topics covered:**
- GitHub Actions automated deployment
- Custom domain setup (rangel4ever.com)
- DNS configuration
- How the workflow works
- Monitoring deployments
- Troubleshooting deployment issues

---

### [GOOGLE-SHEETS.md](GOOGLE-SHEETS.md)
Set up dynamic content that updates without rebuilding the site.

**Topics covered:**
- Quick 5-minute setup
- Sheet structure for Schedule and FAQs
- CSV publishing method
- Benefits of dynamic content
- Troubleshooting CORS and loading issues
- Customizing the display

---

### [VIDEO-SETUP.md](VIDEO-SETUP.md)
Options for hosting and optimizing your hero video.

**Topics covered:**
- Self-hosted video (current method)
- Alternative hosting (Cloudinary, GitHub Releases)
- YouTube/Vimeo embedding
- Video specifications and compression
- Troubleshooting video issues

---

## 🚀 Quick Links

- **First time setup?** → [GETTING-STARTED.md](GETTING-STARTED.md)
- **Ready to deploy?** → [DEPLOYMENT.md](DEPLOYMENT.md)
- **Want dynamic content?** → [GOOGLE-SHEETS.md](GOOGLE-SHEETS.md)
- **Video not working?** → [VIDEO-SETUP.md](VIDEO-SETUP.md)

---

## 📁 Project Structure

```
rangel4ever-wedding/
├── src/                    # Edit these files
│   ├── index.html         # Main HTML
│   ├── input.css          # Tailwind CSS
│   └── assets/            # Media files
├── dist/                   # Built files (auto-generated)
├── docs/                   # You are here!
│   ├── README.md          # This file
│   ├── GETTING-STARTED.md
│   ├── DEPLOYMENT.md
│   ├── GOOGLE-SHEETS.md
│   └── VIDEO-SETUP.md
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml
└── README.md              # Main project README
```

---

## 🎯 Common Tasks

### Update Content
1. Edit `src/index.html`
2. Run `npm run build` (or just push - GitHub Actions will build)
3. Commit and push

### Change Colors
1. Edit `tailwind.config.js`
2. Run `npm run build`
3. Commit and push

### Update Schedule/FAQs
1. Edit your Google Sheet
2. Refresh the page
3. Done! (No rebuild needed)

### Add/Change Video
1. Place video in `src/assets/hero-video.mp4`
2. Run `npm run build`
3. Commit and push

---

## 🆘 Need Help?

1. Check the relevant documentation file above
2. Look for error messages in browser console (F12)
3. Check GitHub Actions tab for deployment errors
4. Review the troubleshooting sections in each guide

---

## 💡 Pro Tips

- **Use `npm run dev`** for local development with live server
- **Edit `src/` files only**, never edit `dist/` directly
- **GitHub Actions builds automatically** on push to main
- **Google Sheets updates instantly** without rebuilding
- **Keep videos under 10MB** for best performance

---

**Happy building!** 🎉
