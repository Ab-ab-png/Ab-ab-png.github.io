document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Greeting Based on Time of Day
    const hours = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    
    if (hours < 12) {
        greetingElement.textContent = 'Good Morning! Welcome to [Islam Server]';
    } else if (hours < 18) {
        greetingElement.textContent = 'Good Afternoon! Welcome to [Islam Server]';
    } else {
        greetingElement.textContent = 'Good Evening! Welcome to [Islam Server]';
    }

    // Typewriter Effect for Description
    const text = 'This is a community server where you can chat, play games, and hang out with awesome people. Join us for events, game nights, and great discussions!';
    const descElement = document.getElementById('server-desc');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            descElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Speed of typewriting
        }
    }
    
    typeWriter();
});
