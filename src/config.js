// ============================================
// RANGEL4EVER Configuration
// ============================================

// Google Sheets API Configuration
// Replace this URL with your Google Apps Script Web App URL
// See GOOGLE-SHEETS-SETUP.md for step-by-step instructions
const CONFIG = {
    // Your Google Apps Script Web App URL
    // Example: 'https://script.google.com/macros/s/AKfycbx.../exec'
    googleSheetsApiUrl: 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE',
    
    // Enable/disable Google Sheets integration
    // Set to false to use fallback static data
    useGoogleSheets: true,
    
    // Fallback data if Google Sheets fails or is disabled
    fallbackSchedule: [
        {
            title: 'Opening Ceremony',
            description: 'Join us for the grand opening celebration',
            date: 'Saturday, October 15',
            time: '10:00 AM - 12:00 PM',
            order: 1
        },
        {
            title: 'Main Event',
            description: 'The highlight of our celebration',
            date: 'Saturday, October 15',
            time: '2:00 PM - 6:00 PM',
            order: 2
        },
        {
            title: 'Evening Reception',
            description: 'Dinner and entertainment',
            date: 'Saturday, October 15',
            time: '7:00 PM - 11:00 PM',
            order: 3
        },
        {
            title: 'Farewell Brunch',
            description: 'A casual send-off gathering',
            date: 'Sunday, October 16',
            time: '10:00 AM - 1:00 PM',
            order: 4
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
