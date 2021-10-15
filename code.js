// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    if (typeof name === "string" && name !== ""){
        return "Hello " + name + "!";
    } else if (typeof name === 'undefined' || typeof name === 'boolean' || typeof name === "object" || name === ""){
        return "Hello World!";
    }
}
function isFive(input){
    return input == 5;
}
function isEven(input){
    if(typeof input === 'boolean'){
        return false;
    } else {
        return input % 2 === 0;
    }
}
function isVowel(input){
    if(typeof input !== 'string' || input.length > 1){
        return false;
    } else if (input === 'a' || input === 'A'){
        return true;
    } else {
        return false;
    }
}
function add(num1,num2){
    var added = parseFloat(num1) + parseFloat(num2);
    if(typeof num1 == 'undefined' || typeof num2 == 'undefined'){
        return NaN;
    } else if(typeof added == "number") {
        return added;
    }
}