const products = [
    { title: 'Honey Lemon Squash, 750 ml', description: '$15', image: 'https://media.istockphoto.com/id/2197377070/ru/%D1%84%D0%BE%D1%82%D0%BE/cold-summer-drink-made-from-watermelon.jpg?s=612x612&w=0&k=20&c=QnyKA_rWoC_hKw-RQkgyN0dBy0ZsZEoaQ897JUUYE9k=' },
    { title: 'Unpolished Rice, 1kg', description: '$25', image: 'https://media.istockphoto.com/id/1325096026/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%83%D0%BD%D0%B5%D1%86-%D0%B0%D1%85%D0%B8-%D1%81-%D0%BE%D0%B3%D1%83%D1%80%D1%86%D0%BE%D0%BC-%D1%80%D0%B5%D0%B4%D1%8C%D0%BA%D0%BE%D0%B9-%D0%BC%D0%BE%D1%80%D0%BA%D0%BE%D0%B2%D1%8C%D1%8E-%D0%B8-%D0%B0%D0%B2%D0%BE%D0%BA%D0%B0%D0%B4%D0%BE.jpg?s=612x612&w=0&k=20&c=ex3DmiH_5dQwAZZzI9Ih-foiyAcTeaaj8P75cJRjMJM=' },
    { title: 'Unrefined Cane Sugar, 1kg', description: '$6', image: 'https://media.istockphoto.com/id/639978998/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%BE%D0%BD-%D0%B1%D1%96%D0%BB%D0%BE%D0%B3%D0%BE-%D1%86%D1%83%D0%BA%D1%80%D1%83-%D0%BD%D0%B0-%D1%87%D0%BE%D1%80%D0%BD%D0%BE%D0%BC%D1%83.jpg?s=612x612&w=0&k=20&c=msCs-mkH8XXIFWDCW2cJ_wYdXujtUz4F4pzMa_2_Lgg=' },
    { title: 'Unprocessed Honey, 500g', description: '$23.5', image: 'https://media.istockphoto.com/id/1164770777/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BB%D0%B0%D0%B2%D0%B0%D0%BD%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BC%D0%B5%D0%B4.jpg?s=612x612&w=0&k=20&c=dJ1zlEi2C8bX4hwlATxzioPyaOUgcIsJmXNiO0U854s=' },
    { title: 'Amla Powder, 100gm', description: '$7.00', image: 'http://res2.weblium.site/res/5ccffea753baad0023b3424b/5cd2e154461e1d0023684b39_optimized_1050_c1050x700-0x0.webp' },
    { title: 'Bel Candy (Wood Apple)<br> 200gm', description: '$18', image: 'https://media.istockphoto.com/id/470309482/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D1%81%D1%81%D0%BE%D1%80%D1%82%D0%B8-candy.jpg?s=612x612&w=0&k=20&c=AbN2xRXGiQoA2K1oJOYbaqbbz3diL_SV0f-SMkIAOTA=' }
];

let currentIndex = 0;

const track = document.querySelector('.cards');

function renderSlider() {
    track.innerHTML = ''; // Очистити перед оновленням

    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % products.length;
        const product = products[index];

        const card = document.createElement('div');
        card.className = 'seller-div';
        card.innerHTML = `
            <img src="${product.image}" class="seller" alt="${product.title}">
            <p class="seller-name">${product.title}</p>
            <p class="seller-description">${product.description}</p>
        `;
        track.appendChild(card);
    }
}

document.querySelector('.arrow-1').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    renderSlider();
});

document.querySelector('.arrow-2').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % products.length;
    renderSlider();
});

// Ініціалізація слайдера
renderSlider();