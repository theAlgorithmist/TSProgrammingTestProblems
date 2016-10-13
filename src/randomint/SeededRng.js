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
    var SeededRng;
    return {
        setters:[],
        execute: function() {
            /**
             * Typescript Math Toolkit - A 'game quality' implementation of a Park Miller LCG with seeding.  Use of seeding allows a repeatable sequence to be
             * generated for debugging purposes.  The complete algorithm is detailed at http://www.firstpr.com.au/dsp/rand31/
             *
            
             * @author Jim Armstrong
             *
             * @version 1.0
             */
            SeededRng = (function () {
                /**
                 * Construt a new SeededRng
                 *
                 * @param seed: Number - Initial (integer) seed value, which should be in the interval [1, 0X7FFFFFFE]
                 *
                 */
                function SeededRng(seed) {
                    this._seed = 1; // seed used for this RNG
                    if (isNaN(seed) || !isFinite(seed))
                        seed = 1;
                    seed = Math.max(1, seed);
                    this._seed = seed;
                }
                /**
                 * returns the next pseudo-random iterate
                 *
                 * @return number Next iterate in sequence as an unsigned integer
                 *
                 */
                SeededRng.prototype.next = function () {
                    return this.__generator();
                };
                /**
                   * Return the next pseudo-random iterate in [0,1)
                   *
                   * @return Number - next number in sequence in the interval [0,1)
                   */
                SeededRng.prototype.asNumber = function () {
                    return this.__generator() / 2147483647;
                };
                // internal method - generator function, new = (16807*old * 16807) mod (2^31 - 1)
                SeededRng.prototype.__generator = function () {
                    // update seed
                    this._seed = (16807 * this._seed) % 2147483647;
                    return this._seed;
                };
                return SeededRng;
            }());
            exports_1("SeededRng", SeededRng);
        }
    }
});
//# sourceMappingURL=SeededRng.js.map