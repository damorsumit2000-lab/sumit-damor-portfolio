#!/usr/bin/env python3
"""
Script to automatically add chatbot integration to index.html
Run this script to add the chatbot CSS and JS to your portfolio
"""

def integrate_chatbot():
    # Read the current index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if chatbot is already integrated
    if 'chatbot.css' in content or 'chatbot.js' in content:
        print("✅ Chatbot is already integrated!")
        return
    
    # Find the closing </body> tag
    if '</body>' not in content:
        print("❌ Error: Could not find </body> tag in index.html")
        return
    
    # Prepare the chatbot integration code
    chatbot_integration = '''
    <!-- AI Chatbot Integration -->
    <link rel="stylesheet" href="chatbot.css">
    <script src="chatbot.js"></script>
</body>'''
    
    # Replace the closing </body> tag with our integration
    updated_content = content.replace('</body>', chatbot_integration)
    
    # Write the updated content back
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print("✅ Chatbot successfully integrated into index.html!")
    print("\n📝 Next steps:")
    print("1. Get your free Gemini API key from: https://ai.google.dev")
    print("2. Open chatbot.js and replace 'YOUR_GEMINI_API_KEY_HERE' with your key")
    print("3. Test locally or commit and push to GitHub Pages")
    print("\nSee CHATBOT_SETUP.md for detailed instructions.")

if __name__ == '__main__':
    try:
        integrate_chatbot()
    except FileNotFoundError:
        print("❌ Error: index.html not found in current directory")
        print("Make sure you're running this script from your portfolio directory")
    except Exception as e:
        print(f"❌ Error: {str(e)}")
