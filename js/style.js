

$('.page-scroll').on('click', function(e){


  var tujuan = $(this).attr('href');

  var elemenTujuan = $(tujuan);

  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 300, 'easeInOutExpo');

  e.preventDefault();

});


// parallax //
// about //
$(window).on('load', function() {
  $('.pkiri').addClass('pmuncul');
  $('.pkanan').addClass('pmuncul');
});



$(window).scroll(function(){

  var winScroll = $(this).scrollTop();

  // jumbotron //

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ winScroll/8 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ winScroll/2 +'%)'
  });

  $('.mt-4 p').css({
    'transform' : 'translate(0px, '+ winScroll/10 +'%)'
  });


  // portofolio //

  if( winScroll > $('.portofolio').offset().top - 200 ) {
      $('.portofolio .img-thumbnail').each(function(i) {
        setTimeout(function() {
          $('.portofolio .img-thumbnail').eq(i).addClass('muncul');

          }, 300 * (i+1));
        });
      }

});