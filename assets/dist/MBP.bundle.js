/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mbp.js":
/*!********************!*\
  !*** ./src/mbp.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mbp_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mbp.scss */ \"./src/mbp.scss\");\n/* harmony import */ var _assets_json_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/json/data.json */ \"./assets/json/data.json\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar MBP = /*#__PURE__*/function () {\n  function MBP() {\n    _classCallCheck(this, MBP);\n    this._lang = 'fr' /* (navigator.language.substring(0, 2) === 'fr') ? 'fr' : 'en'*/;\n    this._selectedPage = 'home';\n    this._selectedSubpage = 'music';\n    this._scrollBar = null;\n    this._version = '0.1.3';\n    this.evts = new window.CustomEvents();\n    this._updateNavLang();\n    this._displayConsoleWelcome();\n    this._hideFlashingLogo().then(this._buildNav.bind(this)).then(this._buildHomePage.bind(this));\n  }\n  _createClass(MBP, [{\n    key: \"_updateNavLang\",\n    value: function _updateNavLang() {\n      if (this._lang !== 'fr') {\n        document.getElementById('link-home').innerHTML = 'Home';\n        document.getElementById('link-events').innerHTML = 'Events';\n      }\n    }\n  }, {\n    key: \"_displayConsoleWelcome\",\n    value: function _displayConsoleWelcome() {\n      console.log('%cHello, you hacky nerd!', 'font-size:16pt');\n      console.log(\"Do you have some piece of code you want to promote or do you need a hand with it ?\\nReach %ccontact@messe-basse-production.com%cso we can find a way to help you!\", 'text-decoration:underline;color:blue');\n    }\n  }, {\n    key: \"_hideFlashingLogo\",\n    value: function _hideFlashingLogo() {\n      return new Promise(function (resolve) {\n        // Set a timeout on logo hiding to let the css text animation to perform (zoom in/out)\n        setTimeout(function () {\n          document.body.removeChild(document.getElementById('flashing-text-logo'));\n          resolve();\n        }, 6000);\n      });\n    }\n  }, {\n    key: \"_buildNav\",\n    value: function _buildNav() {\n      var _this = this;\n      return new Promise(function (resolve) {\n        // Launch navigation items animation (descending from top screen)\n        document.getElementById('navigation').style.opacity = 1;\n        setTimeout(function () {\n          document.getElementById('link-home').style.animation = 'drop-nav-link 1.8s forwards';\n          document.getElementById('link-home').style.opacity = 1;\n        }, 500);\n        setTimeout(function () {\n          document.getElementById('link-creation').style.animation = 'drop-nav-link 1.7s forwards';\n          document.getElementById('link-creation').style.opacity = 1;\n        }, 750);\n        setTimeout(function () {\n          document.getElementById('link-events').style.animation = 'drop-nav-link 1.6s forwards';\n          document.getElementById('link-events').style.opacity = 1;\n        }, 1000);\n        setTimeout(function () {\n          document.getElementById('link-merch').style.animation = 'drop-nav-link 1.6s forwards';\n          document.getElementById('link-merch').style.opacity = 1;\n        }, 1250);\n        setTimeout(function () {\n          document.getElementById('link-contact').style.animation = 'drop-nav-link 1.5s forwards';\n          document.getElementById('link-contact').style.opacity = 1;\n        }, 1500);\n        setTimeout(function () {\n          return document.getElementById('socials').style.opacity = 1;\n        }, 2250);\n        // Subscribe to click events on navigation bar\n        document.getElementById('link-home').addEventListener('click', _this._buildHomePage.bind(_this));\n        document.getElementById('link-creation').addEventListener('click', _this._buildCreationPage.bind(_this));\n        document.getElementById('link-events').addEventListener('click', _this._buildEventsPage.bind(_this));\n        document.getElementById('link-merch').addEventListener('click', _this._buildMerchPage.bind(_this));\n        document.getElementById('link-contact').addEventListener('click', _this._buildContactPage.bind(_this));\n        // Resolve (fetch homepage template) after animation is performed\n        setTimeout(resolve, 1500);\n      });\n    }\n\n    /* Pages */\n  }, {\n    key: \"_buildPage\",\n    value: function _buildPage(name) {\n      var _this2 = this;\n      return new Promise(function (resolve) {\n        _this2._fetchPage(\"assets/html/\".concat(_this2._lang, \"/\").concat(name, \".html\"), name).then(resolve);\n      });\n    }\n  }, {\n    key: \"_buildHomePage\",\n    value: function _buildHomePage() {\n      return this._buildPage('home');\n    }\n  }, {\n    key: \"_buildCreationPage\",\n    value: function _buildCreationPage() {\n      var _this3 = this;\n      return new Promise(function (resolve) {\n        _this3._buildPage('creation').then(function () {\n          _this3.evts.addEvent('click', document.getElementById('music-subpage'), _this3._buildMusicSubpage, _this3);\n          _this3.evts.addEvent('click', document.getElementById('video-subpage'), _this3._buildVideoSubpage, _this3);\n          _this3.evts.addEvent('click', document.getElementById('photo-subpage'), _this3._buildPhotoSubpage, _this3);\n          //this.evts.addEvent('click', document.getElementById('book-subpage'), this._buildBookSubpage, this);\n          _this3.evts.addEvent('click', document.getElementById('software-subpage'), _this3._buildSoftwareSubpage, _this3);\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_buildEventsPage\",\n    value: function _buildEventsPage() {\n      var _this4 = this;\n      return new Promise(function (resolve) {\n        _this4._buildPage('events').then(function () {\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_buildMerchPage\",\n    value: function _buildMerchPage() {\n      var _this5 = this;\n      var order = function order(e) {\n        if (e.target.id === 'order-porwerplant') {\n          if (_this5._lang === 'fr') {\n            window.open(\"mailto:contact@messe-basse-production.com?subject=Commander un T-Shirt \".concat(e.target.dataset.title, \"&body=Je souhaite commander un T-Shirt taille M \\\"Power Plant par Guillaume Crantz\\\". Nous allons revenir vers vous au plus vite pour les formalit\\xE9s d'envoi. \\xC0 fort vite!\"), '');\n          } else {\n            window.open(\"mailto:contact@messe-basse-production.com?subject=Order a \".concat(e.target.dataset.title, \" T-Shirt&body=I want to order a \\\"Power Plant by Guillauime Crantz\\\" T-Shirt, M size. We'll get in touch with you as soon as possible for postal formalities. Bye bye handsome!\"), '');\n          }\n        } else {\n          if (_this5._lang === 'fr') {\n            window.open(\"mailto:contact@messe-basse-production.com?subject=Commander un album de \".concat(e.target.dataset.title, \"&body=Dites-nous si vous voulez la version standard ou la version sign\\xE9e. Nous allons revenir vers vous au plus vite pour les formalit\\xE9s d'envoi. \\xC0 fort vite!\"), '');\n          } else {\n            window.open(\"mailto:contact@messe-basse-production.com?subject=Order an album of \".concat(e.target.dataset.title, \"&body=Please tell us if you want to take the regular or the signed release. We'll get in touch with you as soon as possible for postal formalities. Bye bye handsome!\"), '');\n          }\n        }\n      };\n      return new Promise(function (resolve) {\n        _this5._buildPage('merch').then(function () {\n          _this5.evts.addEvent('click', document.getElementById('order-powerplant'), order.bind(_this5), _this5);\n          _this5.evts.addEvent('click', document.getElementById('order-dystopie'), order.bind(_this5), _this5);\n          _this5.evts.addEvent('click', document.getElementById('order-etica'), order.bind(_this5), _this5);\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_buildContactPage\",\n    value: function _buildContactPage() {\n      var _this6 = this;\n      return new Promise(function (resolve) {\n        _this6._buildPage('contact').then(function () {\n          _this6.evts.addEvent('click', document.getElementById('credit-modal'), _this6._buildCreditModal, _this6);\n          resolve();\n        });\n      });\n    }\n\n    /* Subpages */\n  }, {\n    key: \"_buildSubpage\",\n    value: function _buildSubpage(e, name) {\n      var _this7 = this;\n      for (var i = 0; i < document.getElementById('subpage-nav').children.length; ++i) {\n        document.getElementById('subpage-nav').children[i].classList.remove('selected');\n      }\n      e.target.classList.add('selected');\n      this._selectedSubpage = name;\n      return new Promise(function (resolve) {\n        _this7._fetchPage(\"assets/html/\".concat(_this7._lang, \"/subpage/\").concat(name, \".html\"), 'subpage', 'subpage').then(resolve);\n      });\n    }\n  }, {\n    key: \"_buildMusicSubpage\",\n    value: function _buildMusicSubpage(e) {\n      this._buildSubpage(e, 'music').then(function () {\n        var bands = document.getElementsByClassName('band-image');\n        var _loop = function _loop(i) {\n          bands[i].addEventListener('click', function () {\n            window.open(bands[i].dataset.url, '_blank', 'noopener, noreferrer');\n          });\n        };\n        for (var i = 0; i < bands.length; ++i) {\n          _loop(i);\n        }\n      });\n    }\n  }, {\n    key: \"_buildVideoSubpage\",\n    value: function _buildVideoSubpage(e) {\n      return this._buildSubpage(e, 'video');\n    }\n  }, {\n    key: \"_buildPhotoSubpage\",\n    value: function _buildPhotoSubpage(e) {\n      var _this8 = this;\n      this._buildSubpage(e, 'photo').then(function () {\n        // Update expo thumbnail on mouse position (converted in width %)\n        var _updateExpoThumb = function _updateExpoThumb(e) {\n          var bRect = this.getBoundingClientRect();\n          var percentage = (e.clientX - bRect.x) / bRect.width * 100;\n          for (var i = 0; i < this.children.length; ++i) {\n            this.children[i].style.opacity = 0;\n          }\n          this.children[this.children.length - Math.floor(percentage / 20) - 1].style.opacity = 1;\n        };\n        // Expo click listeners\n        var imgWrapper1 = document.getElementById('expo-1-img-wrapper');\n        imgWrapper1.addEventListener('mousemove', _updateExpoThumb);\n        document.getElementById('expo-1').addEventListener('click', _this8._buildExpoModal.bind(_this8, 1));\n        //const imgWrapper2 = document.getElementById('expo-2-img-wrapper');\n        //imgWrapper2.addEventListener('mousemove', _updateExpoThumb);\n        //document.getElementById('expo-2').addEventListener('click', this._buildExpoModal.bind(this, 2));\n        // Click listener on classical photos\n        var imgs = document.getElementById('photo-grid').getElementsByTagName('IMG');\n        var _loop2 = function _loop2(i) {\n          imgs[i].addEventListener('click', function () {\n            // Send image name.extension and nextSibling is image label\n            _this8._buildPhotoModal(imgs[i].dataset.url, imgs[i].nextElementSibling.innerHTML);\n          });\n        };\n        for (var i = 0; i < imgs.length; ++i) {\n          _loop2(i);\n        }\n      });\n    }\n  }, {\n    key: \"_buildBookSubpage\",\n    value: function _buildBookSubpage(e) {\n      return this._buildSubpage(e, 'book');\n    }\n  }, {\n    key: \"_buildSoftwareSubpage\",\n    value: function _buildSoftwareSubpage(e) {\n      this._buildSubpage(e, 'software').then(function () {\n        // MBP websites\n        var mbpSites = document.getElementById('mbp-website-grid').children;\n        var _loop3 = function _loop3(i) {\n          mbpSites[i].addEventListener('click', function () {\n            window.open(mbpSites[i].dataset.url, '_blank', 'noopener, noreferrer');\n          });\n        };\n        for (var i = 0; i < mbpSites.length; ++i) {\n          _loop3(i);\n        }\n        // Artists websites\n        var bandSites = document.getElementById('band-website-grid').children;\n        var _loop4 = function _loop4(_i) {\n          bandSites[_i].addEventListener('click', function () {\n            window.open(bandSites[_i].dataset.url, '_blank', 'noopener, noreferrer');\n          });\n        };\n        for (var _i = 0; _i < bandSites.length; ++_i) {\n          _loop4(_i);\n        }\n      });\n    }\n\n    /* Modals */\n  }, {\n    key: \"_buildExpoModal\",\n    value: function _buildExpoModal(expoNumber) {\n      var _this9 = this;\n      this._fetchModal(\"assets/html/\".concat(this._lang, \"/modal/expo.html\")).then(function () {\n        var expoData = _assets_json_data_json__WEBPACK_IMPORTED_MODULE_1__.expo[expoNumber - 1];\n        var selector = document.getElementById('photo-selector');\n        var frameWrapper = document.getElementById('frame');\n        var selectedIndex = 0;\n        var size = 'a3';\n        var type = 'paper';\n        var frame = 'no';\n        var price = 0;\n        document.getElementById('expo-title').innerHTML = expoData.title;\n        document.getElementById('expo-author').innerHTML = expoData.author;\n        var _updatePrice = function _updatePrice() {\n          price = parseInt(_assets_json_data_json__WEBPACK_IMPORTED_MODULE_1__.prices.photo[type][size]) + parseInt(_assets_json_data_json__WEBPACK_IMPORTED_MODULE_1__.prices.photo.frame[size][frame]) + parseInt(_assets_json_data_json__WEBPACK_IMPORTED_MODULE_1__.prices.photo.postal[size]);\n          document.getElementById('order-price').innerHTML = \"\".concat(price, \"\\u20AC\");\n        };\n        var _updateSelectedPhoto = function _updateSelectedPhoto() {\n          for (var i = 0; i < selector.children.length; ++i) {\n            selector.children[i].classList.remove('selected');\n          }\n          selectedIndex = parseInt(this.dataset.number);\n          document.getElementById('selected-photo').src = \"assets/img/photo/expo/\".concat(expoNumber, \"/\").concat(selectedIndex + 1, \".webp\");\n          document.getElementById('photo-title').innerHTML = expoData.photos[selectedIndex].title;\n          document.getElementById('photo-date').innerHTML = expoData.photos[selectedIndex].date;\n          this.classList.add('selected');\n        };\n        var _updateSize = function _updateSize(clicked) {\n          document.getElementById('frame-size').children[1].classList.remove('selected');\n          document.getElementById('frame-size').children[2].classList.remove('selected');\n          document.getElementById('frame-size').children[clicked].classList.add('selected');\n          size = document.getElementById('frame-size').children[clicked].dataset.size;\n          _updatePrice();\n        };\n        var _updateType = function _updateType(clicked) {\n          document.getElementById('print-type').children[1].classList.remove('selected');\n          document.getElementById('print-type').children[2].classList.remove('selected');\n          document.getElementById('print-type').children[clicked].classList.add('selected');\n          type = document.getElementById('print-type').children[clicked].dataset.type;\n          _updatePrice();\n        };\n        var _updateFrame = function _updateFrame(clicked) {\n          for (var i = 0; i < frameWrapper.children.length; ++i) {\n            frameWrapper.children[i].classList.remove('selected');\n          }\n          frameWrapper.children[clicked].classList.add('selected');\n          frame = frameWrapper.children[clicked].dataset.frame;\n          _updatePrice();\n        };\n        // Listener on photo select\n        for (var i = 0; i < selector.children.length; ++i) {\n          selector.children[i].innerHTML = expoData.photos[i].title;\n          selector.children[i].addEventListener('click', _updateSelectedPhoto);\n        }\n        // Init editor with first expo photo\n        document.getElementById('selected-photo').src = \"assets/img/photo/expo/\".concat(expoNumber, \"/1.webp\");\n        document.getElementById('photo-title').innerHTML = expoData.photos[0].title;\n        document.getElementById('photo-date').innerHTML = expoData.photos[0].date;\n        // Size callback\n        document.getElementById('frame-size').children[1].addEventListener('click', _updateSize.bind(_this9, 1));\n        document.getElementById('frame-size').children[2].addEventListener('click', _updateSize.bind(_this9, 2));\n        // Type callback\n        document.getElementById('print-type').children[1].addEventListener('click', _updateType.bind(_this9, 1));\n        document.getElementById('print-type').children[2].addEventListener('click', _updateType.bind(_this9, 2));\n        // Frame callback\n        for (var _i2 = 1; _i2 < frameWrapper.children.length; ++_i2) {\n          frameWrapper.children[_i2].addEventListener('click', _updateFrame.bind(_this9, _i2));\n        }\n        // Margin input callback\n        document.getElementById('print-margin').addEventListener('change', function (e) {\n          if (e.target.checked) {\n            document.getElementById('selected-photo').style.padding = \"\".concat(expoData.photos[selectedIndex].margin / 3, \"%\");\n            document.getElementById('selected-photo').style.height = \"100%\";\n          } else {\n            document.getElementById('selected-photo').style.padding = 0;\n            document.getElementById('selected-photo').style.height = '100%';\n          }\n        });\n        document.getElementById('place-order').addEventListener('click', function (e) {\n          if (_this9._lang === 'fr') {\n            window.open(\"mailto:contact@messe-basse-production.com?subject=Commander un tirage de \".concat(expoData.author, \"&body=Bonjour, je souhaite commander un tirage de \").concat(expoData.author, \", extrait de son exposition \").concat(expoData.title, \". La photo, \").concat(expoData.photos[selectedIndex].title, \" (\").concat(expoData.photos[selectedIndex].date, \") est \\xE0 imprimer en \").concat(size, \", sur support \").concat(type, \". Le choix du cadre est \").concat(frame, \", et \").concat(document.getElementById('print-margin').checked ? 'avec' : 'sans', \" marges.\\nCe tirage reviens \\xE0 \").concat(price, \"\\u20AC, frais postaux inclus pour la France. Nos \\xE9quipes prennent en compte votre demande, et reviennent au plus vite vers vous. Merci de votre confiance!\"), '_self');\n          } else {\n            window.open(\"mailto:contact@messe-basse-production.com?subject=Order an album of \".concat(e.target.dataset.title, \"&body=<i>Please tell us if you want to take the regular or the signed release. We'll get in touch with you as soon as possible for postal formalities. Bye bye handsome!</i>\"), '_blank');\n          }\n        });\n        // Update prices\n        _updatePrice();\n      });\n    }\n  }, {\n    key: \"_buildPhotoModal\",\n    value: function _buildPhotoModal(url, label) {\n      var _this10 = this;\n      return new Promise(function (resolve) {\n        _this10._fetchModal(\"assets/html/\".concat(_this10._lang, \"/modal/photo.html\")).then(function () {\n          var img = document.getElementById('modal').getElementsByTagName('IMG')[0];\n          img.src = \"/assets/img/photo/\".concat(url);\n          var text = document.getElementById('modal').getElementsByTagName('P')[1]; // First P is close modal\n          text.innerHTML = label;\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_buildCreditModal\",\n    value: function _buildCreditModal() {\n      var _this11 = this;\n      return new Promise(function (resolve) {\n        _this11._fetchModal(\"assets/html/\".concat(_this11._lang, \"/modal/credit.html\")).then(function () {\n          resolve();\n        });\n      });\n    }\n\n    /* Utils */\n  }, {\n    key: \"_fetchPage\",\n    value: function _fetchPage(url, className, target) {\n      var _this12 = this;\n      return new Promise(function (resolve, reject) {\n        if (!target) {\n          target = 'scene';\n          // Delete events and update nav bar only if not a subpage is fetched \n          _this12.evts.removeAllEvents();\n          document.getElementById(\"link-\".concat(_this12._selectedPage)).classList.remove('selected');\n          _this12._selectedPage = className;\n          document.getElementById(\"link-\".concat(_this12._selectedPage)).classList.add('selected');\n        }\n        document.getElementById(target).style.opacity = 0;\n        setTimeout(function () {\n          fetch(url).then(function (data) {\n            data.text().then(function (htmlString) {\n              document.getElementById(target).classList.remove('selected');\n              document.getElementById(target).className = className;\n              document.getElementById(target).innerHTML = '';\n              document.getElementById(target).appendChild(document.createRange().createContextualFragment(htmlString));\n              document.getElementById(target).style.opacity = 1;\n              // Save scene scrollbar only if not a subpage being built\n              if (className !== 'subpage') {\n                _this12._scrollBar = new window.ScrollBar({\n                  target: document.getElementById(target),\n                  minSize: 90\n                });\n              }\n              setTimeout(resolve, 600);\n            })[\"catch\"](reject);\n          })[\"catch\"](reject);\n        }, 600);\n      });\n    }\n  }, {\n    key: \"_fetchModal\",\n    value: function _fetchModal(url) {\n      var _this13 = this;\n      return new Promise(function (resolve, reject) {\n        var evtIds = [];\n        // Close modal inner method\n        var closeModal = function closeModal(e) {\n          if (['overlay', 'close-modal'].indexOf(e.target.id) === -1) {\n            return;\n          }\n          document.getElementById('overlay').style.opacity = 0;\n          setTimeout(function () {\n            document.getElementById('overlay').style.display = 'none';\n            document.getElementById('overlay').innerHTML = '';\n            for (var i = 0; i < evtIds.length; ++i) {\n              _this13.evts.removeEvent(evtIds[i]);\n            }\n          }, 600);\n        };\n        // Display modal when needed\n        var displayModal = function displayModal() {\n          document.getElementById('modal').style.opacity = 1;\n          evtIds.push(_this13.evts.addEvent('click', document.getElementById('overlay'), closeModal, _this13));\n          evtIds.push(_this13.evts.addEvent('click', document.getElementById('close-modal'), closeModal, _this13));\n        };\n        document.getElementById('overlay').style.display = 'flex';\n        setTimeout(function () {\n          document.getElementById('overlay').style.opacity = 1;\n          setTimeout(function () {\n            fetch(url).then(function (data) {\n              data.text().then(function (htmlString) {\n                document.getElementById('overlay').appendChild(document.createRange().createContextualFragment(htmlString));\n                resolve();\n                setTimeout(displayModal.bind(_this13), 50);\n              })[\"catch\"](reject);\n            })[\"catch\"](reject);\n          }, 50);\n        }, 50);\n      });\n    }\n  }]);\n  return MBP;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MBP);\n\n//# sourceURL=webpack://MBP/./src/mbp.js?");

/***/ }),

/***/ "./src/mbp.scss":
/*!**********************!*\
  !*** ./src/mbp.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://MBP/./src/mbp.scss?");

/***/ }),

/***/ "./assets/json/data.json":
/*!*******************************!*\
  !*** ./assets/json/data.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"expo\":[{\"title\":\"Amérique du Sud\",\"author\":\"Guillaume Crantz\",\"photos\":[{\"title\":\"Sur le Fil – Pisac, Pérou\",\"date\":\"21 Mai 2019\",\"margin\":\"20\"},{\"title\":\"Tentation praline – Cordoba, Argentine\",\"date\":\"8 Avril 2019\",\"margin\":\"20\"},{\"title\":\"Ligne de front – Concón, Chili\",\"date\":\"13 Avril 2019\",\"margin\":\"20\"},{\"title\":\"Market Exchange – Valparaíso, Chili\",\"date\":\"18 Juillet 2019\",\"margin\":\"20\"},{\"title\":\"Plaisir glacé – Panama City, Panama\",\"date\":\"8 Février 2019\",\"margin\":\"20\"}]},{\"title\":\"94 Roaming\",\"author\":\"Raphaël Beekmann\",\"photos\":[{\"title\":\"Photo 1\",\"date\":\"20 Février 2020\",\"margin\":\"20\"},{\"title\":\"Photo 2\",\"date\":\"20 Février 2020\",\"margin\":\"20\"},{\"title\":\"Photo 3\",\"date\":\"20 Février 2020\",\"margin\":\"20\"},{\"title\":\"Photo 4\",\"date\":\"20 Février 2020\",\"margin\":\"20\"},{\"title\":\"Photo 5\",\"date\":\"20 Février 2020\",\"margin\":\"20\"}]}],\"prices\":{\"photo\":{\"paper\":{\"a4\":\"5\",\"a3\":\"10\"},\"dibond\":{\"a4\":\"30\",\"a3\":\"50\"},\"frame\":{\"a4\":{\"no\":\"0\",\"black\":\"11\",\"white\":\"11\",\"wood\":\"14\"},\"a3\":{\"no\":\"0\",\"black\":\"16\",\"white\":\"16\",\"wood\":\"18\"}},\"postal\":{\"a4\":\"10\",\"a3\":\"15\"}}}}');\n\n//# sourceURL=webpack://MBP/./assets/json/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/mbp.js");
/******/ 	window.MBP = __webpack_exports__["default"];
/******/ 	
/******/ })()
;