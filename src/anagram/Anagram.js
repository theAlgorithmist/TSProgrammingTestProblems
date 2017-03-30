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
 * Test if two words are anagrams with focus on edge cases and effiency for large strings
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
/**
 * Determine if two words are anagrams - in terms of edge cases, case matters.  For purposes of this example, 'sAw' and 'was' are considered not to be anagrams. Also
 * for purposes of this example, two empty strings are considered not to be anagrams of one another.
 *
 * @param word1: string First word for comparison
 *
 * @param word2: string Second word for comparions
 *
 * @return boolean True if two words are anagrams
 */
function isAnagram(word1, word2) {
    // An alternative to the typical split-sort-join-then-compare approach.  It is likely that two words will not be (case-sensitive) anagrams, so try to prove false 
    // as quickly as possible
    if (word1 == null || word2 == null || word1 == undefined || word2 == undefined)
        return false;
    if (word1.length == 0 || word2.length == 0)
        return false;
    if (word1.length != word2.length)
        return false;
    // if that does not work, then try to prove true as quickly as possible
    if (word1 === word2)
        return true;
    // again, we are eptimizing for the case where false is proven as quickly as possible and that false is the high-probabillity expectation.  This approach can 
    // be effective, but is O(n^2) worst-case
    var len = word1.length;
    var c;
    var i;
    var index;
    for (i = 0; i < len; ++i) {
        c = word1.charAt(i);
        index = word2.indexOf(c);
        if (index == -1)
            return false; // character not found, so no anagram is possible
        else
            word2 = word2.substr(0, index) + word2.substr(index + 1); // remove character just found (handle repeat chars)
    }
    return true;
}
exports.isAnagram = isAnagram;
//# sourceMappingURL=Anagram.js.map