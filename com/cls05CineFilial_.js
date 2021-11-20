class cls05CineFilial_ {
   constructor() {
      this.salacine1;
      this.salacine2;
      this.createSalas();
      this.DrawAllSalas();
   }

   createSalas() {
      this.salacine1 = new cls06SalaCine_(1, 15);
      this.salacine2 = new cls06SalaCine_(2, 10);
      this.salacine3 = new cls06SalaCine_(3, 7);
      this.salacine4 = new cls06SalaCine_(4, 12);
      this.salacine5 = new cls06SalaCine_(5, 17);
      this.salacine6 = new cls06SalaCine_(6, 14);
   }

   DrawAllSalas() {
      this.salacine1.DrawUniqueSala(); // llamamos el metodo que nos dibujará los elementos 
      this.salacine2.DrawUniqueSala();
      this.salacine3.DrawUniqueSala();
      this.salacine4.DrawUniqueSala();
      this.salacine5.DrawUniqueSala();
      this.salacine6.DrawUniqueSala();
   }
}