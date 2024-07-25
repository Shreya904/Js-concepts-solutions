const input = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const results = document.querySelector("#results-div");

checkBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const num = input.value.trim();
    if (num === "") {
        alert("Please provide a phone number");
        return;
    }
    validatePhoneNumber(num);
});

function validatePhoneNumber(num) {
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

    if (phoneRegex.test(num)) {
        results.textContent = `Valid US number: ${num}`;
        results.style.color = 'green';
    } else {
        results.textContent = `Invalid US number: ${num}`;
        results.style.color = 'red';
    }
}

clearBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    input.value = '';
    results.textContent = '';
});
