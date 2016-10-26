
// humbeger menu
$(document).ready(function(){
  $('#navigation-toggle').on('click',function(){
    if ($('.menu').hasClass('open')) {
      $('.menu').removeClass('open');
    }else{
      $('.menu').addClass('open')
    }
  });
});
