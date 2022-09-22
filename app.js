/*
if(condition) {

}
else {

}

== equal => ===

!= not equal => !==
*/
/*
let personID = 354;

if(personID === undefined){
    console.log("Id is undefined")
} else {
    console.log('Id is good')
}*/

/*
const color = "blue"

if(color === "red"){
    console.log("Stop!")
} else if (color === "yellow") {
    console.log("Yellow!??!?")
} else {
    console.log("Error")
}*/

const name = "Kadi"
const age = 40

if(age > 0 && age <=12){
    console.log(`${name} on laps`)
}else if(age > 12 && age <18){
    console.log(`${name} on nooruk`)
}else{
    console.log(`${name} on surmale lähedal`)
}

let id = 100

// ? - ternary
console.log(id === 100 ? "Ok" : "Not")

// switch

const color = "green"

switch (color) {
    case "red":
        console.log("STOP")
        break;
    case "yellow":
        console.log("Attention!")
        break;
    case "green":
        console.log("Go!")
        break;
    default:
        console.log("error")
}