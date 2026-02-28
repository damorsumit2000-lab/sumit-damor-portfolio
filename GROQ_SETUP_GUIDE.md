# 🤖 Groq API Chatbot Setup Guide

## 🎯 Overview
This guide will help you replace the Gemini chatbot with Groq API and train it on your CV data.

---

## ✅ What's Already Done

1. ✅ Created `chatbot-groq.js` with Groq API integration
2. ✅ Trained the AI on your complete CV data
3. ✅ Configured for short, professional responses
4. ✅ Using Llama 3.3 70B model (fast and accurate)

---

## 🚀 Setup Steps (5 Minutes)

### Step 1: Update index.html (2 minutes)

Open `index.html` and find the line that loads the chatbot script (around line 1050):

**Find this:**
```html
<script src="chatbot.js"></script>
```

**Replace with:**
```html
<script src="chatbot-groq.js"></script>
```

### Step 2: Add Your Groq API Key (1 minute)

Open `chatbot-groq.js` and find line 3:

**Find this:**
```javascript
const GROQ_API_KEY = 'YOUR_GROQ_API_KEY_HERE';
```

**Replace with your actual Groq API key** (the one you provided starting with gsk_)

### Step 3: Save and Test (2 minutes)

1. Save both files
2. Commit and push to GitHub
3. Wait 1-2 minutes for GitHub Pages to deploy
4. Visit your portfolio and test the chatbot

---

## 🎨 What's Different?

### Groq vs Gemini

| Feature | Gemini | Groq |
|---------|--------|------|
| Model | Gemini 1.5 Flash | Llama 3.3 70B |
| Speed | Fast | **Ultra Fast** |
| Quality | Good | **Excellent** |
| Cost | Free tier | Free tier |
| API | Google | Groq |

### Your CV Training Data

The chatbot is trained on:
- ✅ Your complete work experience at Groww
- ✅ Education (MBA + BA Economics)
- ✅ All 3 projects
- ✅ Skills and tools
- ✅ Achievements and certificates
- ✅ Languages and interests

---

## 💬 Example Conversations

**User:** "What does Sumit do?"  
**Bot:** "Sumit is an Operations Associate at Groww, managing corporate client subscriptions and revenue operations. He handles onboarding, support, and works with product and engineering teams to improve client experience."

**User:** "What are his skills?"  
**Bot:** "Sumit has strong skills in Excel, Freshdesk, Jira, data analysis, project management, and customer retention. He's also proficient in critical thinking and market research."

**User:** "Tell me about his education"  
**Bot:** "Sumit completed his MBA in Marketing from National School of Business in Bangalore and holds a BA in Economics from IGNOU, New Delhi."

---

## 🔧 Customization Options

### Change Response Length

In `chatbot-groq.js`, find line 245:

```javascript
max_tokens: 200,  // Change this number
```

- **100 tokens** = Very short (1-2 sentences)
- **200 tokens** = Short (2-4 sentences) ← Current
- **500 tokens** = Detailed (1-2 paragraphs)

### Change AI Model

In `chatbot-groq.js`, find line 237:

```javascript
model: "llama-3.3-70b-versatile",
```

**Available Groq models:**
- `llama-3.3-70b-versatile` ← Current (best balance)
- `llama-3.1-8b-instant` (faster, less accurate)
- `mixtral-8x7b-32768` (good for long context)

### Adjust Temperature (Creativity)

In `chatbot-groq.js`, find line 246:

```javascript
temperature: 0.7,  // 0.0 = factual, 1.0 = creative
```

- **0.3** = Very factual and consistent
- **0.7** = Balanced ← Current
- **1.0** = More creative and varied

---

## 🐛 Troubleshooting

### Chatbot Not Responding?

1. **Check API Key:** Make sure you replaced `YOUR_GROQ_API_KEY_HERE`
2. **Check Console:** Press F12 and look for errors
3. **Check File Name:** Make sure `index.html` loads `chatbot-groq.js`
4. **Clear Cache:** Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Getting API Errors?

1. **Verify API Key:** Make sure it's correct and active
2. **Check Groq Status:** Visit https://console.groq.com/
3. **Check Rate Limits:** Groq has free tier limits
4. **Check Network:** Make sure you have internet connection

### Responses Too Long/Short?

Adjust `max_tokens` in the code (see Customization section above)

---

## 🔒 Security Note

**IMPORTANT:** Your API key is visible in the JavaScript file. For a production site, you should:

1. Use a backend server to hide the API key
2. Implement rate limiting
3. Add authentication
4. Monitor API usage

For a personal portfolio, the current setup is fine, but be aware of potential API abuse.

---

## 📊 API Usage Limits

**Groq Free Tier:**
- 30 requests per minute
- 14,400 requests per day
- Plenty for a personal portfolio!

**Monitor Usage:**
Visit https://console.groq.com/ to check your usage

---

## ✅ Testing Checklist

After setup, test these questions:

- [ ] "What does Sumit do?"
- [ ] "What are his skills?"
- [ ] "Tell me about his education"
- [ ] "What projects has he worked on?"
- [ ] "What are his achievements?"
- [ ] "Where does he work?"
- [ ] "What tools does he use?"
- [ ] "What languages does he speak?"

All should get accurate, short responses based on your CV!

---

## 🎉 Benefits of Groq

1. **Ultra Fast:** Responses in <1 second
2. **High Quality:** Llama 3.3 70B is very accurate
3. **Free Tier:** Generous limits for personal use
4. **Easy API:** OpenAI-compatible format
5. **Reliable:** Great uptime and performance

---

## 📚 Additional Resources

- **Groq Console:** https://console.groq.com/
- **Groq Docs:** https://console.groq.com/docs
- **API Reference:** https://console.groq.com/docs/api-reference

---

## 🚀 Next Steps

1. Follow Step 1-3 above to set up
2. Test the chatbot thoroughly
3. Customize if needed (response length, model, etc.)
4. Share your portfolio with the world!

---

## 💡 Pro Tips

1. **Keep responses short:** Users prefer quick answers
2. **Test regularly:** Make sure API key is working
3. **Monitor usage:** Check Groq console occasionally
4. **Update CV data:** Keep the training data current
5. **Add examples:** Include sample questions in your portfolio

---

## 🎯 Summary

**What You Need to Do:**
1. Change `chatbot.js` to `chatbot-groq.js` in index.html
2. Add your Groq API key to chatbot-groq.js (line 3)
3. Save, commit, push, and test!

**Time Required:** 5 minutes  
**Difficulty:** Easy  
**Result:** Fast, accurate AI chatbot trained on your CV!

---

*Your chatbot will be powered by Groq's ultra-fast Llama 3.3 70B model and trained specifically on your professional profile!* 🚀