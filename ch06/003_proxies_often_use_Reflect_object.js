// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Proxies are often used with the Reflect object, which provides some methods with the same 
// names as the Proxy traps. The Reflect methods provide the reflective semantics for invoking 
// the corresponding object internal methods. For example, we can call Reflect.get if we don't 
// wish to redefine the object's behavior:

const target = {
    message1: "hello",
    message2: "everyone",
  };
  
  const handler3 = {
    get(target, prop, receiver) {
      if (prop === "message2") {
        return "world";
      }
      // Reflect.get(target, propertyKey, receiver)
      return Reflect.get(...arguments);
    },
  };
  
  const proxy3 = new Proxy(target, handler3);
  
  console.log(proxy3.message1); // hello
  console.log(proxy3.message2); // world