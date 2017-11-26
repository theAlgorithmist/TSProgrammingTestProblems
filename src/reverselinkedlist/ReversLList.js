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
 * Reverse a singly-linked list of ILListNode instances
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @param {ILListNode} node Head of the list
 *
 * @returns {ILListNode} Reference to new head of list so that the original list is in reverse order
 *
 */
function reverseLList(node) {
    if (node == undefined || node == null || node.next == null) {
        return node;
    }
    var reverse = reverseLList(node.next); // this locates the sentinel node of the original list
    // this gets the pointers in 'reverse' order
    node.next.next = node;
    node.next = null;
    return reverse;
}
exports.reverseLList = reverseLList;
//# sourceMappingURL=ReversLList.js.map