#Binary Search

Binary search is an algorithm for finding a specified item from an ordered list of items.  The algorithm works by repeatedly dividing the portion of the list that could contain the item in half until you have narrowed all possible locations down to just one.

Binary search is often used to find an item in an array (of data).

The main idea of binary search is to keep track of the current range that your target might be in and to update this range accordingly.

In this example, a guessing game is used as a context to model how binary search works.  The game gives an array of prime numbers from 1-100.  The goal of the game is to guess where a number is positioned in an array.  When writing an algorithm using binary search three things must be considered:

* What problem is this algorithm trying to solve?
* What are the inputs?
* What are the outputs?

In this case the criteria are:

* The algorithm should find the location of the targeted prime number.
* The inputs are the array of data (prime numbers from 1-100) and the targeted number in this array.
* The outputs is the guessed index of the array or an incorrect target value.

When these criteria are determined I also consider what steps must be take to create this algorithm.  Since binary search is a repetitive process looping will be used until the answer is found.  The process boiled down to this:

* In this case a while() loop was to repeat the search until the correct target was found.
* *min* represents the smallest viable index and *max* represents the largest viable index in a range.
* A *guess* is equal to the average of *min* + *max* (since this represents the midpoint of the range).
* While *min* is less than or equal to *max* keep guessing.  If this is not true then the number does not exist.
* If the guess is too low then *min* should be one larger than the guess.
* If the guess is too high then *max* should be one larger than the guess.
* The guess is the **index** of the number in the array not the number!

I wrote two solutions using two approaches at the while(true) logic.
