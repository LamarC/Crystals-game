var wins = 0;
var losses = 0;

var math = 0;

//Random number to guess 19 - 120
var number = Math.floor((Math.random() * 120) + 1);

//Crystals values
var rupee = Math.floor((Math.random() * 12) + 1);
var emerald = Math.floor((Math.random() * 12) + 1);
var saphir = Math.floor((Math.random() * 12) + 1);
var topaz = Math.floor((Math.random() * 12) + 1);

//factory: function  must return the function or value to be imported in math.js.
var configmath = function () {
    $("#wins").empty();
    $("#wins").append(wins);
    $("#losses").empty();
    $("#losses").append(losses);
    $("#math").empty();
    $("#math").append(math);
}

var reset = function () {
    math = 0;
    number = Math.floor((Math.random() * 100) + 1);

    $(".number").empty();
    $(".number").append(number);

    rupee = Math.floor((Math.random() * 12) + 1);
    emerald = Math.floor((Math.random() * 12) + 1);
    saphir = Math.floor((Math.random() * 12) + 1);
    topaz = Math.floor((Math.random() * 12) + 1);
    configmath();
}

var config = function () {
    if (math === number) {
        wins = wins + 1;
        reset();
    }
    else if (math > number) {
        losses = losses + 1;
        reset();
    }
    else {
        configmath();
    }
}

$("#math").append(math);
console.log("math");
$(".number").append("Number to guess: " + number);
console.log(number);

$(document).ready(function () {

    $("#rupee").click(function () {
        math = math + emerald;
        config();
    })

    $("#emerald").click(function () {
        math = math + rupee;
        config();
    })

    $("#saphir").click(function () {
        math = math + saphir;
        config();
    })

    $("#topaz").click(function () {
        math = math + topaz;
        config();
    })
}); 
