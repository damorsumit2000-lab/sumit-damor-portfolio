# AI Chatbot Setup Guide

## Overview
Your portfolio now has an AI-powered chatbot that can answer questions about your experience, skills, projects, and education using Google's Gemini API (free tier).

## Setup Instructions

### Step 1: Get Your Free Gemini API Key

1. Visit [Google AI Studio](https://ai.google.dev)
2. Click "Get API Key"
3. Sign in with your Google account
4. Create a new API key
5. Copy the API key

### Step 2: Add API Key to chatbot.js

1. Open `chatbot.js` file
2. Find line 7: `this.apiKey = 'YOUR_GEMINI_API_KEY_HERE';`
3. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key
4. Save the file

### Step 3: Add Chatbot to Your Website

Add these two lines to your `index.html` file, just before the closing `</body>` tag:

```html
<link rel="stylesheet" href="chatbot.css">
<script src="chatbot.js"></script>
</body>
</html>
```

### Step 4: Commit and Push

```bash
git add .
git commit -m "Integrate AI chatbot"
git push
```

## Features

✅ **Smart Responses** - Trained on your entire portfolio content
✅ **Dark Mode Support** - Automatically matches your site theme
✅ **Conversation Memory** - Remembers context within the chat session
✅ **Mobile Responsive** - Works perfectly on all devices
✅ **Free Forever** - Uses Gemini's generous free tier (1M tokens/day)

## What the Chatbot Knows

The chatbot is trained on:
- Your work experience at Groww
- Your education (MBA, BA Economics)
- All your projects
- Your skills and tools
- Your achievements and certificates
- Your contact information

## Customization

### Change Colors
Edit `chatbot.css` to match your brand colors. The chatbot uses CSS variables from your main site:
- `--secondary` - Primary chatbot color
- `--accent` - Accent color
- `--surface` - Background colors
- `--text` - Text colors

### Modify Responses
Edit the `portfolioContext` in `chatbot.js` (lines 11-60) to add or update information.

### Adjust Position
In `chatbot.css`, modify `.chatbot-container` position:
```css
.chatbot-container {
    bottom: 24px;  /* Distance from bottom */
    right: 24px;   /* Distance from right */
}
```

## Testing

1. Open your website
2. Click the chat bubble in the bottom-right corner
3. Try asking:
   - "What is Sumit's current role?"
   - "Tell me about his experience at Groww"
   - "What skills does he have?"
   - "What projects has he worked on?"

## Troubleshooting

**Chatbot not appearing?**
- Check that both CSS and JS files are linked in index.html
- Check browser console for errors (F12)

**API errors?**
- Verify your API key is correct
- Check you haven't exceeded the free tier limit
- Ensure your API key has the correct permissions

**Responses not relevant?**
- Update the `portfolioContext` in chatbot.js with more specific information

## Free Tier Limits

Google Gemini Free Tier:
- 1 million tokens per day
- 15 requests per minute
- Perfect for portfolio websites!

## Support

For issues or questions:
- Check the browser console (F12) for error messages
- Verify API key is valid at [Google AI Studio](https://ai.google.dev)
- Review the chatbot.js code for any syntax errors

---

**Note:** Never commit your API key to public repositories. Consider using environment variables or a backend proxy for production sites.
