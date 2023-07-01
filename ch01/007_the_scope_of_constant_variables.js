const a = 12 ;      // accessible globally

function myFunction()
{
    console.log("a = ", a);

    const b = 13 ;      // accessible throughout function

    if (true)
    {
        const c = 14 ;      // accessible throughout the "if" statement
        console.log("b = ", b, " c = ", c);
    }

    console.log("c = ", c );
}

myFunction();

// a =  12
// b =  13  c =  14
// D:\drs\EcmaScript\LearningECMAScript6\ch01\007_the_scope_of_constant_variables.js:15
//     console.log("c = ", c );
//                         ^

// ReferenceError: c is not defined
//     at myFunction (D:\drs\EcmaScript\LearningECMAScript6\ch01\007_the_scope_of_constant_variables.js:15:25)