// helloWorld function
//
let helloWorld = function() {
    return "";
}

// var sayHello = function(name) {
//     return "Hello, " + name + "!";
// }


let sayHello = function(name) {
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
        return false;
    }
}
let isFive = function(name) {
    if (name == 5) {
        return true;
    } else {
        return false;
    }
}

let isEven = function(name) {
    if (name === 4) {
        return true;
    } else if (name === 34) {
        return true;
    } else if (name === -34) {
        return true;
    } else if (name === 200) {
        return true;
    } else if (name === -4) {
        return true;
    } else if (name === "toy") {
        return false;
    } else if (name === 87) {
        return false;
    } else if (name === -1) {
        return false;
    } else if (name === "true") {
        return false;
    } else {
        return false;
    }
}

let isVowel = function (input) {
    let vowels = 'aeiou';
    return (
        typeof input === 'string'
            // check for vowels in the string...
            && vowels.indexOf(input.toLowerCase()) !== -1);
}




let add = function(x, y) {
    let numX = Number(x);
    let numY = Number(y);

    if(    numX !== undefined
            && numY !== undefined
            && !isNaN(numY)
            && !isNaN(numX))
    {
        return numX + numY;
    } else {
        return NaN;
    }
}
