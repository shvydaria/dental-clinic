class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer_wraper">
    <nav class="navbar navbar-expand-lg">
        <div class="container justify-content-between">
          <a class="navbar-brand" href="/">
             <img src="img/logo/logo-white.png" alt="logo">
          </a>
    
          <!-- mobile btn -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- mobile btn -->
    
          <div class="collapse navbar-collapse justify-content-center" id="navbarScroll">
            <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html">Головна</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about.html">Про нас</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Послуги</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ціни</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Контакти</a>
              </li>
            </ul>
          </div>

          <i class="bi bi-facebook me-4"></i>
          <i class="bi bi-instagram"></i>
        </div>
      </nav>
   </div>
    `;
  }
}

customElements.define("footer-component", Footer);
