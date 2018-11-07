
# Philepe.js

Lightweight
* ~10 kb

Simple to Use
* Pass in arrays of data

Extensible
* This library is build using es6 classes, feel free to extend and add new visualiations and submit a PR if you make something worth sharing

### Charts, explained

All charts have
* Containers
* Generators
* Options

Containers
* HTML elements used to anchor each type of chart
* Each container will render an x and y axis on the left and bottom boundary of the anchor element
* Each container needs a static height and width defined

Generators
* Generators are private internal functions that create html elements with configuration options
* Line Generator
* Bar Generator

Root Chart Options
```
theme: {
  ///TODO
}
```

### Axis

* SVG Line elements appended to each container
* X and Y axis enabled by default

### Bar Graphs

Data Format

Options

### Logger

Produces detailed errors in the console to help guide you through usage of the library

## Installation

As a module
* copy / paste the js file into your codebase

Sandbox Environment
* git clone
* npm i

## Author

* [Stephen Ramirez](https://github.com/ramirs/)
