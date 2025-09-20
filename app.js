let btn=document.querySelectorAll('.btn');
let text=document.querySelector('#result');
let number=document.querySelectorAll(".number")
let operators=document.querySelectorAll(".operator")
btn.forEach((ele) => {
    ele.addEventListener("click",()=>{
        if(ele.innerText!="=" & ele.innerText!="<<" & ele.innerText!="AC"){
        text.innerText+=ele.innerText
        }else if(ele.innerText=="="){
            text.innerText=eval(text.innerText)
        }
        else if(ele.innerText=="<<"){
            text.innerText=text.innerText.slice(0,-1)
        }
        else if(ele.innerText=="AC"){
            text.innerText=""
        }
    })  
}); 
