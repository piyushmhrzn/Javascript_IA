/*
*****************************
    Name: Piyush Maharjan
    Student No.: 8900512
*****************************
*/
"use strict";
$(document).ready(() => {
    $("#date").datepicker({
        minDate: new Date(),
        maxDate: +10,
        showButtonPanel: true
    });

    $("#email_form").submit(evt => {
        // Declare a boolean value
        let isValid = true;

        // Validate Full Name
        const fullName = $("#full_name").val().trim();
        if (!fullName) {
            $("#full_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#full_name").next().text("");
        }

        // Validate Email Address
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email1 = $("#email_1").val().trim();
        if (!email1) {
            $("#email_1").next().text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email1)) {
            $("#email_1").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().text("");
        }

        // Validate Confirm Email Address
        const email2 = $("#email_2").val().trim();
        if (!email2) {
            $("#email_2").next().text("This field is required.");
            isValid = false;
        } else if (email1 !== email2) {
            $("#email_2").next().text("The email addresses must match.");
            isValid = false;
        } else {
            $("#email_2").next().text("");
        }

        // Validate State Code
        const state = $("#state").val().trim();
        if (!state) {
            $("#state").next().text("This field is required.");
            isValid = false;
        } else if (state.length !== 2) {
            $("#state").next().text("Use 2-character code.");
            isValid = false;
        } else {
            $("#state").next().text("");
        }

        // Validate Zip Code
        const zipcode = $("#zip_code").val().trim().replace(/\s/g, '');
        if (!zipcode) {
            $("#zip_code").next().text("This field is required.");
            isValid = false;
        } else if (zipcode.length !== 6) {
            $("#zip_code").next().text("Zipcode should be 6-character code.");
            isValid = false;
        } else {
            $("#zip_code").next().text("");
        }

        // Validate Start Date
        const date = $("#date").val();
        if (!date) {
            $("#date").next().text("This field is required.");
            isValid = false;
        } else {
            $("#date").next().text("");
        }

        // Validate at least one checkbox is checked
        if (!$('#games').is(':checked') && !$('#consoles').is(':checked') && !$('#accessories').is(':checked') && !$('#pc').is(':checked')) {
            $("#pc").next().text("Choose at least 1 topic to send mail about.");
            isValid = false;
        } else {
            $("#pc").next().text("");
        }

        if (!isValid) {
            evt.preventDefault();
        }
    });

    // handle click on Reset Form button
    $("#reset").click(() => {
        // clear text boxes
        $("#full_name").val("");
        $("#email_1").val("");
        $("#email_2").val("");
        $("#state").val("");
        $("#zip_code").val("");
        $("#date").val("");
        $(":checked").attr("checked", false);

        // reset span elements
        $("#full_name").next().text("*");
        $("#email_1").next().text("*");
        $("#email_2").next().text("*");
        $("#state").next().text("*");
        $("#zip_code").next().text("*");
        $("#date").next().text("*");
        $("#pc").next().text("*");

        $("#full_name").focus();
    });

    // Image Swap
    $("#swap").click(() => {
        const sourceImage = $("#swapImage1").attr("src");

        $("#swapImage1").attr("src", $("#swapImage2").attr("src"));
        $("#swapImage2").attr("src", sourceImage);
    });

    $("#luck").click(() => {
        // Generate random number from 1 to 20
        const randomNumber = Math.floor(Math.random() * 20) + 1;

        // Using loop swap image for generated random number of time
        for (let i = 0; i < randomNumber; i++) {
            setTimeout(() => {
                const sourceImage = $("#swapImage1").attr("src");

                $("#swapImage1").attr("src", $("#swapImage2").attr("src"));
                $("#swapImage2").attr("src", sourceImage);
            }, i * 90);
        }
    });
});
