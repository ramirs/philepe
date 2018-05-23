(function() {

  let philepe = new Philepe();
  let container = document.getElementById("bar-chart-container");
  let lastRand;

  let arrayOfRand = function (n) {
    let maxNum = document.getElementById('input-max-element').value;
    let arr = new Array();
    for (let i = 0; i < n; i++) {
      arr.push(Math.ceil(Math.random() * maxNum));
    }
    lastRand = arr;
    return lastRand;
  };

  let createBarChart = function () {
    philepe.appendBarChart(container, {
      data: typeof lastRand === 'undefined'? arrayOfRand(document.getElementById('input-elements').value) : lastRand,
      minData: document.getElementById('input-min').value,
      targetData: document.getElementById('input-max').value,
      axis: true,

      // minData: 1, //commenting this back will add the 'minData' line to the chart
      // targetData: 5, //commenting this back will add the 'targetData' line to the chart
      // axis: false, //commenting this back will remove the axis on both sides
      // ticks: 10, //TODO: scaled to maxValueHeight (maxValue = 5, ticks = 10, step every 0.5 || maxValue = 10, ticks = 4, step every 2.5)
      // tickOrientation: null, //TODO: ?? origin: start tick value at 0, excluding max value || center: exclude 0 and max value from tick positions || maxFirst: exclude 0 from tick values || null: default (inclusive of 0 and max value)
      // colors: {bars:'', axis:'', ticks:'', labels:''}, //TODO: custom styles for objects
      // orientation: null, //TODO: horizontal or vertical
      // negativeValues: true //TODO: adjust axis height and bar placement

    });
  };

  let repaintBars = function () {
    container.innerHTML = '';
    createBarChart();
  };
  
  let updateData = function () {
    arrayOfRand(document.getElementById('input-elements').value);
    repaintBars();
  };

  document.getElementById('input-elements').addEventListener('change', updateData);
  document.getElementById('input-max-element').addEventListener('change', updateData);
  document.getElementById('input-min').addEventListener('change', repaintBars);
  document.getElementById('input-max').addEventListener('change', repaintBars);
    
  createBarChart();

})();
