let b=document.querySelector('button#calc');
b.addEventListener('click',keisan);
function keisan(){
    let inputleft=document.querySelector('input#left');
    let nleft=parseInt(inputleft.value,10);
    let inputright=document.querySelector('input#right');
    let nright=parseInt(inputright.value,10);
    let sum=nleft+nright;
    let spanAnswer=document.querySelector('span#answer');
    spanAnswer.textContent=sum;
}