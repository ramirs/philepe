(function() {

  let mockData = new MockData(25, 'Linear');
  let bulletChartTestData = [
    {
      min: 5,
      max: 10,
      val: 7
    },
    {
      min: 12,
      max: 15,
      val: 6
    },
    {
      min: 10,
      max: 15,
      val: 17
    }
  ];

  new BarChart(document.getElementById("chart1"), mockData);
  new LineChart(document.getElementById("chart2"), mockData);
  new ScatterPlot(document.getElementById("chart3"), mockData);
  new BulletChart(document.getElementById("chart4"), bulletChartTestData);

})();
