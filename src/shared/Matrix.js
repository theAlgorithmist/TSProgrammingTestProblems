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
 * A simple factory to creeate a 2D grid or matrix of numbers with an initial value stored in each cell (based on Crockford's Array.matrix)
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
var Matrix = (function () {
    function Matrix() {
        // empty
    }
    /**
     * Create a new mxn grid or matrix with a supplied default value
     *
     * @param rows: number Number of rows
     *
     * @param cols: number Number of columns
     *
     * @param initValue: number Initial value
     *
     * @return Array<Array<number>> Matrix (array of arrays) initialized with the supplied default value.  There is no error-checking on the inputs; you break it, you buy it.
     */
    Matrix.create = function (rows, cols, initValue) {
        var a = new Array();
        if (!isNaN(rows) && !isNaN(cols) && !isNaN(initValue) && rows > 0 && cols > 0) {
            var i = void 0;
            var j = void 0;
            for (i = 0; i < rows; ++i) {
                var columns = new Array();
                for (j = 0; j < cols; ++j)
                    columns[j] = initValue;
                a[i] = columns;
            }
        }
        return a;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
//# sourceMappingURL=Matrix.js.map