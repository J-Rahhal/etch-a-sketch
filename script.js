//select body
const body = document.querySelector('body');
//select container
let container = document.getElementById('container');
//create a grid container to add rows and columns
const grid_container = document.createElement('div');
//give grid id
grid_container.className= 'grid';
//select grid container
grid_container.getElementsByClassName('grid');
//select rows
const grid_rows = document.getElementsByClassName('rows');
//select columns
const grid_cols = document.getElementsByClassName('cols');
//create heading
const heading = document.createElement('h1');
heading.innerText = "Etch - A - Sketch";
container.appendChild(heading);

//create  button container
const buttonsContainer = document.createElement("div");
buttonsContainer.className = 'buttons';
buttonsContainer.getElementsByClassName('buttons');

body.appendChild(buttonsContainer);

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
rainbow.addEventListener('click',rainbowColors);

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
eraser.addEventListener('click',erase);

//create resize button
const resize = document.createElement("input");
resize.type = "button";
resize.value = "resize";
resize.className = 'resize';
resize.getElementsByClassName('resize');

//add resize button into container
buttonsContainer.appendChild(resize);

//add event listener to resize
resize.addEventListener('click',()=>{
    location.reload();
});


//add resize event Listener
//create row function which will create the row divs
function createRows(row) {
    for(let i =0; i < row; i++) {
        const  rows = document.createElement('div');
        rows.setAttribute('class', 'rows');
        grid_container.appendChild(rows);
        container.appendChild(grid_container);
    }
}


//create column function which will create the column divs
function createCols(col) {
   for(let i=0; i<grid_rows.length; i++) {
    for(let j=0; j<col; j++){
        const  cols = document.createElement('div');
        cols.className = 'cols';
        grid_rows[j].appendChild(cols);
    }
   }
}

// create grid function which will have both and give it an input but set
//a default value
function grid(input = 16){
    input = parseInt(prompt('Enter a number of rows'));
    if(input<1 || input>64){
        alert('Please enter a number of rows between 1 and 64');
    }
    createRows(input);
    createCols(input);
}

//call function
grid();

//create the draw function
function draw() {
    for (let i =0; i<grid_cols.length; i++) {
        grid_cols[i].addEventListener("mouseover", ()=>{
            grid_cols[i].classList.add("selected");
        });
    }
}

//call function draw
draw();


//create function clear
function clear() {
    for (let i =0; i<grid_cols.length; i++) {
        grid_cols[i].style ="none";
        grid_cols[i].classList.remove("selected");
        grid_cols[i].addEventListener("mouseover", ()=>{
            grid_cols[i].classList.remove("rainbow-colors");
            grid_cols[i].classList.add("selected");
            grid_cols[i].classList.remove('colors');
            grid_cols[i].classList.remove('erase');

        });
    }
    colorPicker.value = '#000000';

}

// create rainbow colors function
function  rainbowColors(){
    for(let i =0; i < grid_cols.length; i++){
        grid_cols[i].addEventListener("mouseover", ()=>{
            grid_cols[i].classList.add("rainbow-colors");
            grid_cols[i].classList.remove('colors');
            grid_cols[i].classList.remove('erase');
            grid_cols[i].style.setProperty('--mouse-x', Math.floor(Math.random()*255));
            grid_cols[i].style.setProperty('--mouse-y', Math.floor(Math.random()*255));
    });

  }
}

//add event Listener to color picker
colorPicker.addEventListener('change', chooseColor);

//create function chooseColor()
function chooseColor()  {
    let color =colorPicker.value;
    for(let i = 0; i <grid_cols.length; i++) {
        grid_cols[i].addEventListener('mouseover', ()=>{
            grid_cols[i].classList.add('colors');
            grid_cols[i].classList.remove('erase');
            grid_cols[i].style.setProperty('--color-picker-value', color);
        });
    }
}

//create function erase
function erase(){
    let color ="#FFFFFF";
    for(let i=0; i<grid_cols.length; i++){
        grid_cols[i].addEventListener("mouseover",()=>{

            grid_cols[i].classList.add('erase');
            grid_cols[i].style.setProperty('--eraser-color', color);
        });
    }
}
