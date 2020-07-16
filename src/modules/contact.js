import * as Display from './display';
import * as Config from './configurations';

const loadContact = () => {
  const subcontentId = Config.getSubcontentId();

  const welcomeMsg = Display.createWelcomeMessageElement(`Phone number: +999 999 999
  Address: Lorem Ipsum Street 999th.
  Email: exampe@test.com
  `);

  Display.cleanContent(subcontentId);
  Display.insertContent(subcontentId, welcomeMsg);
};

export { loadContact };