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

/**
 * Scan a grid (2d matrix) of positive integers (many of which are expected to be zero), starting at top-left cell.  Find the path that maximizes the sum of cells with the constraint that
 * only a single vertical or horizontal move may be made at each step of the path.  Return the sequence of moves in an array.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */

 import {Matrix} from '../shared/Matrix';

 export enum MOVES
 {
   NONE,          // no move - should only be for the initial cell
	 HORIZONTAL,    // horizontal one-cell move
   VERTICAL       // vertical one-cell move
 }

 export class ScanGrid
 {
   protected _path: Array<Array<number>> = new Array<Array<number>>();   // (optional) path associated with maximum-sum path

   constructor()
   {
     // empty
   }

  /**
   * Return a reference to an optimal path after a call to scan()
   * 
   * @return Array<number> Path represented as a sequence of moves from the MOVES enum.  This is currently a placeholder and will be implemented in the future
   */
   public get getPath(): Array<number>
   {
     // tmmporary - this will be written later.  the idea is to process the 'breadcrumbs' left in the call to scan() in a relatively smart way to deduce a path
     // that leads to the optimal solution.  Note that the path is not guaranteed to be unique; a square, symmetric matrix serves as a counter-example.
     return [];
   }

 /**
  * Scan an mxn grid of positive integers for the best possible accumulated sum from starting at [0][0] and moving to [m-1][n-1] through a path that only allows
  * a single horizontal (right) or vertical (down) move per step.
  *
  * @param grid: grid:Array<Array<number>> 2D grid (matrix) of cells with either zero (for no value) or a postitive integer for each cell.  No error checking is performed on
  * this input.
  *
  * @return number maximm-possible accumulated value from the constrained sequence of moves
  */
   public scan(grid:Array<Array<number>>): number
   {
     let m: number = grid.length;     // number of rows
     if (m == 0)
       return 0;

     let n: number = grid[0].length;  // number of columns

     // reset path breadcrumbs.
     this._path = Matrix.create(m, n, MOVES.NONE);

     // recursive algorithm
     let i: number;
     let j: number;
     let max: number;
     let r: number;
     let c: number;

     // accumulated values from all prior moves that lead to current cell
     let values:Array<Array<number>> = new Array<Array<number>>();
     
     for (i=0; i<m; ++i )
       values[i] = grid[i].slice();

     for (i=0; i<m; ++i)
     {
       for (j=0; j<n; ++j)
       {
         max = 0.0;
         r   = i > 0 ? values[i-1][j] : 0;
         c   = j > 0 ? values[i][j-1] : 0;

         // note - haven't debugged the breadcrumbs yet - this is temporary until I have time to do the next update to this code
         if (r > c)
         {
           max = r;
           this._path[i-1][j] = MOVES.HORIZONTAL;
         }
         else
         {
           max = c;
           this._path[i][j-1] = MOVES.VERTICAL;
         }

         values[i][j] = grid[i][j] + max;
       }
     }

     return values[m-1][n-1];
   }
 }