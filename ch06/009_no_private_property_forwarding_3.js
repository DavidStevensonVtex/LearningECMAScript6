// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// For methods, this means you have to redirect the method's this value to the original 
// object as well:

class Secret {
    #x = 1;
    x() {
      return this.#x;
    }
  }
  
  const aSecret = new Secret();
  const proxy = new Proxy(aSecret, {
    get(target, prop, receiver) {
      const value = target[prop];
      if (value instanceof Function) {
        return function (...args) {
          return value.apply(this === receiver ? target : this, args);
        };
      }
      return value;
    },
  });
  console.log(proxy.x());   // 1
  