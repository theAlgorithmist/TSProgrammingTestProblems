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
     * Function to multiply an integer by the fixed value, 321, without using loops, multiply, or divide operator
     *
     * @param value : string or number - Input number which is presumed an integer for purposes of this example and will be converted to an integral
     * value.  Strings are allowed so that "17" could be allowed from an input control with 'text' attribute.  So, we will attempt to coerce to input
     * to a number before processing.
     *
     * @return number - integer input value multiplied by 321.  Note that for extremely large inputs, there is a possibility of overflow.  Returns NaN
     * for invalid inputs.
     *
     * @author Jim Armstrong (www.algorithmist.net)
     *
     * @version 1.0
     */
    function multiply321(value) {
        var testValue = typeof value === 'string' ? parseFloat(value) : value;
        if (isNaN(+testValue) || !isFinite(testValue))
            return NaN;
        // extract an integer from the input
        var input = Math.round(testValue);
        // x * 321 = x + (x+x)*10 + (x+x+x)*10^2     In binary, 10 = 1010 (2^1 + 2^3) and 100 = 1100100 (2^2 + 2^5 + 2^6)
        var twoX = input + input;
        var threeX = input + twoX;
        // from above, (x+x)*10 = (x+x)*(2^1 + 2^3) and (x+x+x)*10^2 = (x+x+x)*(2^2 + 2^5 + 2^6)
        // KISS
        var twoX_1 = twoX << 1;
        var twoX_2 = twoX << 3;
        twoX = twoX_1 + twoX_2;
        var threeX_1 = threeX << 2;
        var threeX_2 = threeX << 5;
        var threeX_3 = threeX << 6;
        threeX = threeX_1 + threeX_2 + threeX_3;
        return input + twoX + threeX;
    }
    exports_1("multiply321", multiply321);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=Multiply321.js.map