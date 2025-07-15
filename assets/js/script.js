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


// typewriter animation

 const textArray = [
      "Welcome to Apna College.",
      "We Build Apps, Websites & AI Tools.",
      "Let’s Create the Future Together!"
    ];

    const typingSpeed = 100;     
    const erasingSpeed = 50;     
    const delayBetween = 1500;

    let textIndex = 0;
    let charIndex = 0;
    const typewriter = document.getElementById("typewriter");

    function type() {
      if (charIndex < textArray[textIndex].length) {
        typewriter.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, delayBetween);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0;
        setTimeout(type, 500);
      }
    }

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(type, 500);
    });
 
