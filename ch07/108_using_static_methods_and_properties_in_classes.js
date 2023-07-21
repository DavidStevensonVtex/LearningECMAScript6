// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
    static {
      console.log('Class static initialization block called');
    }
  }
  
  console.log(ClassWithStaticMethod.staticProperty);
  // Expected output: "someValue"
  console.log(ClassWithStaticMethod.staticMethod());
  // Expected output: "static method has been called."