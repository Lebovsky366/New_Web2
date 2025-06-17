let clickCount = 0;

function showCalc() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Калькулятор</h2>
        <input type="number" id="num1" placeholder="Первое число" />
        <input type="number" id="num2" placeholder="Второе число" />
        <br><br>
        <button onclick="calc()">Сложить</button>
        <p id="result"></p>
    `;
}

function calc() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = 'Введите оба числа.';
    } else {
        result.innerHTML = 'Результат: ' + (num1 + num2);
    }
}

function showSorting() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Сортировка массива</h2>
        <p>Введите числа через запятую:</p>
        <input type="text" id="arrayInput" placeholder="например 3, 1, 4, 2" />
        <br><br>
        <button onclick="sortArray()">Отсортировать</button>
        <p id="sortedResult"></p>
    `;
}

function sortArray() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(item => parseFloat(item.trim()));
    const resultPara = document.getElementById('sortedResult');

    if (array.some(isNaN)) {
        resultPara.innerHTML = 'Введите корректные числа.';
        return;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    resultPara.innerHTML = 'Отсортированный массив: ' + array.join(', ');
}

function showAlert() {
    alert('Это простое уведомление Alert!');
}

function showGreeting() {
    const name = prompt('Введите ваше имя:');
    if (name) {
        alert('Привет, ' + name + '!');
    } else {
        alert('Вы не ввели имя.');
    }
}

function showRegistration() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Регистрация</h2>
        <input type="text" id="name" placeholder="Ваше имя" />
        <br><br>
        <input type="email" id="email" placeholder="Ваш email" />
        <br><br>
        <button onclick="register()">Зарегистрироваться</button>
        <p id="regMessage"></p>
    `;
}

function register() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('regMessage');

    if (name && email) {
        message.innerHTML = 'Вы зарегистрировались, ' + name + '!';
    } else {
        message.innerHTML = 'Заполните все поля.';
    }
}

function changeTheme(theme) {
    document.body.className = theme;
}

function countClicks() {
    clickCount++;
    console.log(`Кнопка нажата ${clickCount} раз`);
}

function changeTitle() {
    document.querySelector('h1').innerText = "Функционал JavaScript";
}

function addListItem() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.innerText = `Элемент ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
    if (itemList.children.length % 2 === 0) {
        newItem.style.backgroundColor = '#f0f8ff';
    }
}

function toggleButtonText() {
    const button = document.getElementById('toggleButton');
    button.innerText = button.innerText === "Нажми на кнопку" ? "Кнопка нажата" : "Нажми на кнопку";
}

document.addEventListener('click', function(event) {
    const target = event.target;
    const hasSuperElementClass = target.classList.contains('super_element');
    console.log(`Класс "super_element" ${hasSuperElementClass ? 'присутствует' : 'отсутствует'} в элементе "${target.tagName.toLowerCase()}".`);
});

document.addEventListener('mouseover', function(event) {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        console.log("Вы навели на textarea.");
    }
});

document.getElementById('itemList')?.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button') {
        console.log(event.target.innerText);
    }
});

window.addEventListener('load', function() {
    console.log("Все ресурсы загружены");
});

window.onload = function() {
    console.log("Все теги прогрузились");
};

let hoverCount = 0;

window.onload = function() {
    const hoverCounterButton = document.getElementById('hoverCounterBtn');
    if (hoverCounterButton) {
        hoverCounterButton.addEventListener('mouseover', () => {
            hoverCount++;
            console.log(`Кнопка наведена ${hoverCount} раз(а)`);
        });
    }
};

function showRandomColor() {
    const content = document.getElementById('content');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    content.innerHTML = `
        <h2>Случайный цвет фона</h2>
        <p>Сгенерированный цвет: ${randomColor}</p>
        <div style="width: 100px; height: 100px; background-color: ${randomColor}; border: 1px solid black;"></div>
    `;
    document.body.style.backgroundColor = randomColor;
}

function showImageSlider() {
    const content = document.getElementById('content');
    const images = [
        '1.webp',
        '2.jpg',
        '3.jpg'
    ];
    let currentImageIndex = 0;

    function updateImage() {
        const imageElement = document.getElementById('sliderImage');
        if (imageElement) {
            imageElement.src = images[currentImageIndex];
        }
    }

    content.innerHTML = `
        <h2>Слайдер изображений</h2>
        <img id="sliderImage" src="${images[0]}" alt="Слайд" style="width: 300px; height: auto;">
        <br>
        <button onclick="prevImage()">Предыдущее</button>
        <button onclick="nextImage()">Следующее</button>
    `;

    window.prevImage = function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    };

    window.nextImage = function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    };

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}
