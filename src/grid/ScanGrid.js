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
System.register(['../shared/Matrix'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Matrix_1;
    var MOVES, ScanGrid;
    return {
        setters:[
            function (Matrix_1_1) {
                Matrix_1 = Matrix_1_1;
            }],
        execute: function() {
            (function (MOVES) {
                MOVES[MOVES["NONE"] = 0] = "NONE";
                MOVES[MOVES["HORIZONTAL"] = 1] = "HORIZONTAL";
                MOVES[MOVES["VERTICAL"] = 2] = "VERTICAL"; // vertical one-cell move
            })(MOVES || (MOVES = {}));
            exports_1("MOVES", MOVES);
            ScanGrid = (function () {
                function ScanGrid() {
                    this._path = new Array(); // (optional) path associated with maximum-sum path
                    // empty
                }
                Object.defineProperty(ScanGrid.prototype, "getPath", {
                    /**
                     * Return a reference to an optimal path after a call to scan()
                     *
                     * @return Array<number> Path represented as a sequence of moves from the MOVES enum.  This is currently a placeholder and will be implemented in the future
                     */
                    get: function () {
                        // tmmporary - this will be written later.  the idea is to process the 'breadcrumbs' left in the call to scan() in a relatively smart way to deduce a path
                        // that leads to the optimal solution.  Note that the path is not guaranteed to be unique; a square, symmetric matrix serves as a counter-example.
                        return [];
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Scan an mxn grid of positive integers for the best possible accumulated sum from starting at [0][0] and moving to [m-1][n-1] through a path that only allows
                 * a single horizontal (right) or vertical (down) move per step.
                 *
                 * @param grid: grid:Array<Array<number>> 2D grid (matrix) of cells with either zero (for no value) or a postitive integer for each cell.  No error checking is performed on
                 * this input.
                 *
                 * @return number maximm-possible accumulated value from the constrained sequence of moves
                 */
                ScanGrid.prototype.scan = function (grid) {
                    var m = grid.length; // number of rows
                    if (m == 0)
                        return 0;
                    var n = grid[0].length; // number of columns
                    // reset path breadcrumbs.
                    this._path = Matrix_1.Matrix.create(m, n, MOVES.NONE);
                    // recursive algorithm
                    var i;
                    var j;
                    var max;
                    var r;
                    var c;
                    // accumulated values from all prior moves that lead to current cell
                    var values = new Array();
                    for (i = 0; i < m; ++i)
                        values[i] = grid[i].slice();
                    for (i = 0; i < m; ++i) {
                        for (j = 0; j < n; ++j) {
                            max = 0.0;
                            r = i > 0 ? values[i - 1][j] : 0;
                            c = j > 0 ? values[i][j - 1] : 0;
                            // note - haven't debugged the breadcrumbs yet - this is temporary until I have time to do the next update to this code
                            if (r > c) {
                                max = r;
                                this._path[i - 1][j] = MOVES.HORIZONTAL;
                            }
                            else {
                                max = c;
                                this._path[i][j - 1] = MOVES.VERTICAL;
                            }
                            values[i][j] = grid[i][j] + max;
                        }
                    }
                    return values[m - 1][n - 1];
                };
                return ScanGrid;
            }());
            exports_1("ScanGrid", ScanGrid);
        }
    }
});
//# sourceMappingURL=ScanGrid.js.map