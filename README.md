# Amne Coding Challenge

As Amne expands, we will want to understand large-scale patterns in home values.

As we look at patterns across windows of certain sizes, we will need to efficiently track trends such as increasing and decreasing subranges.

For this problem, you are given N days of average home sale price data, and a fixed window size K . For each window of K days, from left to right, find the number of increasing subranges within the window minus the number of decreasing subranges within the window.

A window of days is defined as a contiguous range of days. Thus, there are exactly N-K+1 windows where this metric needs to be computed. An increasing subrange is defined as a contiguous range of indices [a,b], a < b , where each element is larger than the previous element. A decreasing subrange is similarly defined, except each element is smaller than the previous element.
## Constraints
1 ≤ N ≤ 200,000 days
1 ≤ K ≤ N days
## Input Format
Your solution should accept an input file (input.txt) with the following contents:

 Line 1: Two integers, N and K.
 Line 2: N positive integers of average home sale price, each less than 1,000,000.

Your solution will only be tested with valid input, according to the above constraints.
## Output Format
Your solution should output one integer for each window’s result, with each integer on a separate line, to an output file or to the console.


## Solution

The first thing needed to calculate the size of each window is defining the maximum elements from the main array we are going to
loop, which is N-K+1 times, having that, we need each of the windows or called subranges to know if are incremental or decremental,
with the javascript Prototype.every() function we make the decision more efficient when the condition is met. Then we make the function
subrange() a double recursive function for each of the sides of that window to search for incremental or decrementals.
