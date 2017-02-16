$(document).ready(function () {
    $("#contactform").submit(function (e) {

        e.preventDefault();
        var name = $("#name");
        var mobile = $("#mobile");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-group").addClass("has-error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-group").removeClass("has-error").addClass("has-success");
        } if (mobile.val() == "") {
            mobile.closest(".form-group").addClass("has-error");
            mobile.focus();
            flag = false;
            return false;
        }

        var dataString = "Nome=" + name.val() + " Telefone=" + mobile.val();

        $(".loading").fadeIn("slow").html("<p><strong>Enviando...</strong></p>");
        $('input[type="submit"]').prop('disabled', true);

        $.ajax({
            url: "https://formspree.io/contato@antiparasitario.com.br",
            method: "POST",
            data: { message: dataString },
            dataType: "json",
            success: function (data) {
                $('.loading').fadeIn('slow').html('<p class="text-success"><strong>Recebemos seu nome e telefone. Entraremos em contato em muito breve.</strong></p>'); return false;
            },
        });

    });
})
