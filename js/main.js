const window_width = $(window).width();

window.onload = function() {
  $("#drop-container").addClass("drop-container");
  $("#drop").addClass("drop");
  $("#top-character").addClass("top-character");
  $("#arrow-bottom").addClass("arrow-bottom");
};

$('.top').outerHeight($(window).height());

$(window).on('resize',function(){
  winH = $(window).height();
  $('.top').outerHeight(winH);
});

if(window_width > 600 && window_width < 960){
  $('.news').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('.news').outerHeight($(window).height()/2.6);
}else {
  $('.news').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
  $('.news').outerHeight(winH);
});

if(window_width > 600 && window_width < 960){
  $('#news-wrapper').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('#news-wrapper').outerHeight($(window).height()/2.6);
}else {
  $('#news-wrapper').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
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

if(window_width > 600 && window_width < 960){
  $('.client').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('.client').outerHeight($(window).height()/2.6);
}else {
  $('.client').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
  $('.client').outerHeight(winH);
});

if(window_width > 600 && window_width < 960){
  $('#client-wrapper').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('#client-wrapper').outerHeight($(window).height()/2.6);
}else {
  $('#client-wrapper').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
  $('#client-wrapper').outerHeight(winH);
});

if(window_width > 600 && window_width < 960){
  $('.supplier').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('.supplier').outerHeight($(window).height()/2.6);
}else {
  $('.supplier').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
  $('.supplier').outerHeight(winH);
});

if(window_width > 600 && window_width < 960){
  $('#supplier-wrapper').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('#supplier-wrapper').outerHeight($(window).height()/2.6);
}else {
  $('#supplier-wrapper').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
  $('#supplier-wrapper').outerHeight(winH);
});

if(window_width > 600 && window_width < 960){
  $('.access').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('.access').outerHeight($(window).height()/2.6);
}else {
  $('.access').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
  $('.access').outerHeight(winH);
});

if(window_width > 600 && window_width < 960){
  $('#access-wrapper').outerHeight($(window).height()/2.6);
}else if(window_width > 320 && window_width < 600){
  $('#access-wrapper').outerHeight($(window).height()/2.6);
}else {
  $('#access-wrapper').outerHeight($(window).height()/1.3);
}

$(window).on('resize',function(){
  winH = $(window).height()/1.3;
  if(window_width > 600 && window_width < 960){
    winH = winH / 2
  }else if(window_width > 320 && window_width < 600){
    winH = winH / 2
  }
  $('#access-wrapper').outerHeight(winH);
});

$(window).fadeThis();