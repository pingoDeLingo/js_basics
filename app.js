const person = {
    firstName: "Kadi",
    surName: "Ilves",
    age: 40,
    email: "kadiilves@gmail.com",
    hobbies: ["tennis", "korvpall"],
    address: { city: "Tallinn",
    county: "Võrumaa",
       number: 23
    },
    getBirthYear: function (){
        return 2022 - this.age
    }
}

let val
val = person.getBirthYear()
val = person.hobbies[0]
console.log(val)

/*
for(let i = 0; i < person.hobbies.length; i++){
     console.log(person.hobbies[i])
*/

person.hobbies.forEach((hobbie, index)=> {
    console.log(hobbie)
})

