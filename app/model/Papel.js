Ext.define('BuscaPapeisST.model.Papel', {
    extend: 'Ext.data.Model',

    config: {
        fields : [
            'nome',
            'cotacaoAtual',
            'precoSobreLucro',
            'retornoSobrePatrimonio', 
            'patrimonioLiquido',
            'dividaBrutaSobrePatrimonio'
        ]
    }
});
