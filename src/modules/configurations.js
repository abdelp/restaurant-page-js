import backgroundImg from '../assets/download.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import { loadHome } from './home';
import { loadContact } from './contact';
import { loadMenu } from './menu';

const getContentId = () => 'content';

const getSubcontentId = () => 'sub-content';

const getBackgroundImg = () => backgroundImg;

const getLinks = () => {
  const links = [{title: 'Home', link: loadHome },
                 {title: 'Menu', link: loadMenu },
                 {title: 'Contact Us', link: loadContact }];
  return links;
};

const getMenuList = () => {
  const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam. Interdum posuere lorem ipsum dolor sit. Tincidunt augue interdum velit euismod. Risus commodo viverra maecenas accumsan lacus vel facilisis. Pharetra vel turpis nunc eget lorem dolor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.`
  const menuList = [
    {title: 'Menu 1', description: loremIpsumText, img: img1},
    {title: 'Menu 2', description: loremIpsumText, img: img2}
  ];

  return menuList;
};

export { getContentId, getSubcontentId, getBackgroundImg, getLinks, getMenuList };