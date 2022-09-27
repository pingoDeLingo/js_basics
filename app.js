let val;

val = document.getElementById('task')
val = document.getElementById("task-title")

/*const taskTitle =
    document.getElementById("task-title")
taskTitle.style.backgroundColor = "#333"
taskTitle.style.color = "#fff"
taskTitle.style.padding = "10px"

taskTitle.textContent = "Defined Tasks"
taskTitle.innerText = "My Favorite Tasks"
taskTitle.innerHTML = "<b style='color: tomato'>My tasks</b>"
console.log(taskTitle)*/

val = document.querySelector(".card-title")
val = document.querySelector("ul")
/*const task = document.querySelector("li")
task.style.color = "red"*/
val = document.querySelector("li:first-child")
document.querySelector("li:nth-child(odd)").style.backgroundColor = "#ccc"
document.querySelector("li:nth-child(even)").style.backgroundColor = "#f4f4f4"

// Multiply elements

val = document.querySelectorAll("li")
oddList = document.querySelectorAll("li:nth-child(odd)")

oddList.forEach((li) => {
    li.style.background = "green"
})

console.log(val)