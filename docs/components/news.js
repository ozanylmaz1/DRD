class NewsComponent {
    constructor() {
        this.componentName = 'news';
        // Sayfa kontrolü - bu sayfada listing linki gösterme
        const currentPage = window.location.pathname.split('/').pop();
        const pageTitle = document.title;
        this.showListingLink = !(
            currentPage === 'news.html' ||
            currentPage === 'bizden-haberler.html' ||
            pageTitle.includes('Bizden Haberler') ||
            document.body.classList.contains('news-page')
        );

        console.log('Current page:', currentPage);
        console.log('Show listing link:', this.showListingLink);
    }

    render() {
        const listingLinkHtml = this.showListingLink ? `
            <a href="bizden-haberler.html">
                Listele
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </a>
        ` : '';

        return `
    <section class="news">
        <div class="section-head">
            <h2 id="news-title">Bizden haberler</h2>
            ${listingLinkHtml}
        </div>
        <div class="blog-main">
            <a href="gulmek-iyilestirir-dernegi-ile-oyuncak-atolyesi.html" class="blog-card">
                <img id="news-image-1" class="blog-img" src="https://drdcmsv2.taigalab.com/Files/img/bizden-haberler/oyuncak-atolyesi.jpg" />
                <h2 id="news-title-1">Gülmek İyileştirir Derneği ile Oyuncak Atölyesi</h2>
                <p id="news-description-1">Ciddi hastalıklarla mücadele eden çocuklar için Gülmek İyileştirir Derneği iş birliğinde oyuncaklar tasarladık ve minik kalplere...</p>
                <span class="detail">
                    Detaylı İncele
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </span>
            </a>

            <a href="news2.html" id="news-card-2" class="blog-card">
                <img id="news-image-2" class="blog-img" src="https://drdcmsv2.taigalab.com/Files/img/bizden-haberler/10-kasim.jpg" />
                <h2 id="news-title-2">10 Kasım'da Ata'mızın Huzurundaydık</h2>
                <p id="news-description-2">Cumhuriyetimizin kurucusu Gazi Mustafa Kemal Atatürk'ü, aramızdan ayrılışının 86. Yılında Anıtkabir'de saygıyla andık.</p>
                <span class="detail">
                    Detaylı İncele
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </span>
            </a>

            <a href="news3.html" id="news-card-3" class="blog-card">
                <img id="news-image-3" class="blog-img" src="https://drdcmsv2.taigalab.com/Files/img/bizden-haberler/yilbasi01.jpg" />
                <h2 id="news-title-3">DRD ile Yılbaşı Eğlencesi de Bir Başka!</h2>
                <p id="news-description-3">Gökhan Tepe'nin sahne aldığı eğlence dolu programla 2025'e güçlü bir başlangıç yaptık.</p>
                <span class="detail">
                    Detaylı İncele
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </span>
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
            this.initEventHandlers();
        }
    }

    initEventHandlers() {
        // News listing link handler
    }

    // Component metodları
    updateTitle(newTitle) {
        const titleElement = document.getElementById('news-title');
        if (titleElement) titleElement.textContent = newTitle;
    }

    updateNewsItem(index, newsData) {
        const card = document.getElementById(`news-card-${index}`);
        const image = document.getElementById(`news-image-${index}`);
        const title = document.getElementById(`news-title-${index}`);
        const description = document.getElementById(`news-description-${index}`);

        if (card && newsData.href) {
            card.setAttribute('href', newsData.href);
        }
        if (image && newsData.image) {
            image.src = newsData.image;
        }
        if (title && newsData.title) {
            title.textContent = newsData.title;
        }
        if (description && newsData.description) {
            description.textContent = newsData.description;
        }
    }

    addNewsItem(newsData) {
        const blogMain = document.querySelector('.blog-main');
        if (blogMain && newsData) {
            const newCard = document.createElement('a');
            newCard.href = newsData.href || '#';
            newCard.className = 'blog-card';
            
            newCard.innerHTML = `
                <img class="blog-img" src="${newsData.image || ''}" />
                <h2>${newsData.title || ''}</h2>
                <p>${newsData.description || ''}</p>
                <span class="detail">
                    Detaylı İncele
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </span>
            `;
            
            blogMain.appendChild(newCard);
        }
    }
}

// Global olarak erişilebilir hale getir
window.NewsComponent = NewsComponent;




