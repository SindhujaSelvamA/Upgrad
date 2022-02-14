//to make this keyword lexically bound ,we use arrow function

    const objo={
        name:'sam',
        sing()
        {
            console.log('a',this);
            var anotherfunc = function() 
            {
                console.log('b',this);
            }
        
        anotherfunc()
    }}
    objo.sing();