import inquirer from"inquirer"
const Mathrandom=Math.round(Math.random()*10)
type antype={
    Guessgame:number
}
let answer1: antype =await inquirer.prompt([
  {type:"number",
    name:"Guessgame",
    message:"Please enter the guess number"
  }  
])
console.log(answer1.Guessgame);
