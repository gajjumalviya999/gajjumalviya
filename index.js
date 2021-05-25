let i=1;
let txt="Gajendra Malviya";
let typingcur="|";
let nameTypeId=document.querySelectorAll(".nameType");
function typingEffect(){
    if(i<txt.length-1){
        nameTypeId[0].innerText= txt.slice(0,i+1)+typingcur;
        nameTypeId[1].innerText= txt.slice(0,i+1)+typingcur;
        i++;
        setTimeout(typingEffect,50);
    }
    if(i==txt.length-1){
        nameTypeId[0].innerText= txt.slice(0,i+1);
        nameTypeId[1].innerText= txt.slice(0,i+1);
    }
}
typingEffect();