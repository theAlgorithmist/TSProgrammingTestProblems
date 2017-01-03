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
import {multiply321          } from './src/mult321/Multiply321';
import {exchangeInt          } from './src/exchange/ExchangeInt';
import {machEps              } from './src/macheps/MachEps';
import {fizzBuzz             } from './src/fizzbuzz/FizzBuzz';
import {LinearInterpolation  } from './src/interp/Interp';
import {RandomIntInRange     } from './src/randomint/RandomIntInRange';
import {tripCount            } from './src/uberdriver/ComputeTrips';
import {maxProfit            } from './src/daytrader/MaxProfit';
import {twoMinMax            } from './src/twomin/TwoMinMax';
import {lastTwoDigits        } from './src/twodigits/TwoDigits';
import {ExtendedLinkedList   } from './src/llist1/ExtendedLinkedList';
import {TSMT$ListNode        } from './src/shared/ListNode';
import {BisectInterval       } from './src/bisection/Bisect';
import {fibonacci            } from './src/fibonacci/Fibonacci';
import {firstNonrepeatingChar} from './src/firstnonrepeating/FirstNonRepeatingChar';
import {TSMT$BinomialCoef    } from './src/shared/BinomialCoef';
import {reverseChars         } from './src/oneline/OneLineFcns';
import {initials             } from './src/oneline/OneLineFcns';
import {padLeft              } from './src/oneline/OneLineFcns';
import {minValue             } from './src/oneline/OneLineFcns';
import {maxValue             } from './src/oneline/OneLineFcns';
import {allGreaterThan       } from './src/oneline/OneLineFcns';
import {getAllGreaterThan    } from './src/oneline/OneLineFcns';
import {indexFirstGreaterThan} from './src/oneline/OneLineFcns';
import {ArrayScan            } from './src/worstcase/ArrayScan';

// quick-n-dirty elementwise arrray comparison for arrays of numbers (expeted to be integers)
function arrCompare(arr1: Array<number>, arr2: Array<number>): boolean
{
  if (!arr1 || !arr2)
    return false;

  let l1: number = arr1.length;
  let l2: number = arr2.length;

  if (l1 != l2)
    return false;

  let i: number;
  for (i=0; i<l1; ++i)
  {
    if (Math.abs(arr1[i]-arr2[i]) > 0.000000001)
      return false;
  }

  return true;
}

// init an array with a strictly increasing sequence of numbers
function makeArray(n: number): Array<number>
{
  let i: number
  let a: Array<number> = new Array<number>();

  // KISS
  for (i=0; i<n; ++i)
    a.push (i);

  return a;
}


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
    expect(+result['a']).toBe(5);
    expect(+result['b']).toBe(6);
  });

  it('properly exchanges 1 and -1', () => {
    result = exchangeInt(1, -1);
    expect(+result['a']).toBe(-1);
    expect(+result['b']).toBe(1);
  });

  it('properly exchanges 4 and 0', () => {
    result = exchangeInt(4, 0);
    expect(+result['a']).toBe(0);
    expect(+result['b']).toBe(4);
  });

  it('properly exchanges 0 and 5', () => {
    result = exchangeInt(0, 5);
    expect(+result['a']).toBe(5);
    expect(+result['b']).toBe(0);
  });

  it('properly exchanges -10 and -11', () => {
    result = exchangeInt(-10, -11);
    expect(+result['a']).toBe(-11);
    expect(+result['b']).toBe(-10);
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

  let __getRating: Function = ( trips:Array<number>): number => {
    return trips.reduce( (total: number, x: number ) => {return total+x} )/+trips.length;
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
    expect(+result['min1']).toBe(0);
    expect(+result['min2']).toBe(0);
    expect(+result['max']).toBe(0);
  });

  it('returns correct results for singleton array', () => {
    result = twoMinMax([2]);
    expect(+result['min1']).toBe(2);
    expect(+result['min2']).toBe(2);
    expect(+result['max']).toBe(2);
  });

  // no gaps, i.e. no min-integer between min and max that is NOT in the input array
  it('returns specified results for no-gap array #1', () => {
    result = twoMinMax([1, 2, 3]);
    expect(+result['min1']).toBe(1);
    expect(+result['min2']).toBe(1);
    expect(+result['max']).toBe(3);
  });

  // degnerate version of above example
  it('returns specified results for no-gap array #2', () => {
    result = twoMinMax([1, 1, 1]);
    expect(+result['min1']).toBe(1);
    expect(+result['min2']).toBe(1);
    expect(+result['max']).toBe(1);
  });

  it('returns correct results arbitrary integer array #1', () => {
    result = twoMinMax([-1, -3, 7, 2, 20, 3, 5, -11, 14, 13, 12, -1]);
    expect(+result['min1']).toBe(-11);
    expect(+result['min2']).toBe(-10);
    expect(+result['max']).toBe(20);
  });

  // put the minimum at each end of the array
  it('returns correct results arbitrary integer array #2', () => {
    result = twoMinMax([-11, -1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1]);
    expect(+result['min1']).toBe(-11);
    expect(+result['min2']).toBe(-10);
    expect(+result['max']).toBe(20);
  });

  it('returns correct results arbitrary integer array #3', () => {
    result = twoMinMax([-1, -3, 7, 2, 20, 3, 5, 14, 13, 12, -1, -11]);
    expect(+result['min1']).toBe(-11);
    expect(+result['min2']).toBe(-10);
    expect(+result['max']).toBe(20);
  });

  // duplicate the min
  it('returns correct results arbitrary integer array #4', () => {
    result = twoMinMax([-1, -3, 7, 2, 20, 3, -11, 5, 14, 13, 12, -1, -11]);
    expect(+result['min1']).toBe(-11);
    expect(+result['min2']).toBe(-10);
    expect(+result['max']).toBe(20);
  });
});

describe('Last Two Digits (not multiple of 10)', () => {
  
  let junk: any        = "asdfasdf";
  let morejunk: number = 1/0;
 
  it('returns correct results for invalid arguments list', () => {
    let result: Object = lastTwoDigits(junk, morejunk);

    expect(+result['n']).toBe(0);
    expect(+result['ones']).toBe(0);
    expect(+result['tens']).toBe(0);
    expect(<boolean> result['square']).toBe(true);
  });

  it('returns correct results for empty argument list', () => {
    let result: Object = lastTwoDigits();

    expect(+result['n']).toBe(1);
    expect(+result['ones']).toBe(1);
    expect(+result['tens']).toBe(0);
    expect(<boolean> result['square']).toBe(true);
  });

  it('properly clips invalid arguments', () => {
    let result: Object = lastTwoDigits(-1, 11);

    expect(+result['n']).toBe(81);
    expect(+result['ones']).toBe(1);
    expect(+result['tens']).toBe(8);
    expect(<boolean> result['square']).toBe(true);
  });

  it('returns correct results for correct arguments #1', () => {
    let result: Object = lastTwoDigits(0, 5);

    expect(+result['n']).toBe(25);
    expect(+result['ones']).toBe(5);
    expect(+result['tens']).toBe(2);
    expect(<boolean> result['square']).toBe(true);
  });

  it('returns correct results for correct arguments #2', () => {
    let result: Object = lastTwoDigits(1, 9);

    expect(+result['n']).toBe(361);
    expect(+result['ones']).toBe(1);
    expect(+result['tens']).toBe(6);
    expect(<boolean> result['square']).toBe(false);
  });

  it('returns correct results for correct arguments #3', () => {
    let result: Object = lastTwoDigits(2, 1);

    expect(+result['n']).toBe(441);
    expect(+result['ones']).toBe(1);
    expect(+result['tens']).toBe(4);
    expect(<boolean> result['square']).toBe(true);
  });

  it('returns correct results for correct arguments #4', () => {
    let result: Object = lastTwoDigits(3, 4);

    expect(+result['n']).toBe(1156);
    expect(+result['ones']).toBe(6);
    expect(+result['tens']).toBe(5);
    expect(<boolean> result['square']).toBe(false);
  });

  it('returns correct results for correct arguments #5', () => {
    let result: Object = lastTwoDigits(4, 1);

    expect(+result['n']).toBe(1681);
    expect(+result['ones']).toBe(1);
    expect(+result['tens']).toBe(8);
    expect(<boolean> result['square']).toBe(true);
  });
});

describe('Linked List k-from-end', () => {
  
  let list: ExtendedLinkedList = new ExtendedLinkedList();
  let node: TSMT$ListNode;

  it('returns null for k < 0', () => {
    node = list.kfromEnd(-1);
    expect(node).toBe(null);
  });

  it('works for singleton list', () => {
    list.add( "0", {});

    node = list.kfromEnd(0);
    expect(node.id).toBe("0");
  
    // beyond beginning of list
    node = list.kfromEnd(1);
    expect(node).toBe(null);
  });

  it('works for arbitrary list', () => {
    list.add( "0", {});
    list.add( "1", {});
    list.add( "2", {});
    list.add( "3", {});
    list.add( "4", {});
    list.add( "5", {});
    list.add( "6", {});
    list.add( "7", {});
    list.add( "8", {});
    list.add( "9", {});

    node = list.kfromEnd(4);
    expect(node.id).toBe("5");
  
    // select head of list as special case
    node = list.kfromEnd(9);
    expect(node.id).toBe("0");
  });
});

describe('Interval Bisection', () => {

  it('returns no root for a = b', () => {
    let f: Function    = (x: number): number => {return 2.0*x};
    let result: Object = BisectInterval.bisect(1, 1, f);
    expect(result['root']).toBe(false);
  });

  it('returns no root when there is no real root in [a,b]', () => {
    let f: Function    = (x: number): number => {return x*x - 4.0};
    let result: Object = BisectInterval.bisect(-10, -5, f);
    expect(result['root']).toBe(false);
  });

  it('located roote in right interval', () => {
    let f: Function    = (x: number): number => {return x*x - 4.0};
    let result: Object = BisectInterval.bisect(-10, -1, f);

    expect(result['root']).toBe(true);
    expect(+result['left'] >= -10).toBe(true);
    expect(+result['right'] <= -1).toBe(true);
  });

  it('brackets a single root in a dual-root interval', () => {
    let f: Function    = (x: number): number => {return x*x - 4.0};
    let result: Object = BisectInterval.bisect(-8, 8, f);
    expect(result['root']).toBe(true);
  });

  it('brackets a root of a cubic polynomial', () => {
    // 4*x^3 -3*x^2 -25*x -6
    // roots at 3, -0.25, and -2

    let f: Function    = (x: number): number => {return -6 + x*(-25 + x*(-3 + x*4))};  
    let result: Object = BisectInterval.bisect(2, 5, f);
    expect(result['root']).toBe(true);

    result = BisectInterval.bisect(-10, 0, f);
    expect(result['root']).toBe(true);
  });

});

describe('Fibonacci Sequence', () => {

  it('returns zero for invalid argument (NaN)', () => {
    let arg: any       = NaN;
    let result: number = fibonacci(arg);

    expect(result).toBe(0);
  });

  it('returns zero for invalid (negative) argument', () => {
    let result: number = fibonacci(-1);

    expect(result).toBe(0);
  });

  it('correctly returns seed values for sequence', () => {
    let result: number = fibonacci(0);

    expect(result).toBe(0);

    result = fibonacci(1);
    expect(result).toBe(1);
  });

  it('correctly returns arbitrary sequence values', () => {
    let result: number = fibonacci(2);

    expect(result).toBe(1);

    result = fibonacci(3);
    expect(result).toBe(2);

    result = fibonacci(4);
    expect(result).toBe(3);
    
    result = fibonacci(5);
    expect(result).toBe(5);

    result = fibonacci(6);
    expect(result).toBe(8);

    result = fibonacci(7);
    expect(result).toBe(13);

    result = fibonacci(8);
    expect(result).toBe(21);

    result = fibonacci(9);
    expect(result).toBe(34);

    result = fibonacci(64);
    expect(result).toBe(10610209857723);
  });
});

describe('First non-repeating character', () => {

  it('correctly handles null input string', () => {
    let char: string = firstNonrepeatingChar('');

    expect(char).toBe('');
  });

 it('correctly handles single-character string', () => {
    let char: string = firstNonrepeatingChar('a');

    expect(char).toBe('a');
  });

 it('correctly handles first non-repeating at first position', () => {
    let char: string = firstNonrepeatingChar('abbccddeeffgghh');

    expect(char).toBe('a');
  });

  it('correctly handles first non-repeating at last position', () => {
    let char: string = firstNonrepeatingChar('aabbccddeeffggh');

    expect(char).toBe('h');
  });

  it('correctly returns first first of multiple non-repeating chars', () => {
    let char: string = firstNonrepeatingChar('aabb1ccddzeeff0ggh');

    expect(char).toBe('1');
  });

  it('correctly handles no non-repeating chars', () => {
    let char: string = firstNonrepeatingChar('aabb1ccd1dzeefzf0ggh0h');

    expect(char).toBe('');
  });

  it('correctly handles arbitrary character sequence', () => {
    let char: string = firstNonrepeatingChar('aldsfalhsdfasldhsdflveiewqoqzseurpeqvadspoiewyurpqowvh1792034273947239');

    expect(char).toBe('z');
  });
});

describe("Pascal's Triangle", () => {

  let binomial: TSMT$BinomialCoef = new TSMT$BinomialCoef();

  it('caches row 2 for a default instance', () => {
    expect(binomial.rowNumber).toBe(2);
  });

  it('returns empty row for invalid numeric input', () => {
    let crapola: any = 'abc';

    expect(binomial.getRow(crapola).length).toBe(0);
  });

  it('returns empty row for negative row value', () => {
    expect(binomial.getRow(-1).length).toBe(0);
  });

  it('returns zero for binomial coefficient with invalid inputs #1', () => {
    let morecrapola: any = 'x';

    expect(binomial.coef(morecrapola, 1)).toBe(0);
  });

  it('returns zero for binomial coefficient with invalid inputs #2', () => {
    let evenmorecrapola: number = 1/0;

    expect(binomial.coef(2, evenmorecrapola)).toBe(0);
  });

  it('returns correct third row', () => {
    let row: Array<number> = binomial.getRow(2);
    expect(arrCompare(row, [1,2,1])).toBe(true);
  });

  // iterate forward a couple rows
  it('returns correct sixth row', () => {
    let row: Array<number> = binomial.getRow(5);
    expect(arrCompare(row, [1, 5, 10, 10, 5, 1])).toBe(true);
  });

  // forward, then reverse
  it('does correct forward/reverse recursion row #1', () => {
    let row: Array<number> = binomial.getRow(7);
    expect(arrCompare(row, [1, 7, 21, 35, 35, 21, 7, 1])).toBe(true);

    row = binomial.getRow(6);
    expect(arrCompare(row, [1, 6, 15, 20, 15, 6, 1])).toBe(true);
  });

  // one more time
  it('does correct forward/reverse recursion row #2', () => {
    let row: Array<number> = binomial.getRow(12);
    expect(arrCompare(row, [1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1])).toBe(true);

    row = binomial.getRow(10);
    expect(arrCompare(row, [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1])).toBe(true);
  });

  // binomial coefficients, same row - symmetry check
  it('does correct binomial coef. calc in same row #1', () => {
    let coef: number = binomial.coef(10, 2);
    expect(coef).toBe(45);

    coef = binomial.coef(10, 5);
    expect(coef).toBe(252);

    coef = binomial.coef(10, 8);
    expect(coef).toBe(45);
  });

  // one more time
  it('does correct binomial coef. calc in same row #2', () => {
    let coef: number = binomial.coef(19, 5);
    expect(coef).toBe(11628);

    coef = binomial.coef(19, 10);
    expect(coef).toBe(92378);

    coef = binomial.coef(19, 14);
    expect(coef).toBe(11628);
  });
});

describe('One-Line Functions', () => {

  it('correctly reverses characters in a string', () => {
    let result: string = reverseChars('TORTXOF EKIM AHPLA')
    expect(result).toBe('ALPHA MIKE FOXTROT');   // which is what I will say if you ever ask me this in an interview
  });

  it('correctly extracts initials from a name', () => {
    let result: string = initials("james thomas armstrong");
    expect(result).toBe("JTA");
  });

  it('correctly extracts initials from first name only', () => {
    let result: string = initials("james");
    expect(result).toBe("J");
  });

  it('correctly extracts initials from a name and adds delimiter between initials', () => {
    let result: string = initials("james thomas armstrong", ".");
    expect(result).toBe("J.T.A");
  });

  it('correctly pads a string to the left # 1', () => {
    let result: string = padLeft("this is a string", 2);
    expect(result).toBe("  this is a string");
  });

   it('correctly pads a string to the left # 2', () => {
    let result: string = padLeft("this is a string", 0);
    expect(result).toBe("this is a string");
  });

  it('correctly pads a string to the left # 3', () => {
    let result: string = padLeft("this is a string", -3);
    expect(result).toBe("   this is a string");
  });

  it('returns NaN for min value of empty array', () => {
    let result: number = minValue([]);
    expect(isNaN(result)).toBeTruthy();
  });

  it('returns proper minimum value for an array of numbers', () => {
    let result: number = minValue([2.5, -1.7, 1.0, 3.6, 1.4, 0.25, 10.0]);
    expect(result).toBe(-1.7);
  });

  it('returns NaN for max value of empty array', () => {
    let result: number = maxValue([]);
    expect(isNaN(result)).toBeTruthy();
  });

  it('returns proper maximum value for an array of numbers', () => {
    let result: number = maxValue([2.5, -1.7, 1.0, 3.6, 1.4, 0.25, 10.0]);
    expect(result).toBe(10.0);
  });

  it('returns false for all greater than an empty array', () => {
    let result: boolean = allGreaterThan([], 0);
    expect(result).toBeFalsy();
  });

  it('returns true for all greater a supplied value', () => {
    let result: boolean = allGreaterThan([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], 0);
    expect(result).toBeTruthy();
  });

  it('returns false for all greater than a supplied value', () => {
    let result: boolean = allGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 6.0], 10);
    expect(result).toBeFalsy();
  });

  it('returns all array elements greater than a supplied value', () => {
    let result: Array<number> = getAllGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 60.0], 10);
    expect(result.length).toBe(3);
    expect(result[0]).toBe(20);
    expect(result[1]).toBe(40);
    expect(result[2]).toBe(60);
  });

  it('returns -1 for no index of array element greater than a supplied value', () => {
    let result: number = indexFirstGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 6.0], 100);
    expect(result).toBe(-1);
  });

  it('returns correct index for first array element greater than a supplied value', () => {
    let result: number = indexFirstGreaterThan([1.0, 20.0, 3.0, 40.0, 5.0, 60.0], 25);
    expect(result).toBe(3);
  });
});

describe('Minimize worst-case complexity', () => {

  let scan: ArrayScan = new ArrayScan();
  let f: Function = (a: number): boolean => {return true;};

  it('returns -1 for an empty array', () => {
    let result: number = scan.scanArray([], f);
    expect(result).toBe(-1);
  });

  it('returns 0 for an singleton array that satisfies criteria', () => {
    let f: Function     = (a: number): boolean => {return a > 0};
    let result: number  = scan.scanArray([1.0], f);
    let steps: number   = scan.steps;
    let numTrue: number = scan.numTrue;

    expect(result).toBe(0);
    expect(steps).toBe(1);
    expect(numTrue).toBe(1);
  });

  it('returns -1 for an singleton array that does not satisfiy criteria', () => {
    let f: Function    = (a: number): boolean => {return a == 0};
    let result: number = scan.scanArray([1.0], f);

    expect(result).toBe(-1);
  });

  it('returns correct results for two-element array', () => {
    let f: Function    = (a: number): boolean => {return a > 0};
    let result: number = scan.scanArray([0.0, 1.0], f);
    expect(result).toBe(1);

    result = scan.scanArray([1.0, 2.0], f);
    expect(result).toBe(0);

    result = scan.scanArray([-1.0, 0.0], f);
    expect(result).toBe(-1);
  });

  it('returns correct results for three-element array', () => {
    let f: Function      = (a: number): boolean => {return a > 1000};
    let a: Array<number> = makeArray(3);
    let result: number   = scan.scanArray(a, f);
    expect(result).toBe(-1);
    expect(scan.k).toBe(2);
    expect(scan.steps).toBe(2);
  });

  it('returns correct results for four-element array', () => {
    let f: Function      = (a: number): boolean => {return a > 1};
    let a: Array<number> = makeArray(4);
    let result: number   = scan.scanArray(a, f);
    expect(result).toBe(2);
    expect(scan.k).toBe(3);
    expect(scan.steps).toBe(3);
  });

  it('returns correct results for five-element array', () => {
    let f: Function      = (a: number): boolean => {return a > 3};
    let a: Array<number> = makeArray(5);
    let result: number   = scan.scanArray(a, f);
    expect(result).toBe(4);
    expect(scan.k).toBe(3);
    expect(scan.steps).toBe(3);
    expect(scan.numTrue).toBe(1);
  });

  it('returns correct results for ten-element array', () => {
    let f: Function      = (a: number): boolean => {return a > 1};
    let a: Array<number> = makeArray(10);
    let result: number   = scan.scanArray(a, f);
    expect(result).toBe(2);
    expect(scan.k).toBe(4);
    expect(scan.steps).toBe(4);
    expect(scan.numTrue).toBe(2);
  });

  it('returns correct results for twenty-element array', () => {
    let f: Function      = (a: number): boolean => {return a > 3};
    let a: Array<number> = makeArray(20);
    let result: number   = scan.scanArray(a, f);
    expect(result).toBe(4);
    expect(scan.k).toBe(6);
    expect(scan.steps).toBe(6);
    expect(scan.numTrue).toBe(2);

    f      = (a: number): boolean => {return a > 17};
    result = scan.scanArray(a, f);
    expect(result).toBe(18);
    expect(scan.steps).toBe(6);
  });

  it('returns correct results for twenty five-element array', () => {
    let f: Function      = (a: number): boolean => {return a > 23};
    let a: Array<number> = makeArray(25);
    let result: number   = scan.scanArray(a, f);
    expect(result).toBe(24);
    expect(scan.k).toBe(7);
    expect(scan.steps).toBe(7);
    expect(scan.numTrue).toBe(1);
  });

  it('returns correct results for one hundred-element array', () => {
    let f: Function      = (a: number): boolean => {return a > 12};
    let a: Array<number> = makeArray(100);
    let result: number   = scan.scanArray(a, f);
    expect(result).toBe(13);
    expect(scan.k).toBe(14);
    expect(scan.steps).toBe(14);
    expect(scan.numTrue).toBe(1);
  });
});