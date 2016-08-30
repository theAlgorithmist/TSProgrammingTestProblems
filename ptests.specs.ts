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

// Specs for various 'programming test' problems in Typescript

// test functions/classes
import {multiply321        } from './src/mult321/Multiply321';
import {exchangeInt        } from './src/exchange/ExchangeInt';
import {machEps            } from './src/macheps/MachEps';
import {fizzBuzz           } from './src/fizzbuzz/FizzBuzz';
import {LinearInterpolation} from './src/interp/Interp';
import {RandomIntInRange   } from './src/randomint/RandomIntInRange';
import {tripCount          } from './src/uberdriver/ComputeTrips';
import {maxProfit          } from './src/daytrader/MaxProfit';
import {twoMinMax          } from './src/twomin/TwoMinMax';

// Test Suites
describe('Multiply by 321', () => {
  
  var result: number;
  var obj: any = { blah: 10 };  // the typing is to get past what would otherwise be caught at compile time

  // edge cases
  it('returns zero when multiplied by zero', () => {
    result = multiply321(0);
    expect(result).toBe(0);
  });

  it('returns zero when multiplied by zero as a string', () => {
    result = multiply321("0");
    expect(result).toBe(0);
  });

  it('returns zero when multiplied by string that can still be coerced to zero', () => {
    result = multiply321("0a");
    expect(result).toBe(0);
  });

  it('returns NaN when multiplied by string that can not be coerced to number', () => {
    result = multiply321("abc0123");
    expect(isNaN(result)).toBe(true); 
  });

  it('returns NaN when multiplied by an Object', () => {
    result = multiply321(obj);
    expect(isNaN(result)).toBe(true);
  });

  it('returns 321 when multiplied by one', () => {
    result = multiply321(1);
    expect(result).toBe(321);
  });

  it('returns -321 when multiplied by minus one', () => {
    result = multiply321(-1);
    expect(result).toBe(-321);
  });

  it('returns -642 when multiplied by -1.9', () => {
    result = multiply321(-1.9);
    expect(result).toBe(-642);
  });

  // now for the main event ...
  it('rounds inputs to integer before multiply', () => {
    result = multiply321(1.27);
    expect(result).toBe(321);
  });

  it('returns 642 when multiplied by 2.0', () => {
    result = multiply321(2.0);
    expect(result).toBe(642);
  });

  it('returns 3210 when multiplied by 10', () => {
    result = multiply321(10);
    expect(result).toBe(3210);
  });

  it('returns -3210 when multiplied by -10', () => {
    result = multiply321(-10);
    expect(result).toBe(-3210);
  });

  it('returns 28957410 when multiplied by Beverly Hills 90210', () => {
    result = multiply321(90210);
    expect(result).toBe(28957410);
  });

});

describe('Exchange Integers', () => {
  
  var result: Object;

  it('properly exchanges 6 and 5', () => {
    result = exchangeInt(6, 5);
    expect(<number> result['a']).toBe(5);
    expect(<number> result['b']).toBe(6);
  });

  it('properly exchanges 1 and -1', () => {
    result = exchangeInt(1, -1);
    expect(<number> result['a']).toBe(-1);
    expect(<number> result['b']).toBe(1);
  });

  it('properly exchanges 4 and 0', () => {
    result = exchangeInt(4, 0);
    expect(<number> result['a']).toBe(0);
    expect(<number> result['b']).toBe(4);
  });

  it('properly exchanges 0 and 5', () => {
    result = exchangeInt(0, 5);
    expect(<number> result['a']).toBe(5);
    expect(<number> result['b']).toBe(0);
  });

  it('properly exchanges -10 and -11', () => {
    result = exchangeInt(-10, -11);
    expect(<number> result['a']).toBe(-11);
    expect(<number> result['b']).toBe(-10);
  });
});

describe('Machine Epsilon', () => {
  
  let epsilon: number = machEps();
  let actual: number  = Math.pow(2.0, -52);

  // this is necessary, but not sufficient (why is a good interview question in and of itself)
  it('is different from 1.0 when added to 1.0', () => {
    expect(1.0+epsilon != 1.0).toBe(true);
  });

  it('epsilon/2 + 1.0 equals 1.0', () => {
    expect(1.0+ 0.5*epsilon == 1.0).toBe(true);
  });

  it('should be 2^-52', () => {
    expect(epsilon).toEqual(actual);
  });
});

describe('Fizz Buzz', () => {
  
  let result: Array<string> = fizzBuzz();

  // if you want to look at the entire array
  //console.log( "FizzBuzz result: ", result );

  it('has array length of 100', () => {
    expect(result.length).toEqual(100);
  });

  // run through primes not 3 and 5
  it('assigns index values correctly', () => {
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
  it('assigns indicies evenly divisible by three correctly', () => {
    expect(result[2].toLowerCase()).toEqual("fizz");
    expect(result[5].toLowerCase()).toEqual("fizz");
    expect(result[8].toLowerCase()).toEqual("fizz");
    expect(result[26].toLowerCase()).toEqual("fizz"); 
    expect(result[32].toLowerCase()).toEqual("fizz"); 
    expect(result[62].toLowerCase()).toEqual("fizz"); 
    expect(result[98].toLowerCase()).toEqual("fizz"); 
  });

  // a few of the buzzes
  it('assigns indicies evenly divisible by five correctly', () => {
    expect(result[4].toLowerCase()).toEqual("buzz");
    expect(result[19].toLowerCase()).toEqual("buzz");
    expect(result[34].toLowerCase()).toEqual("buzz");
    expect(result[39].toLowerCase()).toEqual("buzz"); 
    expect(result[49].toLowerCase()).toEqual("buzz"); 
    expect(result[64].toLowerCase()).toEqual("buzz"); 
    expect(result[94].toLowerCase()).toEqual("buzz"); 
  });

   // the fizzbuzzes
  it('assigns indicies evenly divisible by three & five correctly', () => {
    expect(result[14].toLowerCase()).toEqual("fizzbuzz");
    expect(result[29].toLowerCase()).toEqual("fizzbuzz");
    expect(result[44].toLowerCase()).toEqual("fizzbuzz");
    expect(result[74].toLowerCase()).toEqual("fizzbuzz"); 
    expect(result[89].toLowerCase()).toEqual("fizzbuzz"); 
  });
});

describe('Linear Interpolation', () => {
  
  let interp: LinearInterpolation = new LinearInterpolation();

  it('is returns zero after construction and 0 x-value', () => {
    expect(interp.interpolate(0)).toBe(0);
  });

  it('works for any x-interval and default y-values', () => {
    interp.x1 = -1;
    interp.x2 = 1;
    expect(interp.interpolate(0)).toBe(0);

    interp.x1 = -2;
    interp.x2 = 2;
    expect(interp.interpolate(0)).toBe(0);
  });

  it('works for coincident points', () => {
    interp.x1 = -1;
    interp.x2 = 1;
    interp.y1 = -1;
    interp.y2 = 1;

    expect(interp.interpolate(-1)).toBe(-1);
    expect(interp.interpolate(1)).toBe(1);
  });

  it('works for reversed interval', () => {
    interp.x1 = 2;
    interp.x2 = -2;
    interp.y1 = -7;
    interp.y2 = 7;

    expect(interp.interpolate(-2)).toBe(-7);
    expect(interp.interpolate(2)).toBe(7);
  });

  it('correctly returns endpoints', () => {
    interp.x1 = -3;
    interp.x2 = 2;
    interp.y1 = 4;
    interp.y2 = 6;

    expect(interp.interpolate(-3)).toBeCloseTo(4, 7);
    expect(interp.interpolate(2)).toBeCloseTo(6, 7);
  });

  it('works with vertical line', () => {
    interp.x1 = 3;
    interp.x2 = 3;
    interp.y1 = 4;
    interp.y2 = 100;

    expect(interp.interpolate(3)).toBeCloseTo(4, 7);
  });

  it('correctly interpolates', () => {
    interp.x1 = 1;
    interp.x2 = 2;
    interp.y1 = 3;
    interp.y2 = 4;

    expect(interp.interpolate(1.5)).toBeCloseTo(3.5, 7);
  });

  it('allows extrapolation', () => {
    interp.x1 = 1;
    interp.x2 = 2;
    interp.y1 = 3;
    interp.y2 = 4;

    expect(interp.interpolate(3)).toBeCloseTo(5, 7);
    expect(interp.interpolate(0)).toBeCloseTo(2, 7);
  });
});

describe('Random Integer in Range', () => {
  
  // the typical approach - note that as the number of trials increaes, the 'typical' line of code is twice as likely to pick
  // 1 or 2 than 0 or 3.  it is highly biased away from the endpoints
  let i: number;
  let x: number;
  let i1: number = 0;
  let i2: number = 3;
  let f0: number = 0;
  let f1: number = 1;
 
  for (i=0; i<10000; ++i)
  {
    x = i1 + Math.round(Math.random()*(i2-i1));
   
    if (x == 0 || x == 3)
      f0++; 
    else 
      f1++;
  }
 
  let ratio1: number = f1/f0;
  console.log( "0 & 3 frequency: ", f0 );
  console.log( "1 & 2 frequency: ", f1 );
  console.log( "ratio: ", ratio1 );

  // use the Typescript Math Toolkit random integer in range class - note here that the ratio is close to 1 so that 0 or 3 is about as likely
  // as 1 or 2.
  let generator: RandomIntInRange = new RandomIntInRange(0, 3);
  f0 = 0;
  f1 = 0;

  for (i=0; i<10000; ++i)
  {
    x = generator.generate();
   
    if (x == 0 || x == 3)
      f0++; 
    else 
      f1++;
  }

  let ratio2: number = f1/f0;
  console.log( "0 & 3 frequency: ", f0 );
  console.log( "1 & 2 frequency: ", f1 );
  console.log( "ratio: ", ratio2);

  it('generates consistent iterates in interval', () => {
    expect(ratio2 < ratio1).toBe(true);
  });
});

describe('Uber Driver', () => {

  let __getRating: Function = ( trips:Array<number> ): number => {
    return trips.reduce( (total: number, x: number ) => {return total+x} )/<number> trips.length;
  };

  let junk: any = {a: -1};

  it('returns 0 for invalid inputs', () => {
    expect(tripCount(4.4, junk)).toBe(0);
    expect(tripCount(1/0, 4)).toBe(0);
    expect(tripCount(4.5, 6)).toBe(0);
  });

  it('returns ininity for an existing 5-star rating', () => {
    expect(tripCount(5.0, 4)).toBe(Infinity);
  });

  // trip sequence where we know the answer in advance
  it('returns correct number of trips #1', () => {
    let r: number = __getRating([4, 5, 3, 5, 5]);
    let n: number = tripCount(r, 3);  // should be 3

    expect(n).toBe(3);

    // new ranking after 3 consecutive 5-star trips following the downrate
    let rstar: number = __getRating([4, 5, 3, 5, 5, 3, 5, 5, 5]);
    expect(rstar >= r).toBe(true);
  });

  // some negative testing ...
  it('uses abs. value for negative inputs', () => {
    let r: number = __getRating([4, 5, 3, 5, 5]);
    let n: number = tripCount(-r, 3);  // should be 3

    expect(n).toBe(3);

    n = tripCount(r, -3);
    expect(n).toBe(3); 
  });

  it('rounds floating-point number for current ranking', () => {
    let r: number = __getRating([4, 5, 3, 5, 5]);
    let n: number = tripCount(r, 3.257);

    expect(n).toBe(3);
  });

  // this observation may be a bit non-intuitive, so it's illustrated by example
  it('required numbero of trips is independent of prioer trip count', () => {
    let r: number = 4;
    let n: number = tripCount(r, 2); // should be 2

    // observe the sequence - two ways to have a 4.0 trip rating before the two-star
    r = __getRating([4, 5, 2, 5]);

    console.log( "Case 1, original rating: ", r );
    console.log( "Case 1, after downrate : ", __getRating([4, 5, 2, 5, 2])       );
    console.log( "Case 1, after 1 5-star : ", __getRating([4, 5, 2, 5, 2, 5])    );
    console.log( "Case 1, after 2 5-star : ", __getRating([4, 5, 2, 5, 2, 5, 5]) );
    console.log( "" );
 
    // another way to have an original 4-star rating ... 4, 4, 4, 4, 4
    console.log( "Case 2, after downrate : ", __getRating([4, 4, 4, 4, 4, 2])       );
    console.log( "Case 2, after 1 5-star : ", __getRating([4, 4, 4, 4, 4, 2, 5])    );
    console.log( "Case 2, after 2 5-star : ", __getRating([4, 4, 4, 4, 4, 2, 5, 5]) );

    expect(n).toBe(2);
  });
});

describe('Day Trader', () => {
  
  let profit: number = maxProfit([]);

  it('returns zero for empty price list', () => {
    expect(profit).toEqual(0);
  });

  it('returns zero for singleton price list', () => {
    profit = maxProfit( [10] );
    expect(profit).toEqual(0);
  });

  // test cases where it is easy to determine the correct result by direct examination
  it('returns correct max profit #1', () => {
    profit = maxProfit( [1, 2] );
    expect(profit).toEqual(1);
  });

  it('returns correct max profit #2', () => {
    profit = maxProfit( [3, 3] );
    expect(profit).toEqual(0);
  });

  it('returns correct max profit #3', () => {
    profit = maxProfit( [10, 12, 5, 8, 10, 7, 6, 8, 11, 7] );
    expect(profit).toEqual(6);
  });

  // put absolute high/low at opposite ends of the array
  it('returns correct max profit #4', () => {
    profit = maxProfit( [5, 11, 5, 8, 10, 7, 6, 8, 10, 12] );
    expect(profit).toEqual(7);
  });

  it('returns correct max profit #5', () => {
    profit = maxProfit( [12, 11, 5, 8, 10, 7, 6, 8, 10, 5] );
    expect(profit).toEqual(5);
  });

  it('returns correct max profit #6', () => {
    profit = maxProfit( [12, 11, 5, 8, 10, 7, 6, 4, 8, 7, 10, 5, 5, 6, 4, 4] );
    expect(profit).toEqual(6);
  });

  // and, finally ... the case where prices decline monotonically throughout the session - should return minimum loss (negative number)
  it('returns correct max profit #7', () => {
    profit = maxProfit( [100, 98, 96, 94, 93, 90, 87, 85, 80, 75, 70, 60, 50, 45, 40, 37, 35, 30, 26] );
    expect(profit).toEqual(-1);
  });
});

describe('Two Mins and Max', () => {
  
  let result: Object = twoMinMax([]);

  it('returns correct results for empty array', () => {
    expect(<number> result['min1']).toBe(0);
    expect(<number> result['min2']).toBe(0);
    expect(<number> result['max']).toBe(0);
  });

  it('returns correct results for singleton array', () => {
    result = twoMinMax([2]);
    expect(<number> result['min1']).toBe(2);
    expect(<number> result['min2']).toBe(2);
    expect(<number> result['max']).toBe(2);
  });

  // no gaps, i.e. no min-integer between min and max that is NOT in the input array
  it('returns specified results for no-gap array #1', () => {
    result = twoMinMax([1, 2, 3]);
    expect(<number> result['min1']).toBe(1);
    expect(<number> result['min2']).toBe(1);
    expect(<number> result['max']).toBe(3);
  });

  // degnerate version of above example
  it('returns specified results for no-gap array #2', () => {
    result = twoMinMax([1, 1, 1]);
    expect(<number> result['min1']).toBe(1);
    expect(<number> result['min2']).toBe(1);
    expect(<number> result['max']).toBe(1);
  });

  it('returns correct results arbitrary integer array #1', () => {
    result = twoMinMax([-1, -3, 7, 2, 20, 3, 5, -11, 14, 13, 12, -1]);
    expect(<number> result['min1']).toBe(-11);
    expect(<number> result['min2']).toBe(-10);
    expect(<number> result['max']).toBe(20);
  });

  // put the minimum at each end of the array
  it('returns correct results arbitrary integer array #2', () => {
    result = twoMinMax([-11, -1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1]);
    expect(<number> result['min1']).toBe(-11);
    expect(<number> result['min2']).toBe(-10);
    expect(<number> result['max']).toBe(20);
  });

  it('returns correct results arbitrary integer array #3', () => {
    result = twoMinMax([-1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1, -11]);
    expect(<number> result['min1']).toBe(-11);
    expect(<number> result['min2']).toBe(-10);
    expect(<number> result['max']).toBe(20);
  });

  // duplicate the min
  it('returns correct results arbitrary integer array #4', () => {
    result = twoMinMax([-1, -3, 7, 2, 20, 3, -11, 5, 14, 13, 12, -1, -11]);
    expect(<number> result['min1']).toBe(-11);
    expect(<number> result['min2']).toBe(-10);
    expect(<number> result['max']).toBe(20);
  });
});

