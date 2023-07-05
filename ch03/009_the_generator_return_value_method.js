// You can anytime end a generator function before it has yielded 
// all the values using the return() method of the generator object.
// The return() method takes an optional argument, representing the
// final value to return.

function* generator_function()
{
    yield 1 ;
    yield 2 ;
    yield 3 ;
}

var generator = generator_function() ;

console.log(generator.next().value) ;
console.log(generator.return(22).value) ;
console.log(generator.next().done);

// 1
// 22
// true