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
 * Function to return the machine epsilon using straight computation (loop and no-loop)
 *
 * return number - smallest number that can be added to 1.0 and produce a result different from 1.0.  Three different approaches may be used in this method.
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
function machEps() {
    // using a loop
    var epsilon = 1.0;
    while (1.0 + epsilon != 1.0) {
        epsilon *= 0.5;
    }
    epsilon = epsilon + epsilon;
    // Eispack algorithm 
    // let four_thirds: number = 4.0/3.0;
    // let third: number       = four_thirds - 1.0;
    // let one: number         = third + third + third;
    // let epsilon: number     = Math.abs(1.0-one);
    // resort directly to the definition
    //let epsilon: number = Math.pow(2.0, -52);
    return epsilon;
}
exports.machEps = machEps;
//# sourceMappingURL=MachEps.js.map