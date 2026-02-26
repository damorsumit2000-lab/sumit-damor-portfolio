// AI Chatbot Widget for Sumit Damor Portfolio
// Smart Pattern-Matching Chatbot (No API Key Required)

class PortfolioChatbot {
    constructor(options = {}) {
        this.conversationHistory = [];
        this.isOpen = false;
        this.isTyping = false;
        this.inline = options.inline || false;
        
        // Knowledge base about Sumit Damor
        this.knowledge = {
            // Current Role & Company
            currentRole: {
                keywords: ['current', 'role', 'position', 'job', 'work', 'working', 'now', 'present', 'doing'],
                response: "Sumit is currently working as an **Order Processing & Revenue Operations Associate** at **Groww Invest-Tech Private Limited** in Bangalore, India (since July 2024). He manages corporate client tickets for Groww Cloud subscriptions, supporting brokers, companies, and proprietary traders."
            },
            
            // About Groww
            groww: {
                keywords: ['groww', 'company', 'employer', 'organization'],
                response: "At **Groww**, Sumit:\n• Manages end-to-end corporate client tickets for Groww Cloud subscriptions\n• Validates corporate onboarding requests and documentation\n• Resolves execution issues, system errors, and connectivity problems\n• Monitors subscription usage, renewals, and cancellations\n• Uses tools like Freshdesk, Jira, Google Sheets, and Internal OMS"
            },
            
            // Skills
            skills: {
                keywords: ['skill', 'technical', 'tools', 'technology', 'know', 'proficient', 'expertise'],
                response: "Sumit's **key skills** include:\n\n**Technical:** Data Analysis, Process Optimization, CRM Systems, Digital Marketing\n\n**Tools:** Freshdesk, Jira, Google Sheets, Tableau, JavaScript, ReactJS, ExpressJS, NodeJS\n\n**Languages:** English (Professional), Hindi (Native), Gujarati (Native)"
            },
            
            // Education
            education: {
                keywords: ['education', 'study', 'degree', 'mba', 'college', 'university', 'school'],
                response: "**Education:**\n• **MBA in Marketing** - National School of Business (2022-Present)\n• **BA in Economics** - IGNOU (2019-2022)"
            },
            
            // Projects
            projects: {
                keywords: ['project', 'built', 'created', 'developed', 'portfolio'],
                response: "**Key Projects:**\n\n1. **Website Quality & Online Buying Behavior Study** (Jan-Mar 2024)\n\n2. **Digital India Movement Market Analysis** (Feb-Mar 2022) - Used Tableau for UPI platform analysis\n\n3. **MERN Stack News Website** (Nov-Dec 2021) - Full-stack web application deployed on Heroku"
            },
            
            // Achievements
            achievements: {
                keywords: ['achievement', 'award', 'won', 'accomplishment', 'success'],
                response: "**Achievements:**\n• Won **AAGMAN Marketing Fest** at NSB\n• Won **Recycle Mania** product design event\n• Led team for annual college fest"
            },
            
            // Certificates
            certificates: {
                keywords: ['certificate', 'certification', 'course', 'training'],
                response: "**Certifications:**\n• Digital Marketing by Curtin University\n• Customer Relationship Management for Marketers by Curtin University\n• Introduction to Project Management"
            },
            
            // Contact
            contact: {
                keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'call'],
                response: "**Contact Sumit:**\n📧 Email: sumitrd22@nsb.edu.in\n📱 Phone: (+91) 82001-68197\n💼 LinkedIn: [linkedin.com/in/sumit-damor-918b33184](https://linkedin.com/in/sumit-damor-918b33184)"
            },
            
            // Experience
            experience: {
                keywords: ['experience', 'background', 'career', 'history'],
                response: "Sumit has been working at **Groww Invest-Tech** since July 2024 as an Order Processing & Revenue Operations Associate. He manages corporate client operations, handles technical support, and monitors revenue operations for Groww Cloud subscriptions."
            },
            
            // Location
            location: {
                keywords: ['location', 'where', 'city', 'place', 'based'],
                response: "Sumit is based in **Bangalore, India** 🇮🇳"
            }
        };
        
        this.init();
    }
    
    init() {
        if (this.inline) {
            this.createInlineChatWidget();
        } else {
            this.createChatWidget();
        }
        this.attachEventListeners();
    }
    
    createInlineChatWidget() {
        const chatHTML = `
            <div id="chatbot-container" class="chatbot-container inline-chatbot">
                <div class="chat-window inline-chat-window open">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <h3>💬 Ask Me Anything</h3>
                            <p class="chat-status">AI Assistant • Online</p>
                        </div>
                    </div>
                    
                    <div id="chat-messages" class="chat-messages">
                        <div class="message bot-message">
                            <div class="message-content">
                                <p>👋 Hi! I'm Sumit's AI assistant. Ask me anything about his experience, skills, projects, or education!</p>
                                <p style="margin-top: 10px; font-size: 0.9em; opacity: 0.8;">Try: "What is his current role?" or "Tell me about his skills"</p>
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
        
        const targetContainer = document.getElementById('chatbot-inline-container');
        if (targetContainer) {
            targetContainer.innerHTML = chatHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', chatHTML);
        }
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
        
        if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggleChat());
        if (closeBtn) closeBtn.addEventListener('click', () => this.toggleChat());
        if (sendBtn) sendBtn.addEventListener('click', () => this.sendMessage());
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.sendMessage();
            });
        }
    }
    
    toggleChat() {
        this.isOpen = !this.isOpen;
        const container = document.getElementById('chatbot-container');
        const badge = document.getElementById('notification-badge');
        
        container.classList.toggle('open');
        
        if (this.isOpen) {
            if (badge) badge.style.display = 'none';
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
        
        // Simulate thinking time
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Get response
        const response = this.getResponse(message);
        this.hideTypingIndicator();
        this.addMessage(response, 'bot');
    }
    
    getResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Greeting
        if (this.matchKeywords(message, ['hi', 'hello', 'hey', 'greetings'])) {
            return "👋 Hello! I'm here to help you learn about Sumit Damor. You can ask me about his current role, skills, projects, education, or how to contact him!";
        }
        
        // Thanks
        if (this.matchKeywords(message, ['thank', 'thanks', 'appreciate'])) {
            return "You're welcome! Feel free to ask me anything else about Sumit! 😊";
        }
        
        // Help
        if (this.matchKeywords(message, ['help', 'what can you'])) {
            return "I can help you with:\n• Current role and work at Groww\n• Skills and technical expertise\n• Education background\n• Projects and achievements\n• Contact information\n\nJust ask me anything!";
        }
        
        // Check knowledge base
        for (const [key, data] of Object.entries(this.knowledge)) {
            if (this.matchKeywords(message, data.keywords)) {
                return data.response;
            }
        }
        
        // Default response with suggestions
        return "I'm not sure about that specific question. Try asking me about:\n• Sumit's current role\n• His skills and expertise\n• Education and projects\n• How to contact him\n\nWhat would you like to know?";
    }
    
    matchKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }
    
    addMessage(text, sender) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        // Convert markdown-style formatting to HTML
        let formattedText = this.escapeHtml(text);
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.replace(/\n/g, '<br>');
        formattedText = formattedText.replace(/•/g, '&bull;');
        
        // Convert links
        formattedText = formattedText.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>');
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${formattedText}</p>
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
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const inlineContainer = document.getElementById('chatbot-inline-container');
        window.portfolioChatbot = new PortfolioChatbot({ inline: !!inlineContainer });
    });
} else {
    const inlineContainer = document.getElementById('chatbot-inline-container');
    window.portfolioChatbot = new PortfolioChatbot({ inline: !!inlineContainer });
}
