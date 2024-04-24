function typeText() {
    var mainText = "Exciting news! Tailor at your tip is launching soon."; // Static text
    var loopText = " Sign up and be the first to experience personalized tailoring at it’s finest!"; // Text to be looped
    var interval = 100; // Adjust the typing speed (in milliseconds)
    var index = 0; // Initialize the index for typing

    var h1Element = document.querySelector('.content h1');
    h1Element.textContent = mainText; // Set the initial text

    function typeNextLetter() {
        var currentText = h1Element.textContent;

        // Check if all loop text is typed
        if (currentText === mainText + loopText) {
            // Reset index when all loop text is typed
            index = 0;
            // Clear loop text after a brief delay
            setTimeout(clearLoopText, 2000);
            return;
        }

        // Concatenate next letter to the current text
        var newText = currentText + loopText.charAt(index);
        // Check if the last character of the main text is a full stop and there's no space
        if (currentText.endsWith('.') && currentText[currentText.length - 1] !== ' ') {
            newText += ' '; // Add a space after the full stop
        }
        h1Element.textContent = newText;

        // Increment index for next letter
        index++;

        // Set timeout to call itself recursively
        setTimeout(typeNextLetter, interval);
    }

    function clearLoopText() {
        // Clear loop text
        var currentText = h1Element.textContent;
        var newText = currentText.substring(0, mainText.length);
        h1Element.textContent = newText;

        // Start typing loop text again after clearing it
        setTimeout(typeNextLetter, 1000);
    }

    // Start typing loop text
    setTimeout(typeNextLetter, 2000);
}

// Call the function to start the typing loop
typeText();
