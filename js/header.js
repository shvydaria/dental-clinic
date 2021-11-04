class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="header_wraper">
      <nav class="navbar navbar-expand-lg">
        <div class="container justify-content-between">
          <a class="navbar-brand" href="/">
            <img src="img/logo/logo-gray.png" alt="logo">
          </a>
    
          <!-- mobile btn -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
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
                <a class="nav-link" href="#">Контакти</a>
              </li>
            </ul>
          </div>
    
          <button type="button" class="btn btn-outline-success">Зв’язатися з нами</button>
        </div>
      </nav>
    </div>
    `;
  }
}

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
        console.log("FALSE")
      }
    }

  })();
}, false);