// Default Parameter Values

function myFunction (x = 1, y = 2, z = 3)
// function myFunction (x = 1, y = 2, z = 3 + 5)   // defaults can also be expressions
{
    console.log("x = ", x, " y = ", y, " z = ", z);
}

myFunction(6,7);
myFunction(undefined, 7, 9);

// x =  6  y =  7  z =  3
// x =  1  y =  7  z =  9