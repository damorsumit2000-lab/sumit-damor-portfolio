// Gemini AI Configuration
const GEMINI_API_KEY = 'AIzaSyDxf8nuTU55NOhjP5AejmeBxIJgsayGESI';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

// Sumit's CV Data for Training
const SUMIT_CV_DATA = `
SUMIT DAMOR - PROFESSIONAL PROFILE

CONTACT:
- Email: sumitrd22@nsb.edu.in
- Phone: (+91) 82001-68197
- Location: Bangalore, India
- Portfolio: damorsumit2000-lab.github.io/sumit-damor-portfolio
- GitHub: github.com/damorsumit2000-lab

PROFESSIONAL SUMMARY:
Operations professional with experience in corporate client management, subscription lifecycle handling, and revenue operations within a fintech environment at Groww. Currently pursuing an MBA with a background in Economics and strong skills in data analysis and process optimization.

WORK EXPERIENCE:

Order Processing & Revenue Operations Associate — Corporate Cloud Subscription Clients
Groww Invest-Tech Private Limited
July 2024 - Present, Bangalore, India

Key Responsibilities:
- Managed end-to-end corporate client tickets for Groww Cloud subscriptions
- Supporting brokers, companies, and proprietary traders across onboarding, activation, and ongoing operations
- Validated corporate onboarding requests including documentation and account verification
- Coordinated subscription provisioning and platform setup with technical teams
- Primary support contact for corporate clients, resolving execution issues, system errors, connectivity problems
- Supported revenue operations by monitoring subscription usage, renewals, and cancellations
- Maintained dashboards and collaborated with product, engineering, and finance teams

Tools & Platforms: Groww Cloud, Freshdesk, Jira, Google Sheets, Internal OMS

EDUCATION:

Masters of Business Administration (MBA) - Marketing
National School of Business
August 2022 - July 2024, Bangalore, India

Bachelor of Arts, Economics
Indira Gandhi National Open School
August 2019 - May 2022, New Delhi, India

PROJECTS:

1. A study on the impact of website quality on payment modes and online compulsive buying behavior (Jan 2024 - Mar 2024)
   - Identified various factors related to website quality for online purchases
   - Analyzed the impact of website quality factors on compulsive buying behavior

2. A study of Digital India Movement - Market Analysis (Feb 2022 - Mar 2022)
   - Aggregated data from authentic sources on new Digital UPI Platforms
   - Built visualizations in Tableau to demonstrate main UPI platforms in India

3. MERN Project - News Website (Nov 2021 - Dec 2021)
   - Wrote code in JavaScript using ReactJS, ExpressJS, NodeJS
   - Deployed website on Heroku Server

SKILLS:
- Excel, Power Point Presentation, Freshdesk, Email Marketing
- Critical and Logical Thinking
- Data Collection, Market Research and Data Analysis
- Project management, Customer Retention, Sales

ACHIEVEMENTS:
1. AAGMAN - The Marketing Fest: Won the marketing fest at NSB
2. Recycle Mania: Won product design event using waste materials
3. Annual College Fest: Led a team for college's largest event

CERTIFICATES:
- Digital Marketing by Curtin University
- Customer Relationship Management for Marketers by Curtin University
- Introduction to Project Management

LANGUAGES:
- English: Full Professional Proficiency
- Hindi: Native or Bilingual Proficiency
- Gujarati: Native or Bilingual Proficiency

INTERESTS:
Stocks, Tickets, Marketing, Excel, Freshdesk, Jira, Investments, Fintech
`;

// System prompt for short, simple responses
const SYSTEM_PROMPT = `You are Sumit Damor's AI assistant on his portfolio website. Your job is to answer questions about Sumit based ONLY on the CV data provided below.

IMPORTANT RULES:
1. Give SHORT and SIMPLE answers (2-3 sentences maximum)
2. Be friendly and conversational
3. Only share information from the CV data below
4. If asked something not in the CV, say "I don't have that information in Sumit's CV"
5. Don't make up or assume any information
6. Be professional but approachable

SUMIT'S CV DATA:
${SUMIT_CV_DATA}

Remember: Keep responses SHORT and SIMPLE!`;

// Chat state
let conversationHistory = [];

// Initialize chatbot
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const chatWindow = document.querySelector('.chat-window');
    const sendBtn = document.getElementById('sendBtn');
    const chatInput = document.getElementById('chatInput');

    // Toggle chat window
    if (chatToggle) {
        chatToggle.addEventListener('click', function() {
            chatWindow.classList.toggle('active');
            chatToggle.classList.toggle('active');
            if (chatWindow.classList.contains('active')) {
                chatInput.focus();
            }
        });
    }

    // Close chat
    if (chatClose) {
        chatClose.addEventListener('click', function() {
            chatWindow.classList.remove('active');
            chatToggle.classList.remove('active');
        });
    }

    // Send message on button click
    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    // Send message on Enter key
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Send message function
async function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = chatInput.value.trim();

    if (!message) return;

    // Add user message to chat
    addMessage(message, 'user');
    chatInput.value = '';

    // Show typing indicator
    const typingIndicator = addTypingIndicator();

    try {
        // Get AI response
        const response = await getGeminiResponse(message);
        
        // Remove typing indicator
        typingIndicator.remove();
        
        // Add bot response
        addMessage(response, 'bot');
    } catch (error) {
        console.error('Chatbot Error:', error);
        typingIndicator.remove();
        addMessage('Sorry, I encountered an error. Please try again later.', 'bot');
    }

    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add message to chat
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// Add typing indicator
function addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-content">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// Get response from Gemini AI
async function getGeminiResponse(userMessage) {
    try {
        const requestBody = {
            contents: [
                {
                    parts: [
                        {
                            text: `${SYSTEM_PROMPT}\n\nUser Question: ${userMessage}\n\nProvide a short, simple answer (2-3 sentences max) based only on Sumit's CV data above.`
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 150,
                topP: 0.8,
                topK: 40
            }
        };

        const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(`API request failed: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            throw new Error('Invalid response format from API');
        }

        const botResponse = data.candidates[0].content.parts[0].text;
        return botResponse;

    } catch (error) {
        console.error('Gemini API Error:', error);
        throw error;
    }
}
