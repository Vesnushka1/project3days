inp=document.querySelector(".inp-tel-reg")

document.querySelector(".btn-form-regist").onclick = function()  {


    if (inp.value == "")  {  
        document.querySelector(".valid-tel-empty").style.display = "block";  
        return false;  
    }  
}
