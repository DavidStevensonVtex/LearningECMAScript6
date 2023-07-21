class MyClass
{
    static [ "my" + "Method"] () 
    {
        console.log("Hello");
    }
}

MyClass["my" + "Method"]() ;        // Output "Hello"