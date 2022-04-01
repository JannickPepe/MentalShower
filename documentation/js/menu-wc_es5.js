'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ionic-app-base documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"' : 'data-target="#xs-components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"' : 'id="xs-components-links-module-AppModule-b594535da6e8adbe1c88350f9211d610f932ce00837d0c6d5249e6236a65a5a504529250601d4625199f3dbda10dcae1fdeddcd38a16af5cf5e3b4909333255b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ConditionInputPageModule.html\" data-type=\"entity-link\" >ConditionInputPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"' : 'data-target="#xs-components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"' : 'id="xs-components-links-module-ConditionInputPageModule-3e98b3c05d44fefe50aa01d8d948efdfb4169b9cee69c8d3c8d5978414b973768e467e5003db4d21776e2c4c60fa995580f84d8444bdc3397726eb263afaf9e9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ConditionButtonComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConditionButtonComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ConditionInputPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConditionInputPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ConditionInputPageRoutingModule.html\" data-type=\"entity-link\" >ConditionInputPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HowInputPageModule.html\" data-type=\"entity-link\" >HowInputPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"' : 'data-target="#xs-components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"' : 'id="xs-components-links-module-HowInputPageModule-736bfa08d98aec08f62c68623dc93697119ec44ef284b1f6459aebb51683efc558b8577456709a249e4a1849ef5acee05762bacbbc65f96c21e53b962d2286e6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HowInputPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HowInputPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HowInputPageRoutingModule.html\" data-type=\"entity-link\" >HowInputPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputCreatePageModule.html\" data-type=\"entity-link\" >InputCreatePageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"' : 'data-target="#xs-components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"' : 'id="xs-components-links-module-InputCreatePageModule-e86bdde240c540d7873da01f056a38f084c0ae08cc742ef261ff1239119efe4c7ca4fa1da6dd417da7ed396cc97ceee75c25b9022a638f2c2696d3e0ccf02892"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/InputCreatePage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InputCreatePage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputCreatePageRoutingModule.html\" data-type=\"entity-link\" >InputCreatePageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputDetailPageModule.html\" data-type=\"entity-link\" >InputDetailPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"' : 'data-target="#xs-components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"' : 'id="xs-components-links-module-InputDetailPageModule-e53d8b5c271cc5b4f0ca27e0dd2adfa47ef4ebfb2ceec1abcd431d46a2e28fc2512188e32b52ac5077d182e3d13186b6a2ac11584ed41f8cf43fd4af5f21fc33"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/InputDetailPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InputDetailPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputDetailPageRoutingModule.html\" data-type=\"entity-link\" >InputDetailPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputEditPageModule.html\" data-type=\"entity-link\" >InputEditPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"' : 'data-target="#xs-components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"' : 'id="xs-components-links-module-InputEditPageModule-f4b40955eff13a7acaf864a808466955063fade9472ed987206f97b9f60e5426f626cf983d509e146ad6919d2c58ff9cd069442ef9566a229195aea3d39bfc1b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/InputEditPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InputEditPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputEditPageRoutingModule.html\" data-type=\"entity-link\" >InputEditPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputListPageModule.html\" data-type=\"entity-link\" >InputListPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"' : 'data-target="#xs-components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"' : 'id="xs-components-links-module-InputListPageModule-4cc3dee3927c54b9843df6afe4c281040219dd8f11a1c0ebc0d6b18929cc80762280c2673357b458958fa201ea089593e9c545dbd572c373f14c007ee4ffa396"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/InputListPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >InputListPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/InputListPageRoutingModule.html\" data-type=\"entity-link\" >InputListPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OverviewPageModule.html\" data-type=\"entity-link\" >OverviewPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"' : 'data-target="#xs-components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"' : 'id="xs-components-links-module-OverviewPageModule-38c30e1ad517155a5efe6c4781f1d43d1a8d49650c1b1cb0fbb85f37bb14c8cbdcee323f6f0f73a2e5bc2ac0d3f26a221075c1e3a800f2b1cd75b4e4cad391c7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/OverviewPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OverviewPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OverviewPageRoutingModule.html\" data-type=\"entity-link\" >OverviewPageRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RoomInputPageModule.html\" data-type=\"entity-link\" >RoomInputPageModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"' : 'data-target="#xs-components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"' : 'id="xs-components-links-module-RoomInputPageModule-5b6c205788f7998647ec33bbe1f0b97e193db45f15731b0bba63b91bc33a9b8ca6572d5f799e38fd9faab97119169e97344d104622e3a437770bc0406782e4a4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/RoomInputPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RoomInputPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RoomInputPageRoutingModule.html\" data-type=\"entity-link\" >RoomInputPageRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Inputs.html\" data-type=\"entity-link\" >Inputs</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/ApiService.html\" data-type=\"entity-link\" >ApiService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));