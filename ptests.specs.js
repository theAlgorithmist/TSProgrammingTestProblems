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
System.register(['./src/mult321/Multiply321', './src/exchange/ExchangeInt', './src/macheps/MachEps', './src/fizzbuzz/FizzBuzz', './src/interp/Interp', './src/randomint/RandomIntInRange', './src/uberdriver/ComputeTrips', './src/daytrader/MaxProfit', './src/twomin/TwoMinMax', './src/twodigits/TwoDigits', './src/llist1/ExtendedLinkedList', './src/bisection/Bisect', './src/fibonacci/Fibonacci', './src/firstnonrepeating/FirstNonRepeatingChar', './src/shared/BinomialCoef', './src/oneline/OneLineFcns', './src/worstcase/ArrayScan', './src/shared/Matrix', './src/grid/ScanGrid', './src/factorial/Factorial', './src/repeatingdecimal/RepeatToFrac'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Multiply321_1, ExchangeInt_1, MachEps_1, FizzBuzz_1, Interp_1, RandomIntInRange_1, ComputeTrips_1, MaxProfit_1, TwoMinMax_1, TwoDigits_1, ExtendedLinkedList_1, Bisect_1, Fibonacci_1, FirstNonRepeatingChar_1, BinomialCoef_1, OneLineFcns_1, OneLineFcns_2, OneLineFcns_3, OneLineFcns_4, OneLineFcns_5, OneLineFcns_6, OneLineFcns_7, OneLineFcns_8, ArrayScan_1, Matrix_1, ScanGrid_1, Factorial_1, RepeatToFrac_1;
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
    return {
        setters:[
            function (Multiply321_1_1) {
                Multiply321_1 = Multiply321_1_1;
            },
            function (ExchangeInt_1_1) {
                ExchangeInt_1 = ExchangeInt_1_1;
            },
            function (MachEps_1_1) {
                MachEps_1 = MachEps_1_1;
            },
            function (FizzBuzz_1_1) {
                FizzBuzz_1 = FizzBuzz_1_1;
            },
            function (Interp_1_1) {
                Interp_1 = Interp_1_1;
            },
            function (RandomIntInRange_1_1) {
                RandomIntInRange_1 = RandomIntInRange_1_1;
            },
            function (ComputeTrips_1_1) {
                ComputeTrips_1 = ComputeTrips_1_1;
            },
            function (MaxProfit_1_1) {
                MaxProfit_1 = MaxProfit_1_1;
            },
            function (TwoMinMax_1_1) {
                TwoMinMax_1 = TwoMinMax_1_1;
            },
            function (TwoDigits_1_1) {
                TwoDigits_1 = TwoDigits_1_1;
            },
            function (ExtendedLinkedList_1_1) {
                ExtendedLinkedList_1 = ExtendedLinkedList_1_1;
            },
            function (Bisect_1_1) {
                Bisect_1 = Bisect_1_1;
            },
            function (Fibonacci_1_1) {
                Fibonacci_1 = Fibonacci_1_1;
            },
            function (FirstNonRepeatingChar_1_1) {
                FirstNonRepeatingChar_1 = FirstNonRepeatingChar_1_1;
            },
            function (BinomialCoef_1_1) {
                BinomialCoef_1 = BinomialCoef_1_1;
            },
            function (OneLineFcns_1_1) {
                OneLineFcns_1 = OneLineFcns_1_1;
                OneLineFcns_2 = OneLineFcns_1_1;
                OneLineFcns_3 = OneLineFcns_1_1;
                OneLineFcns_4 = OneLineFcns_1_1;
                OneLineFcns_5 = OneLineFcns_1_1;
                OneLineFcns_6 = OneLineFcns_1_1;
                OneLineFcns_7 = OneLineFcns_1_1;
                OneLineFcns_8 = OneLineFcns_1_1;
            },
            function (ArrayScan_1_1) {
                ArrayScan_1 = ArrayScan_1_1;
            },
            function (Matrix_1_1) {
                Matrix_1 = Matrix_1_1;
            },
            function (ScanGrid_1_1) {
                ScanGrid_1 = ScanGrid_1_1;
            },
            function (Factorial_1_1) {
                Factorial_1 = Factorial_1_1;
            },
            function (RepeatToFrac_1_1) {
                RepeatToFrac_1 = RepeatToFrac_1_1;
            }],
        execute: function() {
            // Test Suites
            describe('Multiply by 321', function () {
                var result;
                var obj = { blah: 10 }; // the typing is to get past what would otherwise be caught at compile time
                // edge cases
                it('returns zero when multiplied by zero', function () {
                    result = Multiply321_1.multiply321(0);
                    expect(result).toBe(0);
                });
                it('returns zero when multiplied by zero as a string', function () {
                    result = Multiply321_1.multiply321("0");
                    expect(result).toBe(0);
                });
                it('returns zero when multiplied by string that can still be coerced to zero', function () {
                    result = Multiply321_1.multiply321("0a");
                    expect(result).toBe(0);
                });
                it('returns NaN when multiplied by string that can not be coerced to number', function () {
                    result = Multiply321_1.multiply321("abc0123");
                    expect(isNaN(result)).toBe(true);
                });
                it('returns NaN when multiplied by an Object', function () {
                    result = Multiply321_1.multiply321(obj);
                    expect(isNaN(result)).toBe(true);
                });
                it('returns 321 when multiplied by one', function () {
                    result = Multiply321_1.multiply321(1);
                    expect(result).toBe(321);
                });
                it('returns -321 when multiplied by minus one', function () {
                    result = Multiply321_1.multiply321(-1);
                    expect(result).toBe(-321);
                });
                it('returns -642 when multiplied by -1.9', function () {
                    result = Multiply321_1.multiply321(-1.9);
                    expect(result).toBe(-642);
                });
                // now for the main event ...
                it('rounds inputs to integer before multiply', function () {
                    result = Multiply321_1.multiply321(1.27);
                    expect(result).toBe(321);
                });
                it('returns 642 when multiplied by 2.0', function () {
                    result = Multiply321_1.multiply321(2.0);
                    expect(result).toBe(642);
                });
                it('returns 3210 when multiplied by 10', function () {
                    result = Multiply321_1.multiply321(10);
                    expect(result).toBe(3210);
                });
                it('returns -3210 when multiplied by -10', function () {
                    result = Multiply321_1.multiply321(-10);
                    expect(result).toBe(-3210);
                });
                it('returns 28957410 when multiplied by Beverly Hills 90210', function () {
                    result = Multiply321_1.multiply321(90210);
                    expect(result).toBe(28957410);
                });
            });
            describe('Exchange Integers', function () {
                var result;
                it('properly exchanges 6 and 5', function () {
                    result = ExchangeInt_1.exchangeInt(6, 5);
                    expect(+result['a']).toBe(5);
                    expect(+result['b']).toBe(6);
                });
                it('properly exchanges 1 and -1', function () {
                    result = ExchangeInt_1.exchangeInt(1, -1);
                    expect(+result['a']).toBe(-1);
                    expect(+result['b']).toBe(1);
                });
                it('properly exchanges 4 and 0', function () {
                    result = ExchangeInt_1.exchangeInt(4, 0);
                    expect(+result['a']).toBe(0);
                    expect(+result['b']).toBe(4);
                });
                it('properly exchanges 0 and 5', function () {
                    result = ExchangeInt_1.exchangeInt(0, 5);
                    expect(+result['a']).toBe(5);
                    expect(+result['b']).toBe(0);
                });
                it('properly exchanges -10 and -11', function () {
                    result = ExchangeInt_1.exchangeInt(-10, -11);
                    expect(+result['a']).toBe(-11);
                    expect(+result['b']).toBe(-10);
                });
            });
            describe('Machine Epsilon', function () {
                var epsilon = MachEps_1.machEps();
                var actual = Math.pow(2.0, -52);
                // this is necessary, but not sufficient (why is a good interview question in and of itself)
                it('is different from 1.0 when added to 1.0', function () {
                    expect(1.0 + epsilon != 1.0).toBe(true);
                });
                it('epsilon/2 + 1.0 equals 1.0', function () {
                    expect(1.0 + 0.5 * epsilon == 1.0).toBe(true);
                });
                it('should be 2^-52', function () {
                    expect(epsilon).toEqual(actual);
                });
            });
            describe('Fizz Buzz', function () {
                var result = FizzBuzz_1.fizzBuzz();
                // if you want to look at the entire array
                //console.log( "FizzBuzz result: ", result );
                it('has array length of 100', function () {
                    expect(result.length).toEqual(100);
                });
                // run through primes not 3 and 5
                it('assigns index values correctly', function () {
                    expect(result[0]).toEqual("1");
                    expect(result[1]).toEqual("2");
                    expect(result[3]).toEqual("4");
                    expect(result[6]).toEqual("7");
                    expect(result[10]).toEqual("11");
                    expect(result[12]).toEqual("13");
                    expect(result[16]).toEqual("17");
                    expect(result[22]).toEqual("23");
                    expect(result[30]).toEqual("31");
                    expect(result[40]).toEqual("41");
                    expect(result[42]).toEqual("43");
                    expect(result[46]).toEqual("47");
                    expect(result[46]).toEqual("47");
                    expect(result[52]).toEqual("53");
                    expect(result[58]).toEqual("59");
                    expect(result[60]).toEqual("61");
                    expect(result[66]).toEqual("67");
                    expect(result[70]).toEqual("71");
                    expect(result[72]).toEqual("73");
                    expect(result[78]).toEqual("79");
                    expect(result[82]).toEqual("83");
                    expect(result[88]).toEqual("89");
                    expect(result[96]).toEqual("97");
                });
                // a few of the fizzes
                it('assigns indicies evenly divisible by three correctly', function () {
                    expect(result[2].toLowerCase()).toEqual("fizz");
                    expect(result[5].toLowerCase()).toEqual("fizz");
                    expect(result[8].toLowerCase()).toEqual("fizz");
                    expect(result[26].toLowerCase()).toEqual("fizz");
                    expect(result[32].toLowerCase()).toEqual("fizz");
                    expect(result[62].toLowerCase()).toEqual("fizz");
                    expect(result[98].toLowerCase()).toEqual("fizz");
                });
                // a few of the buzzes
                it('assigns indicies evenly divisible by five correctly', function () {
                    expect(result[4].toLowerCase()).toEqual("buzz");
                    expect(result[19].toLowerCase()).toEqual("buzz");
                    expect(result[34].toLowerCase()).toEqual("buzz");
                    expect(result[39].toLowerCase()).toEqual("buzz");
                    expect(result[49].toLowerCase()).toEqual("buzz");
                    expect(result[64].toLowerCase()).toEqual("buzz");
                    expect(result[94].toLowerCase()).toEqual("buzz");
                });
                // the fizzbuzzes
                it('assigns indicies evenly divisible by three & five correctly', function () {
                    expect(result[14].toLowerCase()).toEqual("fizzbuzz");
                    expect(result[29].toLowerCase()).toEqual("fizzbuzz");
                    expect(result[44].toLowerCase()).toEqual("fizzbuzz");
                    expect(result[74].toLowerCase()).toEqual("fizzbuzz");
                    expect(result[89].toLowerCase()).toEqual("fizzbuzz");
                });
            });
            describe('Linear Interpolation', function () {
                var interp = new Interp_1.LinearInterpolation();
                it('is returns zero after construction and 0 x-value', function () {
                    expect(interp.interpolate(0)).toBe(0);
                });
                it('works for any x-interval and default y-values', function () {
                    interp.x1 = -1;
                    interp.x2 = 1;
                    expect(interp.interpolate(0)).toBe(0);
                    interp.x1 = -2;
                    interp.x2 = 2;
                    expect(interp.interpolate(0)).toBe(0);
                });
                it('works for coincident points', function () {
                    interp.x1 = -1;
                    interp.x2 = 1;
                    interp.y1 = -1;
                    interp.y2 = 1;
                    expect(interp.interpolate(-1)).toBe(-1);
                    expect(interp.interpolate(1)).toBe(1);
                });
                it('works for reversed interval', function () {
                    interp.x1 = 2;
                    interp.x2 = -2;
                    interp.y1 = -7;
                    interp.y2 = 7;
                    expect(interp.interpolate(-2)).toBe(-7);
                    expect(interp.interpolate(2)).toBe(7);
                });
                it('correctly returns endpoints', function () {
                    interp.x1 = -3;
                    interp.x2 = 2;
                    interp.y1 = 4;
                    interp.y2 = 6;
                    expect(interp.interpolate(-3)).toBeCloseTo(4, 7);
                    expect(interp.interpolate(2)).toBeCloseTo(6, 7);
                });
                it('works with vertical line', function () {
                    interp.x1 = 3;
                    interp.x2 = 3;
                    interp.y1 = 4;
                    interp.y2 = 100;
                    expect(interp.interpolate(3)).toBeCloseTo(4, 7);
                });
                it('correctly interpolates', function () {
                    interp.x1 = 1;
                    interp.x2 = 2;
                    interp.y1 = 3;
                    interp.y2 = 4;
                    expect(interp.interpolate(1.5)).toBeCloseTo(3.5, 7);
                });
                it('allows extrapolation', function () {
                    interp.x1 = 1;
                    interp.x2 = 2;
                    interp.y1 = 3;
                    interp.y2 = 4;
                    expect(interp.interpolate(3)).toBeCloseTo(5, 7);
                    expect(interp.interpolate(0)).toBeCloseTo(2, 7);
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
                    expect(ratio2 < ratio1).toBe(true);
                });
            });
            describe('Uber Driver', function () {
                var __getRating = function (trips) {
                    return trips.reduce(function (total, x) { return total + x; }) / +trips.length;
                };
                var junk = { a: -1 };
                it('returns 0 for invalid inputs', function () {
                    expect(ComputeTrips_1.tripCount(4.4, junk)).toBe(0);
                    expect(ComputeTrips_1.tripCount(1 / 0, 4)).toBe(0);
                    expect(ComputeTrips_1.tripCount(4.5, 6)).toBe(0);
                });
                it('returns ininity for an existing 5-star rating', function () {
                    expect(ComputeTrips_1.tripCount(5.0, 4)).toBe(Infinity);
                });
                // trip sequence where we know the answer in advance
                it('returns correct number of trips #1', function () {
                    var r = __getRating([4, 5, 3, 5, 5]);
                    var n = ComputeTrips_1.tripCount(r, 3); // should be 3
                    expect(n).toBe(3);
                    // new ranking after 3 consecutive 5-star trips following the downrate
                    var rstar = __getRating([4, 5, 3, 5, 5, 3, 5, 5, 5]);
                    expect(rstar >= r).toBe(true);
                });
                // some negative testing ...
                it('uses abs. value for negative inputs', function () {
                    var r = __getRating([4, 5, 3, 5, 5]);
                    var n = ComputeTrips_1.tripCount(-r, 3); // should be 3
                    expect(n).toBe(3);
                    n = ComputeTrips_1.tripCount(r, -3);
                    expect(n).toBe(3);
                });
                it('rounds floating-point number for current ranking', function () {
                    var r = __getRating([4, 5, 3, 5, 5]);
                    var n = ComputeTrips_1.tripCount(r, 3.257);
                    expect(n).toBe(3);
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
                    expect(n).toBe(2);
                });
            });
            describe('Day Trader', function () {
                var profit = MaxProfit_1.maxProfit([]);
                it('returns zero for empty price list', function () {
                    expect(profit).toEqual(0);
                });
                it('returns zero for singleton price list', function () {
                    profit = MaxProfit_1.maxProfit([10]);
                    expect(profit).toEqual(0);
                });
                // test cases where it is easy to determine the correct result by direct examination
                it('returns correct max profit #1', function () {
                    profit = MaxProfit_1.maxProfit([1, 2]);
                    expect(profit).toEqual(1);
                });
                it('returns correct max profit #2', function () {
                    profit = MaxProfit_1.maxProfit([3, 3]);
                    expect(profit).toEqual(0);
                });
                it('returns correct max profit #3', function () {
                    profit = MaxProfit_1.maxProfit([10, 12, 5, 8, 10, 7, 6, 8, 11, 7]);
                    expect(profit).toEqual(6);
                });
                // put absolute high/low at opposite ends of the array
                it('returns correct max profit #4', function () {
                    profit = MaxProfit_1.maxProfit([5, 11, 5, 8, 10, 7, 6, 8, 10, 12]);
                    expect(profit).toEqual(7);
                });
                it('returns correct max profit #5', function () {
                    profit = MaxProfit_1.maxProfit([12, 11, 5, 8, 10, 7, 6, 8, 10, 5]);
                    expect(profit).toEqual(5);
                });
                it('returns correct max profit #6', function () {
                    profit = MaxProfit_1.maxProfit([12, 11, 5, 8, 10, 7, 6, 4, 8, 7, 10, 5, 5, 6, 4, 4]);
                    expect(profit).toEqual(6);
                });
                // and, finally ... the case where prices decline monotonically throughout the session - should return minimum loss (negative number)
                it('returns correct max profit #7', function () {
                    profit = MaxProfit_1.maxProfit([100, 98, 96, 94, 93, 90, 87, 85, 80, 75, 70, 60, 50, 45, 40, 37, 35, 30, 26]);
                    expect(profit).toEqual(-1);
                });
            });
            describe('Two Mins and Max', function () {
                var result = TwoMinMax_1.twoMinMax([]);
                it('returns correct results for empty array', function () {
                    expect(+result['min1']).toBe(0);
                    expect(+result['min2']).toBe(0);
                    expect(+result['max']).toBe(0);
                });
                it('returns correct results for singleton array', function () {
                    result = TwoMinMax_1.twoMinMax([2]);
                    expect(+result['min1']).toBe(2);
                    expect(+result['min2']).toBe(2);
                    expect(+result['max']).toBe(2);
                });
                // no gaps, i.e. no min-integer between min and max that is NOT in the input array
                it('returns specified results for no-gap array #1', function () {
                    result = TwoMinMax_1.twoMinMax([1, 2, 3]);
                    expect(+result['min1']).toBe(1);
                    expect(+result['min2']).toBe(1);
                    expect(+result['max']).toBe(3);
                });
                // degnerate version of above example
                it('returns specified results for no-gap array #2', function () {
                    result = TwoMinMax_1.twoMinMax([1, 1, 1]);
                    expect(+result['min1']).toBe(1);
                    expect(+result['min2']).toBe(1);
                    expect(+result['max']).toBe(1);
                });
                it('returns correct results arbitrary integer array #1', function () {
                    result = TwoMinMax_1.twoMinMax([-1, -3, 7, 2, 20, 3, 5, -11, 14, 13, 12, -1]);
                    expect(+result['min1']).toBe(-11);
                    expect(+result['min2']).toBe(-10);
                    expect(+result['max']).toBe(20);
                });
                // put the minimum at each end of the array
                it('returns correct results arbitrary integer array #2', function () {
                    result = TwoMinMax_1.twoMinMax([-11, -1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1]);
                    expect(+result['min1']).toBe(-11);
                    expect(+result['min2']).toBe(-10);
                    expect(+result['max']).toBe(20);
                });
                it('returns correct results arbitrary integer array #3', function () {
                    result = TwoMinMax_1.twoMinMax([-1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1, -11]);
                    expect(+result['min1']).toBe(-11);
                    expect(+result['min2']).toBe(-10);
                    expect(+result['max']).toBe(20);
                });
                // duplicate the min
                it('returns correct results arbitrary integer array #4', function () {
                    result = TwoMinMax_1.twoMinMax([-1, -3, 7, 2, 20, 3, -11, 5, 14, 13, 12, -1, -11]);
                    expect(+result['min1']).toBe(-11);
                    expect(+result['min2']).toBe(-10);
                    expect(+result['max']).toBe(20);
                });
            });
            describe('Last Two Digits (not multiple of 10)', function () {
                var junk = "asdfasdf";
                var morejunk = 1 / 0;
                it('returns correct results for invalid arguments list', function () {
                    var result = TwoDigits_1.lastTwoDigits(junk, morejunk);
                    expect(+result['n']).toBe(0);
                    expect(+result['ones']).toBe(0);
                    expect(+result['tens']).toBe(0);
                    expect(result['square']).toBe(true);
                });
                it('returns correct results for empty argument list', function () {
                    var result = TwoDigits_1.lastTwoDigits();
                    expect(+result['n']).toBe(1);
                    expect(+result['ones']).toBe(1);
                    expect(+result['tens']).toBe(0);
                    expect(result['square']).toBe(true);
                });
                it('properly clips invalid arguments', function () {
                    var result = TwoDigits_1.lastTwoDigits(-1, 11);
                    expect(+result['n']).toBe(81);
                    expect(+result['ones']).toBe(1);
                    expect(+result['tens']).toBe(8);
                    expect(result['square']).toBe(true);
                });
                it('returns correct results for correct arguments #1', function () {
                    var result = TwoDigits_1.lastTwoDigits(0, 5);
                    expect(+result['n']).toBe(25);
                    expect(+result['ones']).toBe(5);
                    expect(+result['tens']).toBe(2);
                    expect(result['square']).toBe(true);
                });
                it('returns correct results for correct arguments #2', function () {
                    var result = TwoDigits_1.lastTwoDigits(1, 9);
                    expect(+result['n']).toBe(361);
                    expect(+result['ones']).toBe(1);
                    expect(+result['tens']).toBe(6);
                    expect(result['square']).toBe(false);
                });
                it('returns correct results for correct arguments #3', function () {
                    var result = TwoDigits_1.lastTwoDigits(2, 1);
                    expect(+result['n']).toBe(441);
                    expect(+result['ones']).toBe(1);
                    expect(+result['tens']).toBe(4);
                    expect(result['square']).toBe(true);
                });
                it('returns correct results for correct arguments #4', function () {
                    var result = TwoDigits_1.lastTwoDigits(3, 4);
                    expect(+result['n']).toBe(1156);
                    expect(+result['ones']).toBe(6);
                    expect(+result['tens']).toBe(5);
                    expect(result['square']).toBe(false);
                });
                it('returns correct results for correct arguments #5', function () {
                    var result = TwoDigits_1.lastTwoDigits(4, 1);
                    expect(+result['n']).toBe(1681);
                    expect(+result['ones']).toBe(1);
                    expect(+result['tens']).toBe(8);
                    expect(result['square']).toBe(true);
                });
            });
            describe('Linked List k-from-end', function () {
                var list = new ExtendedLinkedList_1.ExtendedLinkedList();
                var node;
                it('returns null for k < 0', function () {
                    node = list.kfromEnd(-1);
                    expect(node).toBe(null);
                });
                it('works for singleton list', function () {
                    list.add("0", {});
                    node = list.kfromEnd(0);
                    expect(node.id).toBe("0");
                    // beyond beginning of list
                    node = list.kfromEnd(1);
                    expect(node).toBe(null);
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
                    expect(node.id).toBe("5");
                    // select head of list as special case
                    node = list.kfromEnd(9);
                    expect(node.id).toBe("0");
                });
            });
            describe('Interval Bisection', function () {
                it('returns no root for a = b', function () {
                    var f = function (x) { return 2.0 * x; };
                    var result = Bisect_1.BisectInterval.bisect(1, 1, f);
                    expect(result['root']).toBe(false);
                });
                it('returns no root when there is no real root in [a,b]', function () {
                    var f = function (x) { return x * x - 4.0; };
                    var result = Bisect_1.BisectInterval.bisect(-10, -5, f);
                    expect(result['root']).toBe(false);
                });
                it('located roote in right interval', function () {
                    var f = function (x) { return x * x - 4.0; };
                    var result = Bisect_1.BisectInterval.bisect(-10, -1, f);
                    expect(result['root']).toBe(true);
                    expect(+result['left'] >= -10).toBe(true);
                    expect(+result['right'] <= -1).toBe(true);
                });
                it('brackets a single root in a dual-root interval', function () {
                    var f = function (x) { return x * x - 4.0; };
                    var result = Bisect_1.BisectInterval.bisect(-8, 8, f);
                    expect(result['root']).toBe(true);
                });
                it('brackets a root of a cubic polynomial', function () {
                    // 4*x^3 -3*x^2 -25*x -6
                    // roots at 3, -0.25, and -2
                    var f = function (x) { return -6 + x * (-25 + x * (-3 + x * 4)); };
                    var result = Bisect_1.BisectInterval.bisect(2, 5, f);
                    expect(result['root']).toBe(true);
                    result = Bisect_1.BisectInterval.bisect(-10, 0, f);
                    expect(result['root']).toBe(true);
                });
            });
            describe('Fibonacci Sequence', function () {
                it('returns zero for invalid argument (NaN)', function () {
                    var arg = NaN;
                    var result = Fibonacci_1.fibonacci(arg);
                    expect(result).toBe(0);
                });
                it('returns zero for invalid (negative) argument', function () {
                    var result = Fibonacci_1.fibonacci(-1);
                    expect(result).toBe(0);
                });
                it('returns NaN for n > 70', function () {
                    var result = Fibonacci_1.fibonacci(71);
                    expect(isNaN(result)).toBeTruthy();
                });
                it('correctly returns seed values for sequence', function () {
                    var result = Fibonacci_1.fibonacci(0);
                    expect(result).toBe(0);
                    result = Fibonacci_1.fibonacci(1);
                    expect(result).toBe(1);
                });
                it('correctly returns arbitrary sequence values', function () {
                    var result = Fibonacci_1.fibonacci(2);
                    expect(result).toBe(1);
                    result = Fibonacci_1.fibonacci(3);
                    expect(result).toBe(2);
                    result = Fibonacci_1.fibonacci(4);
                    expect(result).toBe(3);
                    result = Fibonacci_1.fibonacci(5);
                    expect(result).toBe(5);
                    result = Fibonacci_1.fibonacci(6);
                    expect(result).toBe(8);
                    result = Fibonacci_1.fibonacci(7);
                    expect(result).toBe(13);
                    result = Fibonacci_1.fibonacci(8);
                    expect(result).toBe(21);
                    result = Fibonacci_1.fibonacci(9);
                    expect(result).toBe(34);
                    result = Fibonacci_1.fibonacci(64);
                    expect(result).toBe(10610209857723);
                });
            });
            describe('First non-repeating character', function () {
                it('correctly handles null input string', function () {
                    var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('');
                    expect(char).toBe('');
                });
                it('correctly handles single-character string', function () {
                    var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('a');
                    expect(char).toBe('a');
                });
                it('correctly handles first non-repeating at first position', function () {
                    var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('abbccddeeffgghh');
                    expect(char).toBe('a');
                });
                it('correctly handles first non-repeating at last position', function () {
                    var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aabbccddeeffggh');
                    expect(char).toBe('h');
                });
                it('correctly returns first first of multiple non-repeating chars', function () {
                    var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aabb1ccddzeeff0ggh');
                    expect(char).toBe('1');
                });
                it('correctly handles no non-repeating chars', function () {
                    var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aabb1ccd1dzeefzf0ggh0h');
                    expect(char).toBe('');
                });
                it('correctly handles arbitrary character sequence', function () {
                    var char = FirstNonRepeatingChar_1.firstNonrepeatingChar('aldsfalhsdfasldhsdflveiewqoqzseurpeqvadspoiewyurpqowvh1792034273947239');
                    expect(char).toBe('z');
                });
            });
            describe("Pascal's Triangle", function () {
                var binomial = new BinomialCoef_1.TSMT$BinomialCoef();
                it('caches row 2 for a default instance', function () {
                    expect(binomial.rowNumber).toBe(2);
                });
                it('returns empty row for invalid numeric input', function () {
                    var crapola = 'abc';
                    expect(binomial.getRow(crapola).length).toBe(0);
                });
                it('returns empty row for negative row value', function () {
                    expect(binomial.getRow(-1).length).toBe(0);
                });
                it('returns zero for binomial coefficient with invalid inputs #1', function () {
                    var morecrapola = 'x';
                    expect(binomial.coef(morecrapola, 1)).toBe(0);
                });
                it('returns zero for binomial coefficient with invalid inputs #2', function () {
                    var evenmorecrapola = 1 / 0;
                    expect(binomial.coef(2, evenmorecrapola)).toBe(0);
                });
                it('returns correct third row', function () {
                    var row = binomial.getRow(2);
                    expect(arrCompare(row, [1, 2, 1])).toBe(true);
                });
                // iterate forward a couple rows
                it('returns correct sixth row', function () {
                    var row = binomial.getRow(5);
                    expect(arrCompare(row, [1, 5, 10, 10, 5, 1])).toBe(true);
                });
                // forward, then reverse
                it('does correct forward/reverse recursion row #1', function () {
                    var row = binomial.getRow(7);
                    expect(arrCompare(row, [1, 7, 21, 35, 35, 21, 7, 1])).toBe(true);
                    row = binomial.getRow(6);
                    expect(arrCompare(row, [1, 6, 15, 20, 15, 6, 1])).toBe(true);
                });
                // one more time
                it('does correct forward/reverse recursion row #2', function () {
                    var row = binomial.getRow(12);
                    expect(arrCompare(row, [1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1])).toBe(true);
                    row = binomial.getRow(10);
                    expect(arrCompare(row, [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1])).toBe(true);
                });
                // binomial coefficients, same row - symmetry check
                it('does correct binomial coef. calc in same row #1', function () {
                    var coef = binomial.coef(10, 2);
                    expect(coef).toBe(45);
                    coef = binomial.coef(10, 5);
                    expect(coef).toBe(252);
                    coef = binomial.coef(10, 8);
                    expect(coef).toBe(45);
                });
                // one more time
                it('does correct binomial coef. calc in same row #2', function () {
                    var coef = binomial.coef(19, 5);
                    expect(coef).toBe(11628);
                    coef = binomial.coef(19, 10);
                    expect(coef).toBe(92378);
                    coef = binomial.coef(19, 14);
                    expect(coef).toBe(11628);
                });
            });
            describe('One-Line Functions', function () {
                it('correctly reverses characters in a string', function () {
                    var result = OneLineFcns_1.reverseChars('TORTXOF EKIM AHPLA');
                    expect(result).toBe('ALPHA MIKE FOXTROT'); // which is what I will say if you ever ask me this in an interview
                });
                it('correctly extracts initials from a name', function () {
                    var result = OneLineFcns_2.initials("james thomas armstrong");
                    expect(result).toBe("JTA");
                });
                it('correctly extracts initials from first name only', function () {
                    var result = OneLineFcns_2.initials("james");
                    expect(result).toBe("J");
                });
                it('correctly extracts initials from a name and adds delimiter between initials', function () {
                    var result = OneLineFcns_2.initials("james thomas armstrong", ".");
                    expect(result).toBe("J.T.A");
                });
                it('correctly pads a string to the left # 1', function () {
                    var result = OneLineFcns_3.padLeft("this is a string", 2);
                    expect(result).toBe("  this is a string");
                });
                it('correctly pads a string to the left # 2', function () {
                    var result = OneLineFcns_3.padLeft("this is a string", 0);
                    expect(result).toBe("this is a string");
                });
                it('correctly pads a string to the left # 3', function () {
                    var result = OneLineFcns_3.padLeft("this is a string", -3);
                    expect(result).toBe("   this is a string");
                });
                it('returns NaN for min value of empty array', function () {
                    var result = OneLineFcns_4.minValue([]);
                    expect(isNaN(result)).toBeTruthy();
                });
                it('returns proper minimum value for an array of numbers', function () {
                    var result = OneLineFcns_4.minValue([2.5, -1.7, 1.0, 3.6, 1.4, 0.25, 10.0]);
                    expect(result).toBe(-1.7);
                });
                it('returns NaN for max value of empty array', function () {
                    var result = OneLineFcns_5.maxValue([]);
                    expect(isNaN(result)).toBeTruthy();
                });
                it('returns proper maximum value for an array of numbers', function () {
                    var result = OneLineFcns_5.maxValue([2.5, -1.7, 1.0, 3.6, 1.4, 0.25, 10.0]);
                    expect(result).toBe(10.0);
                });
                it('returns false for all greater than an empty array', function () {
                    var result = OneLineFcns_6.allGreaterThan([], 0);
                    expect(result).toBeFalsy();
                });
                it('returns true for all greater a supplied value', function () {
                    var result = OneLineFcns_6.allGreaterThan([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], 0);
                    expect(result).toBeTruthy();
                });
                it('returns false for all greater than a supplied value', function () {
                    var result = OneLineFcns_6.allGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 6.0], 10);
                    expect(result).toBeFalsy();
                });
                it('returns all array elements greater than a supplied value', function () {
                    var result = OneLineFcns_7.getAllGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 60.0], 10);
                    expect(result.length).toBe(3);
                    expect(result[0]).toBe(20);
                    expect(result[1]).toBe(40);
                    expect(result[2]).toBe(60);
                });
                it('returns -1 for no index of array element greater than a supplied value', function () {
                    var result = OneLineFcns_8.indexFirstGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 6.0], 100);
                    expect(result).toBe(-1);
                });
                it('returns correct index for first array element greater than a supplied value', function () {
                    var result = OneLineFcns_8.indexFirstGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 60.0], 25);
                    expect(result).toBe(3);
                });
            });
            describe('Minimize worst-case complexity', function () {
                var scan = new ArrayScan_1.ArrayScan();
                var f = function (a) { return true; };
                it('returns -1 for an empty array', function () {
                    var result = scan.scanArray([], f);
                    expect(result).toBe(-1);
                });
                it('returns 0 for an singleton array that satisfies criteria', function () {
                    var f = function (a) { return a > 0; };
                    var result = scan.scanArray([1.0], f);
                    var steps = scan.steps;
                    var numTrue = scan.numTrue;
                    expect(result).toBe(0);
                    expect(steps).toBe(1);
                    expect(numTrue).toBe(1);
                });
                it('returns -1 for an singleton array that does not satisfiy criteria', function () {
                    var f = function (a) { return a == 0; };
                    var result = scan.scanArray([1.0], f);
                    expect(result).toBe(-1);
                });
                it('returns correct results for two-element array', function () {
                    var f = function (a) { return a > 0; };
                    var result = scan.scanArray([0.0, 1.0], f);
                    expect(result).toBe(1);
                    result = scan.scanArray([1.0, 2.0], f);
                    expect(result).toBe(0);
                    result = scan.scanArray([-1.0, 0.0], f);
                    expect(result).toBe(-1);
                });
                it('returns correct results for three-element array', function () {
                    var f = function (a) { return a > 1000; };
                    var a = makeArray(3);
                    var result = scan.scanArray(a, f);
                    expect(result).toBe(-1);
                    expect(scan.k).toBe(2);
                    expect(scan.steps).toBe(2);
                });
                it('returns correct results for four-element array', function () {
                    var f = function (a) { return a > 1; };
                    var a = makeArray(4);
                    var result = scan.scanArray(a, f);
                    expect(result).toBe(2);
                    expect(scan.k).toBe(3);
                    expect(scan.steps).toBe(3);
                });
                it('returns correct results for five-element array', function () {
                    var f = function (a) { return a > 3; };
                    var a = makeArray(5);
                    var result = scan.scanArray(a, f);
                    expect(result).toBe(4);
                    expect(scan.k).toBe(3);
                    expect(scan.steps).toBe(3);
                    expect(scan.numTrue).toBe(1);
                });
                it('returns correct results for ten-element array', function () {
                    var f = function (a) { return a > 1; };
                    var a = makeArray(10);
                    var result = scan.scanArray(a, f);
                    expect(result).toBe(2);
                    expect(scan.k).toBe(4);
                    expect(scan.steps).toBe(4);
                    expect(scan.numTrue).toBe(2);
                });
                it('returns correct results for twenty-element array', function () {
                    var f = function (a) { return a > 3; };
                    var a = makeArray(20);
                    var result = scan.scanArray(a, f);
                    expect(result).toBe(4);
                    expect(scan.k).toBe(6);
                    expect(scan.steps).toBe(6);
                    expect(scan.numTrue).toBe(2);
                    f = function (a) { return a > 17; };
                    result = scan.scanArray(a, f);
                    expect(result).toBe(18);
                    expect(scan.steps).toBe(6);
                });
                it('returns correct results for twenty five-element array', function () {
                    var f = function (a) { return a > 23; };
                    var a = makeArray(25);
                    var result = scan.scanArray(a, f);
                    expect(result).toBe(24);
                    expect(scan.k).toBe(7);
                    expect(scan.steps).toBe(7);
                    expect(scan.numTrue).toBe(1);
                });
                it('returns correct results for one hundred-element array', function () {
                    var f = function (a) { return a > 12; };
                    var a = makeArray(100);
                    var result = scan.scanArray(a, f);
                    expect(result).toBe(13);
                    expect(scan.k).toBe(14);
                    expect(scan.steps).toBe(14);
                    expect(scan.numTrue).toBe(1);
                });
            });
            describe('Scan Grid', function () {
                var scanner = new ScanGrid_1.ScanGrid();
                it('returns zero for an empty grid', function () {
                    var value = scanner.scan([]);
                    expect(value).toBe(0);
                });
                it('returns correct value for a 1x1 grid', function () {
                    var m = Matrix_1.Matrix.create(1, 1, 1.0);
                    var value = scanner.scan(m);
                    expect(value).toBe(1.0);
                });
                it('returns correct value for 2x2 grid #1', function () {
                    var m = Matrix_1.Matrix.create(2, 2, 0);
                    m[0][1] = 2.0;
                    m[1][0] = 1.0;
                    var value = scanner.scan(m);
                    expect(value).toBe(2.0);
                });
                it('returns correct value for 2x2 grid #2', function () {
                    var m = Matrix_1.Matrix.create(2, 2, 0);
                    m[0][0] = 1.0;
                    m[1][0] = 2.0;
                    var value = scanner.scan(m);
                    expect(value).toBe(3.0);
                });
                it('returns correct value for 3x3 grid #1', function () {
                    var m = Matrix_1.Matrix.create(3, 3, 0);
                    // nonzeros by column
                    m[0][0] = 1.0;
                    m[1][0] = 2.0;
                    m[2][1] = 3.0;
                    m[1][2] = 1.0;
                    var value = scanner.scan(m);
                    expect(value).toBe(6.0);
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
                    expect(value).toBe(8.0);
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
                    expect(value).toBe(5.0);
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
                    expect(value).toBe(9.0);
                });
            });
            describe('Factorial Tests', function () {
                it('returns zero for negative argument', function () {
                    var value = Factorial_1.factorial(-1);
                    expect(value).toBe(0);
                });
                it('returns 1 for n = 0', function () {
                    var value = Factorial_1.factorial(0);
                    expect(value).toBe(1);
                });
                it('returns 1 for n = 1', function () {
                    var value = Factorial_1.factorial(1);
                    expect(value).toBe(1);
                });
                it('returns 2 for n = 2', function () {
                    var value = Factorial_1.factorial(2);
                    expect(value).toBe(2);
                });
                it('returns 6 for n = 3', function () {
                    var value = Factorial_1.factorial(3);
                    expect(value).toBe(6);
                });
                it('returns 120 for n = 5', function () {
                    var value = Factorial_1.factorial(5);
                    expect(value).toBe(120);
                });
                it('returns 3628800 for n = 10', function () {
                    var value = Factorial_1.factorial(10);
                    expect(value).toBe(3628800);
                });
                it('returns 479001600 for n = 12', function () {
                    var value = Factorial_1.factorial(12);
                    expect(value).toBe(479001600);
                });
            });
            describe('Repating Decimal As Fraction', function () {
                it('returns null for empty input', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("");
                    expect(frac).toBe(null);
                });
                it('returns null for non-repeating sequence after decimal', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("1.4");
                    expect(frac).toBe(null);
                });
                it('returns correct result for 0.55555', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("0.55555");
                    expect(frac.num).toBe(5);
                    expect(frac.den).toBe(9);
                });
                it('returns correct result for 1.333333 unreduced', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("1.333333");
                    expect(frac.num).toBe(12);
                    expect(frac.den).toBe(9);
                });
                it('returns correct result for 1.66666 unreduced', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("1.66666");
                    expect(frac.num).toBe(15);
                    expect(frac.den).toBe(9);
                });
                it('returns correct result for 1.0424242 unreduced', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("1.0424242");
                    expect(frac.num).toBe(1032);
                    expect(frac.den).toBe(990);
                });
                it('returns correct result for 2.13234234 unreduced', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("2.13234234");
                    expect(frac.num).toBe(213021);
                    expect(frac.den).toBe(99900);
                });
                it('returns correct result for 1.333333 in reduced form', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("1.333333", true);
                    expect(frac.num).toBe(4);
                    expect(frac.den).toBe(3);
                });
                it('returns correct result for 1.0424242 in reduced form', function () {
                    var frac = RepeatToFrac_1.repeatToFraction("1.0424242", true);
                    expect(frac.num).toBe(172);
                    expect(frac.den).toBe(165);
                });
            });
        }
    }
});
//# sourceMappingURL=ptests.specs.js.map