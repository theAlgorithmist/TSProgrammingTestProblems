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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LinkedList_1 = require('../shared/LinkedList');
var ExtendedLinkedList = (function (_super) {
    __extends(ExtendedLinkedList, _super);
    function ExtendedLinkedList() {
        _super.call(this);
    }
    /**
     * Access the k-th node from the end of the list
     *
     * @param k : number Zero-based index from the end of the list, inclusive (i.e. k=0 returns the tail node, k=1 returns the node prior to the tail)
     *
     * @return TSMT$ListNode Reference to the k-th node from the end of the list or null if no such node exists based on the input index and list size
     */
    ExtendedLinkedList.prototype.kfromEnd = function (k) {
        if (k < 0 || k > this._count - 1)
            return null;
        return this.getNode(this._count - k - 1);
    };
    return ExtendedLinkedList;
}(LinkedList_1.TSMT$LinkedList));
exports.ExtendedLinkedList = ExtendedLinkedList;
//# sourceMappingURL=ExtendedLinkedList.js.map