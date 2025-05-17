function showDetails(text) {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  modalText.innerText = text;
  modal.classList.add('active');
  modal.focus();
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});


const showContactBtn = document.getElementById('showContactBtn');
const contactInfo = document.getElementById('contact-info');
showContactBtn.addEventListener('click', () => {
  if (contactInfo.style.display === 'block') {
    contactInfo.style.display = 'none';
    showContactBtn.textContent = "Show Contact Info";
  } else {
    contactInfo.style.display = 'block';
    showContactBtn.textContent = "Hide Contact Info";
  }
});

