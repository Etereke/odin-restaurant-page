import './style.css';
import hulda from './hulda.jpg';

export default function createContactpage(){
    
    const contact = document.createElement('div');
    contact.classList.add('content-default');
    contact.classList.add('content-contact');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact';
    contact.appendChild(h1);

    const info = document.createElement('div');
    info.classList.add('info');
    const name = document.createElement('div');
    name.textContent = 'Innkeeper: Hulda';
    const location = document.createElement('div');
    location.textContent = 'Location: Skyrim, Whiterun Hold, Whiterun, Plains District';
    const open = document.createElement('div');
    open.textContent = 'Open all day and night!';
    info.appendChild(name);
    info.appendChild(location);
    info.appendChild(open);
    contact.appendChild(info);

    let image = new Image();
    image.src = hulda;
    image.alt = 'Hulda';
    contact.appendChild(image);
    
    return contact;
}