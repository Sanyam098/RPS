
var dis = document.getElementById("ggrules")
var whicross = document.getElementById("cross")
var redcroses = document.getElementById("whitecross")
var con = document.querySelectorAll(".seloption");
var linees = document.querySelectorAll(".lines");

let random = Math.floor(Math.random()*3);
let pickeds = document.querySelector(".picked")
let computers = document.querySelector(".computer")
let winModel = document.querySelector(".winmodel")
let winner = document.querySelector(".winner")
let play = document.querySelector(".playagain")
let score  = JSON.parse(localStorage.getItem("score"));
let scoreEle  = document.getElementById("score");
let score2 = JSON.parse(localStorage.getItem("cscore"))
let scoreCle  = document.getElementById("cscore");
let victory = document.getElementById("vic");
let fin= document.getElementById("vix");
let scoreboard= document.getElementById("hed");
var  roc = document.getElementById("re")
var pap = document.getElementById("r2")
var sic = document.getElementById("r3")
var li1 = document.getElementById("r3")

// console.log(fin)


if(score){
  scoreEle.innerText = score;
}
if(score2){
  scoreCle.innerText = score2;
}
let count = 0;
con.forEach((element,index)=>{
   
    element.addEventListener("click",()=>{
      pickeds.style.opacity = "1";
      
      linees.forEach(lin=>{
        lin.style.display = "none";
      })
      con.forEach(item =>{
         item.style.display = "none";
         
      })
         element.style.display = "block"
          element.classList.add("show")
          
          setTimeout(()=>{
            con[random].style.display = "block"
          },1000)
          con[random].classList.add("right");
          setTimeout(()=>{
            computers.style.opacity = "1";
            setTimeout(()=>{
              con[random].style.display = "block";
              con[random].classList.add("right");
              
            },1000);
            setTimeout(()=>{
              if(index == 0 && random == 2 || index == 1 && random == 2 || index == 2 && random == 1){
                  winModel.style.display = "flex";
                  winner.innerText = "You Win\nAgainst Pc";
               
                  count = score;
                  count++;
                  scoreEle.innerHTML = count;
                 
                 localStorage.setItem("score",JSON.stringify(count))
               
                 
              }
              else if (index == random){
                    winModel.style.display = "grid"
                    winner.innerText = "TIE"

                    
                    
              
              }  
              
              else{
                winModel.style.display = "flex";
                winner.innerText = "you lost\nAgainst PC";
                count = score2;
                count++;
                localStorage.setItem("cscore",JSON.stringify(count))

              }
      
            })
           
            
          },500);
          play.addEventListener("click" , ()=>{
            window.location.reload()
          })

         
          
    })
})

function showRules(){
var display = document.getElementById('ggrules');
 

 if(display.style.display === "none"){
    display.style.display = "block"

    whicross.style.display = "block"
    redcroses.style.display = "block"
 }
 else{
    display.style.display = "none";
    whicross.style.display = "none"
    redcroses.style.display = "none"
 }
 }
    

function cross(){
   
    
      if(dis.style.display === "block"){
        dis.style.display = "none"
        whicross.style.display = "none"
        redcroses.style.display = "none"

      }
      else{
        dis.style.display = "none";
        whicross.style.display = "none";
        redcroses.style.display = "none";

      }
        
    }
    
    function nextpage(){
      var fin= document.getElementById("vix");
      var gm = document.getElementById("full")
     
      var li2 = document.getElementById("line1")
      var li3 = document.getElementById("line2")
      var li4 = document.getElementById("line3")
      var tro= document.getElementById("tro");
      var hur= document.getElementById("hur");
      var nextbtn= document.getElementById("nextl");
      var rulebtn= document.getElementById("rulel");
      var plays= document.getElementById("playo");
     
      plays.style.display = "block"
    
      gm.style.display = "flex";
      fin.style.opacity = "1";
      gm.style.display == fin;
      fin.style.display = "block"
       tro.style.display = "block"
        hur.style.display = "block"
      dis.style.display = "none"
        whicross.style.display = "none"
         redcroses.style.display = "none"
   scoreboard.style.display = "none"
   nextbtn.style.display = "none"; 
    roc.style.display = "none"; 
    pap.style.display = "none"; 
    sic.style.display = "none"; 
    li1.style.display = "none"; 
    li2.style.display = "none"; 
    li3.style.display = "none"; 
    li4.style.display = "none"; 
 rulebtn.style.display = "block";
 rulebtn.style.marginLeft = "105em"
   plays.classList.add("center")
   plays.addEventListener("click" , ()=>{
    window.location.reload();
   })
   
 
   

    }
    function Displaymodel() {
    roc.classList.add("boxshadow")
    pap.classList.add("boxshadow")
      
    }
     function reloadrps(){
      var relo = document.querySelectorAll(".heading")
      relo.forEach((element)=>{
        element.addEventListener("click",()=>{
          window.location.reload();
        })
      })
    }
    

