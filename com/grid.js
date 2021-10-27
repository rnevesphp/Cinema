window.addEventListener("load", function(){
   // (B1) DATA ARRAY
   var data = [
     ["A", "B", "C"],
     ["D", "E", "F"],
     ["G", "H", "I"]
   ];
  
   // (B2) LOOP + ADD CELLS
   let container = document.getElementById("grid");
   for (let i of data) { 
     for (let j of i) {
       let cell = document.createElement("div");
       cell.innerHTML = j;
       cell.className = "cell";
       container.appendChild(cell);
   }}
 });