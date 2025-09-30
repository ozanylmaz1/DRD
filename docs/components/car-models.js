class CarModelsComponent {
    constructor() {
        this.componentName = 'car-models';
    }

    render() {
        return `
            <section id="car-models-section" class="car-models">
                <div id="car-models-head" class="section-head">
                    <h2 id="car-models-title">Aklınızdaki Tüm Modeller</h2>
                    <a id="car-models-listing-link" href="araclar.html">
                        Listele
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </a>
                </div>
                <div id="car-models-main" class="car-models-main">
                    <a id="car-card-1" href="sedan-35-tfsi-150-advanced-s-tronic.html">
                        <img id="car-image-1" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg"
                             alt="Alfa-Romeo-Tonale-Veloce-Hybrid-eAWD" />
                        <h6 id="car-name-1" class="car-name">
                            Alfa Romeo Tonale Veloce 1.3 280 Plug-ın Hybrid eAWD
                        </h6>
                        <p id="car-specifications-1" class="car-specifications">
                            <span class="spec-item">Hibrit</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">SUV</span>
                        </p>
                    </a>
                    <a id="car-card-2" href="car2">
                        <img id="car-image-2" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-a6-40-20-tdi-quattro-204-design-s-tronic/audi-a6-40-20-tdi-quattro-204-design-s-tronic-1.jpg"
                             alt="Audi-A6-40-TDI-Quattro" />
                        <h6 id="car-name-2" class="car-name">
                            Audi A6 40 2.0 TDI Quattro 204 Design S Tronic
                        </h6>
                        <p id="car-specifications-2" class="car-specifications">
                            <span class="spec-item">Dizel</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">Sedan</span>
                        </p>
                    </a>
                    <a id="car-card-3" href="car3">
                        <img id="car-image-3" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-520d-xdrive-sedan-20-190-m-sport/bmw-520d-xdrive-sedan-20-190-m-sport-1.jpg"
                             alt="BMW-520d-xDrive-Sedan" />
                        <h6 id="car-name-3" class="car-name">
                            BMW 520d xDrive Sedan 2.0 190 M Sport
                        </h6>
                        <p id="car-specifications-3" class="car-specifications">
                            <span class="spec-item">Dizel</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">Sedan</span>
                        </p>
                    </a>
                    <a id="car-card-4" href="car4">
                        <img id="car-image-4" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/dacia-lodgy-stepway-15-bluedci-115-7k-e6d-full/dacia-lodgy-stepway-15-bluedci-115-7k-e6d-full-1.jpg"
                             alt="dacia-lodgy-stepway-15-bluedcl-115-7k-e6d-full" />
                        <h6 id="car-name-4" class="car-name">
                            Dacia Lodgy Stepway 1.5 BlueDCl 115 7K E6D Full
                        </h6>
                        <p id="car-specifications-4" class="car-specifications">
                            <span class="spec-item">Dizel</span> / 
                            <span class="spec-item">Manuel</span> / 
                            <span class="spec-item">MPV</span>
                        </p>
                    </a>
                    <a id="car-card-5" href="car5">
                        <img id="car-image-5" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/peugeot-3008-allure-15-bluehdi-130-eat8/peugeot-3008-allure-15-bluehdi-130-eat8-1.jpg"
                             alt="peugeot-3008-allure-15-bluehdi-130-eat8" />
                        <h6 id="car-name-5" class="car-name">
                             Peugeot 3008 Allure 1.5 BlueHDi 130 EAT8
                        </h6>
                        <p id="car-specifications-5" class="car-specifications">
                            <span class="spec-item">Dizel</span> / 
                            <span class="spec-item">Otomatik</span> / 
                            <span class="spec-item">SUV</span>
                        </p>
                    </a>
                    <a id="car-card-6" href="car6">
                        <img id="car-image-6" src="https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/volkswagen-polo10-tsi-95-dsg-life/volkswagen-polo10-tsi-95-dsg-life-1.jpg"
                             alt="volkswagen-polo-10-tsi-95-dsg-style" />
                        <h6 id="car-name-6" class="car-name">
                            Volkswagen Polo 1.0 TSI 95 DSG Style
                        </h6>
                        <p id="car-specifications-6" class="car-specifications">
                            <span class="spec-item">Benzin</span> / 
                            <span class="spec-item">Yarı Otomatik</span> / 
                            <span class="spec-item">Hatchback</span>
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
        const carModelsMain = document.getElementById("car-models-main");
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
window.CarModelsComponent = CarModelsComponent;
