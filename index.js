import creditsData from './credits-data.js';

const creditsInfo = document.getElementById('credits-info');
creditsData.forEach(credData => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${credData.name}</td><td>${credData.rate}</td><td>${credData.term}</td><button></button>`;
    creditsInfo.append(row);
});