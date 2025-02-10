

const elDarkModeButton = document.querySelector('.dark-button');
const elBackButton = document.querySelector(".back-button");

elDarkModeButton.addEventListener('click', function () {

  document.body.classList.toggle('dark-mode')
});

elBackButton.addEventListener('click', function () {
  window.location.href = "index.html";
});

/* darkModeButton.addEventListener('click', function () {
  document.body.classList.remove('dark-mode')
})
 */
