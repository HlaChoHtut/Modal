const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    overlay.style.display = "block";
})

closeModal.addEventListener('click', () => {
    overlay.style.display = "none";
})

