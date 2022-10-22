## Solutions to Lab 4 - Part 2 Questions
#### Nikki Rejai

1. The loop goes through 3 iterations since the length of the array prices is 3, so at line 12 i=3 and i has a function scope so 3 is printed in the console.
2. After all 3 iterations of the loop, at line 13 the variable discountedPrice = 150 since 300*0.5=150, and discountedPrice has a function scope so 150 is printed in the console.
3. After all 3 iterations of the loop, at line 14 since the variable discountedPrice = 150, so finalPrice = (150*100)/100 = 150 and finalPrice has a function scope so 150 is printed in the console.
4. The function will return discounted = [ 50, 100, 150 ] as the discounted prices are calculated as half of the original values [ 100, 200, 300 ] and the discounted array has a function scope.
5. The code causes an error because the variable i has a block scope and is defined in the for loop but the code trying to access i at line 12 is outside the block of the loop, causing an error.
6. The code causes an error at line 13 because the variable discountedPrice has a block scope and line 13 is outside its block and cannot be accessed from there, causing error.
7. After all 3 iterations of the loop, at line 14 since the variable discountedPrice = 150, so finalPrice = (150*100)/100 = 150 and finalPrice has a block scope, and line 14 is in the block so 150 is printed in the console.
8. The function will return discounted = [ 50, 100, 150 ] as the discounted prices are calculated as half of the original values [ 100, 200, 300 ] and the discounted array has a block scope and the return statement is in the block.
9. The code causes an error because the variable i has a block scope and is defined in the for loop but the code trying to access i at line 11 is outside the block of the loop, causing an error.
10. At line 12 the function prints 3 to the console, because the length of the array is defined as length=3 at the beginning of the function and not changed, and the line 12 is in the block.
11. 