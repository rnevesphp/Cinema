class cls06SalaCine_ {
   constructor(numSalaID, numAsientosSala) {
      this.numSalaID = numSalaID;
      this.numAsientosSala = numAsientosSala;
      this.Seats = [];
      this.containerHTML = document.getElementById("grid_sala");
      this.CreateAsientos();
      this.CreateCeldaSala();
      this.celdaSala;
   }
   CreateAsientos() {
      for (var i = 0; i < this.numAsientosSala; i++) {
         var cAsientos = new cls07Asientos_(i);
         this.Seats.push(cAsientos);
      }
   }
   CreateCeldaSala() {
      this.celdaSala = document.createElement("div");
      this.celdaSala.innerHTML = "Sala: " + this.numSalaID;
      this.celdaSala.className = "cell_sala";
      this.celdaSala.addEventListener("click", this.onclick.bind(this));
      this.celdaSala.id = "Sala " + this.numSalaID;
   }
   DrawUniqueSala() {
      this.containerHTML.appendChild(this.celdaSala);
   }
   onclick() {
      this.borrarSalas();
      this.drawAsientos();
   }
   borrarSalas() {
      this.containerHTML.innerHTML = "";
   }
   drawAsientos() {
      for (var i = 0; i < this.numAsientosSala; i++) {
         var cAsientos = this.Seats[i];
         var tCell = cAsientos.Draw();
         this.containerHTML.appendChild(tCell);
      }
   }

}
