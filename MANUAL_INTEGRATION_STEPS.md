# Manual Chatbot Integration Steps

## ✅ API Key Already Added!

Your Gemini API key has been successfully added to `chatbot.js`. The chatbot is ready to use!

## 🔧 Final Step: Add to index.html

You need to add just **2 lines** to your `index.html` file.

### Option 1: Edit on GitHub (Easiest)

1. Go to: https://github.com/damorsumit2000-lab/sumit-damor-portfolio/edit/main/index.html
2. Scroll to the very bottom (line 1028)
3. Find this code:
```html
    </script>
</body>
</html>
```

4. Change it to:
```html
    </script>
    
    <!-- AI Chatbot Integration -->
    <link rel="stylesheet" href="chatbot.css">
    <script src="chatbot.js"></script>
</body>
</html>
```

5. Click "Commit changes"
6. Done! Your chatbot is now live!

### Option 2: Clone and Edit Locally

```bash
# Clone your repository
git clone https://github.com/damorsumit2000-lab/sumit-damor-portfolio.git
cd sumit-damor-portfolio

# Edit index.html
# Add these 2 lines before </body>:
#   <link rel="stylesheet" href="chatbot.css">
#   <script src="chatbot.js"></script>

# Commit and push
git add index.html
git commit -m "Integrate AI chatbot"
git push
```

### Option 3: Use the Auto-Integration Script

```bash
python3 add-chatbot-to-html.py
git add index.html
git commit -m "Integrate AI chatbot"
git push
```

## 🎯 What to Add

**Add these exact 2 lines before `</body>`:**

```html
<link rel="stylesheet" href="chatbot.css">
<script src="chatbot.js"></script>
```

**Location:** Right after the closing `</script>` tag, before `</body>`

## ✅ Verification

After adding and deploying, visit your portfolio:
- https://damorsumit2000-lab.github.io/sumit-damor-portfolio/

You should see:
- 💬 Chat bubble in bottom-right corner
- Clicking it opens the AI assistant
- AI responds to questions about your portfolio

## 🧪 Test Questions

Try asking:
- "What is Sumit's current role?"
- "Tell me about his experience at Groww"
- "What skills does he have?"
- "How can I contact him?"

## 🎨 Already Configured

✅ API key added to chatbot.js
✅ Chatbot trained on your portfolio
✅ Dark mode support enabled
✅ Mobile responsive design
✅ All files ready to go

**Just add those 2 lines and you're done!** 🚀

## 📱 Live Demo

Want to test first? Open this file in your browser:
- `chatbot-demo.html`

This lets you test the chatbot before integrating it into your main portfolio.

---

**Need help?** Check README_CHATBOT.md for full documentation.
