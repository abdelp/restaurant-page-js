const insertBackground = () => {
  const background = document.createElement('div');
  background.id = 'bg-container';

  document.body.prepend(background);
};

const insertTitle = (title) => {
  const content = document.getElementById('content');
  const element = document.createElement('h1');
  element.innerText = title;
  element.className = 'text-center text-white';

  content.appendChild(element);
};

const insertNav = (list) => {
  const ul = document.createElement('ul');
  ul.className = 'nav';

  list.forEach(opt => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-link btn text-white';
    button.innerText = opt.title;
    button.onclick = () => opt.link();
    li.appendChild(button);
    ul.appendChild(li);
  });

  const header = document.createElement('header');
  header.id = 'header';
  header.appendChild(ul);
  document.body.prepend(header);
};

const insertContent = (contentId, content) => {
  const container = document.getElementById('content');
  let subcontainer = document.getElementById(contentId);

  if (!subcontainer) {
    subcontainer = document.createElement('div');
    subcontainer.id = contentId;
    container.appendChild(subcontainer);
  }

  subcontainer.appendChild(content);
};

const createWelcomeMessageElement = (text) => {
  const element = document.createElement('div');
  element.id = 'welcome-message';
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  element.appendChild(paragraph);

  return element;
};

const cleanContent = (elementId) => {
  const content = document.getElementById(elementId);

  if (content) content.innerHTML = '';
};

const createGallery = (menuItems) => {
  const ul = document.createElement('ul');
  ul.className = 'list-group';
  menuItems.forEach(menuItem => {
    const li = document.createElement('li');
    li.className = 'list-group-item';

    const itemContainer = `<div class="row">
      <div class="img-container col-12 col-md-6 col-lg-3"><img src="${menuItem.img}" alt="${menuItem.title}" class="img-thumbnail" style="max-height: 100%;"></div>
        <div class="col-12 col-md-6 col-lg-9 text-center text-md-left">
          <h3>${menuItem.title}</h3>
          <p>${menuItem.description}</p>
        </div>
      </div>
    </div>`;

    li.innerHTML = itemContainer;
    ul.appendChild(li);
  });

  return ul;
};

export {
  insertBackground, insertTitle, insertNav, createWelcomeMessageElement, insertContent,
  cleanContent, createGallery,
};