
function result1(){
    const num1=document.getElementById("input1").value;
    const num2=document.getElementById("input2").value;
    const output=document.getElementById("value");
    const cal_box=num1*num2;
   

    // case()

   switch(true){

       case(cal_box>=1000000000000000000):
       output.innerText="LIMIT CROSED";
       break;


       default:
             output.innerText=cal_box;

   }

   // IF ELSE 
    
   if(cal_box ===0){
     output.innerText="NO VALUE FOUND"
   }else{
    output.innerText=cal_box;
   }
    
}

function result2(){
    const num3=document.getElementById("input3").value;
    const num4=document.getElementById("input4").value;
    const output2=document.getElementById("value2");
    const cal_box2=num3/num4;
    


    switch(true){

       case(cal_box2>=1000000000000000):
       output2.innerText="LIMIT CROSED";
       break;


       default:
             output2.innerText=cal_box2;

   }

   if(cal_box2===0){
    output2.innerText="NO VALUE FOUND"
   }else{
    output2.innerText=cal_box2;
   }
    
}

function result3(){
    const num5=document.getElementById("input5").value;
    const num6=document.getElementById("input6").value;
    const output3=document.getElementById("value3");
    const cal_box3=num5-num6;
    output3.innerText=cal_box3;
     

    switch(true){

       case(cal_box3>=1000000000000000000000000000):
       output3.innerText="LIMIT CROSED";
       break;


       default:
             output3.innerText=cal_box3;

   }
    
if(cal_box3===0){

    output3.innerText="NO VALUE FOUND" 
   }else{
    output3.innerText=cal_box3;
   }

}

function result4(){
    const num7=Number(document.getElementById("input7").value);
    const num8=Number(document.getElementById("input8").value);
    const output4=document.getElementById("value4");
    const cal_box4=num7+num8;
    output4.innerText=cal_box4;

    switch(true){

       case(cal_box4>=100000000000000000000):
       output4.innerText="LIMIT CROSED";
       break;


       default:
             output4.innerText=cal_box4;

   }

   if(cal_box4===0){

    output4.innerText="NO VALUE FOUND" 
   }else{
    output4.innerText=cal_box4;
   }
}


function result40(){
   const value1=document.getElementById("input10").value;
   const out=document.getElementById("value10");
   const res=Math.sqrt(value1);
   
   if(res===0){
       out.innerText="NO VALUE FOUND"
   }else{
        out.innerText=res;

   }

}

function result30(){
    const value2=document.getElementById("input20").value;
   const out2=document.getElementById("value50");
   const res2=Math.cbrt(value2);
   out2.innerText=res2;
    

   if(res2===0){
       out2.innerText="NO VALUE FOUND"
   }else{
        out2.innerText=res2;

   }
}