class cls04Sesiones_ {
   constructor(numDeSesiones) {
      this._NumDeSesiones = numDeSesiones;
      this.CeldaHTMLSes;

      this._Start();
   }

   _Start() {
      this._crearCeldaSes();
   }

   _crearCeldaSes() {
      this.CeldaHTMLSes = document.createElement("div");
      this.CeldaHTMLSes.innerHTML = "Sesion: " + this._NumDeSesiones;
      this.CeldaHTMLSes.addEventListener("click", this.onclick.bind(this));
      this.CeldaHTMLSes.id = "S" + this._NumDeSesiones;
   }

   Dibuja() {
      return this.CeldaHTMLSes;
   }
}