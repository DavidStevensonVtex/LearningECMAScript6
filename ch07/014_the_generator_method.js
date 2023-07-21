class MyClass 
{
    * generator_function()
    {
        yield 1 ;
        yield 2 ;
        yield 3 ;
        yield 4 ;
        yield 5 ;
    }
}

let obj = new MyClass() ;

let generator = obj.generator_function() ;

let item = generator.next() ;
while(! item.done ) {
    console.log(item.value) ;
    item = generator.next() ;
} 