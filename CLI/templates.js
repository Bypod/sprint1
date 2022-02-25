let indexInfo = `index commands:

index <command><option>

index init --all    //initalizes folder and files
index init a
index init
index i

index token         //create and search tokens

index cat           //edit and reset config file

index help          //this file help file displays all index commands
index h
index
`

let editInfo = `
Edit commands:

index cat <command><option><value>

index cat reset                  //resets the config file to its default state

index cat set name <value>       //Update the name value in the config file
index cat set version <value>    //Update the version value in the config file
index cat set desc <value>       //Update the description value in the config file
index cat set main <value>       //Update the main route file in the config file
index cat set user <value>       //Update the user value in the config file
`

let tokenInfo = `Token commands:

index token <command>

index token create <value>

index token search username <value>
index token search u <value>
index token search email <value>
index token search e <value>`

let config = 
{
    name: 'configCLI',
    version: '2.0.0',
    description: 'The Command Line Interface (CLI) for index.',
    main: 'index.js',
    superduperuser: 'PeteDaMan'
}


module.exports = {
    indexInfo,
    config,
    editInfo,
    tokenInfo
}