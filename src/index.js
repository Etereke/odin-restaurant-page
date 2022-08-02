import createHeader from "./header";
import createFooter from "./footer";
import createHomepage from "./home";
import createMenupage from './menu';
import createContactpage from './contact';
const content = document.querySelector('#content');

content.appendChild(createHeader());
content.appendChild(createHomepage());
content.appendChild(createFooter());

const headerItems = Array.from(document.querySelectorAll('.navitem'));
let contentDiv = document.querySelector('.content-default');


headerItems.forEach(item => {
    item.addEventListener('click', (e) => {
            if(!(item.classList.contains('active'))){
                headerItems.forEach(item => {
                    item.classList.remove('active');
                });
                item.classList.add('active');
                switch(item.dataset.name){
                    case 'home':
                        contentDiv.innerHTML = createHomepage().innerHTML;
                        contentDiv.classList = "content-default content-home";
                        break;
                    case 'menu':
                        contentDiv.innerHTML = createMenupage().innerHTML;
                        contentDiv.classList = "content-default content-menu";
                        break;
                    case 'contact':
                        contentDiv.innerHTML = createContactpage().innerHTML;
                        contentDiv.classList = "content-default content-contact";
                        break;
                }
            }
        // if(e.target.classList.contains('navitem')){
        //     if(!(e.target.classList.contains('active'))){
        //         headerItems.forEach(item => {
        //             item.classList.remove('active');
        //         });
        //         e.target.classList.add('active');
        //         switch(e.target.dataset.name){
        //             case 'home':
        //                 content.appendChild(createHomepage());
        //                 break;
        //             case 'menu':
        //                 content.appendChild(createMenupage());
        //                 break;
        //             case 'contact':
        //                 content.appendChild(createContactpage());
        //                 break;
        //         }
        //     }
        // }
        // else{
        //     if(!(e.target.parentNode.classList.contains('active'))){
        //         headerItems.forEach(item => {
        //             item.classList.remove('active');
        //         });
        //         e.target.parentNode.classList.add('active');
        //         switch(e.target.parentNode.dataset.name){
        //             case 'home':
        //                 content.appendChild(createHomepage());
        //                 break;
        //             case 'menu':
        //                 content.appendChild(createMenupage());
        //                 break;
        //             case 'contact':
        //                 content.appendChild(createContactpage());
        //                 break;
        //         }
        //     }
        // }
    });
});