// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    // Наблюдатель за пересечением элементов
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Анимируем секции
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Анимация для карточек преимуществ
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });

    // Плавная прокрутка для якорей (если будут добавлены)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация кнопок при наведении
    const buttons = document.querySelectorAll('.cta-button, .contact-button, .footer-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    console.log('Telegram Chat Landing page loaded successfully!');
});

// Дополнительные функции для аналитики (пример)
function trackButtonClick(buttonType) {
    // Здесь можно добавить код для Google Analytics или другой аналитики
    console.log(`Button clicked: ${buttonType}`);
}

// Обработчики для отслеживания кликов
document.addEventListener('DOMContentLoaded', function() {
    const joinButtons = document.querySelectorAll('.cta-button, .footer-button');
    const contactButtons = document.querySelectorAll('.contact-button');
    
    joinButtons.forEach(button => {
        button.addEventListener('click', () => trackButtonClick('join_chat'));
    });
    
    contactButtons.forEach(button => {
        button.addEventListener('click', () => trackButtonClick('contact_admin'));
    });
});