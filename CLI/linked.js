const fs = require('fs')

class DoubleNode{
    constructor(element,next,prev){
        this.element = element;
        this.next = undefined
        this.prev = prev;
    }
}

class DoubleList{
    constructor(equalsFn = this.defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.tail = undefined;
        this.equalsFn = equalsFn;
    }
    defaultEquals(a,b){
        return a===b;

    }

    insert(element){
        const node = new DoubleNode(element);
        let current;
        if(this.head == null){
            this.head = node;

        } else{
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;

        }
        this.count++;

    }

    getElementAt(index){
        if(index >= 0 && index<= this.count){
            let node = this.head;
            for(let i = 0;i < index && node !=null; i++){
                node = node.next;
            }
            return node;

        }
        return undefined;
    }

    indexOf(element){
        let current = this.head;
        for(let i = 0; i< this.count && current !=null; i++){
            if(this.equalsFn(element,current.element)){
                return i;

            }
            current = current.next;

        }
        return -1;
    }

    size(){
        return this.count;
    }

    usernames(){
        if(this.head == null){
            return '';
        }
        let objString = `${this.head.element.username}`;
        let current = this.head.next;
        for(let i = 1; i<this.size() && current !=null; i++){
            objString = `${objString},${current.element.username}`;
            current = current.next;

        }
        return objString;
    }
    tokens(){
        if(this.head == null){
            return '';
        }
        let objString = `${this.head.element.token}`;
        let current = this.head.next;
        for(let i = 1; i<this.size() && current !=null; i++){
            objString = `${objString},${current.element.token}`;
            current = current.next;

        }
        return objString;
    }

    search(element){
        let current = this.head;
        for(let i = 0; i< this.count && current !=null; i++){
            if(this.equalsFn(element,current.element.username)){
                return current.element.token;

            }
            current = current.next;

        }
    }

    searchEmail(element){
        let current = this.head;
        for(let i = 0; i< this.count && current !=null; i++){
            if(this.equalsFn(element,current.element.email)){
                // return current.element.token;
                if(current.element.email == undefined){
                    return 'Incorrect email format... All emails are as follows: <username>@keyin.ca'
                } else {
                    return current.element.token
                }

            }
            current = current.next;

        }       
    }

}

const doublelist = new DoubleList();

function insertUsers(){
    let userTokens = fs.readFileSync('tokenInfo.json','utf-8');
    let tokens = JSON.parse(userTokens);
    for(i in tokens){
        doublelist.insert(tokens[i])
    }
}
insertUsers()

module.exports = {
    DoubleList,
    doublelist
}