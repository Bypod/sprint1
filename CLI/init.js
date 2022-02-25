const fs = require('fs')
const path = require('path')
const {indexInfo, config} = require('./templates')
const {logEvents} = require('./logger')



function appInit(){
    const myArgs = process.argv.slice(2);
    switch (myArgs[1]){
        case '--all': 
        case 'a':
        default:
            logEvents('initCreate()', 'INFO', 'Node initialized')
            initCreate();
            configCreate();
            console.log('app initialization for --all')
    }
}

function initCreate(){
    if(fs.existsSync(path.join(__dirname, './usage'))){
        fs.writeFile(path.join(__dirname, './usage', 'initPkg.txt'), indexInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to init file')
        });
    } else {
        fs.mkdir(path.join(__dirname, 'usage'), (err) => {
            if(err) console.log(err);
            else console.log('directory created')
        })
        fs.writeFile(path.join(__dirname, './usage', 'initPkg.txt'), indexInfo, (err) => {
            if(err) console.log(err);
            else console.log('Data Written to init file')
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