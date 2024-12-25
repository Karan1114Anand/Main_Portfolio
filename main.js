// Select the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu and navbar active state on hover
menuIcon.onmouseover = () => {
    menuIcon.classList.add('fa-xmark'); // Add the cross icon class
    navbar.classList.add('active'); // Show the navigation bar
};

// Remove the active class when the mouse leaves
menuIcon.onmouseout = () => {
    menuIcon.classList.remove('fa-xmark'); // Revert back to the hamburger icon
    navbar.classList.remove('active'); // Hide the navigation bar
};

/* Scroll Section Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
/*======Scroll Reveal======*/
ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right'});


/*======Typed JS======*/
const typed = new Typed('.multiple-text',{
    strings:["And I'm an",'Aspiring AI/ML Engineer'],
    typeSpeed:70,backSpeed:70,backDelay:1000,loop:true}
)
