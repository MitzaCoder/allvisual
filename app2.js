'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const speedData = [0, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const labels = [2.070, 3.110, 4.020, 5.040, 5.190, 6.120, 7.060, 8.150, 9.150, 10.220];

const speedChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels,
    datasets: [{
      label: 'Speed',
      data: speedData,
    }],
  },
  options: {

  },
});

console.log(ctx);