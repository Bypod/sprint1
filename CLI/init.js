const fs = require('fs')
const path = require('path')
const {indexInfo, config, editInfo, tokenInfo} = require('./templates')
const {logEvents} = require('./logger')



function appInit(){
    const myArgs = process.argv.slice(2);
    switch (myArgs[1]){
        case '--all': 
        case 'a':
        default:
            logEvents('initCreate()', 'INFO', 'Node initialized')
            logEvents('configCreate()', 'INFO', 'config file created and information added')
            initCreate();
            configCreate();
            console.log('app initialization for --all')
    }
}


function initCreate(){
    if(fs.existsSync(path.join(__dirname, '/usage'))){
        fs.writeFile(path.join(__dirname, '/usage', '/commands.txt'), indexInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to init commands file')
        });
        fs.writeFile(path.join(__dirname, '/usage', '/edit_commands.txt'), editInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to edit commands file')
        });
        fs.writeFile(path.join(__dirname, '/usage', '/token_commands.txt'), tokenInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to token commands file')
        });
    } else {
        fs.mkdir(path.join(__dirname, 'usage'), (err) => {
            if(err) console.log(err);
            else console.log('directory created')
        })
        fs.writeFile(path.join(__dirname, '/usage', '/commands.txt'), indexInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to init file')
        });
        fs.writeFile(path.join(__dirname, '/usage', '/edit_commands.txt'), editInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to edit commands file')
        });
        fs.writeFile(path.join(__dirname, '/usage', '/token_commands.txt'), tokenInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to token commands file')
        });
    }
}

function configCreate(){
    try {
        let data = JSON.stringify(config, null, 2);
        if(!fs.existsSync(path.join(__dirname, 'configPkg.json'))) {
            fs.writeFile('configPkg.json', data, (err) => {
                console.log('config file written and created')
            })
        }else {
            console.log('config.json already exists')
        }
    }catch(err){
        console.error(err)
    }
}

module.exports = {
    appInit,
    configCreate
}