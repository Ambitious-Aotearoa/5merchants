$(document).ready(function() {
    var $navbar = $('#storeNav');
    var stickyOffset = $navbar.offset().bottom; 
  
  
    function checkSticky() {
      var scrollPos = $(window).scrollTop(); 

      if (scrollPos >= stickyOffset) {
        $navbar.removeClass('sticky-start'); 
        console.log('removed')
      } else {
        $navbar.addClass('sticky-start'); 
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