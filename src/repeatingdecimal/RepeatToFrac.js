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
/**
 * Return a number with a simple repeating decimal, i.e. 1.454545 as a fraction (optinally in reduced form).  Decimals in the repeating sequence may be
 * presumed to be unique, i.e. 0.115115 would be considered as 0.1111 as 1 is the first digit to repeat.  This likely done to keep problems tractable for students.
 *
 * Only numerator and denominator are returned.
 *
 * @param n: string Number containing a repeating sequence after the decimal
 *
 * @param toReduced: boolean True if result is to be converted into reduced form
 * @default false
 *
 * @return SimpleFraction - container for numerator and denominator or null if input does not contain a repeating sequence
 */
function repeatToFraction(n, toReduced) {
    if (toReduced === void 0) { toReduced = false; }
    var result = null;
    // is there a repeating sequence after the decimal?
    var decimal = n.indexOf('.');
    if (decimal == -1)
        return result;
    var beforeDecimal = n.substring(0, decimal);
    var afterDecimal = n.substring(decimal + 1, n.length);
    var repeat = getMinimalRepeating(afterDecimal);
    var shift = 0;
    // do we need to skip forward to test for a repeating sequence some places after the decimal, like 5.0424242 or 2.13234234
    if (repeat == "") {
        var tmp = afterDecimal;
        var len = afterDecimal.length;
        shift = 1;
        while (tmp.length > 1) {
            tmp = afterDecimal.substring(shift, len);
            repeat = getMinimalRepeating(tmp);
            if (repeat != "")
                break;
            shift++;
        }
        if (repeat == "")
            return result;
    }
    var digits = repeat.length + shift; // number of repeat and shift digits
    // if d = # repeat digits, s = shift factor, and x is the original number, then form the equation 10^(d+s)x - (10^s)x = z, where z is  the numerical result of subtracting out the 
    // repeat sequence so, numerator = z and denominator = 10^(d+s) - 10^s.  z needs to be symbolically computed since the repeat sequence may not be repeated in sufficient length
    // to get the correct result in floating-point computation.
    var s = shift == 0 ? 1 : Math.pow(10, shift);
    var denominator = Math.pow(10, digits) - s;
    var n1 = beforeDecimal + n.substr(decimal + 1, digits);
    var n2 = beforeDecimal + n.substr(decimal + 1, shift);
    var numerator = +n1 - +n2;
    // result in reduced form?
    if (toReduced) {
        var d = gcd(numerator, denominator);
        numerator = Math.floor(numerator / d);
        denominator = Math.floor(denominator / d);
    }
    result = { num: numerator, den: denominator };
    return result;
}
exports.repeatToFraction = repeatToFraction;
// utility function to extract the minimal (unique-digit) repeating sequence of at least length 1, i.e. '555555' is a repeating sequence of '5', '545454' is a repeating
// sequence of '54, '123123123' is a repeating sequence of '123', and '054605460546' is a repeating sequence of '0546'
function getMinimalRepeating(test) {
    var result = "";
    var len = test.length;
    if (len < 1)
        return result;
    var candidate; // candidate sequence
    var lenC = 1; // length of candidate sequence
    while (2 * lenC <= len) {
        candidate = test.substr(0, lenC);
        if (candidate == test.substr(lenC, lenC))
            return candidate;
        else
            lenC++;
    }
    return result;
}
/**
 *  Compute the greatest common divisor of two integers
 *
 * @param n1 : number - First integer
 *
 * @param n2 : number - Second integer
 *
 * @return number : GCD of the two input integers
 */
function gcd(n1, n2) {
    // since this is used internally to the problem at hand, a lot of error-checking is skipped
    // Euclid's algorithm - nothing new under the sun
    var a = Math.max(n1, n2);
    var b = Math.min(n1, n2);
    var r = 0;
    while (b > 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return Math.floor(a);
}
//# sourceMappingURL=RepeatToFrac.js.map