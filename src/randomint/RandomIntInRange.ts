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
 * Typescript Math Toolkit - Computes pseudo-random integers within an input range [a,b], where a and b are integers and b > a.  This
 * method can be used with the Math RNG or an optional seeded RNG.  There is automatic compensation for bias away from endpoints.
 * 
 * @author Jim Armstrong
 * 
 * @version 1.0
 */
 import {SeededRng} from './SeededRng';

 export class RandomIntInRange
 {
   protected _min: number;    // minimum value of range
   protected _max: number;    // maximum value of range
   protected _delta: number;  // interval width
   protected _seed: number;   // seed value for RNG
   protected _rng: SeededRng; // reference to SeededRng

  /**
   * Construct a new RandomIntInRange
   *
   * @param {number} min Minimum value of range
   * @default 0
   *
   * @param {number} max Maximum value of range
   * @default 1
   * 
   * @param seed:number Seed value to use if seeded RNG if desired
   * @default 1
   */
   constructor(min: number=0, max: number=1, seed: number=1)
   {
     this.setInterval(min, max);

     this._seed = Math.abs(seed);
     this._seed = Math.max(1, this._seed);
   }
    
  /**
   * Set a new interval
   *
   * @param {number} min New minimum-integer value
   *
   * @param {number} max New maximum-integer value
   *
   * @returns {nothing}
   */
   public setInterval(min: number, max: number): void
   {
     this._min = isNaN(min) || !isFinite(min) ? this._min : min;
     this._max = isNaN(max) || !isFinite(max) ? this._max : max;
     this._min = Math.round(this._min);
     this._max = Math.round(this._max);

     if (this._max < this._min)
     {
       let tmp: number = this._min;
       this._min       = this._max;
       this._max       = tmp;
     }

     // compensate for endpoint bias
     this._min  -= 0.499;
     this._max  += 0.499;
     this._delta = this._max-this._min;   // delta between max and min
   }

  /**
	 * Generate a pseudo-random integer in a new input range using the system-supplied RNG.
	 * 
	 * @param {number} min Minimum value of range
	 * 
	 * @param {number} max Maximum value of range
	 *
	 * @returns {number} New iterate in the specified range - there is no error testing on inputs for performance reasons
	 */
   public static generateInRange(min: number, max: number): number
   {
     let theMin: number = Math.min(min, max);
     let theMax: number = Math.max(min, max);
      
     // compensate for endpoint bias
     theMax += 0.499;
     theMin -= 0.499;
			   
     return Math.round(theMin + Math.random()*(theMax - theMin));
   }

  /**
	 * Generate a pseudo-random integer in the currently specified range.
	 * 
	 * @param {boolean} useSeeded true if the seeded RNG is used
	 * @default false
	 * 
	 * @returns {number} New pseudo-random integer in the current range
	 */
   public generate(useSeeded: boolean=false): number
   {
     if (useSeeded && !this._rng) {
       this._rng = new SeededRng(this._seed);
     }
     
     let u: number = useSeeded ? this._rng.asNumber() : Math.random();
      
     return Math.round(this._min + u*this._delta);
    }
  }