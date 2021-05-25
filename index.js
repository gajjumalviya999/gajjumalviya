let i=1;
let txt="Gajendra Malviya";
let nameTypeId=document.querySelectorAll(".nameType");
function typingEffect(){
    if(i<txt.length){
        nameTypeId[0].innerText= txt.slice(0,i+1);
        nameTypeId[1].innerText= txt.slice(0,i+1);
        
        i++;
        setTimeout(typingEffect,50);
    }
}
typingEffect();