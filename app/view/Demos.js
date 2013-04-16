Ext.define('BuscaPapeisST.view.Demos', {
    extend: 'Ext.Panel',
    xtype: 'demosview',
    requires: ['Ext.Label'],
    
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Spinner',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Ext.field.Slider',
        'Ext.field.Toggle',
        'Ext.field.Search'
    ],
    
    config: {
        title: 'Buscador Papeis',
        
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype      : 'spinnerfield',
                        name       : 'spinner',
                        label      : 'Spinner',
                        minValue   : 0,
                        maxValue   : 10,
                        stepValue  : 1,
                        cycle      : true
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'checkbox',
                        label: 'Checkbox'
                    },
                    //{
                        //xtype: 'datepickerfield',
                        //destroyPickerOnHide: true,
                        //name : 'date',
                        //label: 'Start Date',
                        //value: new Date(),
                        //picker: {
                            //yearFrom: 1990
                        //}
                    //},
                    {
                        xtype: 'selectfield',
                        name : 'selectfield',
                        label: 'Select field',
                        options: [
                            {
                                text : 'Master',
                                value: 'master'
                            },
                            {
                                text : 'Journeyman',
                                value: 'journeyman'
                            },
                            {
                                text : 'Apprentice',
                                value: 'apprentice'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Radio buttons',
                        defaults: {
                            xtype     : 'radiofield',
                            labelWidth: '35%'
                        },
                        items: [
                            {
                                name : 'color',
                                value: 'red',
                                label: 'Red'
                            },
                            {
                                name : 'color',
                                label: 'Blue',
                                value: 'blue'
                            }
                        ]
                    },
                    {
                        xtype: 'sliderfield',
                        name: 'thumb',
                        label: 'Slider simples'
                    },
                    {
                        xtype: 'sliderfield',
                        name: 'multithumb',
                        label: 'Slider duplo',
                        values: [10, 70]
                    },
                    {
                        xtype: 'togglefield',
                        name: 'toggle',
                        label: 'Toggle'
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'outrosDemosButton',
                text: 'Outros demos'
            },
        ]
    }
});
