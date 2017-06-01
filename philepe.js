function Philepe () {
  this.targetDims = { //container client dims
    maxH: 0,
    maxW: 0
  };
}

Philepe.prototype.updateTargetDims = function (dims) {
  this.targetDims = {
    maxH: dims.clientHeight,
    maxW: dims.clientWidth
  }
}

Philepe.prototype.renderYAxis = function () {
  //y axis
  let yAxisElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
  yAxisElement.setAttribute("y1", "" + 0);
  yAxisElement.setAttribute("y2", "" + this.targetDims.maxH);
  yAxisElement.setAttribute("stroke-width", "3");
  yAxisElement.setAttribute("stroke", "#7f8c8d");
  return yAxisElement;
}

Philepe.prototype.renderXAxis = function () {
  //x axis
  let xAxisElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
  xAxisElement.setAttribute("x1", "" + 0);
  xAxisElement.setAttribute("x2", "" + this.targetDims.maxW);
  xAxisElement.setAttribute("y1", "" + this.targetDims.maxH);
  xAxisElement.setAttribute("y2", "" + this.targetDims.maxH);
  xAxisElement.setAttribute("stroke-width", "3");
  xAxisElement.setAttribute("stroke", "#7f8c8d");
  return xAxisElement;
}

Philepe.prototype.appendBarChart = function (anchor, data) {
  let dataToRender = data;
  this.updateTargetDims(anchor);
  console.log(dataToRender);

  //set container
  let barContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  barContainer.setAttribute("height", "" + this.targetDims.maxH);
  barContainer.setAttribute("width", "" + this.targetDims.maxW);
  //attributes can also set style

  //render axis (if user allows)
  if(typeof data.axis === 'undefined' || data.axis) {
    barContainer.appendChild(this.renderYAxis());
    barContainer.appendChild(this.renderXAxis());
  }

  //begin to parse data attributes
  let elemCount = dataToRender.data.length;
  let elemW = this.targetDims.maxW / ((elemCount * 2) + 1);
  let elemMaxValue = 0; //capture initial max, if any
  if(typeof data.targetData !== 'undefined' && data.targetData != null) {
    elemMaxValue = data.targetData;
  }
  if(typeof data.minData !== 'undefined' && data.minData != null) {
    if(data.minData > elemMaxValue) {
      elemMaxValue = data.minData;
    }
  }
  //first loop, check to 'finalize' maxValue in data
  for (var i = 0; i < dataToRender.data.length; i++) {
    if(dataToRender.data[i] > elemMaxValue) {
      elemMaxValue = dataToRender.data[i];
    }
  }
  let positionLeft = 1;
  //create all bars and append them to container
  for (var j = 0; j <= dataToRender.data.length - 1; j++) {
    let barElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    barElement.setAttribute("height", "" + (dataToRender.data[j] / elemMaxValue) * this.targetDims.maxH);
    barElement.setAttribute("width", "" + elemW);
    barElement.setAttribute("x", "" + positionLeft * elemW);
    barElement.setAttribute("y", "" + ((elemMaxValue - dataToRender.data[j]) / elemMaxValue * this.targetDims.maxH ));
    barElement.setAttribute("fill", "#2c3e50")
    barContainer.appendChild(barElement);
    positionLeft = positionLeft + 2;//accounts for padding between bar, linearly spaced
  }

  //optional user input : a line to show a 'minimum' height for any bar to pass
  if(typeof data.minData !== 'undefined' && data.minData != null) {
    let minLineElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
    minLineElement.setAttribute("stroke-dasharray", "5,5");
    minLineElement.setAttribute("x1", "0");
    minLineElement.setAttribute("x2", "" + this.targetDims.maxW);
    let minLineHeight = (elemMaxValue - data.minData) / elemMaxValue * this.targetDims.maxH;
    minLineElement.setAttribute("y1", "" + minLineHeight);
    minLineElement.setAttribute("y2", "" + minLineHeight);
    minLineElement.setAttribute("stroke", "#c0392b");
    barContainer.appendChild(minLineElement);
  }
  //optional user input : a line to show a 'goal' height for any bar to pass
  if(typeof data.targetData !== 'undefined' && data.targetData != null) {
    let maxLineElement = document.createElementNS("http://www.w3.org/2000/svg", "line");
    maxLineElement.setAttribute("stroke-dasharray", "5,5");
    maxLineElement.setAttribute("x1", "0");
    maxLineElement.setAttribute("x2", "" + this.targetDims.maxW);
    let maxLineHeight = (elemMaxValue - data.targetData) / elemMaxValue * this.targetDims.maxH;
    maxLineElement.setAttribute("y1", "" + maxLineHeight);
    maxLineElement.setAttribute("y2", "" + maxLineHeight);
    maxLineElement.setAttribute("stroke", "#16a085");
    barContainer.appendChild(maxLineElement);
  }

  //optional user input : ticks to

  //append container, which has at least all bars and any optional user inputs attached
  anchor.appendChild(barContainer);
};

//TODO: getData() { returns data array, one element for each piece of data captured by Philepe (every time we init a new visual, push {container: data} to array) }
