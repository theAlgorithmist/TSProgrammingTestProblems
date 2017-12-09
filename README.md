# Typescript Programming Test Problems

A friend and C++/JS developer, Dave, recently started a discussion on programming tests.  He laughed a bit at some of the questions he had been asked during an interview and then commented about how there is lots of information about these problems online in other languages, but not Typescript.  Then, he hit me with the proverbial punch line - "Jim, why don't you do that?"

Yes, as if I need another side project in addition to the Typescript Math Toolkit :)  I do admit it's a great excuse for some late-night coffee and it provides another source of Typescript examples.

Some of these problems came from interviews of me, but most were submitted by others via email.  If you have a problem you would like added to this repo, then email me at the address below.

All solutions are off-the-top-of-my-head, which is a fancy way of saying there is often more than one way to solve a problem and that the first thing that pops into my mind is not necessarily the best solution.  

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Typescript: 2.0.3

Version: 2.0.0 (Change test suite to Mocha/Chai)


## Installation

Installation involves all the usual suspects

  - npm and gulp installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and Running the tests

1. gulp compile

2. gulp test

The test suite is in Mochai/Chai.  All problem solutions are in folders under /src.  The list of problems is provided below, by folder.  This list will likely be moved to a Wiki as the problem set expands.



### Folder: n/a

Source: Interview

Problem:  Write a function that counts the number of occurrences of each string in an array of strings.

Solution:  I do not care to write something that I have *already* written and placed on Github.  Here is the class

[https://github.com/theAlgorithmist/Table/blob/master/src/app/lib/Table.ts]

and the specific method is _oneWayTable_ .  The repo contains an Angular 2 application that exercises the class (which does both one-way and two-way table analysis;  one-way analysis of a table column with string data is close enough to the described problem and illustrates how to use hashing for the solution, which is likely the purpose of the exercise)



### Folder: mult321

Source: Interview

Problem:  Write a function that multiplies an input integer by 321 without using loops, the multiply operator, or divide operator.

Solution:  I think this is one of those 'can you think outside the box' problems.  x * 321 = x + (x+x)*10 + (x+x+x)*10^2.  In binary, 10 = 1010 (2^1 + 2^3) and 100 = 1100100 (2^2 + 2^5 + 2^6) .  Addition and bit-shift are in the list of 'acceptable' operators for the problem.



### Folder: exchange

Source: Interview

Problem:  Write the code that exchanges two integers without using a temporary variable

Solution:  I guess this is a variant of the multiply question.  If a and b are integers, then a <- a+b and then b <- a-b, a <- a-b.  This won't work for non-numeric values and the exchange will not be exact for certain floating-point values because of rounding error.  Got bonus points for that observation :)



### Folder: macheps

Source: Interview

Problem:  Write a function that returns the smallest number that can be added to 1.0 and produce a number different from 1.0.  Followup: Can this be done without a loop?

Solution:  Ah, the machine epsilon problem, although the interviewer did not know what _machine epsilon_ was when I mentioned it or how it is used.  I coded this in three different ways.  One approach used a loop (which was what he wanted to see).  The second method answered the followup question which countered his expectation that the answer would be 'no'.  It uses the venerable Eispack algorithm (which is elegant, but not without issue).  The final approach was, of course, a straight application of the definition of machine epsilon.



### Folder: fizzbuzz

Source: Interview

Problem: Write a function to return an array of strings. Each element in the array is either the number corresponding to the one-based array index or 'Fizz' if the index is evenly divisible by 3, 'Buzz' if the index is evenly divisible by 5, and 'FizzBuzz' if the index is evenly divisible by both 3 and 5. The array length is 100 and that length, 3, and 5 may be hardcoded.

Solution:  This was one of a couple discussion problems presented to me that involved articulating multiple ways to solve a problem and describing the tradeoffs.  I liked this one since there is a single-pass method that involves computation (mods) and logic or a multi-pass algorithm that uses only straight assignment.  I suppose that if there is a 'trick' to this problem, it is recognizing that integers evenly divisible by 3 are of the form 3N where N is a natural number for purposes of this exercise.  The same observation applies for 5 and '3 and 5', i.e. integers evenly divisible by 3 and 5 are of the form 3x5xN.  I chose the multi-pass algorithm.



### Folder: interp

Source: Email

Problem: A numerical property, 'a' can vary between two limits, x1 and x2.  Write a class that accepts x1 and x2 (x1 <= x2) as well as y1 and y2 (y1 <= y2).  The class must have a method that accepts x such that x1 <= x <= x2.  When x = x1, the method returns y1.  When x = x2, the method returns y2.  Otherwise, it returns values in between y1 and y2. 

Solution:  The functional relationship between y and x is not defined, so the problem is treated as linear interpolation.  LI is common in UI applications, i.e. a slider is assigned a range of numerical values and then another property is varied inside its range depending on the slider value.  Essentially, the problem is asking for the equation of the line between (x1,y1) and (x2,y2).  There are many such forms and I personally prefer the parametric equation, i.e. P = (1-t)*P0 + t*P1 where t is in [0,1] for interpolation and P0 = (x1,y1), P1 = (x2,y2).  This equation does not break down in the degenerate case of a vertical line where there are an infinite number of y values for a single x value.  It also works when P0 and P1 are coincident and extrapolates when t < 0 or t > 1.

I'm not sure why this was presented as a 'programming' problem since I know some exceptional programmers who don't remember the equation of a line through two points.  I can see giving someone an equation in advance and then testing consideration of edge cases, for example.



### Folder: randomint

Source: Email

Problem: You are given two integers, i1 and i2 where i2 > i1.  Write the code that randomly selects any integer between i1 and i2, inclusive.  Followup:  What problems do you see with the implementation?

Solution:  The lady who presented this problem wrote the typical (JS) solution, var x = i1 + Math.round(Math.random()*(i2-i1));  The followup question is where she got stuck.  Three problems come to mind:

* 1 - System-supplied RNG's tend to be linear congruential and have generally poor statistical properties (although likely good enough for most interactive applications)
* 2 - A non-seeded RNG generates a new sequence every time a test is run which makes predictable testing more difficult
* 3 - The above formula has a subtle bias away from the endpoints of the interval

There are devs who blow me away who have no idea what a linear congruential generator is, so nothing lost if she missed this :)  I might expect someone to pick up on number 2.  The third observation is a bit more subtle.  Take an example of i1 = 0 and i2 = 3.  Based on the way rounding is implemented, numbers in the interval [0.5,1.5) get mapped to 1.  Numbers in [1.5, 2.5) get mapped to 2.  Numbers in [0,0.5) are mapped to 0.  Numbers in (2.5,3) are mapped to 3.  There is a higher probability of a pseudo-random selection getting mapped to 1 or 2 than 0 or 3 since the interval width is greater.  Check the code in the specs to see this bias in action.

The solution is to add a fudge factor of -0.499 and +0.499 to the lower/upper endpoints as illustrated in the _RandomIntInRange_ class from my Typescript Math Toolkit project.  The issue of repeatability in testing can be handled by using a seeded RNG.  The TSMT uses a Park-Miller generator.



### Folder: uberdriver

Source: Email

Problem: The Uber Driver problem was presented to me by someone who was asked this question by an interviewer with a friend who drives for Uber.  That friend asked the question to him and the interviewer turned it into a programming test with the justification that some of their user interfaces involve 'rating calculations.'

A driver is given a rating of 1, 2, 3, 4, or 5 stars after a trip.  The average of all rated trips is referred to as the 'driver rating.'  The rating and number of trips is known.  If a driver receives less than their current rating on their most recently completed trip, how many consecutive five-star trips are required to return the rating to its prior value?

Solution:  The problem is actually ill-posed as presented.  Since the prior rating is a real number and the remaining variables are integer, it may not be possible to *exactly* restore the prior rating after an integer number of five-star trips.  The problem should be to compute the number of trips to return the rating to 'at least' its former value, meaning that we are dealing with an inequality.

In any event, we need some notation.

R  = Current driver rating before downrated trip

K  = Number of trips completed prior to the downrated trip

T  = Rating received on current trip (Integer, must be less than current ranking)

N  = Number of consecutive 5-star trips needed to restore the driver rating to at least its value before the downrated trip

R* = New driver rating after N consecutive 5-star trips


We want to compute N so that R* >= R.  The rating is just an average, which is the sum of all ratings divided by the number of rated trips.  The sum of all ratings after the N 5-star trips is S + T + 5N, where S is the sum of all ratings before the downrated trip.  S = RK.  The total number of trips is K + 1 + N.  We want the new average, R* = (RK + T + 5N)/(K + 1 + N) >= R.

from which N = ceil( (R-T)/(5-R) ) after cranking through the algebra.

Note that if the driver is already rated 5.0, there is no way to restore the rating to exactly 5.0 or better after a downrate since 5-star is the maximum possible rating on a single trip.  This is an edge case likely to be missed, so perhaps this makes a good discussion problem on the subject of testing and edge cases.  It is, however, more of a math modeling problem than a programming problem.



### Folder: daytrader

Source: Email

Problem: A financial firm wishes to compare its day-traders not only to each other but to the best possible return on long positions throughout a session (which is most likely the trading day).  You are given an array of numbers representing stock or commodity prices throughout a trading session in time periods that are not known in advance.  Write a function that returns the maximum possible profit that could be achieved from a long, day-trade, i.e. a purchase at time-period i followed by a sale at time-period j, j > i, and no open positions at the end of the session.

Followup:  Data integrity is guaranteed in advance, so there is no need to check the individual array elements for validity.  What other edge cases do you anticipate and how do you propose to handle them?

Solution:  I chose this problem from the email list since it is similar to so many others that deal with complexity AND it sounds like an actual problem that you would encounter from a real client.  It's easy to imagine that array lengths could be quite long, so some thought toward improving the O(n^2) complexity from brute-force comparisons is worth the time and effort.  My first impression was that there should be an O(n) algorithm since we are only required to keep up a running tally of maximum profit and it is only possible to trade ahead in time.  

Followup:  I can think of three, quickly.  An empty array and I propose returning zero.  The second is equal prices throughout every time period, which is almost impossible in practice.  Return zero in this case.  Monotonically decreasing prices is the third situation, so there is no possible profitable long position.  Although rare in practice, this condition is theoretically possible.  A zero return fits the problem specs, but I propose returning the minimum-possible loss as an alternative (as a negative number). 


### Folder: twomin

Source: Email

Problem: You are given an array of integers.  Write a function that computes the minimum value, maximum value, and the minimum value strictly between min. and max. that is NOT in the array.  Do not use Math.min, Math.max, sorting, or a loop.  Discuss how you would handle negative testing.


Solution:  And, do not pass 'GO', do not collect $200.  Sorry, I could not resist :)  Well, this appears to be another one of those 'can you come up with creative solutions to problems with highly unusual constraints' questions.  I was thinking about Redux before reading this email, so my first thought was to try a solution using reducers.  Since I agreed to 'off the top of my head,' I guess I'm stuck with that approach.

Testing: For purposes of the exercise, let's put data integrity aside.  I suppose if you are worried about non-numeric and non-integer inputs, then throw an Error since that's indicative of a higher-level data/computation problem that needs to be resolved.  The usual suspects are zero-length and singleton arrays.  I like to return something reasonable in every case, so my proposal is (0,0,0) for the former and the singleton value of the array for the latter.  The caller may test if the array min. value is equal to the second min. value to indicate that there was no value that met the problem conditions.  On that note, another edge cases is non-sparse arrays; that is, arrays for which there is no 'gap' between integers in order to have a value in between min. and max. that is not in the input array.


### Folder: twodigits

Source: Email

Problem: For positive integers, n, that are not multiples of 10, extract the last two digits of n^2.  Remove these two digits from n^2 and determine if the resulting number is a perfect square.  Your code should be robust.  Bonus:  What is the largest value of n for which there is no carrying required to compute n^2?


Solution:  The inputs and outputs of this code are a bit ambiguous.  Since it's my example, I get to add the clarification :)  I like to think in terms of factories, so I propose a function that allows positive integers that are not multiplies of 10 to be constructed.  The return is an Object with an 'n' property that contains n^2 in the problem description.  The 'ones' and 'tens' proprities contain the ones-digit and tens-digit, respectively (i.e. the 'last two digits', LTR).  The 'square' property is a boolean that is true if the result of removing the ones and tens digits from n^2 results in a perfect square.

I suppose there are a couple tricks to this problem, the first of which is remembering that a perfect square has a integral square root.  While  _Number.isInteger_ comes to mind in terms of a test, realize that this does not account for potential rounding error in the computation of the square root.  For valid numbers, isInteger() tests if Math.floor(n) === n.  Tests for exact equality are not recommended when dealing with floating-point computations and that may be part of the rationale for the question.

Now, positive integers that are not multiples of 10 are of the form 10m + s where m = 0, 1, 2, ... and s is an integer in [1,9].  We'll let zero play along for purposes of this exercise.  The function _lastTwoDigits_ allows m and s to be input.  Defaults are 0 and 1, respectively.  n^2 = 100m^2 + 20ms + s^2 = 100m^2 + 10(2ms) + s^2.  This allows us to answer the bonus question.  Multiplying by 10 or 100 is trivial, so there can be no carrying in computing s^2, m^2, and 2ms.  This means that s and m could be 1, 2, or 3.  Since we want to maximize n, m = 3, which results in s = 1. So, n^2 = 100x9 + 10(2x3x1) + 1 = 900 + 10x6 + 1 = 961.  Since n = 10m + s, n = 31.  You can do a quick check with 32x32.  Note that this involves adding 6+6 in the hundreds place, which requires a carry into the thousands place.


### Folder: llist1

Source: Email

Problem: Write time- and space-efficient code that returns the k-th from the end node from a _singly-linked_ list.


Solution:  Ah, I was wondering when we would get to traditional data structures questions.  I suppose this is to test understanding of the internals of data structures as well as how you think about complexity.  It may also makes a good discussion question as some of the possible responses include

* 1 - Use a doubly-linked list.  I might give some credit for a 'Kobayashi Maru' style approach, but if k is large compared to the size of the list, then always using a doubly-linked list and traversing from the tail, backward is less efficient than starting from the head, forward.

* 2 - Convert the linked-list into an array and then use array indexing to return the required node.  This approach has issues with both the time and space-efficient requirements as it requires one full traversal through the list to create the array along with the extra memory requirement for the array.  The indexing is O(1) and might pay off for frequent calls to such a method with differing values of k (although it is invalidated if the list changes).  The interviewer, however, may consider the array requirement a disqualifier for this approach.  Good discussion question, however, to see if the candidate recognizes these tradeoffs.

If the size of the list is available, then it is possible to compute the number of node traversals from the head, forward, to return the required result or null if k is sufficiently large to extend beyond the list head.  It is useful to be able to solve the problem with a singly-linked list if the size is not available.  Start with the head node and count k nodes forward.  Now, the head is a candidate for k-th from the last node.  For every node remaining in the list, shift the candidate forward one node until the end of the list is reached.

Although I tend to use libraries as much as possible in production, I did have to write yet another linked list of my own in 2000 for a Flash game.  I needed to search nodes by both index and id.  Search results were cached and the list computed the optimal traversal direction and start node.  It originally supported singly- and doubly-linked lists and was extended to include circular.  It was also converted to Actionscript 2, then 3, then Javascript, and was recently placed in the Typescript Math Toolkit data structures library.  I created an ExtendedLinkedList class to add the k-from-end method and that is used for the solution to the problem.  You are welcome to deconstruct the internals of the TSMT Linked List at your convenience.


### Folder: bisection

Source: Email

Problem: Write a function or class that takes an interval [a,b] and a function, f(x), as input (x is a number and the function computes a number).  Return a subset of [a,b] (that may be the original interval) containing a root of f(x) or an indication that no root exists in [a,b].


Solution:  Well, I can see why this one was emailed to me :)  The submitter interviewed for a UI developer position at an engineering company.  He was placed in a room and asked to solve this problem, then give a presentation on the solution to a group.  Now, I don't always get complete information from an email, but as it is stated, I believe the problem is unfair.  This is interval bisection, taken straight out of Numerical Analysis 101 and it is simply not practical to expect any UI developer to have exposure to even basic numerical analysis.  How would that person be expected to test such code?

Now, if the algorithm was stated in detail, in advance (along with complete specs if you want the code to be tested), then I expect the problem could test two things.  First, does the candidate feel comfortable with programming math and engineering formulas?  Second, can the candidate write recursive code?  The recursive implementation of bisection is particularly elegant.

Here is how bisection works.  The function, f, should be continuous in [a,b].  If there is a sign change at the endpoints, i.e. f(a)*f(b) < 0, then there is at least one point in [a,b] where f(x) = 0, which is the definition of a root.  If no sign change is detected, then recursively divide the interval in half and repeat the test for each half until either a root is detected or the interval is less than or equal to a prescribed minimum width.  Stop in the latter case and indicate that no root was found.  If a root is detected, the new interval is passed onto some root-finding function to compute the numerical value of the root.  Starting with a tight interval tends to guarantee quick convergence in the root-finding algorithm.  Since bisection exponentially reduces interval width each step, it can often isolate a root in only a few steps.  So, it makes a good 'preprocessor' in a general root-finding procedure.

If I were to write out each step of the bisection process in detail and provide test problems for specs, then I would expect a good programmer to be able to write a bisection code in some reasonable amount of time.  To not provide such detail to a candidate means that the company is looking for the wrong type of person to begin with or simply does not know how to interview programmers.

I implemented a BisectInterval class containing a static bisect method.  Deconstruct the recursive implementation of bisection at your leisure and feel free to experiment with modifications.


### Folder: fibonacci

Source: Email

Problem: Write a function that computes the n-th value of the sequence, 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


Solution:  Ah, the Fibonacci sequence :)  I'm guessing the 'trick' to this problem is recognizing the pattern or formal recursion relation; that is, f(n) = n-th Fibonacci number = f(n-1) + f(n-2), f(0) = 0 and f(1) = 1.  Then, can you program the recursion in a loop?  

Here's an interesting observation.  What about the sequence 2, 1, 3, 4, 7, 11, ... ?  These are actually Lucas numbers, generated with the same recursion relation, but f(0) = 2 and f(1) = 1.  There is a relationship between Fibonacci and Lucas numbers that you can Google and then read about on your own time (if you want to prove that, like me, you have no life).  In fact, all Fibonacci-like sequences are rows in a Wythoff matrix.

A loop is not actually required as a generating function exists for the Fibonacci sequence, i.e. a function of the form g(n) where g is a closed-form representation of the n-th Fibonacci number.  I studied such generators extensively in my high-performance computing days since recursion relations are not directly vectorizable or parallelizable - all linear (homogeneous) recurrences with constant coefficients have closed-form solutions.  I chose the generator solution (also known at Binet's formula) just because it's different and it illustrates some practical considerations that must be addressed in production code.  In fact, it would required the ability to do arbitrary-precision floating-point for the most general implementation.  Best integer algorithm I've found is here:  Does require the ability to do arbitrary-precision floating-point for the most general implementation, though.  The best integer algorithm I've found is here: 

https://bosker.wordpress.com/2011/07/27/computing-fibonacci-numbers-using-binet%E2%80%99s-formula/


### Folder: firstnonrepeating

Source: Email

Problem: Write a function that returns the first non-repeating character of a string


Solution: I chose this one from the email list since string processing is not my background or strong suit.  So, there should be room for improvement in my solution(s).  On that note, two algorithms came to mind immediately.  The first involves a two-sweep approach.  First, scan through the string and record the repeat count for each character (a repeat count of zero means the character is only used once).  Then, scan the repeat-count data structure in order and return the first character for which the repeat count is zero. 'in order' is the key to the last sentence as we would normally think of using a JS Object as a hash.  The keys, however, are likely to be lexicographically ordered and we need to preserve the order that keys are placed into an associative container.  An ES6 Map is a possible solution and is used to illustrate this first approach.  While I've found Object hashes on single-character keys to be quite efficient, I have not tested the performance of Map access.  The key to success of this algorithm is very fast lookup and insertion into the container.  The code for this approach relies on a native (browser) Map implementation.

The second algorithm is more intuitive and easier to follow if another programmer comes along after you to deconstruct and/or modify your code.  The _indexOf_ function may be used (twice) to identify a non-repeating character.  A suitable definition of the latter is that the i-th character in the string is non-repeating if the first occurrence of the character is at that position and it not found again when starting a search after the current position.  Since _indexOf_ for a single character is O(n) complexity, this algorithm is average- and worst-case O(n^2), but with a very small constant term.  

This makes a good discusion problem (i.e. how would you solve it and what are the tradeoffs) in terms of algorithm complexity vs. simplicity of implementation vs. optimizing for worst-case complexity and the probability that worst-case is ever realized in production.  For example, how large are the strings expected to be in length?  These are things I would expect a good candidate to be able to talk to without necessarily having to write complete, working code.


### Folder: n/a

Source: Email

Problem: You are given eight coins, one of which is heavier than all the rest.  You are also given a balance scale.  What is the minimum number of weighings to identify the heavy coin?


Solution: This question was supposedly asked during a phone interview for a UI developer.  So much for the old days when we talked about the actual job that needed to be done :)

As asked, the correct answer is one, but that requires 'getting lucky' on the first attempt.  It is, however, the 'minimum' number.  A better way to pose the question would be to ask what is the minimum number of weighings that guarantees the heavy coin will be found?  A traditional divide-and-conquer approach would take three attempts since 8 = 2^3.  This involves weighing two groups of four, then divide the heavier group into two groups of two, and then weight each coin in the heavier group of two.

Think about atomic operations, i.e. number of coins that can be differentiated in a single weighing.  Two is obvious.  Three is also possible.  Set one coin aside and weigh the other two.  If one is heavier than the other, then the problem is solved.  If they weigh out as equal, then the coin placed aside is the heavy one.  So, either two or three coins can be resolved in a single weighing, provided we know in advance that the heavy coin is in that group.

Now, 8 = 3 + 3 + 2.  Start with two groups of three coins.  If they weigh out equally, then the heavy coin is in the group of two.  Result: Two weighings.  If one of the two groups of three is heavier, then use the technique above on the heavier group of three.  Result:  Two weighings.  The correct answer is two.


### Folder: shared

Source: Email

Problem: Write the code to compute the n-th row in the following progression

               1
             1   1
           1   2   1
         1   3   3   1
      1   4   6   4   1
    1   5  10   10  5   1


Solution: OMG, now someone has latched onto Pascal's triangle as a programming test.  This problem has a story associated with it that I find to be all too common.  You can read the story and [my solution at the this blog post].

In addition to symmetry about the 'middle', most people pick up on the forward recurrence relation, i.e. how to compute the inner values of the n-th row from those in row n-1.  The key to the implementation in the Typescript Math Toolkit is the ability to recurse forward or backward, i.e. compute row n from row n-1 or row n-1 from row n.  Since the most recently computed row is cached, this approach is optimized for successive requests for either the n-th row or the binomial coefficient (n k).


## Folder: oneline

Source: Email

Problem: Write one-line functions that perform each of the following tasks.  No multiple statements are allowed on a single line, no variable assignements are allowed, and you do not need to error-check inputs.

- revserse the characters in a string
- convert an input string (presumed to be a name) into uppercase initials with an optional delimiter
- pad an input string with the requested number of spaces on the left
- return the minimum element in an array of numbers
- return the maximum element in an array of numbers
- return true if all values in an array greater than a supplied input value and false otherwise
- return all the elements in an array that are greater than a supplied value
- return first index of array element greater than a supplied value or -1 if no such array value exsits


Solution: This (timed) test was given to a junior UI programmer who was provided with the problem list on a sheet of paper, a computer in a conference room with specs already written, and a build script.  Test functions were already provided with inputs; the function body was blank.  The person indicated a bit of apprehension over not completing the entire set in time and never got an answer as to why all functions had to be one-liners.

I would not expect a junior programmer to complete all of these; the test is likely to help differentiate between multiple candidates who otherwise are too close.  It may also help decide what tasks are assigned to a person after onboarding and how much mentoring may be required during their early career at a company.  The one-liner requirement is likely to see how much familiarity the candidate has with Array methods, or the group as a whole may be really into functional programming.


## Folder: worstcase

Source: Email

Problem:  You are given an array, A, of numbers of length N.  You are also given a function, F, that accepts a single number as an argument and it returns a boolean.  The function body is not relevant; it returns true if a certain condition is met and false otherwise.  It is known that if the function returns true for A[j], j = 0, 1, ... N-1, then it returns true for j+1, ... N-1.  Suggest a strategy that identifies the smallest index, j, such that F( A[j] ) is true with no more than two calls to F where the function returns true.  F may return false as many times as needed for the algorithm to work.  Return -1 if no such index exists.  The strategy for this problem should be designed to minimize the worst-case complexity.  Your presentation should include at least detailed pseudocode for your suggested algorithm (bonus points for actual code and specs).


Solution: This was given as a homework problem for a senrior developer.  The process of writing up an analysis of a problem and presentation to a team is a very realistic exercise.  It would take too much space to place my full writeup here, so it is deferred to a [blog post on minimizing worst-case complexity].


## Folder: grid

Source Email

Problem:  Part 1: You are given a 2D, m x n grid or matrix of cells, each of which contains either zero (cell has no value) or a positive integer indicating the value of that cell.  Define a path as starting at the upper, left-hand corner, with an allowable move as either one cell to the right or one cell down.  Each move accumulates prior cell values with the current cell value.  Discuss a method for finding the best-possible accumulated value.

Part 2:  How would you modify the above approach if the actual path traced by the optimal sequence of moves was occasionally required?

Part 3:  How would you approach the problem if it was necessary to start from any of the four corners and move to the (diagonally opposite) corner under comparable restrictions?  For example, starting from the bottom-right of the grid, acceptable moves are one cell left and one cell up.  Reusability is favored over performance.


Solution:  These problems were part of a whiteboard exercise for a junior to intermediate developer.  The _grid_ and _value_ part of the problem(s) makes me think it was a game company, but I'm not certain.  The interesting aspect of this process was that part 2 and 3 were not asked until the discussion of the prior problem was completed.  This impresses me as a rather brilliant way to see how a candidate lacking a demonstrable track record handles change requests.

Part 1:  First thought was a recursive algorithm - there, I've said it so now I'm stuck with it.  The only item requested is the optimal value.  Since the only way to get to a cell is a single move from the left or down, we can keep track of the accumulated optimal value from all cells prior to the current one.  The grid is processed left-to-right and then top-down.  The optimal value is at cell [m-1][n-1] at the end of the procedure.  Since the values associated with the input grid likely have direct association with a visual component (like tiles in a game), overwriting the original grid values is not a good idea.  The original grid is cloned before the recursive procedure is applied.

Part 2:  I am hesitant to rip up a working code, especially something that is easily deconstructed by another developer who comes along after me.  It was also stated that requesting the path was optional, not required, so I do not wish to compute **both** the path and value every time the grid is scanned.  One thought was to make a minimally-invasive mod. to the original code by creating a grid of _breadcrumbs_ that left a record as to whether or not the best move from previous to current cell was horizontal or vertical.  This auxilliary grid is initialized to something representing a 'no-move' status.  A second method could be created that extracts an optimal path from the breadcrumbs.  Another (and probably better) approach is to backtrack through the original grid in a manner similar to the approach used to extract the optimal solution to the 0-1 knapsack problem.

Part 3: If we look at top-left and bottom-right as starting points, the only things that are different in the code are start/end position, start/end values for loops, and a direction value.  So, these cases could be combined into one method.  Since the accumulated values structure is cloned from the original grid, it could be transposed or flipped about a vertical axis during this process.  This results in top-right being the same as the original top-left algorithm.  Bottom-left is the same as the original bottom-right.  So, one method could be used to handle all four cases with some preprocessing.  This favors reusability over both time and space complexity.

Note:  I'm in a pretty heavy time crunch at present, so only the solution to part 1 is implemented and tested.  Placeholders are in place for part 2.


## Folder: factorial

Source: Email

Problem:  Write the code to compute n! without a loop.

Solution: Sounds like one of those whiteboard exercises.  I suspect what the interviewer is looking for is the classic recursive method that involves a _fact()_ or _factorial()_ function that takes n as an argument and returns 1 if n is equal to one or _n*fact(n-1)_ otherwise (just Google it).  I've enclosed this code along with the old-school loop if you want to do a performance comparison.  It isn't long after n = 100 that the maximum number limit will be reached, so something on the order of a hundred multiplies is, after all, pretty efficient.

It is also possible to use the Gamma function, G(x), in which case n! = G(n+1), but I would never recommend this in production.  Typical practice is to use a Lanczos approximation of log(G(x)) which requires a call to Math.exp and another to Math.round for the result.  There is approximation error in addition to rounding error and I believe this method will fail as quickly as n = 13.  The code is included for experimentation, but try it at home and not at work :)

And, don't forget the edge case, 0! = 1 by definition.


### Folder: repeatingdecimal

Source: Email

Problem:  Write a function that takes an input string that represents a number with a repeating sequence after the decimal, i.e. '1.454545 or 2.0356356' .  The digits in the repeat sequence may be presumed to be unique.  The sequence will be repeated at least once and possibly more.  Return the two integers that allow this number to be represented as a fraction or null if no repeat sequence exists after the decimal.  Accept a boolean argument that, if true, causes the fraction to be returned in reduced form.  This value should default to false.  

Solution: This was presented as a homework problem - I'm presuming for an EdTech company.  Lest you think I'm doing someone's homework for them, there is typically a month or more lag between problem submission and inclusion in this repo.

Now, I do like several aspects of this problem.  First, it's tractable and of reasonable length.  It is unlikely that someone will know exactly how to approach every step in the problem, so that forces the candidate to do a lookup on Google.  Let's be realistic in that no one remembers (or knows) how to do **everything** off the top of their head.  Performing online research, then 'figuring it out and getting the job done' is a very important skill.  It also provides an opportunity for the candidate to demonstrate if they can write code that others can easily deconstruct and possibly modify in the future.

There may be a very clever RegEx pattern to look up the repeating sequence, but I'm not a clever RegEx person.  I use RegEx infrequently and typically copy-pasta something I've done in the past.  So, my approach may be more verbose than necessary.  The final aspect I like about this problem is that there are subtle numerical issues due to the fact that the repeat sequence may not be repeated with sufficient frequency to obtain desired accuracy from direct floating-point computation.


### Folder: anagram

Source: Email

Problem:  Discuss various solutions to creating a function that takes two words as input and returns a boolean to indicate whether or not the two words are anagrams.  What is the complexity of each approach and how do you expect the solutions to scale to larger-length strings?  Discuss edge cases.

Solution:  I chose this one as it is a string-processing problem, which if you have read this far you know is not an area of strength for me.  I also like discussion problems and this one was given to an applicant for a junior front-end dev. position.  The value of discussion problems is that they simulate a very real environment where devs get together in a conference room and discuss how to solve a problem.  Can the candidate fit into this environment and what problem-solving instincts are displayed?  If not evident in track record or online portfolio, the latter can generally only be determined in a presentation/discussion setting.

I suppose the classic answer to this problem is split-sort-join-compare.  The whole split-some operation-join combination is a solution to a lot of string-related problems.  It is one-line, elegant, and likely effective for modest-size strings.  Complexity is dominated by the sort so we will say _n log(n)_.  Split and join, however, are not trivial from an actual runtime standpoint.

I know everyone is indoctrinated to think big-O when it comes to complexity, but that's just a high-level representation of how an algorithm scales.  My first question in designing a solution to this problem is to ask how likely it is that two words will really be anagrams, especially as the number of letters increases.  In practice, not very likely.  So, I would try to come up with an approach designed to prove false as quickly as possible.  That is the idea behind the provided example, although in the worst case, it's _n^2_.  I am sure that someone more experienced in string processing than myself can come up with a better solution, but this one is pretty easy to follow.

In terms of edge cases, I would ask about mixed case, i.e. are 'sAw' and 'was' to be considered anagrams?  For purposes of this particular discussion, let's presume that the group decided in the negative.  Same for null strings.  I would also test for null or undefined inputs.


### Folder: arrobjsearch

Source: Email

Problem:  You are given an array of Objects.  Object values are string or numeric data.  Arrange to search for a particular value (not key) across all Objects and return the array index corresponding to the first Object that contains that value.

Solution:  This really was not a 'programming test' problem, but it could be a homework-style problem.  I threw something together to help out a friend.  Let's presume ES 2015 as the edge of  the envelope so that only _Object.keys_ is available.

In a practical setting, the input array is created once and then an arbitrary number of searches are performed against that data.  This does illustrate a good general principle, namely using an Object as a hash table.  Since multiple searches are performed across the same data, split the problem into two parts.  Build a hash in the first step (think of this as setting a data provider) and then provide a _search_ method to perform searches across that structure.  If name/value pairs in an Object are backed by a balanced binary tree, then build and search are order _log (ne)_ if _n_ is the array length and _e_ is the average number of items per Object.

The code is quick-n-dirty, but that gives you a chance to experiment and improve upon the implementation.


### Folder: countingsort

Source: Email

Problem:  Can you sort an array of non-negative integers in less than n log(n) complexity?  How would you implement such a sort?

Solution:  Well, I haven't looked at the internals of any sorting algorithm in over 20 years, so this was a good one to remove some of the rust :)  I'm not sure of the context in which this question was asked (i.e. discussion, whiteboard, homework, etc).  My first thought is that comparison sorts are out of the question since they are provably no better than n log(n).  That means we are looking for something with linear complexity.  Honestly, radix and bucket came to mind first, and then after some head scratching, I barely remembered counting sort.

Now, counting sort requires bounding information.  In the worst case, we can presume zero for a lower bound and compute the upper bound in O(n) time.  If the upper bound is _k_, then the counting sort for the specified inputs is O(n+k).  While this sort can be time efficient if _k_ is small compared to the number of input elements, it can be prohibitive in time and space if the upper bound is very large. 

In terms of 'how would you implement such a sort,' my answer is pretty simple.  Use the same tried-and-true methodology employed by experienced programmers world-wide.  Rip off the basics from Wikipedia and then wrap it with suitable testing for edge cases.  I also made the bounding information optional.  Not providing this information allows the counting sort to be called with only the input array (just like any other sort) at the expense of additional run time.


### Folder: hierarchy

Source: Email

Problem:  You are given an _Array_ of _Objects_.  Each _Object_ may have a property whose name you are also given, i.e. 'title' or 'id'.  Each _Object_ may have a 'children' property which is itself an _Array_ of _Objects_.  Each of those _Objects_ may have further children and/or the desired property you are searching for.  Write a function that returns all the property values in an _Array_ of _strings_.

Solution:  Hmmm ... this seems to have recursion written all over it :)  Recursion is slow, but sometimes it is the most elegant means to code desired functionality.  It can also be easier for another developer to deconstruct at a later date.

My general experience with data structures such as the one described is they are at worst a few levels deep, so a recursive solution is likely okay in terms of run time.


### Folder: invertbinary

Source: Email

Problem:  Write the code to invert a binary tree.

Solution:  Unless you are a very, very large company who hires a lot of CS grads right out of college, this impresses me as a pretty useless interview question, especially as it's something that few people would ever do in practice (you can always modify the order in which you traverse nodes without altering the tree structure).

And, what does 'invert' mean?  I take it as a reflection about an axis.  Reflecting the tree in general about a horizontal axis at the root seems to make no sense, so we are left with reflection of each node about a vertical axis, which causes a reversal of the left and right children.  I'm also supposing that this 'inversion' is performed in place.

The first thing that came to mind is a straight recursive approach, which is probably the actual rationale behind the question (hence something you would use to differentiate a lot of CS grads who otherwise have no experience/track record).  I'm curious if it would be possible to modify the code for a level-order traversal of the tree as a potential solution.  Unfortunately, I don't have time to experiment or search the web for hours to see if anyone has posted such a solution.  Perhaps an astute reader with more bandwidth can write something and submit a PR.

The Typescript implementation is based on a very lightweight _Node_ implementation, which is used to manually construct a binary tree.  The tree _root_ is passed to an _invert_ function.

My follow-up question pertains to the practicality of such an operation.  With an in-place 'inversion', any subsequent tree operation that relies on the order presumption of left node value being less than or equal to right node value no longer works.


### Folder: reverselinkedlist

Source: Email

Problem:  Write a function that recursively reverses a singly-linked list.  You may use any structure you like to represent a linked list.

Solution:  Hmmm ... another one grabbed off the internet?  My first inclination was to say 'use the Typescript Math Toolkit Linked List.'  That code allows you to work with single-, double-, or circularly-linked lists and you can change on-the-fly.  No need to physically reverse anything.  I almost passed on this one and then thought it might make a good one to fully deconstruct since the requirement is for a recursive implementation.  So, here is the code

```
export interface ILListNode
{
  data: any;

  next: ILListNode;
}

export function reverseLList(node: ILListNode): ILListNode
{
  if (node == undefined || node == null || node.next == null) {
    return node;
  }

  let reverse: ILListNode = reverseLList(node.next);  // this locates the sentinel node of the original list

  // this gets the pointers in 'reverse' order
  node.next.next = node;
  node.next      = null;

  return reverse;
}
```

The input to the function should be the head of the original list, so the recursion needs to locate the sentinel node and then 'reverse' all the node pointers.  The new list head should be returned.

The first part of the function (calling itself until _node.next_ is null) locates the sentinel node.  The other tests ensure the code works for null and singleton inputs.

Nodes are placed onto the stack until the first _if_ test is satisfied, at which point _reverse_ is set to the original sentinel node.  If there are three nodes, say #1, #2, #3, then _reverse_ points to #3. Nodes #1 and #2 are placed into the stack in that order.

Now, the stack is LIFO, so when the recursion unwinds, it will execute the remaining code with node #2 followed by node #1.  Write down the operations needed for each node, in that order:

#2 - #2 'next' points to #3.  We want #3 'next' to be #2.  Setting #2 'next' to null will make sense when the unwinding is complete.

#1 - #1 'next' points to #2.  We want #2 'next' to be #1.  Set #1 'next' to null.

Now, we are finished.  So,

_reverse_ points to #3.  We set #3 'next' to #2.  #2 'next' was set to #1.  #1 'next' is null.  The pointers have been completely reversed and the original head is now marked as a sentinel node.  The original sentinel node is returned as the new head and the list is reversed.

Hope that helps!  If not, place some _console.log_ statements in the code and practice with 3-5 nodes until it makes sense.  This is what I had to do to get the code right - sketch out what needs to be accomplished on paper; the first step is locating the sentinel node.  Make a paper copy of what is on the stack, then write out what needs to be accomplished as data is popped of the stack.  The rest of the code will almost write itself :)


### Folder: euclid

Source: Email

Problem:  Write the code to recursively apply Euclid's algorithm.

Solution:  I'm not sure of the context of this problem, although the person interviewed claimed to be a full-stack dev. with most of his experience on the front end.  I really would not expect a FE dev. to know how to compute GCD completely cold.  The recursive implementation of Euclid is particularly elegant and it is one of the oldest fundamental algorithms, so I could kind of get it as a homework problem.

In any event, I included LCM and GCD with both recursive and non-recursive implementations of the latter.  And, just in case someone springs this on you (i.e. grabbed a problem off the internet to try and make themselves look cool), I included extended Euclid as a bonus :)  Use that one when it's time for you to ask questions as it's a very important algorithm in the analysis of linear congruences.


### Contributions

Contributions are welcome.  Email me if you wish to submit a problem and I will add it to the collection as soon as time allows.  If you would like to submit a problem whose solution you implemented in Typescript, then submit a pull request or send me the source via email (along with a brief text blurb describing the problem and solution).  You will receive attribution and a link to your web site/blog/etc. if provided.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>

[my solution at the this blog post]: <http://www.algorithmist.net/programming/pascals-triangle-and-the-developer-interview/>

[blog post on minimizing worst-case complexity]: <http://www.algorithmist.net/applied-math/minimizing-worst-case-complexity/>
