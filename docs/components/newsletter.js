class NewsletterComponent {
    constructor() {
        this.componentName = 'newsletter';
    }

    render() {
        return `
            <section class="newsletter">
              <h2 class="lette">Fırsatlardan haberdar olun</h2>
              <p class="newsletter-text">
                En avantajlı kampanyalardan ve özel fırsatlardan ilk siz haberdar olun.
                Güncel teklifleri kaçırmamak için hemen kaydolun.
              </p>
              <div class="inputbar">
                <input type="email" id="newsletter-email" class="newsletter-input" placeholder="E-Posta">
                <button id="newsletter-submit-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#333" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </button>
              </div>
              <label>
                <input type="checkbox" id="newsletter-checkbox" />
                <a href="https://drdcmsv2.taigalab.com/tr/yasal-merkez#kvk-aydinlatma-metni">
                  KVKK ve Gizlilik Politikası koşullarını kabul ediyorum
                </a>
              </label>
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
        const emailInput = document.getElementById('newsletter-email');
        const submitBtn = document.getElementById('newsletter-submit-btn');
        const checkbox = document.getElementById('newsletter-checkbox');

        // Email validation
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Submit button click handler
        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                const email = emailInput.value.trim();
                const isChecked = checkbox.checked;

                if (!email) {
                    alert('Lütfen e-posta adresinizi girin.');
                    return;
                }

                if (!validateEmail(email)) {
                    alert('Lütfen geçerli bir e-posta adresi girin.');
                    return;
                }

                if (!isChecked) {
                    alert('Lütfen KVKK ve Gizlilik Politikası koşullarını kabul edin.');
                    return;
                }

                // Newsletter subscription logic
                console.log('Newsletter subscription:', email);
                alert('Başarıyla kaydoldunuz! Teşekkürler.');
                
                // Reset form
                emailInput.value = '';
                checkbox.checked = false;
            });
        }

        // Enter key handler for email input
        if (emailInput) {
            emailInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    submitBtn.click();
                }
            });
        }
    }
}

// Global olarak erişilebilir hale getir
window.NewsletterComponent = NewsletterComponent;
