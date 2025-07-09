
/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t) {
    var e = -1, o = -1, n = function (t) { return parseFloat(t) || 0 }, a = function (e) { var o = 1, a = t(e), i = null, r = []; return a.each(function () { var e = t(this), a = e.offset().top - n(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null; null === s ? r.push(e) : Math.floor(Math.abs(i - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), i = a }), r }, i = function (e) {
        var o = {
            byRow: !0, property: "height", target: null, remove: !1
        }; return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
    }, r = t.fn.matchHeight = function (e) { var o = i(e); if (o.remove) { var n = this; return this.css(o.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(n) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) }; r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
        r._afterUpdate = null, r._rows = a, r._parse = n, r._parseOptions = i, r._apply = function (e, o) {
            var s = i(o), h = t(e), l = [h], c = t(window).scrollTop(), p = t("html").outerHeight(!0), u = h.parents().filter(":hidden"); return u.each(function () { var e = t(this); e.data("style-cache", e.attr("style")) }), u.css("display", "block"), s.byRow && !s.target && (h.each(function () {
                var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: o, "padding-top": "0",
                    "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden"
                })
            }), l = a(h), h.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || "") })), t.each(l, function (e, o) {
                var a = t(o), i = 0; if (s.target) i = s.target.outerHeight(!1); else {
                    if (s.byRow && a.length <= 1) return void a.css(s.property, ""); a.each(function () {
                        var e = t(this), o = e.attr("style"), n = e.css("display"); "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block"); var a = {
                            display: n
                        }; a[s.property] = "", e.css(a), e.outerHeight(!1) > i && (i = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                    })
                } a.each(function () { var e = t(this), o = 0; s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), o += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(s.property, i - o + "px")) })
            }), u.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
                this
        }, r._applyDataApi = function () { var e = {}; t("[data-match-height], [data-mh]").each(function () { var o = t(this), n = o.attr("data-mh") || o.attr("data-match-height"); n in e ? e[n] = e[n].add(o) : e[n] = o }), t.each(e, function () { this.matchHeight(!0) }) }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (n, a) {
            if (a && "resize" === a.type) {
                var i = t(window).width(); if (i === e) return; e = i;
            } n ? o === -1 && (o = setTimeout(function () { s(a), o = -1 }, r._throttle)) : s(a)
        }, t(r._applyDataApi); var h = t.fn.on ? "on" : "bind"; t(window)[h]("load", function (t) { r._update(!1, t) }), t(window)[h]("resize orientationchange", function (t) { r._update(!0, t) })
});

jQuery('.mht').matchHeight();
jQuery('.mhitem').matchHeight();
jQuery('.mhloc').matchHeight();



new Swiper('.swiper-home', {
    speed: 400,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


new Swiper('.swiper-part', {
    slidesPerView: 1,
    spaceBetween: false,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    speed: 400,
    navigation: {
        prevEl: '.button-out-p, .button-in-p',
        nextEl: '.button-out-n, .button-in-n',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            loop: false,

        },

        450: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },

        1100: {
            slidesPerView: 5,
        },

        1800: {
            slidesPerView: 5,
            spaceBetween: 120,
            loop: false,
            autoplay: false,
        }
    },

});

// ===========----================-----


$('.sub-btn').click(function (e) {
    e.preventDefault();
    $('.sub-menu').removeClass('active');
    var current = $(this).addClass('active').attr('data-menu');
    console.log(current);
    // $('.sub-menu').hide();
    $('#submenu-' + current + '').addClass('active');
});

$('.sub-btn-prev').click(function (e) {
    e.preventDefault();
    $('.sub-menu').removeClass('active');
    // $('.cont-items').hide();
});

// ===========----================-----



$(function () {

    // HEADER SUBMENU 

    $('.header_bot a').hover(function () {
        $('.header_bot a').removeClass('active');
        $(this).addClass('active').attr('data-menu');
        var current = $(this).parent().addClass('active').attr('data-menu');
        console.log(current);
        // $('.header_sub-bot-wrap').hide();
        $('#cont-' + current + '').stop( true, true ).slideDown();
        $(".menucloser").stop( true, true ).show();
    });



    $('.menucloser').hover(function () {
        $('.header_sub-bot-wrap').stop( true, true ).slideUp();
        $('.header_bot li').removeClass('active');
        $('.header_bot a').removeClass('active');
        $(".menucloser").fadeOut();
    });

    //  SUBMENU END

    // ===========----================-----

    $('.cards .cards__item').on('click', function(){
        let title = $(this).children('.name').first();
        let textr = title.text();
        // console.log(textr);
        let res = textr.trim();
        console.log(res);
        $('.name-prod').val(res);
    });


});

$(function () {
    $('.header_mob-burger').click(function (event) {
        $('.header_mob-burger, .header_mob-menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});


$(function () {
    $('.finder__item').hover(function (event) {
        $(this).toggleClass('active');
    })
});


// Used Forklifts ////////////

$('.eng__item').click(function (e) {
    e.preventDefault();
    $('.eng__cont').removeClass('active');
    var current = $(this).addClass('active').attr('data-menu');
    console.log(current);
    $('.eng__cont').hide();
    $('#con-' + current + '').show();
});

$('.eng__cont-close').click(function (e) {
    e.preventDefault();
    $('.eng__cont').removeClass('active');
    $('.eng__cont').hide();
});


// contact //////

$('.cont-link').hover(function (e) {
    e.preventDefault();
    $('.cont-items').removeClass('active');
    var current = $(this).addClass('active').attr('data-menu');
    console.log(current);
    $('.cont-items').hide();
    $('#contact-' + current + '').show();
});

$('.cont-items-close').click(function (e) {
    e.preventDefault();
    $('.cont-items').removeClass('active');
    $('.cont-items').hide();
});


$('.vedeo-box-link').click(function (e) {
    e.preventDefault();
    $('.vedeo-box-link').hide();
});


let videoElem = document.querySelector(".vid__left video");
let playButton = document.querySelector(".vid__left .vedeo-box-link");


playButton.addEventListener("click", handlePlayButton, false);
// playVideo();

async function playVideo() {
    try {
        await videoElem.play();
        playButton.classList.add("playing");
    } catch (err) {
        playButton.classList.remove("playing");
    }
}

function handlePlayButton() {
    if (videoElem.paused) {
        playVideo();
    } else {
        videoElem.pause();
        playButton.classList.remove("playing");
    }
}










