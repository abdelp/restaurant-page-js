import * as Display from './modules/display';
import * as Config from './modules/configurations';
import * as Home from './modules/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

Display.insertBackground();
Display.insertNav(Config.getLinks());
Display.insertTitle('My Restaurant');
Home.loadHome();