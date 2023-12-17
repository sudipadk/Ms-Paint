let shape = document.querySelectorAll('.shape');
shape.forEach((element) => {
    element.addEventListener('click', () => {
        console.log(element.id);
    })
});

