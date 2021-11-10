class cls1Cinema_ {
   constructor() {
      this.cine; // creamos la variable cine
      this.CreateCine(); // llamamos la función que hemos creado
   }

   CreateCine() {
      this.Cine = new cls2CineFilial_();
      // Atribuimos a la variable Cine la creación de la clase Cine
   }
}
