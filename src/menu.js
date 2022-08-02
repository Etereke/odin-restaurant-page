import './style.css';


export default function createMenupage(){
    
    const menu = document.createElement('div');
    menu.classList.add('content-default');
    menu.classList.add('content-menu');
    const menuItems = [
        {name: 'Nord Mead', price: 5},
        {name: 'Honningbrew Mead', price: 10},
        {name: 'Black-Briar Mead', price: 20},
        {name: 'Wine', price: 7},
        {name: 'Alto Wine', price: 12},
        {name: 'Apple Pie', price: 13},
        {name: 'Sweetroll', price: 4},
        {name: 'Grilled Chicken Breast', price: 10},
    ]
    for(let item of menuItems){
        const menuRow = document.createElement('div');
        menuRow.classList.add('menu-row');
        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('span');
        itemPrice.textContent = item.price + ' Gold';
        menuRow.appendChild(itemName);
        menuRow.appendChild(itemPrice);
        menu.appendChild(menuRow);
    }

    return menu;
}