$('#ligar-lampada').on('click', function ligarLampada(){
    $('#lampada').attr('src', 'https://i.stack.imgur.com/ybxlO.jpg');
    $('#subtitle').css('display', 'none');
})

$('#desligar-lampada').on('click', function desligarLampada(){
    $('#lampada').attr('src', 'https://i.stack.imgur.com/b983w.jpg');
    $('#subtitle').css('display', 'none');
})

$('#quebrar-lampada').on('click', function quebrarLampada(){
    $('#lampada').attr('src', 'https://i.stack.imgur.com/MRjsF.jpg');
    $('#subtitle').css('display', 'block');
})

