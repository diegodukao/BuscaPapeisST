Ext.define('BuscaPapeisST.store.GraficoPontos', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'BuscaPapeisST.model.GraficoPonto',
        proxy: {
            type: 'jsonp',
            //type: 'ajax',
            url: 'http://buscadorgraficos-prospeccaohtml5.rhcloud.com/buscadorgraficos/rest/papeis/buscarJSON',
            //url: 'graficopontos.json'
            timeout: 100000
        }
    }
});
