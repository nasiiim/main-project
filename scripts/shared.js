let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlnBtn = document.querySelectorAll('.plan button');
let modalClosBtn = document.querySelector('.modal__action-negativ')

for (let i=0; i<selectPlnBtn.length; i++) {
    selectPlnBtn[i].addEventListener('click', () => {
        // modal.style.display = 'block'
        // backdrop.style.display = 'block' 
        modal.classList.add('open')
        backdrop.classList.add('add')
    })
}

modalClosBtn.addEventListener('click',closeModal)
backdrop.addEventListener('click',closeModal)
 

function closeModal () {
    // modal.style.display = 'none'
    // backdrop.style.display = 'none'
    modal.classList.remove('open')
    backdrop.classList.remove('open')
}
// ModalClosBtn.addEventListener('click', () => {
    // modal.style.display = 'none'
    // backdrop.style.display = 'none'
// } )

// console.log(selectPlnBtn);
// console.log(backdrop)

// backdrop.style.display = 'block';