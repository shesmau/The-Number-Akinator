let max_number = (Math.floor(Math.random() * 100)+1);

function maxNum(){
    let output = document.getElementById("result");
    let instruct = document.getElementById("instruction");

    let input = document.getElementById("userInput").value; 
    let count = ""; 
     count =count + input;
    if(input == max_number){
        output.innerHTML = "The correct number was " + max_number;
        max_number = [Math.floor(Math.random() * 100)+1];
        instruct.innerHTML = "CHEERS! - Iffy"

    } else if ( input < max_number){

        output.innerHTML = "Your number: " + count;
       // alert("Try a higher number")
        instruct.innerHTML = "Try something higher than " + input + ""
    }
    else{

        output.innerHTML = "Your number: " + count;
        //alert("Try a lower number")
        instruct.innerHTML = "Try something lower than " + input + ""
    };
};

function giveUp(){
    let output = document.getElementById("result");
    let instruct = document.getElementById("instruction");

    output.innerHTML = "The number was: " + max_number;

instruct.innerHTML = "Please try again later! <br/> See you next time - Iffy" }