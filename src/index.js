document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('[open-modal]');
  const closeButtons = document.querySelectorAll('[close-modal]');
  const modal = document.querySelector('[products-modal]');
  console.log(modal);
  openModalButtons.onclick = function () {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  closeButtons.onclick = function () {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
