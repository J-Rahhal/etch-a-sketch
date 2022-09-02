//select body
const body = document.querySelector('body');
//grab root
const root = document.querySelector(':root');

//creater header
const header = document.createElement('header');
header.classList.add('header');
header.getElementsByClassName('header');

//create heading
const heading = document.createElement('h1');
heading.innerText = "Etch - A - Sketch";
header.appendChild(heading);
body.appendChild(header);

//create and select container
let container = document.createElement('div');
container.classList.add('container');
container.getElementsByClassName('container');
body.append(container);
//create a grid container to add rows and columns
const grid_container = document.createElement('div');
//give grid id
grid_container.className = 'grid';
//select grid container
grid_container.getElementsByClassName('grid');
container.appendChild(grid_container);

//select columns
const cells = document.getElementsByClassName('cell');

//create  button container
const buttonsContainer = document.createElement("div");
buttonsContainer.className = 'buttons';
buttonsContainer.getElementsByClassName('buttons');

body.appendChild(buttonsContainer);

//create header for buttons
const h3 = document.createElement('h3');
h3.classList.add('buttons-header');
h3.getElementsByClassName('h3');
h3.innerText = "Options";
h3.style.color = 'rgb(238, 227, 227)';
buttonsContainer.appendChild(h3);

//create color picker
const colorPicker = document.createElement('input');
colorPicker.type = "color";
colorPicker.classList.add("color-picker");
colorPicker.getElementsByClassName("color-picker");

//add color picker to button container and to main container
buttonsContainer.appendChild(colorPicker);
container.appendChild(buttonsContainer);

//create reset button
const reset = document.createElement("input");
reset.type = "button";
reset.value = "reset";
reset.className = 'reset';
reset.getElementsByClassName("reset");
reset.addEventListener('click', clear);

//create rainbow button color
const rainbow = document.createElement("input");
rainbow.type = "button";
rainbow.value = "rainbow";
rainbow.className = 'rainbow';
rainbow.getElementsByClassName('rainbow');
rainbow.addEventListener('click', rainbowColors);

//add reset button into container
buttonsContainer.appendChild(reset);
container.appendChild(buttonsContainer);

//add rainbow button to buttons container
buttonsContainer.appendChild(rainbow);
container.appendChild(buttonsContainer);

//add eraser button
const eraser = document.createElement("input");
eraser.type = "button";
eraser.value = "eraser";
eraser.classList.add('eraser');
eraser.getElementsByClassName('eraser');

//add eraser to button container
buttonsContainer.appendChild(eraser);
container.appendChild(buttonsContainer);

//add eraser event Listener
eraser.addEventListener('click', erase);

//create resize button
const resize = document.createElement("input");
resize.type = "button";
resize.value = "resize";
resize.className = 'resize';
resize.getElementsByClassName('resize');

//add resize button into container
buttonsContainer.appendChild(resize);

//add event listener to resize
resize.addEventListener('click', () => {
    location.reload();
});

//create footer
const footer = document.createElement('div');
footer.classList.add('footer');
body.appendChild(footer);

//add image to footer link
const icon = document.createElement('i');
icon.classList.add('fa-brands');
icon.classList.add('fa-github');
footer.appendChild(icon);

//create link
const link = document.createElement('a');
link.href = 'https://github.com/dev-acc-practice/etch-a-sketch';
link.innerText= 'GitHub';
link.target= 'blank';
link.classList.add('link');
footer.appendChild(link);

// create grid function which will have both and give it an input but set
//a default value
function grid() {
    let input = parseInt(prompt('Enter a number of rows'));
    if (input < 1 || input > 100) {
        alert('Please enter a number of rows between 1 and 100: ');
        location.reload();
    } else {
        root.style.setProperty('--size', input);
        for (let i = 0; i < Math.pow(input, 2); i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.getElementsByClassName('cell');
            grid_container.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                cell.classList.add('selected');
            });
        }
    }
}

//call function
grid();



//create function clear
function clear() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].style = "none";
        cells[i].classList.remove("selected");
        cells[i].addEventListener("mouseover", () => {
            cells[i].classList.remove("rainbow-colors");
            cells[i].classList.add("selected");
            cells[i].classList.remove('colors');
            cells[i].classList.remove('erase');

        });
    }
    colorPicker.value = '#000000';

}

// create rainbow colors function
function rainbowColors() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", () => {
            cells[i].classList.add("rainbow-colors");
            cells[i].classList.remove('colors');
            cells[i].classList.remove('erase');
            cells[i].style.setProperty('--mouse-x', Math.floor(Math.random() * 255));
            cells[i].style.setProperty('--mouse-y', Math.floor(Math.random() * 255));
        });

    }
}

//add event Listener to color picker
colorPicker.addEventListener('change', chooseColor);

//create function chooseColor()
function chooseColor() {
    let color = colorPicker.value;
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', () => {
            cells[i].classList.add('colors');
            cells[i].classList.remove('erase');
            cells[i].style.setProperty('--color-picker-value', color);
        });
    }
}

//create function erase
function erase() {
    let color = "#FFFFFF";
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", () => {

            cells[i].classList.add('erase');
            cells[i].style.setProperty('--eraser-color', color);
        });
    }
}
