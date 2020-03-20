document.addEventListener('scroll', headerScroll);

function headerScroll(event) {
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('body > section');
    const links = document.querySelectorAll('header-menu a');


    sections.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('navigation_active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('navigation_active');
                }

            })
        }

    });
}