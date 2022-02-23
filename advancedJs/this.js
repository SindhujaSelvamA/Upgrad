var operation = {
   a: 1,
   b: 2,
  
   add: function() {
       this.a + this.b;
       console.log("a = " + this.a + ", b = " + this.b);
       var print = function() {
           console.log("a = " + this.a + ", b = " + this.b);
       }

       print();
   }
}

operation.add();