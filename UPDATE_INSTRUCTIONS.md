# Instructions to Move AI Assistant Above "About Me"

## Changes Needed in index.html

### 1. Find the AI Assistant Section (currently around line 724-730)
```html
<div class="section">
    <h2>💬 AI Assistant</h2>
    <p style="text-align: center; color: var(--text-secondary); margin-bottom: 30px;">
        Have questions about my experience, skills, or projects? Chat with my AI assistant for instant answers!
    </p>
    <div id="chatbot-inline-container"></div>
</div>
```

### 2. Move it to BEFORE the "About Me" section (around line 684)

The new order should be:
1. Header (name, subtitle, contact info)
2. **AI Assistant** ← MOVE HERE
3. About Me
4. Achievements
5. Languages

### 3. Update the AI Assistant section styling to match the website

Replace the current AI Assistant section with this enhanced version:

```html
<div class="section ai-assistant-section">
    <h2>Ask Me Anything</h2>
    <p class="ai-intro">Have questions about my experience, skills, or projects? Chat with my AI assistant below for instant, detailed answers about my portfolio!</p>
    <div class="ai-container">
        <div id="chatbot-inline-container"></div>
    </div>
</div>
```

### 4. Add these styles to the `<style>` section (before `</style>` tag):

```css
/* AI Assistant Section Styling */
.ai-assistant-section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 60px;
    transition: all 0.3s ease;
}

.ai-assistant-section:hover {
    box-shadow: 0 8px 24px var(--shadow-hover);
}

.ai-assistant-section h2 {
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 16px;
    background: linear-gradient(135deg, var(--secondary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.ai-intro {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1.05em;
    margin-bottom: 32px;
    line-height: 1.6;
}

.ai-container {
    background: var(--bg);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--border);
}

/* Responsive AI Section */
@media (max-width: 768px) {
    .ai-assistant-section {
        padding: 24px;
    }
    
    .ai-assistant-section h2 {
        font-size: 1.8em;
    }
}
```

### 5. Final Structure

After the changes, the home page structure should be:

```html
<div class="page active" id="home">
    <div class="header">
        <!-- Name, subtitle, contact -->
    </div>

    <!-- NEW POSITION: AI Assistant -->
    <div class="section ai-assistant-section">
        <h2>Ask Me Anything</h2>
        <p class="ai-intro">...</p>
        <div class="ai-container">
            <div id="chatbot-inline-container"></div>
        </div>
    </div>

    <!-- About Me -->
    <div class="section">
        <h2>About Me</h2>
        ...
    </div>

    <!-- Achievements -->
    <div class="section">
        <h2>Achievements</h2>
        ...
    </div>

    <!-- Languages -->
    <div class="section">
        <h2>Languages</h2>
        ...
    </div>
</div>
```

## Result

The AI Assistant will now:
- ✅ Appear right after the header, before "About Me"
- ✅ Have a beautiful card-style design matching the website
- ✅ Feature a gradient title
- ✅ Include hover effects
- ✅ Be fully responsive
- ✅ Match the dark/light theme
- ✅ Look like a natural part of the website design
