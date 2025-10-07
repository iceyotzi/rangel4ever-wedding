# Google Sheets Integration

Your website dynamically loads schedule and FAQ content from Google Sheets, allowing you to update content without rebuilding the site!

## 🚀 Quick Setup (5 Minutes)

### Step 1: Publish Your Sheet as CSV

1. Open your Google Sheet
2. Click **File** → **Share** → **Publish to web**
3. Choose the specific sheet tab (e.g., "Schedule")
4. Select **Comma-separated values (.csv)**
5. Click **Publish**
6. Copy the CSV URL

### Step 2: Update Your Website

1. Open `src/index.html`
2. Find the CSV URL constants (around line 274-278):

```javascript
const SCHEDULE_CSV_URL = 'YOUR_CSV_URL_HERE';
const FAQS_CSV_URL = 'YOUR_CSV_URL_HERE';
```

3. Replace with your published CSV URLs
4. Save the file

### Step 3: Build and Deploy

```bash
npm run build
git add .
git commit -m "Add Google Sheets integration"
git push
```

Your site will now load content from Google Sheets!

---

## 📊 Sheet Structure

### Schedule Sheet

Create a sheet with these columns:

| title | description | date | time | order |
|-------|-------------|------|------|-------|
| Opening Ceremony | Join us for the **grand opening** celebration! | Saturday, Oct 15 | 10:00 AM - 12:00 PM | 1 |
| Main Event | The *highlight* of our celebration with [live music](https://example.com) | Saturday, Oct 15 | 2:00 PM - 6:00 PM | 2 |
| Evening Reception | Dinner and entertainment | Saturday, Oct 15 | 7:00 PM - 11:00 PM | 3 |

**Required columns:**
- `title` - Event name
- `description` - Event details (supports **Markdown formatting**!)
- `date` - Event date
- `time` - Event time
- `order` - Display order (1, 2, 3, etc.)

**✨ Formatting Support:**
- Use `**bold**` for bold text
- Use `*italic*` for italic text
- Use `[link text](url)` for clickable links
- See [FORMATTING-GUIDE.md](FORMATTING-GUIDE.md) for details

### FAQs Sheet

Create a sheet with these columns:

| id | question | answer |
|----|----------|--------|
| 1 | What time should I arrive? | Please arrive **15 minutes early** for check-in. |
| 2 | Is parking available? | Yes, **free parking** is available. See our [parking map](https://maps.google.com). |
| 3 | What should I wear? | *Semi-formal attire* is recommended. Check our [dress code guide](https://example.com). |

**Required columns:**
- `id` - Display order (1, 2, 3, etc.)
- `question` - The question
- `answer` - The answer (supports **Markdown formatting**!)

**✨ Formatting Support:**
- Use `**bold**` for bold text
- Use `*italic*` for italic text
- Use `[link text](url)` for clickable links
- See [FORMATTING-GUIDE.md](FORMATTING-GUIDE.md) for details

---

## 🎯 Benefits

✅ **Update content instantly** - Edit the sheet, refresh the page  
✅ **No rebuilding needed** - Changes appear immediately  
✅ **Non-technical updates** - Anyone can edit the sheet  
✅ **No git commits** - Content changes don't require code changes  
✅ **Fast loading** - CSV method is 5-10x faster than Apps Script  

---

## 🔧 How It Works

1. **Google Sheets** stores your content
2. **Publish to web** makes it publicly accessible as CSV
3. **JavaScript** fetches the CSV when page loads
4. **Parser** converts CSV to JSON
5. **Renderer** displays the content on your page

### CSV Method vs Apps Script

This implementation uses the **CSV method** which is:
- ✅ 5-10x faster (200-400ms vs 2000ms)
- ✅ Simpler setup (no Apps Script needed)
- ✅ No authorization required
- ✅ More reliable (no script execution limits)

---

## 🔍 Troubleshooting

### Content not loading?

1. **Check browser console** (F12) for errors
2. **Verify CSV URL**: Paste it in your browser - should download a CSV file
3. **Check sheet permissions**: Must be "Anyone with the link can view"
4. **Verify column names**: Must match exactly (case-sensitive)
5. **Check for empty rows**: Remove any empty rows in your sheet

### CORS error on local testing?

This is normal when opening `file://` directly. Use one of these methods:

**Option 1: Use local server (recommended)**
```bash
npm run dev
# Open http://localhost:8080
```

**Option 2: Deploy to GitHub Pages**
```bash
npm run build
git add .
git commit -m "Test deployment"
git push
```

CORS works fine on GitHub Pages and any web server. It only blocks `file://` protocol.

### Content not updating?

- Google Sheets caches CSV for a few minutes
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Wait 2-3 minutes after editing the sheet

---

## 📝 Getting the CSV URL

### For a specific sheet tab:

1. File → Share → Publish to web
2. Select the specific sheet (e.g., "Schedule" or "FAQs")
3. Choose "Comma-separated values (.csv)"
4. Click Publish
5. Copy the URL

The URL will look like:
```
https://docs.google.com/spreadsheets/d/e/LONG_ID/pub?gid=SHEET_ID&output=csv
```

### Multiple sheets:

- Each sheet tab needs its own CSV URL
- The `gid` parameter identifies the specific sheet
- Schedule and FAQs should be separate sheets with separate URLs

---

## 🎨 Customizing the Display

### Modify Event Cards

Edit the `createEventCard()` function in `src/index.html` (around line 456) to change how events are displayed.

### Modify FAQ Cards

Edit the `createFAQCard()` function in `src/index.html` (around line 481) to change how FAQs are displayed.

### Add Loading States

The loading and error states are already implemented. Customize them by editing:
- `#schedule-loading` - Loading spinner
- `#schedule-error` - Error message
- `#faq-loading` - FAQ loading spinner
- `#faq-error` - FAQ error message

---

## 🔐 Security Notes

- ✅ CSV URLs are public (required for the site to work)
- ✅ XSS protection included (`escapeHtml()` function)
- ✅ No sensitive data should be in the sheet
- ✅ Anyone with the CSV URL can view the content

---

## 📚 Additional Resources

- [Google Sheets Publish to Web](https://support.google.com/docs/answer/183965)
- [CSV Format Specification](https://tools.ietf.org/html/rfc4180)
- See `src/index.html` lines 258-510 for implementation details

---

## 💡 Pro Tips

1. **Keep it simple**: Don't use complex formulas in published sheets
2. **Test locally**: Use `npm run dev` to test before deploying
3. **Backup your sheet**: File → Make a copy
4. **Version control**: Keep old versions of your sheet
5. **Monitor usage**: Check if the CSV URL is working periodically

---

**Your content is now dynamic and easy to update!** 🎉
