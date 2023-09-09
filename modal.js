const modal = document.getElementById("user-details-modal");

const downloadButton = document.getElementById("download-ebook-btn");
const closeBtn = document.getElementById("modal-close-btn");

// open
downloadButton.onclick = function () {
  modal.style.display = "block";
};

// Close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
