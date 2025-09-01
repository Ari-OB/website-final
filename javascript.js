function enter(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    if (name=="") {
        alert("Please enter a name.");
        document.getElementById("name").focus();
    }else{
    if (email=="") {
        alert("Please enter an email.");
        document.getElementById("email").focus();
    }else{
        console.log(name + " " + email + " " + message);
        document.getElementById("name").value=""
        document.getElementById("email").value=""
        document.getElementById("message").value=""
        document.getElementById("name").focus();
    }
    }
}