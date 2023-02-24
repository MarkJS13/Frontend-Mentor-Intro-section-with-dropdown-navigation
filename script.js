class Menu {
    constructor(dom) {
        this.dom = dom;
        this.features = document.querySelector('.dropdown-features');
        this.company = document.querySelector('.dropdown-company')
    }


    render() {
        this.dom.forEach(element => {
            element.addEventListener('click', e => {
                if(e.target.classList.contains('features')) {
                    e.target.querySelector('span').classList.toggle('rotate');
                    this.features.classList.toggle('hide-dropdown');
                    document.querySelector('.features').classList.toggle('highlight-list');
                } else if(e.target.classList.contains('company')) {
                    e.target.querySelector('span').classList.toggle('rotate');
                    this.company.classList.toggle('hide-dropdown');
                    document.querySelector('.company').classList.toggle('highlight-list');
                } 
            })
        });
    }

    remove() {
        const size = window.matchMedia("(max-width: 632px)");
            size.addEventListener('change', e => {
                if (e.matches) {
                    this.company.classList.add('hide-dropdown');
                    this.features.classList.add('hide-dropdown');
                }
            })  
    }
    
    toggleSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const close = document.querySelector('.close');
        this.dom.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-active');
        })

        close.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-active');
        })


        const size = window.matchMedia("(min-width: 632px)");
            size.addEventListener('change', e => {
                if (e.matches) {
                    sidebar.classList.remove('sidebar-active');
                }
        })  

    }


    toggleFeatures() {
        const title_features = document.querySelector('.title-features');
        const side_features = document.querySelector('.side-features .list');

        title_features.addEventListener('click', () => {
            side_features.classList.toggle('toggle-active');
            title_features.classList.toggle('title-bold');
            title_features.querySelector('span').classList.toggle('rotate');
        });

        const size = window.matchMedia("(min-width: 632px)");
            size.addEventListener('change', e => {
                if (e.matches) {
                    side_features.classList.remove('toggle-active');
                    title_features.classList.remove('title-bold');
                    title_features.querySelector('span').classList.remove('rotate');
                }
        }) ;

        const close = document.querySelector('.close');

        close.addEventListener('click', () => {
            side_features.classList.remove('toggle-active');
            title_features.classList.remove('title-bold');
            title_features.querySelector('span').classList.remove('rotate');
        })
    }

    toggleCompany() {
        const title_company = document.querySelector('.title-company');
        const side_company = document.querySelector('.side-company .list');

        title_company.addEventListener('click', () => {
            side_company.classList.toggle('toggle-active');
            title_company.classList.toggle('title-bold');
            title_company.querySelector('span').classList.toggle('rotate');
        })

        const size = window.matchMedia("(min-width: 632px)");
            size.addEventListener('change', e => {
                if (e.matches) {
                    side_company.classList.remove('toggle-active');
                    title_company.classList.remove('title-bold');
                    title_company.querySelector('span').classList.remove('rotate');
                }
        }) ;

        const close = document.querySelector('.close');

        close.addEventListener('click', () => {
            side_company.classList.remove('toggle-active');
            title_company.classList.remove('title-bold');
            title_company.querySelector('span').classList.remove('rotate');
        })
    }

}

const menu = new Menu(document.querySelectorAll('.menu li'));
const hamburger = new Menu(document.querySelector('.hamburger-menu'));
menu.render();
menu.remove();
hamburger.toggleSidebar();
hamburger.toggleFeatures();
hamburger.toggleCompany();