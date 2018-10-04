
/**
 * PHILEPE.JS
 * 
 * A lightweight data visualization library
 * 
 */
/**
 * Root object for any Philepe chart
 */
class Philepe {
  /**
   * @param {HTMLElement} container renders the axis lines for any chart
   */
  constructor(container){
    /**
     * Theme config for styling
     */
    this.theme = {
      axis: "#7f8c8d",
      bars: "#2c3e50",
      line: "#2c3e50",
      maxLine: 'green',
      minLine: 'red',
      dots: "#2c3e50"
    }

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
    let yAxisElement = this.lineGenerator({
      x1: 0,
      x2: 0,
      y1: 0,
      y2: this.dims.h,
      stroke: {
        width: 3,
        color: this.theme.axis
      }
    });

    yAxisElement.addEventListener("mouseover", function () {
      console.log(yAxisElement);
    });

    return yAxisElement;
  }
  /**
   * creates and returns an element that outlines the bottom side of the container
   */
  renderXAxis () {
    let xAxisElement = this.lineGenerator({
      x1: -10,
      x2: this.dims.w,
      y1: this.dims.h,
      y2: this.dims.h,
      stroke: {
        color: this.theme.axis,
        width: 3
      }
    });

    xAxisElement.addEventListener("mouseover", function () {
      console.log(xAxisElement);
    });

    return xAxisElement;
  }
  /**
   * @returns an svg line element
   */
  lineGenerator (config) {
    //set defaults
    let stroke = config.stroke.color || this.theme.line;

    let lineElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineElement.setAttribute("x1", config.x1);
    lineElement.setAttribute("x2", config.x2);
    lineElement.setAttribute("y1", config.y1);
    lineElement.setAttribute("y2", config.y2);
    lineElement.setAttribute("stroke", stroke);

    if(config.stroke.width) {
      lineElement.setAttribute("stroke-width", config.stroke.width);
    }

    return lineElement;
  }
  /**
   * @returns an svg rect element
   */
  barGenerator (config) {
    let barElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    let fill = config.fill || this.theme.bars;

    barElement.setAttribute("height", config.height);
    barElement.setAttribute("width", config.width);
    barElement.setAttribute("x", config.x);
    barElement.setAttribute("y", config.y);
    barElement.setAttribute("fill", fill);

    return barElement
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

      let barElement = this.barGenerator({
        height: (d[j] / elemMaxValue) * this.dims.h,
        width: elemW,
        x: positionLeft * elemW,
        y: (elemMaxValue - d[j]) / elemMaxValue * this.dims.h 
      });

      barElement.addEventListener("mouseover", function () {
        console.log(barElement);
      });

      this.boundary.appendChild(barElement);
      positionLeft = positionLeft + 2;//accounts for padding between bar
    }
  }
};
/**
 * Bullet Chart object
 */
class BulletChart extends Philepe {
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
    //expect d: {min: integer, max: integer, val: integer}[]
    let elemCount = d.length;
    let elemW = this.dims.w / ((elemCount * 2) + 1);
    let elemMaxValue = 0;

    //first loop, check to 'initialize' maxValue in data
    for (var i = 0; i < d.length; i++) {
      if (this.objectHasProperty(d[i], 'val')) {

        let objectMaxValue;
        d[i].max >= d[i].val ? objectMaxValue = parseInt(d[i].max): objectMaxValue = parseInt(d[i].val);

        if(objectMaxValue > elemMaxValue) {
          elemMaxValue = objectMaxValue;
        }
      } else {
          delete(d[i])
      }
    }


    let positionLeft = 1;
    //create all bullet charts and append them to container
    for (var j = 0; j <= d.length - 1; j++) {

      let x1 = positionLeft * elemW;
      let x2 = x1 + elemW;

      let barElement = this.barGenerator({
        height: (d[j].val / elemMaxValue) * this.dims.h,
        width: elemW,
        x: x1,
        y: (elemMaxValue - d[j].val) / elemMaxValue * this.dims.h
      });

      barElement.addEventListener("mouseover", function () {
        console.log(barElement);
      });

      this.boundary.appendChild(barElement);

      let yMax = this.dims.h - ((d[j].max / elemMaxValue) * this.dims.h);
      let maxLineElement = this.lineGenerator({
        x1,
        x2,
        y1: yMax,
        y2: yMax,
        stroke: {
          color: this.theme.maxLine,
          width: 2
        }
      });

      maxLineElement.addEventListener("mouseover", function () {
        console.log(maxLineElement);
      });

      this.boundary.appendChild(maxLineElement);


      let yMin = this.dims.h - ((d[j].min / elemMaxValue) * this.dims.h);
      let minLineElement = this.lineGenerator({
        x1,
        x2,
        y1: yMin,
        y2: yMin,
        stroke: {
          color: this.theme.minLine,
          width: 2
        }
      });

      minLineElement.addEventListener("mouseover", function () {
        console.log(minLineElement);
      });
      
      this.boundary.appendChild(minLineElement);

      positionLeft = positionLeft + 2;//accounts for padding between bar
    }
  }

  objectHasProperty (o, propName) {
    if(typeof o[propName] !== 'undefined') {
      return true;
    } else {
      Logger.missingPropertyError(propName, o, 'The data will not be appended to the chart');
      return false;
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
      el.setAttribute("fill", this.theme.bars);

      el.addEventListener("mouseover", function () {
        console.log(el);
      });

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
      let el = this.lineGenerator({
        x1: positionLeft * elemLoc, 
        x2: (positionLeft + 2) * elemLoc, 
        y1: (elemMaxValue - d[j - 1]) / elemMaxValue * this.dims.h,
        y2: (elemMaxValue - d[j]) / elemMaxValue * this.dims.h,
        stroke: {
          color: this.theme.bars
        }
      });
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

const Logger = {
  missingPropertyError: function(propName, source, msg) {
    let errString = `Missing property ${propName} in object ${JSON.stringify(source)}.`;
    
    if (typeof msg !== 'undefined' && typeof msg === 'string') {
      errString += '\n' + msg;
    }

    this.logError(errString);
  },
  logError: function (msg) {
    console.error(msg);
  }
}
