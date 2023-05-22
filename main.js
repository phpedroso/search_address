$(document).ready(function () {
    $('#cep').mask('00000-000');
    
    $('#btn-cep').click(function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        // const botao = $(this);
        $('#btn-cep').find('i').addClass('d-none');
        $('#btn-cep').find('span').removeClass('d-none');

        $.ajax(endpoint).done(function(resposta) {
            const logradouro = resposta.logradouro;
            const bairro = resposta.bairro;
            const cidade = resposta.localidade;
            const estado = resposta.uf;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);

            $('#btn-cep').find('i').removeClass('d-none');
            $('#btn-cep').find('span').addClass('d-none');
        })
    })
})