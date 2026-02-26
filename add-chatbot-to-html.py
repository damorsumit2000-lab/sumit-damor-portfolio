#!/usr/bin/env python3
"""
Script to automatically add chatbot integration to index.html
This version works by reading from GitHub and creating an updated file
"""

import requests
import base64
import json

# GitHub configuration
GITHUB_TOKEN = None  # Set if you have a token, otherwise uses public API
REPO_OWNER = "damorsumit2000-lab"
REPO_NAME = "sumit-damor-portfolio"
FILE_PATH = "index.html"

def get_file_from_github():
    """Fetch the current index.html from GitHub"""
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/contents/{FILE_PATH}"
    headers = {}
    if GITHUB_TOKEN:
        headers['Authorization'] = f'token {GITHUB_TOKEN}'
    
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        content = base64.b64decode(data['content']).decode('utf-8')
        return content, data['sha']
    else:
        print(f"Error fetching file: {response.status_code}")
        return None, None

def integrate_chatbot(content):
    """Add chatbot integration to HTML content"""
    
    # Check if already integrated
    if 'chatbot.css' in content or 'chatbot.js' in content:
        print("✅ Chatbot is already integrated!")
        return None
    
    # Find the closing </body> tag
    if '</body>' not in content:
        print("❌ Error: Could not find </body> tag in index.html")
        return None
    
    # Prepare the chatbot integration code
    chatbot_integration = '''
    <!-- AI Chatbot Integration -->
    <link rel="stylesheet" href="chatbot.css">
    <script src="chatbot.js"></script>
</body>'''
    
    # Replace the closing </body> tag with our integration
    updated_content = content.replace('</body>', chatbot_integration)
    
    return updated_content

def main():
    print("🤖 Fetching index.html from GitHub...")
    content, sha = get_file_from_github()
    
    if not content:
        print("❌ Failed to fetch file from GitHub")
        return
    
    print("✅ File fetched successfully")
    print("🔧 Integrating chatbot...")
    
    updated_content = integrate_chatbot(content)
    
    if updated_content:
        # Save to local file for manual upload
        with open('index-updated.html', 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print("✅ Chatbot integration complete!")
        print("\n📝 Next steps:")
        print("1. File saved as 'index-updated.html'")
        print("2. Review the changes")
        print("3. Rename to 'index.html' and upload to GitHub")
        print("4. Or copy the content and paste into GitHub web editor")
        print("\nThe chatbot will appear in the bottom-right corner of your portfolio!")

if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        print(f"❌ Error: {str(e)}")
