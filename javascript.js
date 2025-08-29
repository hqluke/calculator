const answer = document.querySelector(".answer");
let num1 = 0;
let num2 = 0;
let curr = "";
let symbol = "";
let tfSymbol = false;
let currNum = false; // false is num1 | true is num 2
let continuous  = false;
let tfDot1 = false;
let tfDot2 = false;
let negative1 = false;
let negative2 = false;


document.querySelector('.numbers').addEventListener('click', function(e) {
        const buttonId = e.target.id;
        let char = "";
        switch(buttonId) {
            case 'zero':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'one':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;                
            case 'two':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'three':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'four':
                char = getText(buttonId);
                curr += char;
                display(char);;
                break;
            case 'five':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'six':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'seven':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'eight':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'nine':
                char = getText(buttonId);
                curr += char;
                display(char);
                break;
            case 'AC':
                clear();
                break;
            case 'negative':
                negativeNum();
                break;
            case 'mod':
                num();
                symbol = "%";
                char = getText(buttonId);
                displayOperator(char);
                tfSymbol = true;
                break;
            case 'divide':
                num();
                symbol = "/";
                char = getText(buttonId);
                displayOperator(char);
                tfSymbol = true;
                break;
            case 'x':
                num();
                symbol = "x";
                char = getText(buttonId);
                displayOperator(char);
                tfSymbol = true;
                break;
            case 'minus':
                num();
                symbol = "-";
                char = getText(buttonId);
                displayOperator(char);
                tfSymbol = true;
                break;
            case 'plus':
                num();
                symbol = "+";
                char = getText(buttonId);
                displayOperator(char);
                tfSymbol = true;
                break;
            case 'equal':
                num();
                eval(symbol);
                break;
            case 'dot':
                char = getText(buttonId);
                displayDot(char)
                break;                         
        }
});


function getText(buttonId) {
    const button = document.getElementById(buttonId);
    return button.textContent;
    
}


function num(){
    if(!num1){
            num1 = parseFloat(answer.textContent);

        curr = "";
    }
    else if(continuous == true && currNum == false){
        checkNegative();
        if(tfDot1 == true || negative1 == true){ // here
            num1 = parseFloat(answer.textContent);
            curr = "";
        }
    }
    
    else{
            num2 = parseFloat(curr);
            curr = "";
    }

    console.log(num1 + " num1 " + num2 + " Num 2")
}

function eval(symbol){
    let final = "Error";
    if(continuous == true && num2 == ""){
        display(num1);
        return;
    }
    else{
    switch(symbol){
        case"%":
            final = num1 % num2;
            break;
        case"/":
            final = num1 / num2;
            break;        
        case"x":
            final = num1 * num2;
            break;        
        case"-":
            final = num1 - num2;
            break;        
        case"+":
            final = num1 + num2;
            break;        
    }
        if(Number.isNaN(final)){
        final = num1;
    }
    symbol = "";
    num1 = final;
    curr = final.toString();
    console.log(curr + " equalz")
    num2 = "";
    checkNegative();
    answer.textContent = "";
    tfDot2 = false;
    tfSymbol = false;
    display(final);
    currNum = false;
    continuous = true;
    }
}

function negativeNum(){
    let temp = 0;
    let tempS = ""
    if(curr == ""){
         if(currNum == false && continuous == false){
            answer.textContent = "-"
        }
        else if(currNum == true){
            temp = "-"
            curr += temp;
            answer.textContent = `${num1} ${symbol} ${temp}`;
        }       
    }
    else{
        if(currNum == false && continuous == true){
            num1 = -num1;
            answer.textContent = num1;
        }
        else if(currNum == false && continuous == false){
            temp = parseFloat(curr)
            temp = -temp;
            curr = temp.toString();
            answer.textContent = temp;
        }
        else if(currNum == true){
            temp = parseFloat(curr)
            temp = -temp;
            curr = temp.toString();
            answer.textContent = `${num1} ${symbol} ${temp}`;
        }
    }
}

function clear(){
    num1 = 0;
    num2 = 0;
    curr = "";
    symbol = "";
    answer.textContent = "";
    tfDot1 = false;
    tfDot2 = false;
    currNum = false;
    tfSymbol = false;
    continuous = false;
    negative1 = false;
    negative2 = false;
}

function displayDot(dot){
    if (currNum == false && tfDot1 == false){
        tfDot1 = true;
        curr += dot;
        answer.textContent += dot;
    }
    if (currNum == true && tfDot2 == false){
        tfDot2 = true;
        curr += dot;
        answer.textContent += dot;
    }
}

function display(num){
    if(continuous == true && currNum == false && tfDot1 == false){
        answer.textContent = num;
        num1 = "";
        curr = num;
        currNum = false;        
    } else{
        answer.textContent += num;
    }
}

function displayOperator(any){
    if(tfSymbol == false){
        if(any == "%" || any == "/" || any == "x" || any == "-" || any == "+"){
            answer.textContent += ` ${any} `;
            currNum = true;
        }
    }
}

function checkNegative(){
    if (currNum == false && num1 < 0){
        negative1 = true;
    }
    if(currNum == true && num2 < 0){
        negative2 = true;
    }
}

