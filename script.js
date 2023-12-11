document.addEventListener("DOMContentLoaded", function () {
    const clipboard = document.getElementById('clipboard');
    const selection = document.getElementById('matrixselect'); // Corrected ID
    const tools = document.getElementById('tools');
    const brush = document.getElementById('brush');
    const shapes = document.getElementById('shapes');
    const size = document.getElementById('size');

    let matrixBox = document.getElementById("matrixBox");
    let matrixClip = document.getElementById("matrixClip");
    let matrixSelect = document.getElementById("matrixselect");
    let matrixBrush = document.getElementById("matrixbrush");
    let matrixShapes = document.getElementById("matrixshapes");
    let matrixSize = document.getElementById("matrixsize");

    tools.addEventListener("click", function (e) {
        toggleMatrixContainer(matrixBox);
    });
    

    clipboard.addEventListener("click", function (e) {
        toggleMatrixContainer(matrixClip);
    });

    selection.addEventListener("click", function (e) {
        toggleMatrixContainer(matrixSelect);
    });

    brush.addEventListener("click", function (e) {
        toggleMatrixContainer(matrixBrush);
    });

    shapes.addEventListener("click", function (e) {
        toggleMatrixContainer(matrixShapes);
    });

    size.addEventListener("click", function (e) {
        toggleMatrixContainer(matrixSize);
    });

    function toggleMatrixContainer(matrixContainer) {
        matrixContainer.style.display = matrixContainer.style.display === "none" ? "grid" : "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");

    let isDrawing = false;
    let currentTool = "pencil";

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
        ctx.strokeStyle = currentTool === "eraser" ? "#ffffff" : "#000000";

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
       
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function selectTool(tool) {
        currentTool = tool;
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    document.getElementById("pencil").addEventListener("click", function () {
        selectTool("pencil");
    });

    document.getElementById("eraser").addEventListener("click", function () {
        selectTool("eraser");
    });
});