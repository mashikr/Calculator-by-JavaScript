///// Ui section /////
var smallDisplay = document.getElementById("smallDisplay");
var bigDisplay = document.getElementById("bigDisplay");


///// Variable section /////
var value_1, value_2, result, resultView, lastOp;
function init(){
    value_1 = 0;
    value_2 = "";
    result = 0.0000000001;
    resultView = false;
    lastOp = "";
}
init();

////// Event Section //////

/// Operator event ///

function operation(op, val){
    if(op == "+"){
        result += val;
    }
    else if(op == "-"){
        result -= val;
    }
    else if(op == "*"){
        result *= val;
    }
    else if(op == "/"){
        result /= val;
    }
}

function mathOperation(op){
    if(bigDisplay.innerText !== "0"){
        value_1 = parseFloat(bigDisplay.innerText);
        
        if(value_1 < 0) {
            value_2 += "(" + bigDisplay.innerText + ")" + op;
        } else {
            value_2 += bigDisplay.innerText + op;
        }
        smallDisplay.innerHTML = value_2;

        if(result === 0.0000000001){
            result = value_1;
            lastOp = op;
        } else {
            operation(lastOp, value_1);
            lastOp = op;
        }

        bigDisplay.innerText = result;
        resultView = true;
    }
}
function mathOperation2(op){
    if(bigDisplay.innerText !== "0"){
        value_1 = parseFloat(bigDisplay.innerText);

        if(result === 0.0000000001){
            result = value_1;
            lastOp = op;
        } else {
            operation(lastOp, value_1);
            lastOp = op;
        }

        if(result < 0) {
            if(op == "*") {
                value_2 = "(" + result + ")" + "&times;";
            } else {
                value_2 = "(" + result + ")" + "&divide;";
            }
        } else {
            if(op == "*") {
                value_2 = result + "&times;";
            } else {
                value_2 = result + "&divide;";
            }
        }
        smallDisplay.innerHTML = value_2;

        bigDisplay.innerText = result;
        resultView = true;
    }
}

function mathOperation3(op) {
    if(bigDisplay.innerText !== "0"){
        value_1 = parseFloat(bigDisplay.innerText);
        

        if(op == "sqrt") {
            value_2 = "(" + value_1 + ")<sup>2</sup>";
            result = value_1 * value_1;
        } else {
            value_2 = "&radic;(" + value_1 + ")";
            result = Math.sqrt(value_1);
        }

        smallDisplay.innerHTML = value_2;
        bigDisplay.innerText = result;
        resultView = true;
        value_2 = "";
    }
}

document.getElementById("plus").addEventListener("click", function(){
    mathOperation("+");
});
document.getElementById("minus").addEventListener("click", function(){
    mathOperation("-");
});
document.getElementById("multiply").addEventListener("click", function(){
    mathOperation2("*");
});
document.getElementById("division").addEventListener("click", function(){
    mathOperation2("/");
});
document.getElementById("equal").addEventListener("click", function(){
    if(value_2 !== "" && bigDisplay.innerText !== "0"){
        let curVal = bigDisplay.innerText;
        operation(lastOp, parseFloat(curVal));
        bigDisplay.innerText = result;

        if(curVal < 0){
            curVal = "(" + curVal + ")";
        }

        smallDisplay.innerHTML = value_2 + curVal + "="; 
        init();
        resultView = true;
    }
});
document.getElementById("square").addEventListener("click", function(){
    mathOperation3("sqrt");
});
document.getElementById("root").addEventListener("click", function(){
    mathOperation3("root");
});


/// value event ///

document.getElementById("val-0").addEventListener("click", function(){
    if(resultView){
            bigDisplay.innerText = "0";
        }
    if(bigDisplay.innerText.length < 16) {
        if(bigDisplay.innerText !== "0"){
            bigDisplay.innerText += "0";
            resultView = false;
        }
    }
});

function dom_1_to_9(val){
    if(resultView || bigDisplay.innerText == "0"){
        bigDisplay.innerText = "";
    }
    if(bigDisplay.innerText.length < 16) {
        bigDisplay.innerText += val;
        resultView = false;
    }
}

document.getElementById("val-1").addEventListener("click", function(){
    dom_1_to_9("1");
});
document.getElementById("val-2").addEventListener("click", function(){
    dom_1_to_9("2");
});
document.getElementById("val-3").addEventListener("click", function(){
    dom_1_to_9("3");
});
document.getElementById("val-4").addEventListener("click", function(){
    dom_1_to_9("4");
});
document.getElementById("val-5").addEventListener("click", function(){
    dom_1_to_9("5");
});
document.getElementById("val-6").addEventListener("click", function(){
    dom_1_to_9("6");
});
document.getElementById("val-7").addEventListener("click", function(){
    dom_1_to_9("7");
});
document.getElementById("val-8").addEventListener("click", function(){
    dom_1_to_9("8");
});
document.getElementById("val-9").addEventListener("click", function(){
    dom_1_to_9("9");
});
document.getElementById("dot").addEventListener("click", function(){
    if(resultView){
        bigDisplay.innerText = "";
    }
    if(bigDisplay.innerText.length < 16) {
        if(bigDisplay.innerText == "0"){
            bigDisplay.innerText = "0.";
        } else if(!bigDisplay.innerText.includes(".")) {
            bigDisplay.innerText += ".";
        }
        resultView = false;
   }
});


/// c, ce, backspace and plus-minus ///

document.getElementById("c").addEventListener("click", function(){
    bigDisplay.innerText = "0";
    smallDisplay.innerText = "";
    init();
});
document.getElementById("ce").addEventListener("click", function(){
    bigDisplay.innerText = "0";
});
document.getElementById("backspace").addEventListener("click", function(){
    let pos = bigDisplay.innerText.length;
    bigDisplay.innerText = bigDisplay.innerText.substring(0, pos-1);
    if(bigDisplay.innerText == ""){
        bigDisplay.innerText = "0";
    }
});
document.getElementById("plus-minus").addEventListener("click", function(){
    if(bigDisplay.innerText !== "0"){
        if(!bigDisplay.innerText.includes("-")) {
            bigDisplay.innerText = "-" + bigDisplay.innerText;
        } else {
            bigDisplay.innerText = bigDisplay.innerText.substring(1);
        }
    }
});
