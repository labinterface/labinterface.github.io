var flag = 0;
var clickFlag = 0;
var openFlag = 0;

//Ações realizadas quando menu hamburger é clicado
/*$(document).ready(function(){
    $('#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $('.navbar').toggleClass('open');
        $('.position').toggleClass('open');
        $('ul').toggleClass('show');
        $('li').toggleClass('anim');
        $('.fade_me').toggleClass('open');
        $('a.logo_home').toggleClass('remove_link');
        LockScroll(flag);
        flag ++;
	});
});*/

//Função que reconhece caso clique tenha sido no menu ou em outro ponto da tela para fecha-lo
$(document).ready(function(){
    $('body').on('click', function () {
        if(clickFlag == 0 && openFlag == 1) {
            OpClMenu();
            openFlag = 0;
        }
        else {
            clickFlag=0;
        }
    });
    $('body').on('click','#nav-icon4', function() {
        clickFlag = 1;
        openFlag ++;
        OpClMenu();
    });
    
})

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

//Trava o scroll da página quando o menu é inicializado
function LockScroll (trigg){
    var scrollPosition = [self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop ];
    
    if(trigg%2 == 0){
        var html = jQuery('html');
        html.data('scroll-position', scrollPosition);
        html.data('previous-overflow', html.css('overflow'));
        html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);
    }
    else{
        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1])
    }
}

//Ações realizadas quando menu hamburger é clicado(aberto e fechado)
function OpClMenu(){
    if(openFlag == 1){
        $('#nav-icon4').toggleClass('open');
        $('.navbar').toggleClass('open');
        $('.position').toggleClass('open');
        $('ul').toggleClass('show');
        $('li').toggleClass('anim');
        $('.fade_me').toggleClass('open');
        $('a.logo_home').toggleClass('remove_link');
        $('nav').toggleClass('open');
        LockScroll(flag);
        flag ++;
    }
    else{
        $('#nav-icon4').removeClass('open');
        $('.navbar').removeClass('open');
        $('.position').removeClass('open');
        $('ul').removeClass('show');
        $('li').removeClass('anim');
        $('.fade_me').removeClass('open');
        $('a.logo_home').removeClass('remove_link');
        $('nav').toggleClass('open');
        LockScroll(flag);
        openFlag = 0;
        flag++;
    }
}
