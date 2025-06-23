const quotes = {
    happy: [
        "Happiness is not something ready-made. It comes from your own actions. 😊",
        "The best way to cheer yourself up is to try to cheer someone else up. 😄",
        "Do more of what makes you happy! ✨"
    ],
    sad: [
        "Tears come from the heart and not from the brain. 😢",
        "Sadness flies away on the wings of time. ⏳",
        "Even the darkest night will end and the sun will rise. ☀️"
    ],
    serious: [
        "Success is not final, failure is not fatal: It is the courage to continue that counts. 💪",
        "The only way to do great work is to love what you do. ❤️",
        "Life is 10% what happens to us and 90% how we react to it. 💡"
    ],
    motivation: [
        "Don't watch the clock; do what it does. Keep going. 🔥",
        "Success usually comes to those who are too busy to be looking for it. 🚀",
        "The secret of getting ahead is getting started. 🏆"
    ]
};

const images = {
    happy: ["images/happy1.png", "images/happy2.png", "images/happy3.png", "images/happy4.png", "images/happy5.png"],
    sad: ["images/sad1.png", "images/sad2.png", "images/sad3.png", "images/sad4.png", "images/sad5.png"],
    serious: ["images/serious1.png", "images/serious2.png", "images/serious3.png", "images/serious4.png", "images/serious5.png"],   
    motivation: ["images/motivation1.png", "images/motivation2.png", "images/motivation3.png", "images/motivation4.png", "images/motivation5.png"]
};

// Function to select 3 random images and a random quote based on mood
function generateQuote() {
    const mood = document.getElementById("moodSelect").value;

    const randomQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
    document.getElementById("quote").innerText = randomQuote;
    
    // Copy the array to prevent modification and shuffle it
    const shuffledImages = [...images[mood]].sort(() => 0.5 - Math.random());

    document.getElementById("img1").src = shuffledImages[0];
    document.getElementById("img2").src = shuffledImages[1];
    document.getElementById("img3").src = shuffledImages[2]; 
}

document.getElementById("moodSelect").addEventListener("change", generateQuote);

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    // Save user preference in local storage
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});


// Social Media Share Function
function shareQuote() {
    const quoteText = document.getElementById("quote").innerText;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText)}`;
    window.open(whatsappUrl, "_blank");
}
