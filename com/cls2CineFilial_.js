class cls2CineFilial_ {
   constructor() {
      this.salacine1; // creamos las variables que alamcenarán las salas 
      this.salacine2;
      this.createSalas(); // Invocamos los metodos construidos para crear las salas 
      this.DrawAllSalas(); // y tambien el metodo que dibujaría las salas. 
   }

   createSalas() {
      this.salacine1 = new cls3SalaCine_(1, 15); // atribuimos la creación de las salas a las
      this.salacine2 = new cls3SalaCine_(2, 10); // variables salaCine1 y salaCine2
      this.salacine3 = new cls3SalaCine_(3, 7);
      this.salacine4 = new cls3SalaCine_(4, 12);
      this.salacine5 = new cls3SalaCine_(5, 17);
      this.salacine6 = new cls3SalaCine_(6, 14);
   }

   DrawAllSalas() {
      this.salacine1.DrawUniqueSala();
      this.salacine2.DrawUniqueSala();
      this.salacine3.DrawUniqueSala();
      this.salacine4.DrawUniqueSala();
      this.salacine5.DrawUniqueSala();
      this.salacine6.DrawUniqueSala();
   }
}