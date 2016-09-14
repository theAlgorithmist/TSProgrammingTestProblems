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
System.register(['./src/mult321/Multiply321', './src/exchange/ExchangeInt', './src/macheps/MachEps', './src/fizzbuzz/FizzBuzz', './src/interp/Interp', './src/randomint/RandomIntInRange', './src/uberdriver/ComputeTrips', './src/daytrader/MaxProfit', './src/twomin/TwoMinMax', './src/twodigits/TwoDigits', './src/llist1/ExtendedLinkedList'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Multiply321_1, ExchangeInt_1, MachEps_1, FizzBuzz_1, Interp_1, RandomIntInRange_1, ComputeTrips_1, MaxProfit_1, TwoMinMax_1, TwoDigits_1, ExtendedLinkedList_1;
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
        }
    }
});

//# sourceMappingURL=ptests.specs.js.map
