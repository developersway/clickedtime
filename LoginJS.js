 document.getElementById('but').onclick=function(){
        var username=document.getElementById('input1').value;
        localStorage.setItem("textvalue",username);
        alert("Hi "+username +"! Press OK to continue");
        window.location="file:///W:/Reaction%20Time/Game.html"    
        
    }