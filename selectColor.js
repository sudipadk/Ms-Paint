let selectedColor = document.querySelectorAll('.color');
let colorBox = document.querySelector('.select-color');

    selectedColor.forEach((color) => {
        color.addEventListener('click', () => {
            colorBox.style.backgroundColor = color.id;
        })
    })
console.log(selectedColor);