//accessing the elements
const sec=document.getElementById('sec');
const min=document.getElementById('min');
const strBtn=document.getElementById('start');
const stpBtn=document.getElementById('stop');
const resBtn=document.getElementById('reset');

//timer function for seconds
let seconds=0;
let minutes=0;
let time1;
let elapsedTime=60000;

function timer1(){
   time1=setInterval(()=>{
     seconds++;
     
    
     if(seconds<10){
        sec.textContent="0"+seconds;
     }
     else{
        sec.textContent=seconds;
     }
     if(seconds==60){
        elapsedTime=60000;
        sec.textContent="00";
        seconds=0;

     }
     
     
   },1000) 
    

}

//timer for minutes
let minute=0;
let time2;

function timer2(){
    
    time2=setInterval(()=>{
        
        minutes++;
       if(minutes<10){
        min.textContent="0"+minutes;
       } 
       else{
        min.textContent=minutes;
       }
       if(minutes==60){
        min.textContent="00";
        minutes=0;
       }
      
    },elapsedTime)
}

//adding event to the start button
strBtn.addEventListener('click',()=>{
    timer1();
    
    timer2();
    
});

//adding event to the stop button
stpBtn.addEventListener('click',()=>{
    clearInterval(time1);
    elapsedTime=(60-seconds)*1000;
   console.log(elapsedTime);
    
    
    clearInterval(time2);
    
})

//adding event to the reset button
resBtn.addEventListener('click',()=>{
    sec.textContent="00";
    clearInterval(time1);
    min.textContent="00";
    clearInterval(time2);
   
    seconds=0;
    minutes=0;
    elapsedTime=60000;
})

