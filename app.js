(function() {

  let arrayOfRand = function (n) {
    let arr = new Array();
    for (let i = 0; i < n; i++) {
      arr.push(Math.ceil(Math.random() * 100 / 10));
    }
    return arr;
  };

  let createBarChart = function(container){
    let philepe = new Philepe();
    philepe.appendBarChart(container, {
      data: arrayOfRand(10),
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

  createBarChart(document.getElementById("bar-chart-container"));

})();
