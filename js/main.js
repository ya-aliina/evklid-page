window.addEventListener('DOMContentLoaded', function () {
    const tabsList = document.querySelectorAll('.how-we-work__tab');
    const modalDialog = document.querySelector('#header__modal-dialog');
    const burgerBtn = document.querySelector('#burger-btn');

    function toggleMenu() {
        const isMenuOpen = burgerBtn.classList.contains('opened');

        if (isMenuOpen) {
            closeMenu();
        } else {
            openMenu();
            manageMenuFocus();
        }
    }

    function closeMenu() {
        burgerBtn.classList.remove('opened');
        burgerBtn.setAttribute('aria-expanded', false);
        modalDialog.classList.remove('is-active');
        modalDialog.setAttribute('aria-hidden', true)
    }

    function openMenu() {
        burgerBtn.classList.add('opened');
        burgerBtn.setAttribute('aria-expanded', true);
        modalDialog.classList.add('is-active');
        modalDialog.setAttribute('aria-hidden', false)
        burgerBtn.focus();
    }

    function manageMenuFocus() {
        const menuItems = document.querySelectorAll('.header__modal-nav-link');
        const numberOfMenuItems = menuItems.length;

        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[numberOfMenuItems - 1];

        function handleTabKey(event) {
            const element = document.activeElement;

            if (event.key === "Tab" && (element === burgerBtn)) {
                event.preventDefault();
                firstMenuItem.focus()
            }

            if (event.key === "Tab" && (element === lastMenuItem)) {
                event.preventDefault();
                burgerBtn.focus()
            }

            if (event.shiftKey && (element === firstMenuItem)) {
                event.preventDefault();
                burgerBtn.focus();
            }

            if (event.shiftKey && (element === burgerBtn)) {
                event.preventDefault();
                lastMenuItem.focus();
            }
        }

        burgerBtn.addEventListener('keydown', handleTabKey);
        firstMenuItem.addEventListener('keydown', handleTabKey);
        lastMenuItem.addEventListener('keydown', handleTabKey);
    }

    burgerBtn.addEventListener('click', toggleMenu);

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

    tabsList.forEach(function (tab) {
        tab.addEventListener('click', function (event) {
            setActiveTab(event.currentTarget);
        });
    });

    function setActiveTab(tab) {
        const path = tab.dataset.path;
        const tabsList = document.querySelectorAll('.how-we-work__tab');
        const tabInfoList = document.querySelectorAll('.how-we-work__tab-info');

        tabsList.forEach(function(element) {
            element.classList.remove('is-active');
        });

        tabInfoList.forEach(function (element) {
            element.classList.remove('is-active');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
        tab.classList.add('is-active');
    }

    $(function () {
        $("#faq__list").accordion({
            active: false,
            heightStyle: "content",
            collapsible: true,
        });

    });
})
