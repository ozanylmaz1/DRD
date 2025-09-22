class CareerBannerComponent {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        const bannerHTML = `
            <section class="newsletter" style="background-image: url(https://drdcmsv2.taigalab.com/Files/img/ortak-alan/drdde-kariyerinize-yon-vermeye.jpg); padding: 57px; gap:1em;">
                <h2 class="offer">DRD’de kariyerinize yön vermeye hazır mısınız?</h2>
                <p class="newsletter-text">
                    Açık pozisyonlarımızı keşfedin, siz de DRD ekibinin bir parçası olun. Kariyerinizde fark yaratın.
                </p>
                <a href="acik-pozisyonlar.html" class="newsletter-btn" aria-label="Açık Pozisyonlar sayfasına git">Açık Pozisyonlar</a>
            </section>
        `;

        this.container.innerHTML = bannerHTML;
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const careerBannerContainers = document.querySelectorAll('#career-banner-container');
    careerBannerContainers.forEach(container => {
        new CareerBannerComponent(container);
    });
});