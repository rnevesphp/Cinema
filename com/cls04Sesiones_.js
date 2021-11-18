class cls04Sesiones_ {
   constructor(NumDeSesion) {
      this.numDeSesion = NumDeSesion;

      this.containerSesiones = document.getElementById("grid_sala");

      this.createCeldaSesion();
      this.celdaSesion;
   }

   createCeldaSesion() {
      this.celdaSesion = document.createElement("div");
      this.celdaSesion.innerHTML = "Sesion " + this.numDeSesion;
      this.celdaSesion.className = "celdaSesion";
      this.celdaSesion.addEventListener("click", this.onclick.bind(this));
   }

   pintarSesiones() {
      this.containerSesiones.appendChild(this.celdaSesion);
   }

   onclick() {
      this.pintarSesiones();
      this.borrarSesion();
   }

   borrarSesion() {
      this.containerSesiones.innerHTML = " ";
   }

}