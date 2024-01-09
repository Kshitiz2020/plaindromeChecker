import React, { useState } from "react";

const PalindromeChecker = () => {
  const [inputText, setInputText] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const checkPalindrome = () => {
    const reversedText = inputText.toLowerCase().split("").reverse().join("");
    setIsPalindrome(inputText.toLowerCase() === reversedText);
  };

  const resetFunction = () => {
    checkPalindrome();
    setInputText(" ");
  };

  return (
    <>
      <h1>Enter your text to check the Palindrome</h1>
      <br />
      <input
        type="text"
        placeholder="Enter your text to check the  Palindrome"
        onChange={handleInputChange}
      />
      <button onClick={resetFunction}>Check</button>
      {inputText.length === 0 ? null : (
        <div>
          {isPalindrome ? (
            <p>The entered text is a palindrome!</p>
          ) : (
            <p>The entered text is not a palindrome.</p>
          )}
        </div>
      )}
    </>
  );
};
export default PalindromeChecker;
