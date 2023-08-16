document.getElementById("submitBtn").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput");
    var message = document.getElementById("message");
    var row = document.getElementById("row");
    if(isValidEmail(emailInput.value)) {
        message.classList.remove("active");
        emailInput.classList.remove("active");
        document.getElementById("row").style.display = "block";
        document.getElementById("container").style.display = "none";
    } else {
        emailInput.classList.add("active");
        message.classList.add("active");
    }
});
document.getElementById("emailInput").addEventListener("input", function() {
    var emailInput = document.getElementById("emailInput");
    var message = document.getElementById("message");
    if(isValidEmail(emailInput.value)) {
        emailInput.classList.remove("active");
        message.style.display = "none";
         }
})
function isValidEmail(email) {
    var emailPattern = /^[a-z0-9]+@gmail\.com$/;
    return emailPattern.test(email)
}

document.getElementById("closeBtn").addEventListener("click", () =>{
    location.reload();
})
// function isValidEmail(email) {
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email)
// }

// function validateEmail(){
//     var emailInput = document.getElementById("emailInput");
//     var email = emailInput.value;

//     var pattern = /^[a-z0-9]+@gmail\.com$/;
// var pattern = /^[a-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.com$/;
//     if(pattern.test(email)) {
//         emailInput.classList.remove("active");
//         emailInput.style.border = "";
//         document.getElementById("row").style.display = "block";
//         document.getElementById("container").style.display = "none";
//     } else {
//         emailInput.classList.add("active");
//         emailInput.style.border = "2px solid red";
//     }

//     function clearError() {
//         var emailInput = document.getElementById("emailInput");
//         emailInput.classList.remove("active");
//         emailInput.style.border = "";
//     }
// }

