// Unlike Promise.resolve() method, the reject() method is used for debugging
// purposes and not for converting values into Promises

var p1 = Promise.reject("Rejected reason.") ;
p1.then(null, function(value) {
    console.log(value) ;
}) ;

Promise.reject( { name: "Eden" })
    .then(null, function(value) {
        console.log(value.name) ;
    });

// Output
// Rejected reason.
// Eden