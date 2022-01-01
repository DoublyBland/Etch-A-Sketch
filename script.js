function initializeGrid(rows, columns){
    const container = document.getElementById("grid-container");
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

const gridContainer = document.getElementById("grid-container");

gridContainer.addEventListener('mouseover', (e) => {
    
    if(event.target.className !== 'child'){return;}
    e.target.classList.add("colorize");

})


initializeGrid(16,16);