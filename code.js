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