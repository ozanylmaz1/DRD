class CarBrandsComponent {
    constructor() {
        this.componentName = 'car-brands';
    }

    render() {
        return `
            <section class="car-brands">
                <div class="section-head">
                    <h2>İstediğiniz Tüm Markalar</h2>
                    <a href=".html">
                        Listele
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </a>
                </div>
                <div class="car-brands-main">
                    <a id="brands-card-1" href="brands1">
                        <img id="brands-image-1" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/alfa-romeo/png/alfa-romeo-logo.png"
                             alt="Alfa-Romeo" />
                    </a>
                    <a id="brands-card-2" href="brands2">
                        <img id="brands-image-2" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/audi/png/audi-logo.png"
                             alt="Audi" />
                    </a>
                    <a id="brands-card-3" href="brands3">
                        <img id="brands-image-3" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/bmw/png/bmw-logo.png"
                             alt="BMW" />
                    </a>
                    <a id="brands-card-4" href="brands4">
                        <img id="brands-image-4" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/byd/png/byd-logo.png"
                             alt="BYD" />
                    </a>
                    <a id="brands-card-5" href="brands5">
                        <img id="brands-image-5" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/citroen/png/citroen-logo.png"
                             alt="Citroen" />
                    </a>
                    <a id="brands-card-6" href="brands6">
                        <img id="brands-image-6" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/cupra/png/cupra-logo.png"
                             alt="Cupra" />
                    </a>
                    <a id="brands-card-7" href="brands7">
                        <img id="brands-image-7" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/dacia/png/dacia-logo.png"
                             alt="Dacia" />
                    </a>
                    <a id="brands-card-8" href="brands8">
                        <img id="brands-image-8" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/fiat/Fiat-Logo.png"
                             alt="Fiat" />
                    </a>
                    <a id="brands-card-9" href="brands9">
                        <img id="brands-image-9" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/ford/png/ford-logo.png"
                             alt="Ford" />
                    </a>
                    <a id="brands-card-10" href="brands10">
                        <img id="brands-image-10" src="https://drdcmsv2.taigalab.com/Files/img/Brand/new-logo-brand/jeep/png/jeep-logo.png"
                             alt="Jeep" />
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
        }
    }
}

// Global olarak erişilebilir hale getir
window.CarBrandsComponent = CarBrandsComponent;
