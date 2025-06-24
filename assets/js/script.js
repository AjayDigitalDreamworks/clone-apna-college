const hamburger = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');


hamburger.addEventListener('click', () => {
  navItems.classList.toggle('active');
  
  if (hamburger.classList.contains('fa-bars')) {
    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-times');
  } else {
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
  }
});
