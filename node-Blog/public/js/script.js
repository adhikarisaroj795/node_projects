document.addEventListener('DOMContentLoaded', function () {
  const allButton = document.querySelectorAll('.searchBtn');
  const searchBar = document.querySelector('.searchBar');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  console.log('hello');

  for (var i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener('click', () => {
      searchBar.style.visibility = 'visible';
      searchBar.classList.add('open');
      this.setAttribute('aria-expanded', 'true');
      searchInput.focus();
      console.log('done');
    });
  }

  searchClose.addEventListener('click', () => {
    searchBar.style.visibility = 'hidden';
    searchBar.classList.remove('open');
    this.setAttribute('aria-expanded', 'false');
  });
});
