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
 * Compute the number of 'Fibonacci jumps' in miles required to get near a specified distance that for purposes of
 * testing will be the average distance between the earth and moon.  This function computes the closest jump point
 * either before or after the destination point.  After all, if NASA is smart enough to invent Fibonacci Warp Drive,
 * they should have an ion engine or something to get a ship from a jump point to a position between jump points :)
 *
 * Note that all computations are performed with the presumption that a reduced forward and inverse form of Binet's
 * formula can be applied.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import {f_arg1, fibonacci} from "../fibonacci/Fibonacci";

export const log_5_half: number = 0.5*Math.log(5);
export const log_ratio: number  = Math.log(f_arg1);

/**
 * Return n-th Fibonacci jump or number (in miles) that positions a space ship as close as possible to the specified
 * distance, within limitations imposed by ignoring the second term in Binet's formula (see fibonacci function).
 *
 * Note that n-th Fibonacci number presumes zero-based indexing.
 *
 * @param {number} dist Distance in miles
 *
 * @returns {number} N-th Fibonacci number such that {N <= dist}.  From this number, you can apply your own interpretation
 * of 'number of jumps', i.e. is the first jump zero followed by two jumps to get to 1 mile?  Takes that warp drive a few
 * jumps to really get started ... typical government operation :)
 */
export function computeJump(dist: number): number
{
  if (isNaN(dist) || !isFinite(dist)) {
    return 0.0;
  }

  if (dist <= 0) {
    return 0;
  }

  // inverse approximation to Binet's formula to find the 'near' jump point, i.e. fibonacci number lower than or equal
  // to the input distance - note that a round would be required to get the actual inverse; this result could be one lower,
  // depending on how the rounding works out.
  const near: number = Math.floor( (log_5_half + Math.log(dist))/log_ratio );

  // get the actual distance for this and the next Fibonacci jump in sequence
  let d1: number = fibonacci(near);
  let d2: number = fibonacci(near+1);

  // deltas from the target distance
  d1 = Math.abs(dist-d1);
  d2 = Math.abs(d2-dist);

  // NOTE:  If you are strictly counting jumps, then you could compensate for the first jump being zero and one is repeated
  // in the Fibonacci sequence, i.e. 0, 1, 1, 2, 3, 5, 8 ...  Or, you could say that the first jump begins at one - all a
  // matter of how the question is interpreted.
  return d1 <= d2 ? near : near+1;
}
