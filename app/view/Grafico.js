Ext.define('BuscaPapeisST.view.Grafico', {
    extend: 'Ext.chart.CartesianChart',

    config: {
        store: "GraficoPontos",
        colors: [
            '#115fa6',
            '#94ae0a',
            '#a61120',
            '#ff8809',
            '#ffd13e',
            '#a61187',
            '#24ad9a',
            '#7c7474',
            '#a66111'
        ],
        innerPadding: {
            top: 0,
            left: 10,
            right: 10,
            bottom: 0
        },
        axes: [
            {
                type: 'time',
                fields: [
                    'data'
                ]
            },
            {
                type: 'numeric',
                fields: [
                    'abertura',
                    'minima',
                    'maxima',
                    'fechamento'
                ],
                grid: {
                    odd: {
                        fill: '#e8e8e8'
                    }
                },
                position: 'left'
            }
        ],
        series: [
            {
                type: 'candlestick',
                style: {
                    barWidth: 7,
                    dropStyle: {
                        fill: 'rgb(237,123,43)',
                        stroke: 'rgb(237,123,43)'
                    },
                    raiseStyle: {
                        fill: 'rgb(55,153,19)',
                        stroke: 'rgb(55,153,19)'
                    }
                },
                xField: 'data',
                closeField: 'fechamento',
                highField: 'maxima',
                lowField: 'minima',
                openField: 'abertura'
            }
        ],
        interactions: [
            {
                type: 'panzoom'
            }
        ]
    }

});
