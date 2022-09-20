let img= document.getElementById("img");
let bmi=document.getElementById("bmi");
let result=document.getElementById("type3");
let fit=document.getElementById("fit");
let report=document.getElementById("type4")


function openRegister() {
    card.style.transform = "rotateY(-180deg)";
  }

  img.addEventListener("click",function(){
    card.style.transform="rotateY(0deg)";
  })

  bmi.addEventListener("click",function(){
    const height=parseInt(document.getElementById("height").value);
    const weight=parseInt(document.getElementById("weight").value);
    let height_status=false ;
    let weight_status=false;  

    if(height==""||isNaN(height)||(height<=0)){
      document.getElementById("height_error").innerHTML="Please provide valid height";
    }
    else{
      document.getElementById("height_error").innerHTML=" ";
      height_status=true;

    }

    if(weight==""|| isNaN(weight)||(weight<=0)){
       document.getElementById("weight_error").innerHTML="Please provide valid weight";
    }
    else{
      document.getElementById("weight_error").innerHTML="";
      weight_status=true;
    }

    if((height_status=true) && (weight_status=true)){
      let res=(weight/((height*height)/10000)).toFixed(2);
      result.value=res;
     
    }

     result.value;
   


  })

  fit.addEventListener("click",function(){
     if(result.value<18.6){
      report.value="under weight";
     }
     else if(result.value>=18.6 && result.value<=24.9){
      report.value="Fit";
     }
     else{
      report.value="Over Weight";
     }
  })








 
 

