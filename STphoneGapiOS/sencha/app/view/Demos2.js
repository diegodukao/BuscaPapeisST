Ext.define('BuscaPapeisST.view.Demos2', {
    extend: 'Ext.Panel',
    xtype: 'demos2view',
    
    config: {
        title: 'Buscador Papeis',
        
        items: [
            {
                xtype: 'toolbar',
                ui: 'neutral',
                docked: 'top',
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },
                items: [
                    {
                        text: 'Back',
                        ui: 'back'
                    },
                    {
                        text: 'Default',
                        badgeText: '2'
                    },
                    {
                        text: 'Round',
                        ui: 'round'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        allowDepress: true,
                        items: [
                            {
                                text: 'Option 1',
                                pressed: true
                            },
                            {
                                text: 'Option 2'
                            },
                            {
                                text: 'Option 3'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: 'Action',
                        ui: 'action'
                    },
                    {
                        text: 'Forward',
                        ui: 'forward'
                    }
                ]
            },
            {
                text: 'Overlay',
                xtype: 'button',
                handler: function() {
                    if (!this.overlay) {
                        this.overlay = Ext.Viewport.add({
                            xtype: 'panel',
                            modal: true,
                            hideOnMaskTap: true,
                            showAnimation: {
                                type: 'popIn',
                                duration: 250,
                                easing: 'ease-out'
                            },
                            hideAnimation: {
                                type: 'popOut',
                                duration: 250,
                                easing: 'ease-out'
                            },
                            centered: true,
                            width: Ext.os.deviceType == 'Phone' ? 260 : 400,
                            height: Ext.os.deviceType == 'Phone' ? 220 : 400,
                            styleHtmlContent: true,
                            html: '<p>This is a modal, centered and floating panel. hideOnMaskTap is true by default so ' +
                                'we can tap anywhere outside the overlay to hide it.</p>',
                            items: [
                                {
                                    docked: 'top',
                                    xtype: 'toolbar',
                                    title: 'Overlay Title'
                                }
                            ],
                            scrollable: true
                        });
                    }

                    this.overlay.show();
                }
            }
            
        ]
    }
});
