function go_cal(){
    window.location.href="2.html"
};


//MAIN FUNCTION//

function gofile(){
    const value=document.getElementById("search").value;

    if(value ==="calculetor"){
        window.location.href="2.html"
    }
    
    
    else if(value ==="Calculator"){
       window.location.href="2.html"
    }

    else if(value ==="physics-motion"){
        window.location.href="3.html"

    }

    else if(value ==="physics-force"){
         window.location.href="4.html"

    }
    
    else{
        alert("NO RESULT FOUND")
    }
}