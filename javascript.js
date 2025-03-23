//rock paper scissors

//pajauta lietotajam izveli starp - rock paper scissors
let userInput = prompt("Choose between Rock, Paper or Scissors");
//dators randomizeti izvelas savu izveli - rock papper scissors
function getComputerChoice(){
    let computerChoiceValue = Math.floor(Math.random() * 3) + 1;

    if(computerChoiceValue == 1){
        computerChoiceValue = "Rock";
    } else if(computerChoiceValue == 2){
        computerChoiceValue = "Scissors";
    } else{
        computerChoiceValue = "Paper"
    }
    return computerChoiceValue;
};
//abas izveles tiek salidzinatas

let computerChoiceValue = getComputerChoice();
console.log("Computer has chosen " + computerChoiceValue);
//ja izvelets ir papirs tad tas uzvar akmeni bet zaud skerem
if(userInput == "Paper"){
    if(computerChoiceValue == "Rock"){
        console.log("You have won.")
    }else if(computerChoiceValue == "Scissors"){
        console.log("You have lost.")
    }else{
        console.log("Draw.")
    }
} else if(userInput == "Rock"){
    if(computerChoiceValue == "Rock"){
        console.log("Draw.")
    }else if(computerChoiceValue == "Scissors"){
        console.log("You have won.")
    }else{
        console.log("You have lost.")
    }
} else{
    if(computerChoiceValue == "Rock"){
        console.log("You have lost.")
    }else if(computerChoiceValue == "Scissors"){
        console.log("Draw.")
    }else{
        console.log("You have won")
    }
}
//ja ir izvelets akmens tad tas uzvar skeres bet zaud papiram

//ja ir izveletas skeres tas uzvar papiru bet zaud akmenim

