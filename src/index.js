import * as Display from './modules/display';
import loadHome from './modules/home';
import loadContact from './modules/contact';
import loadMenu from './modules/menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

const getLinks = () => {
  const links = [{ title: 'Home', link: loadHome },
    { title: 'Menu', link: loadMenu },
    { title: 'Contact Us', link: loadContact }];
  return links;
};

Display.insertBackground();
Display.insertNav(getLinks());
Display.insertTitle('My Restaurant');
loadHome();