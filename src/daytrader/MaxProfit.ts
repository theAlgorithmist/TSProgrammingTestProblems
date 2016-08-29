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
 * Function to compute the maximum possible profit that could have been obtained during a single trading session from only a long position
 *
 * @param prices : Array<number> Price of stock/commodity for each time period during the session
 * 
 * @return number - maximum possible profit (or minimum loss if negative) from a long position, i.e. buy at time period i and sell at time period j where j > i .
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
 export function maxProfit(prices: Array<number>): number 
 {
   var len: number = prices.length;
   if (len < 2)
     return 0;

   let low: number    = prices[0];           // record the current low
   let profit: number = -Number.MAX_VALUE;   // record the current max profit
   let i: number;
   let p: number;
   let price: number;

   for (i=1; i<len; ++i)
   {
     price   = prices[i];             // current time-period price
     p       = price - low;           // current profit or loss
     profit  = Math.max(p, profit);   // some unnecessary max computations, but this easily fits in min-loss case
     low     = Math.min(low, price);  // did we hit a new low?
   }

   return profit;
 }
