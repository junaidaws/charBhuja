$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay:true
  });
  $('.single-item-rtl').slick({
    rtl: false,
    autoplay: true,
    fade:true,
    speed: 5000,
    cssEase: 'ease-in-out'
  });
    
  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    $('.headerWrapper').fadeIn();
	});
  $('.headerOverlay').click(function(){
		$('#nav-icon1').toggleClass('open');
  });
  /* $('.main__headMenu, .headSubMenu').hover(function(){
    $(this).closest('.headMenu').find('.headSubMenu').css('display', 'block');
  }, function(){$(this).closest('.headMenu').find('.headSubMenu').css('display', 'none');
  });*/
  $('.headerOverlay').click(function(){
    $('.headerWrapper').fadeOut();
  }); 