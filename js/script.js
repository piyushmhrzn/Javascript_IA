/*
*****************************
    Name: Piyush Maharjan
    Student No.: 8900512
*****************************
*/
"use strict";
$(document).ready(() => {
    const slider = $("#slider_images");

    $("#button_right").click(() => {
        // Current value
        const leftPosition = parseInt(slider.css("left"));

        // Calculate new position upto which images will side
        let newLeftPosition = 0;
        if (leftPosition - 1140 > -3420) {
            newLeftPosition = leftPosition - 1140;
        }

        // Silde images from new position to calculated position
        slider.animate({ left: newLeftPosition }, 1500);
    });

    $("#button_left").click(() => {
        // Current value
        const leftPosition = parseInt(slider.css("left"));

        // Calculate new position upto which images will side
        let newLeftPosition = 0;
        if (leftPosition < 0) {
            newLeftPosition = leftPosition + 1140;
        }

        // Silde images from new position to calculated position
        slider.animate({ left: newLeftPosition }, 1500);
    });


    // HOVER ITEMS
    $("#product_list a").hover(evt => {
        // Get current thumbnail
        const thumbnail = evt.currentTarget;

        // Swap Image
        const imageURL = $(thumbnail).attr("href");
        $("#image").attr("src", imageURL);

        // Swap Image Title
        const title = $(thumbnail).attr("title");
        $("#title").text(title);
    },
        evt => {
            // const thumbnail = evt.currentTarget;
        }
    );

    $("#product_list a").click(evt => evt.preventDefault());
    $("product_list:first-child:first-child").focus();


    // PRICE CALCULATOR
    // Function to calculate the total price
    const calculateTotalPrice = (gamePrice, platformPrice, quantity) => {
        return (gamePrice * quantity) + platformPrice;
    }

    $("#calculate").click(() => {
        const gamePrice = parseInt($("#game").val());
        const quantity = parseInt($("#quantity").val());
        const platformPrice = parseInt($("#platform").val());

        // Declare a boolean value
        let isValid = true;

        // Check if input is a number or not
        if (isNaN(gamePrice) || isNaN(platformPrice) || isNaN(quantity)) {
            isValid = false;
            alert("Please enter a number.");
        }

        // Check quantity which should be from 1 to 20
        if (quantity <= 0 || quantity > 20) {
            isValid = false;
            alert("Limited quantity available. i.e. From 1 to 20");
        }

        // If validation completes, then calculate total price by passing value to calculateTotalPrice function
        if (isValid) {
            const totalPrice = calculateTotalPrice(gamePrice, platformPrice, quantity);
            $("#total_price").val(totalPrice);
        }
    });

    // Clear fields
    $("#clear").click(() => {
        $("#game, #platform, #quantity, #total_price").val("");
        $("#game").focus();
    });
});
