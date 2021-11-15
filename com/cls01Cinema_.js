class cls01Cinema_ {
   constructor() {
      this.cine; // creamos la variable cine
      this.CreateCine(); // llamamos la función que hemos creado

      //  this.Catalogo;
      // this.CreateCatalogo(); // llamamos al metodo que creará la clase catalogo 
   }

   /* CreateCatalogo() {
       this.Catalogo = new cls02Catalogo_();
   }*/

   CreateCine() {
      this.Cine = new cls05CineFilial_();
      // Atribuimos a la variable Cine la creación de la clase Cine
   }
}
