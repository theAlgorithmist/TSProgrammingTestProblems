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
 * Ultra-light implementation of a binary tree node with numerical data; for demo purposes only
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
var Node = (function () {
    function Node(d) {
        if (d != undefined && d != null && !isNaN(d)) {
            this._data = d;
        }
        this.id = "";
        this._parent = null;
        this._left = null;
        this._right = null;
    }
    Object.defineProperty(Node.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (node) {
            this._parent = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (node) {
            this._left = node;
            if (node != null) {
                node.parent = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (node) {
            this._right = node;
            if (node != null) {
                node.parent = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());
exports.Node = Node;
//# sourceMappingURL=BTreeNode.js.map