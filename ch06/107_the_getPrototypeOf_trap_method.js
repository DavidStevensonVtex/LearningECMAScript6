// The getPrototypeOf(target) method

var proxy = new Proxy( { age: 12, __proto__: { name: "Eden" } }, 
    {
        getPrototypeOf: function(target) {
            return Object.getPrototypeOf(target) ;
        }
    });

    console.log(Reflect.getPrototypeOf(proxy).name);    // Output: "Eden"