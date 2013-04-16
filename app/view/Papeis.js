Ext.define('BuscaPapeisST.view.Papeis', {
    extend: 'Ext.Container',
    xtype: 'papeis',

    config: {
        title: "Buscador de Papeis",
        
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'panel',
                        width: '100%',
                        html: [
                            '<table width="100%"><tr>',
                            '<td style="text-align: center; width: 16.66%">Nome</td>',
                            '<td style="text-align: center; width: 16.66%">Cotação Atual</td>',
                            '<td style="text-align: center; width: 16.66%">P/L</td>',
                            '<td style="text-align: center; width: 16.66%">ROE</td>',
                            //'<td style="text-align: center; width: 16.66%">Patr. Líquido</td>',
                            '<td style="text-align: center; width: 16.66%">Div/Patr</td>',
                            '</tr></table>'
                        ].join('')
                    }
                ]
            },
            {
                xtype: 'list',
                store: 'Papeis',
                height: '100%',
                width: "100%",
                id:'papeisList',
                itemTpl: [
                    '<table width="100%"><tr>',
                    '<td style="text-align: center; width: 16.66%">{nome}</td>',
                    '<td style="text-align: center; width: 16.66%">{cotacaoAtual}</td>',
                    '<td style="text-align: center; width: 16.66%">{precoSobreLucro}</td>',
                    '<td style="text-align: center; width: 16.66%">{retornoSobrePatrimonio}</td>',
                    //'<td style="text-align: center; width: 16.66%">{patrimonioLiquido}</td>',
                    '<td style="text-align: center; width: 16.66%">{dividaBrutaSobrePatrimonio}</td>',
                    '</tr></table>'
                ].join('')
            }
        ]
    }
});

