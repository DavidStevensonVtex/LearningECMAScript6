// Any object that implements the iterable protocol is known as an iterable.
// According to the iterable protocol, an object needs to provide the @@iterator
// method; that is, it must have the Symbol.iterator symbol as a property key.
// The @@iterator method must return an iterator object.

let obj = {
    array: [1, 2, 3, 4, 5],
    nextIndex: 0,
    [Symbol.iterator]: function () {
        return {
            array: this.array,
            nextIndex: this.nextIndex,
            next: function () {
                return this.nextIndex < this.array.length ?
                    { value: this.array[this.nextIndex++], done: false } :
                    { done: true };

            }
        }
    }
}

for ( let value of obj ) {
    console.log(value);
}

// 1
// 2
// 3
// 4
// 5