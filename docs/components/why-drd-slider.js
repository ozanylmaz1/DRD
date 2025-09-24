class WhyDrdSliderComponent {
    constructor(customSlides = null) {
        this.componentName = 'why-drd-slider';

        // Varsayýlan slide'lar
        this.defaultSlides = [
            {
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-5.png',
                title: 'Hýzlý ve Etkin Çözümler',
            },
            {
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-4.png',
                title: 'Yaygýn Servis Aðý',
            },
            {
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-1.png',
                title: 'Geniþ Araç Portföyü',
            }
        ];

        // Tüm mevcut slide'lar (pool)
        this.allSlides = [
            {
                id: 1,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-1.png',
                title: 'Geniþ Araç Portföyü',
            },
            {
                id: 2,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-2.png',
                title: 'Profesyonel Hizmet',
            },
            {
                id: 3,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-3.png',
                title: 'Güvenilir Çözümler',
            },
            {
                id: 4,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-4.png',
                title: 'Yaygýn Servis Aðý',
            },
            {
                id: 5,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-5.png',
                title: 'Hýzlý ve Etkin Çözümler',
            },
            {
                id: 6,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-6.png',
                title: '7/24 Destek',
            },
            {
                id: 7,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-7.png',
                title: 'Ekonomik Fiyatlar',
            },
            {
                id: 8,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-8.png',
                title: 'Teknoloji ve Ýnovasyon',
            },
            {
                id: 9,
                img: 'https://drdcmsv2.taigalab.com/Files/img/neden-drd/neden-drd-9.png',
                title: 'Müþteri Memnuniyeti',
            }
        ];

        // Sayfa bazlý slide konfigürasyonu
        this.pageSlideConfig = {
            'default': [1, 4, 5], // varsayýlan
            'index': [1, 2, 3],
            'about': [3, 4, 5],
            'services': [6, 7, 8],
            'contact': [2, 5, 9]
        };

        // Custom slides varsa kullan, yoksa varsayýlaný kullan
        this.slides = customSlides || this.defaultSlides;

        // Event handler referanslarýný sakla (temizleme için)
        this.boundHandlers = {};
        this.slider = null;
        this.resizeTimeout = null;
    }

    // Sayfa adýna göre slide'larý ayarla
    setSlidesByPage(pageName) {
        const slideIds = this.pageSlideConfig[pageName] || this.pageSlideConfig['default'];
        this.slides = this.getSlidesByIds(slideIds);

        // Eðer component mount edilmiþse, yeniden render et
        if (this.slider) {
            const container = this.slider.parentElement;
            this.mount(container);
        }
    }

    // ID'lere göre slide'larý getir
    getSlidesByIds(ids) {
        return ids.map(id => this.allSlides.find(slide => slide.id === id)).filter(Boolean);
    }

    // Manuel olarak slide'larý ayarla
    setCustomSlides(slides) {
        this.slides = slides;
        if (this.slider) {
            const container = this.slider.parentElement;
            this.mount(container);
        }
    }

    // Mevcut sayfayý otomatik tespit et ve slide'larý ayarla
    autoDetectPage() {
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop().replace('.html', '');

        // Özel sayfa eþlemeleri
        const pageMapping = {
            'index.html': 'index',
            '': 'index', // Ana sayfa
            '/': 'index', // Ana sayfa
            'hakkimizda.html': 'about',
            'hizmetlerimiz.html': 'services',
            'iletisim.html': 'contact'
        };

        const pageName = pageMapping[filename] || filename || 'default';
        this.setSlidesByPage(pageName);
    }

    render() {
        return `
            <div class="why-drd-slider">
                ${this.slides.map((slide, index) => `
                    <div class="why-drd-slide" data-slide-id="${slide.id || index}">
                        <img src="${slide.img}" alt="${slide.title}" draggable="false">
                    </div>
                `).join('')}
            </div>
        `;
    }

    mount(container) {
        if (typeof container === "string") container = document.querySelector(container);
        if (!container) return;

        // Önceki içeriði temizle
        this.destroy();

        container.innerHTML = this.render();
        this.slider = container.querySelector('.why-drd-slider');

        if (!this.slider) return;

        // Slider state
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.hasMoved = false;

        // Event handler'larý bind et ve sakla
        this.bindEvents();

        // Ýlk yüklemede ortadaki slide'ý göster
        requestAnimationFrame(() => {
            this.centerMiddleSlide();
        });
    }

    bindEvents() {
        // Mouse events
        this.boundHandlers.mousedown = this.handleMouseDown.bind(this);
        this.boundHandlers.mousemove = this.handleMouseMove.bind(this);
        this.boundHandlers.mouseup = this.handleMouseUp.bind(this);
        this.boundHandlers.mouseleave = this.handleMouseLeave.bind(this);

        // Touch events
        this.boundHandlers.touchstart = this.handleTouchStart.bind(this);
        this.boundHandlers.touchmove = this.handleTouchMove.bind(this);
        this.boundHandlers.touchend = this.handleTouchEnd.bind(this);

        // Diðer events
        this.boundHandlers.dragstart = this.handleDragStart.bind(this);
        this.boundHandlers.contextmenu = this.handleContextMenu.bind(this);
        this.boundHandlers.resize = this.handleResize.bind(this);

        // Event listener'larý ekle
        this.slider.addEventListener('mousedown', this.boundHandlers.mousedown);
        this.slider.addEventListener('mousemove', this.boundHandlers.mousemove);
        this.slider.addEventListener('mouseleave', this.boundHandlers.mouseleave);

        this.slider.addEventListener('touchstart', this.boundHandlers.touchstart, { passive: false });
        this.slider.addEventListener('touchmove', this.boundHandlers.touchmove, { passive: false });
        this.slider.addEventListener('touchend', this.boundHandlers.touchend);

        this.slider.addEventListener('dragstart', this.boundHandlers.dragstart);
        this.slider.addEventListener('contextmenu', this.boundHandlers.contextmenu);

        // Global events
        document.addEventListener('mouseup', this.boundHandlers.mouseup);
        window.addEventListener('resize', this.boundHandlers.resize);
    }

    // Mouse Events
    handleMouseDown(e) {
        this.isDragging = true;
        this.hasMoved = false;
        this.slider.classList.add('active');
        this.startX = e.pageX;
        this.scrollLeft = this.slider.scrollLeft;
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();

        const x = e.pageX;
        const walk = (x - this.startX) * 2; 

        // Hareket eþiði
        if (Math.abs(walk) > 5) {
            this.hasMoved = true;
        }

        this.slider.scrollLeft = this.scrollLeft - walk;
    }

    handleMouseUp(e) {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.slider.classList.remove('active');

        // Link týklamalarýný engelle
        if (this.hasMoved) {
            e.preventDefault();
            this.snapToClosest();
        }
    }

    handleMouseLeave() {
        if (this.isDragging) {
            this.isDragging = false;
            this.slider.classList.remove('active');
            if (this.hasMoved) {
                this.snapToClosest();
            }
        }
    }

    // Touch Events
    handleTouchStart(e) {
        this.isDragging = true;
        this.hasMoved = false;
        const touch = e.touches[0];
        this.startX = touch.pageX;
        this.scrollLeft = this.slider.scrollLeft;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;

        const touch = e.touches[0];
        const walk = (touch.pageX - this.startX) * 2; 

        if (Math.abs(walk) > 3) {
            this.hasMoved = true;
            e.preventDefault(); // Scroll'u engelle
        }

        this.slider.scrollLeft = this.scrollLeft - walk;
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;

        this.isDragging = false;

        if (this.hasMoved) {
            e.preventDefault();
            this.snapToClosest();
        }
    }

    // Diðer Events
    handleDragStart(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }

    handleContextMenu(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }

    handleResize() {
        // Debounce resize event
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.centerMiddleSlide();
        }, 250);
    }

    // Yardýmcý Metodlar
    centerMiddleSlide() {
        if (!this.slider) return;

        const slides = this.slider.querySelectorAll('.why-drd-slide');
        if (slides.length === 0) return;

        const middleIndex = Math.floor(slides.length / 2);
        const middleSlide = slides[middleIndex];

        if (!middleSlide) return;

        // Container padding'ini hesaba kat
        const containerRect = this.slider.getBoundingClientRect();
        const slideRect = middleSlide.getBoundingClientRect();
        const containerCenter = containerRect.width / 2;
        const slideCenter = middleSlide.offsetLeft + (slideRect.width / 2);

        const scrollPosition = slideCenter - containerCenter;

        this.slider.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    snapToClosest() {
        if (!this.slider) return;

        const slides = this.slider.querySelectorAll('.why-drd-slide');
        const containerRect = this.slider.getBoundingClientRect();
        const containerCenter = containerRect.left + (containerRect.width / 2);

        let closest = null;
        let minDistance = Infinity;

        slides.forEach(slide => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenter = slideRect.left + (slideRect.width / 2);
            const distance = Math.abs(slideCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closest = slide;
            }
        });

        if (closest) {
            const containerCenter = this.slider.offsetWidth / 2;
            const slideCenter = closest.offsetLeft + (closest.offsetWidth / 2);
            const scrollPosition = slideCenter - containerCenter;

            this.slider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }

    // Component temizleme
    destroy() {
        // Event listener'larý temizle
        if (this.slider) {
            this.slider.removeEventListener('mousedown', this.boundHandlers.mousedown);
            this.slider.removeEventListener('mousemove', this.boundHandlers.mousemove);
            this.slider.removeEventListener('mouseleave', this.boundHandlers.mouseleave);
            this.slider.removeEventListener('touchstart', this.boundHandlers.touchstart);
            this.slider.removeEventListener('touchmove', this.boundHandlers.touchmove);
            this.slider.removeEventListener('touchend', this.boundHandlers.touchend);
            this.slider.removeEventListener('dragstart', this.boundHandlers.dragstart);
            this.slider.removeEventListener('contextmenu', this.boundHandlers.contextmenu);
        }

        document.removeEventListener('mouseup', this.boundHandlers.mouseup);
        window.removeEventListener('resize', this.boundHandlers.resize);

        // Timeout'larý temizle
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }

        // Referanslarý temizle
        this.slider = null;
        this.boundHandlers = {};
    }
}

window.WhyDrdSliderComponent = WhyDrdSliderComponent;