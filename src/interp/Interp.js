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
 * Linear interpolation class using the parametric form of a line.  The implementation is optimized for a single setting of parameters
 * followed by multiple interpolations using the same parameters.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
var LinearInterpolation = (function () {
    function LinearInterpolation() {
        this._x1 = 0; // left x endpoint
        this._x2 = 0; // right x endpoint
        this._y1 = 0; // left y endpoint
        this._y2 = 0; // right y endpoint
        this._t = 0; // parameter (in [0,1] for interpolation, outside for extrapolation)
        this._range = 0; // x2-x1
        // true if any data setting invalidates previously computed results
        this._invalidated = true;
    }
    Object.defineProperty(LinearInterpolation.prototype, "x1", {
        /**
         * Return current x1 value
         *
         * @return number Current value of x1
         */
        get: function () {
            return this._x1;
        },
        /**
         * Assign x1 value
         *
         * @param value : number Left endpoint of the interval [x1,x2]
         */
        set: function (value) {
            this._x1 = isNaN(value) || !isFinite(value) ? this._x1 : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearInterpolation.prototype, "x2", {
        /**
         * Return current x2 value
         *
         * @return number Current value of x2
         */
        get: function () {
            return this._x2;
        },
        /**
         * Assign x2 value
         *
         * @param value : number Rightt endpoint of the interval [x1,x2]
         */
        set: function (value) {
            this._x2 = isNaN(value) || !isFinite(value) ? this._x2 : value;
            this._invalidated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearInterpolation.prototype, "y1", {
        /**
         * Return current y1 value
         *
         * @return number Current value of y1
         */
        get: function () {
            return this._y1;
        },
        /**
         * Assign y1 value
         *
         * @param value : number Left endpoint of the interval [y1,y2]
         */
        set: function (value) {
            this._y1 = isNaN(value) || !isFinite(value) ? this._y1 : value;
            this._invalidated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinearInterpolation.prototype, "y2", {
        /**
         * Return current y2 value
         *
         * @return number Current value of y2
         */
        get: function () {
            return this._y2;
        },
        /**
         * Assign y2 value
         *
         * @param value : number Right endpoint of the interval [y1,y2]
         */
        set: function (value) {
            this._y2 = isNaN(value) || !isFinite(value) ? this._y2 : value;
            this._invalidated = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Perform a linear interpolation based on the current parameters
     *
     * @param x : number x-value for interpolation where x1 <= x <= x2 for interpolation, alghough x is allowed to be outside that interval for extrapolation
     *
     * @return number (linearly) Interpolated (or extrapolated) value
     */
    LinearInterpolation.prototype.interpolate = function (x) {
        if (x === void 0) { x = 0; }
        if (this._invalidated)
            this.__recalculate();
        var t = this._range < 0.000000001 ? 0 : (x - this._x1) / this._range;
        return (1 - t) * this._y1 + t * this._y2;
    };
    LinearInterpolation.prototype.__recalculate = function () {
        if (this._x2 < this._x1) {
            var tmp = this._x1;
            this._x1 = this._x2;
            this._x2 = tmp;
        }
        if (this._y2 < this._y1) {
            var tmp = this._y1;
            this._y1 = this._y2;
            this._y2 = tmp;
        }
        this._range = (this._x2 - this._x1);
        this._invalidated = false;
    };
    return LinearInterpolation;
}());
exports.LinearInterpolation = LinearInterpolation;
//# sourceMappingURL=Interp.js.map