
function shape(selectedTool, shape, ctx) {

    selectedTool = "brush";
    shape = document.querySelectorAll('.shape');
    shape.forEach((element) => {
        element.addEventListener('click', () => {
            selectedTool = element.id
            console.log(selectedTool);
        })
    });

    function drawRect(e) {
        ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);  // offsets remained to determinded while prevMouse variable needed to be declared
    }

    function drawCircle(e) {
        ctx.beginPath();
        let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2));
        ctx.arc(prevMouseX, prevMouseY, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    function drawLine(e) {
        ctx.beginPath();
        ctx.moveTo(prevMouseX, prevMouseY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

    function drawTriangle(e) {
        ctx.beginPath();
        ctx.moveTo(prevMouseX, prevMouseY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
        ctx.closePath();
        ctx.stroke();
    }

    if (selectedTool === "rectangle") {
        drawRect(e);
    }
    else if (selectedTool === "circle") {
        drawCircle(e);
    }
    else if (selectedTool === "line") {
        drawLine(e);
    }
    else if (selectedTool === "triangle") {
        drawTriangle(e);
    }

}   