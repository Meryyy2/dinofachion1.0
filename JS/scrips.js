$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbarr').addClass("sticky");
        }else{
            $('.navbarr').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /*scroll up btn*/
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    /* Toggle menu */ 
    $('.menu-btn').click(function(){
        $('.navbarr .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


   
}); 

function agregarAlCarrito(producto) {
    console.log('Agregado al carrito: ' + producto);
    
  }