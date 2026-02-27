// AI Chatbot Widget for Sumit Damor Portfolio
// Comprehensive Pattern-Matching Chatbot with Complete Portfolio Coverage

class PortfolioChatbot {
    constructor(options = {}) {
        this.conversationHistory = [];
        this.isOpen = false;
        this.isTyping = false;
        this.inline = options.inline || false;
        
        // Comprehensive knowledge base about Sumit Damor
        this.knowledge = {
            // Current Role & Company
            currentRole: {
                keywords: ['current', 'role', 'position', 'job', 'work', 'working', 'now', 'present', 'doing', 'currently', 'today', 'what do you do', 'occupation'],
                response: "Sumit is currently working as an **Order Processing & Revenue Operations Associate — Corporate Cloud Subscription Clients** at **Groww Invest-Tech Private Limited** in Bangalore, India (since July 2024). He manages end-to-end corporate client operations for Groww Cloud subscriptions, supporting brokers, companies, and proprietary traders."
            },
            
            // About Groww - Detailed
            groww: {
                keywords: ['groww', 'company', 'employer', 'organization', 'invest-tech', 'fintech'],
                response: "**Groww Invest-Tech Private Limited** is an online investment platform that offers mutual funds, tax planning, investment management, and financial information services.\n\n**Sumit's Role at Groww:**\n• Manages end-to-end corporate client tickets for Groww Cloud subscriptions\n• Supports brokers, companies, and proprietary traders across onboarding, activation, and operations\n• Validates corporate onboarding requests including documentation and account verification\n• Coordinates subscription provisioning and platform setup with technical teams\n• Acts as primary support contact for corporate clients\n• Resolves execution issues, system errors, connectivity problems, and account configuration queries within SLA timelines\n• Monitors subscription usage, renewals, and cancellations\n• Maintains dashboards and collaborates with product, engineering, and finance teams"
            },
            
            // Freshdesk Experience
            freshdesk: {
                keywords: ['freshdesk', 'ticketing', 'support system', 'customer support tool'],
                response: "Yes! Sumit has extensive experience with **Freshdesk** at Groww. He uses Freshdesk as one of the primary tools for managing corporate client tickets, tracking support requests, and ensuring timely resolution of client issues. It's a key part of his daily operations workflow for handling Groww Cloud subscription clients."
            },
            
            // Jira Experience
            jira: {
                keywords: ['jira', 'project management', 'issue tracking', 'atlassian'],
                response: "Absolutely! Sumit uses **Jira** extensively at Groww for project management and issue tracking. He leverages Jira to coordinate with technical teams, track subscription provisioning tasks, manage workflows, and collaborate across product, engineering, and finance teams to improve client experience."
            },
            
            // Google Sheets
            googleSheets: {
                keywords: ['google sheets', 'sheets', 'spreadsheet', 'excel alternative'],
                response: "Yes, Sumit is proficient in **Google Sheets**! He uses it at Groww for maintaining dashboards, monitoring subscription usage, tracking renewals and cancellations, and analyzing operational data. It's one of his core tools for revenue operations and data management."
            },
            
            // Excel Skills
            excel: {
                keywords: ['excel', 'microsoft excel', 'spreadsheet'],
                response: "Sumit has strong **Excel** skills! It's listed as one of his core technical skills. He uses Excel for data analysis, creating reports, and managing operational data in his role at Groww."
            },
            
            // PowerPoint
            powerpoint: {
                keywords: ['powerpoint', 'ppt', 'presentation', 'slides'],
                response: "Yes, Sumit is skilled in **PowerPoint**! It's one of his technical skills, which he uses for creating presentations, reports, and communicating insights to stakeholders."
            },
            
            // Tableau
            tableau: {
                keywords: ['tableau', 'visualization', 'data viz', 'dashboard'],
                response: "Sumit has experience with **Tableau**! He used it in his project 'A study of Digital India Movement - Market Analysis' where he built visualizations to demonstrate which are the main UPI platforms in India. He aggregated data from authentic sources and created compelling visual dashboards."
            },
            
            // Languages Spoken
            languages: {
                keywords: ['language', 'speak', 'hindi', 'english', 'gujarati', 'tongue', 'linguistic'],
                response: "**Languages Sumit Speaks:**\n\n🇬🇧 **English** - Full Professional Proficiency\n🇮🇳 **Hindi** - Native or Bilingual Proficiency\n🇮🇳 **Gujarati** - Native or Bilingual Proficiency\n\nHe's fluent in all three languages!"
            },
            
            // Technical Skills - Comprehensive
            technicalSkills: {
                keywords: ['technical skill', 'software', 'tool', 'platform', 'technology'],
                response: "**Sumit's Technical Skills:**\n\n**Core Tools:**\n• Excel - Data analysis and reporting\n• PowerPoint - Presentations\n• Freshdesk - Customer support and ticketing\n• Jira - Project management and issue tracking\n• Google Sheets - Dashboards and data management\n• Groww Cloud - Internal OMS (Order Management System)\n\n**Development (from projects):**\n• JavaScript\n• ReactJS\n• ExpressJS\n• NodeJS\n• Tableau - Data visualization"
            },
            
            // Analytical Skills
            analyticalSkills: {
                keywords: ['analytical', 'analysis', 'data', 'research', 'thinking'],
                response: "**Sumit's Analytical Skills:**\n\n• **Data Collection** - Gathering and organizing information\n• **Market Research** - Understanding market trends and patterns\n• **Data Analysis** - Extracting insights from data\n• **Critical Thinking** - Problem-solving and decision-making\n• **Logical Thinking** - Structured approach to challenges\n\nHe applies these skills daily in his revenue operations role at Groww!"
            },
            
            // Business Skills
            businessSkills: {
                keywords: ['business skill', 'management', 'sales', 'marketing', 'customer'],
                response: "**Sumit's Business Skills:**\n\n• **Project Management** - Leading and coordinating projects\n• **Customer Retention** - Building long-term client relationships\n• **Sales** - Understanding client needs and solutions\n• **Email Marketing** - Digital marketing campaigns\n\nThese skills complement his technical expertise perfectly!"
            },
            
            // All Skills Combined
            skills: {
                keywords: ['skill', 'expertise', 'proficient', 'good at', 'know', 'capable'],
                response: "**Sumit's Complete Skill Set:**\n\n**Technical:** Excel, PowerPoint, Freshdesk, Jira, Google Sheets, JavaScript, ReactJS, ExpressJS, NodeJS, Tableau\n\n**Analytical:** Data Collection, Market Research, Data Analysis, Critical Thinking, Logical Thinking\n\n**Business:** Project Management, Customer Retention, Sales, Email Marketing\n\n**Languages:** English (Professional), Hindi (Native), Gujarati (Native)\n\n**Interests:** Stocks, Investments, Fintech, Marketing"
            },
            
            // Education - MBA
            mba: {
                keywords: ['mba', 'masters', 'business administration', 'marketing degree', 'nsb', 'national school'],
                response: "**MBA in Marketing**\n📚 National School of Business (NSB)\n📍 Bangalore, India\n📅 August 2022 - Present\n\nSumit is currently pursuing his MBA with a specialization in Marketing. This complements his operational experience with strategic business knowledge."
            },
            
            // Education - BA Economics
            economics: {
                keywords: ['economics', 'bachelor', 'ba', 'undergraduate', 'ignou', 'indira gandhi'],
                response: "**Bachelor of Arts in Economics**\n📚 Indira Gandhi National Open School (IGNOU)\n📍 New Delhi, India\n📅 August 2019 - May 2022\n\nSumit's economics background gives him a strong analytical foundation for understanding markets, data, and business operations."
            },
            
            // Education Combined
            education: {
                keywords: ['education', 'study', 'degree', 'college', 'university', 'school', 'academic'],
                response: "**Sumit's Education:**\n\n🎓 **MBA in Marketing** (In Progress)\nNational School of Business, Bangalore\nAugust 2022 - Present\n\n🎓 **Bachelor of Arts in Economics**\nIndira Gandhi National Open School (IGNOU), New Delhi\nAugust 2019 - May 2022\n\nHe combines business education with economics fundamentals!"
            },
            
            // Certificates - Digital Marketing
            digitalMarketing: {
                keywords: ['digital marketing', 'online marketing', 'curtin', 'certification'],
                response: "**Digital Marketing Certificate by Curtin University**\n\nThis certification provides an introduction to digital marketing strategies, including:\n• Content marketing\n• Social media marketing\n• Online advertising\n\nIt's suitable for beginners and marketers looking to enhance their digital skills. Sumit completed this to strengthen his marketing expertise!"
            },
            
            // Certificates - CRM
            crm: {
                keywords: ['crm', 'customer relationship', 'relationship management'],
                response: "**Customer Relationship Management for Marketers by Curtin University**\n\nThis certificate explores:\n• CRM systems and tools\n• Customer retention strategies\n• Relationship marketing\n• Data-driven decision-making\n• Customer insights\n\nPerfect for marketers and salespeople wanting to enhance customer engagement. Sumit uses these skills in his client-facing role at Groww!"
            },
            
            // Certificates - Project Management
            projectManagement: {
                keywords: ['project management', 'pm certification', 'project manager'],
                response: "**Introduction to Project Management Certificate**\n\nProvides an overview of:\n• Key project management concepts\n• Project management tools\n• Project management techniques\n\nDesigned for beginners and those new to project management. Sumit applies these principles in coordinating cross-functional teams at Groww!"
            },
            
            // All Certificates
            certificates: {
                keywords: ['certificate', 'certification', 'course', 'training', 'certified'],
                response: "**Sumit's Certifications:**\n\n📜 **Digital Marketing** - Curtin University\nCovers content marketing, social media marketing, and online advertising\n\n📜 **Customer Relationship Management for Marketers** - Curtin University\nFocuses on CRM systems, customer retention, and data-driven decision-making\n\n📜 **Introduction to Project Management**\nOverview of project management concepts, tools, and techniques"
            },
            
            // Achievements - AAGMAN
            aagman: {
                keywords: ['aagman', 'marketing fest', 'competition', 'won', 'award'],
                response: "🏆 **AAGMAN - The Marketing Fest**\n\nSumit **won** the marketing fest AAGMAN at NSB! This achievement showcases his innovative marketing skills and earned him the top prize. It highlights his creative approach and bolsters his confidence in his marketing abilities. A proud moment in his academic journey!"
            },
            
            // Achievements - Recycle Mania
            recycleMania: {
                keywords: ['recycle mania', 'product design', 'waste', 'sustainability', 'environment'],
                response: "♻️ **Recycle Mania**\n\nSumit **won** a product design event using waste materials! This victory demonstrated:\n• His creativity and design skills\n• Commitment to environmental responsibility\n• Ability to innovate with limited resources\n• Sustainability mindset\n\nA great example of thinking outside the box!"
            },
            
            // Achievements - College Fest
            collegeFest: {
                keywords: ['college fest', 'annual fest', 'event', 'team lead', 'games'],
                response: "🎉 **Annual College Fest Leadership**\n\nSumit led a team for the college's largest event! His responsibilities included:\n• Overseeing the design of various games\n• Implementing games for the annual college fest\n• Team coordination and management\n• Event planning and execution\n\nThis shows his leadership and organizational skills!"
            },
            
            // All Achievements
            achievements: {
                keywords: ['achievement', 'accomplishment', 'success', 'prize', 'recognition'],
                response: "**Sumit's Achievements:**\n\n🏆 **AAGMAN - The Marketing Fest**\nWon the marketing fest at NSB, showcasing innovative skills and earning top prize\n\n♻️ **Recycle Mania**\nWon product design event using waste materials, demonstrating creativity and sustainability\n\n🎉 **Annual College Fest**\nLed a team for the college's largest event, overseeing design and implementation of various games"
            },
            
            // Projects - Website Quality Study
            websiteQuality: {
                keywords: ['website quality', 'online buying', 'compulsive buying', 'payment modes', 'e-commerce'],
                response: "**A study on the impact of website quality on payment modes and online compulsive buying behavior**\n📅 January 2024 - March 2024\n\n**Project Objectives:**\n• Identified various factors related to website quality for online purchases\n• Analyzed the impact of identified website quality factors on compulsive buying behavior\n\nThis research project demonstrates Sumit's analytical skills and understanding of digital consumer behavior!"
            },
            
            // Projects - Digital India
            digitalIndia: {
                keywords: ['digital india', 'upi', 'market analysis', 'tableau project'],
                response: "**A study of Digital India Movement - Market Analysis**\n📅 February 2022 - March 2022\n\n**Project Details:**\n• Aggregated data from authentic sources on the new Digital UPI Platforms\n• Built visualizations in **Tableau** to demonstrate which are the main UPI platforms in India\n• Analyzed the growth and adoption of digital payment systems\n\nThis project showcases Sumit's data visualization and market research skills!"
            },
            
            // Projects - MERN Stack
            mernProject: {
                keywords: ['mern', 'news website', 'react', 'node', 'express', 'javascript', 'web development', 'heroku'],
                response: "**MERN Project - News Website**\n📅 November 2021 - December 2021\n\n**Technical Stack:**\n• **JavaScript** - Core programming language\n• **ReactJS** - Frontend framework\n• **ExpressJS** - Backend framework\n• **NodeJS** - Runtime environment\n\n**Deployment:**\n• Deployed the website on **Heroku Server** for a specific timeline\n\nThis full-stack project demonstrates Sumit's web development capabilities!"
            },
            
            // All Projects
            projects: {
                keywords: ['project', 'built', 'created', 'developed', 'portfolio work'],
                response: "**Sumit's Projects:**\n\n1️⃣ **Website Quality & Online Buying Behavior Study** (Jan-Mar 2024)\nAnalyzed impact of website quality on payment modes and compulsive buying behavior\n\n2️⃣ **Digital India Movement - Market Analysis** (Feb-Mar 2022)\nUsed Tableau to visualize and analyze main UPI platforms in India\n\n3️⃣ **MERN Stack News Website** (Nov-Dec 2021)\nFull-stack web application using ReactJS, ExpressJS, NodeJS, deployed on Heroku"
            },
            
            // Interests
            interests: {
                keywords: ['interest', 'hobby', 'passion', 'like', 'enjoy', 'stocks', 'investment', 'fintech'],
                response: "**Sumit's Interests:**\n\n📈 **Stocks** - Following market trends and equity markets\n💰 **Investments** - Understanding investment strategies\n🏦 **Fintech** - Financial technology and innovation\n📊 **Marketing** - Marketing strategies and campaigns\n\nThese interests align perfectly with his role at Groww and his MBA in Marketing!"
            },
            
            // Contact Information
            contact: {
                keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'call', 'message', 'get in touch'],
                response: "**Contact Sumit:**\n\n📧 **Email:** sumitrd22@nsb.edu.in\n📱 **Phone:** (+91) 82001-68197\n📍 **Location:** Bangalore, India\n💼 **LinkedIn:** [linkedin.com/in/sumit-damor-918b33184](https://linkedin.com/in/sumit-damor-918b33184)\n\nFeel free to reach out!"
            },
            
            // Experience Summary
            experience: {
                keywords: ['experience', 'background', 'career', 'history', 'professional'],
                response: "**Sumit's Professional Experience:**\n\n💼 **Order Processing & Revenue Operations Associate**\nGroww Invest-Tech Private Limited\n📅 July 2024 - Present | 📍 Bangalore, India\n\n**Key Responsibilities:**\n• Managing end-to-end corporate client operations for Groww Cloud\n• Supporting brokers, companies, and proprietary traders\n• Validating onboarding requests and documentation\n• Resolving technical issues and client queries\n• Monitoring subscriptions, renewals, and revenue operations\n• Collaborating with product, engineering, and finance teams\n\n**Tools Used:** Groww Cloud, Freshdesk, Jira, Google Sheets, Internal OMS"
            },
            
            // Location
            location: {
                keywords: ['location', 'where', 'city', 'place', 'based', 'bangalore', 'india'],
                response: "Sumit is based in **Bangalore, India** 🇮🇳\n\nBangalore is India's tech hub and the perfect location for his fintech career at Groww!"
            },
            
            // About Me
            about: {
                keywords: ['about', 'who', 'tell me about', 'introduce', 'background', 'summary'],
                response: "**About Sumit Damor:**\n\nSumit is an operations professional currently working at Groww Invest-Tech Private Limited, where he manages end-to-end corporate client operations for Groww Cloud subscriptions.\n\nWith a strong foundation in Economics and currently pursuing an MBA in Marketing, he brings a unique blend of analytical thinking and business acumen to every project.\n\n**His expertise spans:**\n• Client management\n• Revenue operations\n• Data analysis\n• Process optimization\n\nHe's passionate about leveraging technology and data-driven insights to improve operational efficiency and enhance client experiences in the fintech space!"
            },
            
            // Revenue Operations
            revenueOps: {
                keywords: ['revenue operations', 'revops', 'revenue', 'subscription', 'renewal'],
                response: "**Sumit's Revenue Operations Expertise:**\n\nAt Groww, Sumit supports revenue operations by:\n• Monitoring subscription usage patterns\n• Tracking renewals and cancellations\n• Maintaining operational dashboards\n• Analyzing revenue metrics\n• Collaborating with finance teams\n• Improving workflows to enhance client experience\n\nHe plays a crucial role in ensuring smooth revenue operations for Groww Cloud subscriptions!"
            },
            
            // Client Management
            clientManagement: {
                keywords: ['client', 'customer', 'corporate', 'broker', 'trader', 'support'],
                response: "**Sumit's Client Management Experience:**\n\nHe manages corporate clients including:\n• **Brokers** - Stock brokers using Groww Cloud\n• **Companies** - Corporate entities with trading needs\n• **Proprietary Traders** - Professional traders\n\n**His responsibilities:**\n• Acting as primary support contact\n• Resolving execution issues and system errors\n• Handling connectivity problems\n• Managing account configuration queries\n• Ensuring SLA compliance\n• Providing excellent client experience"
            },
            
            // SLA & Operations
            operations: {
                keywords: ['sla', 'timeline', 'operations', 'process', 'workflow', 'efficiency'],
                response: "**Sumit's Operations Excellence:**\n\nHe ensures operational efficiency by:\n• Meeting SLA (Service Level Agreement) timelines\n• Resolving client issues promptly\n• Coordinating with technical teams\n• Optimizing workflows and processes\n• Maintaining dashboards for monitoring\n• Collaborating across product, engineering, and finance teams\n\nHis process optimization skills ensure smooth operations at Groww!"
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
                                <p>👋 Hi! I'm Sumit's AI assistant. I know everything about his experience, skills, projects, education, and more!</p>
                                <p style="margin-top: 10px; font-size: 0.9em; opacity: 0.8;">Try asking: "What tools does he use?" or "Tell me about Freshdesk" or "What languages does he speak?"</p>
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
        if (this.matchKeywords(message, ['hi', 'hello', 'hey', 'greetings', 'namaste', 'good morning', 'good afternoon', 'good evening'])) {
            return "👋 Hello! I'm here to help you learn about Sumit Damor. You can ask me about his current role, skills, projects, education, languages, tools like Freshdesk or Jira, or how to contact him!";
        }
        
        // Thanks
        if (this.matchKeywords(message, ['thank', 'thanks', 'appreciate', 'grateful'])) {
            return "You're welcome! Feel free to ask me anything else about Sumit! 😊";
        }
        
        // Help
        if (this.matchKeywords(message, ['help', 'what can you', 'what do you know', 'capabilities'])) {
            return "I can help you with:\n• Current role and work at Groww\n• Skills (technical, analytical, business)\n• Tools (Freshdesk, Jira, Excel, Tableau, etc.)\n• Education (MBA, BA Economics)\n• Projects and achievements\n• Languages spoken\n• Certificates and training\n• Contact information\n\nJust ask me anything!";
        }
        
        // Check knowledge base - prioritize specific matches first
        const matches = [];
        for (const [key, data] of Object.entries(this.knowledge)) {
            if (this.matchKeywords(message, data.keywords)) {
                matches.push({ key, data, score: this.getMatchScore(message, data.keywords) });
            }
        }
        
        // Sort by match score and return best match
        if (matches.length > 0) {
            matches.sort((a, b) => b.score - a.score);
            return matches[0].data.response;
        }
        
        // Default response with suggestions
        return "I'm not sure about that specific question. Here are some things you can ask me:\n\n• \"What is his current role?\"\n• \"Tell me about Freshdesk experience\"\n• \"What languages does he speak?\"\n• \"What are his skills?\"\n• \"Tell me about his projects\"\n• \"What tools does he use?\"\n• \"How can I contact him?\"\n\nWhat would you like to know?";
    }
    
    matchKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword.toLowerCase()));
    }
    
    getMatchScore(message, keywords) {
        let score = 0;
        keywords.forEach(keyword => {
            if (message.includes(keyword.toLowerCase())) {
                score += keyword.length; // Longer keywords get higher scores
            }
        });
        return score;
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
