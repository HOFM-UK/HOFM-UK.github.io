// $(function() {
//     menuLine();

    
// });

$(function() {
$("#header-tablet ul.top-menu li.btn-menu a").click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(".tablet-menu-wrapper").toggleClass("active");
        $('body').toggleClass('no-scroll');   
    });
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
        // stop annimating current
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
        
        $magicLine.stop().animate({
            left: leftPos-60,
            width: newWidth + 7
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    
});




function menuLine(){
    var $el, leftPos, newWidth,
        $mainNav = $("#desktop-nav");
    
    //set default menu item
    $mainNav.append("<li id='menu-line'></li>");
    var $menuLine = $("#menu-line");
    
    $menuLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $menuLine.position().left)
        .data("origWidth", $menuLine.width());
    
    $("#desktop-nav li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $menuLine.stop().animate({
            left: leftPos,
            width: newWidth
        });

    }, function() {
        $menuLine.stop().animate({
            left: $menuLine.data("origLeft"),
            width: $menuLine.data("origWidth")
        });    
    });
    
}

function drawLine(){
    var $menuLine = $("#menu-line");
    
    $menuLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $menuLine.position().left)
        .data("origWidth", $menuLine.width());
}

function newMenuPosition(){
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();
    $menuLine.stop().animate({
        left: leftPos,
        width: newWidth
    }); 
}

function oldMenuPosition() {
    $menuLine.stop().animate({
        left: $menuLine.data("origLeft"),
        width: $menuLine.data("origWidth")
    });
} 



    // Menu toggle - tablet
    
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openTabletNav() {
    document.getElementById("tablet-nav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeTabletNav() {
    document.getElementById("tablet-nav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}