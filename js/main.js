function consultaCep() {

    const cep = document.querySelector('.cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`

    $(".progress").show();
    
    $.ajax({
        url: url,
        type: 'GET',
        success: function(response) {
            /**Uso de Javascript 
                const logradouro = document.querySelector('.logradouro');
                const bairro = document.querySelector('.bairro');
                const localidade = document.querySelector('.localidade');
                const cep = document.querySelector('.cep');
                const uf = document.querySelector('.uf');

                logradouro.innerHTML = response.logradouro;
                bairro.innerHTML = response.bairro;
                localidade.innerHTML = response.localidade;
                uf.innerHTML = response.uf;
            */

            /**Uso de JQuery */
            $('.logradouro').html(response.logradouro);
            $('.cep').html(response.cep);
            $('.bairro').html(response.bairro);
            $('.localidade').html(response.localidade);
            $('.uf').html(response.uf);
            $(".container").show();
            $(".progress").hide();
        }
    })
}

$(function(){
   $(".container").hide();
   $(".progress").hide();
})