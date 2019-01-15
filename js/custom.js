/*eslint-env jquery*/
// JQuery document.ready method (below) is required when starting a js file. This method will make the function available after the page is ready. It is always good to have all the events and functions inside this document.ready method. The method I have written is the recommended way of calling
/***********************************************
$(function() {
  // Handler for .ready() called.
});
*************************************************/

/*
Most CSS3 classes and ids are recognised by JQuery
*/

//======================================================
//                        WORK
//=======================================================  

/*
For 
Out of the 3 methods, we use the second one. That's why we used the anchor element in our html markup of work section.

If In HTML:
<div class="parent-container">
  <a href="path-to-image-1.jpg">Open popup 1</a>
  <a href="path-to-image-2.jpg">Open popup 2</a>
  <a href="path-to-image-3.jpg">Open popup 3</a>
</div>

Then In JQuery:
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});
*/
//======================================================
//                        WORK
//=======================================================  
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true // This is a nested object. This will enable gallery feature (after popup, a left right image navigation option)
        }
    });
});

//======================================================
//                        TEAM
//=======================================================  

$(function () {

    $("#team-members").owlCarousel({ //activation for the Owl Carousel
        items: 3, // These name:value pairs are found from Objects section in the Documentation of Owl Carousel.
        autoplay: true,
        smartSpeed: 500, // Because the autoplay speed is too high.
        loop: true,
        autoplayHoverPause: true,
        
        // To make carousel responsive for small screens,
        //this is an option in owlcarousel2.
        responsive : {
            // breakpoint from 0 up
            0 : {
                    items: 1
            },
            // breakpoint from 480 up
            480 : {
                    items: 2
            },
            // breakpoint from 768 up
            768 : {
                    items: 3
            },
        }
    });
});

//======================================================
//                        TESTIMONIALS
//=======================================================  

$(function () {

    $("#customer-testimonials-wrapper").owlCarousel({ //activation for the Owl Carousel
        //These name:value pairs are found from Objects section in the Documentation of Owl Carousel.//
        items: 1, // To display only one testimonial at a time. 
        autoplay: true,
        smartSpeed: 500, // Because the autoplay speed is too high.
        loop: true,
        autoplayHoverPause: true,
    });
});

//======================================================
//                      STATS COUNTER
//=======================================================

$(function () {

    $('.counter').counterUp({
        delay: 10, //Delay in ms per number per count up
        time: 2000 //Total duration of count up animation 3000 = 3s
    });

});

//======================================================
//                        CLIENTS
//=======================================================  

$(function () {

    $("#clients-list-mainwrapper").owlCarousel({ //activation for the Owl Carousel
        items: 6, // These name:value pairs are found from Objects section in the Documentation of Owl Carousel.
        autoplay: true,
        smartSpeed: 700, // Because the autoplay speed is too high.
        loop: true,
        autoplayHoverPause: true,
        
        // To make carousel responsive for small screens,
        //this is an option in owlcarousel2.
        responsive : {
            // breakpoint from 0 up
            0 : {
                    items: 1
            },
            // breakpoint from 480 up
            480 : {
                    items: 3
            },
            // breakpoint from 768 up
            768 : {
                    items: 5
            },
            // breakpoint from 992 up
            992 : {
                    items: 6
            }
        }
    });
});

/***********************************************
                    NAVIGATION
*************************************************/
/*
                        Show/Hide Black Navigation Bar
    The reason for this code is because we want to have the black transparent bar visible after we start scrolling. Until then, it should be completely
    transparent.
    The $(window) object is to select the browser window. .scroll(javascript self executing anonymous function) 
    is the scroll event for this browser window.
    $(this) keyword means this "window" object.
    We use jquery .scrollTop method. So we say, if the window scrollTop is less than 50px, hide the navigation bar.
*/

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide the navigation bar
            //select nav element and use jquery 'removeClass' to remove any class from the nav element in the html.
            $("nav").removeClass("vesco-top-navbar");

            //hide Back To Top Button with fading effect
            $("#back-to-top").fadeOut();


        } else {
            //show the navigation bar
            $("nav").addClass("vesco-top-navbar");

            //Show Back To Top Button with fading effect
            $("#back-to-top").fadeIn();
        }
    });
});

/*
                        Smooth Scrolling
    The reason for this code is because when we click on any item/component of the navbar, it directly display the correspondoing webpage. We want to include the effect to scrolling & stopping after selecting the navbar component. 
*/

$(function () {

    //selecting all element will smooth-scroll class, in the event of a click, execute the self executing anonymous function inside the click event.
    //Event.preventDefault method stops the Default action of an element from happening - in this case - preventing the link from directly opening the url.


    $("a.smooth-scroll").click(function (Event) {
        Event.preventDefault();

        //this keyword here means this anchor element.
        //attr method to get the href attribute value within the anchor element.
        //get / return the id like #about, #work... if we click that href link.
        //so section = #work/#services/#home/...
        var section = $(this).attr("href");

        //select the html and body element.
        //the animation duration will be 1250ms.
        //we will pass jquery easing effect as the third parameter to the animate
        $('html, body').animate({

            //scrollTop property sets the number of pixels that the content of an element is scrolled upward.
            //scrollTop property will offset to the top of our current link section.
            //offset().top value will return the co-ordinate value for content section.
            //So, the co-ordinate of the $(section) will be assigned to the scrollTop property.
            //The menu bar is not landing exactly after the scrolling. So we do the data offset here too by subtracting 64 from top value.
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

/*
    Close Mobile Menu UpOn Click on any menu item.
*/

$(function() {
    
    /* 
    Way of selecting an element inside html document.
    One can directly use ul or li but we took the long route for discovering new ways of writing nested elements.
    For eg. I can use $(ul.navbar-nav li a){}
    */
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        /* When user clicks or touches any item on navigation menu, we want to execute .navbar-toggle to close the menu */
        
        $(".navbar-toggle").click();
        
    });
         
        
});






