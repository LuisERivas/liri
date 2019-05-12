var inquirer = require(`inquirer`)

askForUserInput()



//function asking for input from user

function askForUserInput(){
    inquirer.prompt([
        {
            type: `list`,
            message: `What do you want to do?`,
            choices: [`Search for concerts`,`Search for song on spotify`,`Search for movie information`],
            name: `userSelectedTask`
        },
        {
            type: `confirm`,
            message: `are you sure about that?`,
            name: `confirm`,
            default: true
        }
    ])
    .then(function(inquirerResponse){
    if(inquirerResponse.confirm){
        console.log(`----------------------`)
        console.log(`you have chosen to: ${inquirerResponse.userSelectedTask}`)
        }
    })
}