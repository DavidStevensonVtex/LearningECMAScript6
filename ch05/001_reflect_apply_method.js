function function_name ( a, b, c )
{
    return this.value + a + b + c ;
}

let returned_value = Reflect.apply ( function_name, { value: 100 }, [ 10, 20, 30 ] ) ;

console.log("returned_value: ", returned_value);
// returned_value:  160