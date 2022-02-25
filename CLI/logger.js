const{format}=require('date-fns')
const EventEmitter = require('events')
const myEmitter = new EventEmitter()
const fs = require('fs')
const path = require('path')

let now = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;

let date = `${format(new Date(), 'yyyyMMdd')}`;

myEmitter.on('log', (func, lvl, msg) => {
    let logInfo = `\n${now}\t${lvl}\t${func}\t${msg}`
    logCreate()
    function logCreate(){
        if(fs.existsSync(path.join(__dirname + '/logs'))){
            if(fs.existsSync(path.join(__dirname + '/logs', `/${date}_events.log`))){
                fs.readFile(__dirname + `/logs/${date}_events.log`, (error, data) => {
                    fs.appendFile(path.join(__dirname + '/logs', `/${date}_events.log`), logInfo, (err)=>{
                        console.log('Event Logged')
                    })
                })
            } else {
                fs.writeFile(path.join(__dirname + '/logs', `/${date}_events.log`), logInfo, (err) => {
                    if(err) console.log(err);
                    else console.log('Event logged')
                });}
        } else {
            fs.mkdir(path.join(__dirname + `/logs`), (err) => {
                if(err) console.log(err);
                else console.log('logs directory created')
            })
            fs.writeFile(path.join(__dirname + `/logs/${date}_events.log`), logInfo, (err) => {
                if(err) console.log(err);
                else console.log('event logged')
            });
            
        }
    }
    
    
    
})

function logEvents(f, l, m){
    myEmitter.emit('log', f, l, m)
}


// myEmitter.on('log', (func, lvl, msg) => {
//     let logInfo = `\n${now}\t${lvl}\t${func}\t${msg}`
//     logCreate()
//     function logCreate(){
//         if(fs.existsSync(path.join(__dirname, './usage'))){
//             if(fs.existsSync(path.join(__dirname, './usage', 'logs.log'))){
//                 fs.readFile(__dirname + "/usage/logs.log", (error, data) => {
//                     fs.appendFile(path.join(__dirname, './usage', 'logs.log'), logInfo, (err)=>{
//                         console.log('log added')
//                     })
//                 })
//             } else {
//                 fs.writeFile(path.join(__dirname, './usage', 'logs.log'), logInfo, (err) => {
//                     if(err) console.log(err);
//                     else console.log('event logged')
//                 });}
//         } else {
//             fs.mkdir(path.join(__dirname, 'usage'), (err) => {
//                 if(err) console.log(err);
//                 else console.log('directory usage created')
//             })
//             fs.writeFile(path.join(__dirname, './usage', 'logs.log'), logInfo, (err) => {
//                 if(err) console.log(err);
//                 else console.log('event logged')
//             });
//         }
//     }
    
    
    
// })

module.exports = {
    myEmitter,
    logEvents
}


