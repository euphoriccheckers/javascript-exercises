const reverseString = function(input) {
    let reversedStr = "";
    let inputArr = input.split("");
    let reverseArr = [];

    for(let i = inputArr.length; i > -1; i--) {
        reverseArr.push(inputArr[i]);
    }

    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
