let form = document.getElementById('myForm')

form.addEventListener("submit", function(event){

   event.preventDefault()
   let name = document.getElementById("name").value
   let email = document.getElementById("email").value
   let message = document.getElementById("message").value

   if(name&&email&&message){
    alert("Form submitted Successfully")

   } else{
    alert("Form Incomplete")
   }

})