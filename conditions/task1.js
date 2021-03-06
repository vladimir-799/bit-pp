//Write a program that compares two numbers and display the larger. Result should be displayed in the console.
var result = '';
var num1 = 21;
var num2 = 7;

if (num1 > num2) {
    result = 'Number ' + num1 + ' is greater than ' + num2
} else if (num2 > num1) {
        result = 'Number ' + num2 + ' is greater than ' + num1    
} else {
        result = 'Numbers are equal'
}

console.log (result)
