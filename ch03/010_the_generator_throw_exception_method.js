function* generator_function()
{
    try
    {
        yield 1 ;
    }
    catch ( e ) {
        console.log("1st exception");
    }

    try
    {
        yield 2 ;
    }
    catch ( e ) {
        console.log("2nd exception");
    }
}

var generator = generator_function() ;

console.log(generator.next().value) ;
console.log(generator.throw("exception string").value);
console.log(generator.throw("exception string").done);

// 1
// 1st exception
// 2
// 2nd exception
// true