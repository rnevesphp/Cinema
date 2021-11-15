class cls03Pelis_ {
   constructor(nombrePeli, cantSesiones) {
      this.nombrePeli = nombrePeli;
      this.cantDeSesiones = cantSesiones;

      this.numOfSessions = [];
      this.containerPelis = document.getElementById("grid_sala");

      this.CreateSesiones();

      this.CreateCeldaPeli();
      this.celdaPeli;
   }


   CreateSesiones() {
      for (var s = 0; s < this.cantDeSesiones; s++) {
         var nSesiones = new cls04Sesiones_(s);
         this.numOfSessions.push(nSesiones);
      }
   }

   CreateCeldaPeli() {
      this.celdaPeli = document.createElement("div");
      this.celdaPeli.innerHTML = "Hola: " + this.cantDeSesiones;
      this.celdaPeli.className = "celdaPelicula";
      this.celdaPeli.addEventListener("click", this.onclick2.bind(this));
      this.celdaPeli.name = "Nombre: " + this.nombrePeli;
   }

   DrawUniquePeli() {
      this.containerPelis.appendChild(this.celdaPeli);
   }

   onclick2() {
      this.EraseSesiones();
      this.DrawSesiones();
   }

   DrawSesiones() {
      for (var section = 0; section < this.cantDeSesiones; section++) {
         var nSesiones = numOfSessions[section];
         var tSesion = nSesiones.Dibuja();
         this.containerPelis.appendChild(tSesion);
      }
   }

   EraseSesiones() {
      this.containerPelis.innerHTML = " ";
   }

}