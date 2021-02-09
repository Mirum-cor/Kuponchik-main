const menuBtn = document.querySelector('#menu-toggle');
const mobileMenuLinks = makeArrayFromNodelist(document.querySelectorAll('.menu-item'));

const toTopBtn = document.querySelector('.go-to-top');

let animationDelay = 0;

toTopBtn.addEventListener('click', function () {
  window.scrollTo(pageYOffset, 0);
});

window.addEventListener('load', function () {
  const introduceElements = makeArrayFromNodelist(
    document.querySelector('.introduce').firstElementChild.children);
  introduceElements.forEach(function (elem) {
    if (elem.nodeName !== 'IMG') {
      elem.classList.add('animate__slideInUp');
      elem.style.animationDelay = animationDelay + 'ms';
    }
    setTimeout(function () {
      elem.classList.remove('invisible');
    }, animationDelay);
    if (elem.nodeName !== 'INPUT' && elem.nodeName !== 'DIV') {
      animationDelay += 250;
    }
  });
});

$(window).scroll(function () {
  $('.description-text').children('h2').each(showAnimation);
  $('.description-text').children('h3').each(showAnimation);
  $('.offers-description').children('img').each(showAnimation);
  $('.offers-cards').children('div').each(showAnimation);
  $('#benefits .container').children('h2').each(showAnimation);
  $('.benefit').each(showAnimation);
  $('.promo-video .container')
    .children('p, img:last, iframe')
    .each(showAnimation);
  $('.promo-video .container')
    .children('img:first')
    .each(animatePromoVideoImgs);
  if ($(window).width() > 1180) {
    $('.promo-video .container')
      .children('img:eq(1)')
      .each(animatePromoVideoImgs);
  }
  if ($(window).width() > 700) {
    $('.promo-video .container')
      .children('img:eq(2)')
      .each(animatePromoVideoImgs);
  }
  $('.get-offers').children().each(showAnimation);
  $('.share-with-friends').children().each(showAnimation);
  $('.give-feedback').children().each(showAnimation);
  $('.call-to-action .container').children().each(showAnimation);
});

menuBtn.addEventListener('click', function () {
  if (menuBtn.checked) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

mobileMenuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    document.body.style.overflow = 'auto';
    menuBtn.checked = false;
  });
});

function animatePromoVideoImgs() {
  const imagePos = $(this).offset().top;
  const topOfWindow = $(window).scrollTop();
  const heightOfWindow = $(window).height();
  if (imagePos < topOfWindow + heightOfWindow - 200) {
    $(this).fadeTo(0, 1);
  }
}

function makeArrayFromNodelist(nodelist) {
  const array = [];
  for (let i = 0; i < nodelist.length; i++) {
    array.push(nodelist[i]);
  }
  return array;
}

function showAnimation() {
  const imagePos = $(this).offset().top;
  const topOfWindow = $(window).scrollTop();
  const heightOfWindow = $(window).height();
  if (imagePos < topOfWindow + heightOfWindow - 200) {
    $(this).addClass('animate__slideInUp');
    $(this).removeClass('invisible');
  }
}
