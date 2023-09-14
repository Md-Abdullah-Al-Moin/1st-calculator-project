
function cal(c){
   text.value=text.value+c;
}
window.addEventListener('load',function(){
   text.value=null;
})
function cleart(){
   text.value=null;
   
}
var a= text.value;
function calculate(){
   
   if (a==null){
      text.value=null;
   }
   else{
      text.value = eval(text.value);
   }
}
var jp=0;
function change(){
   var a= document.querySelector('button');
   let p= document.querySelector('.container');
   var btns= document.querySelectorAll('.bl');

   if(jp==0){
      jp=1;
      a.innerHTML = 'Night';
   a.style.backgroundColor='black';
   a.style.color='white';
   p.style.backgroundColor='black';
   }
 else if (jp==1){
      console.log('hi')
      a.innerHTML = 'Day';
      a.style.backgroundColor='';
      a.style.color='black';
      p.style.backgroundColor='';
      jp=0;
   }
}
