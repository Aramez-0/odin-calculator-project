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
let addition = document.querySelector("#addition");
let subtraction = document.querySelector("#subtraction");
let equals = document.querySelector("#equals");
let display = document.querySelector("#display")

function btn(a, b) {
    a.addEventListener("click", () => {
        console.log(b);
        if (b === "/" || b === "*" || b=== "+" || b === "-") {
            display.textContent += ` ${b} `
        } else if (b === "=") {

        } else {
            display.textContent += b
        }
        return b;
    });
};

btn(nine, "9");
btn(eight, "8");
btn(seven, "7");
btn(six, "6");
btn(five, "5");
btn(four, "4");
btn(three, "3");
btn(two, "2");
btn(one, "1");
btn(zero, "0");
btn(point, ".");
btn(divide, "/");
btn(multiply, "*");
btn(addition, "+");
btn(subtraction, "-");
btn(equals, "=");

