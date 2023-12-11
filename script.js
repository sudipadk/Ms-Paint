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