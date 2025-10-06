// Vehicle data - comprehensive list of vehicles
const vehicleData = [
    // Alfa Romeo
    {
        id: 1,
        brand: 'Alfa Romeo',
        model: 'Tonale Veloce 1.3 280 Plug-in Hybrid eAWD',
        fuelType: 'Hibrit',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-2.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/alfa-romeo-tonale-ti-16-diesel-130-dct/alfa-romeo-tonale-ti-16-diesel-130-dct-3.jpg'
        ],
    },
    // Audi
    {
        id: 2,
        brand: 'Audi',
        model: 'A6 40 2.0 TDI Quattro 204 Design S Tronic',
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        vehicleType: 'Sedan',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-a6-40-20-tdi-quattro-204-design-s-tronic/audi-a6-40-20-tdi-quattro-204-design-s-tronic-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-a6-40-20-tdi-quattro-204-design-s-tronic/audi-a6-40-20-tdi-quattro-204-design-s-tronic-2.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-a6-40-20-tdi-quattro-204-design-s-tronic/audi-a6-40-20-tdi-quattro-204-design-s-tronic-3.jpg'
        ],
    },
    // BMW
    {
        id: 3,
        brand: 'BMW',
        model: '520d xDrive Sedan 2.0 190 M Sport',
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        vehicleType: 'Sedan',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-520d-xdrive-sedan-20-190-m-sport/bmw-520d-xdrive-sedan-20-190-m-sport-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-520d-xdrive-sedan-20-190-m-sport/bmw-520d-xdrive-sedan-20-190-m-sport-2.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-520d-xdrive-sedan-20-190-m-sport/bmw-520d-xdrive-sedan-20-190-m-sport-3.jpg'
        ],
    },
    {
        id: 4,
        brand: 'BMW',
        model: 'i4 eDrive40',
        fuelType: 'Elektrikli',
        transmission: 'Otomatik',
        vehicleType: 'Sedan',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-i4-edrive40/bmw-i4-edrive40-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-i4-edrive40/bmw-i4-edrive40-2.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-i4-edrive40/bmw-i4-edrive40-3.jpg'
        ],
    },
    // Dacia
    {
        id: 5,
        brand: 'Dacia',
        model: 'Lodgy Stepway 1.5 BlueDCl 115 7K E6D Full',
        fuelType: 'Dizel',
        transmission: 'Manuel',
        vehicleType: 'MPV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/dacia-lodgy-stepway-15-bluedci-115-7k-e6d-full/dacia-lodgy-stepway-15-bluedci-115-7k-e6d-full-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/dacia-lodgy-stepway-15-bluedci-115-7k-e6d-full/dacia-lodgy-stepway-15-bluedci-115-7k-e6d-full-2.jpg'
        ],
    },
    // Peugeot
    {
        id: 6,
        brand: 'Peugeot',
        model: '3008 Allure 1.5 BlueHDi 130 EAT8',
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/peugeot-3008-allure-15-bluehdi-130-eat8/peugeot-3008-allure-15-bluehdi-130-eat8-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/peugeot-3008-allure-15-bluehdi-130-eat8/peugeot-3008-allure-15-bluehdi-130-eat8-2.jpg'
        ],
    },
    // Volkswagen Polo
    {
        id: 7,
        brand: 'Volkswagen',
        model: 'Polo 1.0 TSI 95 DSG Style',
        fuelType: 'Benzin',
        transmission: 'Yarı Otomatik',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/volkswagen-polo10-tsi-95-dsg-life/volkswagen-polo10-tsi-95-dsg-life-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/volkswagen-polo10-tsi-95-dsg-life/volkswagen-polo10-tsi-95-dsg-life-2.jpg'
        ],
    },
    // Volkswagen ID.4
    {
        id: 8,
        brand: 'Volkswagen',
        model: 'ID.4',
        fuelType: 'Elektrikli',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/volkswagen-id4/volkswagen-id4-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/volkswagen-id4/volkswagen-id4-2.jpg'
        ],
    },
    // Tesla Model 3
    {
        id: 9,
        brand: 'Tesla',
        model: 'Model 3 Long Range',
        fuelType: 'Elektrikli',
        transmission: 'Otomatik',
        vehicleType: 'Sedan',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/tesla-model-3-long-range/tesla-model-3-long-range-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/tesla-model-3-long-range/tesla-model-3-long-range-2.jpg'
        ],
    },
    // Tesla Model Y
    {
        id: 10,
        brand: 'Tesla',
        model: 'Model Y Long Range',
        fuelType: 'Elektrikli',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/tesla-model-y-long-range/tesla-model-y-long-range-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/tesla-model-y-long-range/tesla-model-y-long-range-2.jpg'
        ],
    },
    // Mercedes EQS
    {
        id: 11,
        brand: 'Mercedes',
        model: 'EQS 450',
        fuelType: 'Elektrikli',
        transmission: 'Otomatik',
        vehicleType: 'Sedan',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/mercedes-eqs-450/mercedes-eqs-450-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/mercedes-eqs-450/mercedes-eqs-450-2.jpg'
        ],
    },
    // Ford Focus
    {
        id: 12,
        brand: 'Ford',
        model: 'Focus 1.0 EcoBoost 125 ST-Line',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/ford-focus-10-ecoboost-125-st-line/ford-focus-10-ecoboost-125-st-line-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/ford-focus-10-ecoboost-125-st-line/ford-focus-10-ecoboost-125-st-line-2.jpg'
        ],
    },
    // Audi Q2
    {
        id: 13,
        brand: 'Audi',
        model: 'Q2 35 TFSI 150 Advanced S Tronic',
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-q2-35-tfsi-150-advanced-s-tronic/audi-q2-35-tfsi-150-advanced-s-tronic-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-q2-35-tfsi-150-advanced-s-tronic/audi-q2-35-tfsi-150-advanced-s-tronic-2.jpg'
        ],
    },
    // Audi Q3
    {
        id: 14,
        brand: 'Audi',
        model: 'Q3 35 TFSI 150 Advanced S Tronic',
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-q3-35-tfsi-150-advanced-s-tronic/audi-q3-35-tfsi-150-advanced-s-tronic-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/audi-q3-35-tfsi-150-advanced-s-tronic/audi-q3-35-tfsi-150-advanced-s-tronic-2.jpg'
        ],
    },
    // Mercedes C-Class
    {
        id: 15,
        brand: 'Mercedes',
        model: 'C-Class 200 1.5 AMG Line',
        fuelType: 'Benzin',
        transmission: 'Otomatik',
        vehicleType: 'Sedan',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/mercedes-c-class-200-15-amg-line/mercedes-c-class-200-15-amg-line-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/mercedes-c-class-200-15-amg-line/mercedes-c-class-200-15-amg-line-2.jpg'
        ],
    },
    // BMW X3
    {
        id: 16,
        brand: 'BMW',
        model: 'X3 xDrive20d 2.0 M Sport',
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-x3-xdrive20d-20-m-sport/bmw-x3-xdrive20d-20-m-sport-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/bmw-x3-xdrive20d-20-m-sport/bmw-x3-xdrive20d-20-m-sport-2.jpg'
        ],
    },
    // Volkswagen Golf
    {
        id: 17,
        brand: 'Volkswagen',
        model: 'Golf 1.5 TSI 150 Life',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/volkswagen-golf-15-tsi-150-life/volkswagen-golf-15-tsi-150-life-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/volkswagen-golf-15-tsi-150-life/volkswagen-golf-15-tsi-150-life-2.jpg'
        ],
    },
    // Peugeot 208
    {
        id: 18,
        brand: 'Peugeot',
        model: '208 1.2 PureTech 100 Allure',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/peugeot-208-12-puretech-100-allure/peugeot-208-12-puretech-100-allure-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/peugeot-208-12-puretech-100-allure/peugeot-208-12-puretech-100-allure-2.jpg'
        ],
    },
    // Renault Clio
    {
        id: 19,
        brand: 'Renault',
        model: 'Clio 1.0 TCe 100 Icon',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/renault-clio-10-tce-100-icon/renault-clio-10-tce-100-icon-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/renault-clio-10-tce-100-icon/renault-clio-10-tce-100-icon-2.jpg'
        ],
    },
    // Hyundai i20
    {
        id: 20,
        brand: 'Hyundai',
        model: 'i20 1.0 T-GDi 120 Premium',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/hyundai-i20-10-t-gdi-120-premium/hyundai-i20-10-t-gdi-120-premium-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/hyundai-i20-10-t-gdi-120-premium/hyundai-i20-10-t-gdi-120-premium-2.jpg'
        ],
    },
    // Kia Sportage
    {
        id: 21,
        brand: 'Kia',
        model: 'Sportage 1.6 CRDi 136 GT Line',
        fuelType: 'Dizel',
        transmission: 'Otomatik',
        vehicleType: 'SUV',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/kia-sportage-16-crdi-136-gt-line/kia-sportage-16-crdi-136-gt-line-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/kia-sportage-16-crdi-136-gt-line/kia-sportage-16-crdi-136-gt-line-2.jpg'
        ],
    },
    // Skoda Octavia
    {
        id: 22,
        brand: 'Skoda',
        model: 'Octavia 1.5 TSI 150 Style',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Sedan',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/skoda-octavia-15-tsi-150-style/skoda-octavia-15-tsi-150-style-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/skoda-octavia-15-tsi-150-style/skoda-octavia-15-tsi-150-style-2.jpg'
        ],
    },
    // Citroen C3
    {
        id: 23,
        brand: 'Citroen',
        model: 'C3 1.2 PureTech 110 Shine',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/citroen-c3-12-puretech-110-shine/citroen-c3-12-puretech-110-shine-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/citroen-c3-12-puretech-110-shine/citroen-c3-12-puretech-110-shine-2.jpg'
        ],
    },
    // Opel Astra
    {
        id: 24,
        brand: 'Opel',
        model: 'Astra 1.4 Turbo 150 Elegance',
        fuelType: 'Benzin',
        transmission: 'Manuel',
        vehicleType: 'Hatchback',
        images: [
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/opel-astra-14-turbo-150-elegance/opel-astra-14-turbo-150-elegance-1.jpg',
            'https://drdcmsv2.taigalab.com/Files/img/CarImages/2025/opel-astra-14-turbo-150-elegance/opel-astra-14-turbo-150-elegance-2.jpg'
        ],
    }
];

// Pagination variables
let currentPage = 1;
const vehiclesPerPage = 12;
let filteredVehicles = [];

function initVehicleFilters() {
    const filterForm = document.getElementById('vehicle-filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            filterVehicles();
        });
    }

    // Add change listeners to all filter inputs
    const filterInputs = document.querySelectorAll('#vehicle-filter-form select, #vehicle-filter-form input');
    filterInputs.forEach(input => {
        input.addEventListener('change', filterVehicles);
    });
}

function filterVehicles() {
    // Checkbox'lardan seçili değerleri al
    const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
    const selectedFuelTypes = Array.from(document.querySelectorAll('input[name="fuel-type"]:checked')).map(cb => cb.value.toLowerCase());
    const selectedTransmissions = Array.from(document.querySelectorAll('input[name="transmission"]:checked')).map(cb => cb.value.toLowerCase());
    const selectedVehicleTypes = Array.from(document.querySelectorAll('input[name="vehicle-type"]:checked')).map(cb => cb.value.toLowerCase());

    filteredVehicles = vehicleData.filter(vehicle => {
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(vehicle.brand);
        const matchesFuelType = selectedFuelTypes.length === 0 || selectedFuelTypes.includes(vehicle.fuelType.toLowerCase());
        const matchesTransmission = selectedTransmissions.length === 0 || selectedTransmissions.includes(vehicle.transmission.toLowerCase());
        const matchesVehicleType = selectedVehicleTypes.length === 0 || selectedVehicleTypes.includes(vehicle.vehicleType.toLowerCase());

        return matchesBrand && matchesFuelType && matchesTransmission && matchesVehicleType;
    });

    currentPage = 1;
    displayVehicles(filteredVehicles);
}
function displayAllVehicles() {
    filteredVehicles = [...vehicleData];
    currentPage = 1;
    displayVehicles(filteredVehicles);
}

function displayVehicles(vehicles) {
    const vehiclesContainer = document.getElementById('vehicles-container');
    const resultsCount = document.getElementById('results-count');
    const paginationContainer = document.getElementById('pagination-container');

    if (!vehiclesContainer) return;

    // Update results count
    if (resultsCount) {
        if (vehicles.length === 0) {
            resultsCount.textContent = '0 Araç Listeleniyor';
        } else {
            resultsCount.textContent = `${vehicles.length} Araç Listeleniyor`;
        }
    }

    if (vehicles.length === 0) {
        vehiclesContainer.innerHTML = `
            <div class="no-results">
                <h3>Arama kriterlerinize uygun araç bulunamadı.</h3>
                <p>Farklı filtreler deneyebilir veya tüm filtreleri temizleyebilirsiniz.</p>
            </div>
        `;
        if (paginationContainer) {
            paginationContainer.innerHTML = '';
        }
        return;
    }

    // Calculate pagination
    const totalPages = Math.ceil(vehicles.length / vehiclesPerPage);
    const startIndex = (currentPage - 1) * vehiclesPerPage;
    const endIndex = startIndex + vehiclesPerPage;
    const currentVehicles = vehicles.slice(startIndex, endIndex);

    // Display current page vehicles
    const vehiclesHTML = currentVehicles.map(vehicle => {
        const primaryImage = vehicle.images ? vehicle.images[0] : vehicle.image;
        const hasMultipleImages = vehicle.images && vehicle.images.length > 1;

        return `
            <a href="#" class="vehicle-card" data-vehicle-id="${vehicle.id}" onclick="showVehicleDetail(${vehicle.id}); return false;">
                <div class="vehicle-image ${hasMultipleImages ? 'has-carousel' : ''}" 
                     ${hasMultipleImages ? `data-images='${JSON.stringify(vehicle.images)}'` : ''}>
                    <img src="${primaryImage}" alt="${vehicle.model}" loading="lazy" class="primary-image">
                    ${hasMultipleImages ? `
                        <div class="image-indicators">
                            ${vehicle.images.map((_, index) => `
                                <span class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="vehicle-info">
                    <h6 class="car-name">${vehicle.model}</h6>
                    <p class="car-specifications">
                        <span class="spec-item">${vehicle.fuelType}</span> / 
                        <span class="spec-item">${vehicle.transmission}</span> / 
                        <span class="spec-item">${vehicle.vehicleType}</span>
                    </p>
                </div>
            </a>
        `;
    }).join('');

    vehiclesContainer.innerHTML = vehiclesHTML;

    // Initialize image carousels
    initImageCarousels();

    // Display pagination
    if (paginationContainer && totalPages > 1) {
        displayPagination(totalPages);
    } else if (paginationContainer) {
        paginationContainer.innerHTML = '';
    }
}
function displayPagination(totalPages) {
    const paginationContainer = document.getElementById('pagination-container');
    if (!paginationContainer) return;

    let paginationHTML = '';

    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage - 1})">‹</button>`;
    }

    // First page
    paginationHTML += `<button class="pagination-btn ${currentPage === 1 ? 'active' : ''}" onclick="goToPage(1)">1</button>`;

    // Middle pages
    if (totalPages <= 7) {
        // Show all pages if 7 or less
        for (let i = 2; i <= totalPages - 1; i++) {
            paginationHTML += `<button class="pagination-btn ${currentPage === i ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
        }
    } else {
        // Show smart pagination
        if (currentPage > 4) {
            paginationHTML += `<span class="pagination-dots">...</span>`;
        }

        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        if (currentPage <= 4) {
            endPage = 4;
        } else if (currentPage >= totalPages - 3) {
            startPage = totalPages - 3;
        }

        for (let i = startPage; i <= endPage; i++) {
            if (i !== 1 && i !== totalPages) {
                paginationHTML += `<button class="pagination-btn ${currentPage === i ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
            }
        }

        if (currentPage < totalPages - 3) {
            paginationHTML += `<span class="pagination-dots">...</span>`;
        }
    }

    // Last page
    if (totalPages > 1) {
        paginationHTML += `<button class="pagination-btn ${currentPage === totalPages ? 'active' : ''}" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage + 1})">›</button>`;
    }

    paginationContainer.innerHTML = paginationHTML;
}

function goToPage(page) {
    currentPage = page;
    displayVehicles(filteredVehicles);
    
    // Scroll to top of vehicles section
    const vehiclesSection = document.querySelector('.vehicle-display');
    if (vehiclesSection) {
        vehiclesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function initBrandSelection() {
    const brandSelect = document.getElementById('brand-filter');
    if (!brandSelect) return;

    const brands = [...new Set(vehicleData.map(vehicle => vehicle.brand))].sort();
    brandSelect.innerHTML = '<option value="">Tüm Markalar</option>' + 
        brands.map(brand => `<option value="${brand}">${brand}</option>`).join('');
}

function clearFilters() {
    document.getElementById('vehicle-filter-form').reset();
    currentPage = 1;
    displayAllVehicles();
}

function showVehicleDetail(vehicleId) {
    const vehicle = vehicleData.find(v => v.id === vehicleId);
    if (vehicle) {
        alert(`Detay Bilgileri:\n\nMarka: ${vehicle.brand}\nModel: ${vehicle.model}\nYakıt: ${vehicle.fuelType}\nVites: ${vehicle.transmission}`);
    }
}

function requestOffer(vehicleId) {
    const vehicle = vehicleData.find(v => v.id === vehicleId);
    if (vehicle) {
        window.location.href = `teklif-al.html?vehicle=${vehicleId}&model=${encodeURIComponent(vehicle.model)}`;
    }
}

// Sort functionality
function sortVehicles(sortBy) {
    const vehiclesContainer = document.getElementById('vehicles-container');
    const vehicleCards = Array.from(vehiclesContainer.querySelectorAll('.vehicle-card'));
    
    vehicleCards.sort((a, b) => {
        const vehicleA = vehicleData.find(v => v.id === parseInt(a.dataset.vehicleId));
        const vehicleB = vehicleData.find(v => v.id === parseInt(b.dataset.vehicleId));
        
        switch(sortBy) {
            case 'price-low':
                return parseInt(vehicleA.price.replace(/[^\d]/g, '')) - parseInt(vehicleB.price.replace(/[^\d]/g, ''));
            case 'price-high':
                return parseInt(vehicleB.price.replace(/[^\d]/g, '')) - parseInt(vehicleA.price.replace(/[^\d]/g, ''));
            case 'brand':
                return vehicleA.brand.localeCompare(vehicleB.brand);
            case 'year':
                return vehicleB.year - vehicleA.year;
            default:
                return 0;
        }
    });
    
    vehicleCards.forEach(card => vehiclesContainer.appendChild(card));
}

function initImageCarousels() {
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    vehicleCards.forEach(card => {
        const imageContainer = card.querySelector('.vehicle-image.has-carousel');
        if (!imageContainer) return;

        const images = JSON.parse(imageContainer.dataset.images);
        const img = imageContainer.querySelector('img');
        const indicators = imageContainer.querySelectorAll('.indicator');

        let currentIndex = 0;
        let interval = null;

        card.addEventListener('mouseenter', () => {
            if (images.length <= 1) return;
            if (interval) return;

            interval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % images.length;
                img.classList.add('slide-out');
                setTimeout(() => {
                    img.src = images[nextIndex];
                    img.classList.remove('slide-out');
                    img.classList.add('slide-in');
                    currentIndex = nextIndex;
                    indicators.forEach((indicator, index) => {
                        indicator.classList.toggle('active', index === currentIndex);
                    });
                    setTimeout(() => {
                        img.classList.remove('slide-in');
                    }); 

                }); 

            }, 600); 
        });

        card.addEventListener('mouseleave', () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
            currentIndex = 0;
            img.src = images[0];
            img.classList.remove('slide-out');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === 0);
            });
        });
    });
}// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initVehicleFilters();
    displayAllVehicles();
    initBrandSelection();
});

