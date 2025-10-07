# Deployment Guide for RANGEL4EVER

## 🚀 Quick Deployment to GitHub Pages

### Step 1: Build Your Site
```bash
npm run build
```

This creates a production-ready version in the `dist/` folder.

### Step 2: Commit Everything
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

### Step 3: Configure GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `main`
   - Folder: `/dist` ⚠️ **Important: Select /dist, not / (root)**
5. Click **Save**

### Step 4: Wait for Deployment
- GitHub will build and deploy your site (usually takes 1-2 minutes)
- Your site will be available at: `https://yourusername.github.io/rangel4ever/`

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- ✅ You've run `npm run build`
- ✅ The `dist/` folder exists and contains:
  - `index.html`
  - `css/output.css`
  - `assets/` folder with your video
- ✅ You've tested the site locally by opening `dist/index.html` in a browser
- ✅ All changes are committed to git
- ✅ Video file is under 100MB (GitHub limit)

---

## 🔄 Updating Your Site

Every time you make changes:

1. **Edit files in `src/` folder** (not `dist/`)
2. **Rebuild:**
   ```bash
   npm run build
   ```
3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. **GitHub Pages automatically updates** (wait 1-2 minutes)

---

## 🎯 Alternative: Custom Domain

If you have a custom domain:

1. In your repository settings → Pages
2. Enter your custom domain (e.g., `rangel4ever.com`)
3. Create a `CNAME` file in `src/` folder:
   ```bash
   echo "rangel4ever.com" > src/CNAME
   ```
4. Update build script in `package.json`:
   ```json
   "build:cname": "cpx \"src/CNAME\" dist",
   "build": "npm run build:css && npm run build:html && npm run build:assets && npm run build:cname"
   ```
5. Configure DNS with your domain provider:
   - Add A records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record pointing to `yourusername.github.io`

---

## 🤖 Automated Deployment with GitHub Actions

For automatic builds on every push, create `.github/workflows/deploy.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      if: github.ref == 'refs/heads/main'
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: rangel4ever.com  # Optional: add your custom domain
```

With this setup:
- Every push to `main` automatically builds and deploys
- No need to commit the `dist/` folder
- Configure GitHub Pages to deploy from `gh-pages` branch instead

---

## 🔍 Troubleshooting

### Site shows 404 error
- Make sure you selected `/dist` folder in GitHub Pages settings, not `/` (root)
- Wait 2-3 minutes after pushing for changes to appear
- Check Actions tab for deployment status

### CSS not loading
- Verify `dist/css/output.css` exists
- Check that `index.html` references `./css/output.css` (relative path)
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Video not playing
- Ensure video file is in `dist/assets/`
- Check video file size (must be under 100MB for GitHub)
- Try opening the video URL directly: `https://yourusername.github.io/rangel4ever/assets/hero-video.mp4`
- Consider using external hosting (Cloudinary) for large videos

### Changes not appearing
- Clear browser cache
- Check that you ran `npm run build` before pushing
- Verify the `dist/` folder was committed
- Check GitHub Actions for build errors

### Repository too large
- Video files can make your repo large
- Consider using Git LFS (Large File Storage):
  ```bash
  git lfs install
  git lfs track "*.mp4"
  git add .gitattributes
  ```
- Or host videos externally (see VIDEO-HOSTING-GUIDE.md)

---

## 📊 Monitoring

After deployment, you can:

1. **Check deployment status:**
   - Go to repository → Actions tab
   - See build and deployment logs

2. **View site analytics:**
   - Add Google Analytics to `src/index.html`
   - Use GitHub's built-in traffic insights

3. **Test your site:**
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Test mobile responsiveness
   - Check different browsers

---

## 🎉 Your Site is Live!

Once deployed, share your site:
- `https://yourusername.github.io/rangel4ever/`
- Or your custom domain if configured

**Remember:** Always edit files in `src/`, then run `npm run build` before deploying!

---

## 📞 Need Help?

- Check the main [README.md](README.md) for project structure
- See [VIDEO-HOSTING-GUIDE.md](VIDEO-HOSTING-GUIDE.md) for video options
- GitHub Pages docs: https://docs.github.com/en/pages
