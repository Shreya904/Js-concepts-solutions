const input = document.querySelector("#text-input");
const btn = document.querySelector("#check-btn");
const result = document.querySelector(".result p");

let isPalindrome = (str) =>{
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let text = input.value;
    if(text === ""){
        alert("Please enter any text.");
        return;
    }
    if(isPalindrome(text)){
        result.innerText = `${text} is a Palindrome.`
    } else {
        result.innerText = `${text} is not a Palindrome.`
    }
})