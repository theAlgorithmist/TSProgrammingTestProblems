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
 * Typescript Math Toolkit: Linked List Node.  A general node structure for a linked list.  Supports single or doubly linked lists and allows a node to be specified
 * as a sentinel node.  Data associated with this node is supplied by an arbitrary Object.  Note that to support fast list operations, nodes are directly mutable as
 * well as node data (you break it, you buy it).
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */
 export class TSMT$ListNode
 {
   public id: string = "node";            // a general id for this node

   private _isSentinel: boolean = false;  // true if this is a sentinal node
   private _next: TSMT$ListNode;          // reference to next node in sequence
   private _prev: TSMT$ListNode;          // reference to previous node in sequence
   private _data: Object;                 // data for this node
   
   constructor()
   { 
     this.clear();

     this._data = new Object();
   }

  /**
   * Access whether or not this is a sentinel node
   *
   * @return boolean true if this node is a sentinel node
   */
   public get isSentinel(): boolean
   {
     return this._isSentinel;
   }

  /**
   * Assign whether or not this is a sentinel node
   *
   * @param value: boolean true if this is a sentinel node
   *
   * @return Nothing;
   */
   public set isSentinel(value: boolean)
   {
     this._isSentinel = value === true;
   }

  /**
   * Access the next node in sequence
   *
   * @return TSMT$ListNode Reference to the next node in sequence which may be null if no such node has been defined.  Returns direct reference to this node if it is 
   * a sentinel and no next node is defined.
   */
   public get next(): TSMT$ListNode
   {
     if (!this._next)
       return this._isSentinel ? this : null;

     return this._next; 
   }

  /**
   * Assign the next node in sequence
   *
   * @param value : TSMT$ListNode Reference to a list node this is the next in sequence
   *
   * @return Nothing Assigns the next node in sequence as long as this node has not been designated as a sentinel
   */
   public set next(value:TSMT$ListNode)
   {
     if (!this._isSentinel)
     {
       if (value && value instanceof TSMT$ListNode)
         this._next = value;
     }
   }

  /**
   * Access the previous node 
   *
   * @return TSMT$ListNode Reference to previous node in sequence or null if no such node has been defined.  Returns direct reference to this node if it is a sentinel
   * and no previous node is defined
   */
   public get prev(): TSMT$ListNode
   {
     return this._prev;
   }

  /**
   * Assign the previous node in sequence
   *
   * @param value : TSMT$ListNode Reference to a list node that is the previous in sequence
   *
   * @return Nothing Assigns the previous node in sequence as long as this node has not been designated as a sentinel
   */
   public set prev(value:TSMT$ListNode)
   {
     if (!this._isSentinel)
     {
       if (value && value instanceof TSMT$ListNode)
         this._prev = value;
     }
   }

  /**
   * Access the data in this node
   *
   * @return Object Direct refence to the list node's data (there is no immutability for performance reasons)
   */
   public get data(): Object
   {
     return this._data;
   }

  /**
   * Assign data to this node
   *
   * @param value : Object Node data
   *
   * @return Nothing A direct assignment is made to the internal data property as immutability is not enforced for performance reasons - you break it, you buy it.
   */
   public set data(value: Object)
   {
     if (value)
       this._data = value;
   }

  /**
   * Null out the previous and next references for this node (allows the node to exist as a property bag, but breaks any linkage)
   *
   * @return Nothing
   */
   public clearRefs(): void
   {
     this._next = null;
     this._prev = null;
   }

  /**
   * Prepare this node for garbage collection
   *
   * @return Nothing
   */
   public clear(): void
   {
     this._next = null;
     this._prev = null;
     this._data = null;
   }
 }