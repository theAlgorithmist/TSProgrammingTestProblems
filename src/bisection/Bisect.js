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
    var BisectInterval;
    return {
        setters:[],
        execute: function() {
            /**
             * Interval bisection - used to isolate a single, real root of a continuous function inside a small interval (as a preliminary to pass onto a root-finder)
             *
             * @author Jim Armstrong (www.algorithmist.net)
             *
             * @version 1.0
             */
            BisectInterval = (function () {
                function BisectInterval() {
                }
                /**
                 * Bisect the supplied function over the input interval [a,b]
                 *
                 * @param a : number left endpoint of interval
                 *
                 * @param b : number right endpoint of interval
                 *
                 * @param f : Function (takes a single number, x, and returns a number - the mathematical function whose real root is desired)
                 *
                 * @return Object 'left' property contains the left endpoint of the final interval.  'right' property contains the right endpoint of the final interval.  The
                 * boolean 'root' property indicates whether or not a potential (real) root exists in the final interval.
                 *
                 * There is only minimial error-checking for performance reasons.
                 */
                BisectInterval.bisect = function (a, b, f) {
                    var left = Math.min(a, b);
                    var right = Math.max(a, b);
                    var result = this.__bisect(left, right, f);
                    return result ? { left: +result['left'], right: +result['right'], root: true } : { left: a, right: b, root: false };
                };
                BisectInterval.__bisect = function (left, right, f) {
                    if (Math.abs(right - left) <= this.EPS)
                        return null;
                    if (f(left) * f(right) < 0)
                        return { left: left, right: right };
                    else {
                        var middle = 0.5 * (left + right);
                        var leftInterval = this.__bisect(left, middle, f);
                        if (leftInterval != null)
                            return leftInterval;
                        var rightInterval = this.__bisect(middle, right, f);
                        if (rightInterval != null)
                            return rightInterval;
                    }
                    return null;
                };
                BisectInterval.EPS = 1.0; // stop when interval width is this value or less
                return BisectInterval;
            }());
            exports_1("BisectInterval", BisectInterval);
        }
    }
});

//# sourceMappingURL=Bisect.js.map
