let red=document.getElementById('red');
let yellow=document.getElementById('yellow');
let green=document.getElementById('green');

// code 1
// obj={
//   'red':0,'yellow':1,'green':2
// }

bruh={
  1:'red',2:'yellow',0:'green'
}

let score=document.getElementById('scoreBoard');

let amount =document.getElementById('amount');

// red.onclick=()=>{
//   let checker=red.innerText;
//   let rand=(Math.floor(Math.random()*3));
//   if(rand==obj[checker]){
//     score.innerText=`damn! son.`
//     amount.innerText=Number(amount.innerText)+5;
    
//   }
//   else{
//     score.innerText=`Sorry! correct choise was: ${bruh[rand]}`
//     amount.innerText=Number(amount.innerText)-2.5;
//   }
// }

// yellow.onclick=()=>{
//   let checker=yellow.innerText;
//   let rand=(Math.floor(Math.random()*3));
//   if(rand==obj[checker]){
//     score.innerText=`damn! son.`
//     amount.innerText=Number(amount.innerText)+5;
    
//   }
//   else{
//     score.innerText=`Sorry! correct choise was: ${bruh[rand]}`
//     amount.innerText=Number(amount.innerText)-2.5;
//   }
// }

// green.onclick=()=>{
//   let checker=green.innerText;
//   let rand=(Math.floor(Math.random()*3));
//   if(rand==obj[checker]){
//     score.innerText=`damn! son.`
//     amount.innerText=Number(amount.innerText)+5;
    
//   }
//   else{
//     score.innerText=`Sorry! correct choise was: ${bruh[rand]}`
//     amount.innerText=Number(amount.innerText)-2.5;
//   }
// }

//code 2

const btn=document.querySelectorAll('.btn')

btn.forEach(func)

function func(bttn){
  bttn.onclick=()=>{
    const rand=(Math.floor(Math.random()*3));
    if(rand==bttn.value){
      score.innerText="damn son!"
      amount.innerText=Number(amount.innerText)+5;
    }
    else {
      amount.innerText=Number(amount.innerText)-2.5;
      score.innerText=`lmao looser! correct colour was ${bruh[rand]} .`
    }
  }
}
