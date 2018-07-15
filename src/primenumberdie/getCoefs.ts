/**
 * Copyright 2018 Jim Armstrong (www.algorithmist.net)
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

export interface ICoef
{
  n: number;
  a: number;
  c: number;
}

/**
 * Given a constant k > 5, return coefficients n, a and c for a two rolls of a 5-sided die.  The coefficients satisfy
 * a >= 1, c >= 1, and 1 >= [1,5]a + [1,5] - c = 25 >= nk
 *
 * @param {number} k number of sides in the hypothetical multi-side die
 *
 * @returns {ICoef} Computed coefficients or zeros if inputs are invalid or no solution was found with the supplied
 * inputs or k exceed 25
 *
 * @author Jim Armstrong
 * @version 1.0
 */
export function getCoefs(k: number): ICoef
{
  if (k === undefined || k == null || isNaN(k))
  {
    // game over
    return {n: 0, a: 0, c: 0};
  }

  if (k < 6 || k > 25)
  {
    // homey don't play that
    return {n: 0, a: 0, c: 0};
  }

  // max-n that meets the upper inequality
  const n: number = Math.floor(25/k);

  return {n: n, a: 5, c: 5};
}