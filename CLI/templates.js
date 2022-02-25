let indexInfo = `index commands:

index <command><option>

index init --all
index init a
index init
index i

index token

index cat

index help
index h
index
`

let editInfo = `
Edit commands:

index edit <command><option><value>

index edit reset                  //resets the config file to its default state

index edit set name <value>       //Update the name value in the config file
index edit set version <value>    //Update the version value in the config file
index edit set desc <value>       //Update the description value in the config file
index edit set main <value>       //Update the main route file in the config file
index edit set user <value>       //Update the user value in the config file
`

let tokenInfo = `
Edit commands:

index token <command>

index token create <value>

index token search username <value>
index token search u <value>
index token search email <value>
index token search e <value>

`

let config = 
{
    name: 'configCLI',
    version: '1.0.0',
    description: 'The Command Line Interface (CLI) for the MyApp.',
    main: 'index.js',
    superduperuser: 'adminiosso'
}


module.exports = {
    indexInfo,
    config,
    editInfo,
    tokenInfo
}