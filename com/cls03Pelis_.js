class cls03Pelis_ {
   constructor(NombrePelicula, peliculaID) {
      this.NombrePelicula = NombrePelicula;
      this.peliculaID = peliculaID;

      //this.arrayPelis = [];

      this.containerHTMLPelis = document.getElementById("grid_sala");

      this.createCeldaPelicula();
      this.celdaPelicula;
   }

   createCeldaPelicula() {
      this.celdaPelicula = document.createElement("div");
      this.celdaPelicula.innerHTML = "Nombre: " + this.NombrePelicula;
      this.celdaPelicula.className = "celdaPelicula";
      this.celdaPelicula.addEventListener("click", this.onclick.bind(this));
      this.celdaPelicula.id = "ID: " + this.peliculaID;
   }

   pintarPelis() {
      this.containerHTMLPelis.appendChild(this.celdaPelicula);
   }

   onclick() {
      this.borrarPelis();
      this.createSesiones();

   }

   createSesiones() {
      this.Sesion1 = new cls04Sesiones_(1);
      this.Sesion2 = new cls04Sesiones_(2)
   }

   borrarPelis() {
      this.containerHTMLPelis.innerHTML = "";
   }

   pintarSesiones() {
      this.Sesion1.pintarSesiones();
      this.Sesion2.pintarSesiones()
   }
}