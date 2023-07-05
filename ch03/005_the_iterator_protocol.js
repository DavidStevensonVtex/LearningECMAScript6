let obj = {
    array: [ 1, 2, 3, 4, 5 ],
    nextIndex : 0,
    next : function () {
        return this.nextIndex < this.array.length ?
            { value: this.array[this.nextIndex++], done: false } :
            { done : true } ;
    }
}

let entry = obj.next() ;
while ( ! entry.done ) {
    console.log("value", entry.value, "done", entry.done ) ;
    entry = obj.next() ;
}

// TypeError: obj is not iterable
// for ( let value of obj ) {
//     console.log(value);
// }

// value 1 done false
// value 2 done false
// value 3 done false
// value 4 done false
// value 5 done false