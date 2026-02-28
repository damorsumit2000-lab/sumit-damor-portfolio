// Groq AI Configuration
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// Sumit's CV Data for Training
const SUMIT_CV_DATA = `
SUMIT DAMOR - PROFESSIONAL PROFILE

CONTACT:
- Email: sumitrd22@nsb.edu.in
- Phone: (+91) 82001-68197
- Location: Bangalore, India
- LinkedIn: linkedin.com/in/sumit-damor-918b33184

PROFESSIONAL SUMMARY:
Operations professional with experience in corporate client management, subscription lifecycle handling, and revenue operations within a fintech environment at Groww. Completed his MBA from Bangalore with a background in Economics and strong skills in data analysis, and process optimization.

WORK EXPERIENCE:

Order Processing & Revenue Operations Associate — Corporate Cloud Subscription Clients
Groww Invest-Tech Private Limited
July 2024 - Present, Bangalore, India

About Groww:
Groww is an online investment platform that offers mutual funds, tax planning, investment management, and financial information services.

Key Responsibilities:
- Managed end-to-end corporate client tickets for Groww Cloud subscriptions, supporting brokers, companies, and proprietary traders across onboarding, activation, and ongoing operations
- Validated corporate onboarding requests including documentation and account verification, and coordinated subscription provisioning and platform setup in collaboration with technical teams
- Acted as the primary support contact for corporate clients, resolving execution issues, system errors, connectivity problems, and account configuration queries within SLA timelines
- Supported revenue operations by monitoring subscription usage, renewals, and cancellations, while maintaining dashboards and collaborating with product, engineering, and finance teams to improve workflows and client experience

Tools & Platforms: Groww Cloud, Freshdesk, Jira, Google Sheets, Internal OMS

EDUCATION:

Masters of Business Administration (MBA) - Marketing
National School of Business
August 2022 - Present, Bangalore, India

Bachelor of Arts, Economics
Indira Gandhi National Open School
August 2019 - May 2022, New Delhi, India

PROJECTS:

1. A study on the impact of website quality on payment modes and online compulsive buying behavior (January 2024 - March 2024)
   - Identified various factors related to website quality for online purchases
   - Analyzed the impact of identified website quality factors on compulsive buying behavior

2. A study of Digital India Movement - Market Analysis (February 2022 - March 2022)
   - Aggregated data from authentic sources on the new Digital UPI Platforms
   - Built visualizations in Tableau to demonstrate which are the main UPI platforms in India

3. MERN Project - News Website (November 2021 - December 2021)
   - Wrote the code in JavaScript, and used libraries like ReactJS, ExpressJS, NodeJS
   - Deployed the website on Heroku Server for a specific timeline

SKILLS:
- Excel, Power Point Presentation, Freshdesk, Email Marketing
- Critical and Logical Thinking
- Data Collection, Market Research and Data Analysis
- Project management, Customer Retention, Sales

ACHIEVEMENTS:

1. AAGMAN - The Marketing Fest
   Won the marketing fest AAGMAN at NSB, showcasing skills and earning the top prize. This accolade highlights innovative approach and bolsters confidence in marketing abilities.

2. Recycle Mania
   Won a product design event using waste materials, showcasing creativity and sustainability. This victory demonstrated design skills and commitment to environmental responsibility.

3. Annual College Fest
   Led a team for the college's largest event, overseeing the design and implementation of various games to be featured during the annual college fest. This involved coordinating with team members, ensuring creative and engaging game concepts, and managing the logistics to ensure smooth execution during the event.

CERTIFICATES:
- Digital Marketing by Curtin University: Provides an introduction to digital marketing strategies, including content marketing, social media marketing, and online advertising. Suitable for beginners and marketers looking to enhance their digital skills.
- Customer Relationship Management for Marketers by Curtin University: Explores CRM systems, customer retention strategies, and relationship marketing. It emphasizes data-driven decision-making and customer insights. This course is suitable for marketers and salespeople wanting to enhance customer engagement.
- Introduction to Project Management: Provides an overview of key project management concepts, tools, and techniques. Designed for beginners and those new to project management.

LANGUAGES:
- English: Full Professional Proficiency
- Hindi: Native or Bilingual Proficiency
- Gujarati: Native or Bilingual Proficiency

INTERESTS:
Stocks, Tickets, Marketing, Excel, Freshdesk, Jira, Investments, Fintech
`;

// System prompt for the AI
const SYSTEM_PROMPT = `You are an AI assistant on Sumit Damor's portfolio website. Your job is to answer questions about Sumit based ONLY on the CV data provided below.

IMPORTANT RULES:
1. Give SHORT and SIMPLE answers (2-4 sentences maximum)
2. Be friendly, professional, and conversational
3. Only share information from the CV data below
4. If asked something not in the CV, politely say "I don't have that information in Sumit's profile"
5. Don't make up or assume any information
6. Be helpful and engaging

SUMIT'S CV DATA:
${SUMIT_CV_DATA}

Remember: Keep responses SHORT, ACCURATE, and HELPFUL!`;

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
        const response = await getGroqResponse(message);
        
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

// Get response from Groq AI
async function getGroqResponse(userMessage) {
    try {
        const requestBody = {
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
            temperature: 0.7,
            max_tokens: 200,
            top_p: 0.9
        };

        const response = await fetch(GROQ_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('API Error:', errorData);
            throw new Error(`API request failed: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content.trim();
        } else {
            throw new Error('No response from AI');
        }
    } catch (error) {
        console.error('Groq API Error:', error);
        throw error;
    }
}
