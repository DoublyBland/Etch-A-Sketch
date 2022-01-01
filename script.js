function initializeGrid(rows, columns){
    const container = document.getElementById("grid-container");
    removeAllChildNodes(container);
    for(let i=1;i<=rows;i++){
        let row = document.createElement("DIV"); 
        row.setAttribute('id', `${i}`);
        for(let j=1;j<=columns;j++){
            let column = document.createElement("DIV");
            //column.innerHTML = `${j}`;
            column.classList.add("child");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resetGrid(){
    let desiredGrid = prompt("Please select new grid dimensions. 1-100 only", 16);
    if(desiredGrid>0 && desiredGrid<101){
        initializeGrid(desiredGrid, desiredGrid);
    }
    return;
}

function colorize(square) {
    square.classList.add("colorize");
    return;
}

function markSelection(selection) {
    let removeFromAll = document.getElementsByClassName("selection");
    while (removeFromAll.length){
        removeFromAll[0].classList.remove("selection");
    }
    selection.classList.add("selection");
    return;
}

function listen(){
    const gridContainer = document.getElementById("grid-container");

    gridContainer.addEventListener('mouseover', (e) => {
        
        if(event.target.className !== 'child'){return;}
       // e.target.classList.add("colorize");
       colorize(e.target);

    });

    document.getElementById("reset").addEventListener("click", function() {
        resetGrid();
    });

    const colorOption = document.getElementById('color-options');

    colorOption.addEventListener('click', (e) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton){
        return;
    }
    const selection = e.target;
    markSelection(selection);
    //selection.classList.add("selection");
    })

}



initializeGrid(16,16);
listen();