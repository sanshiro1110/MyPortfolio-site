
const menuButton = document.querySelector('#menu');
const menuContent = document.querySelector('#menu-content');
const goBackButton = document.querySelector('#go-back-button');

const profileHeight = document.querySelector('#profile').offsetTop;
const skillsHeight = document.querySelector('#skills').offsetTop;
const worksHeight = document.querySelector('#works').offsetTop;
const contactHeight = document.querySelector('#contact').offsetTop;

function noScroll(event) {
  event.preventDefault();
}

//文字列にspanタグをつける
function spanAdd(string) {
  let concutString = '';
  for(let c of string) {
    c = c.replace(' ', '&nbsp;');
    concutString += `<span class="char">${c}</span>`;
  }
  return concutString;
}

//タイトルにspanタグをつける
function titleTrim () {
  const titleParagraph = document.querySelector('#title p');
  const titleH1 = document.querySelector('#title h1');
  const paragraphString = titleParagraph.innerHTML.trim();
  const h1String = titleH1.innerHTML.trim();

  titleParagraph.innerHTML = spanAdd(paragraphString);
  titleH1.innerHTML = spanAdd(h1String);
}

//PCサイズのタイトルアニメーション
function titleAnimationOnPC() {
  document.addEventListener('touchmove', noScroll, {passive: false});
  document.addEventListener('mousewheel', noScroll, {passive: false});
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
        document.removeEventListener('touchmove', noScroll, {passive: false});
        document.removeEventListener('mousewheel', noScroll, {passive: false});
      }, 1000);
    }, 1500);
  }, 1000);
}

//モバイルサイズのタイトルアニメーション
function titleAnimationOnMobie() {
  document.addEventListener('touchmove', noScroll, {passive: false});
  document.addEventListener('mousewheel', noScroll, {passive: false});
  document.querySelector('#title p').classList.add('inview');
  setTimeout(() => {
    document.querySelector('#title h1').classList.add('inview');
    setTimeout(() => {
      document.removeEventListener('touchmove', noScroll, {passive: false});
      document.removeEventListener('mousewheel', noScroll, {passive: false});
    }, 1500);
  }, 1000);
}

//profile,skills,works,contactでの文字アニメーション
function stringAnimation() {
  const profile = document.querySelector('#profile');
  const skills = document.querySelector('#skills');
  const works = document.querySelector('#works');
  const contact = document.querySelector('#contact');

  const removeItems = document.querySelectorAll('#removeItem');
  const showItems = document.querySelectorAll('#showItem');

  removeItems.forEach(item => {
    const removeString = item.innerHTML.trim();
    item.innerHTML = spanAdd(removeString);
  });
  showItems.forEach(item => {
    const showString = item.innerHTML.trim();
    item.innerHTML = spanAdd(showString);
  });

  window.addEventListener('scroll', () => {
    let scroll = document.documentElement.scrollTop;
    if(scroll > 300) {
      profile.classList.add('rolling');
    } else {
      profile.classList.remove('rolling');
    }
    if(scroll > (profileHeight) + 300) {
      skills.classList.add('rolling');
    } else {
      skills.classList.remove('rolling');
    }
    if(scroll > (skillsHeight) + 300) {
      works.classList.add('rolling');
    } else {
      works.classList.remove('rolling');
    }
    if(scroll > (worksHeight) + 300) {
      contact.classList.add('rolling');
    } else {
      contact.classList.remove('rolling');
    }
  });
}

//menuクリック時、menuの項目クリック時のアニメーション
function menuClickAnimation() {

  menuButton.addEventListener('click', () => {
    menuContent.classList.toggle('open');
    menuButton.classList.toggle('open');
  });
  goBackButton.addEventListener('click', () => {
    menuContent.classList.remove('open');
    menuButton.classList.remove('open');
  });

  const toProfile = document.querySelectorAll('#to-profile');
  const toSkills = document.querySelectorAll('#to-skills');
  const toWorks = document.querySelectorAll('#to-works');
  const toContact = document.querySelectorAll('#to-contact');

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
}


window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  titleTrim();
  if (window.matchMedia('(max-width: 480px)').matches) {
    titleAnimationOnMobie();
  } else {
    titleAnimationOnPC();
  }
  stringAnimation();
  menuClickAnimation();
});
