var title = "A Passage to India";
var author = "E.M. Forster";

var novel = {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   get: function() {
       console.log("Title = " + this.title + ", Author = " + this.author);

       var print = function() {
           console.log("Title = " + this.title + ", Author = " + this.author);
       }
       print();
   }
}

novel.get();