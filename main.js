// Blackbird counter

var i = 0;

    function incNumber() {
        if (i < 10) {
            i++;
        } 
        document.getElementById("display").innerHTML = i;
    };

    function decNumber() {
        if (i > 0) {
            i--;
        }
        document.getElementById("display").innerHTML = i;
    };


// Squirrel counter
var x = 0;

    function incNumberS() {
        if (x < 10) {
            x++;
        } 
        document.getElementById("squirrelDisplay").innerHTML = x;
    };

    function decNumberS() {
        if (x > 0) {
            x--;
        }
        document.getElementById("squirrelDisplay").innerHTML = x;
    };


// Hedgehog counter
var y = 0;

    function incNumberH() {
        if (y < 10) {
            y++;
        } 
        document.getElementById("hedgehogDisplay").innerHTML = y;
    };

    function decNumberH() {
        if (y > 0) {
            y--;
        }
        document.getElementById("hedgehogDisplay").innerHTML = y;
    };


// Fox counter
var a = 0;

    function incNumberF() {
        if (a < 10) {
            a++;
        } 
        document.getElementById("foxDisplay").innerHTML = a;
    };

    function decNumberF() {
        if (a > 0) {
            a--;
        }
        document.getElementById("foxDisplay").innerHTML = a;
    };

// Robin counter
var b = 0;

    function incNumberR() {
        if (b < 10) {
            b++;
        } 
        document.getElementById("robinDisplay").innerHTML = b;
    };

    function decNumberR() {
        if (b > 0) {
            b--;
        }
        document.getElementById("robinDisplay").innerHTML = b;
    };

// Rabbit counter
var d = 0;

    function incNumberRa() {
        if (d < 10) {
            d++;
        } 
        document.getElementById("rabbitDisplay").innerHTML = d;
    };

    function decNumberRa() {
        if (d > 0) {
            d--;
        }
        document.getElementById("rabbitDisplay").innerHTML = d;
    };


    // Show answers with button onlick

    let submitResult = () => {
        document.getElementById("answer").innerText = `You saw:
        - ${i} Blackbirds
        - ${x} Squirrels
        - ${y} Hedgehogs
        - ${a} Foxes
        - ${b} Robins
        - ${d} Rabbits`;
    };