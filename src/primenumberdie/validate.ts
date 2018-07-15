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
 * Compute frequency stats for a simulated roll of a k-sided die using a 5-sided die as a base.  This can be used for
 * informal validation of uniformity
 *
 * @param {ICoef} model Two-roll model (set of coefficients)
 *
 * @param {number} k Number of faces on the hypothetical die
 *
 * @returns {Array} Frequency counts in [1,k] based on a set number of trials, in order, i.e. frequency for 1, 2, 3, ... k
 *
 * @author Jim Armstrong
 * @version 1.0
 */

import {simulateRoll } from "./simulate";
import {simulateRoll2} from "./simulate";
import {ICoef        } from "./getCoefs";

export function validate(model: ICoef, k: number): Array<number>
{
  // the usual suspects ...
  if (!model || k === undefined || k == null || isNaN(k)) {
    return [];
  }

  if (k < 6 || k > 25) {
    return [];
  }

  // frequency counts
  const counts: Map<number, number> = new Map<number, number>();
  const limit: number               = 100000;
  let roll: number;
  let i: number;

  // initialize
  for (i = 1; i <= k; ++i) {
    counts.set(i,0);
  }

  let value: number;

  for (i = 0; i < limit; ++i)
  {
    roll  = simulateRoll(model, k);
    // roll  = simulateRoll2(k);  // alternative for more consistent results

    value = counts.get(roll);

    counts.set(roll, value+1);
  }

  const result: Array<number>                      = new Array<number>();
  let iterable: IterableIterator<[number, number]> = counts.entries();

  let entry: Object;

  // load counts into return array
  for (i = 1; i <= k; ++i)
  {
    entry = iterable.next();
    value = entry['value'][1];

    result.push(value);
  }

  return result;
}