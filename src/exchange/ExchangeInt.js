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
     * Function to illustrate exchange of integer values without using a temporary variable
     *
     * @param a : number - Integer number
     * @param b : number - Integer number
     *
     * return Object - 'a' property contains the result of interchanging a & b, i.e. the second input.  The 'b' property contains the first input.  The return is
     * only for testing convenience and note that the method will not work with non-numeric values.  The exchange may not be exact due to rounding errors if used
     * with certain floating-point values.
     *
     * @author Jim Armstrong (www.algorithmist.net)
     *
     * @version 1.0
     */
    function exchangeInt(a, b) {
        // no testing on inputs for this simple illustration, although feel free to add it
        var localA = a + b;
        var localB = localA - b;
        localA -= localB;
        return { a: localA, b: localB };
    }
    exports_1("exchangeInt", exchangeInt);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=ExchangeInt.js.map