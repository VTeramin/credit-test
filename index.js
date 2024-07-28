import creditsData from './credits-data.js';

const creditsInfo = document.getElementById('credits-info');
creditsData.forEach(credData => {
    const row = document.createElement('tr');
    const inner = [
        `<td>Кредит "${credData.name}"</td>`,
        `<td>${credData.rate}</td>`,
        `<td>${credData.term}</td>`,
        `<td><button class="credit-button">Оформить заявку</button></td>`
    ];
    row.innerHTML = inner.join('');
    creditsInfo.append(row);
});

const labels = [
    'Название',
    'Ставка (%)',
    'Срок (лет)',
    'Заявка'
];
let selectedCredit = {};

const cells = document.querySelectorAll('td');
cells.forEach((td, ind) => td.setAttribute('data-label', labels[ind % 4]));

const modalWrapper = document.querySelector('.wrapper');
modalWrapper.addEventListener('click', toggleModal);

const buttons = document.querySelectorAll('.credit-button');
buttons.forEach((button, ind) => button.addEventListener('click', () => toggleModal(ind)));

function toggleModal(ind) {
    let display = modalWrapper.style.display;
    modalWrapper.style.display = display === 'flex' ? 'none' : 'flex';
    selectedCredit = creditsData[ind];
}

const modal = document.querySelector('.modal');
modal.addEventListener('click', e => e.stopPropagation());

const submit = document.querySelector('.form__submit-button');
submit.addEventListener('click', handleSubmit);

function handleSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log([name, email, selectedCredit]);
    toggleModal();
}