import './style.css';

export default function createFooter(){
    
    const footer = document.createElement('footer');
    let span = document.createElement('span');
    span.textContent = 'Copyright and stuff, 2022';
    footer.appendChild(span);
    return footer;
}