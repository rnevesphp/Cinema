class cls04Sesiones_ {
   constructor(NumDeSesion) {
      this.numDeSesion = NumDeSesion;
      this.celdaSesion;
      this.containerSesiones = document.getElementById("grid_sala");
      this.createCeldaSesion();
      this.pintarSesiones();
   }
   createCeldaSesion() {
      this.celdaSesion = document.createElement("div");
      this.celdaSesion.className = "celdaSesion";
      this.celdaSesion.innerHTML = "Sesion " + this.numDeSesion;
      this.celdaSesion.addEventListener("click", this.onclick.bind(this));
   }
   pintarSesiones() {
      this.containerSesiones.appendChild(this.celdaSesion);
   }
   onclick() {
      this.borrarSesiones();
      this.createCineFilial();
   }
   borrarSesiones() {
      this.containerSesiones.innerHTML = "";
   }
   createCineFilial() {
      this.addSalas = new cls05CineFilial_();
   }
   createSalas() {
      this.addSalas.createSalas();
   }
}