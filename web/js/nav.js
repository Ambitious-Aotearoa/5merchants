$(document).ready(function() {

    var navStore = $('#storeNav');
    var $navbar = $('.sticky-top');

  
    function checkSticky() {
      var scrollPos = $(window).scrollTop(); 
      var navStoreBottom = navStore.offset().top + navStore.outerHeight();


      if (scrollPos >= navStoreBottom) {
        $navbar.removeClass('sticky-start'); 
        $('body').addClass('store-nav-hidden'); 
        console.log('removed')
      } else {
        $navbar.addClass('sticky-start'); 
        $('body').removeClass('store-nav-hidden'); 
        console.log('added')
      }
    }
  
    checkSticky()
    $(window).on('scroll', checkSticky);





    const body = $('body');
    const navbar = $('.navbar');
    const burger = $('#burger'); 
    const toggler = $('.navbar-toggler');
    const navCollapse = $('#navbarNavDropdown'); 
    
   
    $('.navbar-collapse').on('show.bs.collapse', () => body.addClass('no-scroll'));
    $('.navbar-collapse').on('hide.bs.collapse', () => body.removeClass('no-scroll'));
    
    
    toggler.on('click', () => burger.toggleClass('cross'));
    
    $(window).on('resize', () => {
      if ($(window).width() >= 768) {
        body.removeClass('no-scroll');
        burger.removeClass('cross'); 
        if (navCollapse.hasClass('show')) {
          navCollapse.collapse('hide');
        }
      }
    });
    
  });