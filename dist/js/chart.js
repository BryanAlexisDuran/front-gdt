document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Participantes según edad'
        },
        xAxis: {
            categories: ['33', '27', '48']
        },
        yAxis: {
            title: {
                text: 'Participantes según género'
            },
            tickInterval: 1
        },
        series: [{
            name: 'Mujeres',
            data: [1, 4, 0]
        }, {
            name: 'Hombres',
            color: "#206bc4",
            data: [5, 6, 3]
        }]
    });


});

