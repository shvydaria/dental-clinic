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
             <img src="img/logo/logo.png" alt="logo">
          </a>
    
          <!-- mobile btn -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- mobile btn -->
    
          <div class="collapse navbar-collapse justify-content-center" id="navbarScroll">
            <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Головна</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Про нас</a>
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
    
          <button type="button" class="btn btn-outline-success">Зв’язатися з нами</button>
        </div>
      </nav>
    </div>
    `;
  }
}

customElements.define('header-component', Header);
