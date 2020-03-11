var pair = 0;
function postFunction(){
    var text1 = document.getElementById("text1").value;
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2"); 
    
    pair++
    if(pair==1){
        post1.innerHTML = text1;
    }
    else if(pair==2){
        reply1.innerHTML = text1;
    }
    else if(pair==3){
        reply2.innerHTML = text1;
    }
}

function clearFunction(){
    post1.innerHTML  = "";
    reply1.innerHTML = "";
    reply2.innerHTML = "";
    pair=0;
}