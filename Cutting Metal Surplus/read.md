Cutting Metal Surplus

The owner of a construction company has a surplus of rods of arbitrary lengths. A local contractor offers to buy any of the surplus, as long as all the rods have the same exact integer length, referred to as saleLength. The number of sellable rods can be increased by cutting each rod zero or more times, but each cut has a cost denoted by costPerCut. After all cuts have been made, any leftover rods having a length other than saleLength must be discarded for no profit. The owner's total profit for the sale is calculated as:

totalProfit = total UniformRods x saleLength x salePrice - totalCuts x costPerCut

where totalUniformRods is the number of sellable rods, salePrice is the per unit length price that the contractor agrees to pay, and totalCuts is the total number of times the rods needed to be cut.

Example

Lengths = [30, 59, 110]
costPerCut = 1
salePrice = 10 per unit length


Function description 
Complete the function maxProfit in the editor below.

maxProfit has the following parameter(s):
costPerCut: cost to make a cut
salePrice: per unit length sales price
Lengths[n]: integer rod lengths

Returns:
int: maximum possible profit

Constraints

1 <= n <= 50
1 <= lengths[i] <= 10^4
1 <= salePrice, costPerCut <= 1000
