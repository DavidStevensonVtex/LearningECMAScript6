// The receiver parameter is the reference of the object whose propert we intended
// to access.

var proxy = new Proxy ( { age: 13 },
    {
        get: function(target, property, receiver) {
            console.log(receiver);

            if (property in target) {
                console.log(receiver);
                return target[property];
            }
            else 
            {
                return "Not Found";
            }
        }
    });

    // console.log("proxy.name", proxy.name);

    var temp = proxy.name ;

    var obj = {
        age: 12,
        __proto__ : proxy
    } ;

    console.log("obj.age", obj.age);
    // console.log("obj.name", obj.name);      // RangeError: Maximum call stack size exceeded
    console.log("proxy.age", proxy.age);
    console.log("proxy.name", proxy.name);

// temp = obj.name ;                           // RangeError: Maximum call stack size exceeded
