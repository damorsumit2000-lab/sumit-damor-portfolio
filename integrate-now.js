// Auto-integration script for chatbot
// This script will automatically add chatbot CSS and JS to your page

(function() {
    // Check if chatbot is already loaded
    if (document.getElementById('chatbot-container')) {
        console.log('✅ Chatbot already integrated!');
        return;
    }

    // Add chatbot CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'chatbot.css';
    document.head.appendChild(cssLink);

    // Add chatbot JS
    const script = document.createElement('script');
    script.src = 'chatbot.js';
    script.onload = function() {
        console.log('✅ Chatbot successfully loaded!');
    };
    document.body.appendChild(script);

    console.log('🤖 Chatbot integration initiated...');
})();
