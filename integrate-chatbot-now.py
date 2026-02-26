#!/usr/bin/env python3
"""
Automated script to integrate the AI chatbot into index.html
This script will:
1. Read the current index.html
2. Add the AI Assistant section to the home page
3. Add chatbot.css and chatbot.js before </body>
4. Save the updated file
"""

import re

# Read the current index.html content
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# AI Assistant section to add
ai_assistant_section = '''
            <div class="section">
                <h2>💬 AI Assistant</h2>
                <p style="text-align: center; color: var(--text-secondary); margin-bottom: 30px;">
                    Have questions about my experience, skills, or projects? Chat with my AI assistant for instant answers!
                </p>
                <div id="chatbot-inline-container"></div>
            </div>
'''

# Chatbot files to add before </body>
chatbot_files = '''
    <!-- AI Chatbot Integration -->
    <link rel="stylesheet" href="chatbot.css">
    <script src="chatbot.js"></script>
'''

# Step 1: Add AI Assistant section after the Languages section in home page
# Find the Languages section and add the AI Assistant section after it
languages_pattern = r'(</div>\s*</div>\s*</div>\s*</div>\s*<div class="page" id="experience">)'
if re.search(languages_pattern, content):
    content = re.sub(
        languages_pattern,
        ai_assistant_section + r'\n        </div>\n\n        <div class="page" id="experience">',
        content
    )
    print("✅ AI Assistant section added to home page")
else:
    print("❌ Could not find Languages section pattern")
    # Try alternative pattern - add before experience page
    alt_pattern = r'(<div class="page" id="experience">)'
    if re.search(alt_pattern, content):
        content = re.sub(
            alt_pattern,
            ai_assistant_section + '\n        </div>\n\n        \\1',
            content
        )
        print("✅ AI Assistant section added using alternative pattern")

# Step 2: Add chatbot files before </body>
if '</body>' in content:
    content = content.replace('</body>', chatbot_files + '\n</body>')
    print("✅ Chatbot CSS and JS files added")
else:
    print("❌ Could not find </body> tag")

# Save the updated content
with open('index-with-chatbot.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✅ Integration complete!")
print("📄 Updated file saved as: index-with-chatbot.html")
print("\n📝 Next steps:")
print("1. Review the file: index-with-chatbot.html")
print("2. If it looks good, rename it to index.html")
print("3. Commit and push to GitHub")
print("\nOr simply replace index.html content with index-with-chatbot.html content!")
