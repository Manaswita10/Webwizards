function startScrolling(element, targetValue, unit = 'L+') {
    let currentValue = 0;
    const increment = targetValue / 100; // Adjust for desired granularity

    function updateValue() {
        if (currentValue <= targetValue) {
            if (currentValue === targetValue && unit !== 'L+') {
                element.textContent = targetValue + unit;
            } else {
                element.textContent = currentValue.toFixed(1) + unit;
            }
            currentValue += increment;
            requestAnimationFrame(updateValue);
        } else {
            element.textContent = targetValue + unit;
        }
    }

    updateValue();
}

// Get the number elements and start scrolling
const leftNumber = document.querySelector('.left .scrolling-number');
const middleNumber = document.querySelector('.middle .scrolling-number');
const rightNumber = document.querySelector('.right .scrolling-number');

startScrolling(leftNumber, 12);
startScrolling(middleNumber, 1);
startScrolling(rightNumber, 50, '+'); // Pass 'K' as the unit for the last number
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".question");
        const answer = item.querySelector(".answer");

        question.addEventListener("mouseenter", function () {
            answer.style.display = "block";
        });

        question.addEventListener("mouseleave", function () {
            answer.style.display = "none";
        });
    });
});
// Get the button element
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Add a click event listener to the button
scrollToTopButton.addEventListener('click', () => {
  // Scroll to the top of the page with a smooth animation
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Get the modal element
var modal = document.getElementById("popup");

// Function to display the modal
function displayPopup() {
    modal.style.display = "block";
}

// Function to close the modal
function closePopup() {
    modal.style.display = "none";
}

// Attach an event listener to the Send button to display the modal


document.addEventListener("DOMContentLoaded", function () {
    const queryInput = document.querySelector(".query-input");
    const emailInput = document.querySelector(".email-input");
    const sendButton = document.querySelector(".send-button");

    sendButton.addEventListener("click", function (event) {
        if (!queryInput.value.trim() || !emailInput.value.trim()) {
            // Check if either input is empty or contains only whitespace
            event.preventDefault(); // Prevent the form from submitting
            alert("Please fill out all fields."); // Show an alert message
        } else {
            var sendButton = document.querySelector(".send-button");
            sendButton.addEventListener("click", function () {
                displayPopup();
            });
        }
    });
});
// JavaScript code to handle review submission
document.getElementById("submit-review").addEventListener("click", function() {
    var userReview = document.getElementById("user-review").value;
    if (userReview.trim() !== "") {
        // Handle the review submission (e.g., send it to a server or display it)
        alert("Review submitted: " + userReview);
    } else {
        alert("Please enter your review before submitting.");
    }
});
