let startTime;
document.getElementById('essayInput').addEventListener('input', () => {
    if (!startTime) startTime = new Date();
});

function analyzeWithSecurity() {
    const input = document.getElementById('essayInput').value;
    if(input.length < 50) { alert("Analiz için en az 50 karakter yazmalısınız."); return; }

    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('security-report').classList.add('hidden');
    document.getElementById('results').innerHTML = "";

    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        
        // Simüle edilmiş AI Tespit ve Süre Analizi
        const endTime = new Date();
        const durationSeconds = (endTime - startTime) / 1000;
        const words = input.trim().split(/\s+/).length;
        const typingSpeed = (words / (durationSeconds / 60)).toFixed(0);

        let aiProbability = 15; // Düşük olasılık default
        if(input.includes("Furthermore") && input.includes("Moreover") && input.length > 200) aiProbability = 45;

        const report = document.getElementById('security-report');
        report.classList.remove('hidden');
        
        const isSafe = aiProbability < 40;
        report.className = `security-box ${isSafe ? 'safe' : 'warning'}`;
        report.innerHTML = `
            <div style="font-weight:bold; margin-bottom:5px;">🛡️ Akademik Dürüstlük Raporu (Hoca Paneli)</div>
            <div style="font-size:13px;">
                • <strong>Yapay Zeka Şüphesi:</strong> %${aiProbability} ${isSafe ? '(Güvenli)' : '(Şüpheli)'}<br>
                • <strong>Yazım Hızı:</strong> Dakikada ${typingSpeed} kelime<br>
                • <strong>Kopya Kontrolü:</strong> Dışarıdan yapıştırma tespit edilmedi.<br>
                • <strong>Durum:</strong> ${isSafe ? 'Hoca değerlendirmesine uygun.' : 'Manuel inceleme önerilir.'}
            </div>
        `;

        const feedback = [
            { type: "Grammar & Accuracy", msg: "Excellent sentence variety. Focus on Subject-Verb agreement in the 2nd paragraph.", score: "8/10" },
            { type: "Academic Vocabulary", msg: "Good use of targeted vocabulary. Try 'Exacerbate' instead of 'Make worse'.", score: "High" },
            { type: "Syllabus Match", msg: "Week 5: Cause-Effect transition words detected.", score: "100%" }
        ];

        feedback.forEach(item => {
            document.getElementById('results').innerHTML += `
                <div class="feedback-card">
                    <strong style="color:#003366">${item.type}:</strong><br>
                    <span style="font-size:14px">${item.msg}</span>
                    <span style="float:right; font-weight:bold; color:#FF8C00">${item.score}</span>
                </div>
            `;
        });
        
        initChart();
    }, 2000);
}

function initChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    if(window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Integrity Score (Dürüstlük Puanı)',
                data: [95, 98, 92, 99],
                borderColor: '#2ecc71',
                borderWidth: 2,
                fill: false
            }, {
                label: 'Academic Growth',
                data: [60, 65, 78, 85],
                borderColor: '#FF8C00',
                borderWidth: 2,
                fill: false
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}