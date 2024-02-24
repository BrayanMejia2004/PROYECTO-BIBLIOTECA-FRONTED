
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

/*Star Calendar*/


let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElements => {
    listElements.addEventListener('click', () => {
        listElements.classList.toggle('arrow');

        let height = 0;
        let menu = listElements.nextElementSibling;

        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
    })
});

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: {
            /*url: '/calendario/api/prestamos',
            method: 'GET',
            failure: function () {
                alert('Hubo un error al obtener los eventos.');
            }*/
        },
        eventClick: function (info) {
            alert('Evento: ' + info.event.title);
        }
    });
    calendar.render();
});
/*End Calendar */
