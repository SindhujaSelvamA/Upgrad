//call and apply are used to borrow methods of another object

let animal=
{
    name: 'animal',
    eat(a,b)
    {
        console.log("| "+this.name+" eating "+b+" "+a)
    }
};
let human={name:'human'};
animal.eat('apple',5);
animal.eat.call(human,'orange',2);
animal.eat.apply(human,['orange',2]);

