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
            const currentElement = document.activeElement;

            if (event.key === "Tab") {
                if (currentElement === burgerBtn) {
                    event.preventDefault();
                    firstMenuItem.focus();
                }

                if (currentElement === lastMenuItem) {
                    event.preventDefault();
                    burgerBtn.focus();
                }
            }

            if (event.shiftKey) {
                if (currentElement === burgerBtn) {
                    event.preventDefault();
                    lastMenuItem.focus();
                }

                if (currentElement === firstMenuItem) {
                    event.preventDefault();
                    burgerBtn.focus();
                }
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

    tabsList.forEach(tab => {
        console.log(tab);
        tab.addEventListener('click', () => setActiveTab(tab));
        tab.addEventListener('keydown', event => {
            if (event.key === "Enter") {
                setActiveTab(tab);
            }
        });
    });

    $(function () {
        $("#faq__list").accordion({
            active: false,
            heightStyle: "content",
            collapsible: true,
        });

    });
})
