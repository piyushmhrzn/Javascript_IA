/*
*****************************
    Name: Piyush Maharjan
    Student No.: 8900512
*****************************
*/
"use strict";
$(document).ready(() => {
    // Store the first image from slideshow
    let nextSlide = $("#slideshow_images img:first-child");

    // start slide show
    setInterval(() => {
        $("#slideshow_heading").fadeOut(1000);
        $("#slideshow_description").fadeOut(1000);
        $("#slide").fadeOut(1000, () => {
            if (nextSlide.next().length == 0) {
                nextSlide = $("#slideshow_images img:first-child");
            }
            else {
                nextSlide = nextSlide.next();
            }

            // Change src, title and alt of current slide to values of next slide
            const nextSlideSource = nextSlide.attr("src");
            const nextSlideHeading = nextSlide.attr("title");
            const nextSlideDescription = nextSlide.attr("alt");

            $("#slide").attr("src", nextSlideSource).fadeIn(1000);
            $("#slideshow_heading").text(nextSlideHeading).fadeIn(1000);
            $("#slideshow_description").text(nextSlideDescription).fadeIn(1000);
        });
    }, 6000);


    // FAQs
    $("#accordion h4").click(evt => {
        // Prevent link action
        evt.preventDefault();

        // Get the pnly clicked target
        const target = evt.currentTarget;

        // Toggle down class in target element
        $(target).toggleClass("down");
        if ($(target).attr("class") == "down") {
            $(target).next().slideDown(1000, "easeOutBounce");
        }
        else {
            $(target).next().slideUp(1000, "easeInBounce");
        }
    });
});
