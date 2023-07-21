class ClassWithPublicInstanceMethod {
    publicMethod() {
      return "hello world";
    }
  }
  
  const instance = new ClassWithPublicInstanceMethod();
  console.log(instance.publicMethod()); // "hello world"
  