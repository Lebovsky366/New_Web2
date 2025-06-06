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
