"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

      this.gradientElements = this.gradients.map(function (gradient, index) {
        var element = document.createElement('div');
        Object.assign(element.style, {
          position: 'absolute',
          height: '100%',
          width: '100%',
          opacity: index === 0 ? 1 : 0,
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
          if (target.style.position !== 'absolute') {
            target.style.position = 'relative';
          }

          _this2.gradientElements.forEach(function (element) {
            target.appendChild(element);
          });
        });
      } else {
        // One target
        var target = this.target;

        if (target.style.position !== 'absolute') {
          target.style.position = 'relative';
        }

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
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this3.gradientElements.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                index = _step$value[0],
                element = _step$value[1];

            if (element.style.opacity === '1') {
              element.style.opacity = '0';
              var nextElement = _this3.gradientElements[++index % _this3.gradientElements.length];
              nextElement.style.opacity = '1';
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
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