function getHistory() {
    return document.getElementById("history-value").innerText
    //get history value 6549*
}
function printHistory(num) {
    return document.getElementById("history-value").innerText = num; //display num in history
}
function getOutput() {
    return document.getElementById("output-value").innerText
    //get output value 
}
function printOutput(num) {
    if (num == ""){
    return document.getElementById("history-value").innerText = num;
}
else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
}
}
function getFormattedNumber(num) {
    if (num == "-"){
        return "";
    }
    var n = Number(num);//9860
    var value = n.toLocaleString("en");//9,860 put conna
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));//9860 remove conna
}
