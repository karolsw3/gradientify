"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gradientify =
/*#__PURE__*/
function () {
  // In miliseconds
  // setInterval type
  function Gradientify(target, gradients, fadeInterval) {
    _classCallCheck(this, Gradientify);

    this.target = target;
    this.gradients = gradients;
    this.fadeInterval = fadeInterval;
    this.createGradientElements();
    this.appendGradients();
    this.startAnimation();
  }

  _createClass(Gradientify, [{
    key: "createGradientElements",
    value: function createGradientElements() {
      var _this = this;

      this.gradientElements = this.gradients.map(function (gradient) {
        var element = document.createElement('div');
        Object.assign(element.style, {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transitionTimingFunction: 'linear',
          backgroundImage: gradient,
          transitionDuration: "".concat(_this.fadeInterval / 1000, "s")
        });
        return element;
      });
    }
  }, {
    key: "appendGradients",
    value: function appendGradients() {
      var _this2 = this;

      if (this.target instanceof Array) {
        // Multiple targets
        this.target.forEach(function (target) {
          _this2.gradientElements.forEach(function (element) {
            target.appendChild(element);
          });
        });
      } else {
        // One target
        var target = this.target;
        this.gradientElements.forEach(function (element) {
          target.appendChild(element);
        });
      }
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this3 = this;

      this.interval = setInterval(function () {
        _this3.gradientElements.forEach(function (element, index) {
          if (element.style.opacity === '1') {
            element.style.opacity = '0';
            var nextElement = _this3.gradientElements[++index % _this3.gradientElements.length];
            nextElement.style.opacity = '1';
          }
        });
      }, this.fadeInterval);
    }
  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      clearInterval(this.interval);
    }
  }]);

  return Gradientify;
}();

exports["default"] = Gradientify;