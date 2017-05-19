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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(21);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Gist.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (C) 2017 mobile.de GmbH
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 09 Feb 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/*
export default ({ gist }) => (
    <div>
        <h1>{gist.name || '[no description]'}</h1>
    </div>
);
*/

var Gist = function (_React$Component) {
	_inherits(Gist, _React$Component);

	function Gist(props, context) {
		_classCallCheck(this, Gist);

		var _this = _possibleConstructorReturn(this, (Gist.__proto__ || Object.getPrototypeOf(Gist)).call(this, props, context));

		_this.state = { players: [] } || props.players;

		return _this;
	}

	_createClass(Gist, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log("In componentWillMount");
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount(prevProps, prevState) {
			var _this2 = this;

			console.log('players props' + this.props.players);

			if (this.props.players == "") {
				var url = '/api/matches/' + this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1);

				console.log("In componentdidmount");

				fetch('/api/matches/' + this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)).then(function (response) {
					return response.json();
				}).then(function (result) {
					return _this2.setState({ players: result.players.players });
				});
			} else {
				this.setState({ players: this.props.players.players });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			var _this3 = this;

			if (prevProps.gist !== this.props.gist) {

				var url = '/api/matches/' + this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1);

				console.log("In componentDidUpdate");

				fetch('/api/matches/' + this.props.gist._links.self.href.substring(this.props.gist._links.self.href.lastIndexOf('/') + 1)).then(function (response) {
					return response.json();
				}).then(function (result) {
					return _this3.setState({ players: result.players.players });
				});
			}
		}
	}, {
		key: 'createPlayer',
		value: function createPlayer(player, index) {

			return _react2.default.createElement(
				'tr',
				{ key: index },
				_react2.default.createElement(
					'td',
					null,
					player.name
				),
				_react2.default.createElement(
					'td',
					null,
					player.position
				),
				_react2.default.createElement(
					'td',
					null,
					player.nationality
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'table',
					{ className: 'table' },
					_react2.default.createElement(
						'thead',
						null,
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'th',
								null,
								'Player Name'
							),
							_react2.default.createElement(
								'th',
								null,
								'Position'
							),
							_react2.default.createElement(
								'th',
								null,
								'Nationality'
							)
						)
					),
					_react2.default.createElement(
						'tbody',
						null,
						this.state.players ? this.state.players.map(this.createPlayer) : "Loading..."
					)
				)
			);
		}
	}]);

	return Gist;
}(_react2.default.Component);

exports.default = Gist;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
exports.default = function (renderMe, gists) {
    var players = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Universal React Router 4 Demo</title>\n        <style>\n            body {\n                font-family: Helvetica Neue, Arial, sans-serif;\n                margin: 0;\n            }\n            html { box-sizing: border-box; }\n            *, *:before, *:after { box-sizing: inherit; }\n        </style>\n    </head>\n    <body>\n        <div id="app">' + (0, _server.renderToString)(renderMe) + '</div>\n        ' + (gists ? '\n            <script>window.__gists__ = ' + JSON.stringify(gists) + ';</script>\n            <script>window.__players__ = ' + JSON.stringify(players) + ';</script>\n            <script src="/static/client.js"></script>\n        ' : '') + '\n    </body>\n</html>';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _server = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
exports.default = function (renderMe, players) {
    return '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <title>Universal React Router 4 Demo</title>\n        <style>\n            body {\n                font-family: Helvetica Neue, Arial, sans-serif;\n                margin: 0;\n            }\n            html { box-sizing: border-box; }\n            *, *:before, *:after { box-sizing: inherit; }\n        </style>\n    </head>\n    <body>\n        <div id="app">' + (0, _server.renderToString)(renderMe) + '</div>\n        ' + (players ? '\n            <script>window.__gists__ = ' + JSON.stringify(players) + ';</script>\n            <script src="/static/client.js"></script>\n        ' : '') + '\n    </body>\n</html>';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Sidebar = __webpack_require__(19);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _SidebarItem = __webpack_require__(20);

var _SidebarItem2 = _interopRequireDefault(_SidebarItem);

var _Main = __webpack_require__(18);

var _Main2 = _interopRequireDefault(_Main);

var _Gist = __webpack_require__(2);

var _Gist2 = _interopRequireDefault(_Gist);

var _Home = __webpack_require__(17);

var _Home2 = _interopRequireDefault(_Home);

var _reactRouterDom = __webpack_require__(22);

var _reactBootstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * App.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (C) 2017 mobile.de GmbH
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 09 Feb 2017
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var style = {
    display: 'flex',
    alignItems: 'stretch'
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement(
                    _Sidebar2.default,
                    null,
                    (console.log(this.props), this.props.gists ? this.props.gists.teams.map(function (gist) {
                        return _react2.default.createElement(
                            _SidebarItem2.default,
                            { key: gist._links.self.href.substring(gist._links.self.href.lastIndexOf('/') + 1) },
                            _react2.default.createElement(_reactBootstrap.Image, { src: gist.crestUrl, thumbnail: true, circle: true, width: '30' }),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/g/' + gist._links.self.href.substring(gist._links.self.href.lastIndexOf('/') + 1) },
                                gist.name || '[no description]'
                            )
                        );
                    }) : _react2.default.createElement(
                        'p',
                        null,
                        'Loading\u2026'
                    ))
                ),
                _react2.default.createElement(
                    _Main2.default,
                    null,
                    _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Home2.default }),
                    this.props.gists && _react2.default.createElement(_reactRouterDom.Route, { path: '/g/:gistId', render: function render(_ref) {
                            var match = _ref.match;
                            return _react2.default.createElement(_Gist2.default, { players: _this2.props.players, gist: _this2.props.gists.teams.find(function (g) {
                                    return g._links.self.href.substring(g._links.self.href.lastIndexOf('/') + 1) === match.params.gistId;
                                }) });
                        } })
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    padding: '16px'
}; /**
    * Error.js
    *
    * (C) 2017 mobile.de GmbH
    *
    * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
    * @since 10 Feb 2017
    */

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
            'h1',
            null,
            'Sorry!'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Something went horribly wrong\u2026'
        )
    );
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    padding: '16px'
}; /**
    * NoMatch.js
    *
    * (C) 2017 mobile.de GmbH
    *
    * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
    * @since 10 Feb 2017
    */

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
            'h1',
            null,
            'Sorry!'
        ),
        _react2.default.createElement(
            'p',
            null,
            'The page you requested was not found\u2026'
        )
    );
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cool-ascii-faces");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("url-pattern");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

var _Gist = __webpack_require__(2);

var _Gist2 = _interopRequireDefault(_Gist);

var _NoMatch = __webpack_require__(8);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _Error = __webpack_require__(7);

var _Error2 = _interopRequireDefault(_Error);

var _reactRouter = __webpack_require__(12);

var _sourceMapSupport = __webpack_require__(14);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _render = __webpack_require__(4);

var _render2 = _interopRequireDefault(_render);

var _renderPlayers = __webpack_require__(5);

var _renderPlayers2 = _interopRequireDefault(_renderPlayers);

var _nodeFetch = __webpack_require__(11);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _server = __webpack_require__(1);

var _coolAsciiFaces = __webpack_require__(9);

var _coolAsciiFaces2 = _interopRequireDefault(_coolAsciiFaces);

var _reactRouterConfig = __webpack_require__(13);

var _urlPattern = __webpack_require__(15);

var _urlPattern2 = _interopRequireDefault(_urlPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = ['/', '/g/:gistId']; /**
                                   * index.js
                                   *
                                   * (C) 2017 mobile.de GmbH
                                   *
                                   * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
                                   * @since 09 Feb 2017
                                   */
/* eslint-disable no-console */

_sourceMapSupport2.default.install();

var app = (0, _express2.default)();
app.use('/static', _express2.default.static('./dist'));

app.get('/cool', function (request, response) {
    response.send((0, _coolAsciiFaces2.default)());
});

app.get('/api/matches/:id', function (req, res) {

    var id = req.params.id;

    var myheaders = {
        "X-Auth-Token": "e27108c41b2e4149a6de11e20ca7c050"
    };

    (0, _nodeFetch2.default)('http://api.football-data.org/v1/teams/' + id + '/players', { headers: myheaders }).then(function (r) {
        return r.json();
    }).then(function (gists) {

        app.set('apiPlayerData', gists);
        res.json({ players: gists });
    }).catch(function (err) {
        console.error(err);
    });
});

app.get('*', function (req, res) {
    var match = routes.reduce(function (acc, route) {
        return (0, _reactRouter.matchPath)(req.url, route, { exact: true }) || acc;
    }, null);
    if (!match) {
        res.status(404).send((0, _render2.default)(_react2.default.createElement(_NoMatch2.default, null)));
        return;
    }

    var myheaders = {
        "X-Auth-Token": "e27108c41b2e4149a6de11e20ca7c050"
    };

    var pattern = new _urlPattern2.default('/g(/:gistId)');

    if (pattern.match(req.url)) {
        var gistApiData = req.app.get('apiData');

        var gistApiPlayerData = req.app.get('apiPlayerData');

        return res.status(200).send((0, _render2.default)(_react2.default.createElement(
            _reactRouter.StaticRouter,
            { context: {}, location: req.url },
            _react2.default.createElement(_App2.default, { gists: gistApiData, players: gistApiPlayerData })
        ), gistApiData, gistApiPlayerData));
    }

    (0, _nodeFetch2.default)('http://api.football-data.org/v1/competitions/398/teams', { headers: myheaders }).then(function (r) {
        return r.json();
    }).then(function (gists) {

        app.set('apiData', gists);

        return res.status(200).send((0, _render2.default)(_react2.default.createElement(
            _reactRouter.StaticRouter,
            { context: {}, location: req.url },
            _react2.default.createElement(_App2.default, { gists: gists })
        ), gists));
    }).catch(function (err) {
        console.error(err);
        res.status(500).send((0, _render2.default)(_react2.default.createElement(_Error2.default, null)));
    });
});

app.listen(process.env.PORT || 3000, function () {
    return console.log('Demo app listening on port 3000');
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Home.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
var style = {
  textAlign: "center"
};

var Home = function Home() {

  return _react2.default.createElement(
    'h1',
    { style: style },
    _react2.default.createElement('img', { src: 'http://cdn1.thecomeback.com/wp-content/uploads/sites/94/2013/08/epl.jpg' })
  );
};

exports.default = Home;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  padding: '20px',
  flex: '1'
}; /**
    * Main.js
    *
    * (C) 2017 mobile.de GmbH
    *
    * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
    * @since 09 Feb 2017
    */


var Main = function Main(_ref) {
  var children = _ref.children;


  return _react2.default.createElement(
    'main',
    { style: style },
    children
  );
};

exports.default = Main;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  padding: '16px',
  backgroundColor: '#eee',
  width: '300px',
  height: '100vh',
  overflow: 'scroll'
}; /**
    * Sidebar.js
    *
    * (C) 2017 mobile.de GmbH
    *
    * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
    * @since 09 Feb 2017
    */

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'aside',
    { style: style },
    children
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {}; /**
                 * SidebarItem.js
                 *
                 * (C) 2017 mobile.de GmbH
                 *
                 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
                 * @since 09 Feb 2017
                 */

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'p',
    { style: style },
    children
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map