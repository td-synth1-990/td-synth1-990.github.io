window.addEventListener('scroll', function() {
    const linkSection = document.querySelector('.fade-in');
    if (window.scrollY > 300) {
        linkSection.classList.add('show');
    }
});
