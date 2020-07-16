import * as Display from './display';
import * as Config from './configurations';

const loadContact = () => {
  const contentId = Config.getContentId();
  Display.cleanContent(contentId);
  Display.insertTitle('Contact');
  Display.setBackgroundImage(contentId, Config.getBackgroundImg());
  Display.insertNav(Config.getLinks());
};

export { loadContact };