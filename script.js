//setup the global stuff
//TODO: getel

window.onload = function(){
    $("calculateButton").onclick = ClickHandler;
} ;

var $ = function(id) {
    return document.getElementById(id);
}



//click event handler function
function ClickHandler(){
    var billAmount = parseFloat($("billAmount").value);
    var tipPercentage = parseFloat($("serviceQuality").value);
    var numOfPeople = parseInt($("numOfPeople").value);

    var tipAmount = tipPercentage * billAmount;
    var totalAmount = tipAmount + billAmount;
    var perPersonTotal = totalAmount / numOfPeople;
    $("resultsParagraph").innerHTML =
        "Per person total: $" + perPersonTotal;
}