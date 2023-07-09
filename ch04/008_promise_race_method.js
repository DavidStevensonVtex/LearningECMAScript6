var p1 = new Promise ( function(resolve, reject) {
    setTimeout(function() {
        resolve("Fulfillment Value 1"); 
    }, 1000);
});

var p2 = new Promise ( function(resolve, reject) {
    setTimeout(function() {
        resolve("Fulfillment Value 2"); 
    }, 2000);
});

let arr = [ p1, p2 ] ;

Promise.race(arr)
    .then(function(value) {
        console.log(value) ;
    },
    function(reason)
    {
        console.log("Reject", reason);
    }) ;

// Output
// Fulfillment Value 1