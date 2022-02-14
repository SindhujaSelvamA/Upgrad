let animal={
    name:'animal',
    eat(a,b)
    {
        console.log("| " +this.name+" eating "+b+" "+a)

    }
};
let human={
    name:'human'
};
let humanEat=animal.eat.bind(human)
humanEat('mango',10)