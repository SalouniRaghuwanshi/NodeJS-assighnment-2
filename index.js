var readlineSync=require("readline-sync");
const chalk = require('chalk');
score=0;
var score1=0;
function game(question, answer)
{var userAnswer=readlineSync.question(question);
  if(userAnswer==answer)
  {
    console.log(chalk.magenta.bold("Right Answer!!"));
    score=1;
    score1++;
    console.log(chalk.blue("Current score: "+score));
  }
  else
  {
    console.log(chalk.magenta("Wrong Answer!!"));
    score=0;
     console.log(chalk.blue("Current score: "+score));
  }
}
  
game(chalk.green("1. what is your friends name ?\n a. nothing\n b. saloni\n c. mohan\n d. rinki")+chalk.red("\n Answer: "),"b");
game(chalk.green("2. What is  Favrioute Food of saloni?\n a. pasta\n b. samosa\n c. sandwich\n d. maggi")+chalk.red("\n Answer: "),"d");
game(chalk.green("4. What is favroite colour of saloni?\n a. pink\n b. blue\n c. black\n d. Red")+chalk.red("\n Answer: "),"c");
game(chalk.green("5. which hobbies are saloni like's?\n a. story\n b. cooking\n c. game \n d.wathing-tv")+chalk.red("\n Answer: "),"a");
game(chalk.green("5. which type of girl saloni?\n a. senstive\n b. emotional\n c.caring \n d.focus-about-study")+chalk.green("\n Answer: "),"b");
console.log(chalk.yellow(" YAY YOU SCORED:"+score1));
