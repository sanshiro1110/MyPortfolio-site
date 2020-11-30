const menuButton = document.querySelector('#menu');
const menuContent = document.querySelector('#menu-content');
const goBackButton = document.querySelector('#go-back-button');

menuButton.addEventListener('click', () => {
  menuContent.classList.toggle('open');
  menuButton.classList.toggle('open');
});
goBackButton.addEventListener('click', () => {
  menuContent.classList.remove('open');
  menuButton.classList.remove('open');
});

//menuの項目クリック時にwindowを移動させる処理
const toProfile = document.querySelectorAll('#to-profile');
const profileHeight = document.querySelector('.profile').offsetTop;
const toSkills = document.querySelectorAll('#to-skills');
const skillsHeight = document.querySelector('.skills').offsetTop;
const toWorks = document.querySelectorAll('#to-works');
const worksHeight = document.querySelector('.works').offsetTop;
const toContact = document.querySelectorAll('#to-contact');
const contactHeight = document.querySelector('.contact').offsetTop;

for(let i = 0; i < toProfile.length; i ++) {

  toProfile[i].addEventListener('click', () => {
    window.scrollTo({
      top: profileHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
  toSkills[i].addEventListener('click', () => {
    window.scrollTo({
      top: skillsHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
  toWorks[i].addEventListener('click', () => {
    window.scrollTo({
      top: worksHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
  toContact[i].addEventListener('click', () => {
    window.scrollTo({
      top: contactHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
}

//load時のアニメーション

const titleParagraph = document.querySelector('#title p');
const titleH1 = document.querySelector('#title h1');
const paragraphString = titleParagraph.innerHTML.trim();
const h1String = titleH1.innerHTML.trim();

function spanAdd(string) {
  let concutString = '';
  for(let c of string) {
    c = c.replace(' ', '&nbsp;');
    concutString += `<span class="char">${c}</span>`;
  }
  return concutString;
}

titleParagraph.innerHTML = spanAdd(paragraphString);
titleH1.innerHTML = spanAdd(h1String);

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#title p').classList.add('inview');
  setTimeout(() => {
    document.querySelector('#title h1').classList.add('inview');
    setTimeout(() => {
      menuContent.classList.add('inview');
      menuContent.classList.add('open');
      menuButton.classList.add('open');
      setTimeout(() => {
        menuContent.classList.remove('open');
        menuButton.classList.remove('open');
      }, 1000);
    }, 1500);
  }, 1000);
});
