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


//create  button container
const buttonsContainer = document.createElement("div");
buttonsContainer.className = 'buttons';
buttonsContainer.getElementsByClassName('buttons');

body.appendChild(buttonsContainer);

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
        });
    }

}

// create rainbow colors function
function  rainbowColors(){
    for(let i =0; i < grid_cols.length; i++){
        grid_cols[i].addEventListener("mouseover", ()=>{
            grid_cols[i].classList.add("rainbow-colors");
            grid_cols[i].style.setProperty('--mouse-x', Math.floor(Math.random()*255));
            grid_cols[i].style.setProperty('--mouse-y', Math.floor(Math.random()*255));
    });

  }
}
