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
