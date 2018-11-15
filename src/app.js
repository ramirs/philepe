let Philepe = require('./../philepe');
let mockData = function (n, config) {

  let maxNum = 25;
  let arr = new Array();

  /**
   * Returns a random integer between two values min and max
   * @param {int} min 
   * @param {int} max
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
   */
  let getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  switch (config) {

  case 'Linear':
    for (let i = 0; i < n; i++) {
      arr.push(getRandomInt(i, i + 10));
    }
    return arr;
  default:
    for (let i = 0; i < n; i++) {
      arr.push(getRandomInt(0, maxNum));
    }
    return arr;
  }
};

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

new Philepe.BarChart(document.getElementById("chart1"), mockData(25, "Linear"));
new Philepe.LineChart(document.getElementById("chart2"), mockData(25, "Linear"));
new Philepe.ScatterPlot(document.getElementById("chart3"), mockData(25, "Linear"));
new Philepe.BulletChart(document.getElementById("chart4"), bulletChartTestData);


// how to do combined charts?
// new Philepe.GroupChart(document.getElementById("chart5"), mockData(25, "Linear"))
new Philepe.BarChart(document.getElementById("chart5"), mockData(25, "Linear"));
new Philepe.LineChart(document.getElementById("chart5"), mockData(25, "Linear"));


