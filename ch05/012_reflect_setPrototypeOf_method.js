let obj = {}

Reflect.setPrototypeOf(obj, {
    name: "Eden",
    life: function()
    {
        return 42 ;
    }
}) ;

console.log(obj.name);
console.log(obj.life());
// Eden
// 42