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
 * Facilitate multiple searches for a single value in an Array of Objects and correlate that value back to the array index.  This code is optimized for assign once, 
 * then search often.  Set the data provider before searching.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */

 type objData = string | number;

 export class ArrObjSearch
 {
   // number of objects in the collection
   protected _size: number = 0; 

   // search object values
   protected _hash: Object = new Object();
   
 /**
  * Construct a new ArrObjSearch class
  *
  * @return nothing 
  */
   constructor()
   {
     this._size = 0;
   }

  /**
   * Size of internal table
   * 
   * @return number Number of Object values in the internal 'hash'
   */
   public get size(): number
   {
     return this._size;
   }

  /**
   * Clear the internal search table and prepare for new data
   * 
   * @return nothing
   */
   public clear(): void
   {
     this._hash = new Object();
     this._size = 0;
   }

  /**
   * Assign data to build the search table
   * 
   * @param input: Array<Object> List of Objects whose values are string or numeric data
   * 
   * @return nothing
   */
   public set dataProvider(input: Array<Object>)
   {
     if (input != null && input != undefined && input.length > 0)
     {
       this.clear();
       
       const len: number = input.length;
       let j: number;
       let values: Array<objData>;
       let i: number;
       let n: number
       let obj: Object;

       // good, old-fashioned loop is the fastest
       for (i=0; i<len; ++i)
       {
         obj    = input[i];
         values = Object.keys(obj).map( (key: string): objData => obj[key] );
         n      = values.length;

         this._size += values.length;
        
         // map value to array index
         for (j=0; j<n; ++j)
           this._hash[values[j].toString()] = i;
       }
     }
   }

  /**
   * Search the internal table for a specified value
   * 
   * @param value: objData String or Numeric value to search for in the internal table
   * 
   * @return number Zero-based array index corresponding to the index of the array set in the data provider whose Object contains that value (not key) or -1
   * if the value does not exist 
   */
   public search(value: objData): number
   {
     let index: number;

     if (typeof value == "number")
       index = this._hash[value.toString()];
     else
       index = this._hash[value];

     return index == undefined ? -1 : index;
   }
 }