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
 * Ultra-light implementation of a binary tree node with numerical data; for demo purposes only
 *
 * @author Jim Armstrong (www.algorithmist.net)
 * 
 * @version 1.0
 */

export class Node
{
  // node properties
	public id: string;                 // optional identifier for this node

  // internal
	protected _data: number;           // node data
	protected _parent: Node;           // this node's parent (null if root node)
	protected _left: Node;             // left child
  protected _right: Node;            // right child

	constructor(d?: number)
	{
    if (d != undefined && d != null && !isNaN(d)) {
      this._data = d;
    }

    this.id      = "";
		this._parent = null;
    this._left   = null;
    this._right  = null;
	}

  public get data(): number
  {
    return this._data;
  }

  public get parent(): Node
  {
    return this._parent;
  }

  public get left(): Node
  {
    return this._left;
  }

  public get right(): Node
  {
    return this._right;
  }

  public set parent(node: Node)
  {
    this._parent = node;
  }

  public set left(node: Node)
  {
    this._left = node;

    if (node != null) {
      node.parent = this;
    }
  }

  public set right(node: Node)
  {
    this._right = node;

    if (node != null) {
      node.parent  = this;
    }
  }
}