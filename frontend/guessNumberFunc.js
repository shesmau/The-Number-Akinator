let max_number = [Math.floor(Math.random() * 100)+1];

function maxNum(){
    let output = document.getElementById("result");

    let input = document.getElementById("userInput").value; 
    if(input == max_number){
        output.innerHTML = 'Correct';
        max_number = [Math.floor(Math.random() * 100)+1];

    } else if ( input < max_number){
        output.innerHTML = "Number is too low. Try again!";
    }
    else{
        output.innerHTML = "Number is too high. Try again!";
    };
};