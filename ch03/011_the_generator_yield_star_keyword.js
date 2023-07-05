// The yield* keyword inside a generator unction takes an iterable object as the
// expression and iterates it to yield its values.

function* generator_function_1()
{
    yield 2 ;
    yield 3 ;
}

function* generator_function_2()
{
    yield 1 ;
    yield* generator_function_1() ;
    yield* [4, 5] ;
}

var generator = generator_function_2() ;

for ( let val of generator_function_2()) {
    console.log(val);
}

// 1
// 2
// 3
// 4
// 5