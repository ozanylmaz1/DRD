// Comparison Table Component
class ComparisonTable {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        const comparisonData = [
            {
                feature: "Düşük başlangıç maliyetleri",
                leasing: true,
                buying: false
            },
            {
                feature: "Sermaye ihtiyacı",
                leasing: false,
                buying: true
            },
            {
                feature: "İkinci el riski",
                leasing: false,
                buying: true
            },
            {
                feature: "Amortisman kaybı",
                leasing: false,
                buying: true
            },
            {
                feature: "Vergi avantajları",
                leasing: true,
                buying: false
            },
            {
                feature: "Sabit ve öngörülebilir maliyetler",
                leasing: true,
                buying: false
            },
            {
                feature: "Esneklik",
                leasing: true,
                buying: false
            },
            {
                feature: "Yönetim kolaylığı",
                leasing: true,
                buying: false
            },
            {
                feature: "Operasyonel verimlilik",
                leasing: true,
                buying: false
            }
        ];

        const tableHTML = `
            <section class="comparison-section">
            <div class="section-head" style="max-width:700px">
            <h2>Kiralama ve satın alma arasındaki fark nedir?</h2>
            </div>
                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th></th>
                           
                            <th>KİRALAMA</th>
                             <th>SATIN ALMA</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${comparisonData.map(item => `
                            <tr>
                                <td>${item.feature}</td>
                               
                                <td>
                                    <span class="checkmark ${item.leasing ? 'checked' : 'unchecked'}">
                                        ${item.leasing ?
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                            </svg>` :
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708"/>
                                            </svg>`
            }
                                    </span>
                                </td>

                                 <td>
                                    <span class="checkmark ${item.buying ? 'checked' : 'unchecked'}">
                                        ${item.buying ?
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                                            </svg>` :
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slash-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                                <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708"/>
                                            </svg>`
            }
                                    </span>
                                </td>
                            </tr>
                        `).join('')}
                        <tr>
                            <td></td>
                            
                            <td style="text-align: center; padding: 20px;">
                                <a href="araclar.html" class="comparison-button">Araç Bul</button>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `;

        this.container.innerHTML = tableHTML;
    }
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const comparisonContainers = document.querySelectorAll('.comparison-table-container');
    comparisonContainers.forEach(container => {
        new ComparisonTable(container);
    });
});
