class clsAsiento {
   constructor(valueNumAsiento) {
      this._numAs = valueNumAsiento;
      this._asientoOcu = 0; // ocupación del asiento en la sala

      this.cellHTML;
      this.x;
      this.y;

      this._Initialize();
   }
   _Initialize() {
      this._CrearCell();
   }
   _CrearCell() {
      this.cellHTML = document.createElement("div") // creación de la s divs en el documento HTML 
      this.cellHTML.innerHTML = "Asiento :" + this._numAs;
      this.cellHTML.addEventListener("click", this.onclick.bind(this));
      this.cellHTML.id = "a" + this._numAs;
   }
   ReservarAsiento() {
      console.log("Reservar Asiento");
      this._asientoOcu = 1;
      this.cellHTML.removeEventListener("click", null, null);
      this.Draw();
   }
   Draw() {
      this.cellHTML.className = this._getClassNombre();
      return this.cellHTML;
   }
   _getClassNombre() {
      var tClass = "";
      if (this._asientoOcu()) {
         tClass = "cell_red";
      } else {
         tClass = "cell";
      }
      if (localStorage.getItem("user_numero") == this._numAs) {
         tClass = "cell_read_myseat";
      };
      return tClass;
   }
   onclick() {
      console.log("Test click -> " + this.cellHTML.id);
      this.ReservarAsiento();
   }
   AsOcupado() {
      return (this._asientoOcu > 0);
   }
}