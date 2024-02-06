let header= document.getElementById("header");
let sno_div= document.getElementById("sno_div");
let cells_body= document.getElementById("cells-body");
const columns=27;
const rows=50;

//  A B C D row implementing
for(let i=1;i<columns;i++){
    let headerCell= document.createElement("div");
    headerCell.className="header_cell";
    headerCell.innerText= String.fromCharCode(64+i);
    header.appendChild(headerCell);
}


//  1 2 3 4 column implementing

for(let i=1;i<=rows;i++){
    let snoCell= document.createElement("div");
    snoCell.className="sno-cell";
    snoCell.innerText=i;
    sno_div.appendChild(snoCell);
}


//  each cell row implementing

for(let i=1;i<=rows;i++){
    let rows= document.createElement("div");
    rows.className="row";
    for(let j=1;j<columns;j++){
        let cells= document.createElement("div");
        cells.className="cell";
        cells.contentEditable= true;
        cells.id= String.fromCharCode(64+j)+i;
        cells.addEventListener("focus",onFocusingCell);
        cells.addEventListener("input", onChangeCellText);
        rows.appendChild(cells);
    }
    cells_body.appendChild(rows);
    
}