// NAO PRECISA SE PREOCUPAR COM ISSO
var imprimirTabela = function (array) {

    $('#my-final-table').dynatable({
        features: {
            paginate: false,
            search: false,
            recordCount: false
        }, dataset: {
            records: array
        }
    });
}

var atualizarTabela = function (array) {
    $('#my-final-table').data('dynatable').settings.dataset.records = array;
    $('#my-final-table').data('dynatable').dom.update();
}


