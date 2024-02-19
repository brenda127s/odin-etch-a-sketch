const containerDiv = document.querySelector("#container");

function makeRows(rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
   // console.log(containerDiv);
   // console.log(rows);
   // console.log(columns);
    for (i=0; i < (rows * columns); i++) {
        let square = document.createElement("div");
      //  square.innerText = (i + 1); //labels the squares. remove when not needed//
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
            console.log(square);
        })
    }
}
makeRows(16, 16);