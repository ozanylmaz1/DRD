// Component Loader - Tüm componentleri yükler ve yönetir
class ComponentLoader {
    constructor() {
        this.components = {};
        this.loadedComponents = new Set();
    }

    // Component'i kaydet
    register(name, componentClass) {
        this.components[name] = componentClass;
    }

    // Component'i mount et
    mount(componentName, containerSelector, pageType = null) {
        if (!this.components[componentName]) {
            console.error(`Component '${componentName}' bulunamadı!`);
            return;
        }

        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error(`Container '${containerSelector}' bulunamadı!`);
            return;
        }

        // Sayfa tipine göre component'i oluştur
        let component;
        if (pageType && componentName === 'curiosities') {
            component = new this.components[componentName](pageType);
        } else {
            component = new this.components[componentName]();
        }
        
        component.mount(container);
        this.loadedComponents.add(componentName);
        
        console.log(`Component '${componentName}' başarıyla yüklendi.`);
    }

    // Sayfa tipini algıla
    detectPageType() {
        const currentPath = window.location.pathname;
        const fileName = currentPath.split('/').pop().split('.')[0];
        
        // Sayfa tipine göre mapping
        const pageTypeMap = {
            'filo-yonetimi': 'fleet-management',
            'fleet-management': 'fleet-management'
        };
        
        return pageTypeMap[fileName] || 'default';
    }

    // Tüm componentleri mount et
    mountAll() {
        // Sayfa tipini algıla
        const pageType = this.detectPageType();
        
        // Nav component'ini body'nin başına ekle
        if (this.components['nav']) {
            const navContainer = document.createElement('div');
            navContainer.id = 'nav-container';
            document.body.insertBefore(navContainer, document.body.firstChild);
            this.mount('nav', '#nav-container');
        }

        // Diğer componentleri sırayla mount et
        const componentOrder = ['hero-slider', 'car-models', 'car-models-electric', 'car-brands', 'fleet-leasing', 'blog', 'news', 'widget', 'newsletter', 'threesteps', 'curiosities','special-campaign'];
        
        componentOrder.forEach(componentName => {
            if (this.components[componentName]) {
                const containerSelector = `#${componentName}-container`;
                const container = document.querySelector(containerSelector);
                if (container) {
                    // Curiosities component'i için sayfa tipini geç
                    if (componentName === 'curiosities') {
                        this.mount(componentName, containerSelector, pageType);
                    } else {
                        this.mount(componentName, containerSelector);
                    }
                }
            }
        });

        // İkinci threesteps container'ını mount et
        if (this.components['threesteps']) {
            const secondContainer = document.querySelector('#threesteps-container-2');
            if (secondContainer) {
                this.mount('threesteps', '#threesteps-container-2');
            }
        }
    }

    // Component'in yüklenip yüklenmediğini kontrol et
    isLoaded(componentName) {
        return this.loadedComponents.has(componentName);
    }

    // Tüm yüklenen componentleri listele
    getLoadedComponents() {
        return Array.from(this.loadedComponents);
    }
}

// Global component loader instance'ı oluştur
window.componentLoader = new ComponentLoader();

    // Component'leri kaydet
document.addEventListener('DOMContentLoaded', function() {
    // Component'lerin yüklenmesini bekle
    if (window.BlogComponent) componentLoader.register('blog', BlogComponent);
    if (window.CarBrandsComponent) componentLoader.register('car-brands', CarBrandsComponent);
    if (window.CarModelsComponent) componentLoader.register('car-models', CarModelsComponent);
    if (window.CarModelsElectricComponent) componentLoader.register('car-models-electric', CarModelsElectricComponent);
    if (window.FleetLeasingComponent) componentLoader.register('fleet-leasing', FleetLeasingComponent);
    if (window.NavComponent) componentLoader.register('nav', NavComponent);
    if (window.NewsComponent) componentLoader.register('news', NewsComponent);
    if (window.WidgetComponent) componentLoader.register('widget', WidgetComponent);
    if (window.NewsletterComponent) componentLoader.register('newsletter', NewsletterComponent);
    if (window.ThreeStepsComponent) componentLoader.register('threesteps', ThreeStepsComponent);
    if (window.CuriositiesComponent) componentLoader.register('curiosities', CuriositiesComponent);
    if (window.HeroSliderComponent) componentLoader.register('hero-slider', HeroSliderComponent);
    if (window.AccordionComponent) componentLoader.register('accordion', AccordionComponent);
    if (window.specialcampaignComponent) componentLoader.register('special-campaign', specialcampaignComponent);

    // Tüm componentleri mount et
    componentLoader.mountAll();
});
