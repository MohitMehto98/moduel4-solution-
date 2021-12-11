var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

let nameCheck = () => {
    for(i = 0; i < names.length; i++) {
        let firstLetter = names[i].toLowerCase();
        if(firstLetter[0] === 'j'){
           byeSpeaker();
        }else {
            helloSpeaker();
        }
    }
}

let helloSpeaker = () => {
    console.log(`Hello ${names[i]}`);
}

let byeSpeaker = () => {
    console.log(`Good Bye ${names[i]}`);
}

nameCheck();