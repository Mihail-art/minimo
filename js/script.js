$(document).ready(function(){
    $('.slider__slick').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
      });      
  });    

document.addEventListener("DOMContentLoaded", hiddenCloseclick());
  document.getElementById('open').addEventListener("click", hiddenCloseclick);
	function hiddenCloseclick() {
	let x = document.getElementById('header__menu');
      if (x.style.display == "none"){
	  x.style.display = "block";
      
	  } else {
	 x.style.display = "none"}
    };
