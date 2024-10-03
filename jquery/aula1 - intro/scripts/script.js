console.log($('#caixa'))

$('#caixa').text(undefined)
$('#caixa').html('<h1>MANEIRO</h1>')

$('#teste1').on('click', function(){
    alert('FUNFO');
})

$('#teste2').on('click',function(){
    $('#caixa').css('width','300px')
    $('#caixa').css('backgroundColor','red')
})

$('#teste3').on('click',function(){

    if($('#caixa').hasClass('primeiroEstado')){
        $('#caixa').addClass('segundoEstado')
        $('#caixa').removeClass('primeiroEstado')
    }else{
        $('#caixa').toggleClass('segundoEstado','primeiroEstado')
    }
})