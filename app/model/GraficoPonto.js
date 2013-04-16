Ext.define('BuscaPapeisST.model.GraficoPonto', {
    extend: 'Ext.data.Model',

    config: {
        fields : [
            'data',
            'abertura',
            'maxima',
            'minima', 
            'fechamento'
        ]
    }
});
