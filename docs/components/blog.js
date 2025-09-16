class BlogComponent {
    constructor() {
        this.componentName = 'blog';
    }

    render() {
        return `
            <section class="blog">
                <div class="section-head">
                    <h2>Blog</h2>
                    <a href=".html">
                        Listele
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </a>
                </div>
                <div class="blog-main">
                    <a href="blog1.html" id="blog-card-1" class="fleet-card">
                        <img id="blog-image-1" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/Blog/plaka-kodlari/ulkelerin-plaka-kodlari-tum-ulkeler-icin-detayli-liste-1.jpg" />
                        <h2 id="blog-title-1">Ülkelerin Plaka Kodları | Tüm Ülkeler İçin Detaylı Liste</h2>
                        <p id="blog-description-1">Yurt dışına çıktığınızda veya trafikte yabancı bir araçla karşılaştığınızda, plakasındaki kısa harf kodları dikkatinizi çekmiş olabilir. Bu...</p>
                        <span class="detail">
                            Detaylı İncele
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </span>
                    </a>

                    <a href="blog2.html" id="blog-card-2" class="fleet-card">
                        <img id="blog-image-2" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/Blog/plaka-kodlari/ulkelerin-plaka-kodlari-tum-ulkeler-icin-detayli-liste-1.jpg" />
                        <h2 id="blog-title-2">Ülkelerin Plaka Kodları | Tüm Ülkeler İçin Detaylı Liste</h2>
                        <p id="blog-description-2">Yurt dışına çıktığınızda veya trafikte yabancı bir araçla karşılaştığınızda, plakasındaki kısa harf kodları dikkatinizi çekmiş olabilir. Bu...</p>
                        <span class="detail">
                            Detaylı İncele
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </span>
                    </a>

                    <a href="blog3.html" id="blog-card-3" class="fleet-card">
                        <img id="blog-image-3" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/Blog/plaka-kodlari/ulkelerin-plaka-kodlari-tum-ulkeler-icin-detayli-liste-1.jpg" />
                        <h2 id="blog-title-3">Ülkelerin Plaka Kodları | Tüm Ülkeler İçin Detaylı Liste</h2>
                        <p id="blog-description-3">Yurt dışına çıktığınızda veya trafikte yabancı bir araçla karşılaştığınızda, plakasındaki kısa harf kodları dikkatinizi çekmiş olabilir. Bu...</p>
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
window.BlogComponent = BlogComponent;
