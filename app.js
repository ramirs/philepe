(function() {

  let container = document.getElementById("bar-chart-container");

  new BarChart(container, new MockData(25, 'Linear'));
  new LineChart(container, new MockData(25, 'Linear'));
  new ScatterPlot(container, new MockData(25, 'Linear'));

})();
