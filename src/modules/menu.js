import * as Display from './display';
import * as Config from './configurations';

const loadMenu = () => {
  const contentId = Config.getContentId();
  Display.cleanContent(contentId);
  Display.insertTitle('Menu');
  Display.setBackgroundImage(contentId, Config.getBackgroundImg());
  Display.insertNav(Config.getLinks());
};

export { loadMenu };