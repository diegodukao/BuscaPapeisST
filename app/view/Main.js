Ext.define('BuscaPapeisST.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
        'BuscaPapeisST.view.Form'
    ],

    config: {
        autoDestroy: false,

        navigationBar: {
            ui: 'sencha',
        },

        items: [
            { xtype: 'searchform' }
        ]
    }
});
