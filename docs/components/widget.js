class WidgetComponent {
    constructor() {
        this.componentName = 'widget';
    }

    render() {
        return `
            <section id="widget-section" class="widget">
                <article id="widget-card-1" class="widget-card">
                    <img id="widget-image-1" src="https://drdcmsv2.taigalab.com/Files/img/Two-column/drd_web_2.png" alt="Fleetino telefon illüstrasyonu" class="phones-img" width="250">

                    <div id="widget-content-1" class="widget-content">
                        <h2 id="widget-title-1">Fleetino ile tanışın</h2>
                        <p id="widget-description-1" class="lead">Tüm operasyonel süreçler tek bir platformda. Şimdi keşfedin.</p>
                        <a id="widget-link-1" href="fleetino.html" class="detail" style="margin-left: 0;">
                            Keşfet
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </a>
                    </div>
                </article>

                <article id="widget-card-2" class="widget-card" >
                    <img id="widget-image-2" src="https://drdcmsv2.taigalab.com/Files/img/Two-column/drd_web_1.png" alt="Yeni model araba" class="car-img" width="250">

                    <div id="widget-content-2" class="widget-content">
                        <h2 id="widget-title-2">En yeni modeller<br>DRD'de</h2>
                        <p id="widget-description-2" class="lead">En yeni model araçlarla filonuzu güçlendirin, işinizde fark yaratın.</p>
                        <a id="widget-link-2" href="araclar.html" class="detail" style="margin-left: 0;">
                            Keşfet
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </a>
                    </div>
                </article>
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
window.WidgetComponent = WidgetComponent;
