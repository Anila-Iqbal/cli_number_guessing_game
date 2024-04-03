
import inquirer from "inquirer";

// 1) computer will generate a random numbre - Done
// 2) user input will guessing number - Done
// 3) compare user inpit with computer - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        message:"Please enter a number between 1-6: ",
        type: "number"
    },
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulation! you guessed right number.");
} else {
    console.log("You guessed wrong number.")
}
