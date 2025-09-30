class CarModelsElectricComponent {
    constructor() {
        this.componentName = 'car-models-electric';
    }

    render() {
        return `
            <section id="car-models-electric-section" class="car-models">
                <div id="car-models-electric-head" class="section-head">
                    <h2 id="car-models-electric-title">Elektrikli Araç Modelleri</h2>
                    <a id="car-models-electric-listing-link" href=".html">
                        Listele
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </a>
                </div>
                <div id="car-models-electric-main" class="car-models-main">
                    <a id="electric-car-card-1" href="electric-car1">
                        <img id="electric-car-image-1" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg"
                             alt="Tesla Model 3 Long Range" />
                        <h6 id="electric-car-name-1" class="car-name">
                            Tesla Model 3 Long Range
                        </h6>
                        <p id="electric-car-specifications-1" class="car-specifications">
                            <span class="spec-item">Elektrikli</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">Sedan</span>
                        </p>
                    </a>
                    <a id="electric-car-card-2" href="electric-car2">
                        <img id="electric-car-image-2" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg"
                             alt="Tesla Model Y Long Range" />
                        <h6 id="electric-car-name-2" class="car-name">
                            Tesla Model Y Long Range
                        </h6>
                        <p id="electric-car-specifications-2" class="car-specifications">
                            <span class="spec-item">Elektrikli</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">SUV</span>
                        </p>
                    </a>
                    <a id="electric-car-card-3" href="electric-car3">
                        <img id="electric-car-image-3" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg"
                             alt="BMW i4 eDrive40" />
                        <h6 id="electric-car-name-3" class="car-name">
                            BMW i4 eDrive40
                        </h6>
                        <p id="electric-car-specifications-3" class="car-specifications">
                            <span class="spec-item">Elektrikli</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">Sedan</span>
                        </p>
                    </a>
                    <a id="electric-car-card-4" href="electric-car4">
                        <img id="electric-car-image-4" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg"
                             alt="Audi e-tron GT" />
                        <h6 id="electric-car-name-4" class="car-name">
                            Audi e-tron GT
                        </h6>
                        <p id="electric-car-specifications-4" class="car-specifications">
                            <span class="spec-item">Elektrikli</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">Sedan</span>
                        </p>
                    </a>
                    <a id="electric-car-card-5" href="electric-car5">
                        <img id="electric-car-image-5" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg"
                             alt="Mercedes EQS 450" />
                        <h6 id="electric-car-name-5" class="car-name">
                            Mercedes EQS 450
                        </h6>
                        <p id="electric-car-specifications-5" class="car-specifications">
                            <span class="spec-item">Elektrikli</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">Sedan</span>
                        </p>
                    </a>
                    <a id="electric-car-card-6" href="electric-car6">
                        <img id="electric-car-image-6" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg"
                             alt="Volkswagen ID.4" />
                        <h6 id="electric-car-name-6" class="car-name">
                            Volkswagen ID.4
                        </h6>
                        <p id="electric-car-specifications-6" class="car-specifications">
                            <span class="spec-item">Elektrikli</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">SUV</span>
                        </p>
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
            this.initMouseDrag();
        }
    }

    initMouseDrag() {
        const carModelsMain = document.getElementById("car-models-electric-main");
        if (!carModelsMain) return;

        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        let dragThreshold = 10; // Minimum drag distance
        let hasDragged = false;

        // Get card width function
        function getCardWidth() {
            const card = carModelsMain.querySelector(".car-models-main > a");
            const style = getComputedStyle(card);
            const gap = parseFloat(getComputedStyle(carModelsMain).gap) || 0;
            return card.offsetWidth + gap;
        }

        // Snap to nearest card
        function snapToNearestCard() {
            const cardWidth = getCardWidth();
            const currentScroll = carModelsMain.scrollLeft;
            const nearestIndex = Math.round(currentScroll / cardWidth);
            const targetScroll = nearestIndex * cardWidth;
            
            carModelsMain.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }

        // Mouse events
        carModelsMain.addEventListener('mousedown', (e) => {
            isDragging = true;
            hasDragged = false;
            carModelsMain.style.cursor = 'grabbing';
            startX = e.pageX - carModelsMain.offsetLeft;
            scrollLeft = carModelsMain.scrollLeft;
            e.preventDefault();
        });

        carModelsMain.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                carModelsMain.style.cursor = 'grab';
                snapToNearestCard();
            }
        });

        carModelsMain.addEventListener('mouseup', (e) => {
            if (isDragging) {
                isDragging = false;
                carModelsMain.style.cursor = 'grab';
                
                // Only snap if user actually dragged
                if (hasDragged) {
                    snapToNearestCard();
                }
            }
        });

        carModelsMain.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carModelsMain.offsetLeft;
            const walk = (x - startX) * 1.2; // Scroll speed multiplier
            
            // Check if mouse moved enough to consider it dragging
            if (Math.abs(x - startX) > dragThreshold) {
                hasDragged = true;
            }
            
            carModelsMain.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        carModelsMain.addEventListener('touchstart', (e) => {
            isDragging = true;
            hasDragged = false;
            startX = e.touches[0].pageX - carModelsMain.offsetLeft;
            scrollLeft = carModelsMain.scrollLeft;
        });

        carModelsMain.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - carModelsMain.offsetLeft;
            const walk = (x - startX) * 1.2;
            
            // Check if touch moved enough to consider it dragging
            if (Math.abs(x - startX) > dragThreshold) {
                hasDragged = true;
            }
            
            carModelsMain.scrollLeft = scrollLeft - walk;
        });

        carModelsMain.addEventListener('touchend', (e) => {
            if (isDragging) {
                isDragging = false;
                
                // Only snap if user actually dragged
                if (hasDragged) {
                    snapToNearestCard();
                }
            }
        });

        // Prevent link clicks during drag
        carModelsMain.addEventListener('click', (e) => {
            if (hasDragged) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        // Set initial cursor style
        carModelsMain.style.cursor = 'grab';
    }
}

// Global olarak erişilebilir hale getir
window.CarModelsElectricComponent = CarModelsElectricComponent;
