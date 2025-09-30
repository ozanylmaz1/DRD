class TimelineComponent {
    constructor() {
        this.componentName = 'timeline';
        this.instanceId = `timeline-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        this.timelineList = null;
        this.timelineData = this.getTimelineData();

        // Drag özellikleri
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        this.dragThreshold = 10;
        this.hasDragged = false;
        this.scrollSpeed = 1.2; // fare hızı çarpanı
    }
    mount(container) {
        if (typeof container === 'string') container = document.querySelector(container);
        if (!container) return;

        container.innerHTML = this.render();
        this.timelineList = container.querySelector(`#${this.instanceId}-list`);

        if (this.timelineList) {
            this.initMouseDrag();
        }
    }

    getTimelineData() {
        return [
            {
                year: '2024',
                text: 'Çalışan memnuniyeti ve güçlü kurum kültürünün bir göstergesi olarak, DRD "Great Place to Work" sertifikası alarak iş dünyasında mükemmel bir iş yeri olduğunu tescilledi.'
            },
            {
                year: '2022',
                text: 'Şirket içi süreçlerde daha verimli ve yenilikçi bir yapıya geçiş sağlamak adına Kurumsal Dönüşüm Projesi\'ni başlattı.'
            },
            {
                year: '2020',
                text: 'Dijital dönüşüm yolculuğunda önemli bir adım olan Filomatik Hızlı Teklif online kiralama platformunu devreye aldı.'
            },
            {
                year: '2020',
                text: 'Filomatik 2.0 online raporlama platformunu yenileyerek daha gelişmiş analiz ve veri raporlama imkanı sundu.'
            },
            {
                year: '2020',
                text: 'Asistan Araç Yönetimi adlı inovatif ürünüyle sektörde yeni bir çözüm sundu.'
            },
            {
                year: '2018',
                text: 'Türkiye ekonomisindeki gelişmeleri yakından izleyerek pazarın değişen ihtiyaçlarına çözüm sunmak amacıyla EKOPaket adındaki ikinci el kiralama modelini hayata geçirdi.'
            },
            {
                year: '2018',
                text: 'Trafikte daha bilinçli sürücüler yetiştirme misyonuyla 4.000\'den fazla müşteriye güvenli sürüş eğitimi verdi.'
            },
            {
                year: '2017',
                text: 'Türkiye\'de ilk bireysel yıllık kiralama markası olan OneCar\'ı hayata geçirdi.'
            },
            {
                year: '2017',
                text: 'OneCar, daha ilk yılında İngiliz BBC Top Gear Dergisi tarafından "Türkiye\'de Yılın Araç Kiralama Şirketi" ödülüne layık görüldü.'
            },
            {
                year: '2017',
                text: 'Aynı yıl, 2016 Faaliyet Raporu ile uluslararası Stevie Ödülü kazandı.'
            },
            {
                year: '2017',
                text: 'Araç parkını 36.000 adedin üzerine çıkardı.'
            },
            {
                year: '2016',
                text: 'İngiliz BBC Top Gear Dergisi tarafından "Türkiye\'de Yılın Araç Kiralama Şirketi" ödülüne layık görüldü.'
            },
            {
                year: '2016',
                text: 'Bireysel yıllık kiralama iş koluna giriş yaparak 1.400\'ü aşan servis noktasıyla hizmet ağını genişletti.'
            },
            {
                year: '2016',
                text: 'Güvenli sürüş alışkanlıklarını teşvik etmek amacıyla "HEY! Hayatı Emniyetli Yaşa" sosyal sorumluluk projesini hayata geçirdi.'
            },
            {
                year: '2015',
                text: 'Dijitalleşme alanındaki öncü rolü, Accenture Dijitalleşme Endeksi\'nde "Türkiye\'nin Kiralama Sektöründe Dijital Öncüsü" ödülü ile taçlandırdı.'
            },
            {
                year: '2015',
                text: 'DRD Akademi\'yi kurarak sektöre yönelik eğitim ve gelişim odaklı projelere başladı.'
            },
            {
                year: '2015',
                text: 'Çevresel sürdürülebilirlik kapsamında Kağıtsız Ofis uygulamasını hayata geçirerek TEMA Vakfı iş birliğiyle DRD Hatıra Ormanı\'nı oluşturdu.'
            },
            {
                year: '2014',
                text: 'Türkiye filo kiralama sektöründe ilk teminatsız tahvil ihracını başarıyla gerçekleştirdi.'
            },
            {
                year: '2014',
                text: 'Sektörün en kapsamlı mobil uygulaması DRDrive ile dijitalleşme sürecine öncülük etti.'
            },
            {
                year: '2014',
                text: 'Filo yöneticilerinin filolarına dair tüm detayları kolayca takip edebilmelerini sağlayan Filomatik raporlama modülünü devreye aldı.'
            },
            {
                year: '2013',
                text: 'Türkiye genelinde 1.100\'ü aşkın servis noktasıyla geniş bir hizmet ağı oluşturarak operasyonel gücünü ve erişim kapasitesini önemli ölçüde artırdı.'
            },
            {
                year: '2011',
                text: 'Uluslararası kredi derecelendirme kuruluşu tarafından "Yatırım Yapılabilir" seviyede not alan ilk filo kiralama markası olarak sektörde bir ilke imza attı.'
            },
            {
                year: '2011',
                text: 'Türkiye operasyonel kiralama sektörünün ilk Faaliyet Raporu\'nu yayımladı.'
            },
            {
                year: '2011',
                text: 'Capital 500 ve Fortune 500 listelerine girerek Türkiye\'nin en büyük 500 şirketi arasında yer aldı.'
            },
            {
                year: '2011',
                text: 'Çevre bilinci ve sürdürülebilirlik anlayışıyla WWF (Doğal Hayatı Koruma Derneği) iş birliğiyle "Türkiye\'nin Canı Kampanyası"nı başlattı.'
            },
            {
                year: '2009',
                text: 'Derindere Şirketler Grubu\'nun kurucusu Sayın Ömer Derindere, TBMM tarafından Onur Madalyası ile ödüllendirildi.'
            },
            {
                year: '2008',
                text: 'Başkent Ankara\'da açılan ilk şube ile Türkiye genelinde daha geniş bir müşteri ağına ulaşma yolunda önemli bir adım attı.'
            },
            {
                year: '2007',
                text: 'Bir Türk şirketi tarafından gerçekleştirilen en büyük ve uzun vadeli finansman anlaşmasıyla uluslararası alanda prestijli "Deal of The Year" ödülüne layık görüldü.'
            },
            {
                year: '1999',
                text: 'Kuruluşunun henüz ilk yılında filo büyüklüğünü 1.000 araca ulaştırarak sektörde güçlü bir yer edinmeye başladı.'
            },
            {
                year: '1998',
                text: 'Türkiye filo kiralama sektöründe öncü bir vizyonla yola çıkan DRD Filo Kiralama faaliyetlerine başladı.'
            }
        ];
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
            <div class="company-timeline why-fleetino">
                <div class="container">
                    <div class="section-head">
                        <h2>Tarihçe<br />Başarı yolculuğumuz</h2>
                    </div>
                    <ul class="timeline-list" id="${this.instanceId}-list">
                        ${itemsHtml}
                    </ul>
                </div>
            </div>
        `;
    }

    // ------------------------------
    // Sürükleme / Kaydırma İşlevi
    // ------------------------------
    initMouseDrag() {
        const timeline = this.timelineList;
        if (!timeline) return;

        // Kart genişliğini almak için
        const getItemWidth = () => {
            const card = this.timelineList.querySelector('.timeline-slide-item');
            if (!card) return 0;
            const gap = parseFloat(getComputedStyle(timeline).gap) || 0;
            return card.offsetWidth + gap;
        };

        const snapToNearestItem = () => {
            const width = getItemWidth();
            const currentScroll = timeline.scrollLeft;
            const nearestIndex = Math.round(currentScroll / width);
            const targetScroll = nearestIndex * width;

            timeline.scrollTo({ left: targetScroll, behavior: 'smooth' });
        };

        // Fare olayları
        timeline.addEventListener('mousedown', e => {
            this.isDragging = true;
            this.hasDragged = false;
            timeline.style.cursor = 'grabbing';
            this.startX = e.pageX - timeline.offsetLeft;
            this.scrollLeft = timeline.scrollLeft;
            e.preventDefault();
        });

        timeline.addEventListener('mousemove', e => {
            if (!this.isDragging) return;
            e.preventDefault();
            const x = e.pageX - timeline.offsetLeft;
            const walk = (x - this.startX) * this.scrollSpeed;

            if (Math.abs(x - this.startX) > this.dragThreshold) this.hasDragged = true;

            timeline.scrollLeft = this.scrollLeft - walk;
        });

        timeline.addEventListener('mouseup', e => {
            this.isDragging = false;
            timeline.style.cursor = 'grab';
            if (this.hasDragged) snapToNearestItem();
        });

        timeline.addEventListener('mouseleave', e => {
            if (this.isDragging) {
                this.isDragging = false;
                timeline.style.cursor = 'grab';
                snapToNearestItem();
            }
        });

        // Dokunmatik cihazlar
        timeline.addEventListener('touchstart', e => {
            this.isDragging = true;
            this.hasDragged = false;
            this.startX = e.touches[0].pageX - timeline.offsetLeft;
            this.scrollLeft = timeline.scrollLeft;
        });

        timeline.addEventListener('touchmove', e => {
            if (!this.isDragging) return;
            const x = e.touches[0].pageX - timeline.offsetLeft;
            const walk = (x - this.startX) * this.scrollSpeed;

            if (Math.abs(x - this.startX) > this.dragThreshold) this.hasDragged = true;

            timeline.scrollLeft = this.scrollLeft - walk;
        });

        timeline.addEventListener('touchend', e => {
            this.isDragging = false;
            if (this.hasDragged) snapToNearestItem();
        });

    }
}

// Global olarak erişilebilir
window.TimelineComponent = TimelineComponent;
