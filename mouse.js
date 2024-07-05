const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Initialize the positions of circles
circles.forEach(function (circle) {
    circle.style.left = "0px";
    circle.style.top = "0px";
    circle.dataset.x = "0";
    circle.dataset.y = "0";
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        const currentX = parseFloat(circle.dataset.x);
        const currentY = parseFloat(circle.dataset.y);

        const newX = currentX + (x - currentX) * 0.3; // Adjust 0.3 to control the smoothing
        const newY = currentY + (y - currentY) * 0.3;

        circle.style.left = newX - 12 + "px"; // Adjust the offset if needed
        circle.style.top = newY - 12 + "px"; // Adjust the offset if needed

        // Apply scaling transformation based on the index
        const scale = 1 - index * 0.1; // Adjust 0.1 to control the scaling step
        circle.style.transform = `scale(${scale})`;

        circle.dataset.x = newX;
        circle.dataset.y = newY;

        x = newX;
        y = newY;
    });

    requestAnimationFrame(animateCircles); // Continue the animation loop
}

// Start the animation loop
requestAnimationFrame(animateCircles);
