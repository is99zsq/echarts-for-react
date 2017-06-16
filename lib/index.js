'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chart = function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Chart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chart.__proto__ || Object.getPrototypeOf(Chart)).call.apply(_ref, [this].concat(args))), _this), _this.getEchartsInstance = function () {
      return _this._ref.getEchartsInstance();
    }, _this.render = function () {
      return _react2['default'].createElement(_core2['default'], _extends({}, _this.props, { ref: function ref(e) {
          return _this._ref = e;
        }, echarts: _echarts2['default'] }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Chart;
}(_react2['default'].Component);

exports['default'] = Chart;