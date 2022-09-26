/*function greeting(name){
    // console.log(`Hello, ${name}!`)
    return `Hello, ${name}!`
}

 */
/*
greeting("Robin")
let greet = greeting("Robin")
console.log(greet)

 */
/*
const square = function(number) {
    return number * number
}

/*let result = square( 38)
console.log(result)

 */
    (function(){
    console.log('function is running')
})();

(function(name) {
    console.log(`Hello, ${name}`)
})("Robin")

const todo = {
    add: function(){
        console.log("add todo...")
    },
    edit: function(){
        console.log("edit todo...")
    },
    delete: function(){
        console.log("delete todo...")
    },
}