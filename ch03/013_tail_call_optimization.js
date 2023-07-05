"use strict" ;

function _add(x, y) { return x + y ; }

function add1 ( x, y )
{
    x = parseInt(x);
    y = parseInt(y) ;

    // tail call
    return _add(x, y);
}

function add2(x, y)
{
    x = parseInt(x);
    y = parseInt(y) ;

    // not tail call
    return 0 + _add(x, y);
}

console.log(add1(1, '1')) ;     // 2
console.log(add2(1, '2')) ;     // 3