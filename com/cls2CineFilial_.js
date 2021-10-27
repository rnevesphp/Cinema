class clsCine {
   constructor() {
      this.salacine1; // creamos las variables que alamcenarán las salas 
      this.salacine2;
      this.createSalas(); // Invocamos los metodos construidos para crear las salas 
      this.DrawAllSalas(); // y tambien el metodo que dibujaría las salas. 
   }

   createSalas() {
      this.salacine1 = new clsSalaCine("1", 23); // atribuimos la creación de las salas a las
      this.salacine2 = new clsSalaCine("2", 25); // variables salaCine1 y salaCine2
   }

   DrawAllSalas() {
      this.salaCine1.DrawUniqueSala(); // preguntar al profe 
   }
}