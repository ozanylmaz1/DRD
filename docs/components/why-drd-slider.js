class WhyDrdSliderComponent {
    constructor(customSlides = null) {
        this.componentName = 'why-drd-slider';

        this.defaultSlides = [
            { img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-5.png', title: 'Hýzlý ve Etkin Çözümler' },
            { img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-4.png', title: 'Yaygýn Servis Aðý' },
            { img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-1.png', title: 'Geniþ Araç Portföyü' }
        ];

        this.slides = customSlides || this.defaultSlides;
        this.slider = null;

        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.dragThreshold = 10;
        this.hasDragged = false;
        this.scrollSpeed = 1.2;
    }

    render() {
        const clonedSlidesStart = this.slides.map((slide, index) => ({
            ...slide,
            cloneType: 'start',
            originalIndex: index
        }));

        const clonedSlidesEnd = this.slides.map((slide, index) => ({
            ...slide,
            cloneType: 'end',
            originalIndex: index
        }));

        return `
        <div class="why-drd-slider">
                    ${clonedSlidesStart.map((slide, index) => `
                <div class="why-drd-slide clone-start" data-index="${index}">
                    <img src="${slide.img}" alt="${slide.title}" draggable="false">
                </div>
            `).join('')}
            ${clonedSlidesEnd.map((slide, index) => `
                <div class="why-drd-slide clone-end" data-index="${index}">
                    <img src="${slide.img}" alt="${slide.title}" draggable="false">
                </div>
            `).join('')}
            ${this.slides.map((slide, index) => `
                <div class="why-drd-slide" data-index="${index}">
                    <img src="${slide.img}" alt="${slide.title}" draggable="false">
                </div>
            `).join('')}
            ${clonedSlidesStart.map((slide, index) => `
                <div class="why-drd-slide clone-start" data-index="${index}">
                    <img src="${slide.img}" alt="${slide.title}" draggable="false">
                </div>
            `).join('')}
            ${clonedSlidesEnd.map((slide, index) => `
                <div class="why-drd-slide clone-end" data-index="${index}">
                    <img src="${slide.img}" alt="${slide.title}" draggable="false">
                </div>
            `).join('')}
        </div>`;
    }

    mount(container) {
        if (typeof container === 'string') container = document.querySelector(container);
        if (!container) return;

        container.innerHTML = this.render();
        this.slider = container.querySelector(".why-drd-slider");

        if (this.slider) {
            this.initMouseDrag();
            this.initInfiniteScroll();
        }
    }

    initMouseDrag() {
        const slider = this.slider;
        if (!slider) return;

        const getItemWidth = () => {
            const card = slider.querySelector(".why-drd-slide");
            if (!card) return 0;
            const gap = parseFloat(getComputedStyle(slider).gap) || 0;
            return card.offsetWidth + gap;
        };

        const snapToNearestItem = () => {
            const width = getItemWidth();
            const currentScroll = slider.scrollLeft;
            const nearestIndex = Math.round(currentScroll / width);
            const targetScroll = nearestIndex * width;
            slider.scrollTo({ left: targetScroll, behavior: 'smooth' });
        };

        slider.addEventListener('mousedown', e => {
            this.isDragging = true;
            this.hasDragged = false;
            slider.style.cursor = 'grabbing';
            this.startX = e.pageX - slider.offsetLeft;
            this.scrollLeft = slider.scrollLeft;
            e.preventDefault();
        });

        slider.addEventListener('mousemove', e => {
            if (!this.isDragging) return;
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - this.startX) * this.scrollSpeed;
            if (Math.abs(x - this.startX) > this.dragThreshold) this.hasDragged = true;
            slider.scrollLeft = this.scrollLeft - walk;
        });

        slider.addEventListener('mouseup', () => {
            this.isDragging = false;
            slider.style.cursor = 'grab';
            if (this.hasDragged) snapToNearestItem();
        });

        slider.addEventListener('mouseleave', () => {
            if (this.isDragging) {
                this.isDragging = false;
                slider.style.cursor = 'grab';
                snapToNearestItem();
            }
        });

        // Touch
        slider.addEventListener('touchstart', e => {
            this.isDragging = true;
            this.hasDragged = false;
            this.startX = e.touches[0].pageX - slider.offsetLeft;
            this.scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchmove', e => {
            if (!this.isDragging) return;
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - this.startX) * this.scrollSpeed;
            if (Math.abs(x - this.startX) > this.dragThreshold) this.hasDragged = true;
            slider.scrollLeft = this.scrollLeft - walk;
        });

        slider.addEventListener('touchend', () => {
            this.isDragging = false;
            if (this.hasDragged) snapToNearestItem();
        });

        slider.addEventListener('click', e => {
            if (this.hasDragged) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        slider.style.cursor = 'grab';
    }

    initInfiniteScroll() {
        const slider = this.slider;
        if (!slider) return;

        const getItemWidth = () => {
            const card = slider.querySelector(".why-drd-slide");
            if (!card) return 0;
            const gap = parseFloat(getComputedStyle(slider).gap) || 0;
            return card.offsetWidth + gap;
        };

        const slideCount = this.slides.length;
        const itemWidth = getItemWidth();
        const totalClones = slideCount * 3; 
        const totalWidth = (slideCount + totalClones) * itemWidth; 

        slider.addEventListener("scroll", () => {
            const currentScroll = slider.scrollLeft;

            if (currentScroll <= itemWidth) {
                slider.scrollLeft = currentScroll + (slideCount * itemWidth);
            }
            else if (currentScroll >= slideCount * itemWidth) {
                slider.scrollLeft = currentScroll - (slideCount * itemWidth);
            }
        });
        slider.scrollLeft = slideCount * itemWidth;
    }
}

window.WhyDrdSliderComponent = WhyDrdSliderComponent;
