class clsCinemaCompany {
   constructor() {
      this.Cine; // creamos la variable cine
      this.CreateCine(); // llamamos la función que hemos creado
   }
   
   CreateCine() {
      this.Cine = new clsCine();
      // Atribuimos a la variable Cine la creación de la clase Cine
   }
   __CreateFrontEnd() {
      // Array con todos los elementos del frontEnd
      var d_Array = [
         ["A", "B", "C",],
         ["D", "E", "F",],
         ["G", "H", "I",]
      ];
      // Container con el loop y añadiendo las celdas
      let container = document.getElementById("grid");
      for (let i of d_Array) {
         for (let x of i) {
            let cell = document.createElement("div");
            cell.innerHTML = x;
            cell.className = "cell";
            cell.id = x;
            container.appendChild(cell)
         }
      }
   }
}