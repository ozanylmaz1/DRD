class WidgetComponent2 {
    constructor() {
        this.componentName = 'widget-2';
    }

    render() {
        return `
            <section id="widget-section" class="widget" >
                <article id="widget-card-3" class="widget-card" style="padding: 2em;">
                    <div id="widget-content-3" class="widget-content">
                        <h6>Bizden</h6>
                        <h2 id="widget-title-3">Haberler</h2>
                        <p id="widget-description-3" class="lead">Projelerimiz, etkinliklerimiz ve tüm gelişmelerden haberdar olun.</p>
                        <a id="widget-link-3" href="bizden-haberler.html" class="detail" style="margin-left: 0;">
                            Detaylı İncele
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </a>
                    </div>
                </article>

                <article id="widget-card-4" class="widget-card">
                    <div id="widget-content-4" class="widget-content">
                        <h6>Sosyal</h6>
                        <h2 id="widget-title-4">Sorumluluk</h2>
                        <p id="widget-description-4" class="lead">Daha aydınlık bir geleceği birlikte inşa etmek için sosyal sorumluluk bilinciyle çalışıyoruz.</p>
                        <a id="widget-link-4" href="sosyal-sorumluluk.html" class="detail" style="margin-left: 0;">
                            Detaylı İncele
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
window.WidgetComponent2 = WidgetComponent2;
