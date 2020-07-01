const messages = [
    "Japheth",
    "Ana",
    "Yesica",
    "Diego",
    "Laura",
    "Paulina",
    "Cludia"
];
const randomMsg = ()=>{
    const message = messages[ Math.floor(Math.random()*messages.length)]
    console.log(message )
}

module.exports = {randomMsg};