class FleetLeasingComponent {
    constructor() {
        this.componentName = 'fleet-leasing';
    }

    render() {
        return `
            <section class="fleet-leasing">
                <div class="section-head">
                    <h2>Filo Kiralamanın Avantajları</h2>
                    <div style="display:flex; gap: 5px;">
                        <button  aria-label="Sağ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </button>
                        <button aria-label="Sol">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="fleet-main" class="fleet-main">
                    <div id="fleet-card-1" class="fleet-card">
                        <img id="fleet-image-1" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/servis-hizmetleri/filo-kiralama/maliyetleri-kontrol-altina-alin.jpg" alt="Maliyetleri yönetin"/>
                        <h2 id="fleet-title-1">Maliyetleri yönetin</h2>
                        <p id="fleet-description-1">Filo kiralama, araç satın almanın getirdiği yüksek maliyetlerden kurtulmanızı sağlar. Sermayenizi araç alımına bağlamak yerine, aylık sabit ödemelerle bütçenizi daha verimli yöneterek finansal özgürlüğünüzü artırabilirsiniz.</p>
                    </div>
                    <div id="fleet-card-2" class="fleet-card">
                        <img id="fleet-image-2" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/servis-hizmetleri/filo-kiralama/operasyonel-sureclerinizi-kolaylastirin.jpg" alt="Operasyonu kolaylaştırın"/>
                        <h2 id="fleet-title-2">Operasyonu kolaylaştırın</h2>
                        <p id="fleet-description-2">Bakım, onarım ve hasar yönetimi gibi filo yönetimiyle ilgili tüm süreçleri uzman ekibimize devredin. Böylece zamanınızı ve iş gücünüzü daha verimli kullanarak işinize odaklanmanın keyfini çıkarın.</p>
                    </div>
                    <div id="fleet-card-3" class="fleet-card">
                        <img id="fleet-image-3" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/servis-hizmetleri/filo-kiralama/her-zaman-guncel-araclara-sahip-olun.jpg" alt="Güncel araçlara sahip olun" />
                        <h2 id="fleet-title-3">Güncel araçlara sahip olun</h2>
                        <p id="fleet-description-3">Her dönem yeni ve modern araçlarla filonuzu yenileyerek teknolojinin sunduğu en son avantajlardan faydalanın. Hem iş akışınızı daha verimli hale getirin hem de çalışanlarınıza konfor sağlayın.</p>
                    </div>
                    <div id="fleet-card-4" class="fleet-card">
                        <img id="fleet-image-4" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/servis-hizmetleri/filo-kiralama/maliyetleri-kontrol-altina-alin.jpg" alt="Maliyetleri yönetin" />
                        <h2 id="fleet-title-4">Maliyetleri yönetin</h2>
                        <p id="fleet-description-4">Filo kiralama, araç satın almanın getirdiği yüksek maliyetlerden kurtulmanızı sağlar. Sermayenizi araç alımına bağlamak yerine, aylık sabit ödemelerle bütçenizi daha verimli yöneterek finansal özgürlüğünüzü artırabilirsiniz.</p>
                    </div>
                    <div id="fleet-card-5" class="fleet-card">
                        <img id="fleet-image-5" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/servis-hizmetleri/filo-kiralama/operasyonel-sureclerinizi-kolaylastirin.jpg" alt="Operasyonu kolaylaştırın" />
                        <h2 id="fleet-title-5">Operasyonu kolaylaştırın</h2>
                        <p id="fleet-description-5">Bakım, onarım ve hasar yönetimi gibi filo yönetimiyle ilgili tüm süreçleri uzman ekibimize devredin. Böylece zamanınızı ve iş gücünüzü daha verimli kullanarak işinize odaklanmanın keyfini çıkarın.</p>
                    </div>
                    <div id="fleet-card-6" class="fleet-card">
                        <img id="fleet-image-6" class="fleet-img" src="https://drdcmsv2.taigalab.com/Files/img/servis-hizmetleri/filo-kiralama/her-zaman-guncel-araclara-sahip-olun.jpg" alt="Güncel araçlara sahip olun" />
                        <h2 id="fleet-title-6">Güncel araçlara sahip olun</h2>
                        <p id="fleet-description-6">Her dönem yeni ve modern araçlarla filonuzu yenileyerek teknolojinin sunduğu en son avantajlardan faydalanın. Hem iş akışınızı daha verimli hale getirin hem de çalışanlarınıza konfor sağlayın.</p>
                    </div>
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
            this.initScrollHandlers();
            this.initMouseDrag();
        }
    }

    initScrollHandlers() {
        const fleetMain = document.getElementById("fleet-main");
        const prevBtn = document.querySelector(".section-head button:first-child");
        const nextBtn = document.querySelector(".section-head button:last-child");

        if (!fleetMain || !prevBtn || !nextBtn) return;

        function getCardWidth() {
            const card = fleetMain.querySelector(".fleet-card");
            const style = getComputedStyle(card);
            const gap = parseFloat(getComputedStyle(fleetMain).gap) || 0;
            return card.offsetWidth + gap;
        }

        nextBtn.addEventListener("click", () => {
            fleetMain.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
        });

        prevBtn.addEventListener("click", () => {
            fleetMain.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
        });
    }

    initMouseDrag() {
        const fleetMain = document.getElementById("fleet-main");
        if (!fleetMain) return;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        // Get card width function (same as button handlers)
        function getCardWidth() {
            const card = fleetMain.querySelector(".fleet-card");
            const style = getComputedStyle(card);
            const gap = parseFloat(getComputedStyle(fleetMain).gap) || 0;
            return card.offsetWidth + gap;
        }

        // Snap to nearest card
        function snapToNearestCard() {
            const cardWidth = getCardWidth();
            const currentScroll = fleetMain.scrollLeft;
            const nearestIndex = Math.round(currentScroll / cardWidth);
            const targetScroll = nearestIndex * cardWidth;
            
            fleetMain.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }

        // Mouse events
        fleetMain.addEventListener('mousedown', (e) => {
            isDragging = true;
            fleetMain.style.cursor = 'grabbing';
            startX = e.pageX - fleetMain.offsetLeft;
            scrollLeft = fleetMain.scrollLeft;
            e.preventDefault();
        });

        fleetMain.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                fleetMain.style.cursor = 'grab';
                snapToNearestCard();
            }
        });

        fleetMain.addEventListener('mouseup', (e) => {
            if (isDragging) {
                isDragging = false;
                fleetMain.style.cursor = 'grab';
                snapToNearestCard();
            }
        });

        fleetMain.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - fleetMain.offsetLeft;
            const walk = (x - startX) * 0.8; // Scroll speed multiplier
            fleetMain.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        fleetMain.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - fleetMain.offsetLeft;
            scrollLeft = fleetMain.scrollLeft;
        });

        fleetMain.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - fleetMain.offsetLeft;
            const walk = (x - startX) * 2;
            fleetMain.scrollLeft = scrollLeft - walk;
        });

        fleetMain.addEventListener('touchend', (e) => {
            if (isDragging) {
                isDragging = false;
                snapToNearestCard();
            }
        });

        // Set initial cursor style
        fleetMain.style.cursor = 'grab';
    }
}

// Global olarak erişilebilir hale getir
window.FleetLeasingComponent = FleetLeasingComponent;
