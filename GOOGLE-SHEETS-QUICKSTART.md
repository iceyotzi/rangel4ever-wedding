# 🚀 Google Sheets Quick Start

## 5-Minute Setup Guide

### Step 1: Create Google Sheet (2 minutes)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **+ Blank**
3. Name it: `RANGEL4EVER Schedule`
4. Create these columns in Row 1:

```
| title | description | date | time | order |
```

5. Add your events starting from Row 2:

```
Opening Ceremony | Join us for the grand opening celebration | Saturday, October 15 | 10:00 AM - 12:00 PM | 1
Main Event | The highlight of our celebration | Saturday, October 15 | 2:00 PM - 6:00 PM | 2
Evening Reception | Dinner and entertainment | Saturday, October 15 | 7:00 PM - 11:00 PM | 3
Farewell Brunch | A casual send-off gathering | Sunday, October 16 | 10:00 AM - 1:00 PM | 4
```

---

### Step 2: Create API Endpoint (2 minutes)

1. In your sheet, click **Extensions** → **Apps Script**
2. Delete existing code
3. Paste this code:

```javascript
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var jsonData = [];
  
  for (var i = 1; i < data.length; i++) {
    var row = {};
    for (var j = 0; j < headers.length; j++) {
      row[headers[j]] = data[i][j];
    }
    jsonData.push(row);
  }
  
  jsonData.sort(function(a, b) {
    return a.order - b.order;
  });
  
  var output = ContentService.createTextOutput(JSON.stringify(jsonData));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
```

4. Click **Deploy** → **New deployment**
5. Click gear icon ⚙️ → Choose **Web app**
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**
8. Click **Authorize access** → Choose your account
9. Click **Advanced** → **Go to [Project] (unsafe)** → **Allow**
10. **Copy the Web app URL** (looks like `https://script.google.com/macros/s/.../exec`)

---

### Step 3: Update Your Website (1 minute)

1. Open `src/index.html`
2. Find line 299 (search for `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`)
3. Replace with your Web app URL:

```javascript
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/YOUR_ID_HERE/exec';
```

4. Save the file

---

### Step 4: Build and Test

```bash
# Build your site
npm run build

# Open in browser
open dist/index.html
```

You should see your events loading from Google Sheets! 🎉

---

## ✅ Verification Checklist

- [ ] Google Sheet created with correct columns
- [ ] Sample events added to sheet
- [ ] Apps Script deployed as Web app
- [ ] Web app URL copied
- [ ] URL added to `src/index.html`
- [ ] Site built with `npm run build`
- [ ] Events display correctly in browser
- [ ] No errors in browser console (F12)

---

## 🎯 Now You Can:

1. **Edit events** in Google Sheet
2. **Refresh website** - changes appear instantly!
3. **No rebuilding needed** for content updates

---

## 🐛 Troubleshooting

### Events not loading?

1. **Check browser console** (F12) for errors
2. **Test API directly**: Paste your Web app URL in browser - should show JSON
3. **Verify URL**: Make sure you copied the entire URL including `/exec` at the end
4. **Check permissions**: Web app must be set to "Anyone" can access

### Still not working?

See the full guide: `GOOGLE-SHEETS-SETUP.md`

---

## 📝 Example Google Sheet Structure

Here's what your sheet should look like:

| title | description | date | time | order |
|-------|-------------|------|------|-------|
| Opening Ceremony | Join us for the grand opening celebration | Saturday, October 15 | 10:00 AM - 12:00 PM | 1 |
| Main Event | The highlight of our celebration | Saturday, October 15 | 2:00 PM - 6:00 PM | 2 |
| Evening Reception | Dinner and entertainment | Saturday, October 15 | 7:00 PM - 11:00 PM | 3 |
| Farewell Brunch | A casual send-off gathering | Sunday, October 16 | 10:00 AM - 1:00 PM | 4 |

---

## 🎉 That's It!

Your website now updates automatically when you edit the Google Sheet.

**No more rebuilding. No more git commits for content changes!**
