function shout(string) {
    return string.toUpperCase();
}
shout("hello")

function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
    
}
logShout("hello")


function logWhisper(string) {
    console.log(string.toLowerCase())
    
}
logShout("HELLO")

function sayHiToHeadphonedRoommate(string) {
    let lowerCase = "hello";
    let upperCase = "HELLO"
    
    if (string === lowerCase) {
        return 'I can\'t hear you!'
    }else if(string===upperCase){
      return "YES INDEED!" 
    }else if(string === "Let\'s have dinner together!") {
        return "I would love to!"
    }
    // if (string.toLowerCase()) {
    //     return 'I can\'t hear you!'
    // }else if (string.toUpperCase()) {
    //     return "YES INDEED!"
    // }else if(string === "Let\'s have dinner together!") {
    //     return "I would love to!"
    // }
}
console.log(sayHiToHeadphonedRoommate("hello"))
console.log(sayHiToHeadphonedRoommate("HELLO"))
console.log(sayHiToHeadphonedRoommate("Let\'s have dinner together!"))


