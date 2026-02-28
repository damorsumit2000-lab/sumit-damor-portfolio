// ─── Proxy URL ────────────────────────────────────────────────────────────────
// After deploying to Vercel, replace this with your actual Vercel URL
// e.g. 'https://your-project-name.vercel.app/api/chat'
const PROXY_URL = 'https://super-snow-5572.damorsumit2000.workers.dev';

// ─── Chat state ───────────────────────────────────────────────────────────────
let conversationHistory = [];

// ─── Initialize floating chatbot ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const chatWindow = document.querySelector('.chat-window');
    const sendBtn = document.getElementById('sendBtn');
    const chatInput = document.getElementById('chatInput');

    if (chatToggle) {
        chatToggle.addEventListener('click', function () {
            chatWindow.classList.toggle('active');
            chatToggle.classList.toggle('active');
            if (chatWindow.classList.contains('active')) chatInput.focus();
        });
    }

    if (chatClose) {
        chatClose.addEventListener('click', function () {
            chatWindow.classList.remove('active');
            chatToggle.classList.remove('active');
        });
    }

    if (sendBtn) sendBtn.addEventListener('click', sendMessage);

    if (chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') sendMessage();
        });
    }
});

// ─── Floating chatbot send ────────────────────────────────────────────────────
async function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    chatInput.value = '';

    const typingIndicator = addTypingIndicator();

    try {
        const response = await getGroqResponse(message);
        typingIndicator.remove();
        addMessage(response, 'bot');
    } catch (error) {
        console.error('Chatbot Error:', error);
        typingIndicator.remove();
        addMessage('Sorry, I encountered an error. Please try again later.', 'bot');
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ─── Add message bubble ───────────────────────────────────────────────────────
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
}

// ─── Typing indicator ─────────────────────────────────────────────────────────
function addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `<div class="message-content"><span></span><span></span><span></span></div>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// ─── Call Vercel proxy (no API key exposed in browser) ────────────────────────
async function getGroqResponse(userMessage) {
    const response = await fetch(PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Proxy request failed');
    }

    const data = await response.json();
    return data.reply;
}
