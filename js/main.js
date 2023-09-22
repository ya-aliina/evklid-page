window.addEventListener('DOMContentLoaded', function() {
   const swiper = new Swiper('.hero__swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: false,
    });

    document.querySelectorAll('.how-we-work__tab').forEach(function(tab) {

        tab.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.how-we-work__tab-info').forEach(function(tabInfo) {
                tabInfo.classList.remove('how-we-work__tab-active');
            });

            document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__tab-active');
        })
    })

    const modalDialog = document.querySelector('#header__modal-dialog');

    document.querySelector('#burger-btn').addEventListener('click', function() {
        modalDialog.classList.add('is-active');

    });

    document.querySelector('#modal-close-btn').addEventListener('click', function() {
        modalDialog.classList.remove('is-active');
    });

    document.querySelectorAll('.header__modal-nav-item').forEach(function(navItem) {
        navItem.addEventListener('click', function() {
            modalDialog.classList.remove('is-active');
        })
    })

    $(function () {
        $("#faq__list").accordion({
            active: false,
            heightStyle: "content",
            collapsible: true,
        });

    });



})
