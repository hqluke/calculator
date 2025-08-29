const answer = document.querySelector(".answer");
let num1 = 0;
let num2 = 0;
let curr = "";
let symbol = "";
let tfSymbol = false;


document.querySelector('.numbers').addEventListener('click', function(e) {
        const buttonId = e.target.id;
        let char = "";
        switch(buttonId) {
            case 'zero':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;
            case 'one':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;                
            case 'two':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;
            case 'three':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;
            case 'four':
                char = getText(buttonId);
                curr += char;
                show(char);;
                break;
            case 'five':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;
            case 'six':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;
            case 'seven':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;
            case 'eight':
                char = getText(buttonId);
                curr += char;
                show(char);
                break;
            case 'nine':
                char = getText(buttonId);
                curr += char;
                show(char);
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
                show(char);
                break;
            case 'divide':
                num();
                symbol = "/";
                char = getText(buttonId);
                show(char);
                break;
            case 'x':
                num();
                symbol = "x";
                char = getText(buttonId);
                show(char);
                break;
            case 'minus':
                num();
                symbol = "-";
                char = getText(buttonId);
                show(char);
                break;
            case 'plus':
                num();
                symbol = "+";
                char = getText(buttonId);
                show(char);
                break;
            case 'equal':
                num();
                eval(symbol);
                break;
            case 'dot':
                char = getText(buttonId);
                curr += char;
                show(char);
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
        num1 = parseFloat(curr);
        curr = "";
    }else{
        num2 = parseFloat(curr);
        curr = "";
    }

    console.log(num1,num2)
}

function eval(symbol){
    let final = 0;
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
    symbol = "";
    num1 = final;
    num2 = "";
    answer.textContent = "";
    show(final);
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
}

function show(any){
    if(!num2){
        if(any == "%" || any == "/" || any == "x" || any == "-" || any == "+"){
            answer.textContent += ` ${any} `;
        } else{
            answer.textContent += any;
        }
    }
}


// symbol check is only good for one rn need to add a funciton to check dat hoe use tfSymbol
// need negative function
// after = and you press da number again it should clear the answer text and num1