# Local Testing Guide

## ⚠️ Important: CORS Limitation

When you open `dist/index.html` directly in your browser (`file://`), you'll see a CORS error:

```
Access to fetch at 'https://docs.google.com/...' from origin 'null' has been blocked by CORS policy
```

**This is normal and expected!** It only happens when testing locally with `file://` protocol.

## ✅ Your Site WILL Work When Deployed

Once deployed to GitHub Pages (or any web server), the CORS error will disappear because:
- GitHub Pages serves files over `https://`
- Google Sheets allows requests from `http://` and `https://` origins
- Google Sheets blocks requests from `file://` origins (local files)

---

## 🧪 Testing Options

### Option 1: Use Local Web Server (Recommended)

I've added a simple HTTP server to your project:

```bash
# Build and serve (one command)
npm run dev

# Or separately:
npm run build
npm run serve
```

Then open: **http://localhost:8080**

**Benefits:**
- ✅ Tests exactly like production
- ✅ No CORS errors
- ✅ Fast and simple
- ✅ Auto-refresh available

---

### Option 2: Deploy to GitHub Pages First

Skip local testing and deploy directly:

```bash
npm run build
git add .
git commit -m "Deploy with Google Sheets integration"
git push
```

Then test on your live site: `https://yourusername.github.io/rangel4ever/`

**Benefits:**
- ✅ Tests in real production environment
- ✅ No local server needed
- ✅ Share with others immediately

---

### Option 3: Test Without Google Sheets

To verify the HTML/CSS works locally without the API call, you can temporarily disable the Google Sheets integration:

1. Open `src/index.html`
2. Comment out the `loadSchedule()` call (line 456):
   ```javascript
   // loadSchedule();  // Temporarily disabled for local testing
   ```
3. Build: `npm run build`
4. Open `dist/index.html` directly

This lets you test the design without the CORS issue.

---

## 🎯 Recommended Workflow

### For Development:
```bash
# Start local server
npm run dev

# Open http://localhost:8080
# Make changes to src/
# Rebuild and refresh browser
```

### For Deployment:
```bash
# Build for production
npm run build

# Deploy to GitHub Pages
git add .
git commit -m "Update site"
git push
```

---

## 📊 Why CORS Happens

| Environment | Protocol | Google Sheets CORS | Works? |
|-------------|----------|-------------------|--------|
| Local file | `file://` | ❌ Blocked | ❌ No |
| Local server | `http://localhost` | ✅ Allowed | ✅ Yes |
| GitHub Pages | `https://username.github.io` | ✅ Allowed | ✅ Yes |
| Any web host | `http://` or `https://` | ✅ Allowed | ✅ Yes |

**Bottom line:** CORS only blocks `file://` protocol. Any web server (including GitHub Pages) works fine!

---

## 🚀 Quick Deploy & Test

The fastest way to see it working:

```bash
# 1. Build
npm run build

# 2. Deploy
git add .
git commit -m "Add Google Sheets integration"
git push

# 3. Wait 1-2 minutes for GitHub Pages to deploy

# 4. Visit your site
# https://yourusername.github.io/rangel4ever/
```

**Your site will work perfectly on GitHub Pages!** 🎉

---

## 💡 Pro Tip

Use the local server (`npm run dev`) during development, then deploy to GitHub Pages for final testing and production. This gives you the best of both worlds:

- Fast local development with live reload
- Real production testing on GitHub Pages
- No CORS issues in either environment

---

## 🆘 Still Have Issues?

If you see CORS errors on GitHub Pages (not locally), check:

1. ✅ Sheet is published as CSV (File → Share → Publish to web)
2. ✅ Sheet is set to "Anyone with the link can view"
3. ✅ CSV URL is correct in `src/index.html`
4. ✅ You've rebuilt: `npm run build`
5. ✅ Changes are pushed to GitHub

The CORS error on `file://` is expected and not a problem for your deployed site!
