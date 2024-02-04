const contact = document.querySelector('.contact')
const backDrop = document.querySelector('.back-drop')
function openContact(){
    contact.classList.add('flex')
    contact.classList.remove('hidden')
    backDrop.classList.remove('hidden')
}
function closeContact(){
    contact.classList.add('hidden')
    contact.classList.remove('flex')
    backDrop.classList.add('hidden')
}