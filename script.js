let nine = document.querySelector("#nine") ;
let eight = document.querySelector("#eight"); 
let seven = document.querySelector("#seven");
let six = document.querySelector("#six");
let five = document.querySelector("#five");
let four = document.querySelector("#four");
let three = document.querySelector("#three");
let two = document.querySelector("#two");
let one = document.querySelector("#one");
let zero = document.querySelector("#zero");
let point = document.querySelector("#point");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let clear = document.querySelector("#clear")
let equals = document.querySelector("#equals");
let display = document.querySelector("#display");
let input = document.querySelector("#input")
let tgRnd = document.querySelector("#toggle-rounding"); 
let sum = {num1: '', operator: null, num2: ''};
let rounding = true;
let newEquation = false;

tgRnd.addEventListener("click", () => {
    if (rounding === true) {
        tgRnd.textContent = "Toggle rounded numbers: Off";
        rounding = false;
    } else {
        tgRnd.textContent = "Toggle rounded numbers: On";
        rounding = true;
    };
});

function calculating() {
    let num1 = parseFloat(sum.num1);
    let operator = sum.operator;
    let num2 = parseFloat(sum.num2);
    if (operator === "+") {
        return addition(num1, num2);
    } else if (operator === "-") {
        return subtraction(num1, num2);
    } else if (operator === "*") {
        return multiplication(num1, num2);
    } else if (operator === "/") {
        return division(num1, num2);
    } else {
        return "This does not work";
    };
};

function addition(a, b) {
    if (rounding === true) {
        return Math.round(a + b);
    } else return a + b;
};
function subtraction(a, b) {
    if (rounding === true) {
        return Math.round(a - b);
    } else return a - b;
};
function multiplication(a, b) {
    if (rounding === true) {
        return Math.round(a * b);
    } else return a * b;
};
function division(a, b) {
    if (b !== 0 && rounding === true) {
        return Math.round(a / b);
    } else if (b !== 0) {
        return a / b
    } else return 0;
};

function btn(a, b) {
    a.addEventListener("click", () => {
        if (newEquation === true) {
            display.value = '';
            newEquation = false;
        };
        if (b === "/" || b === "*" || b === "+" || b === "-") {
            display.value += ` ${b} `;
            sum.operator = b;
            point.disabled = false
        } else if (b === "clr") {
            display.value = '';
            sum = {num1: '', operator: null, num2: ''};
            point.disabled = false;
        } else if (b === "=") {
            let result = calculating();
            display.value = result;
            sum = {num1: '', operator: null, num2: ''};
            point.disabled = false;
            newEquation = true;
        } else if (sum.operator === null) {
            display.value += b;
            sum.num1 += b;
        } else {
            display.value += b;
            sum.num2 += b;
        };
        if (b === ".") {
            point.disabled = true;
        };
    });
};

btn(nine, '9');
btn(eight, '8');
btn(seven, '7');
btn(six, '6');
btn(five, '5');
btn(four, '4');
btn(three, '3');
btn(two, '2');
btn(one, '1');
btn(zero, '0');
btn(point, ".");
btn(divide, "/");
btn(multiply, "*");
btn(add, "+");
btn(subtract, "-");
btn(clear, "clr")
btn(equals, "=");

// should handle multiple parameters