const modal =document.querySelector('.modal-container');
const openModal =document.getElementById('openBtn');
const closeModal =document.querySelector('.closeBtn');
openModal.addEventListener('click', ()=>{
    modal.style.display="block";
});
closeModal.addEventListener('click', ()=>{
    modal.style.display="none";
});
window.addEventListener('click', (event)=>{
    if (event.target==modal) {
        modal.style.display="none";
    }
});

