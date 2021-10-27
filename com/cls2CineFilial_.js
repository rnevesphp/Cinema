class clsCine {
   constructor() {
      this.salaCine1; // creamos las variables que alamcenarán las salas 
      this.salaCine2;
      this.createSalas(); // Invocamos los metodos construidos para crear las salas 
      this.drawSalas(); // y tambien el metodo que dibujaría las salas. 
   }

   createSalas() {
      this.salaCine1 = new clsSalaCine("1", 23); // atribuimos la creación de las salas a las
      this.salaCine2 = new clsSalaCine("2", 25); // variables salaCine1 y salaCine2
   }

   drawSalas() {
      this.salaCine1.DrawSala(); // preguntar al profe // 
   }
}