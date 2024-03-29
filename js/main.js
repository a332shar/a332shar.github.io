/* Main INIT Function */
function initializeSite() {
    "use strict";
    // OUTLINE DIMENSION AND CENTER
    (function () {
      function centerInit() {
        var mainTitle = $('.main-title');
        mainTitle.css({"margin-top" : (($(window).height() - mainTitle.height()) / 2) + "px"});
      }
      $(document).ready(centerInit);
      $(window).resize(centerInit);
    })();
  
    // Initialization effect
    $('#scene').parallax();
  };
  
  $(window).load(function () {
    $('.preloader').fadeOut(1500);
    initializeSite();
    (function () {
      setTimeout(function () {
        window.scrollTo(0,0);
      }, 0);
    })();
  });