var p1 = Promise.resolve(4) ;
p1.then(function(value) {
    console.log(value);
});

// Passed a promise object
Promise.resolve(p1)
    .then(function(value) { 
        console.log(value);
    });

Promise.resolve( { name: "Eden" } )
    .then(function(value) {
        console.log(value.name) ;
    });

// Output
// 4
// 4
// Eden