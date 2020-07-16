import * as Display from './modules/display';
import * as Config from './modules/configurations';
import * as Home from './modules/home';
import 'bootstrap/dist/css/bootstrap.min.css';

const contentId = Config.getContentId();
Display.cleanContent(contentId);
Display.setBackgroundImage(contentId, Config.getBackgroundImg());
Display.insertNav(Config.getLinks());
Home.loadHome();