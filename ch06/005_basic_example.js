// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Basic example

// In this simple example, the number 37 gets returned as the default value when the 
// property name is not in the object. It is using the get() handler.

const handler = {
    get(obj, prop) {
      return prop in obj ? obj[prop] : 37;
    },
  };
  
  const p = new Proxy({}, handler);
  p.a = 1;
  p.b = undefined;
  
  console.log("p.a", p.a, "p.b", p.b); // 1, undefined

  console.log('"a" in p', "a" in p, "p.a", p.a);
  console.log('"b" in p', "b" in p, "p.b", p.b);
  console.log('"c" in p', "c" in p, "p.c", p.c); // false, 37

// p.a 1 p.b undefined
// "a" in p true p.a 1
// "b" in p true p.b undefined
// "c" in p false p.c 37