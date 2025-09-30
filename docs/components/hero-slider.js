class HeroSliderComponent {
    constructor() {
        this.componentName = 'hero-slider';
        this.currentSlide = 0;
        this.slides = [];
        this.autoSlideInterval = null;
        this.autoSlideDelay = 5000; // 5 saniye
        this.isTransitioning = false;
    }

    render() {
        return `
            <div class="hero-slider" aria-label="Hero Slider">
                <div class="slides-wrap">
                    <ul class="slides" role="list" id="hero-slides">
                        <a href="/tr/arac-kiralama" class="slide" id="slide-link-1" data-src="https://drdcmsv2.taigalab.com/Files/img/home-page/slider/drd-filo-kiralama-banner-talebi-2-1920x1080-72dpi-1-1.jpg" aria-hidden="false" id="slide-1">
                            <div class="bg" style="background-image:url('https://drdcmsv2.taigalab.com/Files/img/home-page/slider/drd-filo-kiralama-banner-talebi-2-1920x1080-72dpi-1-1.jpg')"></div>
                        </a>

                        <a  href="/tr/arac-kiralama" class="slide" id="slide-link-2" data-src="https://drdcmsv2.taigalab.com/Files/img/home-page/slider/drd-filo-kiralama-banner-talebi-2-1920x1080-72dpi-3.jpg" aria-hidden="true" id="slide-2">
                            <div class="bg" style="background-image:url('https://drdcmsv2.taigalab.com/Files/img/home-page/slider/drd-filo-kiralama-banner-talebi-2-1920x1080-72dpi-3.jpg')"></div>

                        </a>
                    </ul>
                </div>

                <!-- Navigation controls bottom-right -->
                <div class="nav-controls" aria-hidden="false" id="nav-controls">
                    <button class="nav-btn prev" aria-label="Previous slide" id="prev-btn">
                        <svg width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M11 1 4 8l7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button class="nav-btn next" aria-label="Next slide" id="next-btn">
                        <svg width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M5 1 12 8 5 15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }

    mount(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }

        if (container) {
            container.innerHTML = this.render();
            this.initializeSlider();
        }
    }

    initializeSlider() {
        this.slides = document.querySelectorAll('.slide');
        this.slidesContainer = document.querySelector('.slides');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.progressBar = document.getElementById('progress-bar');

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Mouse events for dragging
        this.addMouseEvents();

        // Start auto slide
        this.startAutoSlide();

        // Progress bar animation
        this.startProgressAnimation();

        // Prevent context menu on captions
        this.preventContextMenu();
    }

    nextSlide() {
        if (this.isTransitioning) return;
        
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlide();
        this.resetAutoSlide();
    }

    previousSlide() {
        if (this.isTransitioning) return;
        
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
        this.resetAutoSlide();
    }

    updateSlide() {
        this.isTransitioning = true;
        
        // Update slides visibility
        this.slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', index !== this.currentSlide);
        });

        // Update transform
        const translateX = -this.currentSlide * 100;
        this.slidesContainer.style.transform = `translateX(${translateX}%)`;

        // Reset transition after animation
        setTimeout(() => {
            this.isTransitioning = false;
        }, 600);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }

    resetAutoSlide() {
        clearInterval(this.autoSlideInterval);
        this.startAutoSlide();
        this.startProgressAnimation();
    }

    startProgressAnimation() {
        if (this.progressBar) {
            this.progressBar.style.animation = 'none';
            setTimeout(() => {
                this.progressBar.style.animation = `progress ${this.autoSlideDelay}ms linear`;
            }, 10);
        }
    }

    addMouseEvents() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.slidesContainer.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            this.slidesContainer.style.cursor = 'grabbing';
            this.resetAutoSlide();
        });

        this.slidesContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            currentX = e.clientX;
            const diffX = startX - currentX;
            
            // Prevent default to avoid text selection
            e.preventDefault();
        });

        this.slidesContainer.addEventListener('mouseup', () => {
            if (!isDragging) return;
            
            isDragging = false;
            this.slidesContainer.style.cursor = 'grab';
            
            const diffX = startX - currentX;
            const threshold = 50; // Minimum drag distance
            
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });

        this.slidesContainer.addEventListener('mouseleave', () => {
            isDragging = false;
            this.slidesContainer.style.cursor = 'grab';
        });

        // Touch events for mobile
        this.slidesContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.resetAutoSlide();
        });

        this.slidesContainer.addEventListener('touchend', (e) => {
            currentX = e.changedTouches[0].clientX;
            const diffX = startX - currentX;
            const threshold = 50;
            
            if (Math.abs(diffX) > threshold) {
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        });
    }

    preventContextMenu() {
        // Prevent right-click context menu on captions
        document.querySelectorAll('.caption').forEach(el => {
            el.addEventListener('contextmenu', e => e.preventDefault());
        });
    }
}

// Register component
if (typeof window !== 'undefined') {
    window.HeroSliderComponent = HeroSliderComponent;
}
