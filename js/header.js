class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="header_wraper">
      <nav class="navbar navbar-expand-sm">
        <div class="container justify-content-between">
          <a class="navbar-brand" href="/">
            <img src="img/logo/logo-gray.png" alt="logo">
          </a>
    
          <!-- mobile btn -->
          <button class="navbar-toggler d-xs-block d-sm-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <!-- mobile btn -->
    
          <div class="collapse navbar-collapse justify-content-center" id="navbarScroll">
            <ul id="nav" class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">Головна</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html">Про нас</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./services.html">Послуги</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./prices.html">Ціни</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contacts.html">Контакти</a>
              </li>
            </ul>
            <div class="header-social d-xs-block d-sm-block d-md-none">
              <a href="https://www.instagram.com/vdc_dentistry/">
                <img src="./img/icons/ing-black.png" alt="ico-footer" class="me-9">
              </a>
              <a href="https://www.facebook.com/profile.php?id=100054469299460">
                <img src="./img/icons/fb-black.png" alt="ico-footer" class="">
              </a>
            </div>
          </div>
    
          <button type="button" class="btn btn-outline-success d-none d-xs-none d-sm-none d-md-block"  data-bs-toggle="modal" data-bs-target="#formModal">Зв’язатися з нами</button>
        </div>
      </nav>
    </div>

    <div id="formModal" tabindex="-1" class="modal fade">
    <div class="modal-dialog modal-dialog-centered justify-content-center">
      <div class="modal-content doctor-modal__content">
        <button
          type="button"
          class="btn-close doctor-modal__close-btn"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>

        <div class="modal-body">
     
            <div class="modal-form">
              <h2 class="modal-form__title">
                Залиште Ваші контактні дані, і&nbsp;наш адміністратор зв'яжеться з&nbsp;вами
              </h2>
              <input name="name" type="text" class="modal-form__input" required autocomplete="name" placeholder="Ваше ім’я" />
              <input type="tel" name="phone" placeholder="Номер телефону" required autocomplete="tel" pattern="[\+]\d{3}\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" value="+380" minlength="13" maxlength="13" class="modal-form__input" />
              <button type="button" class="modal-form__submit">Зв’язатися з нами</button>
            </div>
        </div>
      </div>
    </div>
  </div>

  <button onclick="topFunction()" id="scrollButton" class="d-xs-block d-sm-block d-md-none">
    <img src="./img/icons/skroll.png" alt="scroll">
  </button>
    `;
  }
}

$(document).ready(function(){
	$('.navbar-toggler').click(function(){
		$(this).toggleClass('open');
	});
});

customElements.define("header-component", Header);
document.addEventListener('DOMContentLoaded', function() {
  (function() {
    let nav = document.getElementById('nav');
    let anchor = nav.getElementsByTagName('a');
    let current = window.location.pathname;
    // let current = window.location.pathname.split('/Users/dariashvydka/DashaShv/dental-clinic')[1];

    let correct = current.replace('/Users/dariashvydka/DashaShv/dental-clinic/', 'file:///Users/dariashvydka/DashaShv/dental-clinic/');

    for (var i = 0; i < anchor.length; i++) {
      if(anchor[i].href == correct) {
        anchor[i].className = "nav-link active";
      } else {
        console.log("FALSE");
      }
    }

  })();
}, false);

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}

var scrollButton = document.getElementById("scrollButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}