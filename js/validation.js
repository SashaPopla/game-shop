'use strict';

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const nickname = document.getElementById('nickname').value;
        const regEmail = document.getElementById('regEmail').value;
        const regPassword = document.getElementById('regPassword').value;

        if (nickname.trim() === '' || regEmail.trim() === '' || regPassword.trim() === '') {
            document.getElementById('registrationError').innerText = 'Все поля должны быть заполнены';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(regEmail)) {
            document.getElementById('registrationError').innerText = 'Некорректный формат эмейла';
            return;
        }

        if (regPassword.length < 6) {
            document.getElementById('registrationError').innerText = 'Пароль должен содержать как минимум 6 символов';
            return;
        }

        document.getElementById('registrationError').innerText = 'Регистрация успешна';
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        if (loginEmail.trim() === '' || loginPassword.trim() === '') {
            document.getElementById('loginError').innerText = 'Все поля должны быть заполнены';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(loginEmail)) {
            document.getElementById('loginError').innerText = 'Некорректный формат эмейла';
            return;
        }

        document.getElementById('loginError').innerText = 'Вход успешен';
    });
});