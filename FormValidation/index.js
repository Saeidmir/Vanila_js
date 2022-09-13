const forms =document.querySelectorAll('[data-validation]')

const messages = {
    valueMissing: 'مقدار مورد نظر اجباری می‌باشد',
    patternMismatch:'فرمت وارد شده اشتباه است',
    tooShort: 'حداقل تعداد کاراکتر را رعایت نکرده اید.'
}

const validityKeys = Object.keys(messages)

forms.forEach(form =>{
    form.addEventListener('input',(e)=>{
        // console.log(e.target);
        // console.log(e.target.validity);
        const {target} = e;
        const errorsEl = target.parentElement.querySelectorAll('small');
        errorsEl.forEach(el => { el.remove()});

        validityKeys.forEach((key) =>{
            if (target.validity[key]){
                // console.log(messages[key]);
                const errorEl = document.createElement('small');
                errorEl.innerText = messages[key];
                target.parentElement.appendChild(errorEl);

            }
        })
    })
})