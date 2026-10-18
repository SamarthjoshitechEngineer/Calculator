const panel=document.getElementById('panel');
const buttons=document.querySelectorAll('.Button');
buttons.forEach(button  =>{
    button.addEventListener('click',()=>{
        const buttonText=button.innerText;
        if(buttonText==='='){
            try{
                panel.value=eval(panel.value);
            }catch(error){
                panel.value="Error";
            }
            }else if(buttonText==='AC'||buttonText=='C'){
                panel.value='';
            }else if(buttonText==='sqrt'){
            const currentvalue=parseFloat(panel.value);
                if(isNaN(currentvalue)||currentvalue<0){
               panel.value="Error";
                }  
            else{
           panel.value=Math.sqrt(currentvalue);
            }else if(buttonText=='sin'){
            const current=parseFloat(panel.value);
            panel.value=Math.sin(panel.value);
        }
            }
        else{
                if(panel.value==="Error"){
                 panel.value=" ";
                }
            panel.value+=buttonText;
        }
    });
});
