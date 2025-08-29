const answer = document.querySelector(".answer");
let num1 = 0;
let num2 = 0;
let curr = "";
let symbol = "";
let tfSymbol = false;
let tfNum = false;
let tfDot = false;


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
            case 'negative':  //fergged
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
                tfDot = true;
                break;                         
        }
        console.log(curr)
});


function getText(buttonId) {
    const button = document.getElementById(buttonId);
    return button.textContent;
    
}


function num(){
    if(!num1){
        if(tfDot == true){
            num1 = parseFloat(answer.textContent);
            console.log(num1);
        } else{
        num1 = parseFloat(curr);
        }
        curr = "";
    }else{
        num2 = parseFloat(curr);
        curr = "";
    }

    console.log(num1,num2)
}

function eval(symbol){
    let final = "Error";
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
    num2 = "";
    answer.textContent = "";
    tfDot = false;
    tfSymbol = false;
    display(final);
    tfNum = true;
}

function negativeNum(num){

}

function check(){

}

function clear(){
    num1 = 0;
    num2 = 0;
    curr = "";
    symbol = "";
    answer.textContent = "";
    tfDot = false;
    tfNum = false;
    tfSymbol = false;
}

function displayDot(dot){
    if (tfDot == false){
        answer.textContent += dot;
    }
}

function display(num){
    if(tfNum == false){
        answer.textContent += num;
    } else{
        answer.textContent = num;
        num1 = "";
        curr = num;
        tfNum = false;
    }
}

function displayOperator(any){
    if(tfSymbol == false){
        if(any == "%" || any == "/" || any == "x" || any == "-" || any == "+"){
            answer.textContent += ` ${any} `;
            tfNum = false;
        }
    }
}


// need negative function
// i think i need the status for num1 and num2 