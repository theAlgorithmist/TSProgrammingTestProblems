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
     * Some different ways to compute n!  Experiment and have fun :)
     *
     * @author Jim Armstrong (www.algorithmist.net)
     *
     * @version 1.0
     */
    /**
     * Return the value of n! (note that NUMBER.MAX_VALUE will be exceeded for sufficiently large n)
     *
     * @param n: number Non-negative integer whose factorial value is desired
     *
     * @return number - n! (although no check is currently made for n too large) or zero if n < 0
     */
    function factorial(n) {
        if (isNaN(n) || !isFinite(n))
            return 0.0;
        n = Math.floor(n);
        if (n < 0)
            return 0;
        // 0! = 1 by defintion
        if (n == 0)
            return 1;
        // uncomment whichever approach you wish to experiment with
        // No-loop recursive function
        //return fact(n);
        // old-school with loop
        if (n == 1)
            return 1;
        var f = 1;
        var i;
        for (i = 1; i <= n; ++i)
            f *= i;
        return f;
        // the gamma function is complicated by rounding and approximation error and can be off for n as small as 13 - DO NOT use this in production :)
        //return Math.round( Math.exp(logGamma(n+1)) );
    }
    exports_1("factorial", factorial);
    function fact(n) {
        if (n == 1)
            return 1;
        return fact(n - 1) * n;
    }
    // log-gamma Lanczos approximation ... from Numerical Recipes, of course :)  For performance, the edge case of x=0 is not currently tested
    function logGamma(x) {
        var a = (x - 0.5) * Math.log(x + 4.5) - (x + 4.5);
        var b = 1.0
            + 76.18009173 / x
            - 86.50532033 / (x + 1)
            + 24.01409822 / (x + 2)
            - 1.231739516 / (x + 3)
            + 0.00120858003 / (x + 4)
            - 0.00000536382 / (x + 5);
        return a + Math.log(b * 2.5066282746310002);
    }
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=Factorial.js.map