document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.querySelector(".quote h1");
    const circleCursor = document.createElement("div");
    circleCursor.className = "circle-cursor";
    document.body.appendChild(circleCursor);

    quoteText.addEventListener("mouseenter", () => {
        circleCursor.style.display = "block";
    });

    quoteText.addEventListener("mouseleave", () => {
        circleCursor.style.display = "none";
    });

    quoteText.addEventListener("mousemove", (e) => {
        circleCursor.style.left = e.clientX + "px";
        circleCursor.style.top = e.clientY + "px";
    });

    // Add a click event listener to the button with a ripple effect
    const welcomeButton = document.getElementById("welcomeButton");
    welcomeButton.addEventListener("click", function (e) {
        // Create a ripple element
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        // Append it to the button
        this.appendChild(ripple);

        // Get the button's dimensions
        const rect = this.getBoundingClientRect();
        // Calculate the click position relative to the button
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Position the ripple element at the click position
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Remove the ripple element after the animation completes
        ripple.addEventListener("animationend", () => {
            ripple.remove();
        });

        // You can also add your custom button click action here
        alert("You're being redirected to another page"); // Customize this action as needed
    });
});

