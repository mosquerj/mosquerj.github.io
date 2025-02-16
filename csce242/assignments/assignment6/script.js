document.addEventListener("DOMContentLoaded", function () {
    // Set the default view to show Exercise 1 and hide Exercise 2
    document.getElementById("exercise1").style.display = "block";
    document.getElementById("exercise2").style.display = "none";

    // Cache DOM elements for easy access
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const exercise1Btn = document.getElementById("exercise1-btn");
    const exercise2Btn = document.getElementById("exercise2-btn");
    const transportInput = document.getElementById("transportInput");
    const transportImage = document.getElementById("transportImage");
    const colorButtons = document.querySelectorAll(".color-btn");
    const heart = document.getElementById("heart");

    // Toggle the visibility of the navigation menu and update the toggle button's arrow
    menuToggle.addEventListener("click", function () {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            menuToggle.textContent = "▼"; // Show down arrow when menu is hidden
        } else {
            menu.style.display = "block";
            menuToggle.textContent = "▲"; // Show up arrow when menu is visible
        }
    });

    // Switch to Exercise 1 when its button is clicked
    exercise1Btn.addEventListener("click", function () {
        document.getElementById("exercise1").style.display = "block";
        document.getElementById("exercise2").style.display = "none";
    });

    // Switch to Exercise 2 when its button is clicked
    exercise2Btn.addEventListener("click", function () {
        document.getElementById("exercise2").style.display = "block";
        document.getElementById("exercise1").style.display = "none";
    });

    // Handle changes in the transportation input field
    transportInput.addEventListener("input", function () {
        const transport = transportInput.value.toLowerCase().trim(); // Normalize input
        const validTransports = {
            "bike": "images/bike.jpg",
            "scooter": "images/scooter.jpg",
            "car": "images/car.jpg",
            "skateboard": "images/skateboard.jpg"
        };

        // Display the corresponding image if the input matches a valid transport
        if (validTransports[transport]) {
            transportImage.innerHTML = `<img src="${validTransports[transport]}" alt="${transport}" width="100">`;
        } else {
            transportImage.innerHTML = ""; // Clear the image if the input is invalid
        }
    });

    // Change the heart's background color when a color button is clicked
    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const color = this.getAttribute("data-color"); // Get the color from the button's data attribute
            heart.style.backgroundColor = color; // Apply the color to the heart
        });
    });
});
