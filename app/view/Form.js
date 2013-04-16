Ext.define('BuscaPapeisST.view.Form', {
    extend: 'Ext.Container',
    xtype: 'searchform',
    requires: ['Ext.Label'],

    config: {
        title: 'Buscador de Papeis',
        
        items: [
            {
                xtype: 'fieldset',
                left: '1%',
                top: '10%',
                width: '60%',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'P/L',
                        labelWidth: '40%',
                        name: 'plmin',
                        id: 'plmin'
                    },
                    {
                        xtype: 'textfield',
                        label: 'ROE',
                        labelWidth: '40%',
                        name: 'roemin',
                        id: 'roemin'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Div/Ptr',
                        labelWidth: '40%',
                        name: 'divptrmin',
                        id: 'divptrmin'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                right: '1%',
                top: '10%',
                width: '37%',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'plmax',
                        id: 'plmax'
                    },
                    {
                        xtype: 'textfield',
                        name: 'roemax',
                        id: 'roemax'
                    },
                    {
                        xtype: 'textfield',
                        name: 'divptrmax',
                        id: 'divptrmax'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'Min',
                left: '35%',
                top: '2.5%'
            },
            {
                xtype: 'label',
                html: 'Max',
                left: '75%',
                top: '2.5%'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: { pack: 'center' },
                items: [
                    {
                        xtype: 'button',
                        id: 'searchButton',
                        text: 'Buscar'
                    },
                    {
                        xtype: 'button',
                        id: 'cleanButton',
                        text: 'Limpar'
                    },
                    {
                        xtype: 'button',
                        id: 'demosButton',
                        text: 'Demos'
                    }
                ]
            }
        ]
    }

});
