// // Fixs the menu so when link is clicked it would close the menu.
// $(function () {

//     $('#menu')
//         .on('shown.bs.collapse', function () {
//             $('#navbar-hamburger').addClass('hidden');
//             $('#navbar-close').removeClass('hidden');
//         })
//         .on('hidden.bs.collapse', function () {
//             $('#navbar-hamburger').removeClass('hidden');
//             $('#navbar-close').addClass('hidden');
//         });

// });

// $(document).on('click', '.navbar-collapse.in', function (e) {
//     if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
//         $(this).collapse('hide');
//     }
// });
// $(function () {
//     $(document).click(function (event) {
//         $('.navbar-collapse').collapse('hide');
//     });
// });.
// Contact us effect for when clicked into the form.
$(document).ready(function () {
    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });
    // Fancy Box loading.
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function () {
        $("#cookieConsent").fadeOut(200);
    });

});