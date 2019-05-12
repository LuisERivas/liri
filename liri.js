var inquirer = require(`inquirer`)

askForUserInput()



//function asking for input from user

function askForUserInput(){
    inquirer.prompt([
        {
            type: `list`,
            message: `What do you want to do?`,
            choices: [`Search for concerts`,`Search for song on spotify`,`Search for movie information`, `Random`],
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
        console.log(`---------------------------------------`)
        console.log(`you have chosen to: ${inquirerResponse.userSelectedTask}`)
        console.log(`---------------------------------------`)
        var input= inquirerResponse.userSelectedTask
        userSelectedTaskInput(input)

    }
    })
}


// function that will ask user to input what they are looking for 
function userSelectedTaskInput(input){
    if(input=== `Search for concerts`){
        console.log(`this is testing that you chose Search for Concerts`)
    }
    else if(input=== `Search for song on spotify`){
        console.log(`this is testing that you chose Search for song`)
    }
    else if(input=== `Search for movie information`){
        console.log(`this is testing that you chose Search for movie`)
    }
    else if(input==="Random"){
        console.log(`this is testing that you chose Search for Random`)
    }
    else{
        console.log(`you suck...`)
    }
}

