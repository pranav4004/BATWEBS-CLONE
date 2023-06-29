$('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('nav.wrapper').toggleClass('active');
});

$('.investory_slider.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dot: true,
    items: 1
})

$('.blog_slider.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: true,
    items: 1
})
$('.banner_slider.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dot: false,
    items: 1,
    autoplay:true,
     mouseDrag  : true,
    touchDrag: true,
})

$(document).ready(function () {
    (function ($) {
        $.fn.visible = function (partial) {
            var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        };
    })(jQuery);
    var win = $(window);
    var allMods1 = $(".about_us .line_3, .about_detail > *");
    win.scroll(function (event) {
        allMods1.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });

    var allMods2 = $(".about_block .block_item");
    win.scroll(function (event) {
        allMods2.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
    var allMods3 = $(".news_list .news_item,.news .line_3");
    win.scroll(function (event) {
        allMods3.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
    var allMods4 = $(".project_block .project_item,.projects .line_3");
    win.scroll(function (event) {
        allMods4.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
    var allMods5 = $(".investory_slider,.investory .line_3");
    win.scroll(function (event) {
        allMods5.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
    var allMods6 = $(".smart_col , .smart_city .line_3 , .dream_project");
    win.scroll(function (event) {
        allMods6.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
    var allMods7 = $(".major_highlight ,.major_highlight .line_3");
    win.scroll(function (event) {
        allMods7.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
    var allMods8 = $(".footer_line");
    win.scroll(function (event) {
        allMods8.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
    var allMods9 = $(".our_strength .line_3");
    win.scroll(function (event) {
        allMods9.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                setTimeout(function () {
                    el.addClass("come-in");
                }, i * 200);
            }
        });
    });
})


var win = $(window);
win.scroll(scrollAnimation);
win.load(scrollAnimation);
win.load(same_height);
win.resize(same_height);

function scrollAnimation() {

    var scrollTop = $(window).scrollTop()
    if (scrollTop > 10) {
        jQuery('header').addClass('sticky')
    } else {
        jQuery('header').removeClass('sticky')
    }

}
$('label[for="check_box"]').click(function () {
    $(this).toggleClass('removed');
})

/* same height */
function same_height() {
    if (window.innerWidth > 787) {
        $('.contact_form').each(function () {
            var highestBox = 0;
            $('.col_item', this).each(function () {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $('.col_item', this).height(highestBox);
        });
    }
}

$("#form-signup .mb-3 .pw_eye").on('click', function () {
    var passwordId = $(this).parents('.mb-3').find('input').attr('id');
    if ($(this).hasClass('show-password')) {
        $("#" + passwordId).attr("type", "password");
        $(this).removeClass('show-password');

    } else {
        $("#" + passwordId).attr("type", "text");
        $(this).addClass('show-password');
    }
});
$(".sign_up_form label .pw_eye").on('click', function () {
    var passwordId = $(this).parents('label[for=password]').find('input').attr('id');
    if ($(this).hasClass('show-password')) {
        $("#" + passwordId).attr("type", "password");
        $(this).removeClass('show-password');

    } else {
        $("#" + passwordId).attr("type", "text");
        $(this).addClass('show-password');
    }
});

$("label[for=password] .fa-eye,form#form-signup label .fa-eye").on('click', function () {
    var passwordId = $(this).parents('label').find('input').attr('id');
    if ($(this).hasClass('show-password')) {
        $("#" + passwordId).attr("type", "text");
        $(this).removeClass('show-password');
    } else {
        $("#" + passwordId).attr("type", "password");
        $(this).addClass('show-password');
    }
});

if ($(window).size() < 768) {
    jQuery('header ul li').click(function () {
        jQuery(this).find('ul.sub_menu').slideToggle();
    });
}
