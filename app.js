(function() {

  let philepe = new Philepe();

  let arrayOfRand = function (n) {
    let arr = new Array();
    for (let i = 0; i < n; i++) {
      arr.push(Math.ceil(Math.random() * 100 / 10));
    }
    return arr;
  };

  let createBarChart = function(container){
    philepe.appendBarChart(container, {
      data: arrayOfRand(5),
      // minData: 1,
      // targetData: 5,
      // axis: false,//both axis, or separate y and x?
      // ticks: 0,//scaled to maxValueHeight (maxValue = 5, ticks = 10, step every 0.5 || maxValue = 10, ticks = 4, step every 2.5)
      // tickOrientation: null,//origin: start tick value at 0, excluding max value || center: exclude 0 and max value from tick positions || maxFirst: exclude 0 from tick values || null: default (inclusive of 0 and max value)
      // colors: {bars:'', axis:'', ticks:'', labels:''},//custom styles for objects
      // orientation: null//horizontal or vertical
      // negativeValues: true//adjust axis height and bar placement
    });
  };

  createBarChart(document.getElementById("bar-chart-container"));

})();
