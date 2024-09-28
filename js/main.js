'use strict'


const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

// navbar toggle function
const navbar = document.querySelector('[data-navbar]')
const navToggler = document.querySelector('[data-menu-toggler]')
const navbarLinks = document.querySelectorAll('[data-nav-link]')

const toggleNavbar = function () {
    navbar.classList.toggle('active')
    this.classList.toggle('active')
}
addEventOnElem(navToggler, "click", toggleNavbar)

const closeNavbar = function () {
    navbar.classList.remove('active')
    navToggler.classList.remove('active')
}

addEventOnElem(navbarLinks, "click", closeNavbar)