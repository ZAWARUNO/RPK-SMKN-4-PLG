
window.addEventListener("scroll", muncul);


function muncul() {
  
  let elements = document.querySelectorAll(".elemen");
  
  for (let i = 0; i < elements.length; i++) {
    
    let tinggiLayar = window.innerHeight;
    
    let jarakAtasElemen = elements[i].getBoundingClientRect().top;
    
    let ukuranScroll = 150;
    
    if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
      elements[i].classList.add("tampil");
    }
    
    else {
      elements[i].classList.remove("tampil");
    }
  }
}


window.addEventListener('scroll', toggleScrollTopButton);
window.addEventListener('scroll', handleScroll);

var isScrolling = false; 
var isAutoScrolling = false; 

function toggleScrollTopButton() {
  var scrollTopButton = document.querySelector('.scrollTop');

  
  if (isScrolling || isAutoScrolling) {
    return;
  }

  
  if (window.scrollY >= 200) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
}

function scrollToTop() {
  
  var scrollTopButton = document.querySelector('.scrollTop');

  
  isAutoScrolling = true;

  
  scrollTopButton.style.animation = 'scrollDown 0.5s ease';

  
  setTimeout(function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    
    scrollTopButton.style.animation = '';

    
    isAutoScrolling = false;
    toggleScrollTopButton();
  }, 300); 
}

function handleScroll() {
  var scrollTopButton = document.querySelector('.scrollTop');

  
  if (window.scrollY < 200 && !isAutoScrolling) {
    isScrolling = true;
    scrollTopButton.style.animation = 'scrollDown 0.5s ease';

    
    setTimeout(function () {
      isScrolling = false;
      scrollTopButton.style.animation = '';
      toggleScrollTopButton();
    }, 300); 
  }
}


toggleScrollTopButton();



const popup = document.getElementById('popup');

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}


window.onload = openPopup;

window.addEventListener('scroll', function() {
  let navbar = document.querySelector('.navbar-collapse.show');
  if (navbar) {
      new bootstrap.Collapse(navbar);
  }
});
