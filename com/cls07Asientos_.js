class cls07Asientos_ {
   constructor(NumAsiento) {
      this._numAs = NumAsiento;
      this._asientoOcu = 0;
      this.celdaHTML;
      this._CrearCell();
   }
   _CrearCell() {
      this.celdaHTML = document.createElement("div");
      this.celdaHTML.innerHTML = "Asiento: " + this._numAs;
      this.celdaHTML.addEventListener("click", this.onclick.bind(this));
      this.celdaHTML.id = "A-" + this._numAs;
   }
   ReservarAsiento() {
      console.log("Asiento escogido");
      this._asientoOcu = 1;
      this.celdaHTML.removeEventListener("click", null, null);
      this.Draw();
   }
   Draw() {
      this.celdaHTML.className = this._getClassColor();
      return this.celdaHTML;
   }
   AsOcupado() {
      return (this._asientoOcu > 0);
   }
   _getClassColor() {
      var tClass = "";
      if (this.AsOcupado()) {
         tClass = "cell_red";
      } else {
         tClass = "cell";
      }
      if (localStorage.getItem(this._numAs) == 1) {
         tClass += " cell_red_myseat";
      }
      return tClass;
   }
   onclick() {
      localStorage.setItem(this._numAs, 1);
      if (this._asientoOcu) {
         window.alert("El asiento está reservado!");
      }
      else {
         this.ReservarAsiento();
         alert("Acabas de seleccionar el asiento " + this.celdaHTML.id);
      }
   }
}