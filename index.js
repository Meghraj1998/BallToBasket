var btn=document.getElementById("btn");
 
var bal;
var i1=0;


btn.addEventListener('click', function(){

   makeball();
    


});




function makeball()
{

    
        bal=document.getElementsByClassName("ballContainer");
  

         var ele = document.createElement("div");
              ele.setAttribute("id","timedrpact");
              ele.setAttribute("class","inner");
             
              ele.style.display="flex";
  
          
             bal[0].appendChild(ele);
           
  
             var s=setInterval(function(){
              console.log(i1);
              
              console.log(i1);
              if( i1>=5 )
              {
                   

                  console.log(i1);
                  

                  ele = document.createElement("div");
                   
                  ele.setAttribute("class","inner");
             
                  ele.style.display="flex";
                  bal[0].appendChild(ele);
                  

                  
                  i1=0;


              }
            
  
                
            let  one = document.createElement("div");
            one.setAttribute("id","one");
            one.style.backgroundColor='#' + parseInt(Math.random() * 0xffffff).toString(16);
             ele.appendChild(one);
            
             i1++;
  
  
  
              },1000);
             
          
              
  
             // for(let i=0;i<4;i++)
          //   {
              //   console.log("hi");
  
               //  setTimeout(function()
               //  {
  
                 
        
               //  },1000);
  
                
                 
  
           //  }
  
              
              
          
  
  
  
  
  
   
}