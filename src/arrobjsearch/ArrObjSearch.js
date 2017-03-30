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
var ArrObjSearch = (function () {
    /**
     * Construct a new ArrObjSearch class
     *
     * @return nothing
     */
    function ArrObjSearch() {
        // number of objects in the collection
        this._size = 0;
        // search object values
        this._hash = new Object();
        this._size = 0;
    }
    Object.defineProperty(ArrObjSearch.prototype, "size", {
        /**
         * Size of internal table
         *
         * @return number Number of Object values in the internal 'hash'
         */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clear the internal search table and prepare for new data
     *
     * @return nothing
     */
    ArrObjSearch.prototype.clear = function () {
        this._hash = new Object();
        this._size = 0;
    };
    Object.defineProperty(ArrObjSearch.prototype, "dataProvider", {
        /**
         * Assign data to build the search table
         *
         * @param input: Array<Object> List of Objects whose values are string or numeric data
         *
         * @return nothing
         */
        set: function (input) {
            if (input != null && input != undefined && input.length > 0) {
                this.clear();
                var len = input.length;
                var j = void 0;
                var values = void 0;
                var i = void 0;
                var n = void 0;
                var obj_1;
                // good, old-fashioned loop is the fastest
                for (i = 0; i < len; ++i) {
                    obj_1 = input[i];
                    values = Object.keys(obj_1).map(function (key) { return obj_1[key]; });
                    n = values.length;
                    this._size += values.length;
                    // map value to array index
                    for (j = 0; j < n; ++j)
                        this._hash[values[j].toString()] = i;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Search the internal table for a specified value
     *
     * @param value: objData String or Numeric value to search for in the internal table
     *
     * @return number Zero-based array index corresponding to the index of the array set in the data provider whose Object contains that value (not key) or -1
     * if the value does not exist
     */
    ArrObjSearch.prototype.search = function (value) {
        var index;
        if (typeof value == "number")
            index = this._hash[value.toString()];
        else
            index = this._hash[value];
        return index == undefined ? -1 : index;
    };
    return ArrObjSearch;
}());
exports.ArrObjSearch = ArrObjSearch;
//# sourceMappingURL=ArrObjSearch.js.map