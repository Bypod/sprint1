const myArgs = process.argv.slice(2)
const fs = require('fs')
const crc = require('crc/crc32');
const {doublelist} = require('./linked')
const {logEvents} = require('./logger')
const path = require('path')
const {tokenInfo} = require('./templates')

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

let newToken = JSON.parse(`{
    "created": "1969-01-31 12:30:00",
    "username": "username",
    "email": "user@example.com",
    "phone": "7096548900",
    "token": "token",
    "expires": "1969-02-03 12:30:00",
    "confirmed": "tbd"
}`);

let now = new Date();
let expires = addDays(now, 3)

function createToken() {
    switch(myArgs[1]){
        case 'create':
            tokenGenerate(myArgs[2])
            logEvents('tokenGenerate()', 'INFO', 'Creating New Token')
            break;
        case 'search':
            searchTokens();
            break;
        default:
            tokenCommands()
            console.log(doublelist.usernames())
            console.log('please use correct format... index token create <username>')
    }
}

function tokenCommands() {
    if(fs.existsSync(path.join(__dirname + '/usage'))){
        if(fs.existsSync(path.join(__dirname + '/usage/token_commands.txt'))){
            fs.readFile(path.join(__dirname + "/usage/token_commands.txt"), (error, data) => {
                if(error)console.log(error);
                console.log(data.toString())
            })
        } else{
            fs.writeFile(path.join(__dirname, './usage', '/token_commands.txt'), tokenInfo, (err) => {
                if(err) console.log(err);
                else console.log('Missing Files Created')
                tokenCommands()
            });
        }
    } else {
        fs.mkdir(path.join(__dirname, '/usage'), (err) => {
            if(err) console.log(err);
            else console.log('Missing Folder Created')
        })
        fs.writeFile(path.join(__dirname, './usage', '/token_commands.txt'), tokenInfo, (err) => {
            if(err) console.log(err);
            else console.log('Missing Files Created')
            tokenCommands()
        });
    }
}

function tokenGenerate(username){
    let token = crc(username).toString(16)
    newToken.created = now;
    newToken.username = username;
    newToken.email = `${username}@keyin.ca`;
    newToken.phone = "7095554321";
    newToken.token = token;
    newToken.expires = expires;

    let users = fs.readFileSync('tokenInfo.json','utf-8');
    let tokens = JSON.parse(users);
    tokens.push(newToken)
    users = JSON.stringify(tokens)
    
    fs.writeFile('tokenInfo.json', users, (err) => {
        if(err) console.log(err);
        else console.log(`Token Generated for: ${username}\nToken: ${token}`)
        
    }) 
    return newToken.token
}


function searchTokens(){
    switch(myArgs[2]){
        case 'username':
        case 'u':
            let username = myArgs[3]
            console.log(doublelist.search(username))
            logEvents('searchTokens()', 'INFO', 'Search Based on Username')
            break;
        case 'email':
        case 'e':
            let email = myArgs[3]
            console.log(doublelist.searchEmail(email))
            logEvents('searchTokens()', 'INFO', 'Search Based on Email')
            break;
        default:
            console.log('filler...')
            break;
    }
}



module.exports = {
    createToken,
    tokenGenerate,
}
