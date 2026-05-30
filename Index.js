/**
 * Gaborone Digital Launch - Core Logic
 * Handles interactive pricing and form validation
 */

// Function to update the pricing display based on package selection
function selectPackage(price, packageName) {
    const display = document.getElementById('totalPriceDisplay');
    const inputField = document.getElementById('selectedPackage');
    
    if (display && inputField) {
        const formattedPrice = "P " + price.toLocaleString(undefined, {minimumFractionDigits: 2});
        display.innerText = formattedPrice;
        inputField.value = `${packageName} - ${formattedPrice}`;
    }
}

// Function to handle form submission feedback
document.getElementById('leadForm')?.addEventListener('submit', function(e) {
    console.log("Bid invitation prepared for dispatch.");
    // The form will still send data to Formspree, but this log confirms logic execution
});

// Initialize display on window load
window.onload = function() {
    console.log("Digital Launch Engine Initialized.");
};

