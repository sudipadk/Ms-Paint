
document.addEventListener("DOMContentLoaded", function () {
    const clipboard = document.getElementById('clipboard');
    const tools = document.getElementById('tools');
    const brush = document.getElementById('brush');
    const shapes = document.getElementById('shapes');
    const size = document.getElementById('size');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');

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
        ctx.beginPath();
        ctx.moveTo(startX, startY);
    }

    function stopDrawing(e) {
        if (isDrawing) {
            isDrawing = false;
            fillBetweenPoints(startX, startY, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }
    }

    function draw(e) {
        if (!isDrawing) return;
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    zoomInBtn.addEventListener('click', zoomIn);
    zoomOutBtn.addEventListener('click', zoomOut);

    let scale = 1;

    function zoomIn() {
        scale += 0.1;
        applyZoom();
    }

    function zoomOut() {
        scale -= 0.1;
        applyZoom();
    }

    function applyZoom() {
        canvas.style.transform = `scale(${scale})`;
    }

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


let state= document.getElementById("status");

let save = document.getElementById("save");

save.addEventListener("click", (e) =>{
    setInterval(() => {
        state.innerHTML += "Saved Successfully";
        
    }, 2000);
    
    state.innerHTML += "Saved Successfully";
    
});