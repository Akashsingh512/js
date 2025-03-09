document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the same class name
    const elements = document.querySelectorAll('.helloworld');

    // Change only the first element with the class name
    // if (elements.length > 0) {
    //     elements[0].textContent = 'This is the changed element';
    // }
    if (elements.length > 1) {
        elements[1].textContent = 'This is the changed element';
    }
});
// Change only the second element with the class name
const checkInterval = setInterval(() => { 
    const elements = document.querySelectorAll("div[class*='month-card-header-value-v2']");

    // Ensure at least two elements exist and update only the second one
    if (elements.length > 2 && !elements[2].dataset.updated) {
        elements[2].innerText = "₹2,232.01";
        elements[2].dataset.updated = "true"; // Prevent multiple updates
        console.log("✅ Second element updated to ₹2,232.01");
        clearInterval(checkInterval); // Stop checking once updated
    }
}, 500);
