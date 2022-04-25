// let a = 2;
// a = 'word'
// let ads = [1,2,3,4,6,8]
// const b = 4;
// b = 5;

// let getInner = ;
// console.log(getInner)
 let temp= prompt("тумпература")
 let hum= prompt("вологість")
 document.getElementById("d").innerHTML = hum;
 document.getElementById("b").innerHTML = temp;

 function getTemp(){
  

 if(temp <= 10){
 alert("So cold");
   }
  else if(temp >= 37) {
    alert ("So hot");
  }
  else{
      alert("normal")
  }
 }
 function getHum(){
  

  if(hum <= 25){
  alert("you have to moisten the room");
    }
   else if(hum >= 75 ) {
     alert ("you have to dry the room");
   }
   else{
       alert("normal")
   }
  }

 