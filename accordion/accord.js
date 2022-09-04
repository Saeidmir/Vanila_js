/* const items = document.querySelectorAll('.collapse');
let opened  
for (let i = 0; i < items.length; i++) {
    // items[i].classList.add('open');
    
    items[i].addEventListener('click', (event)=>{
        currentSelect = event.currentTarget;
        if (opened) {
            opened.classList.remove('open')
        }
        opened = currentSelect
        event.currentTarget.classList.add('open');
    })
    // console.dir(items[i]);
    } */


    // In the second method we add to father of elemes

/*     const accordian = document.querySelector('.collapse-content');
    let opended
    accordian.addEventListener('click', (event) => {
        // console.log(event.target.parentNode);
         currentSelect=event.target.closest('div');
        if (opended) {
            opended.classList.remove('open');
        }

        if (currentSelect) {
            opended = currentSelect;
            currentSelect.classList.add('open');
        }
    }) */

    // the third mehtod withoud changing style 
    // and for many accordian in page

    const accordian = document.querySelectorAll('[data-accordian]')
    console.log(accordian)
    for (let index = 0; index < accordian.length; index++) {
            let opened ;
            console.log(accordian[index]);
            accordian[index].addEventListener('click', (event)=>{
                currentSelect = event.target.closest('[data-content]');
                console.log(currentSelect);
                if(opened) {
                    opened.classList.remove('open')
                }
                if(currentSelect){
                    opened = currentSelect;
                    currentSelect.classList.add('open')
                }
            })
        }
