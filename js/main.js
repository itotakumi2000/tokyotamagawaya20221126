$('.top').outerHeight($(window).height());

$(window).on('resize',function(){
  winH = $(window).height();
  $('.top').outerHeight(winH);
});

$('.news').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('.news').outerHeight(winH);
});

$('#news-wrapper').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('#news-wrapper').outerHeight(winH);
});

$('.item-explanation-top').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('.item-explanation-top').outerHeight(winH);
});

$('.item-explanation-bottom').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('.item-explanation-bottom').outerHeight(winH);
});

$('.client').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('.client').outerHeight(winH);
});

$('#client-wrapper').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('#client-wrapper').outerHeight(winH);
});

$('.supplier').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('.supplier').outerHeight(winH);
});

$('#supplier-wrapper').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('#supplier-wrapper').outerHeight(winH);
});

$('.access').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('.access').outerHeight(winH);
});

$('#access-wrapper').outerHeight($(window).height()/1.3);

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  $('#access-wrapper').outerHeight(winH);
});

$(window).fadeThis();