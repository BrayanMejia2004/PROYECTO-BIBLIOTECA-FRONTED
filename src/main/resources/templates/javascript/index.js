
/*code of menu*/
const sideLinks = document.querySelectorAll
    ('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {

    const li = item.parentElement;

    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })

        li.classList.add('active');

    })
});
/* End code of menu*/

/* code of sidebar*/
const menubar = document.querySelector('.content nav .bx.bx-menu');
const sidebar = document.querySelector('.sidebar');

menubar.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});
/* End code of sidebar*/

window.addEventListener('resize', () => {

    if (window.innerWidth < 683) {
        sidebar.classList.add('close');

    } else {
        sidebar.classList.remove('close');
    }

});