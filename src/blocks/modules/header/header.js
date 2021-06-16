document.addEventListener('DOMContentLoaded', () => {
    initMenu();
});

document.addEventListener('resize', () => {
    initMenu();
});

let initMenu = () => {
    let header = document.querySelector('.header');
    let padding = document.querySelector('.player').clientHeight;
    let sidebar = document.querySelector('.info');
    
    if(header) {
        header.style.top = -padding + 'px';
    }
    if (sidebar) {
        sidebar.style.top = document.querySelector('.nav').clientHeight + 20 + 'px';
    }
}