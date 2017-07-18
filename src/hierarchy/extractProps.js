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
 * Iterate through an array of Objects that contain an input property and optional 'children' (Array of Objects).
 * Return an Array of strings that contains each property.
 *
 * @param data: Array<Object> Array of Objects with the supplied input property and possibly 'children' property,
 * which is also an array of Objects
 *
 * @param prop: string Desired Object property to search against, i.e. 'id', 'title', etc.
 *
 * @returns Array<string> List of all properties partially matching the input for every Object that contains such a
 * property or an empty array if there are no matches.
 */
function extractProps(data, prop) {
    var len = data.length;
    var i;
    var res;
    if (prop === undefined || prop == '') {
        return [];
    }
    var result = new Array();
    for (i = 0; i < len; ++i) {
        res = data[i];
        if (res.hasOwnProperty(prop)) {
            // update the found property in the result
            result.push(res[prop]);
        }
        // recurse through children, if necessary
        if (res.hasOwnProperty('children') && res['children'] instanceof Array) {
            var arr = res['children'];
            result = result.concat(this.extractProps(arr, prop));
        }
    }
    return result;
}
exports.extractProps = extractProps;
//# sourceMappingURL=extractProps.js.map