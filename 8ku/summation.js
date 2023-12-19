"use strict";
// TODO Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
// Your function only needs to return the result, what is shown between parentheses in the example
// below is how you reach that result and it's not part of it, see the sample tests.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
Object.defineProperty(exports, "__esModule", { value: true });
exports.summation = void 0;
var summation = function (num) {
    var arr = new Array();
    for (var i = 0; i < num; i++) {
        arr.push(num - i);
    }
    console.log(arr);
    return arr.reduce(function (acc, el) { return (acc + el); }, 0);
};
exports.summation = summation;
console.log((0, exports.summation)(8));
