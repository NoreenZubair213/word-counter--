#! usr/bin/env node

//Import the 'module' module, which is a command line interfacefor node.js
import inquirer from "inquirer"

//declare aconstent 'answers'and assign in to the result to the result of 'inquirer.prompt function 

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: ", 
    }
])

const words = answers.Sentence.trim().split(" ")
//()const words = answers.Sentence.split(" ")  //without trim  dakhin gay ky trim sa kysy white spece ht jata h

//const words = answers.Sentence.trim()         // whithout split (" ") 

//print the array of words to the console 
console.log(words)

//print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);




