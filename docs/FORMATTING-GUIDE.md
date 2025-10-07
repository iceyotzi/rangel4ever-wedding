# Formatting Guide for Google Sheets Content

Your website now supports **Markdown formatting** in Google Sheets! This means you can use bold, italics, links, and line breaks in your Schedule and FAQ content.

## 📝 Supported Formatting

### Bold Text
**In Google Sheet:** `**bold text**`  
**Result:** **bold text**

**Example:**
```
Please arrive **15 minutes early** for check-in.
```

---

### Italic Text
**In Google Sheet:** `*italic text*`  
**Result:** *italic text*

**Example:**
```
Dress code is *semi-formal attire*.
```

---

### Links
**In Google Sheet:** `[link text](https://example.com)`  
**Result:** [link text](https://example.com) (clickable, opens in new tab)

**Example:**
```
See our [parking map](https://maps.google.com) for directions.
```

---

### Line Breaks
**In Google Sheet:** Press `Alt+Enter` (Windows) or `Option+Enter` (Mac) to add a line break within a cell

**Example:**
```
First line of text
Second line of text
```

---

### Bullet Lists
**In Google Sheet:** Start each line with `- ` or `* ` (dash/asterisk + space)

**Example:**
```
Parking is available at:
- Main entrance (Lot A)
- Side entrance (Lot B)
- Street parking nearby
```

**Result:**
Parking is available at:
• Main entrance (Lot A)
• Side entrance (Lot B)
• Street parking nearby

---

### Numbered Lists
**In Google Sheet:** Start each line with `1. `, `2. `, etc.

**Example:**
```
Please follow these steps:
1. Check in at the front desk
2. Receive your name tag
3. Proceed to the main hall
```

**Result:**
Please follow these steps:
1. Check in at the front desk
2. Receive your name tag
3. Proceed to the main hall

---

## 🎨 Combining Formats

You can combine multiple formats in the same text:

**Example 1: Bold + Italic + Links**
```
**Important:** Please RSVP by *October 1st*. Visit our [RSVP page](https://example.com) for more details.
```

**Result:**
**Important:** Please RSVP by *October 1st*. Visit our [RSVP page](https://example.com) for more details.

**Example 2: Lists with Bold and Links**
```
What to bring:
- **Valid ID** for check-in
- Your [e-ticket](https://example.com)
- *Optional:* Camera for photos
```

**Result:**
What to bring:
• **Valid ID** for check-in
• Your [e-ticket](https://example.com)
• *Optional:* Camera for photos

---

## 📊 Examples for Your Sheets

### Schedule Sheet Example

| title | description | date | time | order |
|-------|-------------|------|------|-------|
| Opening Ceremony | Join us for the **grand opening** celebration! See the [venue map](https://example.com) for details. | Saturday, Oct 15 | 10:00 AM - 12:00 PM | 1 |
| Main Event | The *highlight* of our celebration with **live entertainment** and dinner. | Saturday, Oct 15 | 2:00 PM - 6:00 PM | 2 |

### FAQ Sheet Example

| id | question | answer |
|----|----------|--------|
| 1 | What should I wear? | Please wear **semi-formal attire**. For more details, see our [dress code guide](https://example.com). *Note: The venue will be air-conditioned.* |
| 2 | Is parking available? | Yes! **Free parking** is available at:<br>- Main entrance (Lot A)<br>- Side entrance (Lot B)<br>View our [parking map](https://maps.google.com) for directions. |
| 3 | What should I bring? | Please bring the following:<br>1. **Valid photo ID**<br>2. Your [e-ticket](https://example.com)<br>3. *Optional:* Camera for photos |

**Note:** Use `Alt+Enter` (Windows) or `Option+Enter` (Mac) to create line breaks in your Google Sheet cells.

---

## 🔒 Security Features

The Markdown parser includes security features:
- ✅ XSS protection (HTML is escaped first)
- ✅ Links open in new tabs with `rel="noopener noreferrer"`
- ✅ Only safe Markdown syntax is supported
- ✅ No raw HTML is allowed

---

## 🎨 Link Styling

Links automatically get styled with:
- Red color (`text-redwood`)
- Hover effect (changes to `text-cordovan`)
- Underline
- Bold font weight

You can see this in action when you add links to your content!

---

## ✏️ How to Edit Your Google Sheet

### Adding Formatting

1. Open your Google Sheet
2. Click on the cell you want to edit
3. Type your text with Markdown syntax:
   - `**text**` for bold
   - `*text*` for italic
   - `[text](url)` for links
4. Press Enter to save
5. Refresh your website to see the changes!

### Adding Line Breaks

1. Click on the cell
2. Type your first line
3. Press `Alt+Enter` (Windows) or `Option+Enter` (Mac)
4. Type your second line
5. Press Enter to save

---

## 🧪 Testing Your Formatting

### Test Locally
```bash
npm run dev
# Open http://localhost:8080
```

### Test on Live Site
1. Edit your Google Sheet with Markdown
2. Wait 2-3 minutes (Google Sheets caches CSV)
3. Hard refresh your website: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
4. Check that formatting appears correctly

---

## 🔍 Troubleshooting

### Formatting not showing?

**Check your syntax:**
- Bold: `**text**` (two asterisks on each side)
- Italic: `*text*` (one asterisk on each side)
- Links: `[text](url)` (square brackets for text, parentheses for URL)

**Common mistakes:**
- ❌ `*bold*` → Should be `**bold**`
- ❌ `[link] (url)` → No space: `[link](url)`
- ❌ `**bold*` → Must have matching asterisks: `**bold**`

### Links not clickable?

- Make sure URL includes `http://` or `https://`
- Example: `[click here](https://example.com)` ✅
- Not: `[click here](example.com)` ❌

### Line breaks not working?

- Use `Alt+Enter` (Windows) or `Option+Enter` (Mac) within the cell
- Don't just type `\n` - it won't work

### Changes not appearing?

- Google Sheets caches CSV for a few minutes
- Hard refresh your browser: `Cmd+Shift+R` or `Ctrl+Shift+R`
- Wait 2-3 minutes after editing the sheet

---

## 📚 Markdown Reference

| Format | Syntax | Result |
|--------|--------|--------|
| Bold | `**text**` | **text** |
| Italic | `*text*` | *text* |
| Link | `[text](url)` | [text](url) |
| Line break | `Alt+Enter` in cell | New line |
| Bullet list | `- item` or `* item` | • item |
| Numbered list | `1. item` | 1. item |
| Bold + Italic | `***text***` | ***text*** |

---

## 💡 Pro Tips

1. **Keep it simple:** Don't overuse formatting - use it for emphasis
2. **Test first:** Try formatting on one FAQ, then check the website
3. **Use links wisely:** Link to helpful resources, maps, forms, etc.
4. **Line breaks:** Use sparingly for better readability
5. **Bold for emphasis:** Use bold for important information like dates, times, requirements

---

## 🎯 Real-World Examples

### Example 1: Important Notice
```
**Please note:** The ceremony will start **promptly at 2:00 PM**. 
*Latecomers may be seated during a break.*
```

### Example 2: With Link
```
RSVP by **October 1st** using our [online form](https://forms.google.com/your-form).
```

### Example 3: Multi-line Answer with List
```
Parking is available at:
- **Lot A:** Main entrance (free)
- **Lot B:** Side entrance (free)
- Street parking nearby

See our [parking map](https://maps.google.com) for details.
```

### Example 4: Contact Information
```
Questions? Contact our coordinator at [events@example.com](mailto:events@example.com) 
or call **555-1234**.
```

---

## ✅ Quick Checklist

Before publishing your formatted content:

- [ ] Test bold formatting: `**text**`
- [ ] Test italic formatting: `*text*`
- [ ] Test links: `[text](https://url.com)`
- [ ] Verify links include `http://` or `https://`
- [ ] Check line breaks display correctly
- [ ] Hard refresh browser to see changes
- [ ] Test on mobile devices

---

**Your content is now rich and engaging!** 🎉

For more information, see:
- [GOOGLE-SHEETS.md](GOOGLE-SHEETS.md) - Google Sheets setup
- [GETTING-STARTED.md](GETTING-STARTED.md) - Development guide
