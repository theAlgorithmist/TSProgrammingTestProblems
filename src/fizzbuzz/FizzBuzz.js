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
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Function to return an array of strings. Each value in the array is either the number corresponding to the one-based array index or 'Fizz' if
     * the index is evenly divisible by 3, 'Buzz' if the index is evenly divisible by 5, and 'FizzBuzz' if the index is evenly divisible by both 3
     * and 5. The array length is 100 and the length, 3, and 5 may be hardcoded.
     *
     * return Array<string> - Array of length 100 with string values assigned according to the above descripion.
     *
     * @author Jim Armstrong (www.algorithmist.net)
     *
     * @version 1.0
     */
    function fizzBuzz() {
        // this approach trades mutiple sweeps and straight assignment for a single pass with logic and computation (mods)
        var fizzy = new Array();
        // first sweep
        var i;
        for (i = 0; i < 100; ++i)
            fizzy.push((i + 1).toString());
        // second sweep (multiples of 3)
        for (i = 2; i < 100; i += 3)
            fizzy[i] = "Fizz";
        // third sweep (multiples of 5)
        for (i = 4; i < 100; i += 5)
            fizzy[i] = "Buzz";
        // final sweep (multiples of 3 and 5)
        for (i = 14; i < 100; i += 15)
            fizzy[i] = "FizzBuzz";
        return fizzy;
    }
    exports_1("fizzBuzz", fizzBuzz);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=FizzBuzz.js.map