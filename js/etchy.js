//clear grid
$('.right').click(function(){
  //sets all boxes to white
  $('ul>li').css('background-color', 'white');
});

$('.left').click(function(){
  //deletes all elements on screen
  $('.wrapper').empty();
  //prompt for what size user would like new grid
  var size = prompt('What size would you like? Max is 50');
  //prompt user for color
  var color = prompt('What color would you like?');
  //forces max size of 50
  if(size>50){
    size = 50;
  }
  //forces default size of 4
  else if(size<4){
    location.reload();
  }
  var cssSize = size * 25;

  $('.wrapper').css('max-width', '' + cssSize +'px')
  $('.wrapper').css('max-height', '' + cssSize +'px')

  //loops to size specified while rebuilding grid to size specified
  for (var i = 0; i<size; i++){
    $('.wrapper').append('<ul></ul>')
  }
  //loops to size specified while rebuilding grid to size specified
  for (var j = 0; j<size; j++){
    $('ul').append('<li></li>')
  }

  $('li').hover(function(){
    $(this).css('background-color', color);
  });

});

//changes color
$('li').hover(function(){
  $(this).css('background-color', 'purple');
});
