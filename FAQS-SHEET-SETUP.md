# FAQs Google Sheet Setup

## 📋 Overview

Your site now pulls FAQs dynamically from a second tab in your Google Sheet!

---

## 🔧 Setup Steps

### Step 1: Create FAQs Tab in Your Google Sheet

1. Open your Google Sheet: `RANGEL4EVER Schedule`
2. At the bottom, click the **+** button to add a new sheet
3. Name it: **FAQs**
4. Set up the columns:

| id | question | answer |
|----|----------|--------|
| 1 | What should I bring? | Please bring a valid ID, your confirmation email, and comfortable clothing. |
| 2 | Is parking available? | Yes! Free parking is available on-site. |
| 3 | Can I bring guests? | Absolutely! Each ticket holder may bring up to two guests. |
| 4 | What if I need to cancel? | We understand plans change. Cancellations made 7 days or more in advance receive a full refund. |
| 5 | Will food be provided? | Yes! All events include complimentary refreshments. |
| 6 | How do I contact the organizers? | You can reach us at info@RANGEL4EVER.com or call (555) 123-4567. |

**Important:**
- Column names must be exactly: `id`, `question`, `answer` (lowercase)
- The `id` column determines display order (1, 2, 3...)
- Keep questions concise
- Answers can be longer

---

### Step 2: Get the FAQs Sheet GID

1. Click on the **FAQs** tab in your Google Sheet
2. Look at the URL in your browser, it will look like:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID/edit#gid=123456789
   ```
3. The number after `gid=` is your FAQs sheet GID (e.g., `123456789`)
4. **Copy this number!**

---

### Step 3: Publish the FAQs Sheet

1. Click **File** → **Share** → **Publish to web**
2. In the dropdown, select: **FAQs** (your FAQ sheet name)
3. Format: **Comma-separated values (.csv)**
4. Click **Publish**
5. Click **OK**

---

### Step 4: Update Your Website Code

1. Open `src/index.html`
2. Find line 278 (search for `SHEET_GID`):
   ```javascript
   const FAQS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2oAMBT5LlO-tU1rh_APIM5SRwQ1L7aJ49D7kdjBjLJXiF6gD8ErpYVnY4oJ5nLWvazIPl-vCwNXYl/pub?gid=SHEET_GID&output=csv';
   ```
3. Replace `SHEET_GID` with your actual GID number from Step 2:
   ```javascript
   const FAQS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS2oAMBT5LlO-tU1rh_APIM5SRwQ1L7aJ49D7kdjBjLJXiF6gD8ErpYVnY4oJ5nLWvazIPl-vCwNXYl/pub?gid=123456789&output=csv';
   ```

---

### Step 5: Build and Test

```bash
# Build the site
npm run build

# Test locally (if server is running)
# Refresh http://localhost:8080

# Or start server
npm run serve
```

---

## 📊 Sheet Structure

### Your Google Sheet Should Have 2 Tabs:

#### Tab 1: Schedule (or Sheet1)
| title | description | date | time | order |
|-------|-------------|------|------|-------|
| Event 1 | Description | Date | Time | 1 |

#### Tab 2: FAQs
| id | question | answer |
|----|----------|--------|
| 1 | Question text? | Answer text |

---

## 🎯 How It Works

1. **Two separate CSV exports:**
   - Schedule: First sheet (default)
   - FAQs: Second sheet (with `gid` parameter)

2. **Both load independently:**
   - Schedule loads into Schedule section
   - FAQs load into FAQ section
   - Each has its own loading/error states

3. **Updates are instant:**
   - Edit either sheet
   - Refresh website
   - Changes appear immediately!

---

## ✏️ Updating FAQs

### To Add a New FAQ:
1. Open your Google Sheet
2. Go to FAQs tab
3. Add a new row with: `id`, `question`, `answer`
4. Set the `id` to control order
5. Save (auto-saves)
6. Refresh your website - done!

### To Edit an FAQ:
1. Edit any cell in the FAQs tab
2. Save
3. Refresh website

### To Delete an FAQ:
1. Delete the entire row
2. Refresh website

### To Reorder FAQs:
1. Change the `id` numbers
2. Lower numbers appear first
3. Refresh website

---

## 🐛 Troubleshooting

### FAQs not loading?

1. **Check the GID:**
   - Make sure you replaced `SHEET_GID` with actual number
   - Check the URL in your browser when on FAQs tab

2. **Verify sheet is published:**
   - File → Share → Publish to web
   - Make sure FAQs sheet is selected and published as CSV

3. **Check sheet name:**
   - Sheet must be named exactly as you published it
   - Case-sensitive!

4. **Test the URL directly:**
   - Copy your FAQS_CSV_URL from the code
   - Paste in browser
   - Should show comma-separated data

5. **Check browser console (F12):**
   - Look for error messages
   - Check Network tab for the CSV request

### Schedule works but FAQs don't?

- The FAQs sheet GID is probably wrong or not published
- Double-check Step 2 and Step 3 above

---

## 📝 Example FAQs

Here are some example FAQs you can use:

```
1 | What should I bring? | Please bring a valid ID, your confirmation email, and comfortable clothing. We recommend bringing a light jacket as some areas may be air-conditioned.

2 | Is parking available? | Yes! Free parking is available on-site. Additional overflow parking is located just two blocks away with shuttle service provided.

3 | Can I bring guests? | Absolutely! Each ticket holder may bring up to two guests. Please register your guests in advance through our online portal.

4 | What if I need to cancel? | We understand plans change. Cancellations made 7 days or more in advance receive a full refund. For later cancellations, please contact our support team.

5 | Will food be provided? | Yes! All events include complimentary refreshments. The evening reception features a full dinner service. Please notify us of any dietary restrictions in advance.

6 | How do I contact the organizers? | You can reach us at info@RANGEL4EVER.com or call (555) 123-4567. Our team is available Monday through Friday, 9 AM to 5 PM.

7 | What time should I arrive? | We recommend arriving 15-30 minutes before your scheduled event time to allow for check-in and parking.

8 | Is the venue accessible? | Yes! Our venue is fully wheelchair accessible with ramps, elevators, and accessible restrooms throughout.
```

---

## 🎉 Benefits

✅ **Easy updates** - Edit FAQs without touching code
✅ **Non-technical friendly** - Anyone can update via Google Sheets
✅ **Instant changes** - Updates appear on refresh
✅ **No rebuilding** - No need to run `npm run build` for FAQ changes
✅ **Version history** - Google Sheets tracks all changes
✅ **Collaborative** - Multiple people can edit

---

## 📚 Summary

1. Create "FAQs" tab in your Google Sheet
2. Add columns: `id`, `question`, `answer`
3. Get the GID from the URL
4. Publish the FAQs sheet as CSV
5. Update `FAQS_CSV_URL` in `src/index.html` with the GID
6. Build and deploy!

**Your FAQs will now load dynamically from Google Sheets!** 🚀
