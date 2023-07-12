// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// This is because when the proxy's get trap is invoked, the this value is the proxy instead 
// of the original secret, so #secret is not accessible. To fix this, use the original secret 
// as this:

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

  const proxy = new Proxy(aSecret, {
    get(target, prop, receiver) {
      // By default, it looks like Reflect.get(target, prop, receiver)
      // which has a different value of `this`
      return target[prop];
    },
  });
  console.log(proxy.secret);        // [REDACTED]