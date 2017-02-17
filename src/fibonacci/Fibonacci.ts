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
 * Function to generate the n-th value of the Fibonacci sequence, f(n) = f(n-1) + f(n-2), f(0) = 0, f(1) = 1.  This version uses a generating function
 * for the sequence (aka Binet's formula) in lieu of recursion.  Returns zero for invalid arguments.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export const sqrt_5: number     = Math.sqrt(5.0);
 export const sqrt_5_inv: number = 1.0/sqrt_5;
 export const f_arg1: number     = 0.5*(1.0 + sqrt_5);
 export const f_arg2: number     = 0.5*(1.0 - sqrt_5);

/**
 * Return the n-th value of the Fibonacci sequence, 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 *
 * @param n: number Zero-based index of the value to return, i.e. n = 0 for first value in sequence, n = 1 for second value, and so forth (n >= 0)
 *
 * @return number - n-th value of the Fibonacci sequence or zero for invalid arguments
 */
 export function fibonacci(n: number): number 
 {
   if (isNaN(n) || !isFinite(n))
     return 0.0;

   if (n <= 0)
     return 0;

   // note that for small n the two Math.pow operations are less efficient - also, for larger n, you will generate numbers too large to be represented
   // as machine numbers - we have to round due to possible roundoff error in the generating-function computation.  This illustrates some of the things
   // you might have to think about in production applications.
   //
   // Alternative to requiring arbitrary-precision floating-point is a good integer algorithm - best I've found is here: https://bosker.wordpress.com/2011/07/27/computing-fibonacci-numbers-using-binet%E2%80%99s-formula/
   return Math.round( sqrt_5_inv*(Math.pow(f_arg1,n) - Math.pow(f_arg2,n)) );
 }
