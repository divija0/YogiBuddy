
const API_KEY = 'AIzaSyDj9PTKW4D4cUMeQZJAwTUpm_TBKXpbQOk'; // 🚨 For testing only

function toggleChatbot() {
    const window = document.querySelector(".chatbot-window");
    window.style.display = window.style.display === "none" ? "block" : "none";
}

function handleChatInput(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

async function sendMessage() {
    const input = document.getElementById("chatbotInput");
    const message = input.value.trim();
    if (!message) return;

    displayMessage(message, "user-message");
    input.value = "";

    // Display loader
    const loaderId = "loader-" + Date.now();
    displayLoader(loaderId);

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: message }
                        ]
                    }
                ]
            }),
        });

        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't understand that.";

        replaceLoaderWithMessage(loaderId, reply);
    } catch (error) {
        replaceLoaderWithMessage(loaderId, "An error occurred. Please try again.");
        console.error(error);
    }
}

function displayLoader(id) {
    const loaderEl = document.createElement("div");
    loaderEl.className = "message bot-message";
    loaderEl.id = id;

    const spinner = document.createElement("div");
    spinner.className = "loader";

    loaderEl.appendChild(spinner);
    document.getElementById("chatbotMessages").appendChild(loaderEl);
    loaderEl.scrollIntoView({ behavior: "smooth" });
}

function replaceLoaderWithMessage(id, text) {
    const loaderEl = document.getElementById(id);
    if (loaderEl) {
        loaderEl.innerHTML = text;
    }
}

function displayMessage(text, className, id = null) {
    const messageEl = document.createElement("div");
    messageEl.className = `message ${className}`;
    if (id) messageEl.id = id;
    messageEl.textContent = text;
    document.getElementById("chatbotMessages").appendChild(messageEl);
    messageEl.scrollIntoView({ behavior: "smooth" });
}

function updateMessage(id, newText) {
    const messageEl = document.getElementById(id);
    if (messageEl) {
        messageEl.textContent = newText;
    }
}