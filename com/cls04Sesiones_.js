class cls04Sesiones_ {
   constructor(NumDeSesion) {
      this.numDeSesion = NumDeSesion;
      this.celdaSesion;
      this.containerSesiones = document.getElementById("grid_sala");
      this.createCeldaSesion();
      this.pintarSesion();
   }

   createCeldaSesion() {
      this.celdaSesion = document.createElement("div");
      this.celdaSesion.className = "celdaSesion";
      this.celdaSesion.innerHTML = "Sesion " + this.numDeSesion;
      this.celdaSesion.addEventListener("click", this.onclick.bind(this));
   }

   pintarSesion() {
      this.containerSesiones.appendChild(this.celdaSesion);
   }

   onclick() {
      this.pintarSesion();
      this.borrarSesion();
      this.creatingSala();
   }
   creatingSala() {
      this.salas = new cls05CineFilial_();
   }

   createSalas() {
      this.salas.createSalas();
   }

   borrarSesion() {
      this.containerSesiones.innerHTML = "";
   }
}