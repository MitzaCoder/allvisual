import { Chart } from 'chart.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const speedData = [{
    y: 0,
    x: 2.070,
  }, {
    y: 20,
    x: 3.110,
  }, {
    y: 30,
    x: 4.020,
  }, {
    y: 40,
    x: 5.040,
  }, {
    y: 50,
    x: 5.190,
  }, {
    y: 60,
    x: 6.120,
  }, {
    y: 70,
    x: 7.060,
  }, {
    y: 80,
    x: 8.150,
  }, {
    y: 90,
    x: 9.150,
  }, {
    y: 100,
    x: 10.220,
}];

const RPMdata = [{
    y: 2500,
    x: 2.070,
  }, {
    y: 2300,
    x: 3.110,
  }, {
    y: 3800,
    x: 4.020,
  }, {
    y: 4600,
    x: 4.120,
  }, {
    y: 3000,
    x: 5.040,
  }, {
    y: 2800,
    x: 5.070,
  }, {
    y: 3150,
    x: 5.190,
  }, {
    y: 3800,
    x: 6.120,
  }, {
    y: 4250,
    x: 7.060,
  }, {
    y: 4500,
    x: 7.120,
  }, {
    y: 3100,
    x: 8.080,
  }, {
    y: 3200,
    x: 8.150,
  }, {
    y: 3550,
    x: 9.150,
  }, {
    y: 4000,
    x: 10.220,
}];

const speedChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      borderColor: '#ff0000',
      pointBorderColor: '#ff0000',
      pointBackgroundColor: '#ff0000',
      fill: false,
      label: 'Speed',
      data: speedData,
      yAxisID: 'speed-y-axis',
    }, {
      borderColor: '#00ff00',
      pointBorderColor: '#00ff00',
      pointBackgroundColor: '#00ff00',
      fill: false,
      label: 'RPM',
      data: RPMdata,
      yAxisID: 'rpm-y-axis',
    }],
  },
  options: {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
      }],
      yAxes: [{
        id: 'speed-y-axis',
        type: 'linear',
        position: 'left',
      }, {
        id: 'rpm-y-axis',
        type: 'linear',
        position: 'right',
      }],
    },
  },
});