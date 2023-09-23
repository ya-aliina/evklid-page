window.addEventListener('DOMContentLoaded', function () {
    const tabsList = document.querySelectorAll('.how-we-work__tab');
    const modalDialog = document.querySelector('#header__modal-dialog');
    const burgerBtn = document.querySelector('#burger-btn');
    const modalCloseBtn = document.querySelector('#modal-close-btn');
    const modalItemsList = document.querySelectorAll('.header__modal-nav-item');

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

    function setActiveTab(tab) {
        const path = tab.dataset.path;
        const tabInfoList = document.querySelectorAll('.how-we-work__tab-info');

        tabInfoList.forEach(function (tabInfo) {
            tabInfo.classList.remove('how-we-work__tab-active');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('how-we-work__tab-active');
    }

    function openModalDialog() {
        const firstMenuItem = document.querySelector('.header__modal-nav-link');

        modalDialog.classList.add('is-active');
        modalDialog.setAttribute('aria-hidden', 'false');
        setTimeout(function () {
            firstMenuItem.focus();
        }, 100);

    }

    function closeModalDialog() {
        modalDialog.classList.remove('is-active');
        modalDialog.setAttribute('aria-hidden', 'true');
    }

    $(function () {
        $("#faq__list").accordion({
            active: false,
            heightStyle: "content",
            collapsible: true,
        });

    });

    tabsList.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
            setActiveTab(event.currentTarget);
        });
    });

    burgerBtn.addEventListener('click', openModalDialog);

    modalCloseBtn.addEventListener('click', closeModalDialog);

    modalItemsList.forEach(function (navItem) {
        navItem.addEventListener('click', closeModalDialog);
    });

})
