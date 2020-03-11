
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit  = validateForm;
}

function validateForm() {
    var fn = document.forms["myForm"]["firstname"];
    var ln = document.forms["myForm"]["lastname"];
    var gen = document.forms["myForm"]["gender"];
    var bir = document.forms["myForm"]["bday"];
    var em = document.forms["myForm"]["email"];
    var use = document.forms["myForm"]["username"];
    var pass = document.forms["myForm"]["password"].value;
    var repass = document.forms["myForm"]["password1"].value;
    if(pass != repass){
        var form = document.getElementById("errormsg");
        form.innerHTML = "❗Password not match ❗";
        return false;
        // alert(false);
    } else{
         return true;
        // alert(true);
    }
   


  
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

