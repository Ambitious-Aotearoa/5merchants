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



    const navbar = $('.navbar');
    const burger = $('#burger'); 
    const toggler = $('.navbar-toggler');
    const navCollapse = $('#navbarNavDropdown'); 
  
    $('.navbar-collapse').on('show.bs.collapse', () => navbar.addClass('nav-change'));
    $('.navbar-collapse').on('hide.bs.collapse', () => navbar.removeClass('nav-change'));
  

    toggler.on('click', () => burger.toggleClass('cross'));
  
    // // Prevent scrolling when the navbar is expanded
    navCollapse.on('show.bs.collapse', () => $('body').addClass('nav-color no-scroll'));
    navCollapse.on('hidden.bs.collapse', () => $('body').removeClass('nav-color no-scroll'));
  });