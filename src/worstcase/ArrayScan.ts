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
 * Implement array scan to find first index that meets the condition specified in the minimize worst-case complexity problem.  A class is implemented so that 
 * class variables may be used to record side statistics and it is used as a simulator.  A production implementation could be extracted into a couple exported functions.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export class ArrayScan
 {
   protected _steps: number   = 0;  // number of steps or function tests required to locate the specified array index
   protected _numTrue: number = 0;  // number of function tests that return true;
   protected _k: number       = 0;  // initial interval width

   constructor()
   {
     this.__reset();
   }

  /**
   * Access the number of steps in the scan
   * 
   * @return number Total number of steps required to find the specified index (or show that none exists)
   */
   public get steps(): number
   {
     return this._steps;
   }

  /**
   * Access the number of true function evaluations (should never be more than two)
   */ 
   public get numTrue(): number
   {
     return this._numTrue;
   }

  /**
   * Access the initial interval width
   * 
   * @return number Initial interval width
   */
   public get k(): number
   {
     return this._k;
   }

  /**
   * Return the first array index that meets the criteria stated in the problem
   * 
   * @param a: Array<number> Array of numbers that comprises the test data
   * 
   * @param f: Function Function that takes one numerical argument and returns true or false depending on whether or not the test condition is met: note that once f returns true
   * for index j, it must return true for all i = j+1, ... n-1, where n is the array length.
   * 
   * @return number Zero-based index of the first array element for which f(a[j]) is true or -1 if no such index exists. 
   */
   public scanArray(a: Array<number>, f: Function): number
   {
     this.__reset();

     const n: number     = a.length;
     let result: boolean = false;

     // simple cases
     if (n == 0)
       return -1;

     if (n == 1)
     {
       result = f(a[0]);
       if (result)
         this._numTrue = 1;
      
       this._steps = 1;
       return result ? 0 : -1
     }

     if (n == 2)
     {
       let index: number = -1;
       result            = f(a[1]);
       this._steps++;
       if (result)
       {
         this._numTrue++;
         index = 1;
       }
       else
         return -1;
  
       result = f(a[0]);
       this._steps++;
       if (result)
       {
         this._numTrue++;
         index = 0;
       }
       
       return index;
     }
        
     let k: number       = this.__stepSize(n);
     this._k             = k; 
     let current: number = k-1;
     let prev: number    = -1;

     while (current <= n-1)
     {
       // check endpoint of next interval
       result = f(a[current]);

       this._steps++;
       if (result)
       {
         this._numTrue++;
         let index: number = (current-1 >= prev+1) ? this.__linearScan(a, prev+1, current-1, f): -1;

         return  index != -1 ? index : current;
       }

       // next interval
       k--;
       k = Math.max(1,k);

       prev     = current;
       current += k;
     }

     return -1;
   }

   // compute the initial step size for the constant, decreasing step-size model
   protected __stepSize(n: number): number
   {
     // n > 2
     let i: number = Math.floor( 0.5*(Math.sqrt(1 + 8*n) - 1) );
     
     return 0.5*(i*(i+1)) >= n ? i : i+1;
   }

   // reset stats variables
   protected __reset(): void
   {
     this._steps   = 0;
     this._numTrue = 0;
     this._k       = 0;
   }

   // linearly scan an interval from the start to the end index
   protected __linearScan(a: Array<number>, i1: number, i2: number, f: Function): number
   {
     let i: number;
     for (i=i1; i<=i2; ++i)
     {
       this._steps++;
       if (f(a[i]))
       {
         this._numTrue++;

         return i;
       }
     }

     return -1;
   }
 }