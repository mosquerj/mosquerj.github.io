document.addEventListener("DOMContentLoaded", () => {
    const buildButton = document.getElementById("buildStairs");
    const climbButton = document.getElementById("startClimb");
    const stairsDiv = document.getElementById("stairs");
    const climberImg = document.getElementById("climber");

    // Build the stairs
    buildButton.addEventListener("click", () => {
        stairsDiv.innerHTML = ""; // Clear previous stairs
        const totalSteps = 10; // Number of steps to build

        for (let i = 0; i < totalSteps; i++) {
            const step = document.createElement("div");
            step.className = "step";
            step.style.height = "50px"; // Height of each step

            const rung = document.createElement("div");
            rung.className = "rung";
            step.appendChild(rung);

            stairsDiv.appendChild(step);
        }

        // Add the climber to the stairs
        stairsDiv.appendChild(climberImg);
        climberImg.style.display = "block";
        climberImg.style.width = "60px";

        // Position the climber at the **bottom** of the stairs
        const firstStep = stairsDiv.children[0];
        if (firstStep) {
            climberImg.style.position = "absolute";
            climberImg.style.bottom = "0"; // Start at the bottom
            climberImg.style.left = "50%";
            climberImg.style.transform = "translateX(-50%)";
        }

        // Show the climb button
        climbButton.style.display = "block";
    });

    // Animate the climber
    climbButton.addEventListener("click", () => {
        let currentStep = 0;
        let isLeftFoot = true;
        const steps = stairsDiv.children;
        const totalSteps = steps.length - 1; // Exclude the climber

        const climbInterval = setInterval(() => {
            if (currentStep >= totalSteps) {
                clearInterval(climbInterval);
                return;
            }

            // Toggle climber's foot
            climberImg.src = isLeftFoot ? "images/Stick1.png" : "images/Stick2.png";
            isLeftFoot = !isLeftFoot;

            // Move climber up
            const step = steps[totalSteps - 1 - currentStep];
            if (step) {
                climberImg.style.bottom = `${step.offsetTop}px`;
            }

            currentStep++;
        }, 700); // Climbing speed
    });
});
