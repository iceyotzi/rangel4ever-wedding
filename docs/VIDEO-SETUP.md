# Video Setup Guide

## 📹 Current Setup

Your website uses a background video in the hero section. The video is currently self-hosted in the `src/assets/` folder.

---

## ✅ Self-Hosted Video (Current Method)

**Best for:** Full control, no external dependencies

### Adding Your Video

1. **Prepare your video:**
   - Resolution: 1920x1080 (Full HD) or 1280x720 (HD)
   - Duration: 10-30 seconds (for looping)
   - File size: Under 10MB recommended
   - Format: MP4 (H.264 codec)

2. **Add to project:**
   ```bash
   # Place your video in src/assets/
   cp your-video.mp4 src/assets/hero-video.mp4
   ```

3. **Build and deploy:**
   ```bash
   npm run build
   git add .
   git commit -m "Add hero video"
   git push
   ```

### Video Compression

To reduce file size, use [HandBrake](https://handbrake.fr/):
- Preset: "Web" or "Fast 1080p30"
- Bitrate: 2-4 Mbps for 1080p
- Audio: Remove audio track (video is muted)
- Frame rate: 24-30 fps

**Pros:**
- ✅ No external dependencies
- ✅ Works offline
- ✅ Full control
- ✅ No third-party tracking

**Cons:**
- ⚠️ Increases repository size
- ⚠️ GitHub has 100MB file limit per file

---

## 🌐 Alternative: Cloudinary (External Hosting)

**Best for:** Large videos, automatic optimization, CDN delivery

### Setup

1. Sign up at [cloudinary.com](https://cloudinary.com)
   - Free tier: 25GB storage, 25GB bandwidth/month

2. Upload your video

3. Get the video URL

4. Update `src/index.html` (around line 57):
   ```html
   <source src="https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/hero-video.mp4" type="video/mp4">
   ```

**Pros:**
- ✅ Automatic optimization
- ✅ CDN delivery (fast worldwide)
- ✅ No impact on repository size
- ✅ Generous free tier

**Cons:**
- ⚠️ Requires external account
- ⚠️ Bandwidth limits on free tier

---

## 📦 Alternative: GitHub Releases

**Best for:** Very large video files (>10MB)

### Setup

1. Go to your GitHub repository
2. Click **Releases** → **Create a new release**
3. Upload your video as a release asset
4. Copy the download URL
5. Update `src/index.html`:
   ```html
   <source src="https://github.com/USERNAME/REPO/releases/download/v1.0/hero-video.mp4" type="video/mp4">
   ```

**Pros:**
- ✅ Supports files up to 2GB
- ✅ Free
- ✅ No external service needed

**Cons:**
- ⚠️ Longer URL
- ⚠️ Slightly slower than CDN

---

## 🎬 Alternative: YouTube/Vimeo Embed

**Best for:** Very long videos, existing YouTube content

### YouTube

Replace the video element in `src/index.html` with:

```html
<iframe 
    class="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1"
    frameborder="0"
    allow="autoplay; encrypted-media">
</iframe>
```

### Vimeo

```html
<iframe 
    class="absolute top-0 left-0 w-full h-full"
    src="https://player.vimeo.com/video/VIDEO_ID?autoplay=1&loop=1&muted=1&background=1"
    frameborder="0"
    allow="autoplay; fullscreen">
</iframe>
```

**Pros:**
- ✅ No file size limits
- ✅ Free
- ✅ Automatic quality adjustment

**Cons:**
- ⚠️ Shows branding (unless you pay)
- ⚠️ Requires internet connection
- ⚠️ Less control over playback

---

## 🎨 Video Specifications

### Optimal Settings

- **Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
- **Frame Rate:** 24-30 fps
- **Duration:** 10-30 seconds (for looping)
- **File Size:** Under 5MB for best performance
- **Format:** MP4 (H.264 codec)
- **Aspect Ratio:** 16:9
- **Audio:** Remove (video is muted anyway)

### Current Implementation

Your video element includes:
- ✅ Autoplay
- ✅ Loop
- ✅ Muted (required for autoplay)
- ✅ Playsinline (for iOS devices)
- ✅ Multiple format support (MP4, WebM)
- ✅ Fallback text for unsupported browsers

---

## 🔧 Troubleshooting

### Video not autoplaying?

- Ensure the video is muted (`muted` attribute)
- Add `playsinline` for iOS (already included)
- Check browser console for errors
- Some browsers block autoplay - this is expected behavior

### Video too large?

- Compress using HandBrake or online tools
- Reduce resolution to 720p
- Shorten the video duration
- Consider external hosting (Cloudinary)

### Video not looping smoothly?

- Ensure the video is encoded for web streaming
- Use a video editor to create a seamless loop
- Keep the video short (10-30 seconds)
- Check that the `loop` attribute is present

### Video not showing?

- Verify file exists: `src/assets/hero-video.mp4`
- Run `npm run build` to copy to dist
- Check browser console for errors
- Try opening the video URL directly in browser

---

## 📝 File Locations

- **Source:** `src/assets/hero-video.mp4`
- **Built:** `dist/assets/hero-video.mp4` (auto-generated)
- **HTML:** `src/index.html` (lines 45-80)

---

## 💡 Recommendations

1. **For most users:** Self-hosted video (current setup)
2. **For large videos (>10MB):** Cloudinary or GitHub Releases
3. **For very long videos:** YouTube/Vimeo embed
4. **For best performance:** Keep video under 5MB, 1080p, 20 seconds

---

## 📚 Resources

- [MDN Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [HandBrake Video Compressor](https://handbrake.fr/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Can I Use - Video Element](https://caniuse.com/video)

---

**Your hero video is ready to impress!** 🎬
