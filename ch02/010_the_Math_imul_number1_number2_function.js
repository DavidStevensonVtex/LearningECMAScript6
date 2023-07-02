console.log(Math.imul(590, 5_000_000));     // 32-bit integer multiplication, returns lower 32 bits of result
console.log(590 *5_000_000);                // 64-bit floating-point multiplatinon.

// previously, lower 32 bits of multiplication were lost.

// -1344967296
// 2950000000