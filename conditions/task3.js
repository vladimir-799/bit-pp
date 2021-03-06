var x = 15;
if (x % 3 === 0 && x % 5 === 0 ){
    console.log(x + ' is divisible with 3 and 5');
}   else if (x % 3 === 0) {
    console.log(x + ' is divisible with 3 but not with 5');
}   else if (x % 5 === 0) {
    console.log(x + ' is divisible with 5 but not with 3');
}   else {
    console.log(x + ' is not divisible with 3 and 5');
}
