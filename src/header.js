import './style.css';

export default function createHeader(){

    const header = document.createElement('header');
    const navitems = ['home', 'menu', 'contact'];

    for(let title of navitems){
        let navitem = document.createElement('div');
        let span = document.createElement('span');
        span.textContent = title;
        span.classList.add('span');
        navitem.classList.add('navitem');
        if(title === 'home')
            navitem.classList.add('active');
        navitem.dataset.name = title;
        navitem.appendChild(span);
        header.appendChild(navitem);
    }

    return header;
}