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

  let createBarChart = function (){
    philepe.appendBarChart(container, {
      data: typeof lastRand === 'undefined'? arrayOfRand(document.getElementById('input-elements').value) : lastRand,
      minData: document.getElementById('input-min').value,
      targetData: document.getElementById('input-max').value,
      axis: true,
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
