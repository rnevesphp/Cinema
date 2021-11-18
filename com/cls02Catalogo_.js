class cls02Catalogo_ {
   constructor() {
      // creamos una variable inicial que no tendrá ningun valor 
      this.pelicula1;

      // llamamos dos metodos que se harán cargo de crear las peliculas 
      // el otro se hará cargo de mostrarlas en pantalla
      this.createPelis();
      this.pintarPelis();
   }

   createPelis() {
      // creamos el catalogo añadiendo peliculas 
      // por cada variable pelicula con su nombre y ID 
      // llamamos la clase cls03Pelis_ que nos dibujará cada una de las pelis
      this.pelicula1 = new cls03Pelis_("Space Jam", 1);
      this.pelicula2 = new cls03Pelis_("SpiderMan", 2);
      this.pelicula3 = new cls03Pelis_("Transformers", 3);
      this.pelicula4 = new cls03Pelis_("Avengers", 4);
      this.pelicula5 = new cls03Pelis_("Iron Man", 5);
      this.pelicula6 = new cls03Pelis_("Hulk", 6);
      this.pelicula7 = new cls03Pelis_("Shrek", 7);

   }

   pintarPelis() {
      // el metodo pintarPelis coge las variables creadas en el metodo createPelis
      // y llama el metodo pintarPelis de la clase cls03Pelis_(); que lo que hace es añadirlas 
      // al container HTML
      this.pelicula1.pintarPelis();
      this.pelicula2.pintarPelis();
      this.pelicula3.pintarPelis();
      this.pelicula4.pintarPelis();
      this.pelicula5.pintarPelis();
      this.pelicula6.pintarPelis();
      this.pelicula7.pintarPelis();
   }

}