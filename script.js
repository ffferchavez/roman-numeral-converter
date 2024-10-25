// 1.DOM Elements
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

// 2. Event listener for the button click

convertBtn.addEventListener("click", () => {
    const number = parseInt(numberInput.value, 10);

// 3. Validation checks

if (isNaN(number)) {
    result.textContent = "Please enter a valid number";
} else if (number < 1) {
    result.textContent = "Please enter a number equal or greater than 1";
} else if (number >= 4000) {
    result.textContent = "Please enter a number equal or less than 3999";
} else {
    result.textContent = convertToRoman(number);
}

});

// 4. Function to convert a number to roman numerals

const convertToRoman = (num) => {
    const romanNumerals = [
        {value: 1000, numeral: "M"}, 
        {value: 900, numeral: "CM"}, 
        {value: 500, numeral: "D"}, 
        {value: 400, numeral: "CD"}, 
        {value: 100, numeral: "C"}, 
        {value: 90, numeral: "XC"}, 
        {value: 50, numeral: "L"}, 
        {value: 40, numeral: "XL"}, 
        {value: 10, numeral: "X"}, 
        {value: 9, numeral: "IX"}, 
        {value: 5, numeral: "V"}, 
        {value: 4, numeral: "IV"}, 
        {value: 1, numeral: "I"}
    ];

    let result = "";

// 5. Loop through each numeral and subtract its value from the number

for (const {value, numeral} of romanNumerals) {
    while (num >= value) {
        result += numeral;
        num -= value;
    }
}

return result;

};
