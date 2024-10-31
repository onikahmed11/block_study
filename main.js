// Select all sections and navigation buttons
const sections = document.querySelectorAll('main > section');
const previousSlideButton = document.getElementById('previous-slide');
const nextSlideButton = document.getElementById('next-slide');
const previousDeckButton = document.getElementById('previous-deck');
const nextDeckButton = document.getElementById('next-deck');
const slideCountDisplay = document.getElementById('slide-count');
const deckCountDisplay = document.getElementById('deck-count');

let currentSlideIndex = 0; // Index of the current slide
let currentDeckIndex = 0; // Index of the current deck

// Function to update the display of the current slide and deck
function updateDisplay() {
    // Hide all sections
    sections.forEach((section, index) => {
        section.style.display = index === currentSlideIndex ? 'block' : 'none';
    });

    // Update slide count display
    slideCountDisplay.textContent = `Slide ${currentSlideIndex + 1} of ${sections.length}`;
}

// Function to go to the previous slide
function goToPreviousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = sections.length - 1; // Loop to the last slide
    }
    updateDisplay();
}

// Function to go to the next slide
function goToNextSlide() {
    if (currentSlideIndex < sections.length - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0; // Loop to the first slide
    }
    updateDisplay();
}

// Function to go to the previous deck (if applicable)
function goToPreviousDeck() {
    // Implement deck logic if you have multiple decks
    // For now, we will just log a message
    console.log('Going to previous deck...');
}

// Function to go to the next deck (if applicable)
function goToNextDeck() {
    // Implement deck logic if you have multiple decks
    // For now, we will just log a message
    console.log('Going to next deck...');
}

// Event listeners for button clicks
previousSlideButton.addEventListener('click', goToPreviousSlide);
nextSlideButton.addEventListener('click', goToNextSlide);
previousDeckButton.addEventListener('click', goToPreviousDeck);
nextDeckButton.addEventListener('click', goToNextDeck);

// Initialize the display on page load
updateDisplay();