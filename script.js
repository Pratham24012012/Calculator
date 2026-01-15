function getHistory() {

    return document.getElementById("history-value").innerText;

    //get history value 6549*

}

function printHistory(num) {

    document.getElementById("history-value").innerText = num;//display num in history

}

function getOutput() {

    return document.getElementById("output-value").innerText;//get output value

}

function printOutput(num) {

    if (num == "") {

        document.getElementById("output-value").innerText = num;

    }

    else {

        document.getElementById("output-value").innerText = getFormattedNumber(num);

    }

}

function getFormattedNumber(num) {

    if (num == "-") {

        return "";

    }

    var n = Number(num);//9860

    var value = n.toLocaleString("en");//9,860 put comma

    return value;

}

function reverseNumberFormat(num) {

    return Number(num.replace(/,/g, ''));//9860 remove comma

}
var operator = document.getElementsByClassName("operator");

//operator=[c,ce,*,.........,= ]

for (var i = 0; i < operator.length; i++) {

    operator[i].addEventListener('click', function () {

        if (this.id == "clear") {

            printHistory("");

            printOutput("");

        }

        else if (this.id == "backspace") {

            var output = reverseNumberFormat(getOutput()).toString();

            //6,986 -> 6986 -->'6986'

            if (output) {

                output = output.substr(0, output.length - 1);

                printOutput(output);

            }

        }

        //SUBSTR(0,6)-> 0 TO 5

        // "Hello".substr(1,4-1)-ell

        //length : 5, length-1 = 4, substr(0, length-1)

        else {

            var output = getOutput();//6

            var history = getHistory();//9*

            if (output == "" && history != "") {

                if (isNaN(history[history.length - 1])) {//removes last op to add new

                    history = history.substr(0, history.length - 1);

                }

            }

            if (output != "" || history != "") {

                output = output == "" ? output : reverseNumberFormat(output);//?left:right

                history = history + output;

                if (this.id == "=") {

                    var result = eval(history);

                    printOutput(result);

                    printHistory("");

                }

                else {

                    history = history + this.id;

                    printHistory(history);

                    printOutput("");

                }
            }
        }

    });
}

var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {

    number[i].addEventListener('click', function () {

        var output = reverseNumberFormat(getOutput());

        //869,833,806->869833806

        if (output != NaN) { //if output is a number

            output = output + this.id;

            printOutput(output);

        }

    });

}