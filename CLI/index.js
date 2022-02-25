const {appInit} = require('./init.js')
const {editFile} = require('./edit')
const {createToken} = require('./token')
const fs = require('fs')
const path = require('path')
const {indexInfo} = require('./templates')
const {logEvents} = require('./logger')

const myArgs = process.argv.slice(2)

switch(myArgs[0]){
    case '--init':
    case 'i':
        console.log('App Start');
        appInit()
        logEvents('appInit()', 'INFO', 'Initialization requested')
        break;
    case 'token':
        console.log('Token generation')
        createToken()
        logEvents('createToken()', 'INFO', 'Token generation')
        break;
    case 'cat':
        console.log('edit/view the config files')
        editFile();
        logEvents('editFile()', 'INFO', 'User requested editing of the config file')
        break;
    case 'help':
    case 'h':
    default:
        indexCommands()
        logEvents('indexCommands()', 'INFO', 'User requested help commands')
        
}  



function indexCommands() {
    if(fs.existsSync(path.join(__dirname + '/usage'))){
        if(fs.existsSync(path.join(__dirname + '/usage/commands.txt'))){
            fs.readFile(path.join(__dirname + "/usage/commands.txt"), (error, data) => {
                if(error)console.log(error);
                console.log(data.toString())
            })
        } else{
            fs.writeFile(path.join(__dirname, './usage', 'commands.txt'), indexInfo, (err) => {
                if(err) console.log(err);
                else console.log('Missing Files Created')
                indexCommands()
            });
        }
    } else {
        fs.mkdir(path.join(__dirname, 'usage'), (err) => {
            if(err) console.log(err);
            else console.log('Missing Folder Created')
        })
        fs.writeFile(path.join(__dirname, './usage', 'commands.txt'), indexInfo, (err) => {
            if(err) console.log(err);
            else console.log('Missing Files Created')
            indexCommands()
        });
    }
}