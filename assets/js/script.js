//redi function

$(document).ready(function () {
    //Darle click a las tarjetitas y se retraen -_-
    $(".card .icon").on("click", function () {
        $(this).closest(".card").find(".card-body").slideToggle("fast");
    });

    $("#destacados .card").on("click", function () {
        let $cardBody = $(this).find(".card-body");
        $cardBody.slideToggle("fast");
    });

    $(".card .icon-bottom").on("click", function () {
        let $cardBody = $(this).closest(".card").find(".card-body");
        if ($cardBody.is(":visible")) {
            $cardBody.slideUp("fast");
        } else {
            $cardBody.slideDown("fast");
        }
    });

    // Función para validar el formulario y mostrar alertas :v
    $("#contacto button").on("click", function (event) {
        event.preventDefault();
        let nombre = $("#contacto input[placeholder='¿Cuál es tu nombre?']").val();
        let asunto = $("#contacto input[placeholder='¿Cuál es el asunto?']").val();
        let mensaje = $("#contacto textarea[placeholder='Escribe aquí tu mensaje']").val();

        if (nombre && asunto && mensaje) {
            alert("Correo enviado");
        } else {
            alert("Complete los datos del formulario");
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