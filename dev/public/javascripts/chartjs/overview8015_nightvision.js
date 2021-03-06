var ctx = document.getElementById('nightvision8015');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-8015', 'IN-6012', 'IN-3011', 'IN-9008', 'IN-5907', 'IN-5905'],
        datasets: [
            {
                type: 'bar',
                label: 'Nachtsicht min. [m]',
                data: [5, 5, 8, 12, 18, 12],
                backgroundColor: [
                 'rgba(2, 117, 216, 1)',
                 'rgba(2, 117, 216, 1)',
                 'rgba(2, 117, 216, 1)',
                 'rgba(2, 117, 216, 1)',
                 'rgba(2, 117, 216, 1)',
                 'rgba(2, 117, 216, 1)',
                ],
              },
            {
                type: 'bar',
                label: 'Nachtsicht max. [m]',
                data: [10, 10, 12, 20, 25, 20],
                backgroundColor: [
                 'rgba(240, 173, 78, 1)',
                 'rgba(240, 173, 78, 1)',
                 'rgba(240, 173, 78, 1)',
                 'rgba(240, 173, 78, 1)',
                 'rgba(240, 173, 78, 1)',
                 'rgba(240, 173, 78, 1)',
                ],
              },
        ],
      },
		  options: {
      legend: {
        display: false,
      },
		    scales: {
		      yAxes: [{
		        ticks: {
              max: 30,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
