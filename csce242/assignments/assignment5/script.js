const displayGreeting = () => {
    const greetingOutput = document.getElementById('greeting-output');
    const greetingText = document.createElement('p');
    greetingText.textContent = 'Hello';
    greetingOutput.appendChild(greetingText);
};

document.getElementById('color-selector').addEventListener('input', (e) => {
    document.getElementById('star-icon').style.color = e.target.value;
});

const dynamicImage = document.getElementById('dynamic-image');
const imagePaths = ['pictures/hippos.jpg', 'pictures/croc.jpg'];
let imageIndex = 0;

dynamicImage.addEventListener('click', () => {
    imageIndex = (imageIndex + 1) % imagePaths.length;
    dynamicImage.src = imagePaths[imageIndex];
});
