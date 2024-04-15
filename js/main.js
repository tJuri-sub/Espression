function validation(){

    var fname = form.document.getElementsById("name").value;
    var mail = form.document.getElementsById("email").value;
    var message = form.document.getElementsById("message").value;
    
    if (!fname && !mail && !message) 
        alert("The field is empty");
    else if (!mail && !message) 
        alert("The mail field & message field is empty");
    else if (!fname && !message) 
        alert("The name and message field is empty");
    else if(!fname && !mail)
        alert("The fname && mail field is empty");
    else 
        alert("Your entry submitted");
        
}