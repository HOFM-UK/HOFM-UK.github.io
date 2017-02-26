// When dom is ready
$(document).ready(function() {
	// Wrap Widget Content
	$(".the-widget").each(function(index, el) {
		if($(this).find(".widget-title").length!==0){
			$(this).find(".widget-title").next().wrap('<div class="widget-content"></div>');
		}
		else{
			$(this).wrapInner('<div class="widget-content"></div>');
		}
	});

    //Click event to scroll to top
    $('.go-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // Mobile menu toggle
    $("#header-mobile .btn-menu").click(function(event) {
        event.preventDefault();
        if($("#header-mobile").hasClass('active-menu-share')){
            $("#header-mobile .btn-share-close").trigger('click');
            setTimeout(
            function() 
            {
                show_mobile_menu_layer();
            }, 700);
        }
        else{
            show_mobile_menu_layer();
        }
    });

    // Mobile Share toggle
    $("#header-mobile ul.single-share-nav li a.btn-share").click(function(event) {
        event.preventDefault();
        if($("#header-mobile").hasClass('active-menu')){
            $("#header-mobile .btn-menu").trigger('click');
            setTimeout(
            function() 
            {
                show_mobile_share_layer();
            }, 700);
        }
        else{
            show_mobile_share_layer();
        }
    });

    $(".btn-share-close").click(function(event) {
        event.preventDefault();
        $("#header-mobile").removeClass('active-menu-share');
        
        $("#header-mobile ul.single-share-nav li a.btn-share").show();
        $("#header-mobile .btn-share-close").hide();
    });

    function show_mobile_menu_layer(){
        $("#header-mobile .btn-menu").toggleClass('is-active');
        $("#header-mobile").toggleClass('active-menu');

        $("#header-mobile .mobile-share-wrapper").hide();
        $("#header-mobile .mobile-menu-wrapper").show();
    }

    function show_mobile_share_layer(){
        $("#header-mobile").removeClass('active-menu');
        $("#header-mobile").addClass('active-menu-share');

        $("#header-mobile ul.single-share-nav li a.btn-share").hide();
        $("#header-mobile .btn-share-close").show();

        $("#header-mobile .mobile-share-wrapper").show();
        $("#header-mobile .mobile-menu-wrapper").hide();
    }

    // Follow me box toggle
    $(".btn-follow-me").click(function(event) {
        event.preventDefault();
        $(".btn-follow-me-close").toggleClass('is-active');
        $(".mobile-follow-me").toggleClass('active');
        setTimeout(toggle_mobile_follow, 400);
        $("body").toggleClass('no-scroll');
    });
    $(".btn-follow-me-close").click(function(event) {
        $(this).toggleClass('is-active');
        event.preventDefault();
        $(".mobile-follow-me .wrapper").toggleClass('active');
        setTimeout(toggle_mobile_follow_parent, 500);
        $("body").toggleClass('no-scroll');
    });

    // Search box toggle - tablet
    $("#header-tablet ul.top-menu li.btn-search a").click(function(event) {
        event.preventDefault();
        $(".body-overlay").addClass("active");
        $("#header-tablet .search-wrapper-parent").addClass("active");
        $("#btn-search-close").removeClass('hide');
    });
    $("#header-tablet .search-wrapper-parent .search-wrapper #searchform #btn-search-close").click(function(event) {
        event.preventDefault();
        $(".body-overlay").removeClass("active");
        $("#header-tablet .search-wrapper-parent").removeClass("active");
        $("#btn-search-close").addClass('hide');
    });

    // Search box toggle - desktop
    $("#header ul.top-menu li.btn-search a").click(function(event) {
        event.preventDefault();
        $(".body-overlay").addClass("active");
        $("#header .search-wrapper").addClass("active");
        $("#header .search-wrapper #searchform #btn-search-close").addClass('is-active');
    });
    $("#header .search-wrapper #searchform #btn-search-close").click(function(event) {
        event.preventDefault();
        $(".body-overlay").removeClass("active");
        $("#header .search-wrapper").removeClass("active");
        $("#header .search-wrapper #searchform #btn-search-close").removeClass('is-active');
    });

    // Menu toggle - tablet
    $("#header-tablet ul.top-menu li.btn-menu a").click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(".tablet-menu-wrapper").toggleClass("active");
        $('body').toggleClass('no-scroll');   
    });

    // Shop Menu toggle - Mobile
    $("#content .shop-sidebar .shop-nav-mobile h3").click(function(event) {
        event.preventDefault();
        $("#content .shop-sidebar .shop-nav-mobile").toggleClass("active");
        $("#content .shop-sidebar .shop-nav-mobile ul.categories-menu li").each(function(index, el) {
            if($(el).hasClass('current-menu-item')===false)   {
                $(el).slideToggle();
            }
        });
    });
$("#content .shop-sidebar .shop-nav-mobile .currentlink").click(function(event) {
        event.preventDefault();
        $("#content .shop-sidebar .shop-nav-mobile").toggleClass("active");
        $("#content .shop-sidebar .shop-nav-mobile ul.categories-menu li").each(function(index, el) {
            if($(el).hasClass('current-menu-item')===false)   {
                $(el).slideToggle();
            }
        });
    });
    // Videos carousel - Mobile
	$("#videos .the-carousel").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '0px',
        accessibility: false,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: '<div class="left-shade"><button type="button" class="slick-prev">Previous</button></div>',
        nextArrow: '<div class="right-shade"><button type="button" class="slick-next">Next</button></div>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                    prevArrow: '<div class="left-shade"><button type="button" class="slick-prev">Previous</button></div>',
                    nextArrow: '<div class="right-shade"><button type="button" class="slick-next">Next</button></div>'
                }
            },
            {
                breakpoint: 569,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0px',
                    prevArrow: '<div class="left-shade"><button type="button" class="slick-prev">Previous</button></div>',
                    nextArrow: '<div class="right-shade"><button type="button" class="slick-next">Next</button></div>'
                }
            }
        ]
    });

    // Instagram Widget Styling
    /*
$("#instagram-box ul li a img").load(function() {
        $(this).parent().append('<span class="caption"><span class="the-btn">View Instagram</span></span>');
    });
*/
 $("#instagram-box ul li a").append('<span class="caption"><span class="the-btn">View Instagram</span></span>');

    // Videos Widget Styling
    $("#videos .slick-slide .textwidget").each(function(index, el) {
        var youtube_url = $(el).html();
        var thumb = Youtube.thumb(youtube_url, 'big');
        var video_html = '<a href="' + youtube_url + '" target="_blank" class="the-video">' +
                        '<img src="' + thumb + '" alt="">' +
                        '<span class="caption">' +
                            '<span class="play-button"></span>'+
                        '</span>' +
                    '</a>' +
                    '<!-- /.the-video -->';

        $(el).html(video_html);
    });
});


// Sticky tablet header
$(window).scroll(function(){
    var sticky = $('#header-tablet'),
        scroll = $(window).scrollTop();

    if (scroll >= 9) {
        sticky.addClass('fixed');
        $('body').addClass('fixed-tablet');
    }
    else{
        sticky.removeClass('fixed');
        $('body').removeClass('fixed-tablet');
    }


    var sticky2 = $('#header'),
        scroll = $(window).scrollTop();

    if (scroll >= 9) {
        sticky2.addClass('fixed');
        $('body').addClass('fixed-desktop');
    }
    else{
        sticky2.removeClass('fixed');
        $('body').removeClass('fixed-desktop');
    }
});


function toggle_mobile_follow_parent(){
    $(".mobile-follow-me").toggleClass('active');
}
function toggle_mobile_follow(){
    $(".mobile-follow-me .wrapper").toggleClass('active');
}

// After page loaded completely
$(window).bind("load", function() {
});


// Get youtube thumb from url
var Youtube = (function () {
    'use strict';

    var video, results;

    var getThumb = function (url, size) {
        if (url === null) {
            return '';
        }
        size    = (size === null) ? 'big' : size;
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];

        if (size === 'small') {
            return 'https://img.youtube.com/vi/' + video + '/2.jpg';
        }
        //return 'https://img.youtube.com/vi/' + video + '/0.jpg';
        return 'https://img.youtube.com/vi/' + video + '/mqdefault.jpg';
    };

    return {
        thumb: getThumb
    };
}());


// Top menu animation
$(function() {

    var $el, leftPos, newWidth;
       
    $("#header ul.top-menu").append("<li id='magic-line'></li>");
    
    /* Cache it */
    var $magicLine = $("#magic-line");
    
    if($("#header ul.top-menu li").hasClass('current-menu-item')){
        $magicLine
            .width($("#header ul.top-menu .current-menu-item").width())
            .css("left", $("#header ul.top-menu .current-menu-item a").position().left - 60)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
    }
    else{
        $magicLine
            .width($("#header ul.top-menu li:first-child").width())
            .css("left", $("#header ul.top-menu li:first-child a").position().left - 60)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());
    }
        
    $("#header ul.top-menu li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        
        $magicLine.stop().animate({
            left: leftPos - 60,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
        });    
    });
    
});


// Footer menu animation
$(function() {

    var $el_footer, leftPos_footer, newWidth_footer;
       
    $("#footer ul.footer-menu").append("<li id='magic-line-footer'></li>");
    
    /* Cache it */
    var $magicLine_footer = $("#magic-line-footer");
    
    if($("#footer ul.footer-menu li").hasClass('current-menu-item')){
        $magicLine_footer
            .width($("#footer ul.footer-menu .current-menu-item").width())
            .css("left", $("#footer ul.footer-menu .current-menu-item a").position().left - 0)
            .data("origLeft", $magicLine_footer.position().left)
            .data("origWidth", $magicLine_footer.width());
    }
    else{
        $magicLine_footer
            .width($("#footer ul.footer-menu li:first-child").width())
            .css("left", $("#footer ul.footer-menu li:first-child a").position().left - 0)
            .data("origLeft", $magicLine_footer.position().left)
            .data("origWidth", $magicLine_footer.width());
    }
        
    $("#footer ul.footer-menu li").find("a").hover(function() {
        $el_footer = $(this);
        leftPos_footer = $el_footer.position().left;
        newWidth_footer = $el_footer.parent().width();
        
        $magicLine_footer.stop().animate({
            left: leftPos_footer - 0,
            width: newWidth_footer
        });
    }, function() {
        $magicLine_footer.stop().animate({
        });    
    });
    
});

$(document).ready(function(){
    $.ajaxSetup({cache:false});
    $(".ajaxlink").live("click",  function(event){
/* alert("ajaxlink"); */
            event.preventDefault();
if ( $("#post-layer" ).hasClass( "active" ) ) { }
            else {
    $("#post-layer").addClass("active");    
    }
        var post_url = $(this).attr("href");
        var post_id = $(this).attr("rel");
        var post_slug = $(this).attr("data-slug");
    $("#post_container").load(post_url);
 
window.location.hash = post_slug;
 
return false;
    });

   if(window.location.hash) {
  var hash = window.location.hash;
  var afterhash = window.location.hash.substr(1);
  var beforehash = window.location.href.replace(window.location.hash, '');
  var post_url = beforehash + afterhash;
$("#post-layer").addClass("active");  
    $("#post_container").load(post_url);

} else {
  // Fragment doesn't exist
}  

$("#post-layer .closelink").click(function(){
$("#post-layer").removeClass("active");   
$("#post-layer #post_container #content").remove();  
  });
  

 
});



$(document).on('keyup',function( e ) {  

switch(e.which) {
     case 27: // esc
$("a.closelink").click();
window.location.hash = '';
 break;
      case 37: // left
        $("a.post-layer-nav.next").click();
        break;

        case 39: // right
        $("a.post-layer-nav.prev").click();
        break;
          default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
