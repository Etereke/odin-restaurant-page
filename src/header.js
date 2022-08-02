import './style.css';

export default function createHeader(active){

    const header = document.createElement('header');
    const navitems = ['home', 'menu', 'contact'];

    for(let title of navitems){
        let navitem = document.createElement('div');
        let span = document.createElement('span');
        span.textContent = title;
        navitem.classList.add('navitem');
        if(title === active)
            navitem.classList.add('active');
        navitem.appendChild(span);
        header.appendChild(navitem);
    }

    return header;
}