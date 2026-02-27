// AI Chatbot for Sumit Damor's Portfolio
// Answers from Sumit's perspective with personality and context

(function() {
    'use strict';

    // Comprehensive knowledge base - Sumit's voice
    const knowledge = {
        // ABOUT SUMIT - Personal & Engaging
        about: {
            keywords: ['about', 'who are you', 'tell me about', 'introduce', 'yourself', 'sumit', 'background', 'story', 'who is'],
            short: "Hey! I'm Sumit Damor, currently working at Groww in Bangalore (though I'm originally from Gujarat 🏠). I handle corporate client operations and I'm pursuing my MBA in Marketing. I love solving problems with data and making processes smoother!",
            full: `Hey there! 👋 I'm Sumit Damor, and here's my story:

**Where I'm From:** I'm a proud Gujarati! Born and raised in Gujarat, but currently living the Bangalore life 🌆 (yes, the traffic is real 😅).

**What I Do:** I work at Groww Invest-Tech as an Order Processing & Revenue Operations Associate. Basically, I'm the guy who makes sure corporate clients get their Groww Cloud subscriptions running smoothly - from onboarding to troubleshooting to renewals.

**Education Journey:** 
- 📚 Currently pursuing MBA in Marketing from Narsee Monjee Institute of Management Studies (NMIMS)
- 🎓 BA in Economics from Maharaja Sayajirao University (2019-2022)

**What Drives Me:** I'm passionate about using data and technology to solve real problems. Whether it's optimizing workflows, analyzing trends, or improving client experiences - I love the challenge!

**Fun Fact:** I won AAGMAN (a marketing fest) and even a product design competition using waste materials. I believe in creativity + sustainability! ♻️

**Languages:** I speak English, Hindi, and Gujarati fluently - so I can switch between languages faster than Bangalore's weather changes! 😄`
        },

        // LOCATION & NATIVE
        location: {
            keywords: ['location', 'where', 'from', 'native', 'hometown', 'city', 'place', 'gujarat', 'bangalore', 'based', 'live', 'living'],
            short: "I'm originally from Gujarat (my native place 🏠), but currently working and living in Bangalore, Karnataka! Best of both worlds - Gujarati roots with Bangalore's tech vibe.",
            full: `**My Roots & Current Base:**

🏠 **Native Place:** Gujarat - that's where I'm from! The land of dhokla, thepla, and amazing business minds 😊

📍 **Current Location:** Bangalore, Karnataka - I moved here for work at Groww. Living the Bangalore life now!

**Why Bangalore?**
- Amazing tech ecosystem
- Great career opportunities in fintech
- Diverse culture (though I do miss Gujarati food sometimes! 😅)
- Perfect weather (most of the time)

**The Gujarat Connection:**
- I speak Gujarati fluently (native proficiency!)
- My family is still in Gujarat
- I visit home whenever I can
- Gujarati values of entrepreneurship and hard work are deeply ingrained in me

**Fun Fact:** I can navigate Bangalore traffic AND bargain in Gujarati markets - both are survival skills! 😄`
        },

        // CURRENT ROLE - Detailed & Personal
        currentRole: {
            keywords: ['current', 'job', 'work', 'role', 'position', 'groww', 'doing now', 'working', 'employment', 'company'],
            short: "I'm working at Groww as an Order Processing & Revenue Operations Associate, managing corporate client subscriptions for Groww Cloud. Started in July 2024 and loving it!",
            full: `**My Current Role at Groww:**

🏢 **Company:** Groww Invest-Tech Private Limited (you know, the investment platform everyone's talking about!)

💼 **Position:** Order Processing & Revenue Operations Associate - Corporate Cloud Subscription Clients

📅 **Duration:** July 2024 - Present (and counting!)

📍 **Location:** Bangalore, India

**What I Actually Do (The Real Talk):**

1️⃣ **Client Management Superhero:**
   - I'm the go-to person for corporate clients using Groww Cloud
   - Handle everything from onboarding to ongoing support
   - Work with brokers, companies, and proprietary traders

2️⃣ **Problem Solver:**
   - Execution issues? I fix them.
   - System errors? I debug them.
   - Connectivity problems? I resolve them.
   - All within SLA timelines (because deadlines matter!)

3️⃣ **Revenue Operations:**
   - Monitor subscription usage and renewals
   - Track cancellations and identify patterns
   - Maintain dashboards (Excel and internal tools are my friends!)
   - Collaborate with product, engineering, and finance teams

4️⃣ **Documentation & Verification:**
   - Validate corporate onboarding requests
   - Verify accounts and documentation
   - Coordinate with technical teams for platform setup

**Tools I Use Daily:**
- Groww Cloud (obviously!)
- Freshdesk (for ticket management)
- Jira (for tracking issues)
- Google Sheets (my data playground)
- Internal OMS (Order Management System)

**What I Love About This Role:**
- Direct impact on client satisfaction
- Cross-functional collaboration
- Data-driven decision making
- Learning about fintech operations
- Solving unique problems every day!`
        },

        // TOOLS & TECHNOLOGIES - Personal Experience
        tools: {
            keywords: ['tools', 'software', 'technology', 'freshdesk', 'jira', 'excel', 'sheets', 'tableau', 'platforms', 'systems', 'tech stack'],
            short: "I work with Freshdesk, Jira, Google Sheets, Tableau, and Groww's internal systems daily. Also comfortable with MS Office, CRM tools, and data visualization platforms!",
            full: `**My Tech Toolkit (What I Use & Love):**

📊 **Daily Drivers:**

**Freshdesk** - My ticket management companion
- Manage corporate client tickets
- Track support requests
- Ensure timely resolutions
- Monitor SLA compliance
- *Why I like it:* Clean interface, powerful automation

**Jira** - For keeping everything organized
- Track issues and bugs
- Collaborate with engineering teams
- Manage workflows
- Sprint planning and tracking
- *Why I like it:* Perfect for cross-team coordination

**Google Sheets** - My data playground!
- Create dashboards and reports
- Analyze subscription data
- Track KPIs and metrics
- Build automated workflows
- *Why I like it:* Flexible, collaborative, powerful formulas

**Tableau** - For beautiful data stories
- Create interactive dashboards
- Visualize trends and patterns
- Present insights to stakeholders
- Monitor business metrics
- *Why I like it:* Makes data come alive!

💼 **Microsoft Office Suite:**
- **Excel:** Advanced formulas, pivot tables, data analysis
- **PowerPoint:** Presentations that don't bore people to death 😄
- **Word:** Documentation and reports

🔧 **Other Tools:**
- **Groww Cloud:** Our internal platform (I know it inside out!)
- **Internal OMS:** Order Management System
- **CRM Tools:** Client relationship management
- **Communication:** Slack, Email, MS Teams

**My Approach to Tools:**
I don't just use tools - I master them! I believe in understanding the 'why' behind every feature and finding creative ways to make workflows more efficient.

**Fun Fact:** I once automated a repetitive task in Google Sheets that saved our team 5+ hours per week. Small wins matter! 🎉`
        },

        // LANGUAGES - Personal & Cultural
        languages: {
            keywords: ['language', 'speak', 'hindi', 'english', 'gujarati', 'communication', 'fluent', 'bilingual'],
            short: "I speak three languages fluently: English (professional), Hindi (native), and Gujarati (native - it's my mother tongue!). Perfect for connecting with diverse clients and teams.",
            full: `**Languages I Speak (My Linguistic Superpowers!):**

🇬🇧 **English - Full Professional Proficiency**
- Business communication
- Technical documentation
- Client interactions
- Presentations and reports
- *Use it for:* Work, professional networking, global communication

🇮🇳 **Hindi - Native/Bilingual Proficiency**
- Grew up speaking it
- Completely fluent
- Can understand all dialects
- *Use it for:* Daily life in Bangalore, connecting with colleagues, Bollywood movies 😄

🇮🇳 **Gujarati - Native/Bilingual Proficiency**
- My mother tongue! 💚
- Speak it at home with family
- Understand all the cultural nuances
- Can crack jokes that only Gujaratis get 😂
- *Use it for:* Family, Gujarat friends, feeling at home

**Why This Matters:**

✅ **Client Communication:** Can connect with diverse clients across India
✅ **Team Collaboration:** Bridge language gaps in multicultural teams
✅ **Cultural Understanding:** Navigate different business cultures easily
✅ **Problem Solving:** Explain complex issues in simple terms, in any language!

**Fun Fact:** I can switch between all three languages mid-conversation without even thinking about it. It's like having a built-in translator! 🎯

**Bangalore Bonus:** Living in Bangalore, I'm also picking up some Kannada phrases. "Kannada kalthini" (I'm learning Kannada) 😊`
        },

        // EDUCATION - Personal Journey
        education: {
            keywords: ['education', 'degree', 'mba', 'college', 'university', 'study', 'academic', 'qualification', 'nmims', 'economics'],
            short: "Currently pursuing MBA in Marketing from NMIMS (2022-2024). I have a BA in Economics from Maharaja Sayajirao University (2019-2022). Love combining analytical thinking with business strategy!",
            full: `**My Educational Journey:**

📚 **Current: MBA in Marketing**
- **Institution:** Narsee Monjee Institute of Management Studies (NMIMS), Bangalore
- **Duration:** 2022 - 2024
- **Specialization:** Marketing
- **Why Marketing?** I love understanding consumer behavior and creating strategies that actually work!
- **Key Learnings:** Brand management, digital marketing, consumer insights, strategic planning
- **Balancing Act:** Working full-time at Groww while pursuing MBA (yes, it's challenging but totally worth it!)

🎓 **BA in Economics**
- **Institution:** Maharaja Sayajirao University of Baroda, Gujarat
- **Duration:** 2019 - 2022
- **Grade:** 7.5 CGPA
- **Why Economics?** I've always been fascinated by how markets work and how data drives decisions
- **Favorite Subjects:** Microeconomics, Statistics, Economic Policy
- **Key Takeaway:** Learned to think analytically and understand market dynamics

**How My Education Shapes My Work:**

🎯 **Economics Background:**
- Analytical thinking for problem-solving
- Understanding market trends
- Data-driven decision making
- Statistical analysis skills

📈 **MBA in Marketing:**
- Strategic thinking
- Customer-centric approach
- Brand positioning
- Digital marketing insights

**The Perfect Combo:**
Economics taught me to analyze data and understand patterns. Marketing teaches me to apply those insights creatively. Together? They make me a problem-solver who thinks both analytically AND strategically! 🚀

**Fun Fact:** I won AAGMAN (a marketing fest at NSB) - proof that I don't just study marketing, I live it! 🏆`
        },

        // ACHIEVEMENTS - Personal Stories
        achievements: {
            keywords: ['achievement', 'award', 'won', 'aagman', 'recycle', 'fest', 'accomplishment', 'success', 'prize', 'winner'],
            short: "Won AAGMAN marketing fest at NSB, Recycle Mania (product design with waste materials), and led the team for our college's annual fest. Love turning creative ideas into reality!",
            full: `**My Proudest Moments (So Far!):**

🏆 **AAGMAN - The Marketing Fest Winner**
- **What:** Won the top prize at NSB's marketing fest
- **Why It Matters:** Competed against talented peers and came out on top!
- **What I Did:** Created an innovative marketing campaign that impressed the judges
- **Key Skills:** Strategic thinking, creativity, presentation
- **Personal Win:** Validated my decision to pursue MBA in Marketing
- **Feeling:** Pure confidence boost! This win showed me I'm on the right path 🎯

♻️ **Recycle Mania Champion**
- **What:** Won a product design competition using waste materials
- **The Challenge:** Create something useful from trash
- **My Approach:** Combined creativity with sustainability
- **Why I'm Proud:** Proved that constraints fuel creativity!
- **Impact:** Demonstrated my commitment to environmental responsibility
- **Lesson Learned:** Innovation doesn't need expensive resources, just creative thinking!

🎉 **Annual College Fest - Team Leader**
- **Role:** Led the team for our college's biggest event
- **Responsibility:** Designed and implemented various games for the fest
- **Team Size:** Managed a diverse team of volunteers
- **Challenge:** Coordinating multiple activities, tight deadlines, budget constraints
- **Outcome:** Successful event with great student participation!
- **Skills Gained:** Leadership, project management, teamwork, crisis management

**What These Achievements Mean to Me:**

✨ **AAGMAN:** Proved my marketing chops
✨ **Recycle Mania:** Showed my creative + sustainable side
✨ **College Fest:** Demonstrated leadership and execution skills

**The Common Thread:**
All these achievements share one thing - I love taking ideas and making them real. Whether it's a marketing campaign, a product design, or a college event, I thrive on execution!

**What's Next?**
More challenges, more learning, more wins! I'm just getting started 🚀`
        },

        // PROJECTS - Detailed & Personal
        projects: {
            keywords: ['project', 'work', 'built', 'created', 'developed', 'digital india', 'mern', 'website quality', 'portfolio'],
            short: "Led Digital India Campaign (social media strategy), built a MERN stack e-commerce site, and conducted website quality analysis. Love combining strategy with hands-on execution!",
            full: `**Projects I'm Proud Of:**

🇮🇳 **Digital India Campaign - Social Media Strategy**
- **Role:** Team Leader
- **What We Did:** Created a comprehensive social media campaign promoting Digital India initiatives
- **My Contribution:** 
  - Developed the overall strategy
  - Led content creation
  - Managed team coordination
  - Analyzed engagement metrics
- **Platforms:** Facebook, Instagram, Twitter
- **Impact:** Increased awareness about digital literacy programs
- **Skills Used:** Social media marketing, content strategy, team leadership, analytics
- **Personal Takeaway:** Learned how to create campaigns that actually resonate with people!

💻 **MERN Stack E-Commerce Website**
- **What:** Full-stack e-commerce platform
- **Tech Stack:** MongoDB, Express.js, React, Node.js
- **Features Built:**
  - User authentication
  - Product catalog
  - Shopping cart
  - Payment integration
  - Admin dashboard
- **My Role:** Full-stack development
- **Challenge:** Integrating all components seamlessly
- **Outcome:** Fully functional e-commerce site
- **Skills Gained:** Full-stack development, database design, API integration
- **Why I Loved It:** Seeing code turn into a real, working product is magical! ✨

📊 **Website Quality Analysis Project**
- **Objective:** Analyze and improve website performance
- **Approach:**
  - Conducted comprehensive quality audits
  - Analyzed user experience metrics
  - Identified performance bottlenecks
  - Provided actionable recommendations
- **Tools Used:** Google Analytics, PageSpeed Insights, Heatmaps
- **Metrics Analyzed:** Load time, bounce rate, conversion rate, user flow
- **Outcome:** Detailed report with improvement strategies
- **Impact:** Helped improve website performance by 30%+
- **Skills Used:** Data analysis, UX understanding, technical SEO

**What I Learned from These Projects:**

🎯 **Digital India:** Strategy + execution = impact
💡 **MERN Stack:** Technical skills + creativity = innovation
📈 **Quality Analysis:** Data + insights = improvement

**My Project Philosophy:**
I don't just complete projects - I learn from them, iterate, and always aim to create something that adds real value!

**Want to See More?**
Check out my GitHub or let's chat about any of these projects in detail! 🚀`
        },

        // SKILLS - Comprehensive & Personal
        skills: {
            keywords: ['skill', 'expertise', 'good at', 'proficient', 'capabilities', 'strengths', 'abilities', 'competencies'],
            short: "Strong in data analysis, client management, process optimization, and revenue operations. Also skilled in Excel, Tableau, CRM tools, and cross-functional collaboration!",
            full: `**My Skill Arsenal (What I Bring to the Table):**

📊 **Technical Skills:**

**Data Analysis & Visualization**
- Excel wizardry (pivot tables, advanced formulas, macros)
- Tableau dashboards that tell stories
- Google Sheets automation
- Statistical analysis
- Trend identification
- *Real Example:* Built automated dashboards that reduced reporting time by 60%!

**Tools & Platforms**
- Freshdesk (ticket management pro)
- Jira (workflow optimization)
- CRM systems
- Order Management Systems
- MS Office Suite (advanced level)
- *My Approach:* I don't just use tools, I master them and find creative shortcuts!

**Technical Understanding**
- Basic web development (MERN stack)
- Database concepts
- API integrations
- System troubleshooting
- *Why It Matters:* I can talk tech with engineering teams!

💼 **Business & Operations Skills:**

**Client Management**
- Corporate client handling
- Relationship building
- Expectation management
- Conflict resolution
- *My Style:* Empathetic but efficient - clients love working with me!

**Revenue Operations**
- Subscription lifecycle management
- Renewal tracking
- Churn analysis
- Revenue forecasting
- *Impact:* Helped improve renewal rates through proactive engagement!

**Process Optimization**
- Workflow analysis
- Bottleneck identification
- Automation opportunities
- Efficiency improvements
- *Real Win:* Streamlined onboarding process, reducing time by 40%!

🎯 **Analytical Skills:**

**Problem Solving**
- Root cause analysis
- Creative solution finding
- Data-driven decisions
- Quick thinking under pressure
- *My Superpower:* I see patterns others miss!

**Strategic Thinking**
- Market analysis
- Competitive research
- Trend forecasting
- Business strategy
- *MBA Bonus:* Combining analytical + strategic thinking!

🤝 **Soft Skills:**

**Communication**
- Clear and concise
- Multilingual (English, Hindi, Gujarati)
- Presentation skills
- Technical documentation
- *Feedback I Get:* "You explain complex things so simply!"

**Collaboration**
- Cross-functional teamwork
- Stakeholder management
- Conflict resolution
- Team leadership
- *Experience:* Work daily with product, engineering, finance teams!

**Adaptability**
- Quick learner
- Comfortable with ambiguity
- Flexible approach
- Open to feedback
- *Proof:* Thriving in fast-paced fintech environment!

**My Unique Combination:**
Economics background + MBA in Marketing + Hands-on operations experience = Analytical problem-solver who understands both data AND people! 🚀

**Always Learning:**
Currently exploring: Advanced Tableau, Python for data analysis, and digital marketing automation!`
        },

        // CERTIFICATES - Personal Value
        certificates: {
            keywords: ['certificate', 'certification', 'course', 'training', 'certified', 'credential', 'digital marketing', 'crm', 'project management'],
            short: "Certified in Digital Marketing (Google), CRM Fundamentals (HubSpot), Project Management Basics (Coursera), and Advanced Excel (Udemy). Always learning and upskilling!",
            full: `**My Certifications (Proof of Continuous Learning!):**

📱 **Digital Marketing Certification - Google**
- **Issuer:** Google Digital Garage
- **What I Learned:**
  - SEO and SEM strategies
  - Social media marketing
  - Content marketing
  - Email campaigns
  - Analytics and measurement
- **Why I Got It:** To complement my MBA in Marketing with practical digital skills
- **How I Use It:** Apply digital marketing principles in my work and personal projects
- **Favorite Module:** Analytics - because data doesn't lie! 📊

🤝 **CRM Fundamentals - HubSpot**
- **Issuer:** HubSpot Academy
- **What I Learned:**
  - Customer relationship management principles
  - CRM software best practices
  - Sales pipeline management
  - Customer lifecycle strategies
  - Automation workflows
- **Why I Got It:** To better understand client management systems
- **How I Use It:** Daily! Managing corporate clients at Groww requires strong CRM understanding
- **Key Takeaway:** Happy customers = successful business!

📋 **Project Management Basics - Coursera**
- **Issuer:** Coursera (University-backed)
- **What I Learned:**
  - Project planning and execution
  - Resource management
  - Risk assessment
  - Stakeholder communication
  - Agile methodologies
- **Why I Got It:** To formalize my project management skills
- **How I Use It:** Leading college fest, managing work projects, coordinating cross-functional initiatives
- **Favorite Concept:** Agile thinking - iterate, improve, repeat!

📊 **Advanced Excel - Udemy**
- **Issuer:** Udemy
- **What I Learned:**
  - Advanced formulas (INDEX-MATCH, array formulas)
  - Pivot tables and charts
  - Macros and VBA basics
  - Data analysis techniques
  - Dashboard creation
- **Why I Got It:** Excel is my daily driver - wanted to master it!
- **How I Use It:** Creating reports, analyzing data, building dashboards at Groww
- **Coolest Skill:** Automated a weekly report that used to take 3 hours - now takes 5 minutes! ⚡

**My Learning Philosophy:**

📚 **Continuous Growth:** Technology and business evolve fast - I need to keep up!
🎯 **Practical Application:** I only learn things I can actually use
💡 **Skill Stacking:** Each certification builds on the others
🚀 **Next on My List:** Python for Data Analysis, Advanced Tableau, AWS Fundamentals

**Why Certifications Matter to Me:**
They're not just badges - they're proof that I invest in myself and stay current with industry trends. Plus, I genuinely enjoy learning new things!

**Fun Fact:** I completed the Google Digital Marketing certification while working full-time and pursuing my MBA. Sleep is overrated, right? 😄 (Just kidding, sleep is important!)`
        },

        // INTERESTS - Personal & Relatable
        interests: {
            keywords: ['interest', 'hobby', 'passion', 'like', 'enjoy', 'love', 'free time', 'outside work', 'fun'],
            short: "Love data analysis, digital marketing, sustainability projects, and staying updated with fintech trends. Also enjoy exploring Bangalore's food scene and learning new tech skills!",
            full: `**What I'm Passionate About (Beyond Work):**

📊 **Data & Analytics Geek**
- I genuinely enjoy playing with data (yes, I'm that person!)
- Love finding patterns and insights
- Build personal dashboards for fun
- Follow data visualization experts on social media
- *Guilty Pleasure:* Spending hours perfecting a Tableau dashboard 😄

💻 **Tech Enthusiast**
- Always exploring new tools and platforms
- Love learning about fintech innovations
- Follow tech blogs and podcasts
- Experiment with new software
- *Current Obsession:* AI tools and automation

🌱 **Sustainability Advocate**
- Won Recycle Mania (product design with waste materials)
- Believe in responsible consumption
- Interested in circular economy concepts
- Try to make eco-friendly choices
- *Dream Project:* Build a sustainable business model

📱 **Digital Marketing Buff**
- Love analyzing social media campaigns
- Follow marketing trends and case studies
- Experiment with content strategies
- Enjoy creative storytelling
- *Fun Activity:* Critiquing ads (in my head) while watching TV 😂

🍜 **Bangalore Food Explorer**
- Trying different cuisines across the city
- From street food to fine dining
- Love discovering hidden gems
- *Current Mission:* Find the best dosa in Bangalore!
- *Miss Most:* Authentic Gujarati thepla from home 🏠

🎯 **Continuous Learner**
- Always taking online courses
- Reading business books
- Watching educational content
- Attending webinars and workshops
- *Current Read:* Marketing and business strategy books

🏆 **Competitive Spirit**
- Love challenges and competitions
- Enjoy problem-solving contests
- Thrive under pressure
- *Proof:* Won AAGMAN and Recycle Mania!

**What Drives Me:**
I'm curious about everything! Whether it's understanding how a new app works, analyzing why a campaign went viral, or figuring out how to make a process more efficient - I love learning and improving.

**Weekend Vibes:**
You'll find me either working on a personal project, exploring Bangalore, catching up with friends, or video calling family in Gujarat!

**Fun Fact:** I once spent an entire weekend building an automated expense tracker in Google Sheets just because I was curious if I could. Spoiler: I could! 🎉`
        },

        // CONTACT - Friendly & Accessible
        contact: {
            keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'connect', 'linkedin', 'get in touch', 'talk'],
            short: "📧 sumitrd22@nsb.edu.in | 📱 +91 82001-68197 | 💼 LinkedIn: linkedin.com/in/sumit-damor-918b33184 | 📍 Bangalore, India. Always happy to connect!",
            full: `**Let's Connect! (I'd Love to Hear from You)**

📧 **Email:** sumitrd22@nsb.edu.in
- Best for: Detailed discussions, opportunities, collaborations
- Response time: Usually within 24 hours
- *Pro tip:* I check emails regularly, so don't hesitate to reach out!

📱 **Phone:** +91 82001-68197
- Best for: Quick chats, urgent matters
- Available: Business hours (flexible for important calls)
- *Note:* WhatsApp works too!

💼 **LinkedIn:** [linkedin.com/in/sumit-damor-918b33184](https://linkedin.com/in/sumit-damor-918b33184)
- Best for: Professional networking, staying updated
- I'm active here: Share insights, engage with content
- *Let's connect:* Always open to expanding my network!

📍 **Location:** Bangalore, Karnataka, India
- Open to: Coffee chats, networking meetups
- *Fun fact:* Know any great cafes in Bangalore? Let me know!

**What You Can Reach Out For:**

✅ **Job Opportunities:** Always interested in exciting roles!
✅ **Collaborations:** Have a project idea? Let's discuss!
✅ **Networking:** Love connecting with like-minded professionals
✅ **Advice:** Happy to share insights about operations, fintech, or MBA journey
✅ **Just Chat:** Seriously, I enjoy good conversations!

**My Response Style:**
- Quick replies (I respect your time!)
- Clear communication
- Friendly and professional
- Always helpful

**Currently Open To:**
- Full-time opportunities in operations, analytics, or marketing
- Freelance projects (data analysis, process optimization)
- Networking and knowledge sharing
- Mentorship (both ways - I love learning from others too!)

**Social Media:**
- LinkedIn: Most active here
- Email: For detailed conversations
- Phone: For quick connects

**Fun Fact:** I reply to messages faster than Bangalore traffic moves (which isn't saying much, but I'm genuinely quick! 😄)

**Let's make something awesome together! 🚀**`
        },

        // WORK EXPERIENCE - Detailed Stories
        experience: {
            keywords: ['experience', 'work history', 'previous', 'career', 'professional', 'jobs', 'worked', 'employment history'],
            short: "Currently at Groww (July 2024-Present) as Order Processing & Revenue Operations Associate, managing corporate client subscriptions. This is my first full-time role and I'm loving the fintech space!",
            full: `**My Professional Journey:**

🏢 **Current Role: Groww Invest-Tech Private Limited**
📅 **Duration:** July 2024 - Present
📍 **Location:** Bangalore, India
💼 **Position:** Order Processing & Revenue Operations Associate - Corporate Cloud Subscription Clients

**The Company:**
Groww is one of India's leading investment platforms - you've probably heard of it! They offer mutual funds, stocks, tax planning, and investment management services. I'm proud to be part of this fintech revolution! 🚀

**My Day-to-Day (The Real Picture):**

**Morning:**
- Check overnight tickets and urgent issues
- Review subscription renewals due today
- Quick sync with the team
- *Coffee count:* Usually 2 by 10 AM ☕

**Core Work:**
1. **Client Management**
   - Handle corporate client tickets (brokers, companies, prop traders)
   - Onboarding new clients (documentation, verification, setup)
   - Resolve issues (execution problems, system errors, connectivity)
   - Maintain relationships (because happy clients = successful business!)

2. **Technical Coordination**
   - Work with engineering teams on technical issues
   - Coordinate platform setup and configurations
   - Troubleshoot system problems
   - *Translation duty:* Explain tech issues to clients, client needs to tech teams!

3. **Revenue Operations**
   - Monitor subscription usage and patterns
   - Track renewals and cancellations
   - Analyze churn reasons
   - Maintain dashboards and reports
   - Identify upsell opportunities

4. **Process Improvement**
   - Identify workflow bottlenecks
   - Suggest automation opportunities
   - Document best practices
   - Collaborate with product and finance teams

**Tools I Live In:**
- Freshdesk (ticket management)
- Jira (issue tracking)
- Google Sheets (data analysis)
- Groww Cloud (our platform)
- Internal OMS (order management)
- Slack (team communication)

**Challenges I've Tackled:**
- Reduced average ticket resolution time by 30%
- Improved client onboarding process
- Created automated reports saving 5+ hours/week
- Handled complex technical issues with grace (and lots of coffee!)

**What I Love About This Role:**
✅ Direct impact on client satisfaction
✅ Learning fintech operations inside-out
✅ Cross-functional collaboration
✅ Data-driven decision making
✅ Solving unique problems daily
✅ Amazing team and culture

**What I've Learned:**
- Fintech operations are complex but fascinating
- Client management is both art and science
- Data tells stories if you know how to listen
- Collaboration > working in silos
- Coffee is essential (just kidding... or am I? ☕)

**Career Growth:**
This is my first full-time role after completing my BA in Economics, and I'm pursuing my MBA in Marketing alongside. It's challenging but incredibly rewarding!

**Fun Work Moments:**
- Successfully onboarded a major corporate client (celebration time!)
- Solved a complex technical issue that had everyone stumped
- Got appreciation from a client for quick resolution
- Built a dashboard that the whole team now uses

**What's Next:**
I'm focused on mastering revenue operations, deepening my fintech knowledge, and continuing to deliver exceptional client experiences. Sky's the limit! 🚀

**Previous Experience:**
This is my first full-time professional role, but I've worked on multiple projects during college (Digital India Campaign, MERN Stack development, Website Quality Analysis) and led teams for college events. Each experience taught me valuable skills!`
        },

        // REVENUE OPERATIONS - Specialized Knowledge
        revenueOps: {
            keywords: ['revenue', 'operations', 'subscription', 'renewal', 'churn', 'lifecycle', 'saas', 'recurring'],
            short: "I handle subscription lifecycle management - monitoring usage, tracking renewals, analyzing churn, and maintaining revenue dashboards. Love the data-driven aspect of keeping clients happy and subscriptions active!",
            full: `**My Revenue Operations Expertise:**

💰 **What is Revenue Operations? (In Simple Terms)**
It's about making sure the money keeps flowing! I manage the entire subscription lifecycle - from activation to renewal - and identify opportunities to grow revenue while keeping clients happy.

**My Responsibilities:**

📊 **Subscription Monitoring**
- Track active subscriptions
- Monitor usage patterns
- Identify underutilized accounts
- Flag potential issues early
- *My Approach:* Proactive, not reactive!

🔄 **Renewal Management**
- Track upcoming renewals
- Reach out to clients proactively
- Address concerns before they become problems
- Ensure smooth renewal process
- *Success Metric:* Improved renewal rates through early engagement!

📉 **Churn Analysis**
- Identify why clients cancel
- Analyze patterns and trends
- Provide insights to product team
- Suggest retention strategies
- *Key Learning:* Most churn is preventable with early intervention!

📈 **Revenue Dashboards**
- Maintain real-time dashboards
- Track key metrics (MRR, ARR, churn rate, renewal rate)
- Provide insights to leadership
- Identify growth opportunities
- *Tools:* Google Sheets, Tableau, internal systems

**Key Metrics I Track:**

1. **MRR (Monthly Recurring Revenue)**
   - Total subscription revenue per month
   - Growth trends
   - Segment-wise breakdown

2. **Churn Rate**
   - Percentage of clients canceling
   - Reasons for cancellation
   - Trends over time

3. **Renewal Rate**
   - Percentage of clients renewing
   - Time to renewal
   - Renewal value changes

4. **Customer Lifetime Value (CLV)**
   - Long-term revenue per client
   - Helps prioritize high-value clients

5. **Usage Metrics**
   - Platform utilization
   - Feature adoption
   - Engagement levels

**Cross-Functional Collaboration:**

🤝 **With Product Team:**
- Share client feedback
- Suggest feature improvements
- Identify pain points
- *Impact:* Client insights drive product decisions!

💻 **With Engineering:**
- Report technical issues
- Coordinate fixes
- Test new features
- *Role:* Bridge between clients and tech!

💼 **With Finance:**
- Reconcile subscription data
- Track payment issues
- Forecast revenue
- *Goal:* Accurate financial reporting!

**Real Impact I've Made:**

✅ Identified patterns in churn and suggested retention strategies
✅ Created automated renewal reminders (reduced missed renewals)
✅ Built dashboards that leadership uses for decision-making
✅ Improved client communication during renewal process
✅ Streamlined subscription activation workflow

**What I Love About RevOps:**
- It's data-driven (numbers don't lie!)
- Direct impact on business growth
- Combines analysis with client interaction
- Always learning and optimizing
- Satisfying to see retention rates improve!

**My RevOps Philosophy:**
Happy clients renew. Engaged clients upgrade. Proactive management prevents churn. Data guides decisions. Simple! 🎯

**Fun Fact:** I once predicted a potential churn risk just by analyzing usage patterns, reached out proactively, resolved the issue, and saved the account. Felt like a revenue superhero! 🦸‍♂️`
        },

        // STRENGTHS - Personal & Honest
        strengths: {
            keywords: ['strength', 'strong', 'best at', 'good at', 'excel', 'superpower', 'advantage'],
            short: "My superpowers: Analytical thinking, quick problem-solving, client management, and process optimization. I'm also great at explaining complex things simply and staying calm under pressure!",
            full: `**My Superpowers (What I'm Really Good At):**

🧠 **Analytical Thinking**
- I see patterns others miss
- Love diving deep into data
- Connect dots across different information
- Make data-driven decisions
- *Example:* Identified subscription churn pattern that led to process improvement

🚀 **Quick Problem-Solving**
- Think on my feet
- Stay calm under pressure
- Find creative solutions
- Don't give up easily
- *Real Story:* Resolved a critical client issue in 30 minutes that could have taken days

🤝 **Client Management**
- Build strong relationships
- Understand client needs deeply
- Manage expectations well
- Turn frustrated clients into happy ones
- *Feedback I Get:* "You really listen and understand our problems"

⚙️ **Process Optimization**
- Spot inefficiencies quickly
- Love making things smoother
- Automate repetitive tasks
- Document best practices
- *Impact:* Reduced onboarding time by 40% through process improvements

💬 **Clear Communication**
- Explain complex things simply
- Adapt communication style to audience
- Write clear documentation
- Present confidently
- *Skill:* Can talk tech with engineers and business with clients!

📊 **Data Storytelling**
- Turn numbers into insights
- Create compelling dashboards
- Present data that drives decisions
- Make analytics accessible
- *Strength:* My reports actually get read! 😄

🎯 **Attention to Detail**
- Catch errors others miss
- Thorough in documentation
- Verify before executing
- Quality over speed (but I'm fast too!)
- *Saved the day:* Caught a critical error before client onboarding

🔄 **Adaptability**
- Comfortable with change
- Learn new tools quickly
- Thrive in ambiguity
- Flexible approach
- *Proof:* Thriving in fast-paced fintech environment!

🌟 **Ownership Mentality**
- Take full responsibility
- Don't wait to be told
- Proactive, not reactive
- See projects through
- *Attitude:* If it's my task, it's my baby!

**The Unique Combination:**

Economics Background + MBA in Marketing + Operations Experience = 
**Analytical problem-solver who understands both data AND people!**

**What Others Say About Me:**
- "You make complex things sound simple"
- "Always reliable and thorough"
- "Great at finding solutions"
- "Easy to work with across teams"
- "You actually care about getting it right"

**My Secret Sauce:**
I combine analytical rigor with genuine empathy. I don't just solve problems - I understand the people behind them and create solutions that actually work in the real world!

**Continuous Improvement:**
I'm always working on getting better. Currently focusing on: Advanced data visualization, Python for automation, and strategic thinking!

**Fun Fact:** My friends call me the "Excel Wizard" because I can solve almost any problem with a spreadsheet. It's both a compliment and a cry for help! 😂`
        },

        // MBA DETAILS - Personal Journey
        mba: {
            keywords: ['mba', 'nmims', 'marketing', 'business school', 'masters', 'management', 'postgraduate'],
            short: "Pursuing MBA in Marketing from NMIMS Bangalore (2022-2024) while working full-time at Groww. Specializing in marketing strategy, consumer behavior, and digital marketing. It's challenging but worth it!",
            full: `**My MBA Journey (The Real Story):**

🎓 **Program Details:**
- **Institution:** Narsee Monjee Institute of Management Studies (NMIMS), Bangalore
- **Specialization:** Marketing
- **Duration:** 2022 - 2024
- **Mode:** Part-time/Executive (while working full-time!)
- **Status:** Currently pursuing (almost done!)

**Why MBA? Why Marketing?**

📚 **The Decision:**
After completing my BA in Economics, I realized I loved understanding markets and consumer behavior. But I wanted to go beyond analysis - I wanted to create strategies, build brands, and drive business growth. MBA in Marketing was the perfect next step!

**Why NMIMS?**
- Excellent reputation in marketing education
- Bangalore campus (perfect for fintech exposure)
- Strong industry connections
- Practical, application-focused curriculum
- *Bonus:* Great peer network!

**What I'm Learning:**

📈 **Core Marketing Subjects:**
- Brand Management (building and positioning brands)
- Consumer Behavior (understanding what makes people buy)
- Digital Marketing (SEO, SEM, social media, content)
- Marketing Analytics (data-driven marketing decisions)
- Strategic Marketing (long-term planning and positioning)

💼 **Business Fundamentals:**
- Financial Management (understanding the money side)
- Operations Management (efficiency and processes)
- Business Strategy (competitive advantage)
- Leadership and Organizational Behavior

**The Balancing Act:**

⚖️ **Work + MBA = Challenging but Rewarding**

**My Typical Week:**
- Monday-Friday: Full-time at Groww (9 AM - 6 PM)
- Evenings: MBA classes/assignments (7 PM - 10 PM)
- Weekends: Projects, group work, studying
- Sleep: What's that? 😅 (Just kidding, I manage!)

**Challenges:**
- Time management (it's an art!)
- Balancing work deadlines with academic deadlines
- Group projects with working professionals (scheduling is fun!)
- Staying energized (coffee is my friend ☕)

**Benefits:**
- Apply MBA learnings at work immediately
- Bring work experience to classroom discussions
- Build a strong professional network
- Develop both theoretical and practical skills
- *Best part:* Everything I learn, I can use right away!

**Real-World Application:**

🎯 **How MBA Helps My Work:**
- **Marketing Courses:** Help me understand client needs better
- **Analytics:** Improve my dashboard and reporting skills
- **Strategy:** Think long-term about revenue operations
- **Finance:** Understand business metrics and profitability
- **Leadership:** Manage cross-functional relationships better

**Favorite Courses:**
1. **Digital Marketing** - Love the data-driven approach!
2. **Consumer Behavior** - Understanding psychology behind decisions
3. **Marketing Analytics** - Combining my love for data with marketing
4. **Brand Management** - Creating compelling brand stories

**Projects & Achievements:**

🏆 **Won AAGMAN** - Marketing fest at NSB (proof that I'm learning well!)
📊 **Live Projects** - Worked on real marketing campaigns
👥 **Group Work** - Led multiple team projects
📈 **Case Studies** - Analyzed dozens of business cases

**What This MBA Means to Me:**

✨ **Career Growth:** Opening doors to marketing and strategy roles
✨ **Skill Development:** Becoming a more well-rounded professional
✨ **Network:** Building relationships with amazing peers and faculty
✨ **Confidence:** Validating my career pivot toward marketing
✨ **Future:** Setting foundation for leadership roles

**The Honest Truth:**

Is it tough? Yes!
Is it worth it? Absolutely!
Would I do it again? In a heartbeat!

**Post-MBA Goals:**
- Transition into marketing or growth roles
- Combine my operations experience with marketing strategy
- Maybe product marketing in fintech? (Dream role!)
- Continue learning and growing

**Fun Facts:**
- I've pulled more all-nighters for MBA assignments than I did in my entire BA! 😄
- My Excel skills improved 10x thanks to marketing analytics course
- I can now create a marketing strategy in my sleep (literally had dreams about it!)
- Best decision: Pursuing MBA while working - I'm learning AND earning!

**Graduation:** 2024 (Can't wait to add that MBA to my name! 🎓)`
        },

        // TABLEAU EXPERTISE
        tableau: {
            keywords: ['tableau', 'visualization', 'dashboard', 'data viz', 'charts', 'graphs', 'visual analytics'],
            short: "I use Tableau to create interactive dashboards and visualize data trends. Love turning complex data into beautiful, actionable insights that actually help make decisions!",
            full: `**My Tableau Journey (Making Data Beautiful!):**

📊 **What I Do with Tableau:**

**At Work (Groww):**
- Create revenue operations dashboards
- Visualize subscription trends
- Track renewal and churn metrics
- Monitor client usage patterns
- Present insights to leadership
- *Impact:* My dashboards are used for weekly business reviews!

**Dashboard Types I Build:**

1️⃣ **Revenue Dashboard**
   - MRR and ARR trends
   - Subscription growth
   - Revenue by client segment
   - Month-over-month comparisons
   - *Audience:* Finance and leadership teams

2️⃣ **Client Health Dashboard**
   - Usage metrics
   - Engagement scores
   - Renewal risk indicators
   - Support ticket trends
   - *Purpose:* Proactive client management

3️⃣ **Operations Dashboard**
   - Ticket resolution times
   - SLA compliance
   - Team performance
   - Bottleneck identification
   - *Goal:* Process optimization

**My Tableau Skills:**

✅ **Data Connection:**
- Connect to multiple data sources
- Blend data from different systems
- Clean and prepare data
- Create relationships between tables

✅ **Visualization:**
- Choose the right chart type
- Create interactive visualizations
- Use color effectively
- Design for clarity and impact

✅ **Advanced Features:**
- Calculated fields
- Parameters for interactivity
- Filters and actions
- Dashboard actions
- Tooltips with insights

✅ **Best Practices:**
- Design for the audience
- Keep it simple but powerful
- Use consistent formatting
- Tell a story with data
- Make it actionable

**What I Love About Tableau:**

💡 **Makes Data Accessible:**
- Non-technical people can understand insights
- Interactive exploration
- Self-service analytics
- *Philosophy:* Data should be democratic!

🎨 **Creative Freedom:**
- Design beautiful dashboards
- Experiment with visualizations
- Make data engaging
- *Fun:* It's like art, but with numbers!

⚡ **Quick Insights:**
- Spot trends instantly
- Identify outliers
- Compare metrics easily
- *Power:* What took hours in Excel takes minutes in Tableau!

**Real Examples:**

📈 **Success Story 1:**
Built a churn prediction dashboard that helped identify at-risk clients 2 weeks before renewal. Result: Improved retention by proactive outreach!

📊 **Success Story 2:**
Created an operations efficiency dashboard that revealed bottlenecks in our onboarding process. Result: 40% reduction in onboarding time!

🎯 **Success Story 3:**
Designed a client usage dashboard that helped identify upsell opportunities. Result: Revenue team loved it!

**My Tableau Philosophy:**

1. **Clarity > Complexity:** Simple dashboards that answer questions
2. **Action > Information:** Insights that drive decisions
3. **Story > Stats:** Data that tells a compelling narrative
4. **User > Creator:** Design for the audience, not yourself

**Continuous Learning:**

📚 **Currently Exploring:**
- Advanced calculations
- Predictive analytics in Tableau
- Dashboard performance optimization
- Mobile-first dashboard design

**Certifications:**
- Working toward Tableau Desktop Specialist certification
- Completed multiple Tableau courses on Udemy
- Active in Tableau community

**Fun Facts:**
- I've spent entire weekends perfecting a single dashboard (worth it!)
- My team calls me for Tableau help (proud moment!)
- I dream in bar charts and line graphs (okay, maybe not, but almost! 😄)
- Once created a dashboard so good, it got shared with the entire company!

**Want to See My Work?**
I'd love to show you some of my dashboards! They're confidential, but I can walk you through my approach and methodology! 📊✨`
        },

        // FRESHDESK EXPERTISE
        freshdesk: {
            keywords: ['freshdesk', 'ticketing', 'support', 'helpdesk', 'customer service', 'ticket management'],
            short: "I use Freshdesk daily to manage corporate client tickets, track support requests, ensure SLA compliance, and maintain client satisfaction. It's my command center for client operations!",
            full: `**My Freshdesk Expertise (Ticket Management Pro!):**

🎫 **What I Do with Freshdesk:**

**Daily Operations:**
- Manage corporate client tickets
- Track support requests
- Ensure SLA compliance
- Prioritize urgent issues
- Coordinate with internal teams
- Maintain client communication
- *Volume:* Handle 20-30 tickets daily on average

**My Freshdesk Workflow:**

🌅 **Morning Routine:**
1. Check overnight tickets
2. Prioritize by urgency and SLA
3. Respond to critical issues first
4. Update ticket statuses
5. Set reminders for follow-ups
   *Coffee count by 10 AM:* Usually 2 ☕

📋 **Ticket Management:**

**Categorization:**
- Onboarding requests
- Technical issues
- Account queries
- Billing questions
- Feature requests
- Escalations

**Prioritization:**
- P1: Critical (immediate response)
- P2: High (within 2 hours)
- P3: Medium (within 4 hours)
- P4: Low (within 24 hours)
- *My Rule:* Never let a P1 wait!

**Resolution Process:**
1. Acknowledge ticket immediately
2. Understand the issue thoroughly
3. Investigate and diagnose
4. Coordinate with relevant teams
5. Implement solution
6. Verify with client
7. Close with documentation
   *Goal:* First-contact resolution whenever possible!

**Features I Use:**

✅ **Automation:**
- Auto-assign tickets based on type
- Trigger notifications for SLA breaches
- Send auto-responses for common queries
- Escalate overdue tickets
- *Impact:* Saved hours of manual work!

✅ **Canned Responses:**
- Created templates for common issues
- Personalize before sending
- Maintain consistency
- Speed up response time
- *Balance:* Efficient but not robotic!

✅ **Collaboration:**
- Add notes for team visibility
- Tag relevant team members
- Create child tickets for complex issues
- Share knowledge base articles
- *Philosophy:* Teamwork makes the dream work!

✅ **Reporting:**
- Track resolution times
- Monitor SLA compliance
- Analyze ticket trends
- Identify recurring issues
- Generate performance reports
- *Use:* Data-driven process improvements!

**My Freshdesk Stats:**

📊 **Performance Metrics:**
- Average response time: <30 minutes
- First-contact resolution: 70%+
- SLA compliance: 95%+
- Client satisfaction: 4.5+/5
- *Secret:* Proactive communication and quick action!

**Challenges I've Handled:**

🔥 **Complex Technical Issues:**
- Coordinated with engineering teams
- Provided detailed logs and screenshots
- Kept client updated throughout
- Ensured timely resolution
- *Learning:* Patience and clear communication are key!

⚡ **High-Pressure Situations:**
- Multiple P1 tickets simultaneously
- Angry clients needing immediate help
- System-wide issues affecting many clients
- *Approach:* Stay calm, prioritize, communicate!

🎯 **Process Improvements:**
- Identified common issues and created knowledge base articles
- Suggested product improvements based on ticket trends
- Streamlined ticket routing
- Reduced average resolution time by 30%

**What I Love About Freshdesk:**

💚 **User-Friendly:**
- Clean interface
- Easy to navigate
- Powerful features
- Mobile app for on-the-go

🔧 **Customizable:**
- Adapt to our workflow
- Create custom fields
- Set up automation rules
- Build custom reports

📈 **Insightful:**
- Track performance metrics
- Identify trends
- Measure team efficiency
- Data-driven decisions

**My Freshdesk Philosophy:**

1. **Speed Matters:** Quick acknowledgment builds trust
2. **Clarity Wins:** Clear communication prevents confusion
3. **Ownership Counts:** Take responsibility, see it through
4. **Empathy First:** Understand the client's frustration
5. **Document Everything:** Future you will thank present you!

**Tips I've Learned:**

💡 **Best Practices:**
- Always acknowledge tickets within 15 minutes
- Set realistic expectations
- Update clients proactively
- Use internal notes for team coordination
- Close tickets with summary and next steps
- *Golden Rule:* Treat every ticket like it's the most important one!

**Real Success Stories:**

🌟 **Story 1:**
Client had a critical issue during market hours. Coordinated with engineering, resolved in 45 minutes, client sent appreciation email. Felt amazing!

🌟 **Story 2:**
Identified a pattern in tickets, suggested a product fix, engineering implemented it, reduced similar tickets by 80%!

🌟 **Story 3:**
Turned an angry client into a happy one through patient communication and quick resolution. They specifically mentioned me in their feedback!

**Fun Facts:**
- I can type ticket responses faster than most people can read them! ⚡
- My canned responses are so good, colleagues ask to copy them
- I've resolved tickets while in a cab, at a cafe, even during lunch (dedication!)
- Once handled 50+ tickets in a single day (record day, never again! 😅)

**Freshdesk = My Second Home:**
I spend so much time in Freshdesk, I should probably pay rent! But honestly, I love the satisfaction of closing tickets and helping clients. Every resolved ticket is a small win! 🎉`
        },

        // FALLBACK - Friendly & Helpful
        fallback: {
            keywords: [],
            short: "I'm not sure I have specific information about that, but I'd love to help! Could you ask about my experience, skills, projects, education, or anything else from my portfolio?",
            full: `**Hmm, I'm not sure I have specific information about that! 🤔**

But don't worry - I know a LOT about Sumit! Here's what I can help you with:

**About Sumit:**
- Personal background and story
- Where he's from (Gujarat!) and where he lives (Bangalore!)
- His journey and interests

**Professional:**
- Current role at Groww
- Work experience and responsibilities
- Revenue operations expertise
- Client management skills

**Education:**
- MBA in Marketing (NMIMS)
- BA in Economics
- Certifications

**Skills & Tools:**
- Technical skills (Excel, Tableau, Freshdesk, Jira)
- Business skills (client management, process optimization)
- Analytical capabilities

**Projects:**
- Digital India Campaign
- MERN Stack E-Commerce
- Website Quality Analysis

**Achievements:**
- AAGMAN winner
- Recycle Mania champion
- College fest leadership

**Personal:**
- Languages spoken (English, Hindi, Gujarati)
- Interests and hobbies
- Contact information

**Try asking:**
- "Tell me about Sumit"
- "What does he do at Groww?"
- "Does he know Tableau?"
- "What languages does he speak?"
- "Tell me about his achievements"
- "How can I contact him?"

**Or just ask naturally!** I'm here to help you learn about Sumit's background, skills, and experience. What would you like to know? 😊`
        }
    };

    // Detect if user wants short answer
    function wantsShortAnswer(message) {
        const shortIndicators = [
            'in short', 'briefly', 'quick', 'summary', 'tldr', 'tl;dr',
            'short answer', 'quick answer', 'in brief', 'concise',
            'one line', 'few words', 'summarize', 'shortly'
        ];
        const lowerMessage = message.toLowerCase();
        return shortIndicators.some(indicator => lowerMessage.includes(indicator));
    }

    // Smart matching function
    function findBestMatch(message) {
        const lowerMessage = message.toLowerCase();
        let bestMatch = null;
        let highestScore = 0;

        for (const [topic, data] of Object.entries(knowledge)) {
            if (topic === 'fallback') continue;
            
            let score = 0;
            for (const keyword of data.keywords) {
                if (lowerMessage.includes(keyword.toLowerCase())) {
                    score += keyword.split(' ').length; // Multi-word keywords score higher
                }
            }

            if (score > highestScore) {
                highestScore = score;
                bestMatch = topic;
            }
        }

        return highestScore > 0 ? bestMatch : 'fallback';
    }

    // Format response with markdown
    function formatResponse(text) {
        // Convert markdown-style formatting to HTML
        text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); // Bold
        text = text.replace(/\*(.+?)\*/g, '<em>$1</em>'); // Italic
        text = text.replace(/^- (.+)$/gm, '• $1'); // Bullet points
        text = text.replace(/^(\d+)\. /gm, '<strong>$1.</strong> '); // Numbered lists
        text = text.replace(/\n\n/g, '</p><p>'); // Paragraphs
        text = text.replace(/\n/g, '<br>'); // Line breaks
        
        return '<p>' + text + '</p>';
    }

    // Main chatbot function
    function getResponse(message) {
        const topic = findBestMatch(message);
        const isShort = wantsShortAnswer(message);
        const data = knowledge[topic];
        
        const response = isShort ? data.short : data.full;
        return formatResponse(response);
    }

    // Initialize chatbot
    function initChatbot(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Add inline class to container
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container inline-chatbot';
        
        // Create chat window (always visible in inline mode)
        const chatWindow = document.createElement('div');
        chatWindow.className = 'chat-window inline-chat-window';
        chatWindow.style.display = 'flex';
        
        chatWindow.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-content">
                    <div class="chat-avatar">SD</div>
                    <div class="chat-header-text">
                        <div class="chat-title">Ask About Sumit</div>
                        <div class="chat-status">
                            <span class="status-dot"></span>
                            Ready to answer!
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-messages">
                <div class="message bot-message">
                    <div class="message-content">
                        <p>👋 Hey! I'm Sumit's AI assistant. Ask me anything about:</p>
                        <p>
                            • My work at Groww<br>
                            • Skills & tools (Freshdesk, Tableau, etc.)<br>
                            • Education (MBA, Economics)<br>
                            • Projects & achievements<br>
                            • Languages & location<br>
                            • How to contact me
                        </p>
                        <p><em>Try: "Tell me about Sumit" or "Does he know Tableau?"</em></p>
                        <p><strong>Tip:</strong> Add "in short" for brief answers!</p>
                    </div>
                </div>
            </div>
            <div class="chat-input-container">
                <input type="text" class="chat-input" placeholder="Ask me anything about Sumit...">
                <button class="chat-send">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                </button>
            </div>
        `;

        chatbotContainer.appendChild(chatWindow);
        container.appendChild(chatbotContainer);

        // Get elements
        const messagesContainer = chatWindow.querySelector('.chat-messages');
        const input = chatWindow.querySelector('.chat-input');
        const sendButton = chatWindow.querySelector('.chat-send');

        // Add message function
        function addMessage(text, isBot = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
            
            const contentDiv = document.createElement('div');
            contentDiv.className = 'message-content';
            contentDiv.innerHTML = text;
            
            messageDiv.appendChild(contentDiv);
            messagesContainer.appendChild(messageDiv);
            
            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // Handle send
        function handleSend() {
            const message = input.value.trim();
            if (!message) return;

            // Add user message
            addMessage(message, false);
            input.value = '';

            // Show typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot-message typing-indicator';
            typingDiv.innerHTML = '<div class="message-content"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // Get response after delay
            setTimeout(() => {
                typingDiv.remove();
                const response = getResponse(message);
                addMessage(response, true);
            }, 800);
        }

        // Event listeners
        sendButton.addEventListener('click', handleSend);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }

    // Auto-initialize if container exists
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initChatbot('chatbot-inline-container');
        });
    } else {
        initChatbot('chatbot-inline-container');
    }

    // Export for manual initialization
    window.initSumitChatbot = initChatbot;
})();
