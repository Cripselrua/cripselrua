"use strict"
                                            
    document.addEventListener('DOMContentLoaded', function () { 
        const form = document.getElementById('form');
        form.addEventListener('submit', formSend);

        async function formSend(e) {
            e.preventDefault();

            let error = formValidate(form);

            // let formData = new FormData(Form);
            // formData.append('image', formImage.files[0]);

            if (error === 0) {
                form.classList.add('_sending');
                let response = await fetch('sendmail.php', {   /* - */
                    method: 'POST',
                    body: formData                               /*форма отправки*/
                });
                if (response.ok){                               
                 let result = await response.json();
                 alert(result.messega);                         /* проверка отправки формы */                        
                 formPreview .innerHTML = '';
                 form.reset();  
                 form.classList.remove('_sending');                           
                }  else {
                    alert('Ошибка отправки');
                    form.classList.remove('_sending');
                }   
            } else {
                alert('Заполните обязательные поля');
            }
    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
                
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input){
        return !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value);
        }
        function phonenumber(input){
            return !/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(input.value);
            }
            
    });
    

    