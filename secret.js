let cipher = new URLSearchParams(document.location.search).get('cipherInput');
if (cipher == "") {
    document.getElementById("result").textContent = "";
} else if (cipher != "" && cipher != "Congratulations!") {
    document.getElementById("result").textContent = "Incorrect!";
} else {
    window.location.href = "./reward.html";
}