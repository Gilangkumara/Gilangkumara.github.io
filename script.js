const scriptURL = "https://script.google.com/macros/s/AKfycbxxHsS7TS03gGun5AHLCmTWetciudEKqHs2-x1eSjStOm8tizZjawLBu8TUewKHc-0qKQ/exec";
const form = document.forms["Form_Contact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit di klik
  //tampilkan tombol loading-hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");

      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
