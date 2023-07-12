// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Validation

// With a Proxy, you can easily validate the passed value for an object. This example uses 
// the set() handler.

const validator = {
    set(obj, prop, value) {
      if (prop === "age") {
        if (!Number.isInteger(value)) {
          throw new TypeError("The age is not an integer");
        }
        if (value > 200) {
          throw new RangeError("The age seems invalid");
        }
      }
  
      // The default behavior to store the value
      obj[prop] = value;
  
      // Indicate success
      return true;
    },
  };
  
  const person = new Proxy({}, validator);
  
  person.age = 100;
  console.log(person.age); // 100

  try
  {
    person.age = "young"; // Throws an exception
  }
  catch (err)
  {
    console.log('person.age = "young"', err.message);
  }

  try
  {
    person.age = 300; // Throws an exception
  }
  catch (err)
  {
    console.log("person.age = 300", err.message);
  }

  try
  {
    person.age = 12.34 ; // Throws an exception
  }
  catch (err)
  {
    console.log("person.age = 12.34", err.message);
  }  
  
// Output
// 100
// person.age = "young" The age is not an integer
// person.age = 300 The age seems invalid
// person.age = 12.34 The age is not an integer