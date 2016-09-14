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
System.register(['./ListNode'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListNode_1;
    var LinkedListType, TSMT$LinkedList;
    return {
        setters:[
            function (ListNode_1_1) {
                ListNode_1 = ListNode_1_1;
            }],
        execute: function() {
            (function (LinkedListType) {
                LinkedListType[LinkedListType["SINGLE"] = 0] = "SINGLE";
                LinkedListType[LinkedListType["DOUBLE"] = 1] = "DOUBLE";
                LinkedListType[LinkedListType["CIRCULAR"] = 2] = "CIRCULAR"; // singly-linked list with tail node inked to the head node
            })(LinkedListType || (LinkedListType = {}));
            exports_1("LinkedListType", LinkedListType);
            TSMT$LinkedList = (function () {
                function TSMT$LinkedList() {
                    this._type = LinkedListType.SINGLE;
                    this._count = 0; // number of nodes in the list
                    this._index = -1; // cache index of most recent fetch
                    // (index) search parameters
                    this._start = 0;
                    this._end = 0;
                    this._dir = 1;
                }
                Object.defineProperty(TSMT$LinkedList.prototype, "size", {
                    /**
                     * Access the number of nodes in the list
                     *
                     * @return number Current node count
                     */
                    get: function () {
                        return this._count;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TSMT$LinkedList.prototype, "type", {
                    /**
                     * Access the type of list
                     *
                     * @return number LinkedListType of this list
                     */
                    get: function () {
                        return this._type;
                    },
                    /**
                     * Assign the list type
                     *
                     * @param listType: number List type, which should be in the LinkedListType enum
                     *
                     * @return Nothing Sets the list type only for valid values, otherwise list type remains unchanged.
                     */
                    set: function (listType) {
                        if (this._count == 0) {
                            // straight assignment of type before list is created
                            this._type = listType == LinkedListType.SINGLE || listType == LinkedListType.DOUBLE || listType == LinkedListType.CIRCULAR ? listType : this._type;
                            return;
                        }
                        // type-switch after list creation involves changing existing node linkage
                        switch (listType) {
                            case LinkedListType.CIRCULAR:
                                this.__toSingle();
                                this._tail.next = this._head;
                                this._type = listType;
                                break;
                            case LinkedListType.DOUBLE:
                                this.__toDouble();
                                this._type = listType;
                                break;
                            case LinkedListType.SINGLE:
                                this.__toSingle();
                                this._type = listType;
                                break;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TSMT$LinkedList.prototype, "head", {
                    /**
                     * Access node at the head of the list
                     *
                     * @return TSMT$ListNode Reference to head node
                     */
                    get: function () {
                        return this._head;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TSMT$LinkedList.prototype, "tail", {
                    /**
                     * Access node at tail of the list
                     *
                     * @return TSMT$ListNode Reference to tail node
                     */
                    get: function () {
                        return this._tail;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Access the list node at the specified index
                 *
                 * @param index : number Zero-based index of node to fetch which should be in range [0, size-1] unless the list is circular in which case indices wrap mod(size).
                 *
                 * @return TSMT$ListNode Direct reference to list node or null if index is out of range or operation is not defined (i.e. fetch a previous node in a singly-linked list)
                 */
                TSMT$LinkedList.prototype.getNode = function (index) {
                    if (this._count == 0 || index < 0)
                        return null;
                    index = index % this._count;
                    if (index == this._index && this._node != null)
                        return this._node;
                    var node = this.__params(index);
                    var i = this._start;
                    var count = Math.abs(this._end - this._start) + 1;
                    while (count > 0) {
                        if (i == index) {
                            this._index = i;
                            this._node = node;
                            return node;
                        }
                        i += this._dir;
                        node = this._dir == 1 ? node.next : node.prev;
                        count--;
                    }
                };
                /**
                 * Access the list node with the specified id
                 *
                 * @param nodeid : string Id of node to fetch
                 *
                 * @return TSMT$ListNode Direct reference to list node or null if no node in list has the specified id
                 */
                TSMT$LinkedList.prototype.getNodeById = function (nodeid) {
                    if (this._count == 0)
                        return null;
                    var node = this._head;
                    if (node.id == nodeid) {
                        this._index = 0;
                        this._node = node;
                        return node;
                    }
                    var i;
                    for (i = 1; i < this._count; ++i) {
                        node = node.next;
                        if (node.id == nodeid) {
                            this._index = i;
                            this._node = node;
                            return node;
                        }
                    }
                    return null;
                };
                /**
                 * Add a node to the list and optionally mark it as the terminal node, which locks the list structure from future additions
                 *
                 * @param id : string node id
                 *
                 * @param data : Object Node data
                 *
                 * @param isTerminal: boolean True if this is to be the final node in the list.  If so, no new nodes may be added onto the end and this node may not be deleted.
                 * Call the clear method to clear out the list.
                 *
                 * @default false
                 *
                 * @return Nothing A new list node is created from the input data and added to the list as long as the list does not already have a defined terminator.  In
                 * that case, call the clear method to clear out the list and begin again.
                 */
                TSMT$LinkedList.prototype.add = function (id, data, isTerminal) {
                    if (isTerminal === void 0) { isTerminal = false; }
                    if (this._tail && this._tail.isSentinel)
                        return;
                    var node = new ListNode_1.TSMT$ListNode();
                    node.id = id;
                    node.data = data;
                    node.isSentinel = isTerminal;
                    if (this._count == 0) {
                        this._head = node;
                        this._tail = node;
                        this._head.next = this._tail;
                        if (this._type == LinkedListType.DOUBLE)
                            this._tail.prev = this._head; // the tail must have a 'prev' reference yet both head and tail point to same node - will need compensation next addition
                        this._count = 1;
                        return;
                    }
                    this._tail.next = node;
                    switch (this._type) {
                        case LinkedListType.DOUBLE:
                            node.prev = this._tail;
                            break;
                        case LinkedListType.CIRCULAR:
                            node.next = this._head;
                            break;
                    }
                    this.__noCache();
                    this._tail = node;
                    // handle edge-case in doubly-linked list transitioning from one to two nodes
                    if (this._count == 1 && this._type == LinkedListType.DOUBLE) {
                        this._head.clearRefs();
                        this._head.next = this._tail;
                    }
                    this._count++;
                };
                /**
                 * Insert a new node at the specified index
                 *
                 * @param index : number Zero-based index for the insertion, which must be in the interval [0,size-1].  If zero, the new node becomes the head node, otherwise
                 * it is inserted just before the specified index.
                 *
                 * @param id : string Id assigned to the inserted node
                 *
                 * @param data : Object Node data
                 */
                TSMT$LinkedList.prototype.insert = function (index, id, data) {
                    // edge cases
                    if (this._count == 0) {
                        if (index == 0) {
                            this.add(id, data);
                            return;
                        }
                        else
                            return; // operation is not defined
                    }
                    if (index < 0)
                        return;
                    var node = new ListNode_1.TSMT$ListNode();
                    node.id = id;
                    node.data = data;
                    if (index == 0) {
                        node.next = this._head;
                        if (this._type == LinkedListType.DOUBLE)
                            this._head.prev = node;
                        else if (this._type == LinkedListType.CIRCULAR)
                            this._tail.next = node;
                        this._head = node;
                        this._index = 0;
                        this._node = node;
                        this._count++;
                        return;
                    }
                    // in-between cases     
                    index = index % this._count;
                    var before = this.getNode(index - 1);
                    var after = before.next;
                    before.next = node;
                    node.next = after;
                    if (this._type == LinkedListType.DOUBLE) {
                        node.prev = before;
                        after.prev = node;
                    }
                    this.__noCache();
                    this._count++;
                };
                /**
                 * Remove a node from the list at the specified index
                 *
                 * @param index : number Node index, which should be in the interval [0,size-1] unless the list is circular in which case indices are mod(size)
                 *
                 * @return Nothing The specified node is removed from the list
                 */
                TSMT$LinkedList.prototype.remove = function (index) {
                    if (this._count == 0)
                        return;
                    if (index < 0 || index >= this._count && this._type != LinkedListType.CIRCULAR)
                        return;
                    index = index % this._count;
                    // ends of the list
                    if (index == 0) {
                        var node = this._head;
                        this._head = this._count == 1 ? null : this._head.next;
                        this._tail = this._count == 1 ? null : this._tail;
                        node.clear();
                    }
                    else if (index = this._count - 1) {
                        if (this._tail.isSentinel)
                            return;
                        else {
                            var node = this._tail;
                            // note that count-2 will be invalid for a list of length 1, but getNode() returns null which is the desired result (and we should not take
                            // this path through the if-then-else anyway)
                            this._tail = this._type == LinkedListType.DOUBLE ? this._tail.prev : this.getNode(this._count - 2);
                            if (this.type == LinkedListType.CIRCULAR && this._tail)
                                this._tail.next = this._head;
                            this._head = this._count == 1 ? null : this._head;
                            node.clear();
                        }
                    }
                    else {
                        var node = this.getNode(index - 1);
                        var node1 = node.next;
                        var node2 = node1.next;
                        node.next = node2;
                        if (this._type == LinkedListType.DOUBLE)
                            node1.prev = node;
                    }
                    this.__noCache();
                    this._count--;
                };
                /**
                 * Remove the specified node based on its id
                 *
                 * @param nodeid : string Id of the node to remove
                 *
                 * @return Nothing - removes the specified node unless it is the specified terminator of the list or the id is invalid
                 */
                TSMT$LinkedList.prototype.removeById = function (nodeid) {
                    var node = this.getNodeById(nodeid);
                    if (node)
                        this.remove(this._index);
                };
                /**
                 * Convert the list to an Array
                 *
                 * @param nullRef : boolean true if previous and next references are to be nulled out for each node.  This is useful if the resulting array is to be subsequently
                 * used as a stack; as nodes are removed, they can be properly garbage collected.
                 *
                 * @default true
                 *
                 * @return Array<TSMT$ListNode> Converts the list to an array.  This can be used to create a list with a variety of operations and then repeatedly access
                 * the unaltered list with O(1) index operations (provided space efficiency is not a concern).  It may also be used to convert the list to a stack (using
                 * array operations to manipulate the stack)
                 */
                TSMT$LinkedList.prototype.toArray = function (nullRef) {
                    if (nullRef === void 0) { nullRef = true; }
                    var result = new Array();
                    var i;
                    var node = this._head;
                    for (i = 0; i < this._count; ++i) {
                        result.push(node);
                        node = node.next;
                    }
                    if (nullRef) {
                        for (i = 0; i < this._count; ++i) {
                            node = result[i];
                            node.clearRefs();
                        }
                    }
                    return result;
                };
                /**
                 * Clear the list structure
                 *
                 * @return Nothing The list type remains unchanged; otherwise the list is empty.  References to existing list nodes are nulled.
                 */
                TSMT$LinkedList.prototype.clear = function () {
                    if (this._count == 0)
                        return;
                    var prev = this._head;
                    var next;
                    var i;
                    for (i = 0; i < this._count; ++i) {
                        // the price of performance and not enforcing immutability ...
                        if (prev.next) {
                            next = prev.next;
                            prev.clear();
                            prev = next;
                        }
                    }
                    this._count = 0;
                    this._head = null;
                    this._tail = null;
                    this.__noCache();
                };
                // all operations pertaining to clearing node-caching
                TSMT$LinkedList.prototype.__noCache = function () {
                    this._index = -1;
                    this._node = null;
                };
                // traverse the list and convert to a singly-linked list
                TSMT$LinkedList.prototype.__toSingle = function () {
                    if (this._count == 0)
                        return;
                    var node = this._head;
                    var i;
                    for (i = 0; i < this._count - 1; ++i) {
                        node.prev = null;
                        node = node.next;
                    }
                    this._tail.prev = null;
                    this._tail.next = null;
                };
                // traverse the list and convert to a doubly-linked list
                TSMT$LinkedList.prototype.__toDouble = function () {
                    if (this._count == 0)
                        return;
                    var before = this._head;
                    var node;
                    var i;
                    for (i = 1; i < this._count - 1; ++i) {
                        node = before.next;
                        node.prev = before;
                        before = node;
                    }
                    this._tail.prev = node;
                    this._tail.next = null;
                };
                // compute parameters (set in class variables) to traverse the list and search for a node at a given index where the index is not equal to the cached index
                TSMT$LinkedList.prototype.__params = function (index) {
                    // compute start/end indices and direction for minimum-traversal based on existing cached search and type of list
                    if (this._type == LinkedListType.SINGLE || this._type == LinkedListType.CIRCULAR) {
                        this._start = index > this._index ? this._index + 1 : 0;
                        this._end = index;
                        this._dir = 1;
                        return (index > this._index && this._node != null) ? this._node.next : this._head;
                    }
                    else {
                        // the doubly-linked list has more options, especially if there are cached results from a prior search.  compare traversal distance from head-forward to tail-
                        // backward to cached index-forward to cached index-backward.  this is a bit brute-force, but it's also in line with KISS.
                        var d1 = index; // head-forward
                        var path1 = true;
                        var d2 = this._count - index;
                        var path2 = d2 < d1;
                        path1 = path2 ? false : path1;
                        var d3 = index > this._index ? index - this._index : Number.MAX_VALUE;
                        var path3 = (d3 < d2) && (d3 < d1);
                        if (path3) {
                            path1 = false;
                            path2 = false;
                        }
                        var d4 = index < this._index ? this._index - index : Number.MAX_VALUE;
                        var path4 = (d4 < d3) && (d4 < d2) && (d4 < d1);
                        if (path4) {
                            path1 = false;
                            path2 = false;
                            path3 = false;
                        }
                        // now, compute start/end/dir and return the proper starting node for the traversal based on the best path
                        if (path1) {
                            this._start = 0;
                            this._end = index;
                            this._dir = 1;
                            return this._head;
                        }
                        else if (path2) {
                            this._start = this._count - 1;
                            this._end = index;
                            this._dir = -1;
                            return this._tail;
                        }
                        else if (path3) {
                            this._start = this._index;
                            this._end = index;
                            this._dir = 1;
                            return this._node;
                        }
                        else {
                            this._start = this._index;
                            this._end = index;
                            this._dir = -1;
                            return this._node;
                        }
                    }
                };
                return TSMT$LinkedList;
            }());
            exports_1("TSMT$LinkedList", TSMT$LinkedList);
        }
    }
});

//# sourceMappingURL=LinkedList.js.map
