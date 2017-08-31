var ctx1 = document.getElementById("cost-chart").getContext('2d');
var costChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            label: '$ / month',
            data: [371, 371, 309, 210, 135, 84, 61, 67, 111, 185, 259, 333],
            backgroundColor: '#1b9af7',
            borderColor: '#1b9af7',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

var ctx2 = document.getElementById("energy-chart").getContext('2d');
var energyChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            label: 'kWh / month',
            data: [3706, 3706, 3088, 2100, 1359, 844, 618, 679, 1112, 1853, 2595, 3336],
            backgroundColor: '#1b9af7',
            borderColor: '#1b9af7',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx3 = document.getElementById("temp-chart").getContext('2d');
var tempChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            label: '˚C / month',
            data: [20, 20, 21, 21, 22, 23, 22, 21, 20, 20, 21, 20],
            backgroundColor: '#1b9af7',
            borderColor: '#1b9af7',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 10,
                    max: 30,
                    stepSize: 2
                }
            }]
        }
    }
});
