// Advantages Section Component
class AdvantagesSection {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        const advantagesHTML = `
            <section class="newsletter" style="background-image: url(https://drdcmsv2.taigalab.com/Files/img/simdi-teklif-alin.jpg?v=ua-AxXQ6CWKUwSzaPrl3XNxBeNk); padding: 57px; gap:1em;">
                <h2 class="offer">Avantajları Keşfedin</h2>
                <p class="newsletter-text">
                    Size özel tekliflerimizle iş süreçlerinizi kolaylaştırın, verimliliğinizi artırın. Şimdi teklif alın, ihtiyaçlarınıza en uygun çözümlerle işinize değer katın.
                </p>
                <a href="teklif-al.html" class="offer-btn" aria-label="">HEMEN TEKLİF ALIN</a>
            </section>
        `;

        this.container.innerHTML = advantagesHTML;
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const advantagesContainers = document.querySelectorAll('.advantages-section-container');
    advantagesContainers.forEach(container => {
        new AdvantagesSection(container);
    });
});
