
/**
 * PHILEPE.JS
 * 
 * A lightweight data visualization library
 * 
 */



/**
 * Theme config for styling
 */
const Colors = {
  axis: "#7f8c8d",
  bars: "#2c3e50",
  dots: "#2c3e50"
}
/**
 * Root object for any Philepe chart
 */
class Philepe {
  /**
   * @param {HTMLElement} container renders the axis lines for any chart
   */
  constructor(container){
    this.dims = { h: container.clientHeight, w: container.clientWidth };
    this.boundary = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    this.boundary.setAttribute("height", this.dims.h);
    this.boundary.setAttribute("width", this.dims.w);

    this.boundary.appendChild(this.renderYAxis());
    this.boundary.appendChild(this.renderXAxis());

    container.appendChild(this.boundary);
  }
  /**
   * creates and returns an element that outlines the left side of the container
   */
  renderYAxis () {
    let yAxisElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yAxisElement.setAttribute("y1", 0);
    yAxisElement.setAttribute("y2", this.dims.h);
    yAxisElement.setAttribute("stroke-width", "3");
    yAxisElement.setAttribute("stroke", Colors.axis);
    return yAxisElement;
  }
  /**
   * creates and returns an element that outlines the bottom side of the container
   */
  renderXAxis () {
    let xAxisElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxisElement.setAttribute("x1", -10);
    xAxisElement.setAttribute("x2", this.dims.w);
    xAxisElement.setAttribute("y1", this.dims.h);
    xAxisElement.setAttribute("y2", this.dims.h);
    xAxisElement.setAttribute("stroke-width", "3");
    xAxisElement.setAttribute("stroke", Colors.axis);
    return xAxisElement;
  }
};
/**
 * Bar Chart object
 */
class BarChart extends Philepe {
  constructor(container, data) {
    super(container);

    this.render(data);
  }

  /**
   * Creates a series of bars that visualize data d, appending them to the root graph
   * @param {Array} d any array of integers
   */
  render (d) {
    //begin to parse data attributes
    let elemCount = d.length;
    let elemW = this.dims.w / ((elemCount * 2) + 1);
    let elemMaxValue = 0;
    //first loop, check to 'finalize' maxValue in data
    for (var i = 0; i < d.length; i++) {
      if(d[i] > elemMaxValue) {
        elemMaxValue = d[i];
      }
    }
    let positionLeft = 1;
    //create all bars and append them to container
    for (var j = 0; j <= d.length - 1; j++) {
      let barElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      barElement.setAttribute("height", (d[j] / elemMaxValue) * this.dims.h);
      barElement.setAttribute("width", elemW);
      barElement.setAttribute("x", positionLeft * elemW);
      barElement.setAttribute("y", ((elemMaxValue - d[j]) / elemMaxValue * this.dims.h ));
      barElement.setAttribute("fill", Colors.bars)
      this.boundary.appendChild(barElement);
      positionLeft = positionLeft + 2;//accounts for padding between bar
    }
  }
};
/**
 * ScatterPlot object
 */
class ScatterPlot extends Philepe {
  constructor(container, data) {
    super(container);

    this.render(data);
  }

  render (d) {
    //begin to parse data attributes
    let elemCount = d.length;
    let elemLoc = this.dims.w / ((elemCount * 2) + 1);
    let elemMaxValue = 0;
    //first loop, check to 'finalize' maxValue in data
    for (var i = 0; i < d.length; i++) {
      if(d[i] > elemMaxValue) {
        elemMaxValue = d[i]; //account for padding (radius)
      }
    }
    let positionLeft = 1;
    //create all bars and append them to container
    for (var j = 0; j <= d.length - 1; j++) {
      let el = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      el.setAttribute("cx", positionLeft * elemLoc);
      el.setAttribute("cy", ((elemMaxValue - d[j]) / elemMaxValue * this.dims.h ));
      el.setAttribute("r", "3");
      el.setAttribute("fill", Colors.bars)
      this.boundary.appendChild(el);
      positionLeft = positionLeft + 2;//accounts for padding between bar
    }
  }
};
/**
 * Line Chart object
 */
class LineChart extends Philepe {
  constructor(container, data) {
    super(container);

    console.log(data);
    this.render(data);
  }

  render (d) {
    //begin to parse data attributes
    let elemCount = d.length;
    let elemLoc = this.dims.w / ((elemCount * 2) + 1);
    let elemMaxValue = 0;
    //first loop, check to 'finalize' maxValue in data
    for (var i = 0; i < d.length; i++) {
      if(d[i] > elemMaxValue) {
        elemMaxValue = d[i]; //account for padding (radius)
      }
    }
    let positionLeft = 1;
    //create all bars and append them to container (start at 2nd element)
    for (var j = 1; j <= d.length - 1; j++) {
      let el = document.createElementNS("http://www.w3.org/2000/svg", "line");
      el.setAttribute("x1", positionLeft * elemLoc);
      el.setAttribute("x2", (positionLeft + 2) * elemLoc);
      el.setAttribute("y1", ((elemMaxValue - d[j - 1]) / elemMaxValue * this.dims.h ));
      el.setAttribute("y2", ((elemMaxValue - d[j]) / elemMaxValue * this.dims.h ));
      el.setAttribute("stroke", Colors.bars)
      this.boundary.appendChild(el);
      positionLeft = positionLeft + 2;//accounts for padding between bar
    }
  }
};

const MockData = function (n, config) {

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