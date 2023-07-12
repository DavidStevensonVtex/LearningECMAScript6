// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Value correction and an extra property

// The products proxy object evaluates the passed value and converts it to an array if needed. 
// The object also supports an extra property called latestBrowser both as a getter and a setter.

const products = new Proxy(
    {
      browsers: ["Firefox", "Chrome"],
    },
    {
      get(obj, prop) {
        // An extra property
        if (prop === "latestBrowser") {
          return obj.browsers[obj.browsers.length - 1];
        }
  
        // The default behavior to return the value
        return obj[prop];
      },
      set(obj, prop, value) {
        // An extra property
        if (prop === "latestBrowser") {
          obj.browsers.push(value);
          return true;
        }
  
        // Convert the value if it is not an array
        if (typeof value === "string") {
          value = [value];
        }
  
        // The default behavior to store the value
        obj[prop] = value;
  
        // Indicate success
        return true;
      },
    },
  );
  
  console.log(products.browsers);
  //  ['Firefox', 'Chrome']
  
  products.browsers = "Safari";
  //  pass a string (by mistake)
  
  console.log(products.browsers);
  //  ['Safari'] <- no problem, the value is an array
  
  products.latestBrowser = "Edge";
  
  console.log(products.browsers);
  //  ['Safari', 'Edge']
  
  console.log(products.latestBrowser);
  //  'Edge'
  
// Output
// [ 'Firefox', 'Chrome' ]
// [ 'Safari' ]
// [ 'Safari', 'Edge' ]
// Edge