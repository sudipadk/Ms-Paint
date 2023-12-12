document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");

    let isDrawing = false;

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        isDrawing = false;
    }

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#000000";

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();

        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function fillWithColor(color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    const colorPalette = document.querySelectorAll('.color-container p');

    colorPalette.forEach(color => {
        color.addEventListener('click', function (e) {
            const selectedColor = getComputedStyle(e.target).backgroundColor;
            fillWithColor(selectedColor);
        });
    });

    // Get the range input element
    const volumeRange = document.getElementById('volume');

    // Get the zoom in and zoom out buttons
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');

    // Add event listener for zoom in button
    zoomInBtn.addEventListener('click', function () {
        // Increase the range value
        volumeRange.value = Math.min(parseInt(volumeRange.value, 10) + 10, 100);
    });

    // Add event listener for zoom out button
    zoomOutBtn.addEventListener('click', function () {
        // Decrease the range value
        volumeRange.value = Math.max(parseInt(volumeRange.value, 10) - 10, 0);
    });
});