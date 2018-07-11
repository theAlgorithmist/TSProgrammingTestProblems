/** Copyright 2016 Jim Armstrong (www.algorithmist.net)
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
// Specs for various 'programming test' problems in Typescript
// test functions/classes
var Multiply321_1 = require('./src/mult321/Multiply321');
var ExchangeInt_1 = require('./src/exchange/ExchangeInt');
var MachEps_1 = require('./src/macheps/MachEps');
var FizzBuzz_1 = require('./src/fizzbuzz/FizzBuzz');
var Interp_1 = require('./src/interp/Interp');
var RandomIntInRange_1 = require('./src/randomint/RandomIntInRange');
var ComputeTrips_1 = require('./src/uberdriver/ComputeTrips');
var MaxProfit_1 = require('./src/daytrader/MaxProfit');
var TwoMinMax_1 = require('./src/twomin/TwoMinMax');
var TwoDigits_1 = require('./src/twodigits/TwoDigits');
var ExtendedLinkedList_1 = require('./src/llist1/ExtendedLinkedList');
var Bisect_1 = require('./src/bisection/Bisect');
var Fibonacci_1 = require('./src/fibonacci/Fibonacci');
var FirstNonRepeatingChar_1 = require('./src/firstnonrepeating/FirstNonRepeatingChar');
var BinomialCoef_1 = require('./src/shared/BinomialCoef');
var OneLineFcns_1 = require('./src/oneline/OneLineFcns');
var OneLineFcns_2 = require('./src/oneline/OneLineFcns');
var OneLineFcns_3 = require('./src/oneline/OneLineFcns');
var OneLineFcns_4 = require('./src/oneline/OneLineFcns');
var OneLineFcns_5 = require('./src/oneline/OneLineFcns');
var OneLineFcns_6 = require('./src/oneline/OneLineFcns');
var OneLineFcns_7 = require('./src/oneline/OneLineFcns');
var OneLineFcns_8 = require('./src/oneline/OneLineFcns');
var ArrayScan_1 = require('./src/worstcase/ArrayScan');
var Matrix_1 = require('./src/shared/Matrix');
var ScanGrid_1 = require('./src/grid/ScanGrid');
var Factorial_1 = require('./src/factorial/Factorial');
var RepeatToFrac_1 = require('./src/repeatingdecimal/RepeatToFrac');
var Anagram_1 = require('./src/anagram/Anagram');
var ArrObjSearch_1 = require('./src/arrobjsearch/ArrObjSearch');
var CountingSort_1 = require('./src/countingsort/CountingSort');
var extractProps_1 = require('./src/hierarchy/extractProps');
var BTreeNode_1 = require('./src/invertbinary/BTreeNode');
var invert_1 = require('./src/invertbinary/invert');
var ReversLList_1 = require("./src/reverselinkedlist/ReversLList");
var Euclid_1 = require("./src/euclid/Euclid");
var Euclid_2 = require("./src/euclid/Euclid");
var Euclid_3 = require("./src/euclid/Euclid");
var ComputeJumps_1 = require("./src/tothemoon/ComputeJumps");
var balancedparens_1 = require("./src/balancedparens/balancedparens");
var Chai = require('chai');
var expect = Chai.expect;
// quick-n-dirty elementwise arrray comparison for arrays of numbers (expeted to be integers)
function arrCompare(arr1, arr2) {
    if (!arr1 || !arr2)
        return false;
    var l1 = arr1.length;
    var l2 = arr2.length;
    if (l1 != l2)
        return false;
    var i;
    for (i = 0; i < l1; ++i) {
        if (Math.abs(arr1[i] - arr2[i]) > 0.000000001)
            return false;
    }
    return true;
}
// init an array with a strictly increasing sequence of numbers
function makeArray(n) {
    var i;
    var a = new Array();
    // KISS
    for (i = 0; i < n; ++i)
        a.push(i);
    return a;
}
// Test Suites
describe('Multiply by 321', function () {
    var result;
    var obj = { blah: 10 }; // the typing is to get past what would otherwise be caught at compile time
    // edge cases
    it('returns zero when multiplied by zero', function () {
        result = Multiply321_1.multiply321(0);
        expect(result).to.equal(0);
    });
    it('returns zero when multiplied by zero as a string', function () {
        result = Multiply321_1.multiply321("0");
        expect(result).to.equal(0);
    });
    it('returns zero when multiplied by string that can still be coerced to zero', function () {
        result = Multiply321_1.multiply321("0a");
        expect(result).to.equal(0);
    });
    it('returns NaN when multiplied by string that can not be coerced to number', function () {
        result = Multiply321_1.multiply321("abc0123");
        expect(isNaN(result)).to.be.true;
    });
    it('returns NaN when multiplied by an Object', function () {
        result = Multiply321_1.multiply321(obj);
        expect(isNaN(result)).to.be.true;
    });
    it('returns 321 when multiplied by one', function () {
        result = Multiply321_1.multiply321(1);
        expect(result).to.equal(321);
    });
    it('returns -321 when multiplied by minus one', function () {
        result = Multiply321_1.multiply321(-1);
        expect(result).to.equal(-321);
    });
    it('returns -642 when multiplied by -1.9', function () {
        result = Multiply321_1.multiply321(-1.9);
        expect(result).to.equal(-642);
    });
    // now for the main event ...
    it('rounds inputs to integer before multiply', function () {
        result = Multiply321_1.multiply321(1.27);
        expect(result).to.equal(321);
    });
    it('returns 642 when multiplied by 2.0', function () {
        result = Multiply321_1.multiply321(2.0);
        expect(result).to.equal(642);
    });
    it('returns 3210 when multiplied by 10', function () {
        result = Multiply321_1.multiply321(10);
        expect(result).to.equal(3210);
    });
    it('returns -3210 when multiplied by -10', function () {
        result = Multiply321_1.multiply321(-10);
        expect(result).to.equal(-3210);
    });
    it('returns 28957410 when multiplied by Beverly Hills 90210', function () {
        result = Multiply321_1.multiply321(90210);
        expect(result).to.equal(28957410);
    });
});
describe('Exchange Integers', function () {
    var result;
    it('properly exchanges 6 and 5', function () {
        result = ExchangeInt_1.exchangeInt(6, 5);
        expect(+result['a']).to.equal(5);
        expect(+result['b']).to.equal(6);
    });
    it('properly exchanges 1 and -1', function () {
        result = ExchangeInt_1.exchangeInt(1, -1);
        expect(+result['a']).to.equal(-1);
        expect(+result['b']).to.equal(1);
    });
    it('properly exchanges 4 and 0', function () {
        result = ExchangeInt_1.exchangeInt(4, 0);
        expect(+result['a']).to.equal(0);
        expect(+result['b']).to.equal(4);
    });
    it('properly exchanges 0 and 5', function () {
        result = ExchangeInt_1.exchangeInt(0, 5);
        expect(+result['a']).to.equal(5);
        expect(+result['b']).to.equal(0);
    });
    it('properly exchanges -10 and -11', function () {
        result = ExchangeInt_1.exchangeInt(-10, -11);
        expect(+result['a']).to.equal(-11);
        expect(+result['b']).to.equal(-10);
    });
});
describe('Machine Epsilon', function () {
    var epsilon = MachEps_1.machEps();
    var actual = Math.pow(2.0, -52);
    // this is necessary, but not sufficient (why is a good interview question in and of itself)
    it('is different from 1.0 when added to 1.0', function () {
        expect(1.0 + epsilon != 1.0).to.be.true;
    });
    it('epsilon/2 + 1.0 equals 1.0', function () {
        expect(1.0 + 0.5 * epsilon == 1.0).to.be.true;
    });
    it('should be 2^-52', function () {
        expect(epsilon).to.equal(actual);
    });
});
describe('Fizz Buzz', function () {
    var result = FizzBuzz_1.fizzBuzz();
    // if you want to look at the entire array
    //console.log( "FizzBuzz result: ", result );
    it('has array length of 100', function () {
        expect(result.length).to.equal(100);
    });
    // run through primes not 3 and 5
    it('assigns index values correctly', function () {
        expect(result[0]).to.equal("1");
        expect(result[1]).to.equal("2");
        expect(result[3]).to.equal("4");
        expect(result[6]).to.equal("7");
        expect(result[10]).to.equal("11");
        expect(result[12]).to.equal("13");
        expect(result[16]).to.equal("17");
        expect(result[22]).to.equal("23");
        expect(result[30]).to.equal("31");
        expect(result[40]).to.equal("41");
        expect(result[42]).to.equal("43");
        expect(result[46]).to.equal("47");
        expect(result[46]).to.equal("47");
        expect(result[52]).to.equal("53");
        expect(result[58]).to.equal("59");
        expect(result[60]).to.equal("61");
        expect(result[66]).to.equal("67");
        expect(result[70]).to.equal("71");
        expect(result[72]).to.equal("73");
        expect(result[78]).to.equal("79");
        expect(result[82]).to.equal("83");
        expect(result[88]).to.equal("89");
        expect(result[96]).to.equal("97");
    });
    // a few of the fizzes
    it('assigns indicies evenly divisible by three correctly', function () {
        expect(result[2].toLowerCase()).to.equal("fizz");
        expect(result[5].toLowerCase()).to.equal("fizz");
        expect(result[8].toLowerCase()).to.equal("fizz");
        expect(result[26].toLowerCase()).to.equal("fizz");
        expect(result[32].toLowerCase()).to.equal("fizz");
        expect(result[62].toLowerCase()).to.equal("fizz");
        expect(result[98].toLowerCase()).to.equal("fizz");
    });
    // a few of the buzzes
    it('assigns indicies evenly divisible by five correctly', function () {
        expect(result[4].toLowerCase()).to.equal("buzz");
        expect(result[19].toLowerCase()).to.equal("buzz");
        expect(result[34].toLowerCase()).to.equal("buzz");
        expect(result[39].toLowerCase()).to.equal("buzz");
        expect(result[49].toLowerCase()).to.equal("buzz");
        expect(result[64].toLowerCase()).to.equal("buzz");
        expect(result[94].toLowerCase()).to.equal("buzz");
    });
    // the fizzbuzzes
    it('assigns indicies evenly divisible by three & five correctly', function () {
        expect(result[14].toLowerCase()).to.equal("fizzbuzz");
        expect(result[29].toLowerCase()).to.equal("fizzbuzz");
        expect(result[44].toLowerCase()).to.equal("fizzbuzz");
        expect(result[74].toLowerCase()).to.equal("fizzbuzz");
        expect(result[89].toLowerCase()).to.equal("fizzbuzz");
    });
});
describe('Linear Interpolation', function () {
    var interp = new Interp_1.LinearInterpolation();
    it('is returns zero after construction and 0 x-value', function () {
        expect(interp.interpolate(0)).to.equal(0);
    });
    it('works for any x-interval and default y-values', function () {
        interp.x1 = -1;
        interp.x2 = 1;
        expect(interp.interpolate(0)).to.equal(0);
        interp.x1 = -2;
        interp.x2 = 2;
        expect(interp.interpolate(0)).to.equal(0);
    });
    it('works for coincident points', function () {
        interp.x1 = -1;
        interp.x2 = 1;
        interp.y1 = -1;
        interp.y2 = 1;
        expect(interp.interpolate(-1)).to.equal(-1);
        expect(interp.interpolate(1)).to.equal(1);
    });
    it('works for reversed interval', function () {
        interp.x1 = 2;
        interp.x2 = -2;
        interp.y1 = -7;
        interp.y2 = 7;
        expect(interp.interpolate(-2)).to.equal(-7);
        expect(interp.interpolate(2)).to.equal(7);
    });
    it('correctly returns endpoints', function () {
        interp.x1 = -3;
        interp.x2 = 2;
        interp.y1 = 4;
        interp.y2 = 6;
        expect(Math.abs(interp.interpolate(-3) - 4)).to.be.below(0.000001);
        expect(Math.abs(interp.interpolate(2) - 6)).to.be.below(0.000001);
    });
    it('works with vertical line', function () {
        interp.x1 = 3;
        interp.x2 = 3;
        interp.y1 = 4;
        interp.y2 = 100;
        expect(Math.abs(interp.interpolate(3) - 4)).to.be.below(0.000001);
    });
    it('correctly interpolates', function () {
        interp.x1 = 1;
        interp.x2 = 2;
        interp.y1 = 3;
        interp.y2 = 4;
        expect(Math.abs(interp.interpolate(1.5) - 3.5)).to.be.below(0.000001);
    });
    it('allows extrapolation', function () {
        interp.x1 = 1;
        interp.x2 = 2;
        interp.y1 = 3;
        interp.y2 = 4;
        expect(Math.abs(interp.interpolate(3) - 5)).to.be.below(0.000001);
        expect(Math.abs(interp.interpolate(0) - 2)).to.be.below(0.000001);
    });
});
describe('Random Integer in Range', function () {
    // the typical approach - note that as the number of trials increaes, the 'typical' line of code is twice as likely to pick
    // 1 or 2 than 0 or 3.  it is highly biased away from the endpoints
    var i;
    var x;
    var i1 = 0;
    var i2 = 3;
    var f0 = 0;
    var f1 = 1;
    for (i = 0; i < 10000; ++i) {
        x = i1 + Math.round(Math.random() * (i2 - i1));
        if (x == 0 || x == 3)
            f0++;
        else
            f1++;
    }
    var ratio1 = f1 / f0;
    console.log("0 & 3 frequency: ", f0);
    console.log("1 & 2 frequency: ", f1);
    console.log("ratio: ", ratio1);
    // use the Typescript Math Toolkit random integer in range class - note here that the ratio is close to 1 so that 0 or 3 is about as likely
    // as 1 or 2.
    var generator = new RandomIntInRange_1.RandomIntInRange(0, 3);
    f0 = 0;
    f1 = 0;
    for (i = 0; i < 10000; ++i) {
        x = generator.generate();
        if (x == 0 || x == 3)
            f0++;
        else
            f1++;
    }
    var ratio2 = f1 / f0;
    console.log("0 & 3 frequency: ", f0);
    console.log("1 & 2 frequency: ", f1);
    console.log("ratio: ", ratio2);
    it('generates consistent iterates in interval', function () {
        expect(ratio2 < ratio1).to.be.true;
    });
});
describe('Uber Driver', function () {
    var __getRating = function (trips) {
        return trips.reduce(function (total, x) { return total + x; }) / +trips.length;
    };
    var junk = { a: -1 };
    it('returns 0 for invalid inputs', function () {
        expect(ComputeTrips_1.tripCount(4.4, junk)).to.equal(0);
        expect(ComputeTrips_1.tripCount(1 / 0, 4)).to.equal(0);
        expect(ComputeTrips_1.tripCount(4.5, 6)).to.equal(0);
    });
    it('returns ininity for an existing 5-star rating', function () {
        expect(ComputeTrips_1.tripCount(5.0, 4)).to.equal(Infinity);
    });
    // trip sequence where we know the answer in advance
    it('returns correct number of trips #1', function () {
        var r = __getRating([4, 5, 3, 5, 5]);
        var n = ComputeTrips_1.tripCount(r, 3); // should be 3
        expect(n).to.equal(3);
        // new ranking after 3 consecutive 5-star trips following the downrate
        var rstar = __getRating([4, 5, 3, 5, 5, 3, 5, 5, 5]);
        expect(rstar >= r).to.be.true;
    });
    // some negative testing ...
    it('uses abs. value for negative inputs', function () {
        var r = __getRating([4, 5, 3, 5, 5]);
        var n = ComputeTrips_1.tripCount(-r, 3); // should be 3
        expect(n).to.equal(3);
        n = ComputeTrips_1.tripCount(r, -3);
        expect(n).to.equal(3);
    });
    it('rounds floating-point number for current ranking', function () {
        var r = __getRating([4, 5, 3, 5, 5]);
        var n = ComputeTrips_1.tripCount(r, 3.257);
        expect(n).to.equal(3);
    });
    // this observation may be a bit non-intuitive, so it's illustrated by example
    it('required numbero of trips is independent of prioer trip count', function () {
        var r = 4;
        var n = ComputeTrips_1.tripCount(r, 2); // should be 2
        // observe the sequence - two ways to have a 4.0 trip rating before the two-star
        r = __getRating([4, 5, 2, 5]);
        console.log("Case 1, original rating: ", r);
        console.log("Case 1, after downrate : ", __getRating([4, 5, 2, 5, 2]));
        console.log("Case 1, after 1 5-star : ", __getRating([4, 5, 2, 5, 2, 5]));
        console.log("Case 1, after 2 5-star : ", __getRating([4, 5, 2, 5, 2, 5, 5]));
        console.log("");
        // another way to have an original 4-star rating ... 4, 4, 4, 4, 4
        console.log("Case 2, after downrate : ", __getRating([4, 4, 4, 4, 4, 2]));
        console.log("Case 2, after 1 5-star : ", __getRating([4, 4, 4, 4, 4, 2, 5]));
        console.log("Case 2, after 2 5-star : ", __getRating([4, 4, 4, 4, 4, 2, 5, 5]));
        expect(n).to.equal(2);
    });
});
describe('Day Trader', function () {
    var profit = MaxProfit_1.maxProfit([]);
    it('returns zero for empty price list', function () {
        expect(profit).to.equal(0);
    });
    it('returns zero for singleton price list', function () {
        profit = MaxProfit_1.maxProfit([10]);
        expect(profit).to.equal(0);
    });
    // test cases where it is easy to determine the correct result by direct examination
    it('returns correct max profit #1', function () {
        profit = MaxProfit_1.maxProfit([1, 2]);
        expect(profit).to.equal(1);
    });
    it('returns correct max profit #2', function () {
        profit = MaxProfit_1.maxProfit([3, 3]);
        expect(profit).to.equal(0);
    });
    it('returns correct max profit #3', function () {
        profit = MaxProfit_1.maxProfit([10, 12, 5, 8, 10, 7, 6, 8, 11, 7]);
        expect(profit).to.equal(6);
    });
    // put absolute high/low at opposite ends of the array
    it('returns correct max profit #4', function () {
        profit = MaxProfit_1.maxProfit([5, 11, 5, 8, 10, 7, 6, 8, 10, 12]);
        expect(profit).to.equal(7);
    });
    it('returns correct max profit #5', function () {
        profit = MaxProfit_1.maxProfit([12, 11, 5, 8, 10, 7, 6, 8, 10, 5]);
        expect(profit).to.equal(5);
    });
    it('returns correct max profit #6', function () {
        profit = MaxProfit_1.maxProfit([12, 11, 5, 8, 10, 7, 6, 4, 8, 7, 10, 5, 5, 6, 4, 4]);
        expect(profit).to.equal(6);
    });
    // and, finally ... the case where prices decline monotonically throughout the session - should return minimum loss (negative number)
    it('returns correct max profit #7', function () {
        profit = MaxProfit_1.maxProfit([100, 98, 96, 94, 93, 90, 87, 85, 80, 75, 70, 60, 50, 45, 40, 37, 35, 30, 26]);
        expect(profit).to.equal(-1);
    });
});
describe('Two Mins and Max', function () {
    var result = TwoMinMax_1.twoMinMax([]);
    it('returns correct results for empty array', function () {
        expect(+result['min1']).to.equal(0);
        expect(+result['min2']).to.equal(0);
        expect(+result['max']).to.equal(0);
    });
    it('returns correct results for singleton array', function () {
        result = TwoMinMax_1.twoMinMax([2]);
        expect(+result['min1']).to.equal(2);
        expect(+result['min2']).to.equal(2);
        expect(+result['max']).to.equal(2);
    });
    // no gaps, i.e. no min-integer between min and max that is NOT in the input array
    it('returns specified results for no-gap array #1', function () {
        result = TwoMinMax_1.twoMinMax([1, 2, 3]);
        expect(+result['min1']).to.equal(1);
        expect(+result['min2']).to.equal(1);
        expect(+result['max']).to.equal(3);
    });
    // degnerate version of above example
    it('returns specified results for no-gap array #2', function () {
        result = TwoMinMax_1.twoMinMax([1, 1, 1]);
        expect(+result['min1']).to.equal(1);
        expect(+result['min2']).to.equal(1);
        expect(+result['max']).to.equal(1);
    });
    it('returns correct results arbitrary integer array #1', function () {
        result = TwoMinMax_1.twoMinMax([-1, -3, 7, 2, 20, 3, 5, -11, 14, 13, 12, -1]);
        expect(+result['min1']).to.equal(-11);
        expect(+result['min2']).to.equal(-10);
        expect(+result['max']).to.equal(20);
    });
    // put the minimum at each end of the array
    it('returns correct results arbitrary integer array #2', function () {
        result = TwoMinMax_1.twoMinMax([-11, -1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1]);
        expect(+result['min1']).to.equal(-11);
        expect(+result['min2']).to.equal(-10);
        expect(+result['max']).to.equal(20);
    });
    it('returns correct results arbitrary integer array #3', function () {
        result = TwoMinMax_1.twoMinMax([-1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1, -11]);
        expect(+result['min1']).to.equal(-11);
        expect(+result['min2']).to.equal(-10);
        expect(+result['max']).to.equal(20);
    });
    // duplicate the min
    it('returns correct results arbitrary integer array #4', function () {
        result = TwoMinMax_1.twoMinMax([-1, -3, 7, 2, 20, 3, -11, 5, 14, 13, 12, -1, -11]);
        expect(+result['min1']).to.equal(-11);
        expect(+result['min2']).to.equal(-10);
        expect(+result['max']).to.equal(20);
    });
});
describe('Last Two Digits (not multiple of 10)', function () {
    var junk = "asdfasdf";
    var morejunk = 1 / 0;
    it('returns correct results for invalid arguments list', function () {
        var result = TwoDigits_1.lastTwoDigits(junk, morejunk);
        expect(+result['n']).to.equal(0);
        expect(+result['ones']).to.equal(0);
        expect(+result['tens']).to.equal(0);
        expect(result['square']).to.be.true;
    });
    it('returns correct results for empty argument list', function () {
        var result = TwoDigits_1.lastTwoDigits();
        expect(+result['n']).to.equal(1);
        expect(+result['ones']).to.equal(1);
        expect(+result['tens']).to.equal(0);
        expect(result['square']).to.be.true;
    });
    it('properly clips invalid arguments', function () {
        var result = TwoDigits_1.lastTwoDigits(-1, 11);
        expect(+result['n']).to.equal(81);
        expect(+result['ones']).to.equal(1);
        expect(+result['tens']).to.equal(8);
        expect(result['square']).to.be.true;
    });
    it('returns correct results for correct arguments #1', function () {
        var result = TwoDigits_1.lastTwoDigits(0, 5);
        expect(+result['n']).to.equal(25);
        expect(+result['ones']).to.equal(5);
        expect(+result['tens']).to.equal(2);
        expect(result['square']).to.be.true;
    });
    it('returns correct results for correct arguments #2', function () {
        var result = TwoDigits_1.lastTwoDigits(1, 9);
        expect(+result['n']).to.equal(361);
        expect(+result['ones']).to.equal(1);
        expect(+result['tens']).to.equal(6);
        expect(result['square']).to.be.false;
    });
    it('returns correct results for correct arguments #3', function () {
        var result = TwoDigits_1.lastTwoDigits(2, 1);
        expect(+result['n']).to.equal(441);
        expect(+result['ones']).to.equal(1);
        expect(+result['tens']).to.equal(4);
        expect(result['square']).to.be.true;
    });
    it('returns correct results for correct arguments #4', function () {
        var result = TwoDigits_1.lastTwoDigits(3, 4);
        expect(+result['n']).to.equal(1156);
        expect(+result['ones']).to.equal(6);
        expect(+result['tens']).to.equal(5);
        expect(result['square']).to.be.false;
    });
    it('returns correct results for correct arguments #5', function () {
        var result = TwoDigits_1.lastTwoDigits(4, 1);
        expect(+result['n']).to.equal(1681);
        expect(+result['ones']).to.equal(1);
        expect(+result['tens']).to.equal(8);
        expect(result['square']).to.be.true;
    });
});
describe('Linked List k-from-end', function () {
    var list = new ExtendedLinkedList_1.ExtendedLinkedList();
    var node;
    it('returns null for k < 0', function () {
        node = list.kfromEnd(-1);
        expect(node).to.equal(null);
    });
    it('works for singleton list', function () {
        list.add("0", {});
        node = list.kfromEnd(0);
        expect(node.id).to.equal("0");
        // beyond beginning of list
        node = list.kfromEnd(1);
        expect(node).to.equal(null);
    });
    it('works for arbitrary list', function () {
        list.add("0", {});
        list.add("1", {});
        list.add("2", {});
        list.add("3", {});
        list.add("4", {});
        list.add("5", {});
        list.add("6", {});
        list.add("7", {});
        list.add("8", {});
        list.add("9", {});
        node = list.kfromEnd(4);
        expect(node.id).to.equal("5");
        // select head of list as special case
        node = list.kfromEnd(9);
        expect(node.id).to.equal("0");
    });
});
describe('Interval Bisection', function () {
    it('returns no root for a = b', function () {
        var f = function (x) { return 2.0 * x; };
        var result = Bisect_1.BisectInterval.bisect(1, 1, f);
        expect(result['root']).to.be.false;
    });
    it('returns no root when there is no real root in [a,b]', function () {
        var f = function (x) { return x * x - 4.0; };
        var result = Bisect_1.BisectInterval.bisect(-10, -5, f);
        expect(result['root']).to.be.false;
    });
    it('located roote in right interval', function () {
        var f = function (x) { return x * x - 4.0; };
        var result = Bisect_1.BisectInterval.bisect(-10, -1, f);
        expect(result['root']).to.be.true;
        expect(+result['left'] >= -10).to.be.true;
        expect(+result['right'] <= -1).to.be.true;
    });
    it('brackets a single root in a dual-root interval', function () {
        var f = function (x) { return x * x - 4.0; };
        var result = Bisect_1.BisectInterval.bisect(-8, 8, f);
        expect(result['root']).to.be.true;
    });
    it('brackets a root of a cubic polynomial', function () {
        // 4*x^3 -3*x^2 -25*x -6
        // roots at 3, -0.25, and -2
        var f = function (x) { return -6 + x * (-25 + x * (-3 + x * 4)); };
        var result = Bisect_1.BisectInterval.bisect(2, 5, f);
        expect(result['root']).to.be.true;
        result = Bisect_1.BisectInterval.bisect(-10, 0, f);
        expect(result['root']).to.be.true;
    });
});
describe('Fibonacci Sequence', function () {
    it('returns zero for invalid argument (NaN)', function () {
        var arg = NaN;
        var result = Fibonacci_1.fibonacci(arg);
        expect(result).to.equal(0);
    });
    it('returns zero for invalid (negative) argument', function () {
        var result = Fibonacci_1.fibonacci(-1);
        expect(result).to.equal(0);
    });
    it('returns NaN for n > 70', function () {
        var result = Fibonacci_1.fibonacci(71);
        expect(isNaN(result)).to.be.true;
    });
    it('correctly returns seed values for sequence', function () {
        var result = Fibonacci_1.fibonacci(0);
        expect(result).to.equal(0);
        result = Fibonacci_1.fibonacci(1);
        expect(result).to.equal(1);
    });
    it('correctly returns arbitrary sequence values', function () {
        var result = Fibonacci_1.fibonacci(2);
        expect(result).to.equal(1);
        result = Fibonacci_1.fibonacci(3);
        expect(result).to.equal(2);
        result = Fibonacci_1.fibonacci(4);
        expect(result).to.equal(3);
        result = Fibonacci_1.fibonacci(5);
        expect(result).to.equal(5);
        result = Fibonacci_1.fibonacci(6);
        expect(result).to.equal(8);
        result = Fibonacci_1.fibonacci(7);
        expect(result).to.equal(13);
        result = Fibonacci_1.fibonacci(8);
        expect(result).to.equal(21);
        result = Fibonacci_1.fibonacci(9);
        expect(result).to.equal(34);
        result = Fibonacci_1.fibonacci(64);
        expect(result).to.equal(10610209857723);
    });
});
describe('First non-repeating character', function () {
    it('correctly handles null input string', function () {
        var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('');
        expect(char).to.equal('');
    });
    it('correctly handles single-character string', function () {
        var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('a');
        expect(char).to.equal('a');
    });
    it('correctly handles first non-repeating at first position', function () {
        var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('abbccddeeffgghh');
        expect(char).to.equal('a');
    });
    it('correctly handles first non-repeating at last position', function () {
        var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aabbccddeeffggh');
        expect(char).to.equal('h');
    });
    it('correctly returns first first of multiple non-repeating chars', function () {
        var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aabb1ccddzeeff0ggh');
        expect(char).to.equal('1');
    });
    it('correctly handles no non-repeating chars', function () {
        var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aabb1ccd1dzeefzf0ggh0h');
        expect(char).to.equal('');
    });
    it('correctly handles arbitrary character sequence', function () {
        var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aldsfalhsdfasldhsdflveiewqoqzseurpeqvadspoiewyurpqowvh1792034273947239');
        expect(char).to.equal('z');
    });
});
describe("Pascal's Triangle", function () {
    var binomial = new BinomialCoef_1.TSMT$BinomialCoef();
    it('caches row 2 for a default instance', function () {
        expect(binomial.rowNumber).to.equal(2);
    });
    it('returns empty row for invalid numeric input', function () {
        var crapola = 'abc';
        expect(binomial.getRow(crapola).length).to.equal(0);
    });
    it('returns empty row for negative row value', function () {
        expect(binomial.getRow(-1).length).to.equal(0);
    });
    it('returns zero for binomial coefficient with invalid inputs #1', function () {
        var morecrapola = 'x';
        expect(binomial.coef(morecrapola, 1)).to.equal(0);
    });
    it('returns zero for binomial coefficient with invalid inputs #2', function () {
        var evenmorecrapola = 1 / 0;
        expect(binomial.coef(2, evenmorecrapola)).to.equal(0);
    });
    it('returns correct third row', function () {
        var row = binomial.getRow(2);
        expect(arrCompare(row, [1, 2, 1])).to.be.true;
    });
    // iterate forward a couple rows
    it('returns correct sixth row', function () {
        var row = binomial.getRow(5);
        expect(arrCompare(row, [1, 5, 10, 10, 5, 1])).to.be.true;
    });
    // forward, then reverse
    it('does correct forward/reverse recursion row #1', function () {
        var row = binomial.getRow(7);
        expect(arrCompare(row, [1, 7, 21, 35, 35, 21, 7, 1])).to.be.true;
        row = binomial.getRow(6);
        expect(arrCompare(row, [1, 6, 15, 20, 15, 6, 1])).to.be.true;
    });
    // one more time
    it('does correct forward/reverse recursion row #2', function () {
        var row = binomial.getRow(12);
        expect(arrCompare(row, [1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1])).to.be.true;
        row = binomial.getRow(10);
        expect(arrCompare(row, [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1])).to.be.true;
    });
    // binomial coefficients, same row - symmetry check
    it('does correct binomial coef. calc in same row #1', function () {
        var coef = binomial.coef(10, 2);
        expect(coef).to.equal(45);
        coef = binomial.coef(10, 5);
        expect(coef).to.equal(252);
        coef = binomial.coef(10, 8);
        expect(coef).to.equal(45);
    });
    // one more time
    it('does correct binomial coef. calc in same row #2', function () {
        var coef = binomial.coef(19, 5);
        expect(coef).to.equal(11628);
        coef = binomial.coef(19, 10);
        expect(coef).to.equal(92378);
        coef = binomial.coef(19, 14);
        expect(coef).to.equal(11628);
    });
});
describe('One-Line Functions', function () {
    it('correctly reverses characters in a string', function () {
        var result = OneLineFcns_1.reverseChars('TORTXOF EKIM AHPLA');
        expect(result).to.equal('ALPHA MIKE FOXTROT'); // which is what I will say if you ever ask me this in an interview
    });
    it('correctly extracts initials from a name', function () {
        var result = OneLineFcns_2.initials("james thomas armstrong");
        expect(result).to.equal("JTA");
    });
    it('correctly extracts initials from first name only', function () {
        var result = OneLineFcns_2.initials("james");
        expect(result).to.equal("J");
    });
    it('correctly extracts initials from a name and adds delimiter between initials', function () {
        var result = OneLineFcns_2.initials("james thomas armstrong", ".");
        expect(result).to.equal("J.T.A");
    });
    it('correctly pads a string to the left # 1', function () {
        var result = OneLineFcns_3.padLeft("this is a string", 2);
        expect(result).to.equal("  this is a string");
    });
    it('correctly pads a string to the left # 2', function () {
        var result = OneLineFcns_3.padLeft("this is a string", 0);
        expect(result).to.equal("this is a string");
    });
    it('correctly pads a string to the left # 3', function () {
        var result = OneLineFcns_3.padLeft("this is a string", -3);
        expect(result).to.equal("   this is a string");
    });
    it('returns NaN for min value of empty array', function () {
        var result = OneLineFcns_4.minValue([]);
        expect(isNaN(result)).to.be.true;
    });
    it('returns proper minimum value for an array of numbers', function () {
        var result = OneLineFcns_4.minValue([2.5, -1.7, 1.0, 3.6, 1.4, 0.25, 10.0]);
        expect(result).to.equal(-1.7);
    });
    it('returns NaN for max value of empty array', function () {
        var result = OneLineFcns_5.maxValue([]);
        expect(isNaN(result)).to.be.true;
    });
    it('returns proper maximum value for an array of numbers', function () {
        var result = OneLineFcns_5.maxValue([2.5, -1.7, 1.0, 3.6, 1.4, 0.25, 10.0]);
        expect(result).to.equal(10.0);
    });
    it('returns false for all greater than an empty array', function () {
        var result = OneLineFcns_6.allGreaterThan([], 0);
        expect(result).to.be.false;
    });
    it('returns true for all greater a supplied value', function () {
        var result = OneLineFcns_6.allGreaterThan([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], 0);
        expect(result).to.be.true;
    });
    it('returns false for all greater than a supplied value', function () {
        var result = OneLineFcns_6.allGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 6.0], 10);
        expect(result).to.be.false;
    });
    it('returns all array elements greater than a supplied value', function () {
        var result = OneLineFcns_7.getAllGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 60.0], 10);
        expect(result.length).to.equal(3);
        expect(result[0]).to.equal(20);
        expect(result[1]).to.equal(40);
        expect(result[2]).to.equal(60);
    });
    it('returns -1 for no index of array element greater than a supplied value', function () {
        var result = OneLineFcns_8.indexFirstGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 6.0], 100);
        expect(result).to.equal(-1);
    });
    it('returns correct index for first array element greater than a supplied value', function () {
        var result = OneLineFcns_8.indexFirstGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 60.0], 25);
        expect(result).to.equal(3);
    });
});
describe('Minimize worst-case complexity', function () {
    var scan = new ArrayScan_1.ArrayScan();
    var f = function (a) { return true; };
    it('returns -1 for an empty array', function () {
        var result = scan.scanArray([], f);
        expect(result).to.equal(-1);
    });
    it('returns 0 for an singleton array that satisfies criteria', function () {
        var f = function (a) { return a > 0; };
        var result = scan.scanArray([1.0], f);
        var steps = scan.steps;
        var numTrue = scan.numTrue;
        expect(result).to.equal(0);
        expect(steps).to.equal(1);
        expect(numTrue).to.equal(1);
    });
    it('returns -1 for an singleton array that does not satisfiy criteria', function () {
        var f = function (a) { return a == 0; };
        var result = scan.scanArray([1.0], f);
        expect(result).to.equal(-1);
    });
    it('returns correct results for two-element array', function () {
        var f = function (a) { return a > 0; };
        var result = scan.scanArray([0.0, 1.0], f);
        expect(result).to.equal(1);
        result = scan.scanArray([1.0, 2.0], f);
        expect(result).to.equal(0);
        result = scan.scanArray([-1.0, 0.0], f);
        expect(result).to.equal(-1);
    });
    it('returns correct results for three-element array', function () {
        var f = function (a) { return a > 1000; };
        var a = makeArray(3);
        var result = scan.scanArray(a, f);
        expect(result).to.equal(-1);
        expect(scan.k).to.equal(2);
        expect(scan.steps).to.equal(2);
    });
    it('returns correct results for four-element array', function () {
        var f = function (a) { return a > 1; };
        var a = makeArray(4);
        var result = scan.scanArray(a, f);
        expect(result).to.equal(2);
        expect(scan.k).to.equal(3);
        expect(scan.steps).to.equal(3);
    });
    it('returns correct results for five-element array', function () {
        var f = function (a) { return a > 3; };
        var a = makeArray(5);
        var result = scan.scanArray(a, f);
        expect(result).to.equal(4);
        expect(scan.k).to.equal(3);
        expect(scan.steps).to.equal(3);
        expect(scan.numTrue).to.equal(1);
    });
    it('returns correct results for ten-element array', function () {
        var f = function (a) { return a > 1; };
        var a = makeArray(10);
        var result = scan.scanArray(a, f);
        expect(result).to.equal(2);
        expect(scan.k).to.equal(4);
        expect(scan.steps).to.equal(4);
        expect(scan.numTrue).to.equal(2);
    });
    it('returns correct results for twenty-element array', function () {
        var f = function (a) { return a > 3; };
        var a = makeArray(20);
        var result = scan.scanArray(a, f);
        expect(result).to.equal(4);
        expect(scan.k).to.equal(6);
        expect(scan.steps).to.equal(6);
        expect(scan.numTrue).to.equal(2);
        f = function (a) { return a > 17; };
        result = scan.scanArray(a, f);
        expect(result).to.equal(18);
        expect(scan.steps).to.equal(6);
    });
    it('returns correct results for twenty five-element array', function () {
        var f = function (a) { return a > 23; };
        var a = makeArray(25);
        var result = scan.scanArray(a, f);
        expect(result).to.equal(24);
        expect(scan.k).to.equal(7);
        expect(scan.steps).to.equal(7);
        expect(scan.numTrue).to.equal(1);
    });
    it('returns correct results for one hundred-element array', function () {
        var f = function (a) { return a > 12; };
        var a = makeArray(100);
        var result = scan.scanArray(a, f);
        expect(result).to.equal(13);
        expect(scan.k).to.equal(14);
        expect(scan.steps).to.equal(14);
        expect(scan.numTrue).to.equal(1);
    });
});
describe('Scan Grid', function () {
    var scanner = new ScanGrid_1.ScanGrid();
    it('returns zero for an empty grid', function () {
        var value = scanner.scan([]);
        expect(value).to.equal(0);
    });
    it('returns correct value for a 1x1 grid', function () {
        var m = Matrix_1.Matrix.create(1, 1, 1.0);
        var value = scanner.scan(m);
        expect(value).to.equal(1.0);
    });
    it('returns correct value for 2x2 grid #1', function () {
        var m = Matrix_1.Matrix.create(2, 2, 0);
        m[0][1] = 2.0;
        m[1][0] = 1.0;
        var value = scanner.scan(m);
        expect(value).to.equal(2.0);
    });
    it('returns correct value for 2x2 grid #2', function () {
        var m = Matrix_1.Matrix.create(2, 2, 0);
        m[0][0] = 1.0;
        m[1][0] = 2.0;
        var value = scanner.scan(m);
        expect(value).to.equal(3.0);
    });
    it('returns correct value for 3x3 grid #1', function () {
        var m = Matrix_1.Matrix.create(3, 3, 0);
        // nonzeros by column
        m[0][0] = 1.0;
        m[1][0] = 2.0;
        m[2][1] = 3.0;
        m[1][2] = 1.0;
        var value = scanner.scan(m);
        expect(value).to.equal(6.0);
    });
    it('returns correct value for 3x3 grid #2', function () {
        var m = Matrix_1.Matrix.create(3, 3, 0);
        // nonzeros by column
        m[1][0] = 1.0;
        m[1][1] = 2.0;
        m[2][1] = 4.0;
        m[1][2] = 3.0;
        m[2][2] = 1.0;
        var value = scanner.scan(m);
        expect(value).to.equal(8.0);
    });
    it('returns correct value for 5x3 grid', function () {
        var m = Matrix_1.Matrix.create(5, 3, 0);
        // nonzeros by column
        m[1][0] = 1.0;
        m[3][0] = 2.0;
        m[0][1] = 1.0;
        m[2][1] = 1.0;
        m[4][1] = 1.0;
        m[2][2] = 3.0;
        var value = scanner.scan(m);
        expect(value).to.equal(5.0);
    });
    it('returns correct value for 4x5 grid', function () {
        var m = Matrix_1.Matrix.create(4, 5, 0);
        // nonzeros by column
        m[0][0] = 1.0;
        m[2][0] = 1.0;
        m[0][1] = 1.0;
        m[1][1] = 2.0;
        m[0][2] = 1.0;
        m[2][2] = 3.0;
        m[0][3] = 1.0;
        m[0][4] = 1.0;
        m[3][4] = 2.0;
        var value = scanner.scan(m);
        expect(value).to.equal(9.0);
    });
});
describe('Factorial Tests', function () {
    it('returns zero for negative argument', function () {
        var value = Factorial_1.factorial(-1);
        expect(value).to.equal(0);
    });
    it('returns 1 for n = 0', function () {
        var value = Factorial_1.factorial(0);
        expect(value).to.equal(1);
    });
    it('returns 1 for n = 1', function () {
        var value = Factorial_1.factorial(1);
        expect(value).to.equal(1);
    });
    it('returns 2 for n = 2', function () {
        var value = Factorial_1.factorial(2);
        expect(value).to.equal(2);
    });
    it('returns 6 for n = 3', function () {
        var value = Factorial_1.factorial(3);
        expect(value).to.equal(6);
    });
    it('returns 120 for n = 5', function () {
        var value = Factorial_1.factorial(5);
        expect(value).to.equal(120);
    });
    it('returns 3628800 for n = 10', function () {
        var value = Factorial_1.factorial(10);
        expect(value).to.equal(3628800);
    });
    it('returns 479001600 for n = 12', function () {
        var value = Factorial_1.factorial(12);
        expect(value).to.equal(479001600);
    });
});
describe('Repeating Decimal As Fraction', function () {
    it('returns null for empty input', function () {
        var frac = RepeatToFrac_1.repeatToFraction("");
        expect(frac).to.equal(null);
    });
    it('returns null for non-repeating sequence after decimal', function () {
        var frac = RepeatToFrac_1.repeatToFraction("1.4");
        expect(frac).to.equal(null);
    });
    it('returns correct result for 0.55555', function () {
        var frac = RepeatToFrac_1.repeatToFraction("0.55555");
        expect(frac.num).to.equal(5);
        expect(frac.den).to.equal(9);
    });
    it('returns correct result for 1.333333 unreduced', function () {
        var frac = RepeatToFrac_1.repeatToFraction("1.333333");
        expect(frac.num).to.equal(12);
        expect(frac.den).to.equal(9);
    });
    it('returns correct result for 1.66666 unreduced', function () {
        var frac = RepeatToFrac_1.repeatToFraction("1.66666");
        expect(frac.num).to.equal(15);
        expect(frac.den).to.equal(9);
    });
    it('returns correct result for 1.0424242 unreduced', function () {
        var frac = RepeatToFrac_1.repeatToFraction("1.0424242");
        expect(frac.num).to.equal(1032);
        expect(frac.den).to.equal(990);
    });
    it('returns correct result for 2.13234234 unreduced', function () {
        var frac = RepeatToFrac_1.repeatToFraction("2.13234234");
        expect(frac.num).to.equal(213021);
        expect(frac.den).to.equal(99900);
    });
    it('returns correct result for 1.333333 in reduced form', function () {
        var frac = RepeatToFrac_1.repeatToFraction("1.333333", true);
        expect(frac.num).to.equal(4);
        expect(frac.den).to.equal(3);
    });
    it('returns correct result for 1.0424242 in reduced form', function () {
        var frac = RepeatToFrac_1.repeatToFraction("1.0424242", true);
        expect(frac.num).to.equal(172);
        expect(frac.den).to.equal(165);
    });
});
describe('Anagram Tests', function () {
    it('returns false for empty /null inputs', function () {
        var compare = Anagram_1.isAnagram("", null);
        expect(compare).to.be.false;
        compare = Anagram_1.isAnagram(null, null);
        expect(compare).to.be.false;
        compare = Anagram_1.isAnagram("", "");
        expect(compare).to.be.false;
        compare = Anagram_1.isAnagram(null, "");
        expect(compare).to.be.false;
    });
    it('returns false for length mismatch', function () {
        var compare = Anagram_1.isAnagram("a", "ab");
        expect(compare).to.be.false;
        compare = Anagram_1.isAnagram("  ", "abcde");
        expect(compare).to.be.false;
    });
    it('returns false for right length, but case mismatch', function () {
        var compare = Anagram_1.isAnagram("sAw", "was");
        expect(compare).to.be.false;
        compare = Anagram_1.isAnagram("XYZ", "xyz");
        expect(compare).to.be.false;
    });
    it('returns true for single-character match', function () {
        var compare = Anagram_1.isAnagram("a", "a");
        expect(compare).to.be.true;
        compare = Anagram_1.isAnagram("X", "X");
        expect(compare).to.be.true;
    });
    it('returns true for double (unique) character match', function () {
        var compare = Anagram_1.isAnagram("ab", "ba");
        expect(compare).to.be.true;
    });
    it('returns true for triple (unique) character match', function () {
        var compare = Anagram_1.isAnagram("abc", "bac");
        expect(compare).to.be.true;
        compare = Anagram_1.isAnagram("XYZ", "ZYX");
        expect(compare).to.be.true;
    });
    it('returns true for triple (w/repeated) character match', function () {
        var compare = Anagram_1.isAnagram("abb", "bba");
        expect(compare).to.be.true;
        compare = Anagram_1.isAnagram("XYY", "YXY");
        expect(compare).to.be.true;
    });
    it('general test #1', function () {
        var compare = Anagram_1.isAnagram("match", "chatm");
        expect(compare).to.be.true;
        compare = Anagram_1.isAnagram("Alpha", "phAla");
        expect(compare).to.be.true;
    });
    it('general test #2', function () {
        var compare = Anagram_1.isAnagram("match", "chatz");
        expect(compare).to.be.false;
        compare = Anagram_1.isAnagram("Alpha", "phala");
        expect(compare).to.be.false;
    });
    it('general test #3', function () {
        var compare = Anagram_1.isAnagram("aabbbcccc", "abcabcbcc");
        expect(compare).to.be.true;
        compare = Anagram_1.isAnagram("EpsiloN", "NolispE");
        expect(compare).to.be.true;
    });
});
describe('Search Array of Object values', function () {
    var testArr = [
        { name: "Jim", age: 117, level: 0, glasses: "Maui Jim" },
        { name: "Kenny", age: 50, level: 190, glasses: "Ray Ban" },
        { name: "Mike", age: 51, level: 140, glasses: "Oakley" },
        { name: "Joel", age: 52, level: 150, glasses: "None" },
        { name: "Mary", age: 30, level: 121, glasses: "Maui Jim" },
        { name: "Jane", age: 18, level: 112, glasses: "Prada" }
    ];
    it('returns -1 for not setting data provider', function () {
        var arrSearch = new ArrObjSearch_1.ArrObjSearch();
        expect(arrSearch.search('1')).to.equal(-1);
        expect(arrSearch.size).to.equal(0);
    });
    it('returns -1 for value not found', function () {
        var arrSearch = new ArrObjSearch_1.ArrObjSearch();
        arrSearch.dataProvider = testArr;
        // there is no object with any value that equals 41
        expect(arrSearch.search(41)).to.equal(-1);
    });
    it('returns correct index for value found', function () {
        var arrSearch = new ArrObjSearch_1.ArrObjSearch();
        arrSearch.dataProvider = testArr;
        // first object containing the value 51 is at index 2
        expect(arrSearch.search(51)).to.equal(2);
    });
    it('returns correct index for value found #2', function () {
        var arrSearch = new ArrObjSearch_1.ArrObjSearch();
        arrSearch.dataProvider = testArr;
        // first object containing the value "Prada" is at index 5
        expect(arrSearch.search("Prada")).to.equal(5);
        // total number of Object values across the entire array
        expect(arrSearch.size).to.equal(24);
    });
});
describe('Counting Sort', function () {
    it('returns empty array for invalid input', function () {
        expect(CountingSort_1.countingSort(null).length).to.equal(0);
    });
    it('returns empty array for empty input', function () {
        expect(CountingSort_1.countingSort([]).length).to.equal(0);
    });
    it('returns singleton array for singleton input', function () {
        var result = CountingSort_1.countingSort([1]);
        expect(result.length).to.equal(1);
        expect(result[0]).to.equal(1);
    });
    it('2-element test #1', function () {
        var result = CountingSort_1.countingSort([1, 2]);
        expect(result.length).to.equal(2);
        expect(result[0]).to.equal(1);
        expect(result[1]).to.equal(2);
    });
    it('2-element test #2', function () {
        var result = CountingSort_1.countingSort([2, 1]);
        expect(result.length).to.equal(2);
        expect(result[0]).to.equal(1);
        expect(result[1]).to.equal(2);
    });
    it('2-element test #3 (higher upper bound)', function () {
        var result = CountingSort_1.countingSort([2, 1], 0, 5);
        expect(result.length).to.equal(2);
        expect(result[0]).to.equal(1);
        expect(result[1]).to.equal(2);
    });
    it('multi-element test #1', function () {
        var result = CountingSort_1.countingSort([2, 1, 0, 5, 10, 8, 7]);
        expect(result.length).to.equal(7);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(1);
        expect(result[2]).to.equal(2);
        expect(result[3]).to.equal(5);
        expect(result[4]).to.equal(7);
        expect(result[5]).to.equal(8);
        expect(result[6]).to.equal(10);
    });
    it('multi-element test #2', function () {
        var result = CountingSort_1.countingSort([2, 1, 0, 5, 10, 8, 7], 0, 10);
        expect(result.length).to.equal(7);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(1);
        expect(result[2]).to.equal(2);
        expect(result[3]).to.equal(5);
        expect(result[4]).to.equal(7);
        expect(result[5]).to.equal(8);
        expect(result[6]).to.equal(10);
    });
    it('multi-element test #3', function () {
        var result = CountingSort_1.countingSort([2, 1, 0, 5, 0, 10, 8, 1, 7, 0, 18]);
        expect(result.length).to.equal(11);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(0);
        expect(result[2]).to.equal(0);
        expect(result[3]).to.equal(1);
        expect(result[4]).to.equal(1);
        expect(result[5]).to.equal(2);
        expect(result[6]).to.equal(5);
        expect(result[7]).to.equal(7);
        expect(result[8]).to.equal(8);
        expect(result[9]).to.equal(10);
        expect(result[10]).to.equal(18);
    });
    it('multi-element test #4', function () {
        var result = CountingSort_1.countingSort([2, 1, 0, 5, 0, 10, 8, 1, 7, 0, 18], 0, 50);
        expect(result.length).to.equal(11);
        expect(result[0]).to.equal(0);
        expect(result[1]).to.equal(0);
        expect(result[2]).to.equal(0);
        expect(result[3]).to.equal(1);
        expect(result[4]).to.equal(1);
        expect(result[5]).to.equal(2);
        expect(result[6]).to.equal(5);
        expect(result[7]).to.equal(7);
        expect(result[8]).to.equal(8);
        expect(result[9]).to.equal(10);
        expect(result[10]).to.equal(18);
    });
});
describe('Hierarchical Search - extract properties', function () {
    it('returns empty result for empty input', function () {
        expect(extractProps_1.extractProps([], '').length).to.equal(0);
    });
    it('returns empty array for empty property', function () {
        expect(extractProps_1.extractProps([{}], '').length).to.equal(0);
    });
    it('extract properties works on single-level hierarchy', function () {
        var TestArr = [
            {
                id: '1',
                value: 2,
                title: 'Title 1'
            },
            {
                value: 3,
                title: 'Title 2'
            },
            {
                id: '2',
                value: 4,
                title: 'Title 3',
                icon: ''
            },
            {
                id: '3',
                value: 5,
                title: 'Title 4'
            },
            {
                value: 2,
                title: 'Title 5'
            },
            {
                value: 3,
                title: 'Title 6'
            },
            {
                id: '4',
                value: 20,
                title: 'Title 7'
            },
            {
                value: 12,
                title: 'Title 8'
            }
        ];
        expect(extractProps_1.extractProps(TestArr, 'id').length).to.equal(4);
    });
    it("extract properties method works on two-level hierarchy", function () {
        var TestMenu = [
            {
                title: 'Navigation',
                active: true,
                groupTitle: true,
                children: '',
                routing: '',
            },
            {
                title: 'Dashboard',
                active: false,
                groupTitle: false,
                children: '',
                routing: '/dashboard',
            },
            {
                title: 'Channel 1',
                active: false,
                groupTitle: false,
                children: [
                    {
                        title: 'Group 1',
                        routing: '/group-1/name-1'
                    },
                    {
                        title: 'Group 2',
                        routing: '/group-2/name-2'
                    }
                ],
                routing: '/group/1',
            },
            {
                title: 'Channel 2',
                active: false,
                groupTitle: false,
                children: [
                    {
                        title: 'Group 3',
                        routing: '/group-2/job-name-3'
                    },
                    {
                        title: 'Group 2',
                        routing: '/group-2/job-name-2'
                    }
                ],
                routing: '/channel/2',
            },
        ];
        var result = extractProps_1.extractProps(TestMenu, 'title');
        expect(result.length).to.equal(8);
        expect(result[0]).to.equal('Navigation');
        expect(result[1]).to.equal('Dashboard');
        expect(result[2]).to.equal('Channel 1');
        expect(result[3]).to.equal('Group 1');
        expect(result[4]).to.equal('Group 2');
        expect(result[5]).to.equal('Channel 2');
        expect(result[6]).to.equal('Group 3');
        expect(result[7]).to.equal('Group 2');
    });
});
describe('Invert Binary Tree', function () {
    it('returns null for null input', function () {
        expect(invert_1.invert(null)).to.be.null;
    });
    it('returns root for singleton input', function () {
        var root = new BTreeNode_1.Node(1.0);
        root.id = 'root';
        var r = invert_1.invert(root);
        expect(r.id).to.equal('root');
        expect(r.left).to.be.null;
        expect(r.right).to.be.null;
    });
    it('properly inverts single child #1', function () {
        var two = new BTreeNode_1.Node(2.0);
        var one = new BTreeNode_1.Node(1.0);
        two.id = '2';
        one.id = '1';
        two.left = one;
        var r = invert_1.invert(two);
        expect(r.id).to.equal('2');
        expect(r.right.id).to.equal('1');
        expect(r.left).to.be.null;
    });
    it('properly inverts single child #2', function () {
        var two = new BTreeNode_1.Node(2.0);
        var three = new BTreeNode_1.Node(3.0);
        two.id = '2';
        three.id = '3';
        two.right = three;
        var r = invert_1.invert(two);
        expect(r.id).to.equal('2');
        expect(r.left.id).to.equal('3');
        expect(r.right).to.be.null;
    });
    it('properly inverts a full tree with one level of children', function () {
        var two = new BTreeNode_1.Node(2.0);
        var three = new BTreeNode_1.Node(3.0);
        var one = new BTreeNode_1.Node(1.0);
        two.id = '2';
        three.id = '3';
        one.id = '1';
        two.left = one;
        two.right = three;
        var r = invert_1.invert(two);
        expect(r.id).to.equal('2');
        expect(r.left.id).to.equal('3');
        expect(r.right.id).to.equal('1');
    });
    it('general invert test #1', function () {
        var five = new BTreeNode_1.Node(5.0);
        var three = new BTreeNode_1.Node(3.0);
        var six = new BTreeNode_1.Node(6.0);
        var one = new BTreeNode_1.Node(1.0);
        var four = new BTreeNode_1.Node(4.0);
        var seven = new BTreeNode_1.Node(7.0);
        five.id = '5';
        three.id = '3';
        six.id = '6';
        one.id = '1';
        four.id = '4';
        seven.id = '7';
        five.left = three;
        five.right = six;
        three.left = one;
        six.left = four;
        six.right = seven;
        var r = invert_1.invert(five);
        expect(r.id).to.equal('5');
        expect(r.left.id).to.equal('6');
        expect(r.right.id).to.equal('3');
        expect(three.left).to.be.null;
        expect(three.right.id).to.equal('1');
        expect(six.left.id).to.equal('7');
        expect(six.right.id).to.equal('4');
    });
    it('general invert test #2', function () {
        var ten = new BTreeNode_1.Node(10.0);
        var eight = new BTreeNode_1.Node(8.0);
        var twelve = new BTreeNode_1.Node(12.0);
        var four = new BTreeNode_1.Node(4.0);
        var nine = new BTreeNode_1.Node(9.0);
        var seven = new BTreeNode_1.Node(7.0);
        var fifteen = new BTreeNode_1.Node(15.0);
        var thirteen = new BTreeNode_1.Node(13.0);
        var sixteen = new BTreeNode_1.Node(16.0);
        ten.id = '10';
        eight.id = '8';
        twelve.id = '12';
        four.id = '4';
        nine.id = '9';
        seven.id = '7';
        fifteen.id = '15';
        thirteen.id = '13';
        sixteen.id = '16';
        ten.left = seven;
        ten.right = twelve;
        seven.left = four;
        seven.right = nine;
        nine.left = eight;
        twelve.right = fifteen;
        fifteen.left = thirteen;
        fifteen.right = sixteen;
        var r = invert_1.invert(ten);
        expect(r.id).to.equal('10');
        expect(r.left.id).to.equal('12');
        expect(r.right.id).to.equal('7');
        expect(seven.left.id).to.equal('9');
        expect(seven.right.id).to.equal('4');
        expect(nine.left).to.be.null;
        expect(nine.right.id).to.equal('8');
        expect(twelve.left.id).to.equal('15');
        expect(twelve.right).to.be.null;
        expect(fifteen.left.id).to.equal('16');
        expect(fifteen.right.id).to.equal('13');
    });
});
describe('Reverse Linked List', function () {
    it('returns null for null input', function () {
        expect(ReversLList_1.reverseLList(null)).to.be.null;
    });
    it('works correctly for singleton node', function () {
        var head = {
            data: 1,
            next: null
        };
        var list = ReversLList_1.reverseLList(head);
        expect(list.data).to.equal(1);
        expect(list.next).to.be.null;
    });
    it('works correctly for two nodes', function () {
        var head = {
            data: 1,
            next: null
        };
        var node = {
            data: 2,
            next: null
        };
        head.next = node;
        var list = ReversLList_1.reverseLList(head);
        expect(list.data).to.equal(2);
        expect(list.next.data).to.equal(1);
        expect(list.next.next).to.be.null;
    });
    it('works correctly for three nodes', function () {
        var head = {
            data: 1,
            next: null
        };
        var node = {
            data: 2,
            next: null
        };
        head.next = node;
        var node1 = {
            data: 3,
            next: null
        };
        node.next = node1;
        var list = ReversLList_1.reverseLList(head);
        expect(list.data).to.equal(3);
        expect(list.next.data).to.equal(2);
        expect(list.next.next.data).to.equal(1);
        expect(list.next.next.next).to.be.null;
    });
    it('works correctly for five nodes', function () {
        var head = {
            data: 1,
            next: null
        };
        var node = {
            data: 2,
            next: null
        };
        head.next = node;
        var node1 = {
            data: 3,
            next: null
        };
        node.next = node1;
        var node2 = {
            data: 4,
            next: null
        };
        node1.next = node2;
        var node3 = {
            data: 5,
            next: null
        };
        node2.next = node3;
        var list = ReversLList_1.reverseLList(head);
        expect(list.data).to.equal(5);
        expect(list.next.data).to.equal(4);
        expect(list.next.next.data).to.equal(3);
        expect(list.next.next.next.data).to.equal(2);
        expect(list.next.next.next.next.data).to.equal(1);
        expect(list.next.next.next.next.next).to.be.null;
    });
});
describe('LCM/GCD', function () {
    it('lcm returns zero for invalid inputs', function () {
        var m = Euclid_1.lcm(NaN, 0);
        expect(m).to.equal(0);
    });
    it('gcd returns zero for invalid inputs', function () {
        var g = Euclid_2.gcd(0, NaN);
        expect(g).to.equal(0);
    });
    it('lcm of 12 and 80 is 240', function () {
        var m = Euclid_1.lcm(12, 80);
        expect(m).to.equal(240);
    });
    it('lcm of 4 and 5 is 20', function () {
        var m = Euclid_1.lcm(4, 5);
        expect(m).to.equal(20);
    });
    it('lcm of 4 and 10 is 20', function () {
        var m = Euclid_1.lcm(4, 10);
        expect(m).to.equal(20);
    });
    it('lcm of 65 and 10 is 130', function () {
        var m = Euclid_1.lcm(65, 10);
        expect(m).to.equal(130);
    });
    it('lcm of -17 and 8 is 136', function () {
        var m = Euclid_1.lcm(65, 10);
        expect(m).to.equal(130);
    });
});
describe('Extended Euclid', function () {
    it('returns empty object for invalid inputs', function () {
        var result = Euclid_3.extEuclid(NaN, 0);
        var keys = Object.keys(result);
        expect(keys.length).to.equal(0);
    });
    it('returns (1, 0) for input of (10, 0)', function () {
        var result = Euclid_3.extEuclid(10, 0);
        expect(+result['gcd']).to.equal(10); // not really defined, but this makes the formula work
        expect(+result['x']).to.equal(1);
        expect(+result['y']).to.equal(0);
    });
    it('returns (0, 1) for input of (0, 10)', function () {
        var result = Euclid_3.extEuclid(0, 10);
        expect(+result['gcd']).to.equal(10); // not really defined, but this makes the formula work
        expect(+result['x']).to.equal(0);
        expect(+result['y']).to.equal(1);
    });
    it('returns (-9, 47) for input of (240, 46)', function () {
        var result = Euclid_3.extEuclid(240, 46);
        expect(+result['gcd']).to.equal(2);
        expect(+result['x']).to.equal(-9);
        expect(+result['y']).to.equal(47);
    });
    it('returns (3, -8) for input of (102, 38)', function () {
        var result = Euclid_3.extEuclid(102, 38);
        expect(+result['gcd']).to.equal(2);
        expect(+result['x']).to.equal(3);
        expect(+result['y']).to.equal(-8);
    });
    it('returns (8, -17) for input of (1914, 899)', function () {
        var result = Euclid_3.extEuclid(1914, 899);
        expect(+result['gcd']).to.equal(29);
        expect(+result['x']).to.equal(8);
        expect(+result['y']).to.equal(-17);
    });
});
describe('Fibonacci Moon Jump', function () {
    it('returns zero for NaN input', function () {
        var jumps = ComputeJumps_1.computeJump(NaN);
        expect(jumps).to.equal(0);
    });
    it('returns zero for negative input', function () {
        var jumps = ComputeJumps_1.computeJump(-10000);
        expect(jumps).to.equal(0);
    });
    it('works for an exact fibonacci distance', function () {
        var jumps = ComputeJumps_1.computeJump(144);
        expect(jumps).to.equal(12);
    });
    it('returns correct number for approx. moon distance', function () {
        var jumps = ComputeJumps_1.computeJump(238356);
        expect(jumps).to.equal(27);
    });
});
describe('Balanced open/close chars', function () {
    it('returns false for null input', function () {
        var result = balancedparens_1.isBalanced(null);
        expect(result).to.be.false;
    });
    it('returns true for empty string', function () {
        var result = balancedparens_1.isBalanced('');
        expect(result).to.be.true;
    });
    it('returns true for string with no open/close chars', function () {
        var result = balancedparens_1.isBalanced('abcde');
        expect(result).to.be.true;
    });
    it('returns false for one open char only', function () {
        var result = balancedparens_1.isBalanced('abc(de');
        expect(result).to.be.false;
    });
    it('returns false for one close char only', function () {
        var result = balancedparens_1.isBalanced('abcde)');
        expect(result).to.be.false;
    });
    it('returns false for reversed open/close', function () {
        var result = balancedparens_1.isBalanced(')abcde(');
        expect(result).to.be.false;
    });
    it('returns false for imbalance #1', function () {
        var result = balancedparens_1.isBalanced('<abcd<e>');
        expect(result).to.be.false;
    });
    it('returns false for imbalance #2', function () {
        var result = balancedparens_1.isBalanced('{abc(de}');
        expect(result).to.be.false;
    });
    it('returns false for imbalance #3', function () {
        var result = balancedparens_1.isBalanced('{a[[bc]de}');
        expect(result).to.be.false;
    });
    it('returns false for imbalance #4', function () {
        var result = balancedparens_1.isBalanced('{a[bc]]de}');
        expect(result).to.be.false;
    });
    it('balance test #1', function () {
        var result = balancedparens_1.isBalanced('{}');
        expect(result).to.be.true;
    });
    it('balance test #2', function () {
        var result = balancedparens_1.isBalanced('(ab) * c');
        expect(result).to.be.true;
    });
    it('balance test #3', function () {
        var result = balancedparens_1.isBalanced('{(ab) * c}');
        expect(result).to.be.true;
    });
    it('balance test #4', function () {
        var result = balancedparens_1.isBalanced('f(a,b) = 2*(c+d)');
        expect(result).to.be.true;
    });
});
//# sourceMappingURL=ptests.specs.js.map