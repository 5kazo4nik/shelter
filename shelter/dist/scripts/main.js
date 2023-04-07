/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/carousel.js":
/*!*****************************!*\
  !*** ./scripts/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCarousel": () => (/* binding */ createCarousel)
/* harmony export */ });
/* harmony import */ var _cardModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardModal */ "./scripts/cardModal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Класс создающий абстракцию карусели.
var Carousel = /*#__PURE__*/function () {
  function Carousel() {
    _classCallCheck(this, Carousel);
    _defineProperty(this, "container", document.querySelector('.carousel__cards'));
    _defineProperty(this, "cardNumbers", []);
    _defineProperty(this, "arrow", '');
    _defineProperty(this, "prevClick", '');
  }
  _createClass(Carousel, [{
    key: "buildCarousel",
    value:
    // главная функция
    function buildCarousel() {
      this.setCards();
      this.addEvents();
    }

    // получить валидное число.
  }, {
    key: "getValidNumber",
    value: function getValidNumber(length) {
      var number = (0,_cardModal__WEBPACK_IMPORTED_MODULE_0__.getRundomPet)(length);
      while (this.cardNumbers.includes(number)) {
        number = (0,_cardModal__WEBPACK_IMPORTED_MODULE_0__.getRundomPet)(length);
      }
      return number;
    }

    // Удаляет карточки из контейнера в макете и удаляет лишнии номера карточек в массиве карточек, this.prev - номера карточек
  }, {
    key: "removeExcess",
    value: function removeExcess() {
      this.container.innerHTML = '';
      if (this.cardNumbers.length > 3 && this.arrow !== 'prev' && this.prevClick !== 'prev') {
        this.cardNumbers = this.cardNumbers.slice(3);
      } else if (this.cardNumbers.length > 3 && this.arrow == 'prev' && this.prevClick == 'prev') {
        this.cardNumbers = this.cardNumbers.slice(0, 3);
      }
    }

    // Добавляет слушатели на стрелки и ставит маркировки в экземпляре класса
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;
      document.querySelector('.arrow-next').addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this.container.classList.add('carousel__cards_toLeft');
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _this.arrow = 'next';
                      _context.next = 3;
                      return _this.setCards();
                    case 3:
                      _this.prevClick = 'next';
                      _this.container.classList.remove('carousel__cards_toLeft');
                      _this.container.classList.add('carousel__cards_fromRight');
                      setTimeout(function () {
                        _this.container.classList.remove('carousel__cards_fromRight');
                      }, 300);
                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })), 280);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      })));
      document.querySelector('.arrow-prev').addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _this.container.classList.add('carousel__cards_toRight');
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _this.arrow = 'prev';
                      _context3.next = 3;
                      return _this.setCards();
                    case 3:
                      _this.prevClick = 'prev';
                      _this.container.classList.remove('carousel__cards_toRight');
                      _this.container.classList.add('carousel__cards_fromLeft');
                      setTimeout(function () {
                        _this.container.classList.remove('carousel__cards_fromLeft');
                      }, 300);
                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              })), 280);
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      })));
    }

    // Удаляет ненужное затем получает json карточек, идет по циклу с максимально 3 карточками. Ставит или получает рандомное число из массива чисел карточек и создает на основе этого числа создает карточку, после чего добавляет её в контейнер. Так же тут реализовано определение стрелок следующая и предыдущая так, чтобы карточки не повторялись, при клике на следующую создаются новые неповторимые карточки, при клике назад используются 3 первые карточки, при 2 кликах назад(или если сохраненных элементов меньше 3) создаются новые карточки и добавляются в начало(массива номеров), карточки перед вторым кликом назад так-же сохраняются и на них можно перейти кликом вперед. При клике вперед создаются новые карточки и сохраняются предыдущие, на них можно вернуться при клике назад,
  }, {
    key: "setCards",
    value: function () {
      var _setCards = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this$cardNumbers;
        var info, temporaryCardNums, i, number, constructCard, card;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.removeExcess();
              _context5.next = 3;
              return (0,_cardModal__WEBPACK_IMPORTED_MODULE_0__.getInfo)('../pets.json');
            case 3:
              info = _context5.sent;
              temporaryCardNums = [];
              for (i = 0; i < 3; i++) {
                number = void 0;
                if (this.arrow === 'next' && this.prevClick === 'prev' && this.cardNumbers.length > 3) {
                  number = this.cardNumbers[i + 3];
                } else if (this.arrow === 'prev' && this.prevClick !== 'next') {
                  number = this.getValidNumber(info.length);
                  while (temporaryCardNums.includes(number) || this.cardNumbers.includes(number)) {
                    number = this.getValidNumber(info.length);
                  }
                  temporaryCardNums.push(number);
                } else if (this.arrow === 'prev') {
                  number = this.cardNumbers[i];
                } else {
                  number = this.getValidNumber(info.length);
                  this.cardNumbers.push(number);
                }
                constructCard = new _cardModal__WEBPACK_IMPORTED_MODULE_0__.Card(info[number].img, info[number].name, 'carousel__card', info[number].type, info[number]);
                card = constructCard.buildCard();
                this.container.append(card);
              }
              (_this$cardNumbers = this.cardNumbers).unshift.apply(_this$cardNumbers, temporaryCardNums);
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function setCards() {
        return _setCards.apply(this, arguments);
      }
      return setCards;
    }()
  }]);
  return Carousel;
}();
function createCarousel() {
  var builder = new Carousel();
  builder.buildCarousel();
}


/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.html */ "./pages/index.html");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.scss */ "./sass/main.scss");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ "./scripts/burger.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel */ "./scripts/carousel.js");




// import { createPagination } from './pagination';

document.addEventListener('DOMContentLoaded', function () {
  console.log('1) Реализация burger menu на обеих страницах: +26\n2) Реализация слайдера-карусели на странице Main: +36\n3) Реализация пагинации на странице Pets: +36\n4) Реализация попап на обеих страницах: +12');
  (0,_burger__WEBPACK_IMPORTED_MODULE_2__.setBurgerClick)();
  if (document.querySelector('.carousel__cards')) {
    (0,_carousel__WEBPACK_IMPORTED_MODULE_3__.createCarousel)();
  }
  // if (document.querySelector('.our-friends__list')) {
  //   createPagination();
  // }
});

/////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////

/***/ }),

/***/ "./pages/index.html":
/*!**************************!*\
  !*** ./pages/index.html ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/Vector.svg */ "./assets/svg/Vector.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/start-screen-puppy.png */ "./assets/img/start-screen-puppy.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-katrine.png */ "./assets/img/pets-katrine.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-jennifer.png */ "./assets/img/pets-jennifer.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/pets-woody.png */ "./assets/img/pets-woody.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/transportation.svg */ "./assets/svg/transportation.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/toys.svg */ "./assets/svg/toys.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/bowls-and-cups.svg */ "./assets/svg/bowls-and-cups.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/shampoos.svg */ "./assets/svg/shampoos.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/vitamins.svg */ "./assets/svg/vitamins.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/medicines.svg */ "./assets/svg/medicines.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/collars-or-leashes.svg */ "./assets/svg/collars-or-leashes.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/svg/sleeping-area.svg */ "./assets/svg/sleeping-area.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/donation-dog.png */ "./assets/img/donation-dog.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width\">\r\n  <!-- <link href=\"../sass/main.css\" rel=\"stylesheet\"> -->\r\n  <link rel=\"icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <title>Main</title>\r\n</head>\r\n\r\n<body>\r\n  <header class=\"header-main\">\r\n    <div class=\"wrapper header__wrapper\">\r\n      <div class=\"header__content\">\r\n        <div class=\"header__logo\">\r\n          <h1><a>Cozy House</a></h1>\r\n          <p>Shelter for pets in Boston</p>\r\n        </div>\r\n        <div class=\"burger__btn\">\r\n          <div class=\"burger burger-main\"></div>\r\n        </div>\r\n        <nav class=\"navigation\">\r\n          <ul class=\"navigation__list\">\r\n            <li class=\"navigation__item\"><a>About the shelter</a></li>\r\n            <li class=\"navigation__item\"><a href=\"./pets.html\">Our pets</a></li>\r\n            <li class=\"navigation__item\"><a href=\"#help\">Help the shelter</a></li>\r\n            <li class=\"navigation__item\"><a href=\"#footer\">Contacts</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n    </div>\r\n    <section class=\"not-only\">\r\n      <div class=\"wrapper not-only__wrapper\">\r\n        <div class=\"not-only__content\">\r\n          <div class=\"not-only__text\">\r\n            <h2 class=\"not-only__heading\">Not only people need a house</h2>\r\n            <p class=\"not-only__description\">We offer to give a chance to a little and nice puppy with an extremely wide\r\n              and\r\n              open\r\n              heart. He or she will love you more than anybody else in the world, you will see!</p>\r\n            <div class=\"button not-only__button\">\r\n              <a href=\"#our-friends\">Make a friend</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"not-only__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"dog\"></div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </header>\r\n\r\n  <main>\r\n    <section class=\"about\">\r\n      <div class=\"wrapper about__wrapper\">\r\n        <div class=\"about__content\">\r\n          <div class=\"about__img\"></div>\r\n          <div class=\"about__text\">\r\n            <h3 class=\"about__heading\">\r\n              About the shelter “Cozy House”\r\n            </h3>\r\n            <p>\r\n              Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a\r\n              family. The others will continue to live with us and will be waiting for a lucky chance to become dearly\r\n              loved.\r\n            </p>\r\n            <p>\r\n              We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including\r\n              psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels.\r\n              About\r\n              12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the\r\n              pets and would hardly ever leave them alone.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"our-friends\" id=\"our-friends\">\r\n      <div class=\"wrapper our-friends__wrapper\">\r\n        <div class=\"our-friends__content\">\r\n          <h3 class=\"our-friends__heading\">\r\n            Our friends who <br> are looking for a house\r\n          </h3>\r\n          <div class=\"our-friends__carousel carousel\">\r\n            <div class=\"arrow-prev btn\"></div>\r\n            <div class=\"carousel__cards\">\r\n              <div class=\"carousel__card card\">\r\n                <div class=\"our-friends__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"cat\"></div>\r\n                <h4 class=\"our-friends__name\">Katrine</h4>\r\n                <button class=\"card__button btn\">Learn more</button>\r\n              </div>\r\n              <div class=\"carousel__card card\">\r\n                <div class=\"our-friends__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"dog\"></div>\r\n                <h4 class=\"our-friends__name\">Jennifer</h4>\r\n                <button class=\"card__button btn\">Learn more</button>\r\n              </div>\r\n              <div class=\"carousel__card card\">\r\n                <div class=\"our-friends__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"dog\"></div>\r\n                <h4 class=\"our-friends__name\">Woody</h4>\r\n                <button class=\"card__button btn\">Learn more</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"arrow-next btn\"></div>\r\n          </div>\r\n          <div class=\"our-friends__button button\">\r\n            <a href=\"./pets.html\">Get to know the rest</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"help\" id=\"help\">\r\n      <div class=\"wrapper help__wrapper\">\r\n        <div class=\"help__content\">\r\n          <h3 class=\"help__heading\">How you can help\r\n            our shelter</h3>\r\n          <div class=\"help__items\">\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"food\"></div>\r\n              <h4 class=\"help__text\">Pet food</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"transport\"></div>\r\n              <h4 class=\"help__text\">Transportation</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"toys\"></div>\r\n              <h4 class=\"help__text\">Toys</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"bowls\"></div>\r\n              <h4 class=\"help__text\">Bowls and cups</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"shampoos\"></div>\r\n              <h4 class=\"help__text\">Shampoos</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"vitamins\"></div>\r\n              <h4 class=\"help__text\">Vitamins</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"meds\"></div>\r\n              <h4 class=\"help__text\">Medicines</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"collars\"></div>\r\n              <h4 class=\"help__text\">Collars / leashes</h4>\r\n            </div>\r\n            <div class=\"help__item\">\r\n              <div class=\"help__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"areas\"></div>\r\n              <h4 class=\"help__text\">Sleeping areas</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n\r\n    <section class=\"addition\">\r\n      <div class=\"wrapper addition__wrapper\">\r\n        <div class=\"addition__content\">\r\n          <div class=\"addition__img\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\"></div>\r\n          <div class=\"addition__text\">\r\n            <h3 class=\"addition__heading\">You can also\r\n              make a donation</h3>\r\n            <p class=\"addition__p1\">Name of the bank / Type of bank account</p>\r\n            <div class=\"addition__links\"><a class=\"addition__card\"></a>\r\n              <h4 class=\"addition__number\"><a>8380 2880 8028 8791 7435</a></h4>\r\n            </div>\r\n            <p class=\"addition__p2\">Legal information and lorem ipsum dolor sit amet, consectetur adipiscing\r\n              elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et\r\n              vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </main>\r\n\r\n  <footer class=\"footer\" id=\"footer\">\r\n    <div class=\"wrapper footer__wrapper\">\r\n      <div class=\"footer__content\">\r\n        <div class=\"footer__connection connection\">\r\n          <h3 class=\"footer__heading\">For questions and suggestions</h3>\r\n          <div class=\"connection__links\">\r\n            <a href=\"mailto:email@shelter.com\" class=\"connection__img connection__email\"></a>\r\n            <h4 class=\"connection__text\"><a href=\"mailto:email@shelter.com\">email@shelter.com</a></h4>\r\n          </div>\r\n          <div class=\"connection__links\">\r\n            <a href=\"tel:+136745677554\" class=\"connection__img connection__tel\"></a>\r\n            <h4 class=\"connection__text\"><a href=\"tel:+136745677554\">+13 674 567 75 54</a>\r\n            </h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer__connection connection\">\r\n          <h3 class=\"footer__heading\">We are waiting for your visit</h3>\r\n          <div class=\"connection__links\">\r\n            <a href=\"https://www.google.ru/maps/place/%D0%9A%D1%83%D1%80%D0%BB%D1%8B%D0%BA/@47.1145674,61.0605082,11.25z/data=!4m14!1m7!3m6!1s0x418c7657bf5ccceb:0x66c0ce0b9f4fd0e9!2z0JrRg9GA0LvRi9C6!8m2!3d47.11827!4d61.07176!16s%2Fg%2F11f6mq9_jx!3m5!1s0x418c7657bf5ccceb:0x66c0ce0b9f4fd0e9!8m2!3d47.11827!4d61.07176!16s%2Fg%2F11f6mq9_jx\"\r\n              class=\"connection__img connection__map\" target=\"_blank\"></a>\r\n            <h4 class=\"connection__text\"><a\r\n                href=\"https://www.google.ru/maps/place/%D0%9A%D1%83%D1%80%D0%BB%D1%8B%D0%BA/@47.1145674,61.0605082,11.25z/data=!4m14!1m7!3m6!1s0x418c7657bf5ccceb:0x66c0ce0b9f4fd0e9!2z0JrRg9GA0LvRi9C6!8m2!3d47.11827!4d61.07176!16s%2Fg%2F11f6mq9_jx!3m5!1s0x418c7657bf5ccceb:0x66c0ce0b9f4fd0e9!8m2!3d47.11827!4d61.07176!16s%2Fg%2F11f6mq9_jx\"\r\n                target=\"_blank\">1 Central Street, Boston (entrance from the store)</a></h4>\r\n          </div>\r\n          <div class=\"connection__links\">\r\n            <a href=\"https://www.google.ru/maps/place/%D0%97%D0%B0%D0%B6%D0%BE%D0%BF%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%B1%D0%BE%D1%81%D1%80%D0%B0%D1%81%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%B7%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA+(%D0%97%D0%9E%D0%97)/@52.4369894,71.9326428,12.75z/data=!4m10!1m2!2m1!1z0LfQsNC20L7Qv9C40L3RgdC6!3m6!1s0x4251e58c46f298d9:0xc5dc7159cc14d3a1!8m2!3d52.4419271!4d71.9306542!15sChLQt9Cw0LbQvtC_0LjQvdGB0LqSAQRwYXJr4AEA!16s%2Fg%2F11q21t7vf7\"\r\n              class=\"connection__img connection__map\" target=\"_blank\"></a>\r\n            <h4 class=\"connection__text\"><a\r\n                href=\"https://www.google.ru/maps/place/%D0%97%D0%B0%D0%B6%D0%BE%D0%BF%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%B1%D0%BE%D1%81%D1%80%D0%B0%D1%81%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9+%D0%B7%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA+(%D0%97%D0%9E%D0%97)/@52.4369894,71.9326428,12.75z/data=!4m10!1m2!2m1!1z0LfQsNC20L7Qv9C40L3RgdC6!3m6!1s0x4251e58c46f298d9:0xc5dc7159cc14d3a1!8m2!3d52.4419271!4d71.9306542!15sChLQt9Cw0LbQvtC_0LjQvdGB0LqSAQRwYXJr4AEA!16s%2Fg%2F11q21t7vf7\"\r\n                target=\"_blank\">18 South Park, London </a></h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"footer__img\"></div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n  <!-- <" + "script src=\"../dist/script.js\"><" + "/script> -->\r\n</body>\r\n\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./sass/main.scss":
/*!************************!*\
  !*** ./sass/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/img/donation-dog.png":
/*!*************************************!*\
  !*** ./assets/img/donation-dog.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/donation-dog..png";

/***/ }),

/***/ "./assets/img/start-screen-puppy.png":
/*!*******************************************!*\
  !*** ./assets/img/start-screen-puppy.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/start-screen-puppy..png";

/***/ }),

/***/ "./assets/svg/bowls-and-cups.svg":
/*!***************************************!*\
  !*** ./assets/svg/bowls-and-cups.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/bowls-and-cups..svg";

/***/ }),

/***/ "./assets/svg/collars-or-leashes.svg":
/*!*******************************************!*\
  !*** ./assets/svg/collars-or-leashes.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/collars-or-leashes..svg";

/***/ }),

/***/ "./assets/svg/medicines.svg":
/*!**********************************!*\
  !*** ./assets/svg/medicines.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/medicines..svg";

/***/ }),

/***/ "./assets/svg/shampoos.svg":
/*!*********************************!*\
  !*** ./assets/svg/shampoos.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/shampoos..svg";

/***/ }),

/***/ "./assets/svg/sleeping-area.svg":
/*!**************************************!*\
  !*** ./assets/svg/sleeping-area.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/sleeping-area..svg";

/***/ }),

/***/ "./assets/svg/toys.svg":
/*!*****************************!*\
  !*** ./assets/svg/toys.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/toys..svg";

/***/ }),

/***/ "./assets/svg/transportation.svg":
/*!***************************************!*\
  !*** ./assets/svg/transportation.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/transportation..svg";

/***/ }),

/***/ "./assets/svg/vitamins.svg":
/*!*********************************!*\
  !*** ./assets/svg/vitamins.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./img/vitamins..svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_5kazo4nik_jsfe2023q1"] = self["webpackChunk_5kazo4nik_jsfe2023q1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["scripts_burger_js-scripts_cardModal_js-node_modules_html-loader_dist_runtime_getUrl_js-assets-0558c7"], () => (__webpack_require__("./scripts/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map