// 1 Function: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}
// 2 Function: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}
// 3 Function: findMaximum
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
// 4 Function: isPalindrome
function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}
// 5 Function: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
const discountAmount = (discountPercentage / 100) * originalPrice;
return originalPrice - discountAmount;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice }; 