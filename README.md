# **AI Chat Bot with Google Login and Gemini API**

Welcome to the **AI Chat Bot** project! This is a simple yet powerful web application that allows users to log in with their Google account and interact with the **Gemini API** (Google's generative AI). The app features a clean and modern user interface, real-time chat functionality, and seamless integration with Google OAuth 2.0.

---

## **Features**
1. **Google OAuth 2.0 Login:**
   - Users can log in using their Google account.
   - Displays the logged-in user's name after authentication.

2. **Interactive Chat Interface:**
   - Real-time chat with the Gemini API.
   - Streaming effect for bot responses.
   - Distinct styles for user and bot messages.

3. **Modern UI:**
   - Glassmorphism design for a sleek look.
   - Smooth animations for transitions.
   - Responsive layout for all screen sizes.

4. **Error Handling:**
   - Displays error messages if the API fails to respond.

---

## **Technologies Used**
- **Frontend:**
  - HTML5, CSS3, JavaScript
  - Google Identity Services for OAuth 2.0
- **Backend:**
  - Gemini API (Generative AI by Google)
- **Styling:**
  - Glassmorphism effect
  - Custom animations and transitions

---

## **Setup Instructions**

### **1. Prerequisites**
- A Google account to create OAuth credentials and Gemini API key.
- A local server to run the project (e.g., VS Code Live Server, Python HTTP Server, etc.).

---

### **2. Clone the Repository**
To get started, clone this repository to your local machine:
```bash
git clone https://github.com/shreyanshtri26/AI-chat-bot.git
cd AI-chat-bot
```

---

### **3. Get Google OAuth Client ID**
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the **Google Identity Toolkit API**.
4. Configure the **OAuth Consent Screen**:
   - Set the application type to **External**.
   - Add your email as the developer contact.
5. Create **OAuth 2.0 Credentials**:
   - Set the application type to **Web Application**.
   - Add `http://localhost` and `http://localhost:5500` (or your server's URL) to **Authorized JavaScript Origins** and **Authorized Redirect URIs**.
6. Copy the **Client ID**.

---

### **4. Get Gemini API Key**
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Click **Get API Key**.
3. Create a new API key and copy it.

---

### **5. Configure the Project**
1. Open the `index.html` file and replace `YOUR_GOOGLE_CLIENT_ID` with your actual Google OAuth Client ID:
   ```html
   <div id="g_id_onload"
        data-client_id="YOUR_GOOGLE_CLIENT_ID"
        data-callback="handleCredentialResponse">
   </div>
   ```
2. Open the `script.js` file and replace `YOUR_GEMINI_API_KEY` with your actual Gemini API key:
   ```javascript
   let GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';
   ```

---

### **6. Run the Project Locally**
1. Open the project folder in VS Code (or any code editor).
2. Use a local server to run the project:
   - **VS Code Live Server:**
     - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
     - Right-click on `index.html` and select **Open with Live Server**.
   - **Python HTTP Server:**
     - Open a terminal in the project folder and run:
       ```bash
       python -m http.server 5500
       ```
     - Open your browser and go to `http://localhost:5500`.
3. The app will open in your browser.

---

## **How to Use**
1. **Login:**
   - Click the **Login with Google** button.
   - Select your Google account and grant permission.

2. **Chat:**
   - After logging in, you'll see the chat interface.
   - Type your message in the input box and press **Send**.
   - The bot will respond with a streaming effect.

---

## **Project Structure**
```
AI-chat-bot/
├── index.html          # Main HTML file
├── style.css           # CSS for styling
├── script.js           # JavaScript for functionality
└── README.md           # Project documentation
```

---


## **Screenshots**

### **1. Login Page**
![Login Page](https://github.com/user-attachments/assets/9c90821d-4a86-4878-8c63-80e8d7323596)  
*The login page features a clean and modern design with a "Login with Google" button. Users can authenticate using their Google account.*

---

### **2. Chat Interface**
![Chat Interface](https://github.com/user-attachments/assets/56b6345b-6221-498d-b172-2eee386533e3)  
*The chat interface displays the logged-in user's name and provides a real-time chat window powered by the Gemini API. User messages are highlighted, and bot responses are displayed with a streaming effect.*


---

## **Contributing**
Contributions are welcome! If you find any issues or want to enhance the project, feel free to:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---



## **Acknowledgements**
- [Google Cloud Console](https://console.cloud.google.com/) for OAuth 2.0.
- [Google AI Studio](https://aistudio.google.com/app/apikey) for the Gemini API.
- [Glassmorphism Design](https://glassmorphism.com/) for UI inspiration.

---

## **Contact**
For any questions or feedback, feel free to reach out:
- **Name:** Shreyansh Tripathi
- **Email:** shreyanshtripathi1999@gmail.com
- **GitHub:** [shreyanshtri26](https://github.com/shreyanshtri26)

---

Enjoy chatting with the AI bot! 🚀

---
