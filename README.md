## Function

### Philepe.appendBarChart(anchor, data)
This function dynamically appends svg bars to a bar chart container, which is provided in the parameter.

The bars will scale so that they are all spaced out and sized evenly, relative to the dimensions of their parent container.

### appendBarChart() attributes
* anchor (html element, div) : DOM object to append to
* data (array of values, int) : each value represents one 'bar'
* minData: (single value, int) : draws a dotted line on the chart at the y position 'minData'
* targetData (single value, int) : draws a dotted line on the chart at the y position 'targetData'
* axis (boolean) : if true, renders axis for graph (x and y), defaults true

```
// example.js

philepe.appendBarChart(document.getElementById('containerDiv'), {
  data: [1, 2, 3, 4, 5, ...],
  minData: 2,
  targetData: 4,
  axis: true
});
```

## Built With

* HTML/CSS
* Vanilla Javascript

## Authors

* [Stephen Ramirez](https://github.com/ramirs/)
