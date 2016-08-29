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
System.register(['./SeededRng'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SeededRng_1;
    var RandomIntInRange;
    return {
        setters:[
            function (SeededRng_1_1) {
                SeededRng_1 = SeededRng_1_1;
            }],
        execute: function() {
            RandomIntInRange = (function () {
                /**
                 * Construct a new RandomIntInRange
                 *
                 * @param min:number Minium value of range
                 * @default 0
                 *
                 * @param max:number Maximum value of range
                 * @default 1
                 *
                 * @param seed:number Seed value to use if seeded RNG if desired
                 * @default 1
                 */
                function RandomIntInRange(min, max, seed) {
                    if (min === void 0) { min = 0; }
                    if (max === void 0) { max = 1; }
                    if (seed === void 0) { seed = 1; }
                    this.setInterval(min, max);
                    this._seed = Math.abs(seed);
                    this._seed = Math.max(1, this._seed);
                }
                /**
                 * Set a new interval
                 *
                 * @param min: number New minimum-integer
                 * @param max: number New maximum-integer
                 *
                 * @return Nothing
                 */
                RandomIntInRange.prototype.setInterval = function (min, max) {
                    this._min = isNaN(min) || !isFinite(min) ? this._min : min;
                    this._max = isNaN(max) || !isFinite(max) ? this._max : max;
                    this._min = Math.round(this._min);
                    this._max = Math.round(this._max);
                    if (this._max < this._min) {
                        var tmp = this._min;
                        this._min = this._max;
                        this._max = tmp;
                    }
                    // compensate for endpoint bias
                    this._min -= 0.499;
                    this._max += 0.499;
                    this._delta = this._max - this._min; // delta between max and min
                };
                /**
                   * Generate a pseudo-random integer in a new input range using the system-supplied RNG.
                   *
                   * @param min:number Minimum value of range
                   *
                   * @param max:number Maximum value of range
                   *
                   * @return number New iterate in the specified range - there is no error testing on inputs for performance reasons
                   */
                RandomIntInRange.generateInRange = function (min, max) {
                    var theMin = min;
                    var theMax = Math.max(min, max);
                    // compensate for endpoint bias
                    theMax += 0.499;
                    theMin -= 0.499;
                    return Math.round(theMin + Math.random() * (theMax - theMin));
                };
                /**
                   * Generate a pseudo-random integer in the currently specified range.
                   *
                   * @param useSeeded:boolean - true if the seeded RNG is used
                   * @default false
                   *
                   * @return number New pseudo-random integer in the current range
                   */
                RandomIntInRange.prototype.generate = function (useSeeded) {
                    if (useSeeded === void 0) { useSeeded = false; }
                    if (useSeeded && !this._rng)
                        this._rng = new SeededRng_1.SeededRng(this._seed);
                    var u = useSeeded ? this._rng.next() : Math.random();
                    return Math.round(this._min + u * this._delta);
                };
                return RandomIntInRange;
            }());
            exports_1("RandomIntInRange", RandomIntInRange);
        }
    }
});

//# sourceMappingURL=RandomIntInRange.js.map
