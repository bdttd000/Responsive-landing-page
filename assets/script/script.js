const menuSlide = () => {
  const open = $('.menu-burger');
  const close = $('.menu-exit-button');
  const menu = $('.menu-links');

  open.click(() => {
    menu.addClass('menu-links-active');
  })

  close.click(() => {
    menu.removeClass('menu-links-active');
  })
}

menuSlide();

const scrollButton = $(".scrollToTop");

window.onscroll = () => {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollButton.css('bottom','1.5rem');
  } else {
    scrollButton.css('bottom','-6rem');
  }
}

scrollButton.click(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
)

scrollFunction();
