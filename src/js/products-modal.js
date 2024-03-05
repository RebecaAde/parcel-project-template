// document.addEventListener('DOMContentLoaded', () => {
// //   const openModalButtons = document.querySelectorAll('[open-modal]');
// const closeButtons = document.querySelectorAll('[close-modal]');
//   const modals = document.querySelectorAll('[products-modal]');

//   openModalButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const modalId = this.getAttribute('open-modal');
//       const modal = document.querySelector(`[products-modal="${modalId}"]`);
//       if (modal) {
//         modal.style.display = 'block';
//         document.body.style.overflow = 'hidden'; // Disable scrolling on the body
//         console.log('button clicked');
//       }
//     });
//   });

// closeButtons.forEach(button => {
//   button.addEventListener('click', function () {
//     const modalId = this.getAttribute('close-modal');
//     const modal = document.querySelector(`[products-modal="${modalId}"]`);
//     if (modal) {
//       modal.style.display = 'none';
//       document.body.style.overflow = ''; // Enable scrolling on the body
//     }
//   });
// });

//   window.addEventListener('click', function (event) {
//     modals.forEach(modal => {
//       if (event.target == modal) {
//         modal.style.display = 'none';
//         document.body.style.overflow = ''; // Enable scrolling on the body
//       }
//     });
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  // Function to toggle modal display and body overflow
  function toggleModal(modal, action) {
    if (modal) {
      modal.style.display = action === 'open' ? 'block' : 'none';
      document.body.style.overflow = action === 'open' ? 'hidden' : '';
    }
  }

  // Function to handle opening of modals
  function handleOpenModalClick(event) {
    const modalId = event.currentTarget.getAttribute('open-modal');
    const modal = document.querySelector(`[products-modal="${modalId}"]`);
    toggleModal(modal, 'open');
  }

  // Function to handle closing of modals
  function handleCloseModalClick(event) {
    const modalId = event.currentTarget.getAttribute('close-modal');
    const modal = document.querySelector(`[products-modal="${modalId}"]`);
    console.log('Close button clicked'); // Add this line to test
    toggleModal(modal, 'close');
  }

  // Attaching event listeners to open modal buttons
  const openModalButtons = document.querySelectorAll('[open-modal]');
  openModalButtons.forEach(button => {
    button.addEventListener('click', handleOpenModalClick);
  });

  // Attaching event listeners to close buttons
  const closeButtons = document.querySelectorAll('[close-modal]');
  closeButtons.forEach(button => {
    button.addEventListener('click', handleCloseModalClick);
  });

  // Close modal if the user clicks outside of it
  window.addEventListener('click', event => {
    if (event.target.hasAttribute('products-modal')) {
      toggleModal(event.target, 'close');
    }
  });
});
