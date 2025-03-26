function showDate() {
    let today = new Date();
    let date = today.getDate();
    let month = today.toLocaleString('default', { month: 'long' });
    let year = today.getFullYear();
    
    document.getElementById("dateDisplay").innerText = `${date}/${month}/${year}`;
}

function showTime() {
    let time = new Date().toString();
    document.getElementById("timeDisplay").innerText = time;
}
