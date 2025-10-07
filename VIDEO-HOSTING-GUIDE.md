# Video Hosting Guide for RANGEL4EVER

## 📹 Video Embedding Options

Your website is now set up to display an autoplay, looping background video in the hero section. Here are your hosting options:

---

## ✅ **Option 1: Self-Hosted on GitHub Pages (RECOMMENDED)**

**Best for:** Full control, no external dependencies, works offline

### Steps:
1. **Prepare your video:**
   - Keep file size under 10MB for fast loading
   - Recommended resolution: 1920x1080 (Full HD) or 1280x720 (HD)
   - Recommended length: 10-30 seconds
   - Format: MP4 (H.264 codec) and WebM for best compatibility

2. **Create assets folder:**
   ```bash
   mkdir -p assets
   ```

3. **Add your video files:**
   - Place `hero-video.mp4` in the `assets/` folder
   - (Optional) Place `hero-video.webm` for better browser support
   - Place `video-poster.jpg` (a still image shown before video loads)

4. **Commit and push:**
   ```bash
   git add assets/
   git commit -m "Add hero video"
   git push
   ```

**Pros:**
- No external dependencies
- Works on GitHub Pages
- Full control over video
- No third-party tracking

**Cons:**
- Increases repository size
- GitHub has 100MB file size limit per file

---

## 🌐 **Option 2: Cloudinary (FREE tier available)**

**Best for:** Automatic optimization, CDN delivery, easy management

### Steps:
1. Sign up at [cloudinary.com](https://cloudinary.com) (free tier: 25GB storage, 25GB bandwidth/month)
2. Upload your video
3. Get the video URL
4. Update `index.html` line 48-49:
   ```html
   <source src="https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/hero-video.mp4" type="video/mp4">
   ```

**Pros:**
- Automatic video optimization
- CDN delivery (fast worldwide)
- No impact on repository size
- Free tier is generous

**Cons:**
- Requires external account
- Bandwidth limits on free tier

---

## 📦 **Option 3: GitHub Releases**

**Best for:** Large video files (>10MB)

### Steps:
1. Go to your GitHub repository
2. Click "Releases" → "Create a new release"
3. Upload your video file as a release asset
4. Copy the download URL
5. Update `index.html` with the URL:
   ```html
   <source src="https://github.com/USERNAME/REPO/releases/download/v1.0/hero-video.mp4" type="video/mp4">
   ```

**Pros:**
- Supports files up to 2GB
- Free
- No external service needed

**Cons:**
- URL is longer
- Slightly slower than CDN

---

## 🎬 **Option 4: YouTube/Vimeo Embed (Alternative)**

**Best for:** Very long videos, existing YouTube content

### For YouTube:
```html
<iframe 
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1"
    frameborder="0"
    allow="autoplay; encrypted-media">
</iframe>
```

### For Vimeo:
```html
<iframe 
    class="absolute top-0 left-0 w-full h-full"
    src="https://player.vimeo.com/video/VIDEO_ID?autoplay=1&loop=1&muted=1&background=1"
    frameborder="0"
    allow="autoplay; fullscreen">
</iframe>
```

**Pros:**
- No file size limits
- Free
- Automatic quality adjustment

**Cons:**
- Shows branding (unless you pay)
- Requires internet connection
- Less control over playback

---

## 🎨 **Video Specifications Recommendations**

### Optimal Settings:
- **Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
- **Frame Rate:** 24-30 fps
- **Duration:** 10-30 seconds (for looping)
- **File Size:** Under 5MB for best performance
- **Format:** MP4 (H.264 codec)
- **Aspect Ratio:** 16:9

### Compression Tips:
Use a tool like [HandBrake](https://handbrake.fr/) or online converters:
- Bitrate: 2-4 Mbps for 1080p
- Audio: Remove audio track (video is muted anyway)
- Preset: "Web" or "Fast 1080p30"

---

## 📝 **Current Implementation**

Your `index.html` is currently configured for **Option 1 (Self-Hosted)**.

The video section includes:
- ✅ Autoplay
- ✅ Loop
- ✅ Muted (required for autoplay in most browsers)
- ✅ Playsinline (for iOS devices)
- ✅ No controls
- ✅ Poster image (shown before video loads)
- ✅ Dark overlay for text readability
- ✅ Responsive sizing
- ✅ Fallback text for unsupported browsers

---

## 🚀 **Quick Start (Self-Hosted)**

1. Create the assets folder:
   ```bash
   mkdir assets
   ```

2. Add your video files:
   - `assets/hero-video.mp4` (required)
   - `assets/hero-video.webm` (optional, for better browser support)
   - `assets/video-poster.jpg` (optional, thumbnail image)

3. Rebuild if needed:
   ```bash
   npm run build
   ```

4. Test locally by opening `index.html` in your browser

5. Commit and deploy:
   ```bash
   git add .
   git commit -m "Add hero video"
   git push
   ```

---

## 🔧 **Troubleshooting**

### Video not autoplaying?
- Ensure the video is muted (`muted` attribute)
- Add `playsinline` for iOS
- Check browser console for errors

### Video too large?
- Compress using HandBrake or online tools
- Consider using Cloudinary for automatic optimization
- Reduce resolution to 720p

### Video not looping smoothly?
- Ensure the video is encoded for web streaming
- Use a video editor to create a seamless loop
- Keep the video short (10-30 seconds)

---

## 📚 **Additional Resources**

- [MDN Video Element Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [HandBrake Video Compressor](https://handbrake.fr/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Can I Use - Video Element](https://caniuse.com/video)

---

**Need help?** Feel free to adjust the video settings in `index.html` around line 45-60.
