document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('.animate-me');

    function checkVisibility() {
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            target.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
