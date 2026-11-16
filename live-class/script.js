/* let heading = document.getElementById("heading");
heading.style.color = "green"; */

let userName = prompt("Enter your name");
let userRole = Number(prompt("Enter your role"));
let userClass = prompt("Enter your class");
let user = {
    userName, 
    userRole, 
    userClass, 
    assignValue: function(userName, userRole, userClass) {
    this.userName = userName;
    this.userRole = userRole;
    this.userClass = userClass;},
    greet: function() {
        console.log(this.userName, this.userRole, this.userClass);
    }
};
user.assignValue("Vrishank", 1, "A");
user.greet();