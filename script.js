// Sample Data (जैसे आपके screenshot में था)
const sampleData = {
    summary: {
        totalCardsTxns: 406,
        phhCardsTxns: 372,
        aayCardsTxns: 34,
        phhUnitsSale: 1825,
        commission: "₹9,283.50",
        totalWheat: "4126.0",
        totalRice: "6189.0"
    },
    transactions: [
        { date: "9 Nov 2025", cards: 4, wheatPHH: 14.0, wheatAAY: 38.0, ricePHH: 21.0, riceAAY: 57.0 },
        { date: "10 Nov 2025", cards: 96, wheatPHH: 168.0, wheatAAY: 816.0, ricePHH: 252.0, riceAAY: 1224.0 },
        { date: "11 Nov 2025", cards: 92, wheatPHH: 168.0, wheatAAY: 788.0, ricePHH: 252.0, riceAAY: 1182.0 },
        { date: "12 Nov 2025", cards: 113, wheatPHH: 70.0, wheatAAY: 1046.0, ricePHH: 105.0, riceAAY: 1569.0 },
        { date: "13 Nov 2025", cards: 45, wheatPHH: 0, wheatAAY: 458.0, ricePHH: 0, riceAAY: 687.0 },
        { date: "14 Nov 2025", cards: 21, wheatPHH: 42.0, wheatAAY: 172.0, ricePHH: 63.0, riceAAY: 258.0 },
        { date: "15 Nov 2025", cards: 10, wheatPHH: 14.0, wheatAAY: 100.0, ricePHH: 21.0, riceAAY: 150.0 },
        { date: "16 Nov 2025", cards: 12, wheatPHH: 0, wheatAAY: 110.0, ricePHH: 0, riceAAY: 165.0 },
        { date: "17 Nov 2025", cards: 4, wheatPHH: 0, wheatAAY: 42.0, ricePHH: 0, riceAAY: 63.0 },
        { date: "18 Nov 2025", cards: 5, wheatPHH: 0, wheatAAY: 44.0, ricePHH: 0, riceAAY: 66.0 },
        { date: "19 Nov 2025", cards: 1, wheatPHH: 0, wheatAAY: 8.0, ricePHH: 0, riceAAY: 12.0 },
        { date: "22 Nov 2025", cards: 2, wheatPHH: 0, wheatAAY: 20.0, ricePHH: 0, riceAAY: 30.0 },
        { date: "25 Nov 2025", cards: 1, wheatPHH: 0, wheatAAY: 8.0, ricePHH: 0, riceAAY: 12.0 }
    ],
    totals: {
        cards: 406,
        wheatPHH: 476.0,
        wheatAAY: 3650.0,
        ricePHH: 714.0,
        riceAAY: 5475.0
    }
};

// पेज लोड होने पर
document.addEventListener('DOMContentLoaded', function() {
    // करंट डेट दिखाएं
    const now = new Date();
    document.getElementById('currentDate').textContent = 
        `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`;
    
    // Fetch Report बटन
    document.getElementById('fetchBtn').addEventListener('click', fetchReport);
    
    // Copy बटन
    document.getElementById('copyBtn').addEventListener('click', copyData);
    
    // PDF बटन
    document.getElementById('pdfBtn').addEventListener('click', saveAsPDF);
});

// Report Fetch करें
function fetchReport() {
    const fetchBtn = document.getElementById('fetchBtn');
    const loadingDiv = document.getElementById('loading');
    
    // Loading दिखाएं
    fetchBtn.innerHTML = '⏳ Loading...';
    fetchBtn.disabled = true;
    loadingDiv.style.display = 'block';
    
    // 2 सेकंड बाद डेटा लोड करें (API सिम्युलेशन)
    setTimeout(() => {
        loadReportData(sampleData);
        fetchBtn.innerHTML = '✅ Report Loaded';
        fetchBtn.disabled = false;
        loadingDiv.style.display = 'none';
        
        // 3 सेकंड बाद बटन रिसेट
        setTimeout(() => {
            fetchBtn.innerHTML = '📥 Fetch Report';
        }, 3000);
    }, 2000);
}

// डेटा लोड करें
function loadReportData(data) {
    // Summary अपडेट करें
    document.getElementById('totalCards').textContent = data.summary.totalCardsTxns;
    document.getElementById('totalWheat').textContent = data.summary.totalWheat + ' Kg';
    document.getElementById('totalRice').textContent = data.summary.totalRice + ' Kg';
    document.getElementById('commission').textContent = data.summary.commission;
    
    // Summary और Action बटन दिखाएं
    document.getElementById('summarySection').style.display = 'grid';
    document.getElementById('actionButtons').style.display = 'flex';
    
    // टेबल बॉडी
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    
    // डेटा रोज़ एड करें
    data.transactions.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.cards}</td>
            <td>${item.wheatPHH || '-'}</td>
            <td>${item.wheatAAY || '-'}</td>
            <td>${item.ricePHH || '-'}</td>
            <td>${item.riceAAY || '-'}</td>
        `;
        tbody.appendChild(row);
    });
    
    // टोटल रो एड करें
    const tfoot = document.getElementById('tableFooter');
    tfoot.innerHTML = `
        <tr style="background: #f8f9fa; font-weight: bold;">
            <td>TOTAL</td>
            <td>${data.totals.cards}</td>
            <td>${data.totals.wheatPHH}</td>
            <td>${data.totals.wheatAAY}</td>
            <td>${data.totals.ricePHH}</td>
            <td>${data.totals.riceAAY}</td>
        </tr>
    `;
    tfoot.style.display = 'table-footer-group';
}

// डेटा कॉपी करें
function copyData() {
    let text = "UPPDS Visiontek Report\n";
    text += "=======================\n\n";
    
    // Summary
    text += `Total Cards: ${sampleData.summary.totalCardsTxns}\n`;
    text += `Total Wheat: ${sampleData.summary.totalWheat} Kg\n`;
    text += `Total Rice: ${sampleData.summary.totalRice} Kg\n`;
    text += `Commission: ${sampleData.summary.commission}\n\n`;
    
    // Headers
    text += "Date\tCards\tWheat PHH\tWheat AAY\tRice PHH\tRice AAY\n";
    
    // Data
    sampleData.transactions.forEach(item => {
        text += `${item.date}\t${item.cards}\t${item.wheatPHH}\t${item.wheatAAY}\t${item.ricePHH}\t${item.riceAAY}\n`;
    });
    
    // Copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
        alert('Report copied to clipboard!');
    });
}

// PDF बनाएं
function saveAsPDF() {
    alert('PDF feature requires additional library. For mobile, you can:\n\n1. Take screenshot\n2. Use "Save as PDF" option in browser print menu\n\nPDF functionality will be added in next update.');
}
