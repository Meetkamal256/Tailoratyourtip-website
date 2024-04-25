function typeText() {
    var mainText = "Sign up and be the first to experience personalized tailoring at it’s finest!"; // Text to be typed
    var interval = 100; // Adjust the typing speed (in milliseconds)
    var index = 0; // Initialize the index for typing

    var paragraphElement = document.querySelector('.content p');

    // Clear existing text content
    paragraphElement.textContent = '';

    function typeNextLetter() {
        // Check if all text is typed
        if (index === mainText.length) {
            return;
        }

        // Concatenate next letter to the current text
        var newText = mainText.substring(0, index + 1);
        paragraphElement.textContent = newText;

        // Increment index for next letter
        index++;

        // Set timeout to call itself recursively
        setTimeout(typeNextLetter, interval);
    }

    // Start typing text
    setTimeout(typeNextLetter, 2000); // Delay before starting the typing animation
}

// Call the function to start the typing animation
typeText();
