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
