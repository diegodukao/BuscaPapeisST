Ext.define('BuscaPapeisST.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            papeis: '#papeisList',
            searchButton: '#searchButton',
            demosButton: '#demosButton',
            outrosDemosButton: '#outrosDemosButton',
            phonegapDemosButton: '#phonegapDemosButton',
            plmin: '#plmin',
            roemin: '#roemin',
            divptrmin: '#divptrmin',
            plmax: '#plmax',
            roemax: '#roemax',
            divptrmax: '#divptrmax',
        },

        control: {
            papeis: {
                itemtap: 'onPapelSelect'
            },
            searchButton: {
                tap: 'onSearch'
            },
            demosButton: {
                tap: 'onDemosChosen'
            },
            outrosDemosButton: {
                tap: 'onOutrosDemosChosen'
            },
            phonegapDemosButton: {
                tap: 'onPhonegapDemosButtonChosen'
            }
        }
    },

    onPapelSelect: function(list, index, node, record) {
        var nomePapel = record.data.nome;
        var graficoPontosStore = Ext.getStore('GraficoPontos');
        graficoPontosStore.getProxy().setExtraParams({
            "nomePapel": nomePapel,
            "dataInicial": "01/01/2010",
            "dataFinal":"20/03/2013"
        });
        graficoPontosStore.load();
        this.getMain().push(Ext.create('BuscaPapeisST.view.Grafico'));
    },
    
    onSearch: function() {
        var papeisStore = Ext.getStore('Papeis');
        papeisStore.getProxy().setExtraParams(getExtraParams(this));
        papeisStore.load();
        this.getMain().push(Ext.create('BuscaPapeisST.view.Papeis'));
    },
    
    onDemosChosen: function() {
        this.getMain().push(Ext.create('BuscaPapeisST.view.Demos'));
    },
    
    onOutrosDemosChosen: function() {
        this.getMain().push(Ext.create('BuscaPapeisST.view.Demos2'));
    },
    
    onPhonegapDemosButtonChosen: function() {
        this.getMain().push(Ext.create('BuscaPapeisST.view.DemosPhonegap'));
    }
});

function getExtraParams(form) {
    plMin = form.getPlmin().getValue();
    plMax = form.getPlmax().getValue();
    roeMin = form.getRoemin().getValue();
    roeMax = form.getRoemax().getValue();
    divBrutaMin = form.getDivptrmin().getValue();
    divBrutaMax = form.getDivptrmax().getValue();
    
    var extraParams = {};
    if (plMin) {
      extraParams['plMin'] = plMin;
    }
    if (plMax) {
      extraParams['plMax'] = plMax;
    }
    if (roeMin) {
      extraParams['roeMin'] = roeMin;
    }
    if (roeMax) {
      extraParams['roeMax'] = roeMax;
    }
    if (divBrutaMin) {
      extraParams['divBrutaMin'] = divBrutaMin;
    }
    if (divBrutaMax) {
      extraParams['divBrutaMax'] = divBrutaMax;
    }
    
    return extraParams;
}
