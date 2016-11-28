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
    var TSMT$BinomialCoef;
    return {
        setters:[],
        execute: function() {
            /**
             * Typescript Math Toolkit: Generate binomial coefficients, either individually or as a single row in Pascal's triangle.  Methods in this class were designed to
             * work best in applications where successive coefficients are generated either in the same row or moving row to row (forward or backward).
             *
             * @author Jim Armstrong (www.algorithmist.net)
             *
             * @version 1.0
             */
            TSMT$BinomialCoef = (function () {
                function TSMT$BinomialCoef() {
                    // row 1 = [1]
                    this.__row = [1, 2];
                    this.__n = 2;
                }
                /**
                 * Generate the binomial coefficient (n k)
                 *
                 * @param n : number - n items
                 * @param k : number - taken k at a time
                 *
                 * @return Int: Binomial coefficient (n k)
                 */
                TSMT$BinomialCoef.prototype.coef = function (n, k) {
                    if (isNaN(n) || !isFinite(n))
                        return 0;
                    if (isNaN(n) || !isFinite(n))
                        return 0;
                    if (n < 0 || k < 0)
                        return 0;
                    if (k > n)
                        return 0;
                    else if (k == n)
                        return 1;
                    if (this.__n != n)
                        this.__recurse(n);
                    var j = this.__n % 2;
                    var e = (this.__n + 2 - j) / 2;
                    return (k >= e) ? this.__row[n - k] : this.__row[k];
                };
                Object.defineProperty(TSMT$BinomialCoef.prototype, "rowNumber", {
                    /**
                     * Access the most recently generated row number
                     *
                     * @return number Zero-based index of most recently generated row
                     */
                    get: function () {
                        return this.__n;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Return the n-th full row of Pascal's triangle
                 *
                 * @param n:uint - Index of desired row (beginning at zero)
                 *
                 * @return Array: Full n-th (one-based) row of Pascal's triangle
                 *
                 */
                TSMT$BinomialCoef.prototype.getRow = function (n) {
                    if (isNaN(n) || !isFinite(n))
                        return [];
                    if (n < 0)
                        return [];
                    switch (n) {
                        case 0:
                            return [1];
                        case 1:
                            return [1, 1];
                        case 2:
                            return [1, 2, 1];
                        default:
                            var newRow = (n == this.__n) ? this.__fillOut() : this.__recurse(n);
                            return newRow;
                    }
                };
                // internal method - fill out nonsymmetric portion of current row & return reference to full array
                TSMT$BinomialCoef.prototype.__fillOut = function () {
                    var i;
                    var j = this.__n % 2;
                    var e = (this.__n + 2 - j) / 2;
                    var arr = this.__row.slice(0, e + 1);
                    if (j == 0) {
                        for (i = 0; i < e - 1; ++i)
                            arr[e + i] = arr[e - i - 2];
                    }
                    else {
                        for (i = 0; i < e; ++i)
                            arr[e + i] = arr[e - i - 1];
                    }
                    return arr;
                };
                // internal method - recursively generate desired row from the current row
                TSMT$BinomialCoef.prototype.__recurse = function (r) {
                    // forward or reverse?
                    if (r > this.__n)
                        this.__forward(r);
                    else {
                        if ((r - 2) <= (this.__n - r)) {
                            // reset and move forward
                            this.__row[1] = 2;
                            this.__n = 2;
                            this.__forward(r);
                        }
                        else
                            this.__reverse(r); // recurse backward
                    }
                    this.__n = r;
                    return this.__fillOut();
                };
                // private method - recurse forward
                TSMT$BinomialCoef.prototype.__forward = function (r) {
                    var i;
                    var j;
                    var k;
                    var e;
                    var h;
                    var val;
                    for (i = this.__n + 1; i <= r; ++i) {
                        // how many elements in the nonsymmetric portion of the current row?
                        j = i % 2;
                        e = (i + 2 - j) / 2;
                        h = this.__row[0];
                        if (j == 1) {
                            for (k = 1; k < e; ++k) {
                                val = this.__row[k] + h;
                                h = this.__row[k];
                                this.__row[k] = val;
                            }
                        }
                        else {
                            for (k = 1; k < e - 1; ++k) {
                                val = this.__row[k] + h;
                                h = this.__row[k];
                                this.__row[k] = val;
                            }
                            this.__row[e - 1] = 2 * h;
                        }
                    }
                };
                // private method - recurse backwards
                TSMT$BinomialCoef.prototype.__reverse = function (r) {
                    var i;
                    var j;
                    var k;
                    var e;
                    for (i = this.__n - 1; i >= r; i--) {
                        // how many elements in the nonsymmetric portion of the current row?
                        j = i % 2;
                        e = (i + 2 - j) / 2;
                        for (k = 1; k < e; ++k)
                            this.__row[k] = this.__row[k] - this.__row[k - 1];
                    }
                };
                return TSMT$BinomialCoef;
            }());
            exports_1("TSMT$BinomialCoef", TSMT$BinomialCoef);
        }
    }
});
//# sourceMappingURL=BinomialCoef.js.map