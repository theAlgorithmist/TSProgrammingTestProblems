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
 * Function to compute the minimum, maximum, and min-value in between min/max NOT in an array of integers WITHOUT using Math.min, Math.max, sorting, or a loop.
 *
 * @param values : Array<number> Integers to be tested (data integrity is presumed in this example, so there are no tests for non-numeric and non-integer data)
 * 
 * @return Object 'min' property contains minimum of the set of input integers, 'max' property is the maximum value and 'min2' is the minimum value between
 * min and max NOT in the array.  In the event the inputs are not sparse (i.e. no gaps between integer values), then 'min2' is set to 'min'.  This serves as an easy
 * test of the return values for this edge case.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export function twoMinMax(values: Array<number>): Object 
 {
   if (values.length == 0)
     return {min1:0, min2:0, max:0};

   if (values.length == 1)
     return {min1:values[0], min2:values[0], max:values[0]};

   // reducers was my first thought, so I'm stuck with it :)
   let minInt: number = values.reduce( (min: number, x: number): number => {return x < min ? x : min});
   let maxInt: number = values.reduce( (max: number, x: number): number => {return x > max ? x : max});
   let min2: number   = values.reduce( (min: number, x: number, index: number, arr: any): number => {return (x < min && arr.indexOf(x+1) == -1) ? x+1 : min} );

   // handle a tricky edge case where the min is at the beginning of the array and the array is sparse
   min2 = min2 == minInt && values.indexOf(min2+1) == -1 && minInt < maxInt ? min2+1 : min2;

   return {min1: minInt, min2: min2, max: maxInt};
 }