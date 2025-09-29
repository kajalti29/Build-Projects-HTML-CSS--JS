function isPalindromeNumber(num){
    let original = num;
    let reversed = 0;

    while(num > 0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed ? "Palindrome" : "Not a Palindrome";
}

console.log(isPalindromeNumber(121)); // Output: Palindrome
console.log(isPalindromeNumber(123)); // Output: Not a Palindrome
