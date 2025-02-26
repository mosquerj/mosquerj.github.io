document.addEventListener("DOMContentLoaded", () => {
    const images = {
        "Happy Birthday": "images/birthday.png",
        "Crazy Clown": "images/clown.png",
        "It's Raining": "images/rain.png",
        "Quiet Time": "images/read.png",
        "Working Hard": "images/shovel.png",
        "Work from Home": "images/work.png"
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
