class CuriositiesComponent {
    constructor() {
        this.componentName = 'curiosities';
    }

    render() {
        return `
            <section id="curiosities-section" class="curiosities">
                <div id="curiosities-content" style="max-width: 450px;">
                    <h2 id="curiosities-title">Filo kiralama ile ilgili merak edilenler</h2>
                    <p id="curiosities-description">Filo kiralama hakkında merak ettiğiniz tüm soruların cevaplarını burada bulabilirsiniz.</p>
                    <a href="sikca-sorulan-sorular.html" class="curiosities-link">
                        Tüm SSS'leri okuyun
                    </a>
                </div>
                <div id="curiosities-accordion">
                    <div class="accordion-container">
                        <div id="accordion-item-1" class="accordion-item">
                            <h6 id="accordion-header-1" class="accordion-header">
                                Filo kiralama nedir ve nasıl çalışır?
                                <span id="icon-sss-1" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-1" class="accordion-content" style="display: none;">
                                <p>Filo kiralama, bir veya birden fazla aracın işletmeler tarafından uzun vadeli olarak kiralanmasıdır. Araçların tüm operasyonel yönetimi DRD Filo Kiralama tarafından gerçekleştirilir, bu da işletmelere zaman ve maliyet avantajı sağlar.</p>
                            </div>
                        </div>
                        <div id="accordion-item-2" class="accordion-item">
                            <h6 id="accordion-header-2" class="accordion-header">
                                Filo kiralama ile araç satın alma arasındaki fark nedir?
                                <span id="icon-sss-2" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-2" class="accordion-content" style="display: none;">
                                <p>Araç satın alırken yüksek peşin maliyetler ve zaman içinde bakım, sigorta gibi ek harcamalar yapılır. Filo kiralamada ise bu masraflar dahildir ve aylık sabit ödemelerle işletme nakit akışı rahatlatılır.</p>
                            </div>
                        </div>
                        <div id="accordion-item-3" class="accordion-item">
                            <h6 id="accordion-header-3" class="accordion-header">
                                Filo kiralama sözleşmesi hangi süreler için yapılabilir?
                                <span id="icon-sss-3" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-3" class="accordion-content" style="display: none;">
                                <p>Filo kiralama sözleşmeleri 12 ve 24 aylık gibi uzun sürelerle yapılır.</p>
                            </div>
                        </div>
                        <div id="accordion-item-4" class="accordion-item">
                            <h6 id="accordion-header-4" class="accordion-header">
                                Filo kiralama maliyeti neleri içerir?
                                <span id="icon-sss-4" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-4" class="accordion-content" style="display: none;">
                                <p>Maliyet; bakım, sigorta, kasko, vergi, lastik gibi hizmetleri içerir. Detaylar sözleşme koşullarına göre şekillenir.</p>
                            </div>
                        </div>
                        <div id="accordion-item-5" class="accordion-item">
                            <h6 id="accordion-header-5" class="accordion-header">
                                Araç bakım ve onarım işlemleri kiralama sürecinde kimin sorumluluğundadır?
                                <span id="icon-sss-5" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-5" class="accordion-content" style="display: none;">
                                <p>Bakım ve onarım işlemleri DRD Filo Kiralama tarafından organize edilir ve bu hizmetler maliyete dahil edilir.</p>
                            </div>
                        </div>
                        <div id="accordion-item-6" class="accordion-item">
                            <h6 id="accordion-header-6" class="accordion-header">
                                Filo kiralama için gereken belgeler ve prosedürler nelerdir?
                                <span id="icon-sss-6" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-6" class="accordion-content" style="display: none;">
                                <p>Filo kiralama için işletmenizin vergi levhası, imza sirküleri ve ticaret sicil gazetesi gibi belgeler gereklidir. Belgeler, başvuru sırasında DRD Filo Kiralama tarafından talep edilir.</p>
                            </div>
                        </div>
                        <div id="accordion-item-7" class="accordion-item">
                            <h6 id="accordion-header-7" class="accordion-header">
                                Kiraladığım araçlarda kış lastiği hizmeti sunuluyor mu?
                                <span id="icon-sss-7" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-7" class="accordion-content" style="display: none;">
                                <p>Kiraladığınız araçlarda kış lastiği hizmeti maliyete dahil olarak sunulmaktadır.</p>
                            </div>
                        </div>
                        <div id="accordion-item-8" class="accordion-item">
                            <h6 id="accordion-header-8" class="accordion-header">
                                Filo kiralama vergisel avantajlar sağlar mı?
                                <span id="icon-sss-8" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-8" class="accordion-content" style="display: none;">
                                <p>Filo kiralama işletmeler için vergisel avantajlar sağlayabilir. Ödenen kiralama bedelleri gider olarak gösterilerek vergi matrahı düşürülebilir.</p>
                            </div>
                        </div>
                        <div id="accordion-item-9" class="accordion-item">
                            <h6 id="accordion-header-9" class="accordion-header">
                                Araçlarda kilometre sınırı var mı?
                                <span id="icon-sss-9" class="icon-sss">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </h6>
                            <div id="accordion-content-9" class="accordion-content" style="display: none;">
                                <p>Evet, filo kiralama sözleşmelerinde yıllık belirli bir kilometre sınırı bulunur. Bu sınırın aşılması durumunda ek ücret talep edilebilir.</p>
                            </div>
                        </div>
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
            this.initAccordionHandlers();
        }
    }

    initAccordionHandlers() {
        // Use the global accordion component
        if (window.AccordionComponent) {
            AccordionComponent.initAccordionHandlers();
        }

        // Curiosities link için event handler
        const curiositiesLink = document.getElementById('curiosities-link');
        if (curiositiesLink) {
            curiositiesLink.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Tüm SSS\'leri okuyun linkine tıklandı');
                // Burada SSS sayfasına yönlendirme yapılabilir
                // window.location.href = '/sss';
            });
        }
    }

    // Component metodları
    updateTitle(newTitle) {
        const titleElement = document.getElementById('curiosities-title');
        if (titleElement) titleElement.textContent = newTitle;
    }

    updateDescription(newDescription) {
        const descElement = document.getElementById('curiosities-description');
        if (descElement) descElement.textContent = newDescription;
    }

    openAccordion(itemNumber) {
        this.toggleAccordion(itemNumber);
    }
}

// Global olarak erişilebilir hale getir
window.CuriositiesComponent = CuriositiesComponent;
