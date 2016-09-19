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
 * Interval bisection - used to isolate a single, real root of a continuous function inside a small interval (as a preliminary to pass onto a root-finder)
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export class BisectInterval 
 {
   private static EPS: number = 1.0 ; // stop when interval width is this value or less

   constructor()
   {
   }

  /**
   * Bisect the supplied function over the input interval [a,b]
   *
   * @param a : number left endpoint of interval
   * 
   * @param b : number right endpoint of interval
   *
   * @param f : Function (takes a single number, x, and returns a number - the mathematical function whose real root is desired)
   *
   * @return Object 'left' property contains the left endpoint of the final interval.  'right' property contains the right endpoint of the final interval.  The 
   * boolean 'root' property indicates whether or not a potential (real) root exists in the final interval.
   *
   * There is only minimial error-checking for performance reasons.
   */
   public static bisect(a: number, b: number, f: Function): Object
   {
     let left: number   = Math.min(a,b);
     let right: number  = Math.max(a,b);
     let result: Object = this.__bisect(left, right, f);
  
     return result ? {left:+result['left'], right:+result['right'], root:true} : {left:a, right:b, root:false};
   }

   private static __bisect(left: number, right: number, f: Function): Object
   {
     if (Math.abs(right-left) <= this.EPS)
       return null;

     if( f(left)*f(right) < 0 )
       return {left:left, right:right};
     else
     {
       let middle: number = 0.5*(left + right);
       let leftInterval: Object = this.__bisect(left, middle, f);
       if( leftInterval != null )
         return leftInterval;
          
       let rightInterval: Object = this.__bisect(middle, right, f);
       if( rightInterval != null )
         return rightInterval;
     }

     return null;
   }
 }
