// Adding numbers to the display:

function btn(n) {
    var number = document.getElementById('viewfinder').innerHTML
    document.getElementById('viewfinder').innerHTML = number + n;
}

//Clear display:

function clean() {
    document.getElementById('viewfinder').innerHTML = '';
}

//Display backspace:

function backspace() {
    var result = document.getElementById('viewfinder').innerHTML;
    document.getElementById('viewfinder').innerHTML = result.substring(0, result.length -1);
}

//Calculation:
function calculate() {
    var result = document.getElementById('viewfinder').innerHTML;

        if(result) {
            document.getElementById('viewfinder').innerHTML = eval(result);
        } else {
            alert("Forgiveness. You did not enter the numbers for the calculation.")
        }
}