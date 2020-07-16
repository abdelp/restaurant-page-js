import * as Display from './display';
import * as Config from './configurations';

const loadMenu = () => {
  const subcontentId = Config.getSubcontentId();

  const menuList = Config.getMenuList();

  const gallery = Display.createGallery(menuList);
  Display.cleanContent(subcontentId);
  Display.insertContent(subcontentId, gallery);
};

export { loadMenu };