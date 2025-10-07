# Google Sheets Dynamic Database Setup (CSV Method - Optimized)

This guide will help you set up Google Sheets as a dynamic database for your Schedule section, allowing you to update events without rebuilding the website.

**Note:** This site uses the optimized CSV export method for 5-10x faster loading (200-400ms vs 2000ms).

## 📋 Table of Contents

1. [Create the Google Sheet](#1-create-the-google-sheet)
2. [Set Up Sheet Structure](#2-set-up-sheet-structure)
3. [Publish the Sheet as JSON](#3-publish-the-sheet-as-json)
4. [Update Your Website](#4-update-your-website)
5. [Testing](#5-testing)
6. [Updating Events](#6-updating-events)

---

## 1. Create the Google Sheet

### Step 1.1: Create a New Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click **+ Blank** to create a new spreadsheet
3. Name it: `RANGEL4EVER Schedule`

### Step 1.2: Set Up the Structure
Create the following columns in Row 1 (headers):

| A | B | C | D | E |
|---|---|---|---|---|
| title | description | date | time | order |

### Step 1.3: Add Sample Data
Fill in your events starting from Row 2:

| title | description | date | time | order |
|-------|-------------|------|------|-------|
| Opening Ceremony | Join us for the grand opening celebration | Saturday, October 15 | 10:00 AM - 12:00 PM | 1 |
| Main Event | The highlight of our celebration | Saturday, October 15 | 2:00 PM - 6:00 PM | 2 |
| Evening Reception | Dinner and entertainment | Saturday, October 15 | 7:00 PM - 11:00 PM | 3 |
| Farewell Brunch | A casual send-off gathering | Sunday, October 16 | 10:00 AM - 1:00 PM | 4 |

**Note:** The `order` column determines the display order (1 = first, 2 = second, etc.)

---

## 2. Set Up Sheet Structure

### Important Column Descriptions:

- **title**: Event name (e.g., "Opening Ceremony")
- **description**: Brief description of the event
- **date**: Full date string (e.g., "Saturday, October 15")
- **time**: Time range (e.g., "10:00 AM - 12:00 PM")
- **order**: Display order (1, 2, 3, 4...)

### Tips:
- Keep column names exactly as shown (lowercase, no spaces)
- Don't leave empty rows between events
- The `order` field lets you control display order without moving rows

---

## 3. Publish the Sheet as CSV (Current Method - Fastest!)

### CSV Export Method (5-10x Faster!) ⭐ RECOMMENDED

This is the method currently implemented in your site.

#### Step 3.1: Publish as CSV
1. In your Google Sheet, click **File** → **Share** → **Publish to web**
2. In the dialog:
   - **Link**: Choose "Entire Document" or your specific sheet
   - **Format**: Choose **"Comma-separated values (.csv)"**
3. Click **Publish**
4. Click **OK** to confirm
5. **Copy the URL** - it looks like:
   ```
   https://docs.google.com/spreadsheets/d/1ABC...XYZ/pub?output=csv
   ```

#### Alternative: Using Google Apps Script (Slower - 2000ms)

If you prefer Apps Script, here's the code:

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
  
  // Sort by order field
  jsonData.sort(function(a, b) {
    return a.order - b.order;
  });
  
  var output = ContentService.createTextOutput(JSON.stringify(jsonData));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
```

#### Step 3.2: Deploy as Web App
1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: "Schedule API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Project Name] (unsafe)**
9. Click **Allow**
10. **Copy the Web app URL** (looks like: `https://script.google.com/macros/s/...../exec`)

#### Step 3.3: Test the API
1. Paste the URL in your browser
2. You should see JSON output like:
```json
[
  {
    "title": "Opening Ceremony",
    "description": "Join us for the grand opening celebration",
    "date": "Saturday, October 15",
    "time": "10:00 AM - 12:00 PM",
    "order": 1
  },
  ...
]
```

---

### Option B: Using a Third-Party Service (Alternative)

If you prefer not to use Apps Script, you can use services like:

1. **SheetDB** (https://sheetdb.io) - Free tier available
2. **Sheet.best** (https://sheet.best) - Free tier available
3. **Sheety** (https://sheety.co) - Free tier available

These services provide a REST API endpoint for your Google Sheet.

---

## 4. Update Your Website

Now we'll modify your website to fetch data from Google Sheets instead of using hardcoded HTML.

### Step 4.1: Update index.html

The JavaScript code will be added to your `src/index.html` file. See the updated file for implementation details.

### Step 4.2: Add Loading State

The schedule section will show a loading message while fetching data from Google Sheets.

### Step 4.3: Add Error Handling

If the API fails, the site will fall back to showing a helpful error message.

---

## 5. Testing

### Local Testing:
1. Build your site: `npm run build`
2. Open `dist/index.html` in a browser
3. Check the browser console (F12) for any errors
4. Verify events load from Google Sheets

### Test Checklist:
- ✅ Events display correctly
- ✅ Events are in the right order
- ✅ Loading state appears briefly
- ✅ No console errors
- ✅ Styling looks correct

---

## 6. Updating Events

### To Add a New Event:
1. Open your Google Sheet
2. Add a new row with event details
3. Set the `order` field
4. Refresh your website - changes appear immediately!

### To Edit an Event:
1. Open your Google Sheet
2. Edit any cell
3. Refresh your website - changes appear immediately!

### To Delete an Event:
1. Open your Google Sheet
2. Delete the entire row
3. Refresh your website - changes appear immediately!

### To Reorder Events:
1. Open your Google Sheet
2. Change the `order` numbers
3. Refresh your website - changes appear immediately!

---

## 🔒 Security Considerations

### Public Access:
- The Google Apps Script is publicly accessible
- Anyone with the URL can read your schedule data
- This is fine for public event information
- Don't put sensitive data in the sheet

### Rate Limits:
- Google Apps Script has usage quotas
- Free tier: ~20,000 calls per day
- More than enough for a public website

---

## 🎨 Customization

### Add More Fields:
You can add more columns to your sheet:
- `location`: Event location
- `image_url`: Event image
- `registration_link`: Sign-up URL
- `capacity`: Max attendees

Then update the JavaScript to display these fields.

### Styling:
The events maintain your custom color scheme:
- `chocolate_cosmos` for headings
- `cordovan` for descriptions
- `redwood` for dates/times

---

## 🐛 Troubleshooting

### Events not loading?
1. Check browser console (F12) for errors
2. Verify the API URL is correct
3. Test the API URL directly in browser
4. Check that sheet is published with "Anyone" access

### Wrong order?
- Check the `order` column values
- Make sure they're numbers, not text
- Verify no empty rows in the sheet

### Styling broken?
- Run `npm run rebuild`
- Clear browser cache (Cmd+Shift+R)
- Check that CSS classes match your theme

### CORS errors?
- Google Apps Script handles CORS automatically
- If using a third-party service, check their CORS settings

---

## 📊 Advanced: Multiple Sheets

You can create separate sheets for different sections:
- Sheet 1: "Schedule" (events)
- Sheet 2: "FAQ" (questions and answers)
- Sheet 3: "Visitor Guides" (guide information)

Each sheet can have its own Apps Script endpoint!

---

## 🔄 Deployment

After setting up Google Sheets integration:

1. Build: `npm run build`
2. Test locally: Open `dist/index.html`
3. Commit: `git add . && git commit -m "Add Google Sheets integration"`
4. Push: `git push`
5. Your live site now updates automatically when you edit the sheet!

---

## 📝 Summary

**What You've Accomplished:**
- ✅ Created a Google Sheet database
- ✅ Published it as a REST API
- ✅ Connected your website to fetch data dynamically
- ✅ Can now update events without rebuilding the site!

**To Update Events:**
1. Edit Google Sheet
2. Refresh website
3. Done! 🎉

No more rebuilding, no more git commits for content changes!

---

## 🆘 Need Help?

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- Check browser console for error messages
