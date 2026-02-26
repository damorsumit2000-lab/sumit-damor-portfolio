// AI Chatbot Widget for Sumit Damor Portfolio
// Uses Google Gemini API (Free Tier)

class PortfolioChatbot {
    constructor() {
        this.apiKey = 'YOUR_GEMINI_API_KEY_HERE'; // Replace with your actual API key
        this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        this.conversationHistory = [];
        this.isOpen = false;
        this.isTyping = false;
        
        // Portfolio context - trained on your website content
        this.portfolioContext = `
You are an AI assistant for Sumit Damor's portfolio website. You should answer questions about Sumit professionally and helpfully.

ABOUT SUMIT DAMOR:
- Current Role: Order Processing & Revenue Operations Associate at Groww Invest-Tech Private Limited (July 2024 - Present)
- Location: Bangalore, India
- Education: MBA in Marketing from National School of Business (2022-Present), BA in Economics from IGNOU (2019-2022)
- Contact: Email: sumitrd22@nsb.edu.in, Phone: (+91) 82001-68197
- LinkedIn: https://linkedin.com/in/sumit-damor-918b33184

WORK EXPERIENCE:
At Groww (July 2024 - Present):
- Manages end-to-end corporate client tickets for Groww Cloud subscriptions
- Supports brokers, companies, and proprietary traders across onboarding, activation, and operations
- Validates corporate onboarding requests including documentation and account verification
- Primary support contact for corporate clients, resolving execution issues, system errors, connectivity problems
- Supports revenue operations by monitoring subscription usage, renewals, and cancellations
- Tools: Groww Cloud, Freshdesk, Jira, Google Sheets, Internal OMS

SKILLS:
- Technical: Data Analysis, Process Optimization, CRM Systems, Digital Marketing
- Tools: Freshdesk, Jira, Google Sheets, Tableau, JavaScript, ReactJS, ExpressJS, NodeJS
- Languages: English (Professional), Hindi (Native), Gujarati (Native)

PROJECTS:
1. Website Quality & Online Buying Behavior Study (Jan-Mar 2024)
2. Digital India Movement Market Analysis (Feb-Mar 2022) - Used Tableau for UPI platform analysis
3. MERN Stack News Website (Nov-Dec 2021) - Deployed on Heroku

ACHIEVEMENTS:
- Won AAGMAN Marketing Fest at NSB
- Won Recycle Mania product design event
- Led team for annual college fest

CERTIFICATES:
- Digital Marketing by Curtin University
- Customer Relationship Management for Marketers by Curtin University
- Introduction to Project Management

Answer questions naturally and conversationally. If asked about something not in this context, politely say you don't have that information but can help with questions about Sumit's experience, skills, education, or projects.
`;
        
        this.init();
    }
    
    init() {
        this.createChatWidget();
        this.attachEventListeners();
        this.loadChatHistory();
    }
    
    createChatWidget() {
        const chatHTML = `
            <div id="chatbot-container" class="chatbot-container">
                <button id="chat-toggle" class="chat-toggle" aria-label="Toggle chat">
                    <svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span class="notification-badge" id="notification-badge">1</span>
                </button>
                
                <div id="chat-window" class="chat-window">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <h3>Ask about Sumit</h3>
                            <p class="chat-status">AI Assistant • Online</p>
                        </div>
                        <button id="chat-close" class="chat-close-btn" aria-label="Close chat">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    
                    <div id="chat-messages" class="chat-messages">
                        <div class="message bot-message">
                            <div class="message-content">
                                <p>👋 Hi! I'm Sumit's AI assistant. Ask me anything about his experience, skills, projects, or education!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="chat-input-container">
                        <input 
                            type="text" 
                            id="chat-input" 
                            class="chat-input" 
                            placeholder="Ask about Sumit's experience..."
                            autocomplete="off"
                        />
                        <button id="chat-send" class="chat-send-btn" aria-label="Send message">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatHTML);
    }
    
    attachEventListeners() {
        const toggleBtn = document.getElementById('chat-toggle');
        const closeBtn = document.getElementById('chat-close');
        const sendBtn = document.getElementById('chat-send');
        const input = document.getElementById('chat-input');
        
        toggleBtn.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.toggleChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('chatbot-container');
        const badge = document.getElementById('notification-badge');
        
        container.classList.toggle('open');
        
        if (this.isOpen) {
            badge.style.display = 'none';
            document.getElementById('chat-input').focus();
        }
    }
    
    async sendMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        
        if (!message || this.isTyping) return;
        
        // Add user message
        this.addMessage(message, 'user');
        input.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Call Gemini API
            const response = await this.callGeminiAPI(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'bot');
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
            console.error('Chatbot error:', error);
        }
    }
    
    async callGeminiAPI(userMessage) {
        // Build conversation context
        const conversationContext = this.conversationHistory
            .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
            .join('\n');
        
        const fullPrompt = `${this.portfolioContext}\n\nConversation History:\n${conversationContext}\n\nUser: ${userMessage}\n\nAssistant:`;
        
        const requestBody = {
            contents: [{
                parts: [{
                    text: fullPrompt
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 500,
            }
        };
        
        const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const data = await response.json();
        const botResponse = data.candidates[0].content.parts[0].text;
        
        // Save to conversation history
        this.conversationHistory.push({ role: 'user', content: userMessage });
        this.conversationHistory.push({ role: 'bot', content: botResponse });
        
        // Keep only last 10 messages to manage context size
        if (this.conversationHistory.length > 10) {
            this.conversationHistory = this.conversationHistory.slice(-10);
        }
        
        this.saveChatHistory();
        
        return botResponse;
    }
    
    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${this.escapeHtml(text)}</p>
            </div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    showTypingIndicator() {
        this.isTyping = true;
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    hideTypingIndicator() {
        this.isTyping = false;
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    saveChatHistory() {
        localStorage.setItem('chatHistory', JSON.stringify(this.conversationHistory));
    }
    
    loadChatHistory() {
        const saved = localStorage.getItem('chatHistory');
        if (saved) {
            this.conversationHistory = JSON.parse(saved);
        }
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.portfolioChatbot = new PortfolioChatbot();
    });
} else {
    window.portfolioChatbot = new PortfolioChatbot();
}
