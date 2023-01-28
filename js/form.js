"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById("form");
    form.addEventListener("submit", formSend);

    async function formSend(e){
        e.preventDefault();

        
        let error = formValidate(form);
        let formData = new FormData(form);

        if(error === 0){
            let response = await fetch("sendmail.php", {
                method: "POST",
                body: formData
            });
            if(response.ok){
                let res = await response.json();
                alert(res.message);
                formPreview.innerHTML = "";
                form.reset();
            }else{
                alert("ERROR")
            }

        }else{
            alert("Data error")
        }
    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll(".req");

        for(let i = 0; i < formReq.length; i++){
            const input = formReq[i];

            formRemoveError(input);

            if (input.classList.contains("email")){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            }else{
                if(input.value === ""){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input){
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }
    function formRemoveError(input){
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
    }

    function emailTest(input){
        return !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.value);
    }


    
})