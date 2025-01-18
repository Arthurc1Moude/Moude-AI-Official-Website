// Global Variables
let currentAdIndex = 0;
let ads = [];
let adInterval;

// DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  setupAdSlider();
  setupNavigation();
  setupChat();
});

/* -----------------------
   1. Ad Slider Functions
------------------------ */
function setupAdSlider() {
  ads = document.querySelectorAll(".ad-slide");
  const dots = document.querySelectorAll(".slider-dots div");
  showAd(currentAdIndex);

  // Auto-change ads every 5 seconds
  adInterval = setInterval(() => {
    changeAd((currentAdIndex + 1) % ads.length);
  }, 5000);

  // Add click event to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      changeAd(index);
    });
  });

  function showAd(index) {
    ads.forEach((ad, i) => {
      ad.classList.remove("active");
      dots[i].classList.remove("active");
    });
    ads[index].classList.add("active");
    dots[index].classList.add("active");
    currentAdIndex = index;
  }

  function changeAd(index) {
    clearInterval(adInterval);
    showAd(index);
    adInterval = setInterval(() => {
      changeAd((currentAdIndex + 1) % ads.length);
    }, 5000);
  }
}

/* -----------------------
   2. Navigation Functions
------------------------ */
function setupNavigation() {
  const navLinks = document.querySelectorAll(".navbar ul li a");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("href").replace("#", "");
      changePage(target);
    });
  });

  function changePage(pageId) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");

    navLinks.forEach(link => link.classList.remove("active"));
    document
      .querySelector(`.navbar ul li a[href="#${pageId}"]`)
      .classList.add("active");
  }
}

/* -----------------------
   3. AI Chat Functions
------------------------ */
function setupChat() {
  const chatForm = document.querySelector(".chat-box form");
  const chatInput = document.querySelector(".chat-input");
  const chatMessages = document.querySelector(".chat-messages");

  chatForm.addEventListener("submit", e => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
      appendMessage("user", message);
      chatInput.value = "";
      simulateAiResponse(message);
    }
  });

  function appendMessage(sender, text) {
    const messageBubble = document.createElement("div");
    messageBubble.className = `message ${sender}`;
    messageBubble.innerText = text;
    chatMessages.appendChild(messageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function simulateAiResponse(userMessage) {
    // Simulate a delay for AI response
    setTimeout(() => {
      const aiResponse = generateAiResponse(userMessage);
      appendMessage("ai", aiResponse);
    }, 1500);
  }

  function generateAiResponse(message) {
    // Mock AI response logic
    const responses = [
      "Hello! How can I assist you today?",
      "Moude AI is here to help with your queries.",
      "That sounds interesting. Can you tell me more?",
      "Our AI technology is designed to empower users worldwide."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

/* -----------------------
   Utility Functions
------------------------ */
// Add any global utilities if required in the future
