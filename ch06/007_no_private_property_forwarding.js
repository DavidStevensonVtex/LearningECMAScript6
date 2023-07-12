// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// No private property forwarding

// A proxy is still another object with a different identity — it's a proxy that operates 
// between the wrapped object and the outside. As such, the proxy does not have direct 
// access to the original object's private properties.

class Secret {
    #secret;
    constructor(secret) {
      this.#secret = secret;
    }
    get secret() {
      return this.#secret.replace(/\d+/, "[REDACTED]");
    }
  }
  
  const aSecret = new Secret("123456");
  console.log(aSecret.secret); // [REDACTED]
  // Looks like a no-op forwarding...
  const proxy = new Proxy(aSecret, {});
  console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it

  
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

// Private class features

// Class fields are public by default, but private class members can be created by 
// using a hash # prefix. The privacy encapsulation of these class features is 
// enforced by JavaScript itself.

// Private members are not native to the language before this syntax existed. In 
// prototypical inheritance, its behavior may be emulated with WeakMap objects or 
// closures, but they can't compare to the # syntax in terms of ergonomics.
