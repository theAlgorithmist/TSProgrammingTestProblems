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
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TSMT$ListNode;
    return {
        setters:[],
        execute: function() {
            /**
             * Typescript Math Toolkit: Linked List Node.  A general node structure for a linked list.  Supports single or doubly linked lists and allows a node to be specified
             * as a sentinel node.  Data associated with this node is supplied by an arbitrary Object.  Note that to support fast list operations, nodes are directly mutable as
             * well as node data (you break it, you buy it).
             *
             * @author Jim Armstrong (www.algorithmist.net)
             *
             * @version 1.0
             */
            TSMT$ListNode = (function () {
                function TSMT$ListNode() {
                    this.id = "node"; // a general id for this node
                    this._isSentinel = false; // true if this is a sentinal node
                    this.clear();
                    this._data = new Object();
                }
                Object.defineProperty(TSMT$ListNode.prototype, "isSentinel", {
                    /**
                     * Access whether or not this is a sentinel node
                     *
                     * @return boolean true if this node is a sentinel node
                     */
                    get: function () {
                        return this._isSentinel;
                    },
                    /**
                     * Assign whether or not this is a sentinel node
                     *
                     * @param value: boolean true if this is a sentinel node
                     *
                     * @return Nothing;
                     */
                    set: function (value) {
                        this._isSentinel = value === true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TSMT$ListNode.prototype, "next", {
                    /**
                     * Access the next node in sequence
                     *
                     * @return TSMT$ListNode Reference to the next node in sequence which may be null if no such node has been defined.  Returns direct reference to this node if it is
                     * a sentinel and no next node is defined.
                     */
                    get: function () {
                        if (!this._next)
                            return this._isSentinel ? this : null;
                        return this._next;
                    },
                    /**
                     * Assign the next node in sequence
                     *
                     * @param value : TSMT$ListNode Reference to a list node this is the next in sequence
                     *
                     * @return Nothing Assigns the next node in sequence as long as this node has not been designated as a sentinel
                     */
                    set: function (value) {
                        if (!this._isSentinel) {
                            if (value && value instanceof TSMT$ListNode)
                                this._next = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TSMT$ListNode.prototype, "prev", {
                    /**
                     * Access the previous node
                     *
                     * @return TSMT$ListNode Reference to previous node in sequence or null if no such node has been defined.  Returns direct reference to this node if it is a sentinel
                     * and no previous node is defined
                     */
                    get: function () {
                        return this._prev;
                    },
                    /**
                     * Assign the previous node in sequence
                     *
                     * @param value : TSMT$ListNode Reference to a list node that is the previous in sequence
                     *
                     * @return Nothing Assigns the previous node in sequence as long as this node has not been designated as a sentinel
                     */
                    set: function (value) {
                        if (!this._isSentinel) {
                            if (value && value instanceof TSMT$ListNode)
                                this._prev = value;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TSMT$ListNode.prototype, "data", {
                    /**
                     * Access the data in this node
                     *
                     * @return Object Direct refence to the list node's data (there is no immutability for performance reasons)
                     */
                    get: function () {
                        return this._data;
                    },
                    /**
                     * Assign data to this node
                     *
                     * @param value : Object Node data
                     *
                     * @return Nothing A direct assignment is made to the internal data property as immutability is not enforced for performance reasons - you break it, you buy it.
                     */
                    set: function (value) {
                        if (value)
                            this._data = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Null out the previous and next references for this node (allows the node to exist as a property bag, but breaks any linkage)
                 *
                 * @return Nothing
                 */
                TSMT$ListNode.prototype.clearRefs = function () {
                    this._next = null;
                    this._prev = null;
                };
                /**
                 * Prepare this node for garbage collection
                 *
                 * @return Nothing
                 */
                TSMT$ListNode.prototype.clear = function () {
                    this._next = null;
                    this._prev = null;
                    this._data = null;
                };
                return TSMT$ListNode;
            }());
            exports_1("TSMT$ListNode", TSMT$ListNode);
        }
    }
});

//# sourceMappingURL=ListNode.js.map
