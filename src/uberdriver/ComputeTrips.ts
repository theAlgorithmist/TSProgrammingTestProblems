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
 * Function to compute the number of consecutive five-star trips required to restore an Uber driver's rating to at least its prior value after 
 * a single trip in which the rating was less than the current ranking (known as a downrate)
 *
 * Note: The variable names are non-descriptive but relate to the formula presented in the solution)
 *
 * @param r : number Current driver rating before downrated trip 
 * @param t : number Rating received on current trip (Integer, must be less than the current rating)
 * 
 * @return number - integer number of consecutive five-star trips required to restore the driver rating to at least its value before the single downrated trip.
 * If the driver is already rated 5-star, there is no number of 5-star trips that can restore the rating since 5 is the highest single-trip rating.  The single downrate
 * will always keep the rating just below 5.0 no matter how many future 5-star trips are awarded.  Infinity is returned in this case to enable more predictable
 * testing (i.e do not allow NaN to be computed)
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export function tripCount(r: number, t: number): number 
 {
   if (isNaN(r) || !isFinite(r))
     return 0;

   if (isNaN(t) || !isFinite(t))
     return 0;

   r = Math.abs(r);
   t = Math.round( Math.abs(t) );

   t = Math.max(1, t);
   r = Math.min(5, r);

   if( t > r )
     return 0;  // there is no downrating

   // since 5 is the maximum possible rating, there is no way to restore exactly 5.0 or better once there is a downrate since 5-star is the maximum possible
   // rating for a single trip
   if (r == 5)
     return Infinity;

   return Math.ceil( (r-t)/(5-r) );
 }
