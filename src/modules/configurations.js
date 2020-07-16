import backgroundImg from '../assets/sushi-background.jpg';
import { loadHome } from './home';
import { loadContact } from './contact';
import { loadMenu } from './menu';

const getContentId = () => 'content';

const getBackgroundImg = () => backgroundImg;

const getLinks = () => {
  const links = [{title: 'Home', link: loadHome },
                 {title: 'About Us', link: ''},
                 {title: 'Sushi', link: ''},
                 {title: 'Menu', link: loadMenu },
                 {title: 'Cousine', link: ''},
                 {title: 'Contact Us', link: loadContact }];
  return links;
};

export { getContentId, getBackgroundImg, getLinks };