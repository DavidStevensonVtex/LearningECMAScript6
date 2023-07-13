// The get(target, property, receiver) method.
// This must return a value that represents the property value.

var proxy = new Proxy( { age: 12 },
    {
        get: function(target, property, receiver) {
            if (property in target)
            {
                return target[property];
            }
            else
            {
                return "Not Found" ;
            }
        }
    });

console.log("proxy.age", proxy.age);
console.log("proxy.name", proxy.name);
console.log('Reflect.get(proxy, "age")', Reflect.get(proxy, "age"));
console.log('Reflect.get(proxy, "name")', Reflect.get(proxy, "name"));

// proxy.age 12
// proxy.name Not Found
// Reflect.get(proxy, "age") 12
// Reflect.get(proxy, "name") Not Found