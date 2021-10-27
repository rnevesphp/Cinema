class clsSalaCine {
   constructor(numSalaID, numAsientosSala) {
      this.numSalaID = numSalaID; // ID de la sala creado en la clase CineFilial
      this.numAsientosXSala = numAsientosSala; // Numero de asientos por sala en la clase CineFilial

      this.Seats = []; // Array para almacenar cada uno de los asientos
      this.containerGrid = document.getElementById("grid_sala"); // cogemos el container del doc HTML 
      this.CreateAsientos(); // Llamamos el metodo que que crea los asientos

      this.CreateCeldaSala(); 
      this.celdaSala; 
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////
   CreateCeldaSala() { 
      this.celdaSala = document.getElementById("div"); 
      this.celdaSala.innerHTML = "Sala: " + this.numSalaID
      this.celdaSala.className = "cell_sala"; 
      this.celdaSala.addEventListener("click", this.onclick.bind(this)); 
      this.celdaSala.id = "Sala " + this.numSalaID; 
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////
   CreateAsientos() {
      for (var i = 0; i < this.numAsientosXSala; i++) { // para la variable i que es menor que el numero 
         // de asientos por sala entonces se incrementará hasta que tenga los mismos valores
         var cAsientos = new clsAsientos(i); // creamos una nueva clase para los asientos y le añadimos a la variable 
         // cAsientos
         this.Seats.push(cAsientos); // introducimos dentro del array el valor de la nueva clase 
         //con la variable cAsientos 
      }
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////
   DrawUniqueSala(){
      this.containerGrid.appendChild(this.celdaSala);
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////
   onclick(){
      this.EraseAsientos();
      this.PintaAsientos();
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////
   drawAsientos() {
      for (var i = 0; i < this.numAsientosXSala; i++) {
         var cAsientos = this.Seats[i];
         var tCell = cAsientos.Draw();
         this.containerGrid.appendChild(tCell);
      }
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////
   EraseAsientos() {
      this.containerGrid.innerHTML = "";
   }
}
