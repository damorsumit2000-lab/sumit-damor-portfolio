# 🚀 Quick Start Guide - AI Chatbot Integration

## What Was Added

Your portfolio now has a complete AI chatbot system with these files:

- ✅ `chatbot.js` - AI logic using Google Gemini API
- ✅ `chatbot.css` - Beautiful, responsive chatbot UI
- ✅ `chatbot-demo.html` - Test page to try the chatbot
- ✅ `add-chatbot-to-html.py` - Auto-integration script
- ✅ `README_CHATBOT.md` - Complete documentation
- ✅ `CHATBOT_SETUP.md` - Detailed setup instructions

## 3-Step Setup (5 minutes)

### Step 1: Get Free API Key (2 min)

1. Visit https://ai.google.dev
2. Click "Get API Key"
3. Sign in with Google
4. Create new API key
5. Copy the key

### Step 2: Add API Key (1 min)

1. Open `chatbot.js` in any text editor
2. Find line 7: `this.apiKey = 'YOUR_GEMINI_API_KEY_HERE';`
3. Replace with your key: `this.apiKey = 'your-actual-api-key-here';`
4. Save the file

### Step 3: Test & Deploy (2 min)

**Option A: Test First (Recommended)**
```bash
# Open chatbot-demo.html in your browser
open chatbot-demo.html

# Try asking questions!
# If it works, proceed to integration
```

**Option B: Auto-Integrate**
```bash
# Run the integration script
python3 add-chatbot-to-html.py

# Commit and push
git add .
git commit -m "Add AI chatbot to portfolio"
git push
```

**Option C: Manual Integration**

Add these 2 lines to `index.html` before `</body>`:
```html
<link rel="stylesheet" href="chatbot.css">
<script src="chatbot.js"></script>
```

## ✅ Verification

After deploying, you should see:
- 💬 Chat bubble in bottom-right corner
- 🎨 Matches your site's theme (light/dark)
- 🤖 AI responds to questions about your portfolio

## 🧪 Test Questions

Try asking:
- "What is Sumit's current role?"
- "Tell me about his experience"
- "What skills does he have?"
- "How can I contact him?"

## 📊 Free Tier Limits

Google Gemini Free:
- ✅ 1,000,000 tokens/day
- ✅ ~1,250 conversations/day
- ✅ No credit card needed
- ✅ Perfect for portfolios!

## 🎨 Customization

### Change Colors
Edit `chatbot.css` line 15:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
```

### Update AI Knowledge
Edit `chatbot.js` lines 11-60 to add/modify information

### Change Position
Edit `chatbot.css` line 5:
```css
bottom: 24px;  /* Distance from bottom */
right: 24px;   /* Distance from right */
```

## 🆘 Troubleshooting

**Chatbot not appearing?**
- Check browser console (F12) for errors
- Verify files are linked in index.html
- Clear cache and reload

**API errors?**
- Verify API key is correct
- Check you haven't exceeded free tier
- Ensure key has proper permissions

**Wrong responses?**
- Update `portfolioContext` in chatbot.js
- Add more specific information
- Test with different questions

## 📚 Documentation

- **README_CHATBOT.md** - Complete documentation
- **CHATBOT_SETUP.md** - Detailed setup guide
- **chatbot-demo.html** - Live testing page

## 🎯 What's Next?

1. ✅ Test the chatbot thoroughly
2. ✅ Customize colors to match your brand
3. ✅ Update AI context as you gain experience
4. ✅ Monitor API usage in Google AI Studio
5. ✅ Share your portfolio with the world!

## 💡 Pro Tips

- Keep `portfolioContext` updated with new experiences
- Test locally before deploying
- Monitor API usage to stay within free tier
- Consider backend proxy for production

## 🤝 Need Help?

- Check browser console for errors
- Review README_CHATBOT.md
- Visit https://ai.google.dev for API docs
- Test with chatbot-demo.html first

---

**Built with ❤️ using Google Gemini AI**

Ready to impress visitors with your AI-powered portfolio! 🚀
