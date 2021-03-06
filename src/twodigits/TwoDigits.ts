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

/**
 * Function to compute the last two digits of a positive integer (not a multiple of 10) and return whether or not removing the last two digits of n^2 results in
 * a perfect square.  This function allows positive, non-multiples of 10 to be constructed instead of entering an arbitrary integer.
 *
 * @param m : number Multiplier of 10, 0, 1, 2, 3, ...  
 * @default 0
 *
 * @param s : number Integer added to create a non-multiple of 10.  Must be in [1,9] and the resulting number, n, is of the form 10*m + s
 * @default 1
 * 
 * @return Object - 'n' property is the square of the constructed number.  'ones' is the last digit (ltr) of the squared number (i.e. the ones place).  'tens'
 * is the next-to-last digit (i.e. tens place).  'square' is a boolen which is true if removing the last two digits of the squared number results in a perfect
 * square.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export function lastTwoDigits(m: number=0, s: number=1): Object 
 {
   if (isNaN(m) || !isFinite(m))
     return {n:0, ones:0, tens:0, square:true};

   if (isNaN(s) || !isFinite(s))
     return {n: 0, ones:0, tens:0, square:true};

   m = Math.round(m);
   s = Math.round(s);
   m = Math.max(0, m);
   s = Math.min(9, s);
   s = Math.max(1, s);

   let n: number          = 10*m + s;
   let value: string      = (n*n).toString();
   let len: number        = value.length;
   let ones: string       = value.charAt(len-1);
   let tens: string       = len == 1 ? "0" : value.charAt(len-2);

   let t: number = +value - 10*(+tens) - (+ones);
   t             = Math.sqrt(t);

   // zero-tolerance here is a bit crude, but workable for an example - never test exact equality when dealing with floating-point numbers
   let isPerfect: boolean = Math.abs( Math.floor(t) - t ) < 0.000000001;
   
   return {n: value, ones: ones, tens: tens, square: isPerfect};
 }
