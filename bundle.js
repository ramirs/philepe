/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./philepe.js":
/*!********************!*\
  !*** ./philepe.js ***!
  \********************/
/*! exports provided: Philepe, BarChart, BulletChart, ScatterPlot, LineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Philepe\", function() { return Philepe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BarChart\", function() { return BarChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BulletChart\", function() { return BulletChart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScatterPlot\", function() { return ScatterPlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LineChart\", function() { return LineChart; });\n/**\n * PHILEPE.JS\n * \n * A lightweight data visualization library\n * \n */\n/**\n * Root object for any Philepe chart\n */\n  class Philepe {\n  /**\n   * @param {HTMLElement} container renders the axis lines for any chart\n   */\n  constructor(container, options) {\n    /**\n     * Theme config for styling\n     */\n    this.theme = {\n      axis: \"#7f8c8d\",\n      bars: \"#2c3e50\",\n      line: \"#2c3e50\",\n      maxLine: 'green',\n      minLine: 'red',\n      dots: \"#2c3e50\"\n    }\n\n    // TODO: let user customize theme\n    // if(typeof options !== 'undefined' && options.bars) {\n    //   this.theme.bars = options.bars\n    // }\n\n    this.dims = { h: container.clientHeight, w: container.clientWidth };\n    this.boundary = document.createElementNS(\"http://www.w3.org/2000/svg\", \"svg\");\n\n    this.boundary.setAttribute(\"height\", this.dims.h);\n    this.boundary.setAttribute(\"width\", this.dims.w);\n\n    this.boundary.appendChild(this.renderYAxis());\n    this.boundary.appendChild(this.renderXAxis());\n\n    container.appendChild(this.boundary);\n  }\n  /**\n   * creates and returns an element that outlines the left side of the container\n   */\n  renderYAxis () {\n    let yAxisElement = this.lineGenerator({\n      x1: 0,\n      x2: 0,\n      y1: 0,\n      y2: this.dims.h,\n      stroke: {\n        width: 3,\n        color: this.theme.axis\n      }\n    });\n\n    yAxisElement.addEventListener(\"mouseover\", function () {\n      console.log(yAxisElement);\n    });\n\n    return yAxisElement;\n  }\n  /**\n   * creates and returns an element that outlines the bottom side of the container\n   */\n  renderXAxis () {\n    let xAxisElement = this.lineGenerator({\n      x1: -10,\n      x2: this.dims.w,\n      y1: this.dims.h,\n      y2: this.dims.h,\n      stroke: {\n        color: this.theme.axis,\n        width: 3\n      }\n    });\n\n    xAxisElement.addEventListener(\"mouseover\", function () {\n      console.log(xAxisElement);\n    });\n\n    return xAxisElement;\n  }\n  // /**\n  //  * TODO: generate tooltips\n  //  * do this on click first\n  //  */\n  // renderTooltip(event, data) {\n  //   if(typeof this.toolTip === 'undefined') {\n\n  //     // create a new div element \n  //     this.toolTip = document.createElement(\"div\"); \n  //     this.toolTip.setAttribute('id', 'philepe-tooltip-tag')\n  //     let content = document.createTextNode(data); \n  //     this.toolTip.appendChild(content);\n  //     this.toolTip.style.position = 'absolute';\n  //     this.toolTip.style.left = `${event.x}px`;\n  //     this.toolTip.style.top = `${event.y}px`;\n  //     this.toolTip.style.width = '200px';\n  //     this.toolTip.style.height = '120px';\n  //     // add the newly created element and its content into the DOM \n  //     document.body.appendChild(this.toolTip);\n  //   }\n  // }\n\n  // destroyTooltip () {\n  //   this.toolTip.parentNode.removeChild(this.toolTip);\n  // }\n  /**\n   * @returns an svg line element\n   */\n  lineGenerator (config) {\n    //set defaults\n    let stroke = config.stroke.color || this.theme.line;\n\n    let lineElement = document.createElementNS(\"http://www.w3.org/2000/svg\", \"line\");\n    lineElement.setAttribute(\"x1\", config.x1);\n    lineElement.setAttribute(\"x2\", config.x2);\n    lineElement.setAttribute(\"y1\", config.y1);\n    lineElement.setAttribute(\"y2\", config.y2);\n    lineElement.setAttribute(\"stroke\", stroke);\n\n    if(config.stroke.width) {\n      lineElement.setAttribute(\"stroke-width\", config.stroke.width);\n    }\n\n    return lineElement;\n  }\n  /**\n   * @returns an svg rect element\n   */\n  barGenerator (config) {\n    // TODO: switch to using svg viewboxes (padding helps with tooltips)\n    // https://codepen.io/anon/pen/OBjaxg\n    let barElement = document.createElementNS(\"http://www.w3.org/2000/svg\", \"rect\");\n\n    let fill = config.fill || this.theme.bars;\n\n    barElement.setAttribute(\"height\", config.height);\n    barElement.setAttribute(\"width\", config.width);\n    barElement.setAttribute(\"x\", config.x);\n    barElement.setAttribute(\"y\", config.y);\n    barElement.setAttribute(\"fill\", fill);\n\n    return barElement\n  }\n};\n\n\n/**\n * Bar Chart object\n */ \nclass BarChart extends Philepe {\n  constructor(container, data, options) {\n    super(container, options);\n\n    this.render(data);\n  }\n\n  /**\n   * Creates a series of bars that visualize data d, appending them to the root graph\n   * @param {Array} d any array of integers\n   */\n  render (d) {\n    //begin to parse data attributes\n    let elemCount = d.length;\n    let elemW = this.dims.w / ((elemCount * 2) + 1);\n    let elemMaxValue = 0;\n    let that = this;\n    //first loop, check to 'finalize' maxValue in data\n    for (let i = 0; i < d.length; i++) {\n      if(d[i] > elemMaxValue) {\n        elemMaxValue = d[i];\n      }\n    }\n    let positionLeft = 1;\n    //create all bars and append them to container\n    for (let j = 0; j <= d.length - 1; j++) {\n\n      let barElement = this.barGenerator({\n        height: (d[j] / elemMaxValue) * this.dims.h,\n        width: elemW,\n        x: positionLeft * elemW,\n        y: (elemMaxValue - d[j]) / elemMaxValue * this.dims.h \n      });\n\n      barElement.addEventListener(\"mouseover\", function (event) {\n        this.setAttribute('opacity', '0.75');\n        that.renderTooltip(event, `Value ${d[j]}`);\n      });\n\n      barElement.addEventListener(\"mouseout\", function (event) {\n        this.setAttribute('opacity', '1.0');\n        that.destroyTooltip();\n      });\n\n      this.boundary.appendChild(barElement);\n      positionLeft = positionLeft + 2;//accounts for padding between bar\n    }\n  }\n};\n\n\n\n/**\n * Bullet Chart object\n */\nclass BulletChart extends Philepe {\n  constructor(container, data) {\n    super(container);\n\n    this.render(data);\n  }\n\n  /**\n   * Creates a series of bars that visualize data d, appending them to the root graph\n   * @param {Array} d any array of integers\n   */\n  render (d) {\n    //begin to parse data attributes\n    //expect d: {min: integer, max: integer, val: integer}[]\n    let elemCount = d.length;\n    let elemW = this.dims.w / ((elemCount * 2) + 1);\n    let elemMaxValue = 0;\n\n    //first loop, check to 'initialize' maxValue in data\n    for (var i = 0; i < d.length; i++) {\n      if (this.objectHasProperty(d[i], 'val')) {\n\n        let objectMaxValue;\n        d[i].max >= d[i].val ? objectMaxValue = parseInt(d[i].max): objectMaxValue = parseInt(d[i].val);\n\n        if(objectMaxValue > elemMaxValue) {\n          elemMaxValue = objectMaxValue;\n        }\n      } else {\n          delete(d[i])\n      }\n    }\n\n\n    let positionLeft = 1;\n    //create all bullet charts and append them to container\n    for (var j = 0; j <= d.length - 1; j++) {\n\n      let x1 = positionLeft * elemW;\n      let x2 = x1 + elemW;\n\n      let barElement = this.barGenerator({\n        height: (d[j].val / elemMaxValue) * this.dims.h,\n        width: elemW,\n        x: x1,\n        y: (elemMaxValue - d[j].val) / elemMaxValue * this.dims.h\n      });\n\n      barElement.addEventListener(\"mouseover\", function () {\n        console.log(barElement);\n      });\n\n      this.boundary.appendChild(barElement);\n\n      let yMax = this.dims.h - ((d[j].max / elemMaxValue) * this.dims.h);\n      let maxLineElement = this.lineGenerator({\n        x1,\n        x2,\n        y1: yMax,\n        y2: yMax,\n        stroke: {\n          color: this.theme.maxLine,\n          width: 2\n        }\n      });\n\n      maxLineElement.addEventListener(\"mouseover\", function () {\n        console.log(maxLineElement);\n      });\n\n      this.boundary.appendChild(maxLineElement);\n\n\n      let yMin = this.dims.h - ((d[j].min / elemMaxValue) * this.dims.h);\n      let minLineElement = this.lineGenerator({\n        x1,\n        x2,\n        y1: yMin,\n        y2: yMin,\n        stroke: {\n          color: this.theme.minLine,\n          width: 2\n        }\n      });\n\n      minLineElement.addEventListener(\"mouseover\", function () {\n        console.log(minLineElement);\n      });\n\n      this.boundary.appendChild(minLineElement);\n\n      positionLeft = positionLeft + 2;//accounts for padding between bar\n    }\n  }\n\n  objectHasProperty (o, propName) {\n    if(typeof o[propName] !== 'undefined') {\n      return true;\n    } else {\n      Logger.missingPropertyError(propName, o, 'The data will not be appended to the chart');\n      return false;\n    }\n  }\n};\n\n\n\n/**\n * ScatterPlot object\n */\nclass ScatterPlot extends Philepe {\n  constructor(container, data) {\n    super(container);\n\n    this.render(data);\n  }\n\n  render (d) {\n    //begin to parse data attributes\n    let elemCount = d.length;\n    let elemLoc = this.dims.w / ((elemCount * 2) + 1);\n    let elemMaxValue = 0;\n    //first loop, check to 'finalize' maxValue in data\n    for (var i = 0; i < d.length; i++) {\n      if(d[i] > elemMaxValue) {\n        elemMaxValue = d[i]; //account for padding (radius)\n      }\n    }\n    let positionLeft = 1;\n    //create all bars and append them to container\n    for (var j = 0; j <= d.length - 1; j++) {\n      let el = document.createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\n      el.setAttribute(\"cx\", positionLeft * elemLoc);\n      el.setAttribute(\"cy\", ((elemMaxValue - d[j]) / elemMaxValue * this.dims.h ));\n      el.setAttribute(\"r\", \"3\");\n      el.setAttribute(\"fill\", this.theme.bars);\n\n      el.addEventListener(\"mouseover\", function () {\n        console.log(el);\n      });\n\n      this.boundary.appendChild(el);\n      positionLeft = positionLeft + 2;//accounts for padding between bar\n    }\n  }\n};\n\n\n\n/**\n * Line Chart object\n */\nclass LineChart extends Philepe {\n  constructor(container, data) {\n    super(container);\n\n    console.log(data);\n    this.render(data);\n  }\n\n  render (d) {\n    //begin to parse data attributes\n    let elemCount = d.length;\n    let elemLoc = this.dims.w / ((elemCount * 2) + 1);\n    let elemMaxValue = 0;\n    //first loop, check to 'finalize' maxValue in data\n    for (var i = 0; i < d.length; i++) {\n      if(d[i] > elemMaxValue) {\n        elemMaxValue = d[i]; //account for padding (radius)\n      }\n    }\n    let positionLeft = 1;\n    //create all bars and append them to container (start at 2nd element)\n    for (var j = 1; j <= d.length - 1; j++) {\n      let el = this.lineGenerator({\n        x1: positionLeft * elemLoc, \n        x2: (positionLeft + 2) * elemLoc, \n        y1: (elemMaxValue - d[j - 1]) / elemMaxValue * this.dims.h,\n        y2: (elemMaxValue - d[j]) / elemMaxValue * this.dims.h,\n        stroke: {\n          color: this.theme.bars\n        }\n      });\n      this.boundary.appendChild(el);\n      positionLeft = positionLeft + 2;//accounts for padding between bar\n    }\n  }\n};\n\nconst Logger = {\n  missingPropertyError: function(propName, source, msg) {\n    let errString = `Missing property ${propName} in object ${JSON.stringify(source)}.`;\n    \n    if (typeof msg !== 'undefined' && typeof msg === 'string') {\n      errString += '\\n' + msg;\n    }\n\n    this.logError(errString);\n  },\n  logError: function (msg) {\n    console.error(msg);\n  }\n}\n\n//# sourceURL=webpack:///./philepe.js?");

/***/ }),

/***/ "./require.js":
/*!********************!*\
  !*** ./require.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var require;var require;/** vim: et:ts=4:sw=4:sts=4\n * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.\n * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE\n */\nvar requirejs,require,define;!function(global,setTimeout){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version=\"2.3.6\",commentRegExp=/\\/\\*[\\s\\S]*?\\*\\/|([^:\"'=]|^)\\/\\/.*$/gm,cjsRequireRegExp=/[^.]\\s*require\\s*\\(\\s*[\"']([^'\"\\s]+)[\"']\\s*\\)/g,jsSuffixRegExp=/\\.js$/,currDirRegExp=/^\\.\\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!(\"undefined\"==typeof window||\"undefined\"==typeof navigator||!window.document),isWebWorker=!isBrowser&&\"undefined\"!=typeof importScripts,readyRegExp=isBrowser&&\"PLAYSTATION 3\"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName=\"_\",isOpera=\"undefined\"!=typeof opera&&\"[object Opera]\"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function commentReplace(e,t){return t||\"\"}function isFunction(e){return\"[object Function]\"===ostring.call(e)}function isArray(e){return\"[object Array]\"===ostring.call(e)}function each(e,t){var i;if(e)for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}function eachReverse(e,t){var i;if(e)for(i=e.length-1;-1<i&&(!e[i]||!t(e[i],i,e));i-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(i,e,r,n){return e&&eachProp(e,function(e,t){!r&&hasProp(i,t)||(!n||\"object\"!=typeof e||!e||isArray(e)||isFunction(e)||e instanceof RegExp?i[t]=e:(i[t]||(i[t]={}),mixin(i[t],e,r,n)))}),i}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName(\"script\")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split(\".\"),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+\"\\nhttps://requirejs.org/docs/errors.html#\"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||\"string\"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=void 0!==setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\\/|:|\\?|\\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each([\"toUrl\",\"undef\",\"defined\",\"specified\"],function(t){req[t]=function(){var e=contexts[defContextName];return e.require[t].apply(e,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName(\"head\")[0],baseElement=document.getElementsByTagName(\"base\")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"html:script\"):document.createElement(\"script\");return r.type=e.scriptType||\"text/javascript\",r.charset=\"utf-8\",r.async=!0,r},req.load=function(t,i,r){var e,n=t&&t.config||{};if(isBrowser)return(e=req.createNode(n,i,r)).setAttribute(\"data-requirecontext\",t.contextName),e.setAttribute(\"data-requiremodule\",i),!e.attachEvent||e.attachEvent.toString&&e.attachEvent.toString().indexOf(\"[native code\")<0||isOpera?(e.addEventListener(\"load\",t.onScriptLoad,!1),e.addEventListener(\"error\",t.onScriptError,!1)):(useInteractive=!0,e.attachEvent(\"onreadystatechange\",t.onScriptLoad)),e.src=r,n.onNodeCreated&&n.onNodeCreated(e,n,i,r),currentlyAddingScript=e,baseElement?head.insertBefore(e,baseElement):head.appendChild(e),currentlyAddingScript=null,e;if(isWebWorker)try{setTimeout(function(){},0),importScripts(r),t.completeLoad(i)}catch(e){t.onError(makeError(\"importscripts\",\"importScripts failed for \"+i+\" at \"+r,e,[i]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute(\"data-main\"))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf(\"!\")||(mainScript=(src=mainScript.split(\"/\")).pop(),subPath=src.length?src.join(\"/\")+\"/\":\"./\",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,\"\"),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,i,t){var r,n;\"string\"!=typeof e&&(t=i,i=e,e=null),isArray(i)||(t=i,i=null),!i&&isFunction(t)&&(i=[],t.length&&(t.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,t){i.push(t)}),i=(1===t.length?[\"require\"]:[\"require\",\"exports\",\"module\"]).concat(i))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript())&&(e||(e=r.getAttribute(\"data-requiremodule\")),n=contexts[r.getAttribute(\"data-requirecontext\")]),n?(n.defQueue.push([e,i,t]),n.defQueueMap[e]=!0):globalDefQueue.push([e,i,t])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(u){var i,e,l,c,d,g={waitSeconds:7,baseUrl:\"./\",paths:{},bundles:{},pkgs:{},shim:{},config:{}},p={},f={},r={},h=[],m={},n={},v={},x=1,b=1;function q(e,t,i){var r,n,o,a,s,u,c,d,p,f,l=t&&t.split(\"/\"),h=g.map,m=h&&h[\"*\"];if(e&&(u=(e=e.split(\"/\")).length-1,g.nodeIdCompat&&jsSuffixRegExp.test(e[u])&&(e[u]=e[u].replace(jsSuffixRegExp,\"\")),\".\"===e[0].charAt(0)&&l&&(e=l.slice(0,l.length-1).concat(e)),function(e){var t,i;for(t=0;t<e.length;t++)if(\".\"===(i=e[t]))e.splice(t,1),t-=1;else if(\"..\"===i){if(0===t||1===t&&\"..\"===e[2]||\"..\"===e[t-1])continue;0<t&&(e.splice(t-1,2),t-=2)}}(e),e=e.join(\"/\")),i&&h&&(l||m)){e:for(o=(n=e.split(\"/\")).length;0<o;o-=1){if(s=n.slice(0,o).join(\"/\"),l)for(a=l.length;0<a;a-=1)if((r=getOwn(h,l.slice(0,a).join(\"/\")))&&(r=getOwn(r,s))){c=r,d=o;break e}!p&&m&&getOwn(m,s)&&(p=getOwn(m,s),f=o)}!c&&p&&(c=p,d=f),c&&(n.splice(0,d,c),e=n.join(\"/\"))}return getOwn(g.pkgs,e)||e}function E(t){isBrowser&&each(scripts(),function(e){if(e.getAttribute(\"data-requiremodule\")===t&&e.getAttribute(\"data-requirecontext\")===l.contextName)return e.parentNode.removeChild(e),!0})}function w(e){var t=getOwn(g.paths,e);if(t&&isArray(t)&&1<t.length)return t.shift(),l.require.undef(e),l.makeRequire(null,{skipMap:!0})([e]),!0}function y(e){var t,i=e?e.indexOf(\"!\"):-1;return-1<i&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function S(e,t,i,r){var n,o,a,s,u=null,c=t?t.name:null,d=e,p=!0,f=\"\";return e||(p=!1,e=\"_@r\"+(x+=1)),u=(s=y(e))[0],e=s[1],u&&(u=q(u,c,r),o=getOwn(m,u)),e&&(u?f=i?e:o&&o.normalize?o.normalize(e,function(e){return q(e,c,r)}):-1===e.indexOf(\"!\")?q(e,c,r):e:(u=(s=y(f=q(e,c,r)))[0],f=s[1],i=!0,n=l.nameToUrl(f))),{prefix:u,name:f,parentMap:t,unnormalized:!!(a=!u||o||i?\"\":\"_unnormalized\"+(b+=1)),url:n,originalName:d,isDefine:p,id:(u?u+\"!\"+f:f)+a}}function k(e){var t=e.id,i=getOwn(p,t);return i||(i=p[t]=new l.Module(e)),i}function M(e,t,i){var r=e.id,n=getOwn(p,r);!hasProp(m,r)||n&&!n.defineEmitComplete?(n=k(e)).error&&\"error\"===t?i(n.error):n.on(t,i):\"defined\"===t&&i(m[r])}function O(i,e){var t=i.requireModules,r=!1;e?e(i):(each(t,function(e){var t=getOwn(p,e);t&&(t.error=i,t.events.error&&(r=!0,t.emit(\"error\",i)))}),r||req.onError(i))}function j(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];\"string\"==typeof t&&(l.defQueueMap[t]=!0),h.push(e)}),globalDefQueue=[])}function P(e){delete p[e],delete f[e]}function R(){var e,r,t=1e3*g.waitSeconds,n=t&&l.startTime+t<(new Date).getTime(),o=[],a=[],s=!1,u=!0;if(!i){if(i=!0,eachProp(f,function(e){var t=e.map,i=t.id;if(e.enabled&&(t.isDefine||a.push(e),!e.error))if(!e.inited&&n)w(i)?s=r=!0:(o.push(i),E(i));else if(!e.inited&&e.fetched&&t.isDefine&&(s=!0,!t.prefix))return u=!1}),n&&o.length)return(e=makeError(\"timeout\",\"Load timeout for modules: \"+o,null,o)).contextName=l.contextName,O(e);u&&each(a,function(e){!function n(o,a,s){var e=o.map.id;o.error?o.emit(\"error\",o.error):(a[e]=!0,each(o.depMaps,function(e,t){var i=e.id,r=getOwn(p,i);!r||o.depMatched[t]||s[i]||(getOwn(a,i)?(o.defineDep(t,m[i]),o.check()):n(r,a,s))}),s[e]=!0)}(e,{},{})}),n&&!r||!s||!isBrowser&&!isWebWorker||d||(d=setTimeout(function(){d=0,R()},50)),i=!1}}function a(e){hasProp(m,e[0])||k(S(e[0],null,!0)).init(e[1],e[2])}function o(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function s(e){var t=e.currentTarget||e.srcElement;return o(t,l.onScriptLoad,\"load\",\"onreadystatechange\"),o(t,l.onScriptError,\"error\"),{node:t,id:t&&t.getAttribute(\"data-requiremodule\")}}function T(){var e;for(j();h.length;){if(null===(e=h.shift())[0])return O(makeError(\"mismatch\",\"Mismatched anonymous define() module: \"+e[e.length-1]));a(e)}l.defQueueMap={}}return c={require:function(e){return e.require?e.require:e.require=l.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?m[e.map.id]=e.exports:e.exports=m[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(g.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(e=function(e){this.events=getOwn(r,e.id)||{},this.map=e,this.shim=getOwn(g.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on(\"error\",i):this.events.error&&(i=bind(this,function(e){this.emit(\"error\",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,l.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();l.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;n[e]||(n[e]=!0,l.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var t,e,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit(\"error\",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=l.execCb(i,o,r,n)}catch(e){t=e}else n=l.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&((e=this.module)?n=e.exports:this.usingExports&&(n=this.exports)),t)return t.requireMap=this.map,t.requireModules=this.map.isDefine?[this.map.id]:null,t.requireType=this.map.isDefine?\"define\":\"require\",O(this.error=t)}else n=o;if(this.exports=n,this.map.isDefine&&!this.ignore&&(m[i]=n,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(l,this.map,a)}P(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit(\"defined\",this.exports),this.defineEmitComplete=!0)}}else hasProp(l.defQueueMap,i)||this.fetch()}},callPlugin:function(){var u=this.map,c=u.id,e=S(u.prefix);this.depMaps.push(e),M(e,\"defined\",bind(this,function(e){var o,t,i,r=getOwn(v,this.map.id),n=this.map.name,a=this.map.parentMap?this.map.parentMap.name:null,s=l.makeRequire(u.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(e.normalize&&(n=e.normalize(n,function(e){return q(e,a,!0)})||\"\"),M(t=S(u.prefix+\"!\"+n,this.map.parentMap,!0),\"defined\",bind(this,function(e){this.map.normalizedMap=t,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((i=getOwn(p,t.id))&&(this.depMaps.push(t),this.events.error&&i.on(\"error\",bind(this,function(e){this.emit(\"error\",e)})),i.enable()))):r?(this.map.url=l.nameToUrl(r),void this.load()):((o=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,(this.error=e).requireModules=[c],eachProp(p,function(e){0===e.map.id.indexOf(c+\"_unnormalized\")&&P(e.map.id)}),O(e)}),o.fromText=bind(this,function(e,t){var i=u.name,r=S(i),n=useInteractive;t&&(e=t),n&&(useInteractive=!1),k(r),hasProp(g.config,c)&&(g.config[i]=g.config[c]);try{req.exec(e)}catch(e){return O(makeError(\"fromtexteval\",\"fromText eval for \"+c+\" failed: \"+e,e,[c]))}n&&(useInteractive=!0),this.depMaps.push(r),l.completeLoad(i),s([i],o)}),void e.load(u.name,s,o,g))})),l.enable(e,this),this.pluginMaps[e.id]=e},enable:function(){(f[this.map.id]=this).enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if(\"string\"==typeof e){if(e=S(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(c,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,M(e,\"defined\",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?M(e,\"error\",bind(this,this.errback)):this.events.error&&M(e,\"error\",bind(this,function(e){this.emit(\"error\",e)}))}i=e.id,r=p[i],hasProp(c,i)||!r||r.enabled||l.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(p,e.id);t&&!t.enabled&&l.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),\"error\"===e&&delete this.events[e]}},(l={config:g,contextName:u,registry:p,defined:m,urlFetched:n,defQueue:h,defQueueMap:{},Module:e,makeModuleMap:S,nextTick:req.nextTick,onError:O,configure:function(e){if(e.baseUrl&&\"/\"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+=\"/\"),\"string\"==typeof e.urlArgs){var i=e.urlArgs;e.urlArgs=function(e,t){return(-1===t.indexOf(\"?\")?\"?\":\"&\")+i}}var r=g.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(g[t]||(g[t]={}),mixin(g[t],e,!0,!0)):g[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(v[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=l.makeShimExports(e)),r[t]=e}),g.shim=r),e.packages&&each(e.packages,function(e){var t;t=(e=\"string\"==typeof e?{name:e}:e).name,e.location&&(g.paths[t]=e.location),g.pkgs[t]=e.name+\"/\"+(e.main||\"main\").replace(currDirRegExp,\"\").replace(jsSuffixRegExp,\"\")}),eachProp(p,function(e,t){e.inited||e.map.unnormalized||(e.map=S(t,null,!0))}),(e.deps||e.callback)&&l.require(e.deps||[],e.callback)},makeShimExports:function(t){return function(){var e;return t.init&&(e=t.init.apply(global,arguments)),e||t.exports&&getGlobal(t.exports)}},makeRequire:function(o,a){function s(e,t,i){var r,n;return a.enableBuildCallback&&t&&isFunction(t)&&(t.__requireJsBuild=!0),\"string\"==typeof e?isFunction(t)?O(makeError(\"requireargs\",\"Invalid require call\"),i):o&&hasProp(c,e)?c[e](p[o.id]):req.get?req.get(l,e,o,s):(r=S(e,o,!1,!0).id,hasProp(m,r)?m[r]:O(makeError(\"notloaded\",'Module name \"'+r+'\" has not been loaded yet for context: '+u+(o?\"\":\". Use require([])\")))):(T(),l.nextTick(function(){T(),(n=k(S(null,o))).skipMap=a.skipMap,n.init(e,t,i,{enabled:!0}),R()}),s)}return a=a||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var t,i=e.lastIndexOf(\".\"),r=e.split(\"/\")[0];return-1!==i&&(!(\".\"===r||\"..\"===r)||1<i)&&(t=e.substring(i,e.length),e=e.substring(0,i)),l.nameToUrl(q(e,o&&o.id,!0),t,!0)},defined:function(e){return hasProp(m,S(e,o,!1,!0).id)},specified:function(e){return e=S(e,o,!1,!0).id,hasProp(m,e)||hasProp(p,e)}}),o||(s.undef=function(i){j();var e=S(i,o,!0),t=getOwn(p,i);t.undefed=!0,E(i),delete m[i],delete n[e.url],delete r[i],eachReverse(h,function(e,t){e[0]===i&&h.splice(t,1)}),delete l.defQueueMap[i],t&&(t.events.defined&&(r[i]=t.events),P(i))}),s},enable:function(e){getOwn(p,e.id)&&k(e).enable()},completeLoad:function(e){var t,i,r,n=getOwn(g.shim,e)||{},o=n.exports;for(j();h.length;){if(null===(i=h.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);a(i)}if(l.defQueueMap={},r=getOwn(p,e),!t&&!hasProp(m,e)&&r&&!r.inited){if(!(!g.enforceDefine||o&&getGlobal(o)))return w(e)?void 0:O(makeError(\"nodefine\",\"No define call for \"+e,null,[e]));a([e,n.deps||[],n.exportsFn])}R()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c=getOwn(g.pkgs,e);if(c&&(e=c),u=getOwn(v,e))return l.nameToUrl(u,t,i);if(req.jsExtRegExp.test(e))a=e+(t||\"\");else{for(r=g.paths,o=(n=e.split(\"/\")).length;0<o;o-=1)if(s=getOwn(r,n.slice(0,o).join(\"/\"))){isArray(s)&&(s=s[0]),n.splice(0,o,s);break}a=n.join(\"/\"),a=(\"/\"===(a+=t||(/^data\\:|^blob\\:|\\?/.test(a)||i?\"\":\".js\")).charAt(0)||a.match(/^[\\w\\+\\.\\-]+:/)?\"\":g.baseUrl)+a}return g.urlArgs&&!/^blob\\:/.test(a)?a+g.urlArgs(e,a):a},load:function(e,t){req.load(l,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if(\"load\"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=s(e);l.completeLoad(t.id)}},onScriptError:function(e){var i=s(e);if(!w(i.id)){var r=[];return eachProp(p,function(e,t){0!==t.indexOf(\"_@r\")&&each(e.depMaps,function(e){if(e.id===i.id)return r.push(t),!0})}),O(makeError(\"scripterror\",'Script error for \"'+i.id+(r.length?'\", needed by: '+r.join(\", \"):'\"'),e,[i.id]))}}}).require=l.makeRequire(),l}function getInteractiveScript(){return interactiveScript&&\"interactive\"===interactiveScript.readyState||eachReverse(scripts(),function(e){if(\"interactive\"===e.readyState)return interactiveScript=e}),interactiveScript}}(this,\"undefined\"==typeof setTimeout?void 0:setTimeout);\n\n//# sourceURL=webpack:///./require.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let Philepe = __webpack_require__(/*! ./../philepe */ \"./philepe.js\");\nlet mockData = function (n, config) {\n\n  let maxNum = 25;\n  let arr = new Array();\n\n  /**\n   * Returns a random integer between two values min and max\n   * @param {int} min \n   * @param {int} max\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random \n   */\n  let getRandomInt = function (min, max) {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min)) + min;\n  };\n\n  switch (config) {\n\n  case 'Linear':\n    for (let i = 0; i < n; i++) {\n      arr.push(getRandomInt(i, i + 10));\n    }\n    return arr;\n  default:\n    for (let i = 0; i < n; i++) {\n      arr.push(getRandomInt(0, maxNum));\n    }\n    return arr;\n  }\n};\n\nlet bulletChartTestData = [\n  {\n    min: 5,\n    max: 10,\n    val: 7\n  },\n  {\n    min: 12,\n    max: 15,\n    val: 6\n  },\n  {\n    min: 10,\n    max: 15,\n    val: 17\n  }\n];\n\nnew Philepe.BarChart(document.getElementById(\"chart1\"), mockData(25, \"Linear\"));\nnew Philepe.LineChart(document.getElementById(\"chart2\"), mockData(25, \"Linear\"));\nnew Philepe.ScatterPlot(document.getElementById(\"chart3\"), mockData(25, \"Linear\"));\nnew Philepe.BulletChart(document.getElementById(\"chart4\"), bulletChartTestData);\n\n\n// how to do combined charts?\n// new Philepe.GroupChart(document.getElementById(\"chart5\"), mockData(25, \"Linear\"))\nnew Philepe.BarChart(document.getElementById(\"chart5\"), mockData(25, \"Linear\"));\nnew Philepe.LineChart(document.getElementById(\"chart5\"), mockData(25, \"Linear\"));\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./require.js ./src/app.js ./philepe.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./require.js */\"./require.js\");\n__webpack_require__(/*! ./src/app.js */\"./src/app.js\");\nmodule.exports = __webpack_require__(/*! ./philepe.js */\"./philepe.js\");\n\n\n//# sourceURL=webpack:///multi_./require.js_./src/app.js_./philepe.js?");

/***/ })

/******/ });