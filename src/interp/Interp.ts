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
 * Linear interpolation class using the parametric form of a line.  The implementation is optimized for a single setting of parameters
 * followed by multiple interpolations using the same parameters.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export class LinearInterpolation 
 {
   private _x1: number     = 0;    // left x endpoint
   private _x2: number     = 0;    // right x endpoint
   private _y1: number     = 0;    // left y endpoint
   private _y2: number     = 0;    // right y endpoint
   private _t: number      = 0;    // parameter (in [0,1] for interpolation, outside for extrapolation)
   private _range: number  = 0;    // x2-x1

   // true if any data setting invalidates previously computed results
   private _invalidated: boolean = true;

   constructor()
   {
   }

  /**
   * Return current x1 value
   *
   * @return number Current value of x1
   */
   public get x1(): number
   {
     return this._x1;
   }

  /**
   * Assign x1 value
   *
   * @param value : number Left endpoint of the interval [x1,x2]
   */
   public set x1(value: number)
   {
     this._x1 = isNaN(value) || !isFinite(value) ? this._x1 : value;
   }

  /**
   * Return current x2 value
   *
   * @return number Current value of x2
   */
   public get x2(): number
   {
     return this._x2;
   }

  /**
   * Assign x2 value
   *
   * @param value : number Rightt endpoint of the interval [x1,x2]
   */
   public set x2(value: number)
   {
     this._x2          = isNaN(value) || !isFinite(value) ? this._x2 : value;
     this._invalidated = true;
   }

  /**
   * Return current y1 value
   *
   * @return number Current value of y1
   */
   public get y1(): number
   {
     return this._y1;
   }

  /**
   * Assign y1 value
   *
   * @param value : number Left endpoint of the interval [y1,y2]
   */
   public set y1(value: number)
   {
     this._y1          = isNaN(value) || !isFinite(value) ? this._y1 : value;
     this._invalidated = true;
   }

  /**
   * Return current y2 value
   *
   * @return number Current value of y2
   */
   public get y2(): number
   {
     return this._y2;
   }

  /**
   * Assign y2 value
   *
   * @param value : number Right endpoint of the interval [y1,y2]
   */
   public set y2(value: number)
   {
     this._y2          = isNaN(value) || !isFinite(value) ? this._y2 : value;
     this._invalidated = true;
   }

  /**
   * Perform a linear interpolation based on the current parameters
   *
   * @param x : number x-value for interpolation where x1 <= x <= x2 for interpolation, alghough x is allowed to be outside that interval for extrapolation
   *
   * @return number (linearly) Interpolated (or extrapolated) value
   */
   public interpolate(x: number=0): number
   {
     if (this._invalidated)
       this.__recalculate();

     let t: number = this._range < 0.000000001 ? 0 : (x-this._x1)/this._range;

     return (1-t)*this._y1 + t*this._y2;
   }

   private __recalculate(): void
   {
     if (this._x2 < this._x1)
     {
       let tmp: number = this._x1;
       this._x1        = this._x2;
       this._x2        = tmp;
     }

     if (this._y2 < this._y1)
     {
       let tmp: number = this._y1;
       this._y1        = this._y2;
       this._y2        = tmp;
     }

     this._range       = (this._x2 - this._x1); 
     this._invalidated = false;
   }
 }
