function* generator_function()
{
    for ( let i = 1 ; i <= 5 ; i++ )
    {
        yield i ;
    }
}

for ( let value of generator_function()) {
    console.log(value);
}

// 1
// 2
// 3
// 4
// 5