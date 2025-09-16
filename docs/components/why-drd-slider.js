// Why DRD Slider Component
class WhyDrdSlider {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            images: options.images || [
                { src: "https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-1.png", alt: "why DRD 1" },
                { src: "https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-5.png", alt: "why DRD 2" },
                { src: "https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-3.png", alt: "why DRD 3" }
            ]
        };
        
        this.render();
        this.slider = this.container.querySelector('.why-drd-slider');
        this.init();
    }

    render() {
        const sliderHTML = `
            <div class="why-drd-slider">
                ${this.options.images.map(img => `
                    <div class="why-drd-slide">
                        <img src="${img.src}" alt="${img.alt}" />
                    </div>
                `).join('')}
            </div>
        `;
        this.container.innerHTML = sliderHTML;
    }

    init() {
        if (!this.slider) return;

        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.dragThreshold = 10;
        this.hasDragged = false;

        this.bindEvents();
        this.setInitialCursor();
    }

    getSlideWidth() {
        const slide = this.slider.querySelector('.why-drd-slide');
        const style = getComputedStyle(slide);
        const gap = parseFloat(getComputedStyle(this.slider).gap) || 0;
        return slide.offsetWidth + gap;
    }

    snapToNearestSlide() {
        const slideWidth = this.getSlideWidth();
        const currentScroll = this.slider.scrollLeft;
        const nearestIndex = Math.round(currentScroll / slideWidth);
        const targetScroll = nearestIndex * slideWidth;

        this.slider.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    }

    bindEvents() {
        // Mouse events
        this.slider.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.slider.addEventListener('mouseleave', () => this.handleMouseLeave());
        this.slider.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.slider.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        // Touch events for mobile
        this.slider.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.slider.addEventListener('touchmove', (e) => this.handleTouchMove(e));
        this.slider.addEventListener('touchend', (e) => this.handleTouchEnd(e));

        // Prevent link clicks during drag
        this.slider.addEventListener('click', (e) => this.handleClick(e));
    }

    handleMouseDown(e) {
        this.isDragging = true;
        this.hasDragged = false;
        this.slider.style.cursor = 'grabbing';
        this.startX = e.pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;
        e.preventDefault();
    }

    handleMouseLeave() {
        if (this.isDragging) {
            this.isDragging = false;
            this.slider.style.cursor = 'grab';
            this.snapToNearestSlide();
        }
    }

    handleMouseUp(e) {
        if (this.isDragging) {
            this.isDragging = false;
            this.slider.style.cursor = 'grab';

            if (this.hasDragged) {
                this.snapToNearestSlide();
            }
        }
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        const x = e.pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * 1.2;

        if (Math.abs(x - this.startX) > this.dragThreshold) {
            this.hasDragged = true;
        }

        this.slider.scrollLeft = this.scrollLeft - walk;
    }

    handleTouchStart(e) {
        this.isDragging = true;
        this.hasDragged = false;
        this.startX = e.touches[0].pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        const x = e.touches[0].pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * 1.2;

        if (Math.abs(x - this.startX) > this.dragThreshold) {
            this.hasDragged = true;
        }

        this.slider.scrollLeft = this.scrollLeft - walk;
    }

    handleTouchEnd(e) {
        if (this.isDragging) {
            this.isDragging = false;

            if (this.hasDragged) {
                this.snapToNearestSlide();
            }
        }
    }

    handleClick(e) {
        if (this.hasDragged) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    setInitialCursor() {
        this.slider.style.cursor = 'grab';
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const sliderContainers = document.querySelectorAll('.why-drd-slider-container');
    sliderContainers.forEach(container => {
        new WhyDrdSlider(container);
    });
});
