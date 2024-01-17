function nextPalindrome(num) {
  num = parseInt(num);

  // Helper function to check if a number is a palindrome
  function isPalindrome(n) {
    return n.toString() === n.toString().split("").reverse().join("");
  }

  // Check for the next palindrome by incrementing the number
  while (true) {
    num++;

    if (isPalindrome(num)) {
      return num;
    }
  }
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
