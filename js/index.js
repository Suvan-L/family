var color = Chart.helpers.color;

/**
 * my sister
 */
  var scatterChartData = {
    datasets: [{
      borderColor: window.chartColors.red,
      backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
      label: 'V(s)',
      data: [
        {x: 1.1, y: 503.17}, 
        {x: 2.1, y: 384.47}, {x: 2.2, y: 414.09}, {x: 2.3, y: 276.70}, 
        {x: 3.1, y: 350.10}, 
        {x: 4.1, y: 339.91}, {x: 4.2, y: 227.37}, {x: 4.3, y: 212.41}, {x: 4.4, y: 144.40}, 
        {x: 5.1, y: 218.84}, 
        {x: 6.1, y: 178.32}, {x: 6.2, y: 298.02}, {x: 6.3, y: 222.25}, {x: 6.4, y: 132.07}, {x: 6.5, y: 177.96}, 
        {x: 9.1, y: 162.27}, {x: 9.2, y: 141.77}, {x: 9.3, y: 117.03}, {x: 9.4, y: 177.91}, 
        {x: 10.1, y: 136.40}, 
        {x: 11.1, y: 124.81}, {x: 11.2, y: 98.47}, {x: 11.3, y: 128.02}, {x: 11.4, y: 96.56}, {x: 11.5, y: 122.49}, 
        {x: 12.1, y: 133.59}, {x: 12.2, y: 134.48}, {x: 12.3, y: 108.74}, {x: 12.4, y: 96.37}, 
        {x: 13.1, y: 115.49}, {x: 13.2, y: 199.24}, 
        {x: 14.1, y: 105.84}, {x: 14.2, y: 73.00}, {x: 14.3, y: 126.03}, 
        {x: 17.1, y: 120.98}, {x: 17.2, y: 167.77}, {x: 17.3, y: 124.53}, 
        {x: 20.1, y: 118.03}, {x: 20.2, y: 105.08}, 
        {x: 22.1, y: 92.98}, {x: 22.2, y: 70.89}, 
        {x: 23.1, y: 118.62}, {x: 23.2, y: 83.74}, 
        {x: 24.1, y: 135.28}, {x: 24.2, y: 72.95}, {x: 24.3, y: 186.26}, {x: 24.4, y: 82.21}, {x: 24.5, y: 84.47}, {x: 24.6, y: 81.38}, {x: 24.7, y: 59.48}, 
        {x: 27.1, y: 57.19}, {x: 27.2, y: 86.55}, 
        {x: 30.1, y: 83.98}
      ]
    }]
  };

/**
 * me
 */
  var myScatterChartData = {
    datasets: [{
      borderColor: window.chartColors.red,
      backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
      label: 'V(s)',
      data: [
        {x: 1.1, y: 136.43}, {x: 1.2, y: 151.00}, 
        {x: 2.1, y: 203.10}, {x: 2.2, y: 162.05}, 
        {x: 2.1, y: 203.10}, {x: 2.2, y: 162.05}, 
        {x: 4.1, y: 196.86}, 
        {x: 5.1, y: 135.42}, 
        {x: 6.1, y: 192.95}, 
        {x: 7.1, y: 203.47}, 
        {x: 8.1, y: 100.82}, 
        {x: 9.1, y: 167.42}, 
        {x: 10.1, y: 169.89}, 
        {x: 11.1, y: 112.98}, 
        {x: 12.1, y: 236.04}, {x: 12.2, y: 157.00}, {x: 12.3, y: 114.62}, {x: 12.4, y: 105.23}, 
        {x: 13.1, y: 121.01}, {x: 13.2, y: 220.45}, {x: 13.3, y: 171.45}, 
        {x: 14.1, y: 82.50}, {x: 14.2, y: 131.35}, {x: 14.3, y: 132.58}, 
        {x: 15.1, y: 97.32}, 
        {x: 16.1, y: 110.34}, {x: 16.2, y: 129.06}, {x: 16.3, y: 114.32}, {x: 16.4, y: 140.25}, 
        {x: 17.1, y: 1234.16}, 
        {x: 18.1, y: 91.16}, {x: 18.2, y: 161.12}, {x: 18.3, y: 110.31}, {x: 18.4, y: 109.05}, 
        {x: 19.1, y: 118.13}, {x: 19.2, y: 134.48}, {x: 19.3, y: 96.13}, {x: 19.4, y: 96.45}, 
        {x: 20.1, y: 67.24}, {x: 20.2, y: 105.13}, {x: 20.3, y: 95.19}, 
        {x: 21.1, y: 101.77}, {x: 21.2, y: 77.28}, {x: 21.3, y: 181.96}, {x: 21.4, y: 75.44}, 
        {x: 24.1, y: 164.28}, {x: 24.2, y: 68.76}, {x: 24.3, y: 85.68}, 
        {x: 25.1, y: 103.46}, {x: 25.2, y: 152.48}, 
        {x: 26.1, y: 102.43}, {x: 26.2, y: 126.17}, {x: 26.3, y: 66.63}, {x: 26.4, y: 87.43}, {x: 26.5, y: 96.84}, 
        {x: 27.1, y: 84.52}, {x: 27.2, y: 123.33}, 
        {x: 28.1, y: 124.52}, {x: 28.2, y: 114.00}, 
        {x: 28.1, y: 109.74}, {x: 28.2, y: 86.75}, 
        {x: 30.1, y: 91.39}, {x: 30.2, y: 84.76}, 
        {x: 31.1, y: 115.43}, {x: 31.2, y: 92.58}, {x: 31.3, y: 63.25}, 
      ]
    }]
  };


  window.onload = function() {
    var ctx = document.getElementById('sister-canvas').getContext('2d');
    window.myScatter = Chart.Scatter(ctx, {
      data: scatterChartData,
      options: {
        title: {
          display: true,
          text: 'my sister'
        },
        scales: {
          xAxes: [{
            type: 'logarithmic',
            position: 'bottom',
            ticks: {
              userCallback: function(tick) {
                // var remain = tick / (Math.pow(10, Math.floor(Chart.helpers.log10(tick))));

                // if (remain === 1 || remain === 2 || remain === 5) {
                //   return tick.toString() + 'Hz';
                // }

                return tick.toString() + ' day';
              },
            },
            scaleLabel: {
              labelString: 'Frequency',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function(tick) {
                return tick.toString() + ' s';
              }
            },
            scaleLabel: {
              labelString: 'Voltage',
              display: true
            }
          }]
        }
      }
    });


    ctx = document.getElementById('my-canvas').getContext('2d');
    window.myScatter = Chart.Scatter(ctx, {
      data: myScatterChartData,
      options: {
        title: {
          display: true,
          text: 'me'
        },
        scales: {
          xAxes: [{
            type: 'logarithmic',
            position: 'bottom',
            ticks: {
              userCallback: function(tick) {
                return tick.toString() + ' day';
              },
            },
            scaleLabel: {
              labelString: 'Frequency',
              display: true,
            }
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function(tick) {
                return tick.toString() + ' s';
              }
            },
            scaleLabel: {
              labelString: 'Voltage',
              display: true
            }
          }]
        }
      }
    });
  };