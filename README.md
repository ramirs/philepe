## Functions

# Philepe.appendBarChart(anchor, data)

# DESCRIPTION
  This function dynamically appends svg bars to a bar chart container, which is provided in the parameter.
  The bars will horizontally scale evenly so that they are all spaced out and sized evenly, relative to the dimensions of their parent container.


# ATTRIBUTES
  anchor: html element (div),
  data: object (holds attributes to create new bar charts)
    {
      data: (array of values) each value represents one 'bar',
      mindata: (single value) draws a dotted line on the chart at the y position 'minData',
      targetData: (single value) draws a dotted line on the chart at the y position 'targetData'
      axis: (boolean) if true, renders axis for graph (x and y), defaults true
    }


## Built With

* HTML/CSS
* Javascript - manipulating SVGs and stuff

## Authors

* [Stephen Ramirez](http://ramirs.com)
