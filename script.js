<script>
        // Массив сообщений
        const messages = [
            "Добро пожаловать в историю...",
            "Нажми кнопку, чтобы продолжить",
            "Вот третье сообщение появилось",
            "И четвёртое сообщение появляется автоматически через 3 секунды",
            "История продолжается...",
            "Спасибо за внимание! 🎉"
        ];

        let currentMessageIndex = 0;
        const messageElement = document.getElementById('message');
        const nextBtn = document.getElementById('nextBtn');

        // Функция для отображения сообщения
        function displayMessage(index) {
            if (index < messages.length) {
                messageElement.textContent = messages[index];
                currentMessageIndex = index;

                // Для определённых сообщений показываем кнопку, для других - скрываем
                if (index === messages.length - 1) {
                    nextBtn.textContent = 'Заново';
                    nextBtn.style.display = 'block';
                } else if (index === 2 || index === 3) {
                    // После 3-го сообщения кнопка исчезает и появляется 4-е автоматически
                    if (index === 2) {
                        nextBtn.style.display = 'block';
                    } else if (index === 3) {
                        nextBtn.style.display = 'none';
                    }
                } else {
                    nextBtn.style.display = 'block';
                }
            }
        }

        // Обработчик нажатия на кнопку
        nextBtn.addEventListener('click', function() {
            currentMessageIndex++;

            if (currentMessageIndex < messages.length) {
                displayMessage(currentMessageIndex);

                // Если это 3-е сообщение, показываем кнопку
                if (currentMessageIndex === 2) {
                    nextBtn.style.display = 'block';
                }
                // Если это 3-е сообщение (индекс 2), то после нажатия кнопки ждём и показываем 4-е
                else if (currentMessageIndex === 3) {
                    nextBtn.style.display = 'none';
                    setTimeout(() => {
                        displayMessage(currentMessageIndex + 1);
                        // После автоматического сообщения показываем кнопку снова
                        setTimeout(() => {
                            nextBtn.style.display = 'block';
                        }, 1000);
                    }, 3000);
                    return;
                }
            } else {
                // Перезагрузка страницы
                currentMessageIndex = 0;
                displayMessage(currentMessageIndex);
                nextBtn.style.display = 'block';
            }
        });

        // Инициализация
        displayMessage(0);
    </script>
