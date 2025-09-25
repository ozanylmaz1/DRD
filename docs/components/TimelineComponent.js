class TimelineComponent {
    constructor() {
        this.componentName = 'timeline';
        this.instanceId = `timeline-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.boundHandlers = {};
        this.timelineList = null;
        this.timelineData = this.getTimelineData();

        this.scrollSpeed = 2; 
    }


    getTimelineData() {
        return [
            { year: '2024', text: 'Çalışan memnuniyeti ve güçlü kurum kültürünün bir göstergesi olarak, DRD "Great Place to Work" sertifikası alarak iş dünyasında mükemmel bir iş yeri olduğunu tescilledi.' },
            { year: '2022', text: 'Şirket içi süreçlerde daha verimli ve yenilikçi bir yapıya geçiş sağlamak adına Kurumsal Dönüşüm Projesi\'ni başlattı.' },
            { year: '2020', text: 'Dijital dönüşüm yolculuğunda önemli bir adım olan Filomatik Hızlı Teklif online kiralama platformunu devreye aldı.' },
            { year: '2020', text: 'Filomatik 2.0 online raporlama platformunu yenileyerek daha gelişmiş analiz ve veri raporlama imkanı sundu.' },
            { year: '2020', text: 'Asistan Araç Yönetimi adlı inovatif ürünüyle sektörde yeni bir çözüm sundu.' },
            { year: '2018', text: 'Türkiye ekonomisindeki gelişmeleri yakından izleyerek pazarın değişen ihtiyaçlarına çözüm sunmak amacıyla EKOPaket adındaki ikinci el kiralama modelini hayata geçirdi.' },
            { year: '2018', text: 'Trafikte daha bilinçli sürücüler yetiştirme misyonuyla 4.000\'den fazla müşteriye güvenli sürüş eğitimi verdi.' },
            { year: '2017', text: 'Türkiye\'de ilk bireysel yıllık kiralama markası olan OneCar\'ı hayata geçirdi.' },
            { year: '2017', text: 'OneCar, daha ilk yılında İngiliz BBC Top Gear Dergisi tarafından "Türkiye\'de Yılın Araç Kiralama Şirketi" ödülüne layık görüldü.' },
            { year: '2017', text: 'Aynı yıl, 2016 Faaliyet Raporu ile uluslararası Stevie Ödülü kazandı.' },
            { year: '2017', text: 'Araç parkını 36.000 adedin üzerine çıkardı.' },
            { year: '2016', text: 'İngiliz BBC Top Gear Dergisi tarafından "Türkiye\'de Yılın Araç Kiralama Şirketi" ödülüne layık görüldü.' },
            { year: '2016', text: 'Bireysel yıllık kiralama iş koluna giriş yaparak 1.400\'ü aşan servis noktasıyla hizmet ağını genişletti.' },
            { year: '2016', text: 'Güvenli sürüş alışkanlıklarını teşvik etmek amacıyla "HEY! Hayatı Emniyetli Yaşa" sosyal sorumluluk projesini hayata geçirdi.' },
            { year: '2015', text: 'Dijitalleşme alanındaki öncü rolü, Accenture Dijitalleşme Endeksi\'nde "Türkiye\'nin Kiralama Sektöründe Dijital Öncüsü" ödülü ile taçlandırdı.' },
            { year: '2015', text: 'DRD Akademi\'yi kurarak sektöre yönelik eğitim ve gelişim odaklı projelere başladı.' },
            { year: '2015', text: 'Çevresel sürdürülebilirlik kapsamında Kağıtsız Ofis uygulamasını hayata geçirerek TEMA Vakfı iş birliğiyle DRD Hatıra Ormanı\'nı oluşturdu.' },
            { year: '2014', text: 'Türkiye filo kiralama sektöründe ilk teminatsız tahvil ihracını başarıyla gerçekleştirdi.' },
            { year: '2014', text: 'Sektörün en kapsamlı mobil uygulaması DRDrive ile dijitalleşme sürecine öncülük etti.' },
            { year: '2014', text: 'Filo yöneticilerinin filolarına dair tüm detayları kolayca takip edebilmelerini sağlayan Filomatik raporlama modülünü devreye aldı.' },
            { year: '2013', text: 'Türkiye genelinde 1.100\'ü aşkın servis noktasıyla geniş bir hizmet ağı oluşturarak operasyonel gücünü ve erişim kapasitesini önemli ölçüde artırdı.' },
            { year: '2011', text: 'Uluslararası kredi derecelendirme kuruluşu tarafından "Yatırım Yapılabilir" seviyede not alan ilk filo kiralama markası olarak sektörde bir ilke imza attı.' },
            { year: '2011', text: 'Türkiye operasyonel kiralama sektörünün ilk Faaliyet Raporu\'nu yayımladı.' },
            { year: '2011', text: 'Capital 500 ve Fortune 500 listelerine girerek Türkiye\'nin en büyük 500 şirketi arasında yer aldı.' },
            { year: '2011', text: 'Çevre bilinci ve sürdürülebilirlik anlayışıyla WWF (Doğal Hayatı Koruma Derneği) iş birliğiyle "Türkiye\'nin Canı Kampanyası"nı başlattı.' },
            { year: '2009', text: 'Derindere Şirketler Grubu\'nun kurucusu Sayın Ömer Derindere, TBMM tarafından Onur Madalyası ile ödüllendirildi.' },
            { year: '2008', text: 'Başkent Ankara\'da açılan ilk şube ile Türkiye genelinde daha geniş bir müşteri ağına ulaşma yolunda önemli bir adım attı.' },
            { year: '2007', text: 'Bir Türk şirketi tarafından gerçekleştirilen en büyük ve uzun vadeli finansman anlaşmasıyla uluslararası alanda prestijli "Deal of The Year" ödülüne layık görüldü.' },
            { year: '1999', text: 'Kuruluşunun henüz ilk yılında filo büyüklüğünü 1.000 araca ulaştırarak sektörde güçlü bir yer edinmeye başladı.' },
            { year: '1998', text: 'Türkiye filo kiralama sektöründe öncü bir vizyonla yola çıkan DRD Filo Kiralama faaliyetlerine başladı.' }
        ];
    }

    mount(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (!container) return;

        // Önceki içeriği temizle
        this.destroy();

        container.innerHTML = this.render();
        this.timelineList = container.querySelector(`#${this.instanceId}-list`);

        if (this.timelineList) {
            this.bindEvents();
            this.updateActiveStates();
        }
    }

    render() {
        const itemsHtml = this.timelineData.map((item, index) => `
            <li class="timeline-slide-item" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${this.timelineData.length}">
                <div class="timeline-slide">
                    <h6 class="timeline-year">${item.year}</h6>
                    <p>${item.text}</p>
                </div>
            </li>
        `).join('');

        return `
            <section class="company-timeline">
                <div class="container">
                    <div class="section-head">
                        <h2>
                            Tarihçe
                            <br />
                            Başarı yolculuğumuz
                        </h2>
                    </div>
                    <ul class="timeline-list" id="${this.instanceId}-list">
                        ${itemsHtml}
                    </ul>
                </div>
            </section>
        `;
    }

    bindEvents() {
        // State değişkenleri
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.hasMoved = false;

        // Event handler'ları bind et
        this.boundHandlers.mousedown = this.handleMouseDown.bind(this);
        this.boundHandlers.mousemove = this.handleMouseMove.bind(this);
        this.boundHandlers.mouseup = this.handleMouseUp.bind(this);
        this.boundHandlers.mouseleave = this.handleMouseLeave.bind(this);
        this.boundHandlers.touchstart = this.handleTouchStart.bind(this);
        this.boundHandlers.touchmove = this.handleTouchMove.bind(this);
        this.boundHandlers.touchend = this.handleTouchEnd.bind(this);
        this.boundHandlers.scroll = this.handleScroll.bind(this);
        this.boundHandlers.click = this.handleClick.bind(this);

        // Event listener'ları ekle
        this.timelineList.addEventListener('mousedown', this.boundHandlers.mousedown);
        this.timelineList.addEventListener('mousemove', this.boundHandlers.mousemove);
        this.timelineList.addEventListener('mouseleave', this.boundHandlers.mouseleave);
        this.timelineList.addEventListener('touchstart', this.boundHandlers.touchstart, { passive: true }); // Passive true
        this.timelineList.addEventListener('touchmove', this.boundHandlers.touchmove, { passive: false });
        this.timelineList.addEventListener('touchend', this.boundHandlers.touchend, { passive: true }); // Passive true
        this.timelineList.addEventListener('scroll', this.boundHandlers.scroll, { passive: true });
        this.timelineList.addEventListener('click', this.boundHandlers.click);

        document.addEventListener('mouseup', this.boundHandlers.mouseup);

        // Initial cursor
        this.timelineList.style.cursor = 'grab';
    }

    handleMouseDown(e) {
        this.isDragging = true;
        this.hasMoved = false;
        this.timelineList.style.cursor = 'grabbing';
        this.startX = e.pageX - this.timelineList.offsetLeft;
        this.scrollLeft = this.timelineList.scrollLeft;
        e.preventDefault();
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();

        const x = e.pageX;
        const walk = (x - this.startX)

        if (Math.abs(walk) > 3) {
            this.hasMoved = true;
        }

        this.timelineList.scrollLeft = this.scrollLeft - walk;
    }

    handleMouseUp(e) {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.timelineList.style.cursor = 'grab';

        if (this.hasMoved) {
            e.preventDefault();
            this.snapToNearestCard();
        }
    }

    handleMouseLeave() {
        if (this.isDragging) {
            this.isDragging = false;
            this.timelineList.style.cursor = 'grab';
            if (this.hasMoved) {
                this.snapToNearestCard();
            }
        }
    }

    handleTouchStart(e) {
        this.isDragging = true;
        this.hasMoved = false;
        const touch = e.touches[0];
        this.startX = touch.pageX - this.timelineList.offsetLeft;
        this.scrollLeft = this.timelineList.scrollLeft;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;

        const touch = e.touches[0];
        const walk = (touch.pageX - this.startX) 

        if (Math.abs(walk) > 3) {
            this.hasMoved = true;
            e.preventDefault();
        }

        this.timelineList.scrollLeft = this.scrollLeft - walk;
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;

        this.isDragging = false;

        if (this.hasMoved) {
            e.preventDefault();
            this.snapToNearestCard();
        }
    }

    handleScroll() {
        // Scroll sırasında active state'leri güncelle
        this.updateActiveStates();
    }

    handleClick(e) {
        if (this.hasMoved) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    getCardWidth() {
        const card = this.timelineList.querySelector('.timeline-slide-item');
        if (!card) return 400;
        const computedStyle = getComputedStyle(this.timelineList);
        const gap = parseFloat(computedStyle.gap) || 30;
        return card.offsetWidth + gap;
    }

    snapToNearestCard() {
        const cardWidth = this.getCardWidth();
        const currentScroll = this.timelineList.scrollLeft;
        const containerWidth = this.timelineList.offsetWidth;
        const centerOffset = (containerWidth - cardWidth) / 2;

        // Merkezdeki kart için ayarlama
        const adjustedScroll = currentScroll + centerOffset;
        const nearestIndex = Math.round(adjustedScroll / cardWidth);
        const targetScroll = (nearestIndex * cardWidth) - centerOffset;

        this.timelineList.scrollTo({
            left: Math.max(0, targetScroll),
            behavior: 'smooth'
        });
    }

    updateActiveStates() {
        const cards = this.timelineList.querySelectorAll('.timeline-slide-item');
        const containerRect = this.timelineList.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        cards.forEach(card => {
            card.classList.remove('is-active', 'is-prev', 'is-next', 'is-visible');

            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(cardCenter - containerCenter);

            // Görünür kartları işaretle
            if (cardRect.right > containerRect.left && cardRect.left < containerRect.right) {
                card.classList.add('is-visible');
            }

            // En yakın kartı active yap
            if (distance < cardRect.width / 2) {
                card.classList.add('is-active');
                const index = Array.from(cards).indexOf(card);

                // Prev ve next kartları işaretle
                if (index > 0) cards[index - 1]?.classList.add('is-prev');
                if (index < cards.length - 1) cards[index + 1]?.classList.add('is-next');
            }
        });
    }

    destroy() {
        if (this.timelineList) {
            // Event listener'ları kaldır
            this.timelineList.removeEventListener('mousedown', this.boundHandlers.mousedown);
            this.timelineList.removeEventListener('mousemove', this.boundHandlers.mousemove);
            this.timelineList.removeEventListener('mouseleave', this.boundHandlers.mouseleave);
            this.timelineList.removeEventListener('touchstart', this.boundHandlers.touchstart);
            this.timelineList.removeEventListener('touchmove', this.boundHandlers.touchmove);
            this.timelineList.removeEventListener('touchend', this.boundHandlers.touchend);
            this.timelineList.removeEventListener('scroll', this.boundHandlers.scroll);
            this.timelineList.removeEventListener('click', this.boundHandlers.click);

            document.removeEventListener('mouseup', this.boundHandlers.mouseup);
        }

        // Referansları temizle
        this.timelineList = null;
        this.boundHandlers = {};
        this.isDragging = false;
        this.hasMoved = false;
    }
}

window.TimelineComponent = TimelineComponent;