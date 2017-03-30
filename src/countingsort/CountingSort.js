/**
 * Copyright 2017 Jim Armstrong (www.algorithmist.net)
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
"use strict";
/**
 * Typescript implementation of counting sort
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
/**
 * Sort an array of non-negative integers given bounding information.  Lower bound of zero is the default and upper bound is optional.  Not providing upper bound
 * will increase run time.  And, lest you think this is unique, I employed a tried-and-true strategy used by all experienced programmers ... I ripped it from Wikipedia :)
 *
 * @param input: Array<number> Input array of unsorted, non-negative integers
 *
 * @param min: number Minimum value
 * @default 0
 *
 * @param max: number Maximum value of the array, which could be an upper bound, not the actual maximum.  This input is optional, but not providing
 * the value will increase run-time of the sort
 *
 * @return Array<number> (stable) sorted array of integers.
 */
function countingSort(input, min, max) {
    if (min === void 0) { min = 0; }
    if (input == null || input == undefined || !input.length)
        return [];
    var len = input.length;
    if (len == 0)
        return [];
    var i;
    if (max == undefined) {
        max = input[0];
        for (i = 1; i < len; ++i)
            max = input[i] > max ? input[i] : max;
    }
    var output = [];
    // histogram of each input number
    var count = new Array(max).fill(0);
    for (i = 0; i < len; ++i)
        count[input[i]]++;
    // prefix sums
    var sum = 0;
    var previous;
    for (i = min; i <= max; ++i) {
        previous = count[i];
        count[i] = sum;
        sum += previous;
    }
    // store in output array
    for (i = 0; i < len; ++i) {
        output[count[input[i]]] = input[i];
        count[input[i]] += 1;
    }
    return output;
}
exports.countingSort = countingSort;
//# sourceMappingURL=CountingSort.js.map