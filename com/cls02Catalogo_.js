class cls02Catalogo_ {
   constructor() {
      this.pelicula1;
      this.createPelis();
      this.pintarPelis();
   }
   createPelis() {
      this.pelicula1 = new cls03Pelis_("Space Jam", 1);
      this.pelicula2 = new cls03Pelis_("SpiderMan", 2);
      this.pelicula3 = new cls03Pelis_("Transformers", 3);
      this.pelicula4 = new cls03Pelis_("Avengers", 4);
      this.pelicula5 = new cls03Pelis_("Iron Man", 5);
      this.pelicula6 = new cls03Pelis_("Hulk", 6);
   }
   pintarPelis() {
      this.pelicula1.pintarPelis();
      this.pelicula2.pintarPelis();
      this.pelicula3.pintarPelis();
      this.pelicula4.pintarPelis();
      this.pelicula5.pintarPelis();
      this.pelicula6.pintarPelis();
   }
}