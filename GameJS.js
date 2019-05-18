document.getElementById('1').innerHTML=localStorage.getItem("textvalue");

var oldtime=new Date();
     function getRandomColor() {
       var letters = '0123456789ABCDEF';
       var color = '#';
       for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
      }
        return color;
     }
     function appear(){
          document.getElementById('cn').style.display="block";
          document.getElementById('cn').style.top=Math.random()*200+'px';
          document.getElementById('cn').style.left=Math.random()*800+'px';
          document.getElementById('cn').style.width=Math.random()*400+'px'
          document.getElementById('cn').style.height=Math.random()*300+'px'
          document.getElementById('cn').style.backgroundColor=getRandomColor();
          
     }
     function checktime()
     {
          document.getElementById('time').innerHTML=((new Date()-oldtime)/1000)+'s';
          oldtime=new Date();
     }
     document.getElementById('cn').onclick=function(){
          document.getElementById('cn').style.display="none";
          checktime();
          setTimeout(appear,100);
          }