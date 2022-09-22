const today = new Date()

let val

val = today
val = today.getMonth() // 0 - jaanuar
val = today.getDate()
val = today.getFullYear()

val = new Date("09/22/2021")
val = new Date("September 23 2022")

val = new Date()
val.setDate(23)
val.setFullYear(2023)
console.log(val)