class specialcampaignComponent {
    constructor() {
        this.componentName = 'special-campaign';
    }

    render() {
        return `
            <section class="news">
                <div class="section-head">
                    <h2 id="special-campaign-title">Size Özel Fırsat ve Kampanyalar</h2>
                    <a id="special-campaign-link" href="Kampanyalar.html">
                        Listele
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </a>
                </div>
                <div class="blog-main">
                    <a href="news1.html" id="special-campaign-card-1" class="blog-card">
                        <img id="special-campaign-image-1" class="blog-img" src="https://drdcmsv2.taigalab.com/Files/img/list/1.png" />
                        <h2 id="special-campaign-title-1">Doğaya duyarlı yaklaşımlarımız</h2>
                        <p id="special-campaign-description-1">DRD filo müşterilerine daha da fazla avantaj sunuyor. Bugün bize ulaşın ve DRD'nin filonuzu nasıl destekleyebileceğini görün.</p>
                        <span class="detail">
                            Detaylı İncele
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </span>
                    </a>
                </div>
            </section>
        `;
    }

    mount(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            container.innerHTML = this.render();
        }
    }
}

// Global olarak erişilebilir hale getir
window.specialcampaignComponent = specialcampaignComponent;