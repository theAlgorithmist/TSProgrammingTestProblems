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
 * Compute the least common multiple of two integers
 *
 * @param {number} n1 First integer
 *
 * @param {number} n2 Second integer
 *
 * @returns {number} LCM of n1 and n2.  Although numbers are tested for validity, integrality is not forced; it is
 * the caller's responsibility to ensure integer inputs.  note that the result is ALWAYS positive.
 */
export function lcm(n1: number, n2: number): number
{
  if (isNaN(n1) || !isFinite(n1))
    return 0;

  if (isNaN(n2) || !isFinite(n2))
    return 0;

  n1 = n1 >= 0 ? n1 : -n1;
  n2 = n2 >= 0 ? n2 : -n2;

  let theGcd: number = gcd(n1, n2);
  return theGcd == 0 ? 0 : Math.floor((n1 * n2) / theGcd);
}

/**
 * Compute the greatest common divisor of two integers
 *
 * @param {number} n1 First integer
 *
 * @param {number} n2 Second integer
 *
 * @returns {number} GCD of n1 and n2.  Although numbers are tested for validity, integrality is not forced; it is
 * the caller's responsibility to ensure integer inputs
 *
 */
export function gcd(n1: number, n2: number): number
{
  if (isNaN(n1) || !isFinite(n1))
    return 0;

  if (isNaN(n2) || !isFinite(n2))
    return 0;

  n1 = Math.floor( Math.abs(n1) );
  n2 = Math.floor( Math.abs(n2) );

  let a = Math.max(n1, n2);
  let b = Math.min(n1, n2);
  let r = 0;

  // Non-recursive Euclid's algorithm
  // if a > b, swap a, b
  // r = a mod b
  // while r > 0
  // a = b
  // b = r

  while (b > 0)
  {
    r = a % b;
    a = b;
    b = r;
  }

  return Math.floor(a);

  // recursive version would be implemented along these lines
  //
  // export function gcd(m: number, n: number): number
  //
  // if (n == 0) {
  //   return m;
  // }
  //
  // return gcd(n, m % n);
}

/**
 * Extended Euclid Algorithm; compute integers x and y such that ax + by = gcd(a,b)
 *
 * @param {number} a First integer
 *
 * @param {number} b Second integer
 *
 * @returns {Object} 'gcd' property contains the gcd(a,b).  'x' property contains integer, x value in above formula.
 * 'y' property contains y value in above formula.  Although numbers are tested for validity, integrality is not
 * forced; it is the caller's responsibility to ensure integer inputs
 */
export function extEuclid(a: number, b: number): Object
{
  if (isNaN(a) || !isFinite(b))
    return {};

  if (isNaN(a) || !isFinite(b))
    return {};

  // This recurrence can be found pretty much anywhere on the internet; q represents quotients and r represents
  // remainders.  The s and t values converge to the x and y return values.  Nothing new under the sun ...

  let rim2: number = a;
  let rim1: number = b;

  // edge cases
  if (b == 0) {
    return {gcd: rim2, x: 1, y: 0};
  }

  if (a == 0) {
    return {gcd: b, x: 0, y: 1};
  }

  let qim2: number = 0;
  let qim1: number = 0;

  let sim2: number = 1;
  let sim1: number = 0;

  let tim2: number = 0;
  let tim1: number = 1;

  let qi: number;
  let si: number;
  let ti: number;
  let ri: number = -1;

  while (ri >= -1)
  {
    qi = Math.floor(rim2/rim1);
    ri = rim2 - qi*rim1;
    si = sim2 - qi*sim1;
    ti = tim2 - qi*tim1;

    if (ri == 0) {
      break;
    }

    rim2 = rim1;
    rim1 = ri;

    qim2 = qim1;
    qim1 = qi;

    sim2 = sim1;
    sim1 = si;

    tim2 = tim1;
    tim1 = ti;
  }

  return {gcd: rim1, x: sim1, y: tim1};
}