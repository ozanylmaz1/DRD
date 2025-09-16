class ThreeStepsComponent {
    constructor() {
        this.componentName = 'threesteps';
    }

    render() {
        return `
            <section id="threesteps-section" class="threesteps">
                <div id="threesteps-content">
                    <h2 id="threesteps-title">
                        Sadece 3 adımda yeni araçlarınızı kiralayın
                    </h2>

                    <h3 id="threesteps-step1-title">1- İhtiyaçlarınızı belirleyelim</h3>
                    <p id="threesteps-step1-description">İşletmenizin ihtiyaçlarınızı göz önünde bulundurarak en uygun kiralama paketini birlikte oluşturalım.</p>

                    <h3 id="threesteps-step2-title">
                        2- Size özel çözümler sunalım
                    </h3>
                    <p id="threesteps-step2-description">Esnek ve özelleştirilmiş filo çözümleri ile iş süreçlerinizi destekleyelim, dilediğiniz aracı size sunalım.</p>

                    <h3 id="threesteps-step3-title">
                        3- Eşsiz bir filo deneyimi yaşayın
                    </h3>
                    <p id="threesteps-step3-description">Filo yönetiminde sorunsuz ve verimli bir deneyim sunalım. Bakım, onarım, lastik gibi tüm operasyonel yüklerinizi biz üstlenelim, siz sadece sürüş keyfini yaşayın.</p>
                    <br />
                    <span id="threesteps-links">
                        <a id="threesteps-link-1" class="threesteps-link-1" href="">Teklif Al</a>
                        <a id="threesteps-link-2" href="#" class="threesteps-link-2">
                            Size Özel Fırsatlar
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                            </svg>
                        </a>
                    </span>
                </div>
                <img id="threesteps-image" src="https://drdcmsv2.taigalab.com/Files/img/ortak-alan/3adimdaarackiralayin.jpg" />
            </section>
        `;
    }

    mount(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            container.innerHTML = this.render();
            this.initEventHandlers();
        }
    }

    initEventHandlers() {
        // Teklif Al linki için event handler
        const teklifLink = document.getElementById('threesteps-link-1');
        if (teklifLink) {
            teklifLink.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Teklif Al linkine tıklandı');
                // Burada teklif alma sayfasına yönlendirme yapılabilir
                // window.location.href = '/teklif-al';
            });
        }

        // Size Özel Fırsatlar linki için event handler
        const firsatLink = document.getElementById('threesteps-link-2');
        if (firsatLink) {
            firsatLink.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Size Özel Fırsatlar linkine tıklandı');
                // Burada fırsatlar sayfasına yönlendirme yapılabilir
                // window.location.href = '/ozel-firsatlar';
            });
        }

        // Resim için lazy loading (performans için)
        const image = document.getElementById('threesteps-image');
        if (image) {
            image.addEventListener('load', () => {
                console.log('Three steps image loaded successfully');
            });
            
            image.addEventListener('error', () => {
                console.error('Three steps image failed to load');
            });
        }
    }

    // Component metodları
    updateStepContent(stepNumber, title, description) {
        const titleElement = document.getElementById(`threesteps-step${stepNumber}-title`);
        const descElement = document.getElementById(`threesteps-step${stepNumber}-description`);
        
        if (titleElement) titleElement.textContent = title;
        if (descElement) descElement.textContent = description;
    }

    updateMainTitle(newTitle) {
        const titleElement = document.getElementById('threesteps-title');
        if (titleElement) titleElement.textContent = newTitle;
    }

    updateImage(newImageUrl) {
        const imageElement = document.getElementById('threesteps-image');
        if (imageElement) imageElement.src = newImageUrl;
    }
}

// Global olarak erişilebilir hale getir
window.ThreeStepsComponent = ThreeStepsComponent;

