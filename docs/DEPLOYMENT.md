# Deployment Guide

## 🚀 Automated Deployment with GitHub Actions

Your site is configured to deploy automatically using GitHub Actions!

### Initial Setup

1. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment" → "Source"
   - Select: **GitHub Actions** ✅

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Deploy site"
   git push
   ```

3. **Watch it deploy:**
   - Go to the **Actions** tab in your repository
   - See the "Build and Deploy to GitHub Pages" workflow running
   - Wait 1-2 minutes for completion

4. **Your site is live!**
   - Visit `https://rangel4ever.com` (or your GitHub Pages URL)
   - No more `/dist` in the URL!

---

## 🔄 Updating Your Site

Every time you make changes:

1. **Edit files in `src/` folder** (not `dist/`)
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. **GitHub Actions automatically builds and deploys** (wait 1-2 minutes)

That's it! No manual building required.

---

## 🎯 Custom Domain Setup

Your site is already configured for `rangel4ever.com`.

### DNS Configuration

Configure these DNS records with your domain provider:

**Option A: A Records (recommended)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Option B: CNAME Record**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### Verify Custom Domain

1. In GitHub Settings → Pages
2. Enter your custom domain: `rangel4ever.com`
3. Wait for DNS check to pass (can take up to 24 hours)
4. Enable "Enforce HTTPS" once DNS is verified

The `CNAME` file is automatically included in your build, so your custom domain will work correctly.

---

## 🤖 How GitHub Actions Works

The workflow (`.github/workflows/deploy.yml`) does the following:

1. **Triggers** on every push to `main` branch
2. **Checks out** your code
3. **Installs** Node.js and dependencies
4. **Builds** your site with `npm run build`
5. **Deploys** the contents of `dist/` to GitHub Pages

### Benefits

✅ **Automatic deployments** - Just push to deploy  
✅ **No manual builds** - GitHub Actions handles it  
✅ **Clean URLs** - No `/dist` in the URL  
✅ **Custom domain support** - CNAME file included  
✅ **Build verification** - See if builds fail before deployment  
✅ **Cleaner repo** - Can exclude `dist/` from git (optional)

---

## 📊 Monitoring

### Check Deployment Status

1. Go to repository → **Actions** tab
2. See all workflow runs
3. Click on a run to see detailed logs
4. Green checkmark = successful deployment

### View Site Analytics

- Add Google Analytics to `src/index.html`
- Use GitHub's built-in traffic insights (Settings → Insights → Traffic)

---

## 🔍 Troubleshooting

### Site shows 404 error
- Verify GitHub Pages source is set to "GitHub Actions"
- Check Actions tab for deployment errors
- Wait 2-3 minutes after pushing for changes to appear

### CSS not loading
- Check Actions tab for build errors
- Verify `dist/css/output.css` is created during build
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Video not playing
- Ensure video file is in `src/assets/`
- Check video file size (must be under 100MB)
- Try opening the video URL directly
- See `docs/VIDEO-SETUP.md` for alternatives

### Changes not appearing
- Clear browser cache
- Check GitHub Actions for build errors
- Verify you pushed to the `main` branch
- Wait 2-3 minutes for deployment

### Workflow fails
- Check the Actions tab for error messages
- Verify `npm run build` works locally
- Make sure all dependencies are in `package.json`
- Check that Node.js version is compatible (workflow uses Node 20)

### Custom domain not working
- Verify DNS records are configured correctly
- Wait up to 24 hours for DNS propagation
- Check that `CNAME` file contains correct domain
- Verify domain in GitHub Pages settings

---

## 🎉 Your Site is Live!

Once deployed, share your site:
- `https://rangel4ever.com` (your custom domain)
- Or `https://yourusername.github.io/rangel4ever-wedding/`

**Remember:** Just edit files in `src/`, commit, and push. GitHub Actions handles the rest!

---

## 📞 Need Help?

- Check the [GETTING-STARTED.md](GETTING-STARTED.md) guide
- See [GitHub Pages documentation](https://docs.github.com/en/pages)
- See [GitHub Actions documentation](https://docs.github.com/en/actions)
