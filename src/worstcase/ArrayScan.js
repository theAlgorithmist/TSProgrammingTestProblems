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
    var ArrayScan;
    return {
        setters:[],
        execute: function() {
            /**
             * Implement array scan to find first index that meets the condition specified in the minimize worst-case complexity problem.  A class is implemented so that
             * class variables may be used to record side statistics and it is used as a simulator.  A production implementation could be extracted into a couple exported functions.
             *
             * @author Jim Armstrong (www.algorithmist.net)
             *
             * @version 1.0
             */
            ArrayScan = (function () {
                function ArrayScan() {
                    this._steps = 0; // number of steps or function tests required to locate the specified array index
                    this._numTrue = 0; // number of function tests that return true;
                    this._k = 0; // initial interval width
                    this.__reset();
                }
                Object.defineProperty(ArrayScan.prototype, "steps", {
                    /**
                     * Access the number of steps in the scan
                     *
                     * @return number Total number of steps required to find the specified index (or show that none exists)
                     */
                    get: function () {
                        return this._steps;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ArrayScan.prototype, "numTrue", {
                    /**
                     * Access the number of true function evaluations (should never be more than two)
                     */
                    get: function () {
                        return this._numTrue;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ArrayScan.prototype, "k", {
                    /**
                     * Access the initial interval width
                     *
                     * @return number Initial interval width
                     */
                    get: function () {
                        return this._k;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Return the first array index that meets the criteria stated in the problem
                 *
                 * @param a: Array<number> Array of numbers that comprises the test data
                 *
                 * @param f: Function Function that takes one numerical argument and returns true or false depending on whether or not the test condition is met: note that once f returns true
                 * for index j, it must return true for all i = j+1, ... n-1, where n is the array length.
                 *
                 * @return number Zero-based index of the first array element for which f(a[j]) is true or -1 if no such index exists.
                 */
                ArrayScan.prototype.scanArray = function (a, f) {
                    this.__reset();
                    var n = a.length;
                    var result = false;
                    // simple cases
                    if (n == 0)
                        return -1;
                    if (n == 1) {
                        result = f(a[0]);
                        if (result)
                            this._numTrue = 1;
                        this._steps = 1;
                        return result ? 0 : -1;
                    }
                    if (n == 2) {
                        var index = -1;
                        result = f(a[1]);
                        this._steps++;
                        if (result) {
                            this._numTrue++;
                            index = 1;
                        }
                        else
                            return -1;
                        result = f(a[0]);
                        this._steps++;
                        if (result) {
                            this._numTrue++;
                            index = 0;
                        }
                        return index;
                    }
                    var k = this.__stepSize(n);
                    this._k = k;
                    var current = k - 1;
                    var prev = -1;
                    while (current <= n - 1) {
                        // check endpoint of next interval
                        result = f(a[current]);
                        this._steps++;
                        if (result) {
                            this._numTrue++;
                            var index = (current - 1 >= prev + 1) ? this.__linearScan(a, prev + 1, current - 1, f) : -1;
                            return index != -1 ? index : current;
                        }
                        // next interval
                        k--;
                        k = Math.max(1, k);
                        prev = current;
                        current += k;
                    }
                    return -1;
                };
                // compute the initial step size for the constant, decreasing step-size model
                ArrayScan.prototype.__stepSize = function (n) {
                    // n > 2
                    var i = Math.floor(0.5 * (Math.sqrt(1 + 8 * n) - 1));
                    return 0.5 * (i * (i + 1)) >= n ? i : i + 1;
                };
                // reset stats variables
                ArrayScan.prototype.__reset = function () {
                    this._steps = 0;
                    this._numTrue = 0;
                    this._k = 0;
                };
                // linearly scan an interval from the start to the end index
                ArrayScan.prototype.__linearScan = function (a, i1, i2, f) {
                    var i;
                    for (i = i1; i <= i2; ++i) {
                        this._steps++;
                        if (f(a[i])) {
                            this._numTrue++;
                            return i;
                        }
                    }
                    return -1;
                };
                return ArrayScan;
            }());
            exports_1("ArrayScan", ArrayScan);
        }
    }
});
//# sourceMappingURL=ArrayScan.js.map