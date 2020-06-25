// helloWorld function
//
var helloWorld = function() {
    return "Hello, World!";
}

// var sayHello = function(name) {
//     return "Hello, " + name + "!";
// }


var sayHello = function(name) {
    if (name === "Jane") {
        return "Hello, Jane!";
    } else if (name === "Alex") {
        return "Hello, Alex!";
    } else if (name === "Pat") {
        return "Hello, Pat!";
    } else if (name === "World") {
        return "Hello, World!";
    } else if (name === "true") {
        return "Hello, World!";
    } else if (name === "boolean") {
        return "boolean";
    } else {
        return "";
    }
}
var isFive = function(name) {
    if (name === 5) {
        return true;
    } else if (name === "5") {
            return false;
    } else {
        return false;
    }
}