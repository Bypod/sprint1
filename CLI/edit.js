// const jsonPkg = require('./configPkg.json')
const fs = require('fs')
const myArgs = process.argv.slice(2)
const {config} = require('./templates')
const {configCreate} = require('./init.js')
const path = require('path')
const {logEvents} = require('./logger')
const {editInfo} = require('./templates')

function editFile(){
    switch(myArgs[1]){
        case 'set':
            setFile()
            logEvents('setFile()', 'INFO', 'User Requsted setting new values to the config file')
            break;
        case 'reset':
            resetFile()
            logEvents('resetFile()', 'INFO', 'Reset of default values to the ')
            break;
        case 'view':
            const jsonPkg = require('./configPkg.json')
            console.log(jsonPkg)
            logEvents('editFile()', 'INFO', 'User requested viewing of the config file')
            break;
        default:
            editCommands()
    }
}

function editCommands() {
    if(fs.existsSync(path.join(__dirname + '/usage'))){
        if(fs.existsSync(path.join(__dirname + '/usage/edit_commands.txt'))){
            fs.readFile(path.join(__dirname + "/usage/edit_commands.txt"), (error, data) => {
                if(error)console.log(error);
                console.log(data.toString())
            })
        } else{
            fs.writeFile(path.join(__dirname, './usage', '/edit_commands.txt'), editInfo, (err) => {
                if(err) console.log(err);
                else console.log('Missing Files Created')
                editCommands()
            });
        }
    } else {
        fs.mkdir(path.join(__dirname, '/usage'), (err) => {
            if(err) console.log(err);
            else console.log('Missing Folder Created')
        })
        fs.writeFile(path.join(__dirname, './usage', '/edit_commands.txt'), editInfo, (err) => {
            if(err) console.log(err);
            else console.log('Missing Files Created')
            editCommands()
        });
    }
}


function resetFile(){
    if(fs.existsSync(path.join(__dirname + '/configPkg.json'))){
        fs.readFile(path.join(__dirname + '/configPkg.json'), (error, data) => {
            if(error) console.log(error)
            else {
                let data2 =JSON.parse(data)
                if(config.name === data2.name &&
                    config.version === data2.version &&
                    config.description === data2.description &&
                    config.main === data2.main &&
                    config.superduperuser === data2.superduperuser ){
                    console.log('Config File is already at default status')
                } else {
                    let data = JSON.stringify(config, null, 2)
                    fs.writeFile(path.join(__dirname, '/configPkg.json'), data, (err) => {
                        if(err) throw err;
                        else console.log('Default values reset in config file')
                    });
                }
            }            
        })
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
            logEvents('setFile()', 'INFO', 'Config NAME updated')
            break;
        case 'version':
            configVar.version = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            logEvents('setFile()', 'INFO', 'Config VERSION updated')
            break;
        case 'desc':
            configVar.description = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            logEvents('setFile()', 'INFO', 'Config DESCRIPTION updated')
            break;
        case 'main':
            configVar.main = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            logEvents('setFile()', 'INFO', 'Config MAIN file updated')
            break;
        case 'user':
            configVar.superduperuser = myArgs[3]
            fs.writeFile('configPkg.json', JSON.stringify(configVar), (err) => {
                console.log('config file updated')
            })
            logEvents('setFile()', 'INFO', 'Config USER updated')
            break;
        default:
            editCommands()
            break;
    
    }
}

module.exports = {
    editFile,
}