class AccordionComponent {
    constructor() {
        this.componentName = 'accordion';
    }

    // Static accordion functionality that can be used anywhere
    static initAccordionHandlers() {
        // Tüm accordion header'ları için event listener ekle
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach((header) => {
            // Remove existing listeners to prevent duplicates
            header.removeEventListener('click', AccordionComponent.handleAccordionClick);
            header.addEventListener('click', AccordionComponent.handleAccordionClick);
        });
    }

    static handleAccordionClick(event) {
        const clickedHeader = event.currentTarget;
        AccordionComponent.toggleAccordion(clickedHeader);
    }

    static toggleAccordion(clickedHeader) {
        const accordionItem = clickedHeader.closest('.accordion-item');
        const content = accordionItem.querySelector('.accordion-content');
        const icon = clickedHeader.querySelector('.icon-sss');

        if (!content || !icon) return;

        // Eğer bu accordion zaten açıksa kapat
        if (content.style.display === 'block') {
            content.style.display = 'none';
            clickedHeader.classList.remove('active');
            icon.style.transform = 'rotate(0deg)';
        } else {
            // Diğer tüm accordion'ları kapat
            AccordionComponent.closeAllAccordions();
            
            // Bu accordion'u aç
            content.style.display = 'block';
            clickedHeader.classList.add('active');
            icon.style.transform = 'rotate(180deg)';
        }
    }

    static closeAllAccordions() {
        // Tüm accordion content'leri kapat
        const allContents = document.querySelectorAll('.accordion-content');
        const allHeaders = document.querySelectorAll('.accordion-header');
        const allIcons = document.querySelectorAll('.icon-sss');
        
        allContents.forEach(content => {
            content.style.display = 'none';
        });
        
        allHeaders.forEach(header => {
            header.classList.remove('active');
        });
        
        allIcons.forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
    }

    // Instance methods for component-based usage
    render() {
        return `
            <div class="accordion-container">
                <!-- Accordion items will be added here -->
            </div>
        `;
    }

    mount(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        if (container) {
            container.innerHTML = this.render();
            AccordionComponent.initAccordionHandlers();
        }
    }

    // Add accordion item dynamically
    addAccordionItem(title, content, id = null) {
        const container = document.querySelector('.accordion-container');
        if (!container) return;

        const itemId = id || `accordion-item-${Date.now()}`;
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.id = itemId;
        
        accordionItem.innerHTML = `
            <h6 class="accordion-header">
                ${title}
                <span class="icon-sss">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    </svg>
                </span>
            </h6>
            <div class="accordion-content" style="display: none;">
                ${content}
            </div>
        `;
        
        container.appendChild(accordionItem);
        
        // Re-initialize handlers for the new item
        AccordionComponent.initAccordionHandlers();
    }

    // Open specific accordion by index
    openAccordion(index) {
        const headers = document.querySelectorAll('.accordion-header');
        if (headers[index]) {
            AccordionComponent.toggleAccordion(headers[index]);
        }
    }

    // Close all accordions
    closeAll() {
        AccordionComponent.closeAllAccordions();
    }
}

// Global initialization function
window.initAccordionHandlers = AccordionComponent.initAccordionHandlers;
window.toggleAccordion = AccordionComponent.toggleAccordion;
window.closeAllAccordions = AccordionComponent.closeAllAccordions;

// Global olarak erişilebilir hale getir
window.AccordionComponent = AccordionComponent;

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    AccordionComponent.initAccordionHandlers();
});
