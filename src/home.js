import banneredMareInside from './bannered_mare_inside.jpg';
import banneredMareOutside from './bannered_mare_outside.jpg';
import './style.css';


export default function createHomepage(){
    
    const home = document.createElement('div');
    home.classList.add('content-home');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to the Bannered Mare!';
    home.appendChild(h1);

    let paragraph = document.createElement('div');
    paragraph.classList.add('paragraph');
    paragraph.textContent = `Come inside and warm up by the fire! Serving the best mead in Skyrim, The Bannered Mare is the heart of Whiterun's night-life. You will never suffer from boredom: the city's finest folks spend their nights in our establishment! If you enjoy music, just say the word and Mikael the bard shall sing the best odes and tales you'll hear all around Skyrim. Or if you are proud of your fistfighting, Uthgerd the Unbroken is always looking challengers! And who knows, you might get to chug a drink or two with the legendary Dovahkiin himself...`;
    home.appendChild(paragraph);

    let image = new Image();
    image.src = banneredMareInside;
    image.alt = 'Bannered Mare Inside';
    home.appendChild(image);

    paragraph = document.createElement('div');
    paragraph.classList.add('paragraph');
    const h3 = document.createElement('h3');
    h3.textContent = 'Services';
    paragraph.appendChild(h3);
    const ul = document.createElement('ul');
    const services = ['Top-quality mead in every quantity', 'Fine food', 'Music by Mikael the bard', 'Rent a comfy bed for the night'];
    for(let service of services){
        const li = document.createElement('li');
        li.textContent = service;
        ul.appendChild(li);
    }
    paragraph.appendChild(ul);
    home.appendChild(paragraph);

    image = new Image();
    image.src = banneredMareOutside;
    image.alt = 'Bannered Mare Outside';
    home.appendChild(image);

    return home;
}