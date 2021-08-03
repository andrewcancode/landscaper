let account = 0;
const tools = [];
let currentTool = null;
let daysWorked = null;
let hasWon = false;

window.alert('Welcome to the Landscaper Game');
window.alert('You are starting a landscaping business, but all you have are your teeth.  Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.');

while (hasWon == false) {

    const game = () => {
        daysWorked = 0;
        account = 0;
        currentTool = "teeth";
        userAction();
    }

    const gameStatus = () => {
        alert('You have currently worked ' + daysWorked + ' days, your current tool is ' + currentTool + ' and your account balance is $' + account);
    }

    const winnerWinner = () => {
        alert('Congratulations!  You have won the game!  It took you a total of ' + daysWorked + ' days and your final account balance is ' + account + ' dollars.');
        const $youWon = $('<img src="youwon.jpg">');
        $('div.container').replaceWith($youWon);
        hasWon = true;
    }

    const userAction = () => { account >= 1000 ? winnerWinner() :    
        gameStatus();
        if (account >= 5) {
            buyTools();
        }
        const userChoice = prompt('Do you want to cut the lawn?', 'Type: Yes / No / Quit');
        if (userChoice.toLocaleLowerCase() === 'yes' || userChoice.toLocaleLowerCase() === 'y') {
            cutGrass();
        } else if (userChoice.toLocaleLowerCase() === 'no' || userChoice.toLocaleLowerCase() === 'n') {
            gameStatus();
        } else if (userChoice.toLocaleLowerCase() === 'quit' || userChoice.toLocaleLowerCase() === 'q') {
            window.alert('Thanks for playing!');
            $('body').hide('slow');
        }
    }

    const cutGrass = () => {
        if (currentTool === 'teeth') {
            cutWithTeeth();
        } else if (currentTool === 'scissors') {
            cutWithScissors();
        } else if (currentTool === 'pushMower') {
            cutWithPushMower();
        } else if (currentTool === 'fancyMower') {
            cutWithFancyMower();
        } else if (currentTool === 'starvingStudents') {
            cutWithAbusiveLabor();
        }
    }

    const cutWithTeeth = () => {
        daysWorked += 1;
        account += 1;
        userAction();
    }

    const cutWithScissors = () => {
        daysWorked += 1;
        account += 5;
        userAction();
    }

    const cutWithPushMower = () => {
        daysWorked += 1;
        account += 50;
        userAction();
    }

    const cutWithFancyMower = () => {
        daysWorked += 1;
        account += 100;
        userAction();
    }

    const cutWithAbusiveLabor = () => {
        daysWorked += 1;
        account += 250;
        userAction();
    }

    const buyTools = () => {
        if (account >= 5 && tools.includes('scissors') === false) {
            const scissorPrompt = prompt('You have enough to upgrade your current tool to a pair of rusty scissors for $5, do you want to purchase?', 'Enter: Yes/No')
            if (scissorPrompt.toLocaleLowerCase() === 'yes' || scissorPrompt.toLocaleLowerCase() === 'y') {
                account -= 5;
                currentTool = 'scissors';
                tools.push('scissors');
                userAction();
            } else if (scissorPrompt.toLocaleLowerCase() === 'no' || scissorPrompt.toLocaleLowerCase() === 'n') {
                userAction();
            }
        }
        if (account >= 25 && tools.includes('pushMower') === false) {
            const pushMowerPrompt = prompt('You have enough to upgrade your current tool to an old-timey push mower for $25, do you want to purchase?', 'Enter: Yes/No')
            if (pushMowerPrompt.toLocaleLowerCase() === 'yes' || pushMowerPrompt.toLocaleLowerCase() === 'y') {
                account -= 25;
                currentTool = 'pushMower';
                tools.push('pushMower');
                userAction();
            } else if (pushMowerPrompt.toLocaleLowerCase() === 'no' || pushMowerPrompt.toLocaleLowerCase() === 'n') {
                userAction();
            }
        }
        if (account >= 250 && tools.includes('fancyMower') === false) {
            const fancyMowerPrompt = prompt('You have enough to upgrade your current tool to an fancy battery powered mower for $250, do you want to purchase?', 'Enter: Yes/No')
            if (fancyMowerPrompt.toLocaleLowerCase() === 'yes' || fancyMowerPrompt.toLocaleLowerCase() === 'y') {
                account -= 250;
                currentTool = 'fancyMower';
                tools.push('fancyMower');
                userAction();
            } else if (fancyMowerPrompt.toLocaleLowerCase() === 'no' || fancyMowerPrompt.toLocaleLowerCase() === 'n') {
                userAction();
            }
        }
        if (account >= 500 && tools.includes('starvingStudents') === false) {
            const starvingStudentsPrompt = prompt('You have enough to upgrade your current tool to a team of starving students for $500, do you want to purchase?', 'Enter: Yes/No');
            if (starvingStudentsPrompt.toLocaleLowerCase() === 'yes' || starvingStudentsPrompt.toLocaleLowerCase() === 'y') {
                account -= 500;
                currentTool = 'starvingStudents';
                tools.push('starvingStudents');
                userAction();
            } else if (starvingStudentsPrompt.toLocaleLowerCase() === 'no' || starvingStudentsPrompt.toLocaleLowerCase() === 'n') {
                userAction();
            }
        }
    }
    game();
}



// example code from slack ... i decided to do it a different way
// //* User teeth
// for (let counter = 1; counter <= 1000; counter++){
//     alert('Your balance is ' + account + '. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.')
//     let userInput = prompt("Type 'teeth' to cut the lawn")
//     //
//     if (userInput.toLowerCase() === 'teeth'){
//         account += 1
//         if (account >= 5) {
//             userInput.prompt("You have enough money to buy the rusty scissors for $5, do you want to purchase? y/n");
//                 if (userInput.toLowerCase() === y || userInput.toLowerCase() === yes) {
//                     account -= 5;
//                 }

//         }
//     } else if (userInput.toLowerCase() === 'quit'){
//         break;
//     }
// };

// // user rusty scissors
// for (let counter = 1; counter <= 5; counter++){
//     alert('Your balance is ' + account + '. Using just your rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.')
//     let userInput = prompt("Type 'scissors' to cut the lawn")
//     //
//     if (userInput.toLowerCase() === 'scissors'){
//         account += 5
//     } else if (userInput.toLowerCase() === 'quit'){
//         break;
//     }
// };