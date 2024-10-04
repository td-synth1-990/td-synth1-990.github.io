window.addEventListener('scroll', function() {
    const linkSections = document.querySelectorAll('.fade-in');
    linkSections.forEach(function(linkSection) {
        if (window.scrollY > 300) {
            linkSection.classList.add('show');
        }
    });
});

