document.addEventListener("DOMContentLoaded", () => {
    const images = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };

    const titlesContainer = document.getElementById("titles-container");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.getElementById("close");

    // Create clickable titles for each image
    Object.keys(images).forEach(title => {
        const titleElement = document.createElement("p");
        titleElement.textContent = title;
        titleElement.classList.add("title");
        titleElement.addEventListener("click", () => showPopup(title, images[title]));
        titlesContainer.appendChild(titleElement);
    });

    // Show the popup with the selected title and image
    const showPopup = (title, imagePath) => {
        popupTitle.textContent = title;
        popupImage.src = imagePath;
        popup.classList.remove("hidden");
    };

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", () => popup.classList.add("hidden"));

    // Close the popup when clicking outside of it
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.add("hidden");
        }
    });
});
