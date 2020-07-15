const setBackgroundImage = (elementId, imgSrc) => {
  let element = document.getElementById(elementId);

  element.style.backgroundImage = `url('${imgSrc}')`;
};

const insertTitle = (title) => {
  let element = document.createElement('h1');
  element.innerText = title;
  element.classList.add('text-center');
  let content = document.getElementById('content');

  content.appendChild(element);
}

const insertSidebar = (list) => {
  let ul = document.createElement('ul');
  ul.classList.add('list-group');

  list.forEach(opt => {
    let a = document.createElement('a');
    a.classList.add('list-group-item');
    a.innerText = opt.title;
    a.href = opt.link;
    ul.appendChild(a);
  });

  content.appendChild(ul);
}

export { setBackgroundImage, insertTitle, insertSidebar };