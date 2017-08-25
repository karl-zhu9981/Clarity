var ctx1 = document.getElementById("cost-chart").getContext('2d');
var costChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            data: [220, 200, 195, 170, 160, 140, 140, 160, 180, 190, 200, 212],
            backgroundColor: '#7c7d84',
            borderColor: '#7c7d84',
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

var ctx2 = document.getElementById("energy-chart").getContext('2d');
var energyChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            data: [220, 200, 195, 170, 160, 140, 140, 160, 180, 190, 200, 212],
            backgroundColor: '#000',
            borderColor: '#000',
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
            data: [220, 200, 195, 170, 160, 140, 140, 160, 180, 190, 200, 212],
            backgroundColor: '#ff0',
            borderColor: '#ff0',
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

var ctx4 = document.getElementById("goals-chart").getContext('2d');
var goalsChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        datasets: [{
            data: [220, 200, 195, 170, 160, 140, 140, 160, 180, 190, 200, 212],
            backgroundColor: '#a23',
            borderColor: '#a32',
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
