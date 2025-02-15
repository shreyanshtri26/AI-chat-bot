let GEMINI_API_KEY = 'AIzaSyAYIc8OBr-AA6metwaiyzfhdLPOVIZk98w';
let user = null;

// Google Login Handler
function handleCredentialResponse(response) {
    const userInfo = parseJwt(response.credential);
    user = {
        name: userInfo.name,
        email: userInfo.email
    };
    
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('chat-container').classList.remove('hidden');
    document.getElementById('username').textContent = user.name;
}

// JWT Parser Helper
function parseJwt(token) {
    return JSON.parse(atob(token.split('.')[1]));
}

// Chat Functions
async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const message = userInput.value.trim();
    
    if (!message) return;

    // Add user message
    chatBox.innerHTML += `<div class="user-message">You: ${message}</div>`;
    userInput.value = '';
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: message }]
                }]
            })
        });

        const data = await response.json();
        const geminiResponse = data.candidates[0].content.parts[0].text;
        
        // Add AIresponse with streaming effect
        const botDiv = document.createElement('div');
        botDiv.className = 'bot-message';
        botDiv.textContent = 'AI: ';
        chatBox.appendChild(botDiv);
        
        // Simulate streaming
        let i = 0;
        const streamResponse = async () => {
            while (i < geminiResponse.length) {
                await new Promise(resolve => setTimeout(resolve, 20));
                botDiv.textContent += geminiResponse[i];
                i++;
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }
        await streamResponse();
        
    } catch (error) {
        console.error('Error:', error);
        chatBox.innerHTML += `<div class="error">Error getting response</div>`;
    }
}