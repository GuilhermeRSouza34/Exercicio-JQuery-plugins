$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        alert($('this').parent().find('h3').text());

        $('html').animate({
            scrollTop: destino.offset().top
    }, 1000);
    })
})