#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Printing a Welcome message:
console.log(
  chalk.magentaBright.bold(
    "\n\tWelcome to Anila-Iqbal cli_number_guessing_game\n"
  )
);

// 1) computer will generate a random numbre - Done
// 2) user input will guessing number - Done
// 3) compare user inpit with computer - Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    message: chalk.blueBright.bold("Please enter a number between 1-6: "),
    type: "number",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
  console.log(
    chalk.greenBright.bold("\nCongratulation! you guessed right number.")
  );
} else {
  console.log(chalk.redBright.bold("\nYou guessed wrong number."));
}
