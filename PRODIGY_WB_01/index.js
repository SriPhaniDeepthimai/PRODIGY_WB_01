
window.addEventListener('scroll', function() {
    var navigationMenu = document.querySelector('.navigation-menu');
    if (window.scrollY > 50) {
        navigationMenu.style.backgroundColor = '#333';
    } else {
        navigationMenu.style.backgroundColor = 'skyblue';
    }
});


document.querySelectorAll('.navigation-menu ul li a').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        this.style.color = 'rgb(98, 4, 20)';
        this.style.backgroundColor = '#dff34e';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '#fff';
        this.style.backgroundColor = 'transparent';
    });
});
