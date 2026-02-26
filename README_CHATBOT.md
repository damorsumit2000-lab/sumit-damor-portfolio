# 🤖 AI Chatbot for Sumit Damor Portfolio

An intelligent AI chatbot powered by Google's Gemini API that answers questions about Sumit's professional experience, skills, projects, and education.

## ✨ Features

- 🧠 **Smart AI Responses** - Trained on your complete portfolio content
- 🌓 **Dark Mode Support** - Automatically matches your site theme
- 💬 **Conversation Memory** - Maintains context throughout the chat
- 📱 **Mobile Responsive** - Perfect experience on all devices
- 🆓 **Free Forever** - Uses Gemini's generous free tier (1M tokens/day)
- 🎨 **Beautiful UI** - Matches your portfolio's design aesthetic

## 🚀 Quick Start

### Option 1: Automatic Integration (Recommended)

```bash
# Clone your repository
git clone https://github.com/damorsumit2000-lab/sumit-damor-portfolio.git
cd sumit-damor-portfolio

# Run the integration script
python3 add-chatbot-to-html.py

# Get your free API key from https://ai.google.dev
# Edit chatbot.js and add your API key on line 7

# Commit and push
git add .
git commit -m "Integrate AI chatbot"
git push
```

### Option 2: Manual Integration

1. **Add to index.html** - Insert before `</body>`:
```html
<link rel="stylesheet" href="chatbot.css">
<script src="chatbot.js"></script>
```

2. **Get API Key**:
   - Visit [Google AI Studio](https://ai.google.dev)
   - Click "Get API Key"
   - Create new API key
   - Copy the key

3. **Configure chatbot.js**:
   - Open `chatbot.js`
   - Line 7: Replace `YOUR_GEMINI_API_KEY_HERE` with your key
   - Save the file

4. **Deploy**:
```bash
git add .
git commit -m "Add AI chatbot"
git push
```

## 📚 What the Chatbot Knows

The AI assistant is trained on:

### Professional Experience
- Current role at Groww Invest-Tech Private Limited
- Responsibilities in order processing & revenue operations
- Tools and platforms used (Freshdesk, Jira, Google Sheets, etc.)

### Education
- MBA in Marketing from National School of Business
- BA in Economics from IGNOU
- Professional certificates

### Projects
- Website quality & online buying behavior study
- Digital India Movement market analysis
- MERN stack news website

### Skills
- Technical skills (Data Analysis, CRM, Digital Marketing)
- Tools proficiency
- Languages (English, Hindi, Gujarati)

### Achievements
- AAGMAN Marketing Fest winner
- Recycle Mania winner
- College fest leadership

## 🎨 Customization

### Change Colors

Edit `chatbot.css` to customize appearance:

```css
.chat-toggle {
    background: linear-gradient(135deg, #0066cc, #00ab6b);
}
```

The chatbot automatically uses your site's CSS variables:
- `--secondary` - Primary color
- `--accent` - Accent color
- `--surface` - Background
- `--text` - Text color

### Modify AI Responses

Edit `chatbot.js` lines 11-60 to update the portfolio context:

```javascript
this.portfolioContext = `
You are an AI assistant for Sumit Damor's portfolio...
[Add or modify information here]
`;
```

### Adjust Position

In `chatbot.css`:

```css
.chatbot-container {
    bottom: 24px;  /* Distance from bottom */
    right: 24px;   /* Distance from right */
}
```

## 🧪 Testing

Try these sample questions:

- "What is Sumit's current role?"
- "Tell me about his experience at Groww"
- "What skills does he have?"
- "What projects has he worked on?"
- "What is his educational background?"
- "How can I contact Sumit?"

## 📊 API Usage & Limits

### Google Gemini Free Tier

- ✅ 1,000,000 tokens per day
- ✅ 15 requests per minute
- ✅ No credit card required
- ✅ Perfect for portfolio websites

### Estimated Usage

- Average question: ~500 tokens
- Average response: ~300 tokens
- **~1,250 conversations per day** on free tier

## 🔧 Troubleshooting

### Chatbot Not Appearing

1. Check browser console (F12) for errors
2. Verify CSS and JS files are linked in index.html
3. Clear browser cache and reload

### API Errors

**"API key not valid"**
- Verify your API key is correct in chatbot.js
- Check the key has proper permissions at [Google AI Studio](https://ai.google.dev)

**"Quota exceeded"**
- You've hit the free tier limit (1M tokens/day)
- Wait 24 hours or upgrade to paid tier

**"Failed to fetch"**
- Check your internet connection
- Verify the API endpoint is accessible
- Check browser console for CORS errors

### Responses Not Relevant

- Update `portfolioContext` in chatbot.js with more specific information
- Add more details about your experience and projects
- Test with different phrasings

## 🔒 Security Best Practices

### For Development
- ✅ Use API key directly in chatbot.js
- ✅ Test locally before deploying

### For Production
- ⚠️ **Never commit API keys to public repos**
- ✅ Use environment variables
- ✅ Implement backend proxy
- ✅ Add rate limiting
- ✅ Monitor API usage

### Recommended Production Setup

```javascript
// Instead of hardcoding the API key:
const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message: userMessage })
});
```

Create a backend endpoint that:
1. Receives user messages
2. Calls Gemini API with your key
3. Returns responses
4. Implements rate limiting

## 📁 File Structure

```
sumit-damor-portfolio/
├── index.html              # Main portfolio page
├── admin.html             # Admin panel
├── chatbot.js             # Chatbot logic & AI integration
├── chatbot.css            # Chatbot styles
├── add-chatbot-to-html.py # Auto-integration script
├── CHATBOT_SETUP.md       # Setup guide
└── README_CHATBOT.md      # This file
```

## 🎯 Features Roadmap

- [ ] Voice input support
- [ ] Multi-language support
- [ ] Chat history export
- [ ] Analytics dashboard
- [ ] Custom training on uploaded documents
- [ ] Integration with contact form

## 💡 Tips

1. **Keep context updated** - Regularly update `portfolioContext` as you add new experiences
2. **Monitor usage** - Check Google AI Studio dashboard for API usage
3. **Test thoroughly** - Try various questions before deploying
4. **Customize responses** - Adjust temperature and maxOutputTokens for different response styles

## 🤝 Support

Having issues? Check:

1. [CHATBOT_SETUP.md](CHATBOT_SETUP.md) - Detailed setup instructions
2. [Google AI Studio](https://ai.google.dev) - API documentation
3. Browser console (F12) - Error messages
4. [GitHub Issues](https://github.com/damorsumit2000-lab/sumit-damor-portfolio/issues) - Report bugs

## 📄 License

This chatbot implementation is part of Sumit Damor's portfolio project.

---

**Built with ❤️ using Google Gemini AI**

For questions or feedback, contact: sumitrd22@nsb.edu.in
