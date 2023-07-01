const a = {
    "name" : "John"
} ;

console.log("a.name = ", a.name);

a.name = "Eden" ;

console.log("a.name = ", a.name);

a = {} ;        // throws read-only exception

// a.name =  John
// a.name =  Eden

// a = {} ;        // throws read-only exception
//   ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (D:\drs\EcmaScript\LearningECMAScript6\ch01\008_referencing_objects_using_constant_variables.js:11:3)