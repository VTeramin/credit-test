import creditsData from './credits-data.js';

const creditsInfo = document.getElementById('credits-info');
creditsData.forEach(credData => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>Кредит "${credData.name}"</td><td>${credData.rate}</td><td>${credData.term}</td><td><button>Оформить заявку</button></td>`;
    creditsInfo.append(row);
});