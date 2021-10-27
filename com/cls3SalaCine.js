class clsSalaCine {
   constructor(numSalaID, numAsientosSala) {
      this.numSalaID = numSalaID; // ID de la sala creado en la clase CineFilial
      this.numAsientosXSala = numAsientosSala; // Numero de asientos por sala en la clase CineFilial

      this.Asientos = []; // Array para almacenar los asientos de cada sala
      this.container = document.getElementById("grid_sala"); // cogemos el container del doc HTML 
      this.CreateAsientos(); // Llamamos el metodo que que crea los asientos
   }

   CreateAsientos() {
      for (var i = 0; i < this.numAsientosXSala; i++)
         // para la variable i que es menor que el numero 
         // de asientos por sala entonces se incrementará hasta que tenga los mismos valores
         var cAsientos = new clsAsientos(i); // creamos una nueva clase para los asientos y le añadimos a la variable 

      // cAsientos
      this.Asientos.push(cAsientos); // introducimos dentro del array el valor de la nueva clase 

      //con la variable cAsientos 
   }

   drawAsientos() {
      for (var i = 0; this.numAsientosXSala; i++) {
         var cAsientos = this.Asientos[i];
         var tCell = cAsientos.Draw();
         this.container.appendChild(tCell);
      }
   }

   EraseAsientos() {
      this.container.innerHTML = "";
   }



}
