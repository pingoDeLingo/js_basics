let val

console.log(555)
val = String(555)
console.log(val)
val = String(6+4)
console.log(val)
val = String(5.4)
console.log(val)

// Object -> String
val = String(new Date())
console.log(val)

//toString()
val = (true).toString()
console.log(val)

// Bool -> Number

val = Number(true)
console.log(val)

// String -> Number

val = Number("test")
console.log(val)