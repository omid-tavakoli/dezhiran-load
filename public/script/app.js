const contact = document.querySelector('.contact')

function openContact(){
    contact.classList.add('flex')
    contact.classList.remove('hidden')
}
function closeContact(){
    contact.classList.add('hidden')
    contact.classList.remove('flex')
}