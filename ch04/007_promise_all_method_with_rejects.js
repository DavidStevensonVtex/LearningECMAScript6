var p1 = new Promise ( function ( resolve, reject ) {
    setTimeout(function() {
        reject("Error") ;
    }, 1000) ;
    }) ;


var p2 = new Promise(function ( resolve, reject ) {
    setTimeout(function() {
        resolve() ;
    }, 2000);
});

var arr = [ p1, p2 ] ;

Promise.all(arr)
    .then(function() {
        console.log("Done") ;
    },
    function(reason)
    {
        console.log("Reject", reason);
    }) ;

// Output
// Reject Error