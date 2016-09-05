# Typescript Programming Test Problems

A friend and C++/JS developer, Dave, recently started a discussion on programming tests.  He laughed a bit at some of the questions he had been asked during an interview and then commented about how there is lots of information about these problems online in other languages, but not Typescript.  Then, he hit me with the proverbial punch line - "Jim, why don't you do that?"

Yes, as if I need another side project in addition to the Typescript Math Toolkit :)  I do admit it's a great excuse for some late-night coffee and it provides another source of Typescript examples.

Some of these problems came from interviews of me, but most were submitted by others via email.  If you have a problem you would like added to this repo, then email me at the address below.

All solutions are off-the-top-of-my-head, which is a fancy way of saying there is often more than one way to solve a problem and that the first thing that pops into my mind is not necessarily the best solution.  

Author:  Jim Armstrong - [The Algorithmist]

@algorithmist

theAlgorithmist [at] gmail [dot] com

Typescript: 1.8.2

Version: 1.0.0


## Installation

Installation involves all the usual suspects

  - npm and gulp installed globally
  - Clone the repository
  - npm install
  - get coffee (this is the most important step)


### Building and Running the tests

1. gulp compile

2. gulp serve

The test suite is in Jasmine.  All problem solutions are in folders under /src.  The list of problems is provided below, by folder.  This list will likely be moved to a Wiki as the problem set expands.



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

Solution:  This was one of a couple discussion problems presented to me that involved articulating multiple ways to solve a problem and describing the tradeoffs.  I liked this one since there is a single-pass method that involves computation (mods) and logic or a multi-pass algorithm that uses only straight assignment.  I suppose that if there is a 'trick' to this problem, it is recognizing that integers evenly divisble by 3 are of the form 3N where N is a natural number for purposes of this exercise.  The same observation applies for 5 and '3 and 5', i.e. integers evenly divisible by 3 and 5 are of the form 3x5xN.  I chose the multi-pass algorithm.



### Folder: interp

Source: Email

Problem: A numerical property, 'a' can vary between two limits, x1 and x2.  Write a class that accepts x1 and x2 (x1 <= x2) as well as y1 and y2 (y1 <= y2).  The class must have a method that accepts x such that x1 <= x <= x2.  When x = x1, the method returns y1.  When x = x2, the method returns y2.  Otherwise, it returns values in between y1 and y2. 

Solution:  The functional relationship between y and x is not defined, so the problem is treated as linear interpolation.  LI is common in UI applications, i.e. a slider is assigned a range of numerical values and then another property is varied inside its range depending on the slider value.  Essentially, the problem is asking for the equation of the line between (x1,y1) and (x2,y2).  There are many such forms and I personally prefer the parameteric equation, i.e. P = (1-t)*P0 + t*P1 where t is in [0,1] for interpolation and P0 = (x1,y1), P1 = (x2,y2).  This equation does not break down in the degenerate case of a vertical line where there are an infinite number of y values for a single x value.  It also works when P0 and P1 are coincident and extrapolates when t < 0 or t > 1.

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

Testing: For purposes of the exercise, let's put data integrity aside.  I suppose if you are worried about non-numeric and non-integer inputs, then throw an Error since that's indicative of a higher-level data/computation problem that needs to be resolved.  The usual suspects are zero-length and singleton arrays.  I like to return something reasonable in every case, so my proposal is (0,0,0) for the former and the singleton value of the array for the latter.  The caller may test if the array min. value is equal to the second min. value to indicate that there was no value that met the problem contitions.  On that note, another edge cases is non-sparse arrays; that is, arrays for which there is no 'gap' between integers in order to have a value in between min. and max. that is not in the input array. 


### Folder: twodigits

Source: Email

Problem: For positive integers, n, that are not multiples of 10, extract the last two digits of n^2.  Remove these two digits from n^2 and determine if the resulting number is a perfect square.  Your code should be robust.  Bonus:  What is the largest value of n for which there is no carrying required to compute n^2?


Solution:  The inputs and outputs of this code are a bit ambiguous.  Since it's my example, I get to add the clarification :)  I like to think in terms of factories, so I propose a function that allows positive integers that are not multiplies of 10 to be constructed.  The return is an Object with an 'n' property that contains n^2 in the problem description.  The 'ones' and 'tens' proprities contain the ones-digit and tens-digit, respectively (i.e. the 'last two digits', LTR).  The 'square' property is a boolean that is true if the result of removing the ones and tens digits from n^2 results in a perfect square.

I suppose there are a couple tricks to this problem, the first of which is remembering that a perfect square has a integral square root.  While  _Number.isInteger_ comes to mind in terms of a test, realize that this does not account for potential rounding error in the computation of the square root.  For valid numbers, isInteger() tests if Math.floor(n) === n.  Tests for exact equality are not recommended when dealing with floating-point computations and that may be part of the rationale for the question.

Now, positive integers that are not multiples of 10 are of the form 10m + s where m = 0, 1, 2, ... and s is an integer in [1,9].  We'll let zero play along for purposes of this exercise.  The function _lastTwoDigits_ allows m and s to be input.  Defaults are 0 and 1, respectively.  n^2 = 100m^2 + 20ms + s^2 = 100m^2 + 10(2ms) + s^2.  This allows us to answer the bonus question.  Multiplying by 10 or 100 is trivial, so there can be no carrying in computing s^2, m^2, and 2ms.  This means that s and m could be 1, 2, or 3.  Since we want to maximize n, m = 3, which results in s = 1. So, n^2 = 100x9 + 10(2x3x1) + 1 = 900 + 10x6 + 1 = 961.  Since n = 10m + s, n = 31.  You can do a quick check with 32x32.  Note that this involves adding 6+6 in the hundreds place, which requires a carry into the thousands place.



### Contributions

Contributions are welcome.  Email me if you wish to submimt a problem and I will add it to the collection as soon as time allows.  If you would like to submit a problem whose solution you implemented in Typescript, then submit a pull request or send me the source via email (along with a brief text blurb describing the problem and solution).  You will receive attribution and a link to your web site/blog/etc. if provided.


License
----

Apache 2.0

**Free Software? Yeah, Homey plays that**

[//]: # (kudos http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[The Algorithmist]: <http://algorithmist.net>
