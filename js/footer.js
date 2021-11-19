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
    
          <div class="navbar-collapse justify-content-center d-none d-xs-none d-sm-none d-md-none d-lg-none d-xl-block" id="navbarScroll">
            <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./index.html">Головна</a>
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
          </div>
          <div class="footer__social">
            <a href="https://www.facebook.com/profile.php?id=100054469299460">
              <img src="./img/icons/icons_contact/footer_fb.png" alt="ico-footer" class="footer__icon me-4">
            </a>
            <a href="https://www.instagram.com/vdc_dentistry/">
              <img src="./img/icons/icons_contact/footer_inst.png" alt="ico-footer" class="footer__icon">
            </a>
          </div>
        </div>
      </nav>
      <div class="container line">
        <div></div>
        <p class="mb-0 copy">© 2021 VDC Dental Clinic All rights reserved</p>
      </div>

   </div>
    `;
  }
}

customElements.define("footer-component", Footer);
