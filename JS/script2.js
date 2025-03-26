function alphabetizeString(str) {
    return str.split('').sort().join('');
}

function displaySortedString() {
    let inputString = document.getElementById("textInput").value;
    let sortedString = alphabetizeString(inputString);
    document.getElementById("result").innerText = "Sorted String: " + sortedString;
}

