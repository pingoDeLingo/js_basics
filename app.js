const firstname = "Robin"
const surname = "Noormets"

let val = firstname + "" + surname

val = "anna"
val += surname

val = firstname.toUpperCase()
val = surname.toUpperCase()

val = surname[0]
val = surname.indexOf("r")
val = surname.lastIndexOf("r")

val = surname.charAt(2)
val = surname.charAt(surname.length - 1)

val = surname.substring(0, 3)
val = surname.slice(4, 8)
console.log(val)

const tags = "HTML, CS, JS"
val = tags.split(",")

console.log(val[1].trim())