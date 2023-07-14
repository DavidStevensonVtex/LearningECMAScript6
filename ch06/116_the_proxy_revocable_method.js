// The Proxy.revocable(target, handler) method

// A revocable proxy is a proxy that can be revoked (that is, switched off).

// To create the revocable proxies, we have to use the Proxy.revocable() method.
// The Proxy.revocable() method is not a constructor. This method also takes the
// same arguments as the Proxy constructor, but instead of returning a revocable proxy
// instance directly, it returns an object with two properties, which are the following:

//      o   proxy: This is the revocable proxy object.
//      o   revoke: When this function is called, it revokes the proxy

// ONce a revocable proxy is revoked, any attempts to use it will throw a TypeError exception.

let revocableProxy = Proxy.revocable ( { age: 12 }, {
    get: function ( target, property, receiver ) {
        if ( property in target ) {
            return target[property] ;
        } 
        else
        {
            return "Not found" ;
        }
    }
});

console.log("revocableProxy", revocableProxy);
console.log("revocableProxy.proxy.age", revocableProxy.proxy.age);
console.log("Executing: revocableProxy.revoke()")
revocableProxy.revoke() ;
console.log("revocableProxy.proxy.age", revocableProxy.proxy.age ) ;

// revocableProxy { proxy: { age: 12 }, revoke: [Function (anonymous)] }
// revocableProxy.proxy.age 12
// Executing: revocableProxy.revoke()
// D:\drs\EcmaScript\LearningECMAScript6\ch06\116_the_proxy_revocable_method.js:31
// console.log("revocableProxy.proxy.age", revocableProxy.proxy.age ) ;
//                                                              ^

// TypeError: Cannot perform 'get' on a proxy that has been revoked
//     at Object.<anonymous> (D:\drs\EcmaScript\LearningECMAScript6\ch06\116_the_proxy_revocable_method.js:31:62)