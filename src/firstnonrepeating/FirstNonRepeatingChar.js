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
"use strict";
/**
 * Function to return the first non-repeating character in a string
 *
 * @param inputStr : string Input string
 *
 * @return string : First non-repeating character or null string if there are no non-repeating characters.  Two algorithms are provided; the latter, in particular not
 * worst-case optimal.  String processing is not my strong suit :)
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
// relying on native Map for implementation
function firstNonrepeatingChar(inputStr) {
    var i;
    var count;
    var char;
    var len = inputStr.length;
    // first approach requires two sweeps and its efficiency depends on Map access for character keys.  I have not had a chance to do detailed perf. analysis
    // record repeat counts, i.e. a repeat count of 0 means the char is only used once
    var repeatCount = new Map();
    for (i = 0; i < len; ++i) {
        char = inputStr.charAt(i);
        count = -1;
        if (repeatCount.has(char))
            count = repeatCount.get(char);
        repeatCount.set(char, count + 1);
    }
    // scan the map for first repeat count of zero
    len = repeatCount.size;
    if (len == 0)
        return '';
    var iterable = repeatCount.entries();
    var entry;
    var value;
    for (i = 0; i < len; ++i) {
        entry = iterable.next();
        value = entry['value'];
        if (value[1] == 0)
            return value[0];
    }
    // second approach is simpler and makes repeated use of string indexOf - still O(n^2) but with a small constant
    // for (i=0; i<len; ++i)
    // {
    //   char = inputStr.charAt(i);
    //   // first occurrence must be at current position and no repeats afterwards
    //   if (inputStr.indexOf(char) == i && inputStr.indexOf(char,i+1) == -1)
    //     return char;
    // }
    return '';
}
exports.firstNonrepeatingChar = firstNonrepeatingChar;
//# sourceMappingURL=FirstNonRepeatingChar.js.map