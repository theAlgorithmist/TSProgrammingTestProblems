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

/**
 * Arrange (sort) an array of numbers so that elements in (zero-based) even-numbered positions are greater than
 * elements in odd-numbered positions.
 *
 * @param {Array<number>} input Input array
 *
 * @returns {Array} Re-arranged array (original array is unaltered)
 *
 * @author Jim Armstrong
 * @version 1.0
 */
export function evenoddsort(input: Array<number>): Array<number>
{
  if (!input) {
    return [];
  }

  let result: Array<number> = new Array<number>();
  const n: number           = input.length;

  // edge cases
  if (n == 0) {
    return result;
  }

  if (n == 1)
  {
    result.push(input[0]);
    return result;
  }

  // copy the input array and sort
  const sorted: Array<number> = input.slice();
  sorted.sort( (a: number, b: number): number => {return b-a} );

  // highest even/odd positions and number of even/odd positions
  const mod: number       = (n-1) % 2;
  const m: number         = Math.ceil(n/2);
  const k: number         = n - m;
  const startEven: number = mod == 0 ? n-1 : n-2;
  const startOdd: number  = mod == 1 ? n-1 : n-2;

  // even pass
  let i: number;
  let j: number = startEven;
  for (i = 0; i < m; ++i )
  {
    result[j] = sorted[i];
    j        -= 2;           // skip odds
  }

  // odd pass
  j = startOdd;
  for (i = 0; i < k; ++i)
  {
    result[j] = sorted[i+m];
    j        -= 2;           // skip evens
  }

  return result;
}