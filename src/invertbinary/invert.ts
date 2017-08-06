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

import {Node} from './BTreeNode';

/**
 * Recursive implementation of a binary tree inversion (I would prefer to call it a reverse)
 *
 * @param root: TSMT$BTreeNode<T> Root node
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @returns nothing Tree is inverted in-place - of course, WTF would you ever do that?
 */
export function invert(root: Node): Node
{
  if (root == null) {
    return null;
  }

  let right: Node = invert(root.right);
  let left: Node  = invert(root.left);

  root.left  = right;
  root.right = left;

  return root;
}