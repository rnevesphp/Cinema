class clsAsientos {
   constructor(NumAsiento) {
      this._numAs = NumAsiento;
      this._asientoOcu = Math.round(Math.random()); // ocupación del asiento en la sala
      this.celdaHTML;
      
      this._Inicio();
   }

   _Inicio() {
      this._CrearCell();
   }
   _CrearCell() {
      this.celdaHTML = document.createElement("div") // creación de la s divs en el documento HTML 
      this.celdaHTML.innerHTML = "Asiento :" + this._numAs;
      this.celdaHTML.addEventListener("click", this.onclick.bind(this));
      this.celdaHTML.id = "a" + this._numAs;
   }
 

   Draw() {
      this.celdaHTML.className = this._getClassColor();
      return this.celdaHTML;
   }

   _getClassColor() {
      var tClass = "";
      if (this._numAs == asiento) { // asiento
         tClass = "cell_red";
      } else {
         tClass = "cell";
      }
      /*if (localStorage.getItem("user_numero") == this._numAs) {
         tClass = "cell_read_myseat";
      };*/
      return tClass;
   }

   AsOcupado() {
      return (this._asientoOcu > 0);
   }

   onclick() {
      if (this._asientoOcu) {
         window.alert("El asiento está reservado!"); 
      } else {
         console.log("Butaca reservada num" + " " + this.celdaHTML.id);
         this.ReservarAsiento();
      }
   }

   ReservarAsiento() {
      this._asientoOcu = 1;
      this.cellHTML.removeEventListener("click", null, null);
      this.Draw();
   }
}