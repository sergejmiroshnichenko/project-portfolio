import i18Obj from './translate.js';


const burgerMenu = document.querySelector('.header-burger');
const navMenu = document.querySelector('.nav-menu');
const listMenu = document.querySelectorAll('.nav-menu-list');

function toggleMenu() {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    })
}

toggleMenu()


/**************************************************************************************  Табы фоток   ******/

const button = document.querySelector('.services-cards');  //    ul
const tabButtons = document.querySelectorAll('.block-btn-empty');   //   li  в  ul
const images = document.querySelectorAll('.portfolio-collection-item')   // картинки в лишках

tabButtons.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;

        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)

        tabButtons.forEach((item) => {
            item.classList.remove('active');
        })

        images.forEach(function (item) {
                let currentDataText = item.getAttribute('data-tab')
                tabId === currentDataText ? item.classList.remove('dn') : item.classList.add('dn')
            }
        )

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    })
})

/************************************************************************************************************************* */

/******** Перевод текста  ***/

const language = document.querySelectorAll('[data-i18]');
const ruLng = document.querySelector('.header__lang-ru');
const enLng = document.querySelector('.header__lang-en');

ruLng.addEventListener('click', getTranslate);


function getTranslate(ru) {

    language.forEach((el) => {
        el.textContent = i18Obj['ru'][el.dataset.i18];
        enLng.classList.remove('active')
        ruLng.classList.add('active');

    });
}

getTranslate()

enLng.addEventListener('click', makeTranslate);

function makeTranslate(en) {
    language.forEach((el) => {
        el.textContent = i18Obj['en'][el.dataset.i18];
        ruLng.classList.remove('active')
        enLng.classList.add('active');

    });
}

makeTranslate()

const tabsLang = document.querySelectorAll('.tabs__lang');
tabsLang.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item;

        tabsLang.forEach((item) => {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active')
    })
})

/******************************************************************************************************************** */

const themeSwitchers = document.querySelectorAll('.theme-icon');




themeSwitchers.forEach((switcher) => {
    switcher.addEventListener('click', function() {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme);
    })
})


function applyTheme (themeName){
    let themeUrl = `css/theme-${themeName}.css`
    document.querySelector('[title="theme"]').setAttribute('href' , themeUrl);
}

applyTheme ()



let activeTheme = localStorage.getItem('theme');

if(activeTheme === null){     // если пользователь впервые вошел на страницу
    applyTheme('dark');
} else {
    applyTheme(activeTheme);
}



