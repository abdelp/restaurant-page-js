const setBackgroundImage = (elementId, imgSrc) => {
  let element = document.getElementById(elementId);
  element.style.backgroundSize = 'cover';
  element.style.backgroundImage = `url('${imgSrc}')`;
};

const insertTitle = (title) => {
  let element = document.createElement('h1');
  element.innerText = title;
  element.classList.add('text-center');
  let content = document.getElementById('content');

  content.appendChild(element);
};

const insertNav = (list) => {
  let ul = document.createElement('ul');
  ul.className = 'nav justify-content-center';

  list.forEach(opt => {
    let li = document.createElement('li');
    li.classList.add('nav-item');
    let a = document.createElement('a');
    a.classList.add('nav-link');
    a.innerText = opt.title;
    a.href = opt.link;
    li.appendChild(a);
    ul.appendChild(li);
  });

  content.appendChild(ul);
};

const insertWelcomeMessage = (message) => {
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

const addGallery = (items) => {

}

export { setBackgroundImage, insertTitle, insertNav, insertWelcomeMessage };