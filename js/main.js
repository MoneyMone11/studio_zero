$(document).ready(function () {
    $(".main_nav li a, .scrollBtn").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        top = top - 60;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 500);

        $('.xs_menu').removeClass('active');
    });

    $(function () {
        var rellax = new Rellax('.rellax');
    });

    $(function () {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').addClass('active');
            } else {
                $('.scrollup').removeClass('active');
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });

    $(function () {
        $('.o_xs_menu').click(function () {
            $('.xs_menu').addClass('active');
        });

        $('.c_xs_menu').click(function () {
            $('.xs_menu').removeClass('active');
        });
    });
});



window.onscroll = function() {myFunction()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    if (window.pageYOffset == 0) {
        header.classList.remove("sticky");
    }
}



$(function () {
    var bLazy = new Blazy({
        breakpoints: [{
            width: 420 // Max-width
            , src: 'data-src-small'
        }]
        , success: function(element){
            setTimeout(function(){
                // We want to remove the loader gif now.
                // First we find the parent container
                // then we remove the "loading" class which holds the loader image
                var parent = element.parentNode;
                parent.className = parent.className.replace(/\bloading\b/,'');
            }, 200);
        }
    });
});
// <img class="b-lazy" src="images/placeholder.svg"
// data-src="images/whatsapp.svg"
// data-src-small="images/whatsapp.svg"
// alt="whatsapp">
