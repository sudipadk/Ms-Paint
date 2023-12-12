document.addEventListener("DOMContentLoaded", function () {
    const clipboard = document.getElementById('clipboard');
    const tools = document.getElementById('tools');
    const brush = document.getElementById('brush');
    const shapes = document.getElementById('shapes');
    const size = document.getElementById('size');

    const matrixElements = {
        clipboard: document.getElementById("matrixClip"),
        tools: document.getElementById("matrixBox"),
        brush: document.getElementById("matrixbrush"),
        shapes: document.getElementById("matrixshapes"),
        size: document.getElementById("matrixsize")
    };

    clipboard.addEventListener("click", () => toggleMatrixContainer(matrixElements.clipboard));
    tools.addEventListener("click", () => toggleMatrixContainer(matrixElements.tools));
    brush.addEventListener("click", () => toggleMatrixContainer(matrixElements.brush));
    shapes.addEventListener("click", () => toggleMatrixContainer(matrixElements.shapes));
    size.addEventListener("click", () => toggleMatrixContainer(matrixElements.size));

    function toggleMatrixContainer(matrixContainer) {
        matrixContainer.style.display = matrixContainer.style.display === "none" ? "grid" : "none";
    }

    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    let isDrawing = false;
    let startX, startY;

    function startDrawing(e) {
        isDrawing = true;
        startX = e.clientX - canvas.offsetLeft;
        startY = e.clientY - canvas.offsetTop;
    }

    function stopDrawing(e) {
        if (isDrawing) {
            isDrawing = false;
            fillBetweenPoints(startX, startY, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }
    }

    function draw(e) {
        if (!isDrawing) return;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.strokeStyle = "black";

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();

        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function fillBetweenPoints(x1, y1, x2, y2) {
        ctx.fillStyle = "blue"; // Change the fill color as needed
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2, canvas.height);
        ctx.lineTo(x1, canvas.height);
        ctx.closePath();
        ctx.fill();
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    document.getElementById("pencil").addEventListener("click", () => selectTool("pencil"));
    document.getElementById("eraser").addEventListener("click", () => selectTool("eraser"));

    const colorPalette = document.querySelectorAll('.color-container p');
    colorPalette.forEach(color => color.addEventListener('click', (e) => fillWithColor(getComputedStyle(e.target).backgroundColor)));

    function selectTool(tool) {
        ctx.strokeStyle = tool === "eraser" ? "#ffffff" : "#000000";
    }

    function fillWithColor(color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
});
