import * as Display from "./display";
import * as Config from './configurations';

const loadHome = () => {
  const subcontentId = Config.getSubcontentId();

  const welcomeMsg = Display.createWelcomeMessageElement(`Welcome
  My Restaurant story began in 2001 with a clear and unique vision of traditional oriental food.
  Recognizing the importance of healthy living, a love for flavor, and authenticity.
  My Restaurant has been able to maintain our individuality and creativity, while growing into a 
  unique healthy Oriental food. Our team takes great pride in offering customers a healthy alternative 
  to Oriental food. We hope you enjoy your experience!.`);

  Display.cleanContent(subcontentId);
  Display.insertContent(subcontentId, welcomeMsg);
}

export { loadHome }