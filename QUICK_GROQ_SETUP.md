# ⚡ Quick Groq Setup - 3 Simple Steps

## Step 1: Update index.html
Find (around line 1050):
```html
<script src="chatbot.js"></script>
```

Replace with:
```html
<script src="chatbot-groq.js"></script>
```

## Step 2: Add API Key
Open `chatbot-groq.js`, find line 3:
```javascript
const GROQ_API_KEY = 'YOUR_GROQ_API_KEY_HERE';
```

Replace with your actual Groq API key (the one starting with gsk_)

## Step 3: Deploy
1. Save both files
2. Commit and push to GitHub
3. Wait 1-2 minutes
4. Test your chatbot!

---

## ✅ What's Included

Your chatbot is already trained on:
- ✅ Work experience at Groww
- ✅ MBA + BA Economics education
- ✅ All projects (website quality study, Digital India, MERN)
- ✅ Skills (Excel, Freshdesk, Jira, etc.)
- ✅ Achievements (AAGMAN, Recycle Mania, etc.)
- ✅ Certificates and languages

---

## 🧪 Test Questions

Try these after setup:
- "What does Sumit do?"
- "What are his skills?"
- "Tell me about his education"
- "What projects has he worked on?"

---

## 🐛 Not Working?

1. Check API key is correct (line 3 in chatbot-groq.js)
2. Check index.html loads chatbot-groq.js
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console (F12) for errors

---

## 📚 Full Guide

See `GROQ_SETUP_GUIDE.md` for detailed instructions and customization options.

---

**That's it! Your AI chatbot will be powered by Groq's ultra-fast Llama 3.3 70B model!** 🚀