import * as Display from './display';
import * as Config from './configurations';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

const getMenuList = () => {
  const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis aliquam. Interdum posuere lorem ipsum dolor sit. Tincidunt augue interdum velit euismod. Risus commodo viverra maecenas accumsan lacus vel facilisis. Pharetra vel turpis nunc eget lorem dolor. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.';
  const menuList = [
    { title: 'Menu 1', description: loremIpsumText, img: img1 },
    { title: 'Menu 2', description: loremIpsumText, img: img2 },
  ];

  return menuList;
};

const loadMenu = () => {
  const subcontentId = Config.getSubcontentId();

  const menuList = getMenuList();

  const gallery = Display.createGallery(menuList);
  Display.cleanContent(subcontentId);
  Display.insertContent(subcontentId, gallery);
};

export default loadMenu;