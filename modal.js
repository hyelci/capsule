const modal = document.getElementById("user-details-modal");
const userForm = document.getElementById("user-details-form");
const successText = document.getElementById("success-text");
const submitBtn = document.getElementById("form-submit-btn");

const downloadButton = document.getElementById("download-ebook-btn");
const closeBtn = document.getElementById("modal-close-btn");

// open
downloadButton.onclick = function () {
  modal.style.display = "block";
};

function handleModalClose() {
  modal.style.display = "none";
  successText.style.display = "none";
  submitBtn.textContent = "Submit";
  submitBtn.style.background = "#444bf7";
}

// Close modal
closeBtn.onclick = function () {
  handleModalClose();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    handleModalClose();
  }
};

// when user submits the form
userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submitted the form");

  successText.style.display = "block";
  submitBtn.textContent = "Sent";
  submitBtn.style.background = "#38c983";
});
