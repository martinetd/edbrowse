// stringname=sharedJS
/*********************************************************************
Javascript that loads and runs in the master window.
Functions and classses defined here can be shared by all the edbrowse windows,
if we're very careful!
We have to make sure nothing can be hijacked, starting with the Object.
p = document.createElement("p"); p.toString();
A website might innocently do that.
Nail down prototype and some methods that might innocently be called.
*********************************************************************/

Object.defineProperty(this, "Object",{writable:false,configurable:false});
Object.defineProperty(Object, "prototype",{writable:false,configurable:false});
Object.defineProperty(Object.prototype, "toString",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Object.prototype, "toLocaleString",{enumerable:false,writable:false,configurable:false});
// demin.js sets constructor to Object, which it was before, but that means,
// I can't nail this down until demin.js has run its course.
// Object.defineProperty(Object.prototype, "constructor",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Object.prototype, "valueOf",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Object.prototype, "hasOwnProperty",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Object.prototype, "isPrototypeOf",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Object.prototype, "propertyIsEnumerable",{enumerable:false,writable:false,configurable:false});

Object.defineProperty(this, "Function",{writable:false,configurable:false});
Object.defineProperty(Function, "prototype",{writable:false,configurable:false});
Object.defineProperty(Function.prototype, "call",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Function.prototype, "apply",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Function.prototype, "bind",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Function.prototype, "toString",{enumerable:false,writable:false,configurable:false});
Object.defineProperty(Function.prototype, "constructor",{enumerable:false,writable:false,configurable:false});
