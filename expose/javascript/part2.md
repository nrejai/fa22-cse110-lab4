## Solutions to Lab 4 - Part 2 Questions
#### Nikki Rejai

1. The loop goes through 3 iterations since the length of the array prices is 3, so at line 12 i=3 and i has a function scope so 3 is printed in the console.
2. After all 3 iterations of the loop, at line 13 the variable discountedPrice = 150 since 300*0.5=150, and discountedPrice has a function scope so 150 is printed in the console.
3. After all 3 iterations of the loop, at line 14 since the variable discountedPrice = 150, so finalPrice = (150*100)/100 = 150 and finalPrice has a function scope so 150 is printed in the console.
4. The function will return the array discounted = [ 50, 100, 150 ] as the discounted prices are calculated as half of the original values [ 100, 200, 300 ] and the discounted array has a function scope.
5. The code causes an error because the variable i has a block scope and is defined in the for loop but the code trying to access i at line 12 is outside the block of the loop, causing an error.
6. The code causes an error at line 13 because the variable discountedPrice has a block scope and line 13 is outside its block and cannot be accessed from there, causing error.
7. After all 3 iterations of the loop, at line 14 since the variable discountedPrice = 150, so finalPrice = (150*100)/100 = 150 and finalPrice has a block scope, and line 14 is in the block so 150 is printed in the console.
8. The function will return discounted = [ 50, 100, 150 ] as the discounted prices are calculated as half of the original values [ 100, 200, 300 ] and the discounted array has a block scope and the return statement is in the block.
9. The code causes an error because the variable i has a block scope and is defined in the for loop but the code trying to access i at line 11 is outside the block of the loop, causing an error.
10. At line 12 the function prints 3 to the console, because the length of the array is defined as length=3 at the beginning of the function and not changed, and the line 12 is in the block.
11. The function will return discounted = [ 50, 100, 150 ] as the discounted prices are calculated as half of the original values [ 100, 200, 300 ] and the values are not changed once they are added, and the discounted array has a block scope and the return statement is in the block.
12. 
- A) student.name
- B) student["Grad Year"]
- C) student.greeting()
- D) student["Favorite Teacher"].name
- E) student.courseLoad[0]

13.  
- A) '3' + 2 = 32
     - Adding a string and int, reads the int as a string and concatenates the two strings. 
- B) '3' - 2 = 1
    - Subtracting a string and int, converts the string to an int and performs subtraction on the two ints.
- C) 3 + null = 3
    - Adding null and an int treats null as 0 and adds the two ints.
- D) '3' + null = 3null
    - Adding null and a string treats null as a string and concatenates the two strings.
- E) true + 3 = 4
    - Adding an int and boolean value converts true to 1 and adds the ints.
- F) false + null = 0
    - Adding a boolean and null value converts them both to 0 and adding the two ints gets a result of 0.
- G) '3' + undefined = 3undefined
    - Adding undefined to a string converts it to a string as well, so adding them concatenates the two strings.
- H) '3' - undefined = NaN
    - This results in an error because undefined cannot be converted to an int.
  
14. 
- A) ‘2’ > 1: true
    - The string '2' gets converted to an int and 2 > 1 so it evaluates as true.
- B) ‘2’ < ‘12’: false
    - The ascii values for the first digit are compared for strings, so '2' > '1' and thus the comparison evaluates as false.
- C) 2 == ‘2’: true 
    - The == operator type casts to them to the same type and thus the comparison evaluates as true.
- D) 2 === ‘2’: false
    - This one is a strict compare so it compares the types and evaluates to false since int and string are different types
- E) true == 2: false
    - The true is converted to 1 for the == operator with an int, and since 1 is not equal to 2 the comparison evaluates to false
- F) true === Boolean(2)
    - The function Boolean() returns true for values which are not 0, so Boolean(2) is true, thus this comparison evaluates to true.

15.  The == operator compares the values after type casting, whereas the === operator is a strict comparison so it compares values on top of checking for the type similarity of the values.
16.   Look at part2-question16.js for code.
17.   In this section for each element in the array, first the doSomething() function is called on the value and doubles it and then pushes the doubled value onto the modified array, which is returned in the end with all the doubled values.
18.  Look at part2-question18.js for code.
19.  This code prints them in the order 1, 4, 3, 2. The first three values printed immediately, and 2 is printed a little later since it has the largest delay time.