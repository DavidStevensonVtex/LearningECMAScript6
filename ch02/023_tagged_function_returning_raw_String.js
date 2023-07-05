let tag = function(strings, ...values) {
    return strings.raw[0] ;
}

console.log(`Hello \n World!!!`);

let str = tag `Hello \n World!!!` ;
console.log(str);

// Hello 
//  World!!!
// Hello \n World!!!