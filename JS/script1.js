function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

function displayReversedNumber() {
    let inputNumber = document.getElementById("numberInput").value;
    let reversed = reverseNumber(inputNumber);
    document.getElementById("result").innerText = "Reversed Number: " + reversed;
}
