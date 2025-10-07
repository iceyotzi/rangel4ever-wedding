# Fix: Site Accessible at /dist Instead of Root

## Problem
Your site is currently accessible at `rangel4ever.com/dist` instead of `rangel4ever.com`.

## Solution

### Step 1: Update GitHub Pages Settings

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/rangel4ever-wedding`
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under **Build and deployment** → **Source**:
   - Change from "Deploy from a branch" 
   - **To: "GitHub Actions"** ✅

That's it! The GitHub Actions workflow will now:
- Build your site automatically on every push
- Deploy the **contents** of `dist/` to the root of your site
- Your site will be accessible at `rangel4ever.com` (not `rangel4ever.com/dist`)

### Step 2: Commit and Push Your Changes

```bash
git add .
git commit -m "Add GitHub Actions workflow and fix CNAME deployment"
git push
```

### Step 3: Wait for Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Build and Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Your site will now be live at `rangel4ever.com`!

---

## What Changed?

### 1. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automatically builds your site on every push to `main`
- Deploys the **contents** of the `dist/` folder (not the folder itself)
- Uses the modern GitHub Pages deployment action

### 2. Updated Build Script (`package.json`)
- Added `build:cname` script to copy CNAME file to dist folder
- Ensures your custom domain is preserved during deployment

### 3. CNAME File
- Now automatically copied to `dist/` during build
- Tells GitHub Pages to serve your site at `rangel4ever.com`

---

## Benefits of This Setup

✅ **No more `/dist` in URL** - Site accessible at root domain  
✅ **Automatic deployments** - Just push to deploy  
✅ **Cleaner workflow** - No need to manually build before pushing  
✅ **Custom domain support** - CNAME file automatically included  
✅ **Build verification** - See if builds fail before deployment  

---

## Troubleshooting

### Site still shows /dist in URL
- Make sure you changed GitHub Pages source to "GitHub Actions" (not "Deploy from a branch")
- Wait 2-3 minutes for DNS to propagate
- Clear your browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Workflow fails
- Check the Actions tab for error messages
- Make sure all dependencies are in `package.json`
- Verify `npm run build` works locally

### Custom domain not working
- Verify `CNAME` file contains `rangel4ever.com`
- Check DNS settings with your domain provider
- Wait up to 24 hours for DNS propagation

---

## Next Steps

After the first successful deployment:

1. **Optional: Clean up your repo** - You can now remove `dist/` from git:
   ```bash
   # Add dist/ to .gitignore
   echo "dist/" >> .gitignore
   
   # Remove dist/ from git (but keep it locally)
   git rm -r --cached dist/
   git commit -m "Remove dist folder from version control"
   git push
   ```

2. **Update your workflow** - Just edit files in `src/`, then:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
   
   GitHub Actions will automatically build and deploy!

---

## Questions?

- Check the main [DEPLOYMENT.md](DEPLOYMENT.md) for more details
- View workflow runs in the **Actions** tab on GitHub
- See [GitHub Pages documentation](https://docs.github.com/en/pages)
