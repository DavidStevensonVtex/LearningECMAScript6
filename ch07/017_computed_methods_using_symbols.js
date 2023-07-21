let s = Symbol("Sample") ;

class MyClass
{
    static [s]()
    {
        console.log("Hello") ;
    }
}

MyClass[s]() ;      // Output "Hello"