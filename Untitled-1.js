const modal = document.querySelector('.modal')
const loginbtn = document.querySelector('.login-btn')
const closebtn = document.querySelector('.close')

loginbtn.addEventListener('click', openmodal)
closebtn.addEventListener('click', closemodal)
window.addEventListener('click', outsideclick)

function openmodal() {
    modal.style.display = 'block'
}
function closemodal() {
    modal.style.display ='none'
}
function outsideclick(e) {
    if (e.target == modal) {
        closemodal()
    }
}
