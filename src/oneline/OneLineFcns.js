/**
 * Copyright 2016 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
// based on specifications for this problem set, there is no error-checking on the inputs - everything is to be written as a one-line function and
// there can be NO variable assignments and no multiple expressions separated with semicolons
// revserse characters in a string - LOL, like we haven't seen this one before :)
function reverseChars(inputStr) {
    return inputStr.split('').reverse().join('');
}
exports.reverseChars = reverseChars;
// convert an input string (presumed to be a name) into uppercase initials with an optional delimiter
function initials(inputStr, delim) {
    if (delim === void 0) { delim = ''; }
    return inputStr.split(' ').map(function (n) { return n.charAt(0).toUpperCase(); }).join(delim);
}
exports.initials = initials;
// pad an input string with the requested number of spaces on the left
function padLeft(inputStr, pad) {
    return Array(Math.abs(pad) + 1).join(' ') + inputStr;
}
exports.padLeft = padLeft;
// return the minimum element in an array of numbers
function minValue(values) {
    return values.length == 0 ? NaN : values.reduce(function (min, x) { return x < min ? x : min; });
}
exports.minValue = minValue;
// return the maximum element in an array of numbers
function maxValue(values) {
    return values.length == 0 ? NaN : values.reduce(function (max, x) { return x > max ? x : max; });
}
exports.maxValue = maxValue;
// are all values in an array greater than the supplied input value?
function allGreaterThan(values, compare) {
    return values.length == 0 ? false : values.every(function (x) { return x > compare; });
}
exports.allGreaterThan = allGreaterThan;
// return all the elements in an array that are greater than the supplied value
function getAllGreaterThan(values, compare) {
    return values.filter(function (x) { return x > compare; });
}
exports.getAllGreaterThan = getAllGreaterThan;
// return first index of array element greater than supplied value or -1 if no such array value exsits
function indexFirstGreaterThan(values, compare) {
    return values.length == 0 ? -1 : values.map(function (x) { return x > compare ? 1 : 0; }).indexOf(1);
}
exports.indexFirstGreaterThan = indexFirstGreaterThan;
//# sourceMappingURL=OneLineFcns.js.map