$(document).ready(function(){
$('#menu').click(function(){
  $(this).toggleClass('navbar');
  $(header).toggleClass('toggle');
});

$(window).on('scroll load', function(){
    $(header).removeClass('toggle');
    $(menu).removeClass('navbar');
} );
console.log("hyyy");
$('a[href*="#"]').on('click',(function(e){
 e.preventDefault();
 $('html,body').animate({
  scrollTo : $($(this).attr('href')).offset().top,
 },
  500,'linear');
}));
});
