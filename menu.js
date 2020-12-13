//Ações realizadas quando menu Hamburger é selecionado
$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $('.navbar').toggleClass('open');
        $('.position').toggleClass('open');
	});
});

//Navbar some quando o usuário scrollar a tela pra baixo e reaparece quando ela scrollar para cima
var prevScrollpos = window.pageYOffset;
var TopFix = window.innerHeight;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || prevScrollpos < ((TopFix * 25)/100)) {
    document.getElementById("header").style.top = "0";
  } else{
    document.getElementById("header").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
} 