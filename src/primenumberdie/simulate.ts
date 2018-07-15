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
 * Simulate the roll of a k-sided (5 < k < 26) die using two rolls of a five-sided die.  The Tyepscript Math Toolkit
 * RandomIntInRange class is used to generate a pseudorandom integer in [1,5].
 *
 * @param {ICoef} model Two-roll model (set of coefficients)
 *
 * @param {number} k Number of faces on the hypothetical die
 *
 * @returns {number} Number in the range [1,k] or 0 if inputs are invalid/out of range
 *
 * @author Jim Armstrong
 * @version 1.0
 */

import { RandomIntInRange } from "../randomint/RandomIntInRange";
import { ICoef            } from "./getCoefs";

const generator: RandomIntInRange = new RandomIntInRange(1, 5, 104113);

export function simulateRoll(model: ICoef, k: number): number
{
  if (!model || k === undefined || k == null || isNaN(k)) {
    return 0;
  }

  if (k < 6 || k > 25) {
    return 0;
  }

  // let roll: number = model.a*generator.generate(true) + generator.generate(true) - model.c;
  let roll: number = model.a*RandomIntInRange.generateInRange(1,5) + RandomIntInRange.generateInRange(1,5) - model.c;

  // test if number is within the integer multiple of k
  if (roll <= model.n*k)
  {
    // return result mod k plus 1 to compensate for 1-based index
    return (roll%k) + 1;
  }
  else
  {
    // too bad ... try again
    return simulateRoll(model, k);
  }
}

// alternative - compare with generating iterates directly in [1,k]
export function simulateRoll2(k: number): number
{
  return RandomIntInRange.generateInRange(1, k);
}