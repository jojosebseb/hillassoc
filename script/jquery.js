$( window ).resize(function() {
  if ($(window).width() > 1080) {
    console.log("desktop");
    //desktop
  }
  else {
    console.log("mobile");
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});
var win = $( window );
var footer = $('.footer');
var s2Mod = $('.section-2-modules');

win.on('scroll', function(){
  var ts = win.scrollTop();
  if (ts > 100) {
    s2Mod.css({
      top: 0,
    })
  }
  // var topscroll = win.scrollTop()/1;
  // var opc = topscroll / 100;
  // footer.css({
  //   opacity : opc,
  // })
});

//what-we-do-tab
var tabHandle = $('.tab-handle-container > ul > li');
var tabContent = $('.tab-content');
var sectionContent = $('.what-we-do-section');

tabHandle.on('click', function(){
  tabHandle.removeClass('active');
  tabContent.removeClass('active');
  sectionContent.removeClass('active');

  $(this).addClass('active');
  var classChoice = $(this).attr('id');
  console.log(classChoice);
  $('.'+classChoice).addClass('active');
})
//what-we-do-tab

//login
var loginBtn = $('.risLogin');
var loginClose = $('.login-close');
loginBtn.on('click', function(){
  $('.login-overlay').css({
    display: 'block'
  })
})
loginClose.on('click', function(){
  $('.login-overlay').css({
    display: 'none'
  })
})
//login


//mobile
 var mobileHandle = $('.mobile-handle');
 var archiveHandle = $('.archive-handle');
 var archiveClose = $('.archive-close');
 var mobileNav = $('.navbar-right-navigation');
 var archiveNav = $('.archive-container');
 var navActive = $('.nav-active');
 var navTop = $('.navbar-right-top');
mobileHandle.on('click', function(){
 mobileNav.toggleClass('nav-active');
 navTop.toggleClass('active');
 mobileHandle.toggleClass('active')
});
mobileNav.on('click', function(){
 mobileNav.toggleClass('nav-active');
 navTop.toggleClass('active');
});
archiveHandle.on('click', function(){
  archiveNav.css({
    left: 0,
  })
})
archiveClose.on('click', function(){
  archiveNav.css({
    left: '-100%',
  })
})

//mobile

//ris
var filterOptions = $('.scroll-controller');
var filterHandle = $('.filter-handle');
var verticalTabHandle = $('.vertical-tab-container');
var customScroll = $('.custom-scroll');
var newsContainer = $('.news-container');
var newsDetail = $('.news-detail-content');
var backBtn = $('.news-detail-category')
var newsParent = $('.news-parent');

newsContainer.on('click', function(){
  newsDetail.css({
    left: 0,
    'transform': 'scale(1)',
  })
  newsParent.css({
    'transform': 'scale(0.9)',
    opacity: 0,
  })
})
backBtn.on('click', function(){
  newsDetail.css({
    left: '200%',
    // 'transform': 'skew(20deg) scale(1.5)',
  })
  newsParent.css({
    opacity: 1,
    'transform': 'scale(1)',
  })
})
newsDetail.on('swiperight', function(){
  newsDetail.css({
    left: '200%',
    // 'transform': 'skew(20deg) scale(1.5)',
  })
  newsParent.css({
    opacity: 1,
    'transform': 'scale(1)',
  })
})
filterOptions.jScrollPane(
  {
    animateScroll : true,
  }
);
// customScroll.jScrollPane();
filterHandle.on('click', function(){
  // filterHandle.removeClass('active');
  // $(this).addClass('active');
  if (filterHandle.hasClass('active')) {
    filterHandle.removeClass('active');
  }
  else {
    $(this).addClass('active');
  }
})
verticalTabHandle.on('click', function(){
  verticalTabHandle.removeClass('active');
  $(this).toggleClass('active');
})
//ris



// $('.switch-button').on('click', function(){
//   $('.overlay').toggleClass('batik');
//   $('.left-banner').toggleClass('batik');
//   $('.right-banner').toggleClass('batik');
//   $('.text-overlay').toggleClass('batik-text');
// })
