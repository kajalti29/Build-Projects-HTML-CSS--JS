// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Animate Skill Bars on Scroll
const skillFills = document.querySelectorAll('.fill');

window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('.skills');
    const sectionTop = skillsSection.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight - 100;

    if(scrollPos > sectionTop){
        skillFills.forEach(fill => {
            const width = fill.classList.contains('html-fill') ? '90%' :
                          fill.classList.contains('css-fill') ? '85%' :
                          fill.classList.contains('js-fill') ? '80%' :
                          fill.classList.contains('react-fill') ? '70%' : '0%';
            fill.style.width = width;
        });
    }
});
