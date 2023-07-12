// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

// Terminology
// The following terms are used when talking about the functionality of proxies.

// handler
// The object passed as the second argument to the Proxy constructor. It contains 
// the traps which define the behavior of the proxy.

// trap
// The function that define the behavior for the corresponding object internal 
// method. (This is analogous to the concept of traps in operating systems.)

// target
// Object which the proxy virtualizes. It is often used as storage backend for 
// the proxy. Invariants (semantics that remain unchanged) regarding object 
// non-extensibility or non-configurable properties are verified against the 
// target.

// invariants
// Semantics that remain unchanged when implementing custom operations. If your 
// trap implementation violates the invariants of a handler, a TypeError will 
// be thrown.