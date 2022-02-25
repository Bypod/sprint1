// const jsonPkg = require('./configPkg.json')
const fs = require('fs')
const myArgs = process.argv.slice(2)
const {config} = require('./templates')
const {configCreate} = require('./init.js')
const path = require('path')

function editFile(){
    switch(myArgs[1]){
        case 'set':
            setFile()
            break;
        case 'reset':
            resetFile()
            break;
        case 'view':
            const jsonPkg = require('./configPkg.json')
            console.log(jsonPkg)
            break;
        default:
            fs.readFile(__dirname + "/usage/commands_edit.txt", (error, data) => {
                if(error) throw error;
                console.log(data.toString())
            })
    }
}

function resetFile(){
    if(fs.existsSync(path.join(__dirname + '/configPkg.json'))){
        const jsonPkg = require('./configPkg.json')
        if(JSON.stringify(jsonPkg) == JSON.stringify(config)){
            console.log('File is already at default status')
        } else{
            let data = JSON.stringify(config, null, 2);
            console.log('not same')
            fs.writeFile('configPkg.json', data, (err) => {
                console.log('config file now at default status')
            })
        }
    } else {
        configCreate()
        console.log(`Config file doesnt exist\nNew Config file created with default values`)
    }
}




function setFile(){
    const jsonPkg = require('./configPkg.json')
    let configVar = jsonPkg //JSON.parse(jsonPkg)
    switch(myArgs[2]){
        case 'name':
            configVar.name = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            break;
        case 'version':
            configVar.version = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            break;
        case 'desc':
            configVar.description = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            break;
        case 'main':
            configVar.main = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            break;
        case 'user':
            configVar.superduperuser = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            break;
        default:
            fs.readFile(__dirname + "/usage/commands_edit.txt", (error, data) => {
                if(error) throw error;
                console.log(data.toString())
            })
            break;
    
    }
}

module.exports = {
    editFile,
}