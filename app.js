const firstname = "Robin"
const surname = "Noormets"
const email = "robin.noormets@voco.ee"
const department = "IKT"

let result = "<ul>" +
    "<li><b>Name:</b> "+ firstname +" </li>" +
    "<li> "+ surname +" </li>" +
    "<li> "+ email +" </li>" +
    "<li> "+ department +" </li>" +
    "</ul>>"

result = `<ul>
   <li><b>Name: </b>${firstname}</li>
   <li><b>Surname: </b>${surname}</li>
   <li><b>Email: </b>${email}</li>
   <li><b>Dept.: </b>${department}</li>
</ul>`

console.log(result)
document.body.innerHTML = result