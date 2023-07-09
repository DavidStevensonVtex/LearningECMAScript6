var p1 = new Promise ( function ( resolve, reject ) {
    setTimeout(function() {
        resolve() ;
    }, 1000) ;
    }) ;


var p2 = new Promise(function ( resolve, reject ) {
    setTimeout(function() {
        resolve() ;
    }, 10000);
});

var arr = [ p1, p2 ] ;

Promise.all(arr)
    .then(function() {
        console.log("Done") ;       // Done is logged after 10 seconds.
    }) ;

// If the iterable object contains a value that is not a promise object, then it's converted
// to the Promise object using the Promise.resolve() method.