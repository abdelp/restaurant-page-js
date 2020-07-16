const setBackgroundImage = (elementId, imgSrc) => {
  let element = document.getElementById(elementId);
  element.style.backgroundSize = 'cover';
  element.style.backgroundImage = `url('${imgSrc}')`;
};

const insertTitle = (title) => {
  let header = document.getElementById('header');

  if (!header) {
    header = document.createElement('header');
    header.id = 'header';
    document.body.prepend(header);
  }

  header.innerHTML = '';
  let element = document.createElement('h1');
  element.innerText = title;
  element.classList.add('text-center');

  header.appendChild(element);
};

const insertNav = (list) => {
  let ul = document.createElement('ul');
  ul.className = 'nav justify-content-center';

  list.forEach(opt => {
    let li = document.createElement('li');
    li.classList.add('nav-item');
    let button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-link btn btn-primary';
    button.innerText = opt.title;
    button.onclick = () => opt.link();
    li.appendChild(button);
    ul.appendChild(li);
  });

  content.appendChild(ul);
};

const insertWelcomeMessage = (contentId, message) => {
  let content = document.getElementById(contentId);
  let welcomeContent = document.createElement('div');
  welcomeContent.classList.add('row');
  let col = document.createElement('div');
  col.classList.add('col');

  let p = document.createElement('p');
  p.innerText = message;

  col.appendChild(p);
  welcomeContent.appendChild(col);

  content.appendChild(welcomeContent);
};

const cleanContent = (element) => {
  let content = document.getElementById(element);
  content.innerHTML = '';
}

export { setBackgroundImage, insertTitle, insertNav, insertWelcomeMessage, cleanContent };