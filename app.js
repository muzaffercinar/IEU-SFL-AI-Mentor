function analyzeText() {
    const input = document.getElementById('essayInput').value;
    const results = document.getElementById('results');
    const loading = document.getElementById('loading');
    
    if(!input || input.length < 10) { 
        alert("Lütfen analiz için yeterli uzunlukta bir İngilizce metin giriniz."); 
        return; 
    }

    loading.classList.remove('hidden');
    results.innerHTML = "";

    // AI Analiz Simülasyonu
    setTimeout(() => {
        loading.classList.add('hidden');
        
        const feedback = [
            { type: "Grammar & Accuracy", msg: "Excellent! Your use of 'Relative Clauses' shows high proficiency. Only one minor preposition error detected.", score: "9/10" },
            { type: "Vocabulary Range", msg: "You used 'Good' multiple times. Consider using academic synonyms like 'Remarkable' or 'Substantial' to boost your score.", score: "7/10" },
            { type: "Syllabus Alignment", msg: "Content matches 'Week 5: Academic Writing' goals perfectly. Well integrated with İEU SFL curriculum.", score: "100%" },
            { type: "TSE/Quality Note", msg: "Writing follows formal workplace documentation standards.", score: "Verified" }
        ];

        feedback.forEach(item => {
            results.innerHTML += `
                <div class="feedback-card">
                    <strong style="color:#003366">${item.type}:</strong><br>
                    <span style="font-size:14px">${item.msg}</span>
                    <span style="float:right; font-weight:bold; color:#FF8C00">${item.score}</span>
                </div>
            `;
        });
        
        initChart();
    }, 1500);
}

function initChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    // Clear old chart if exists
    if(window.myChart) window.myChart.destroy();
    
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Academic Performance Growth',
                data: [55, 68, 74, 89],
                borderColor: '#FF8C00',
                backgroundColor: 'rgba(255, 140, 0, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}