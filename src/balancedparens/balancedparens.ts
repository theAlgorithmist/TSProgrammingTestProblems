/**
 * Copyright 2018 Jim Armstrong (www.algorithmist.net)
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

// map open to closed characters
export const OPEN_CHARS: Object = {
  '(': ')',
  '{': '}',
  '[': ']',
  '<': '>'
};

// test for close character
export const CLOSE_CHARS: Object = {
  ')': true,
  '}': true,
  ']': true,
  '>': true
};

/**
 * Determine if a set of parentheses (more specifically, a set of distinct open/close characters) is balanced, i.e.
 * there is an equal number of open/close chars with the first such character discovered being an 'open' char.  An
 * empty string or one containing no open/close characters is considered balanced by definition.
 *
 * @param {string} input Input string
 *
 * @param {Object} openChars Map of 'open' characters such as paren or brace.  Object value should be the appropriate
 * matching closing character.
 *
 * @default {OPEN_CHARS} Full list of 'open' characters
 *
 * @param {Object} closeChars Collection of 'close' characters in same order as open characters.  Object value should
 * be {boolean} true and close characters should be distinct from corresponding open characters.
 *
 * @default {CLOSE_CHARS}
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export function isBalanced(input: string, openChars: Object=OPEN_CHARS, closedChars: Object=CLOSE_CHARS): boolean
{
  if (input === undefined || input == null) {
    return false;
  }

  const n: number = input.length;

  if (n == 0) {
    return true;
  }

  // an array is used as a stack in this implementation
  const stack: Array<string> = new Array<string>();

  let i: number;
  let char: string;
  let recentOpen: string;

  for (i = 0; i < n; i ++)
  {
    // character to test
    char = input[i];
    if (openChars.hasOwnProperty(char))
    {
      // found an open hit
      stack.push(char);
    }
    else if (closedChars[char])
    {
      // closed hit - check for early exit if the current character does not match the expected closing char.  Get
      // the most recent 'open' char and test its expected close vs. current char
      recentOpen = stack.pop();
      if (openChars[recentOpen] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}