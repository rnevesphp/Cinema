class cls02Catalogo_ {
   constructor() {
      this.catPeli1; // Creamos la primera peli 
      this.catPeli2; // creamos la segunda peli

      this.CreatePelis();
      this.DrawAllpelis();
   }

   CreatePelis() {
      this.catPeli1 = new cls03Pelis_("nombrePeli", 3);
   }

   DrawAllpelis() {
      this.catPeli1.DrawUniquePeli();
   }

}