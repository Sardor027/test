const container = document.getElementById("container");
const SQUARES = 500;
const colors = ['white', 'red', 'yellow', 'lime', 'blue', 'aqua', 'fuchsia'];

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement("div");
    square.classList.add('square');
    square.addEventListener("mouseover", () => {
        setColorToEl(square);
    });
    square.addEventListener("mouseout", () => {
        removeColorToE1(square);
    });
    container.appendChild(square);
}

function setColorToEl(el) {
    const color = getRandomColor(); 
    el.style.background = color;
};
function removeColorToE1(el) {
    el.style.background = '#1d1d1d';
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
