import * as Display from "./display";
import backgroundImg from '../assets/sushi-background.jpg';

const loadHome = () => {
  Display.setBackgroundImage('content', backgroundImg);
  Display.insertTitle('My Restaurant');
  Display.insertNav([{title: 'Home', link: ''},
                    {title: 'About Us', link: ''},
                    {title: 'Sushi', link: ''},
                    {title: 'Gallery', link: ''},
                    {title: 'Cousine', link: ''},
                    {title: 'Contact Us', link: ''}]);

  Display.insertWelcomeMessage(`Welcome
  My Restaurant story began in 2001 with a clear and unique vision of traditional oriental food.
  Recognizing the importance of healthy living, a love for flavor, and authenticity.
  My Restaurant has been able to maintain our individuality and creativity, while growing into a 
  unique healthy Oriental food. Our team takes great pride in offering customers a healthy alternative 
  to Oriental food. We hope you enjoy your experience!.`);
}

export { loadHome }