import createHeader from "./header";
import createFooter from "./footer";
import createHomepage from "./home";
const content = document.querySelector('#content');



content.appendChild(createHeader('home'));
content.appendChild(createHomepage());
content.appendChild(createFooter());
