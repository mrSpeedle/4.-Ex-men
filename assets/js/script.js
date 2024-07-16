//Darle click a las tarjetitas y se retraen -_-

$(document).ready(function () {
    $(".card .icon").on("click", function () {
        $(this).closest(".card").find(".card-body").slideToggle("fast");
    });

    $(".card .icon-bottom").on("click", function () {
        let $cardBody = $(this).closest(".card").find(".card-body");
        if ($cardBody.is(":visible")) {
            $cardBody.slideUp("fast");
        } else {
            $cardBody.slideDown("fast");
        }
    });

    $(".card .icon, .card .icon-bottom, .card .card-img-top").on("click", function () {
        let $cardBody = $(this).closest(".card").find(".card-body");
        if ($cardBody.is(":visible")) {
            $cardBody.slideUp("fast");
        } else {
            $cardBody.slideDown("fast");
        }
    });
});

//Navbar cambia de opacidad cuando se interactúa con él

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar-custom');

    navbar.addEventListener('mouseover', function () {
        navbar.classList.add('navbar-interact');
    });

    navbar.addEventListener('mouseout', function () {
        navbar.classList.remove('navbar-interact');
    });
});