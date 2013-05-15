Ext.define('BuscaPapeisST.store.Papeis', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        model: 'BuscaPapeisST.model.Papel',
        proxy: {
            type: 'jsonp',
            url: 'http://buscadorpapeis-prospeccaohtml5.rhcloud.com/buscadorpapeis/rest/papeis/buscar',
            timeout: 100000
        }
    }
});
