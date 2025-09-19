class NavComponent {
    constructor() {
        this.componentName = 'nav';
    }

    render() {
        return `
            <nav>
                <div class="nav-top">
                <div class="nav-top-container">
                                    <a href="index.html">
                        <img id="nav-logo" class="logo" src="https://drdcmsv2.taigalab.com/Files/img/ortak-alan/drdlogorenkli.svg" alt="drdlogo" />
                    </a>


                    <div class="nav-top-right">
                        <div class="nav-top-menu">
                            <!--nav menü-->
                            <ul class="nav-top-list">
                                <li id="nav-about-item" class="nav-item dropdown">
                                    <a id="nav-about-link" href="#" class="nav-link">Bizi Tanıyın<i class="fas fa-chevron-down"></i></a>
                                    <ul id="nav-about-dropdown" class="dropdown-menu">
                                        <li><a id="nav-about-profile" href="sirket-profili.html">Şirket Profili</a></li>
                                        <li><a id="nav-about-sustainability" href="surdurulebilirlik-politikamiz.html">Sürdürülebilirlik Politikamız</a></li>
                                        <li><a id="nav-about-social" href="#about3">Sosyal Sorumluluk</a></li>
                                        <li><a id="nav-about-news" href="bizden-haberler.html">Bizden Haberler</a></li>
                                        <li><a id="nav-about-services" target="_blank" href="https://e-sirket.mkk.com.tr/?page=company&company=11184#">Bilgi Toplumu Hizmetleri</a></li>
                                        <li><a id="nav-about-references" href="referanslarimiz.html">Referanslar</a></li>
                                    </ul>
                                </li>
                                <li id="nav-career-item" class="nav-item dropdown">
                                    <a id="nav-career-link" href="#career" class="nav-link">Kariyer<i class="fas fa-chevron-down"></i></a>
                                    <ul id="nav-career-dropdown" class="dropdown-menu">
                                        <li><a id="nav-career-being" href="#career1">DRD'li Olmak</a></li>
                                        <li><a id="nav-career-culture" href="#career2">Kültürümüz</a></li>
                                        <li><a id="nav-career-hiring" href="#career3">İşe Alım</a></li>
                                        <li><a id="nav-career-positions" href="#career4">Açık Pozisyonlar</a></li>
                                    </ul>
                                </li>
                                <li id="nav-blog-item" class="nav-item">
                                    <a id="nav-blog-link" href="#blog" class="nav-link">Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div class="nav-top-actions">
                            <!--nav action-->
                            <button id="nav-fleetino-login" class="btn btn-primary">
                                Fleetino | Giriş
                                <svg style="margin-left: 8px" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <path d="M1.08517 11.1477L11.1461 1.08671M11.1461 1.08671H1.08517M11.1461 1.08671V11.1477" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="square"></path>
                                </svg>
                            </button>
                            <button id="nav-search-btn" class="search-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </button>
                            <div id="nav-language-selector" class="language-selector">
                                <span id="nav-lang-tr" class="lang-active">TR</span>
                                <span id="nav-lang-divider" class="lang-divider">|</span>
                                <span id="nav-lang-en" class="lang-option">EN</span>
                            </div>
                        </div>
                </div>
                    </div>
                </div>
                <div class="nav-bottom">
                    <ul class="nav-bottom-list">
                        <li id="nav-bottom-why-item" class="nav-item">
                            <a id="nav-bottom-why-link" href="neden-drd.html" class="nav-link">Neden DRD</a>
                        </li>
                        <li id="nav-bottom-services-item" class="nav-item dropdown">
                            <a id="nav-bottom-services-link" href="#" class="nav-link">Servis Hizmetler <i class="fas fa-chevron-down"></i></a>
                            <ul id="nav-bottom-services-dropdown" class="dropdown-menu">
                                <li><a id="nav-bottom-services-rental" href="filo-kiralama.html">Filo Kiralama</a></li>
                                <li><a id="nav-bottom-services-management" href="filo-yonetimi.html">Filo Yönetimi</a></li>
                                <li><a id="nav-bottom-services-operational" href="operasyonel-hizmetler.html">Operasyonel Hizmetler</a></li>
                            </ul>
                        </li>
                        <li id="nav-bottom-solutions-item" class="nav-item dropdown">
                            <a id="nav-bottom-solutions-link" href="#" class="nav-link">DRD Çözümleri<i class="fas fa-chevron-down"></i></a>
                            <ul id="nav-bottom-solutions-dropdown" class="dropdown-menu">
                                <li><a id="nav-bottom-solutions-fleetino" href="fleetino.html">Fleetino</a></li>
                                <li><a id="nav-bottom-solutions-shared" href="paylasimli-filo.html">Paylaşımlı Filo</a></li>
                            </ul>
                        </li>
                        <li id="nav-bottom-vehicles-item" class="nav-item dropdown">
                            <a id="nav-bottom-vehicles-link" href="#" class="nav-link">Araçlar<i class="fas fa-chevron-down"></i></a>
                            <ul id="nav-bottom-vehicles-dropdown" class="dropdown-menu">
                                <li><a id="nav-bottom-vehicles-listing" href="araclar.html">Araç Listele</a></li>
                                <li><a id="nav-bottom-vehicles-brands" href="markalar.html">Markalar</a></li>
                                <li><a id="nav-bottom-vehicles-electric" href="araclar.html#electric">Elektrikli Araçlar</a></li>
                                <li><a id="nav-bottom-vehicles-campaigns" href="kampanyalar.html">Kampanyalar</a></li>
                            </ul>
                        </li>
                        <li id="nav-bottom-offer-item" class="nav-item">
                            <a id="nav-bottom-offer-link" href="teklif-al.html" class="nav-link">Teklif Al</a>
                        </li>
                        <li id="nav-bottom-support-item" class="nav-item dropdown">
                            <a id="nav-bottom-support-link" href="#" class="nav-link">Destek & İletişim<i class="fas fa-chevron-down"></i></a>
                            <ul id="nav-bottom-support-dropdown" class="dropdown-menu">
                                <li><a id="nav-bottom-support-faq" href="sikca-sorulan-sorular.html">Sıkça Sorulan Sorular</a></li>
                                <li><a id="nav-bottom-support-contact" href="iletisim.html">İletişim</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }

    mount(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            container.innerHTML = this.render();
            this.initDropdownHandlers();
        }
    }

    initDropdownHandlers() {
        // Dropdown menüler için event listener'ları ekle
        const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
        
        dropdownItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const dropdown = item.querySelector('.dropdown-menu');
            
            if (link && dropdown) {
                link.addEventListener('mouseenter', () => {
                    dropdown.style.display = 'block';
                });
                
                item.addEventListener('mouseleave', () => {
                    dropdown.style.display = 'none';
                });
            }
        });
    }
}

// Global olarak erişilebilir hale getir
window.NavComponent = NavComponent;






