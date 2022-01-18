(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+OP2":
    /*!******************************************************!*\
      !*** ./src/app/user/verify/user-verify.component.ts ***!
      \******************************************************/

    /*! exports provided: UserVerifyComponent */

    /***/
    function OP2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserVerifyComponent", function () {
        return UserVerifyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");

      var UserVerifyComponent = function UserVerifyComponent() {
        _classCallCheck(this, UserVerifyComponent);
      };

      UserVerifyComponent.ɵfac = function UserVerifyComponent_Factory(t) {
        return new (t || UserVerifyComponent)();
      };

      UserVerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserVerifyComponent,
        selectors: [["app-user-verify"]],
        decls: 3,
        vars: 0,
        template: function UserVerifyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " User verified! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXZlcmlmeS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "/brd":
    /*!**************************************************!*\
      !*** ./src/app/volunteer/volunteer.component.ts ***!
      \**************************************************/

    /*! exports provided: VolunteerComponent */

    /***/
    function brd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function () {
        return VolunteerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "X6d8");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      var VolunteerComponent = function VolunteerComponent() {
        _classCallCheck(this, VolunteerComponent);
      };

      VolunteerComponent.ɵfac = function VolunteerComponent_Factory(t) {
        return new (t || VolunteerComponent)();
      };

      VolunteerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VolunteerComponent,
        selectors: [["app-volunteer"]],
        decls: 20,
        vars: 15,
        consts: [[1, "container"], [1, "page-title", 3, "innerHTML"], ["fxLayout", "row wrap", "fxLayoutGap", "20px grid"], ["fxFlex", "100%"], [1, "page-secondary-title", 3, "innerHTML"], [3, "innerHTML"], ["fxFlex", "50%", "fxFlex.xs", "100%"], ["href", "https://play.google.com/store/apps/details?id=social.wom.pocket", "title", "Download WOM Pocket from Google Play"], ["src", "assets/images/badge_google_play.png", "alt", "Google Play", 2, "max-width", "100%"], ["href", "https://apps.apple.com/it/app/wom-pocket/id1466969163", "title", "Download WOM Pocket from App Store"], ["src", "assets/images/badge_app_store.png", "alt", "Apple App Store", 2, "max-width", "100%"]],
        template: function VolunteerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "VOLUNTEER.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "VOLUNTEER.SECTION_A.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "VOLUNTEER.SECTION_A.A"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "VOLUNTEER.SECTION_B.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, "VOLUNTEER.SECTION_B.A"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x1bnRlZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "/gxm":
    /*!*********************************************!*\
      !*** ./src/app/_overlay/overlay.service.ts ***!
      \*********************************************/

    /*! exports provided: OverlayService */

    /***/
    function gxm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayService", function () {
        return OverlayService;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "Di2d");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "HEf2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");

      var OverlayService = /*#__PURE__*/function () {
        function OverlayService(overlay) {
          _classCallCheck(this, OverlayService);

          this.overlay = overlay;
        }

        _createClass(OverlayService, [{
          key: "createOverlay",
          value: function createOverlay(config) {
            return this.overlay.create(config);
          }
        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(overlayRef, templateRef, vcRef) {
            var templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](templateRef, vcRef);
            overlayRef.attach(templatePortal);
          }
        }, {
          key: "positionGloballyCenter",
          value: function positionGloballyCenter() {
            return this.overlay.position().global().centerHorizontally().centerVertically();
          }
        }]);

        return OverlayService;
      }();

      OverlayService.ɵfac = function OverlayService_Factory(t) {
        return new (t || OverlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]));
      };

      OverlayService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: OverlayService,
        factory: OverlayService.ɵfac
      });
      /***/
    },

    /***/
    "/vYq":
    /*!******************************************!*\
      !*** ./src/app/_services/pos.service.ts ***!
      \******************************************/

    /*! exports provided: PosService */

    /***/
    function vYq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PosService", function () {
        return PosService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "Is5F");

      var PosService = /*#__PURE__*/function () {
        function PosService(http) {
          _classCallCheck(this, PosService);

          this.http = http;
          this.localUrlV1 = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].v1 + 'pos/';
          this.localUrlV2 = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].v2 + 'pos/';
        }
        /**
         * Get merchant data from specific pos id
         * @param id pos id
         */


        _createClass(PosService, [{
          key: "get",
          value: function get(id) {
            return this.http.get(this.localUrlV1 + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * Update all information of a pos
           * @param pos data to update
           */

        }, {
          key: "update",
          value: function update(pos) {
            return this.http.patch(this.localUrlV1 + pos.id, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * Create a new pos for a merchant
           * @param pos data of pos to create
           */

        }, {
          key: "register",
          value: function register(pos) {
            return this.http.put(this.localUrlV1, {
              ownerMerchantId: pos.ownerMerchantId,
              name: pos.name,
              latitude: pos.latitude,
              longitude: pos.longitude,
              url: pos.url
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return PosService;
      }();

      PosService.ɵfac = function PosService_Factory(t) {
        return new (t || PosService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      PosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: PosService,
        factory: PosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/brendandominicpaolini/Repositories/wom_website/src/Website/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0w7n":
    /*!**************************************************!*\
      !*** ./src/app/user/home/user-home.component.ts ***!
      \**************************************************/

    /*! exports provided: UserHomeComponent */

    /***/
    function w7n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function () {
        return UserHomeComponent;
      });
      /* harmony import */


      var _add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-merchant/add-merchant.component */
      "f3YW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _add_pos_add_pos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../add-pos/add-pos.component */
      "hQfH");
      /* harmony import */


      var _models_dialogType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_models/dialogType */
      "G4zF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "pkbZ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "L/ns");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_services/user.service */
      "VITL");
      /* harmony import */


      var _services_merchant_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../_services/merchant.service */
      "W/7B");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../_services */
      "J9tS");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/divider */
      "lSNd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "9mPs");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "wzcP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/expansion */
      "gzRm");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");

      function UserHomeComponent_ng_container_16_ng_container_2_p_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var merchant_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, "USER.HOME.MERCHANT.URL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", merchant_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](merchant_r2.url);
        }
      }

      function UserHomeComponent_ng_container_16_ng_container_2_p_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var merchant_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", merchant_r2.description, " ");
        }
      }

      function UserHomeComponent_ng_container_16_ng_container_2_ng_container_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var pos_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pos_r8.name, " ");
        }
      }

      function UserHomeComponent_ng_container_16_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, UserHomeComponent_ng_container_16_ng_container_2_p_21_Template, 7, 5, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, UserHomeComponent_ng_container_16_ng_container_2_p_22_Template, 2, 1, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserHomeComponent_ng_container_16_ng_container_2_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var merchant_r2 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r9.editMerchant(merchant_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserHomeComponent_ng_container_16_ng_container_2_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);

            var merchant_r2 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r11.addPos(merchant_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, UserHomeComponent_ng_container_16_ng_container_2_ng_container_40_Template, 3, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var merchant_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", merchant_r2.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 19, "USER.HOME.MERCHANT.CODE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", merchant_r2.fiscalCode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 21, "USER.HOME.MERCHANT.ADDRESS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate4"](": ", merchant_r2.address, ", ", merchant_r2.zipCode, ", ", merchant_r2.city, ", ", merchant_r2.country, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 23, "USER.HOME.MERCHANT.ACTIVITY_TYPE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](": ", merchant_r2.primaryActivity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", merchant_r2.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", merchant_r2.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 25, "USER.HOME.EDIT_MERCHANT_TOOLTIP"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 27, "USER.HOME.EDIT_MERCHANT_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("matTooltip", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 29, "USER.HOME.MERCHANT.ADD_POS_TOOLTIP"), " ", merchant_r2.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 31, "USER.HOME.MERCHANT.POS_TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 33, "USER.HOME.MERCHANT.POS_SUBTITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", merchant_r2.pos);
        }
      }

      function UserHomeComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-accordion", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, UserHomeComponent_ng_container_16_ng_container_2_Template, 41, 35, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.merchants.merchants);
        }
      }

      var UserHomeComponent = /*#__PURE__*/function () {
        function UserHomeComponent(dialog, snackBar, userService, merchantService, authService, translate) {
          _classCallCheck(this, UserHomeComponent);

          this.dialog = dialog;
          this.snackBar = snackBar;
          this.userService = userService;
          this.merchantService = merchantService;
          this.authService = authService;
          this.translate = translate;
        }

        _createClass(UserHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.username = this.userService.currentUserValue.name + ' ' + this.userService.currentUserValue.surname;
            this.loadData();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.merchantSubscription.unsubscribe();
          }
        }, {
          key: "loadData",
          value: function loadData() {
            var _this = this;

            this.merchantSubscription = this.authService.merchants().pipe().subscribe(function (response) {
              _this.merchants = response;
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "addMerchant",
          value: function addMerchant() {
            var _this2 = this;

            var merchantDialogData = new _add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_0__["MerchantDialogData"]();
            merchantDialogData.data = null;
            merchantDialogData.type = _models_dialogType__WEBPACK_IMPORTED_MODULE_3__["DialogType"].create;
            var dialogRef = this.dialog.open(_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_0__["AddMerchantDialogComponent"], {
              data: merchantDialogData
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this2.loadData();

                _this2.translate.get('USER.ADD_MERCHANT.SUCCESS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (response) {
                  _this2.openSnackBar(response);
                });
              }
            });
          }
        }, {
          key: "addPos",
          value: function addPos(merchantId) {
            var _this3 = this;

            var dialogRef = this.dialog.open(_add_pos_add_pos_component__WEBPACK_IMPORTED_MODULE_2__["AddPosDialogComponent"], {
              data: merchantId
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this3.loadData();

                _this3.translate.get('USER.ADD_POS.SUCCESS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (response) {
                  _this3.openSnackBar(response);
                });
              }
            });
          }
        }, {
          key: "editMerchant",
          value: function editMerchant(merchant) {
            var _this4 = this;

            var merchantDialogData = new _add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_0__["MerchantDialogData"]();
            merchantDialogData.data = merchant;
            merchantDialogData.type = _models_dialogType__WEBPACK_IMPORTED_MODULE_3__["DialogType"].edit;
            var dialogRef = this.dialog.open(_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_0__["AddMerchantDialogComponent"], {
              data: merchantDialogData
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this4.loadData();

                _this4.translate.get('USER.EDIT_MERCHANT.SUCCESS').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (response) {
                  _this4.openSnackBar(response);
                });
              }
            });
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar() {
            var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'null';
            this.snackBar.open(message, null, {
              duration: 2000
            });
          }
        }]);

        return UserHomeComponent;
      }();

      UserHomeComponent.ɵfac = function UserHomeComponent_Factory(t) {
        return new (t || UserHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_merchant_service__WEBPACK_IMPORTED_MODULE_8__["MerchantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]));
      };

      UserHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: UserHomeComponent,
        selectors: [["app-user-home"]],
        decls: 17,
        vars: 11,
        consts: [[1, "container"], [1, "mat-card"], [1, "merchant-container"], [1, "merchant-header"], [1, "button-container"], ["mat-icon-button", "", "color", "primary", 3, "matTooltip", "click"], [4, "ngIf"], [1, "merchant-mat-accordion"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "matTooltip", "click"], [1, "pos-card"], ["target", "_blank", 3, "href"]],
        template: function UserHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserHomeComponent_Template_button_click_12_listener() {
              return ctx.addMerchant();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, UserHomeComponent_ng_container_16_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "USER.HOME.WELCOME"), ", ", ctx.username, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 7, "USER.HOME.MERCHANT_TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, "USER.HOME.ADD_MERCHANT_TOOLTIP"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.merchants);
          }
        },
        directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardContent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: [".merchant-container[_ngcontent-%COMP%] {\n    padding: 5px;\n}\n\n.merchant-header[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    float: right;\n    margin-right: 0px;\n}\n\nmat-panel-title[_ngcontent-%COMP%]{\n    font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n    margin: 2px;\n}\n\n.pos-card[_ngcontent-%COMP%] {\n    margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InVzZXItaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lcmNoYW50LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ubWVyY2hhbnQtaGVhZGVyID4gaDEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxubWF0LXBhbmVsLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLnBvcy1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "2UKG":
    /*!********************************!*\
      !*** ./src/app/_models/aim.ts ***!
      \********************************/

    /*! exports provided: Aim, Titles */

    /***/
    function UKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Aim", function () {
        return Aim;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Titles", function () {
        return Titles;
      });

      var Aim = /*#__PURE__*/function () {
        function Aim() {
          _classCallCheck(this, Aim);
        }

        _createClass(Aim, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new Aim(), json);
          }
        }]);

        return Aim;
      }();

      var Titles = /*#__PURE__*/function () {
        function Titles() {
          _classCallCheck(this, Titles);
        }

        _createClass(Titles, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new Titles(), json);
          }
        }]);

        return Titles;
      }();
      /***/

    },

    /***/
    "7Vn+":
    /*!*******************************************!*\
      !*** ./src/app/_services/auth.service.ts ***!
      \*******************************************/

    /*! exports provided: AuthService */

    /***/
    function Vn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "Is5F");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.localUrlV1 = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].v1 + 'auth/';
          this.localUrlV2 = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].v2 + 'auth/';
        }
        /**
         * Retrieve available WOM sources for the authenticated user
         */


        _createClass(AuthService, [{
          key: "sources",
          value: function sources() {
            return this.http.get(this.localUrlV1 + 'sources').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (value) {
              return value;
            }));
          }
          /**
           * Retrieve available WOM POS for the authenticated user
           */

        }, {
          key: "pos",
          value: function pos() {
            return this.http.get(this.localUrlV1 + 'pos').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (value) {
              return value;
            }));
          }
          /**
           * Retrieve the public key used by the WOM registry
           */

        }, {
          key: "publicKey",
          value: function publicKey() {
            return this.http.get(this.localUrlV2 + 'key') // Can use also v1
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (value) {
              return value;
            }));
          }
          /**
           * Retrieve available WOM Merchants for the authenticated user
           */

        }, {
          key: "merchants",
          value: function merchants() {
            return this.http.post(this.localUrlV2 + 'merchant', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (value) {
              return value;
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "X6d8");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      var AboutComponent = function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      };

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 30,
        vars: 30,
        consts: [[1, "container"], [1, "page-title"], [1, "page-secondary-title", 3, "innerHTML"], [1, "content", 3, "innerHTML"], ["fxLayout", "row wrap", "fxLayoutGap", "20px grid"], ["fxFlex", "50%", "fxFlex.xs", "100%"], [3, "innerHTML"], ["fxFlex", "50%", "fxFlex.xs", "100%", "src", "assets/images/wom_pocket.png", "alt", "WOM Pocket app", 1, "image"], ["fxFlex", "100%"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cosa sono i WOM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "ABOUT.SECTION_A.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, "ABOUT.SECTION_A.A"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 14, "ABOUT.SECTION_A.B"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, "ABOUT.SECTION_A.C"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 18, "ABOUT.SECTION_B.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 20, "ABOUT.SECTION_B.A"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 22, "ABOUT.SECTION_B.B"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 24, "ABOUT.SECTION_C.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 26, "ABOUT.SECTION_C.A"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 28, "ABOUT.SECTION_C.B"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "86yW":
    /*!*************************************!*\
      !*** ./src/app/_models/merchant.ts ***!
      \*************************************/

    /*! exports provided: Merchant, MerchantContainer, Merchants */

    /***/
    function yW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Merchant", function () {
        return Merchant;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantContainer", function () {
        return MerchantContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Merchants", function () {
        return Merchants;
      });

      var Merchant = /*#__PURE__*/function () {
        function Merchant() {
          _classCallCheck(this, Merchant);
        }

        _createClass(Merchant, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new Merchant(), json);
          }
        }]);

        return Merchant;
      }();

      var MerchantContainer = /*#__PURE__*/function (_Merchant) {
        _inherits(MerchantContainer, _Merchant);

        var _super = _createSuper(MerchantContainer);

        function MerchantContainer() {
          _classCallCheck(this, MerchantContainer);

          return _super.apply(this, arguments);
        }

        _createClass(MerchantContainer, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new MerchantContainer(), json);
          }
        }]);

        return MerchantContainer;
      }(Merchant);

      var Merchants = /*#__PURE__*/function () {
        function Merchants() {
          _classCallCheck(this, Merchants);
        }

        _createClass(Merchants, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new Merchants(), json);
          }
        }]);

        return Merchants;
      }();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "Gywy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "X6d8");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(router) {
          _classCallCheck(this, HomeComponent);

          this.router = router;
        }

        _createClass(HomeComponent, [{
          key: "navigate",
          value: function navigate(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.router.navigate(['/' + link]);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateExternal",
          value: function navigateExternal(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      window.open(link, '_blank');

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 56,
        vars: 51,
        consts: [[1, "img-container"], ["src", "assets/images/wom_header.jpg", "alt", "WOM header", 1, "image"], [1, "container"], ["fxLayout", "row wrap"], ["fxFlex", "50%", "fxFlex.xs", "100%", "src", "assets/images/wom-logo.png", "alt", "WOM logo", 1, "image"], ["fxFlex", "50%", "fxFlex.xs", "100%", 1, "section"], [3, "innerHTML"], ["mat-flat-button", "", "fxFlexAlign", "right", 3, "innerHTML", "click"], ["fxFlex", "50%", "fxFlex.xs", "100%", "src", "assets/images/digit_logo.png", "alt", "DIGIT srl logo", 1, "image"], [1, "header-box-title"], [1, "header-box-content"], ["fxFlex", "100%", 1, "section"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() {
              return ctx.navigate("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() {
              return ctx.navigateExternal("https://www.digit.srl");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_23_listener() {
              return ctx.navigate("volunteer");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_32_listener() {
              return ctx.navigate("merchant");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_41_listener() {
              return ctx.navigate("instrument");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 17, "HOME.SECTION_A.A"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 19, "GENERIC.BUTTON.MORE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 21, "HOME.SECTION_A.B"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 23, "GENERIC.BUTTON.MORE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 25, "HOME.SECTION_B.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 27, "HOME.SECTION_B.MESSAGE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 29, "GENERIC.BUTTON.MORE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 31, "HOME.SECTION_C.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 33, "HOME.SECTION_C.MESSAGE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 35, "GENERIC.BUTTON.MORE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 37, "HOME.SECTION_D.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 39, "HOME.SECTION_D.MESSAGE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 41, "GENERIC.BUTTON.MORE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 43, "HOME.SECTION_E.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 45, "HOME.SECTION_E.MESSAGE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 47, "HOME.SECTION_F.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 49, "HOME.SECTION_F.MESSAGE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: [".img-badge[_ngcontent-%COMP%] {\r\n  max-width: 50%;\r\n  display: inline-block;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-style: italic;\r\n}\r\n\r\n.badge-row[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  text-decoration: none;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 50%;\r\n  height: auto;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   img.off[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWJhZGdlIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uYmFkZ2Utcm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5iYWRnZSBhIHtcclxuICBib3JkZXI6IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYmFkZ2UgaW1nIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5iYWRnZSBpbWcub2ZmIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "APwk":
    /*!*****************************************************!*\
      !*** ./src/app/_forms/user/forms-user.directive.ts ***!
      \*****************************************************/

    /*! exports provided: UserFormComponent */

    /***/
    function APwk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
        return UserFormComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      "lSNd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "V0t2");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      var UserFormComponent = /*#__PURE__*/function () {
        function UserFormComponent(fb) {
          _classCallCheck(this, UserFormComponent);

          this.fb = fb;
          this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(UserFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.form = this.fb.group({
              email: [{
                value: '',
                disabled: this.disabled
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email],
              password: [{
                value: '',
                disabled: this.disabled
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              passwordRepeat: [{
                value: '',
                disabled: this.disabled
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              firstName: [{
                value: '',
                disabled: this.disabled
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              lastName: [{
                value: '',
                disabled: this.disabled
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
            this.form.get('email').valueChanges.subscribe(function (value) {
              return _this5.formChange.emit(_this5.form);
            });
            this.form.get('password').valueChanges.subscribe(function (value) {
              return _this5.formChange.emit(_this5.form);
            });
            this.form.get('passwordRepeat').valueChanges.subscribe(function (value) {
              return _this5.formChange.emit(_this5.form);
            });
            this.form.get('firstName').valueChanges.subscribe(function (value) {
              return _this5.formChange.emit(_this5.form);
            });
            this.form.get('lastName').valueChanges.subscribe(function (value) {
              return _this5.formChange.emit(_this5.form);
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            console.log('changed');

            if (this.disabled) {
              this.form.controls.email.disable();
              this.form.controls.password.disable();
              this.form.controls.passwordRepeat.disable();
              this.form.controls.firstName.disable();
              this.form.controls.lastName.disable();
            }
          }
        }]);

        return UserFormComponent;
      }();

      UserFormComponent.ɵfac = function UserFormComponent_Factory(t) {
        return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UserFormComponent,
        selectors: [["app-forms-user"]],
        inputs: {
          form: "form",
          disabled: "disabled"
        },
        outputs: {
          formChange: "formChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 53,
        vars: 38,
        consts: [[3, "formGroup"], [1, "full-width"], ["colspan", "2"], ["matInput", "", "formControlName", "email", "required", "", 3, "placeholder"], ["matInput", "", "type", "password", "formControlName", "password", "required", "", 3, "placeholder"], ["matInput", "", "type", "password", "formControlName", "passwordRepeat", "required", "", 3, "placeholder"], ["matInput", "", "type", "text", "formControlName", "firstName", "required", "", 3, "placeholder"], ["matInput", "", "type", "text", "formControlName", "lastName", "required", "", 3, "placeholder"], [3, "inset"], ["mat-button", "", "matStepperNext", ""]],
        template: function UserFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "mat-divider", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 14, "SIGN_UP.REPRESENTATIVE.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 16, "SIGN_UP.REPRESENTATIVE.EMAIL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 18, "SIGN_UP.REPRESENTATIVE.EMAIL_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 20, "SIGN_UP.REPRESENTATIVE.PASSWORD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 22, "SIGN_UP.REPRESENTATIVE.PASSWORD_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 24, "SIGN_UP.REPRESENTATIVE.REPEAT_PASSWORD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 26, "SIGN_UP.REPRESENTATIVE.PASSWORD_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 28, "SIGN_UP.REPRESENTATIVE.NAME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 30, "SIGN_UP.REPRESENTATIVE.NAME_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 32, "SIGN_UP.REPRESENTATIVE.SURNAME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 34, "SIGN_UP.REPRESENTATIVE.SURNAME_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](52, 36, "SIGN_UP.NEXT"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jtcy11c2VyLmRpcmVjdGl2ZS5jc3MifQ== */", ".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n}\n\n.form-subgroup[_ngcontent-%COMP%] {\n    border: solid 2px #e0e5ef;\n    padding: 1em 0 1em 0;\n    margin: 2em 0 2em 0;\n    border-radius: 15px;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n    margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmRpcmVjdGl2ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJmb3Jtcy5kaXJlY3RpdmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXN1Ymdyb3VwIHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZTBlNWVmO1xuICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xuICAgIG1hcmdpbjogMmVtIDAgMmVtIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4ubWF0LWRpdmlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        mock: false,
        baseUrl: 'https://wom.social/api/',
        v1: 'v1/',
        v2: 'v2/',
        i18n: '1.0.0'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Bs1o":
    /*!*********************************************!*\
      !*** ./src/app/_helpers/httpInterceptor.ts ***!
      \*********************************************/

    /*! exports provided: TokenInterceptorService */

    /***/
    function Bs1o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
        return TokenInterceptorService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");

      var TokenInterceptorService = /*#__PURE__*/function () {
        function TokenInterceptorService() {
          _classCallCheck(this, TokenInterceptorService);

          this.noAuthStrings = ['aims', 'aim', 'auth/key', 'user/login', 'user/register', 'user/password-reset'];
        }

        _createClass(TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(req, next) {
            // If true do nothing - auth header not needed
            if (this.noAuthStrings.some(function (str) {
              return req.url.includes(str);
            })) {
              return next.handle(req);
            }

            var userLogin = localStorage.getItem('currentUserLogin');

            if (userLogin === null) {
              return next.handle(req);
            }

            var user = JSON.parse(userLogin);
            var duplicate = req.clone({
              setHeaders: {
                Authorization: 'Bearer ' + user.token
              }
            });
            return next.handle(duplicate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (ev) {
              /*
              if (ev instanceof HttpResponse) {
                  console.log('HttpResponse:', ev);
              }
              */
            }));
          }
        }]);

        return TokenInterceptorService;
      }();

      TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
        return new (t || TokenInterceptorService)();
      };

      TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TokenInterceptorService,
        factory: TokenInterceptorService.ɵfac
      });
      /***/
    },

    /***/
    "CRgA":
    /*!************************************!*\
      !*** ./src/app/_helpers/user.json ***!
      \************************************/

    /*! exports provided: name, surname, email, merchants, default */

    /***/
    function CRgA(module) {
      module.exports = JSON.parse("{\"name\":\"Brendan\",\"surname\":\"Paolini\",\"email\":\"b_paolini@yahoo.com\",\"merchants\":[{\"id\":\"5fafaedc6fa67600019d84cb\",\"name\":\"Brendan\",\"fiscalCode\":\"PLNBND89C20Z401Z\",\"address\":\"VIA E 4\",\"zipCode\":\"61032\",\"city\":\"FANO\",\"url\":\"http://www.digit.srl\",\"pos\":[{\"id\":\"5fafaedc6fa67600019d84cc\",\"name\":\"POS ONE\",\"privateKey\":\"-----BEGIN RSA PRIVATE KEY-----\\nMIIEpQIBAAKCAQEA11lyXLPqMIhImYy4p8cjLci359LqgwYX92SfXaThYOnuwq+Q\\nRTj1qOYgXJU69vSalXQd8FVx4YaDhcbAnGK7e1znbSDWMu/sr2SKeQqR4QsPvTgK\\nD1w6ptZu/BZEy4Iesll6gxvDU+9wOQ95wTPF8BVdbiT3wOOXW7dgrYjOIz8BoUoy\\ns9Z/sfUkRlwoPrXtmWhxhNGEVgKMyek3bX0VJoouXZ9Vk7EAexXd0ohR59PtTZwE\\nB6QsQSHj8j/nSuWgOFNMbrtB8Nd3E+JTwuJ4RjnUJIAJ4m7QW8b+udPQma376Pay\\nf339uMNNpg//Av95EtcgoXgPGiYwkusp+b3Q2QIDAQABAoIBAQCMhOVG8G9EM+mL\\nqHNlp1+hJHQ8ZTh5PqSs3Y/P/yLBpmQRzZWKVdyW1XMQdp//PSURmK9gf6DL1IZF\\n6KcOZK6JlNm+L8sVedErsaNZ0DfYbOtcQRDvbPMooovRGobRdJqrLg/vNVKDlp3X\\n3e1I0Iu8WXSZxq2Tw+6j/kirc7Vu8R8FVoqTTPfUOXrOhcMHclARYviuRBQfApH6\\nTINT238elezyxT/nBtk7RgbB9Pt/YU+nAgMtv5zdu1VKLzH4o5enEnWgaJcjChGo\\nW2fGG0Eg3G0gjlbubtjbHrMOQeaJsMwzFAia9X8ZB1vO4sGXZ7e7qtgUNdM6Pg19\\ntjHYVV3BAoGBAPpd7zvsn5vI9ePowpPK3LZGcyrTLY1A/Gj50pt71sBNm71mL8Sn\\npMg6KJtI65iwGKhj3oP+DQi424GXYeb+WouAH/hEta442PZjIVtiIRaT0IcpXezB\\nuIgli7nXan64tNabDwiAekJCH1AJz3CTrZIIIzjypPAb9fiHnfbLJjONAoGBANwx\\n0WX4L3jwY2u07OBmaDiF62wW1D+qf7Rjytw2C3V487xqDJV4U8RYZdAOCBwcJEBi\\nrai++9yAllf6PqTOAa49x3NfKtCXD+IDjO+nHNuHwVwh7Y6HSItwTT0xNbybFKXL\\nwqubRP68HYhJ3V8tfHuH3629oq7VFyZTc2td3Xl9AoGBANbuLwMthnORWG3YEroX\\ni9Q6tIGOGuvJXyarWL672EbsGQfGIrnbBR4St2tfdUl12yUr3wlG3l+femlM0PIh\\nZw+c5VUXfzRafv89aJRvsGIWcQynWYd3YngWa1YV9MlmvXACWyx8Rvh8lS77zQYi\\n8P2NWNd5jljGWCmMGvKTwW69AoGBANS1d0/m0Y0lwxUP4OfhZXp8u/BdmUmrXdQX\\ntqbFuooPfnybgW5+n4UD086JT4JAGTDtYk6pt8nJmfKA9jTkILF+Uob7/vMjip9N\\nyL7Vk0XqvXpP+BkATK8OnD6po/x/XxHOZU67HopplKnMmQHRgfgfSI+gql/zz3oh\\nkVS9hy5NAoGAMJ9TReQ279+Q4JaeLHTAH8ic+HosHMoRR+BJ9vjor5oaPvjVCfh+\\nFUIFOtbKsrg9+ehqZ/IT+2Gmv1BB8n34/jHBdTtgFQqsiuHSHsxit0VTDRcpndiw\\nOKlWwc/fFjuewiaJshcSJ6OVkj08bUlcZjIpAEj0tppVdpozzJrz/J4=\\n-----END RSA PRIVATE KEY-----\\n\",\"publicKey\":\"-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA11lyXLPqMIhImYy4p8cj\\nLci359LqgwYX92SfXaThYOnuwq+QRTj1qOYgXJU69vSalXQd8FVx4YaDhcbAnGK7\\ne1znbSDWMu/sr2SKeQqR4QsPvTgKD1w6ptZu/BZEy4Iesll6gxvDU+9wOQ95wTPF\\n8BVdbiT3wOOXW7dgrYjOIz8BoUoys9Z/sfUkRlwoPrXtmWhxhNGEVgKMyek3bX0V\\nJoouXZ9Vk7EAexXd0ohR59PtTZwEB6QsQSHj8j/nSuWgOFNMbrtB8Nd3E+JTwuJ4\\nRjnUJIAJ4m7QW8b+udPQma376Payf339uMNNpg//Av95EtcgoXgPGiYwkusp+b3Q\\n2QIDAQAB\\n-----END PUBLIC KEY-----\\n\"},{\"id\":\"5fafb03d6fa67600019d84cd\",\"name\":\"POS TWO\",\"privateKey\":\"-----BEGIN RSA PRIVATE KEY-----\\nMIIEpQIBAAKCAQEAvVu0zPge6MM+3OWbQHDNJWgOrn3B4CM4UAOKd59MfTspwxba\\nuyqCtSwBLNNUqFtgBb8JRl4oUkSK7dDp0TQ1VA9ZUgfZxz7BEXqhLD5i1qB/M1gY\\naDrcunwvh5IqHDVcMDnq/IE31Uyzwp2R45rf77VnRDpT5uXNuiFTOpZ2cDG0wis0\\nsLTr74n2/kM2EJdxF8Tb/ZrfBDxlBqaMUWzU5dirwCfBxyaHuEZ0CXzxbLIxq4xr\\nLXbvw9QLF9yBOkNyWIgmr9wdUYAmGuwQT2hlBMjuoSLhvtVXy2JuUq64qNGepgrs\\nBDJp0Glhcmjd+bXZL16mYxcTnf6PCrqE91gwfQIDAQABAoIBAQCs9VfmpHfvGW+Q\\n6zRsntvy3+IRJZLxvJnSE/nlG58M//48UOLHdKPhAems3PcFtDi35u9808I2qp7P\\nbDQ1v186ga6PS9ZytHI7GeyfcfhrnDuzVTMt+R3mREpRpYNLMr4a2rw1mX27GY1U\\nJQK9h5gl5mcFndVHIP5RleDkscxK2rdauQsBWSeP0WKBONj0AluN3X0gaQALWOBN\\nAwbGZ6YZCBZkkG9/9omBsTtUTGUiQQwEzTh+93/CIAK9iQAEhFifgv5g3YFZvGQS\\nrmsle8USalw/HYRo0a2BJt5ZvYEnkPjvHqxiHO4olhLFLhT20xoAkGioynkbAbWU\\nVsvsj6QhAoGBAPXfQ8jTOoa3pmcSDEY2clVpaTGlcCa+CFhpEMmEbQYUtQ3ox2Aj\\nQjOjeL21cGU/goFwoCR24XXh67A8XMQwltRBlbOgj1lRD7HCWCRLJEJmQDd5MNEM\\nrrgKACjaXzf26YA4y8uZ5WcI4x4Z5+/gmGVR2IVn1QVJQe6Wzl847MUVAoGBAMUo\\nf89G1uGGjoVpno2kJuFoVDhNKr9wtnpNNsVFUrhOcjw7+Z6Mu+4O7tWNuERr3xy/\\ntr2k2VVsB3WBtqJrDfo4cV2lxqFFR8fiYTg4qtj9G89GHRBde56cKcrzupR8k8l1\\nmbTizx7EccBHzMqmZUqOF+dJDXi/Sdhk/K8PDmfJAoGBANzPowezs+cS/e2pBr7z\\n3OCaJ2//vOX+Wm5UBVCFjogchrG0MYJEiArqL+BoF0XGsMTgyeGVpkwBFnMS8tj7\\nLin3sKM+eh7jru2ctR37IdhEDj4Dp/TGqA7+ZEBMRaF0LSYLW/NBBgXvtFDvQR5s\\nHVE5HPRKWMRDk2PbqgFYlUM1AoGBAIrz4ShH5/goqlfSuaFgGNryebD4ifFE0gbe\\nVoSwN/2XpCFZr7MTwvuj4KX37O+kCyoq3/NGtLnkmlkx43MS+lXo49U5mgVdW5q/\\nrP8/yQGHWcs6wg8fo5mEvFvCbTRrnIj27i6zT4CCuRzoPahxn5/tB2HFdc4tGzF8\\n8y258dApAoGANeL5LxCWKC+YDtBEtdc83t21zlkuXpNddBKRsCVwquxk3Aslt0mu\\nbHUIJY9hKBc6mGT/4ZL4vx7zZLgi7VHNl/Ye7nNwrS69SbMo2ZvEYCmWm+txjrLX\\n5IHxuoyOu1tQJsMJYFOV13nc/9jsq3ebOegsb18JhC8Czi5B7xJXRMs=\\n-----END RSA PRIVATE KEY-----\\n\",\"publicKey\":\"-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvVu0zPge6MM+3OWbQHDN\\nJWgOrn3B4CM4UAOKd59MfTspwxbauyqCtSwBLNNUqFtgBb8JRl4oUkSK7dDp0TQ1\\nVA9ZUgfZxz7BEXqhLD5i1qB/M1gYaDrcunwvh5IqHDVcMDnq/IE31Uyzwp2R45rf\\n77VnRDpT5uXNuiFTOpZ2cDG0wis0sLTr74n2/kM2EJdxF8Tb/ZrfBDxlBqaMUWzU\\n5dirwCfBxyaHuEZ0CXzxbLIxq4xrLXbvw9QLF9yBOkNyWIgmr9wdUYAmGuwQT2hl\\nBMjuoSLhvtVXy2JuUq64qNGepgrsBDJp0Glhcmjd+bXZL16mYxcTnf6PCrqE91gw\\nfQIDAQAB\\n-----END PUBLIC KEY-----\\n\"}]}]}");
      /***/
    },

    /***/
    "CdOL":
    /*!************************************************************!*\
      !*** ./src/app/privacy/instrument/instrument.component.ts ***!
      \************************************************************/

    /*! exports provided: PrivacyInstrumentComponent */

    /***/
    function CdOL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyInstrumentComponent", function () {
        return PrivacyInstrumentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");

      var PrivacyInstrumentComponent = function PrivacyInstrumentComponent() {
        _classCallCheck(this, PrivacyInstrumentComponent);
      };

      PrivacyInstrumentComponent.ɵfac = function PrivacyInstrumentComponent_Factory(t) {
        return new (t || PrivacyInstrumentComponent)();
      };

      PrivacyInstrumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyInstrumentComponent,
        selectors: [["app-privacy-instrument"]],
        decls: 6,
        vars: 0,
        consts: [[1, "container"], ["href", "https://www.eugdpr.org/"]],
        template: function PrivacyInstrumentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy Policy \u2018WOM Instrument\u2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The service is compliant with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EU General Data Protection Regulation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVtZW50LmNvbXBvbmVudC5jc3MifQ== */", ".container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InByaXZhY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "G4zF":
    /*!***************************************!*\
      !*** ./src/app/_models/dialogType.ts ***!
      \***************************************/

    /*! exports provided: DialogType */

    /***/
    function G4zF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogType", function () {
        return DialogType;
      });

      var DialogType;

      (function (DialogType) {
        DialogType[DialogType["create"] = 0] = "create";
        DialogType[DialogType["edit"] = 1] = "edit";
      })(DialogType || (DialogType = {}));
      /***/

    },

    /***/
    "GJy+":
    /*!******************************************************************!*\
      !*** ./src/app/user/not-verified/user-not-verified.component.ts ***!
      \******************************************************************/

    /*! exports provided: UserNotVerifiedComponent */

    /***/
    function GJy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserNotVerifiedComponent", function () {
        return UserNotVerifiedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../_services/user.service */
      "VITL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      var UserNotVerifiedComponent = /*#__PURE__*/function () {
        function UserNotVerifiedComponent(userService) {
          _classCallCheck(this, UserNotVerifiedComponent);

          this.userService = userService;
          this.user = userService.currentUserValue;
        }

        _createClass(UserNotVerifiedComponent, [{
          key: "sendValidationEmail",
          value: function sendValidationEmail() {// TODO
          }
        }]);

        return UserNotVerifiedComponent;
      }();

      UserNotVerifiedComponent.ɵfac = function UserNotVerifiedComponent_Factory(t) {
        return new (t || UserNotVerifiedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
      };

      UserNotVerifiedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserNotVerifiedComponent,
        selectors: [["app-user-not-verified"]],
        decls: 13,
        vars: 13,
        consts: [[3, "click"]],
        template: function UserNotVerifiedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserNotVerifiedComponent_Template_button_click_8_listener() {
              return ctx.sendValidationEmail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "USER.NOT_VERIFIED.TITLE"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "USER.NOT_VERIFIED.SUBTITLE"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "USER.NOT_VERIFIED.SEND_EMAIL_LINK"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "USER.NOT_VERIFIED.SEND_EMAIL_TEXT"), " ", ctx.user.email, " ");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW5vdC12ZXJpZmllZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "J9tS":
    /*!************************************!*\
      !*** ./src/app/_services/index.ts ***!
      \************************************/

    /*! exports provided: AuthService */

    /***/
    function J9tS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      "7Vn+");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
      });
      /***/

    },

    /***/
    "N5Id":
    /*!***************************************************!*\
      !*** ./src/app/_forms/pos/forms-pos.directive.ts ***!
      \***************************************************/

    /*! exports provided: PosFormComponent */

    /***/
    function N5Id(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PosFormComponent", function () {
        return PosFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/google-maps */
      "C7Gb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      var MapTypeId = google.maps.MapTypeId;

      var PosFormComponent = /*#__PURE__*/function () {
        function PosFormComponent(fb) {
          _classCallCheck(this, PosFormComponent);

          this.fb = fb;
          this.options = {
            center: {
              lat: 45.788,
              lng: 9.948
            },
            zoom: 4,
            mapTypeId: MapTypeId.ROADMAP
          };
          this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(PosFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.form = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              latitude: [{
                value: 0,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              longitude: [{
                value: 0,
                disabled: true
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              url: ['', !_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.form.get('name').valueChanges.subscribe(function (value) {
              return _this6.formChange.emit(_this6.form);
            });
            this.form.get('latitude').valueChanges.subscribe(function (value) {
              return _this6.formChange.emit(_this6.form);
            });
            this.form.get('longitude').valueChanges.subscribe(function (value) {
              return _this6.formChange.emit(_this6.form);
            });
            this.form.get('url').valueChanges.subscribe(function (value) {
              return _this6.formChange.emit(_this6.form);
            });
          }
        }, {
          key: "mapClick",
          value: function mapClick(event) {
            var _this7 = this;

            console.log(event);
            var clickedLocation = event.latLng;

            if (!this.marker) {
              this.marker = new google.maps.Marker({
                position: clickedLocation,
                map: this.map.googleMap,
                draggable: true
              });
              google.maps.event.addListener(this.marker, 'dragend', function (evt) {
                _this7.markerLocation();
              });
            } else {
              this.marker.setPosition(clickedLocation);
            }

            this.markerLocation();
          }
        }, {
          key: "markerLocation",
          value: function markerLocation() {
            var currentLocation = this.marker.getPosition();
            this.form.controls.latitude.setValue(currentLocation.lat());
            this.form.controls.longitude.setValue(currentLocation.lng());
            this.posLat = currentLocation.lat().toFixed(5);
            this.posLon = currentLocation.lng().toFixed(5);
          }
        }]);

        return PosFormComponent;
      }();

      PosFormComponent.ɵfac = function PosFormComponent_Factory(t) {
        return new (t || PosFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      PosFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PosFormComponent,
        selectors: [["app-forms-pos"]],
        viewQuery: function PosFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
          }
        },
        inputs: {
          form: "form"
        },
        outputs: {
          formChange: "formChange"
        },
        decls: 52,
        vars: 40,
        consts: [[3, "formGroup"], [3, "innerHTML"], [1, "full-width"], ["colspan", "2"], [1, "example-full-width"], ["matInput", "", "type", "text", "formControlName", "name", 3, "placeholder"], [1, "description"], [3, "options", "mapClick"], ["matInput", "", "type", "text", "formControlName", "latitude", 3, "placeholder", "value"], ["matInput", "", "type", "text", "formControlName", "longitude", 3, "placeholder", "value"], ["matInput", "", "type", "text", "formControlName", "url", 3, "placeholder"], [1, "description", 3, "innerHTML"]],
        template: function PosFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "google-map", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mapClick", function PosFormComponent_Template_google_map_mapClick_27_listener($event) {
              return ctx.mapClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 16, "SIGN_UP.POS.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 18, "SIGN_UP.POS.SUBTITLE_A"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 20, "SIGN_UP.POS.SUBTITLE_B"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 22, "SIGN_UP.POS.NAME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 24, "SIGN_UP.POS.NAME_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 26, "SIGN_UP.POS.NAME_TEXT"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 28, "SIGN_UP.POS.MAP_TITLE"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 30, "SIGN_UP.POS.LAT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.posLat);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 32, "SIGN_UP.POS.LAT_LON_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 34, "SIGN_UP.POS.LON"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.posLon);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 36, "SIGN_UP.POS.URL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 38, "SIGN_UP.POS.URL_OPTIONAL_TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["mat-divider.mat-divider-inset[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLXBvcy5kaXJlY3RpdmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJmb3Jtcy1wb3MuZGlyZWN0aXZlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaXZpZGVyLm1hdC1kaXZpZGVyLWluc2V0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbn1cbiJdfQ== */", ".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n}\n\n.form-subgroup[_ngcontent-%COMP%] {\n    border: solid 2px #e0e5ef;\n    padding: 1em 0 1em 0;\n    margin: 2em 0 2em 0;\n    border-radius: 15px;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n    margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmRpcmVjdGl2ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJmb3Jtcy5kaXJlY3RpdmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXN1Ymdyb3VwIHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZTBlNWVmO1xuICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xuICAgIG1hcmdpbjogMmVtIDAgMmVtIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4ubWF0LWRpdmlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Q+FD":
    /*!*************************************************************!*\
      !*** ./src/app/_forms/merchant/forms-merchant.directive.ts ***!
      \*************************************************************/

    /*! exports provided: MerchantFormComponent */

    /***/
    function QFD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantFormComponent", function () {
        return MerchantFormComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_models */
      "nPby");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "b5vR");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "lSNd");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/core */
      "yXbL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      function MerchantFormComponent_mat_option_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r4);
        }
      }

      function MerchantFormComponent_mat_option_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var business_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", business_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](business_r5);
        }
      }

      var MerchantFormComponent = /*#__PURE__*/function () {
        function MerchantFormComponent(fb) {
          _classCallCheck(this, MerchantFormComponent);

          this.fb = fb;
          this.countryList = _models__WEBPACK_IMPORTED_MODULE_2__["countryList"];
          this.businessList = _models__WEBPACK_IMPORTED_MODULE_2__["primaryActivityType"];
          this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(MerchantFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.form = this.fb.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
              fiscalCode: [{
                value: '',
                disabled: this.merchant !== null
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(16)]],
              address: ['', !_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              cap: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              primaryActivity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              url: ['', !_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
              description: ['', !_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            });
            this.form.get('name').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('fiscalCode').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('address').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('cap').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('city').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('country').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('primaryActivity').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('url').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });
            this.form.get('description').valueChanges.subscribe(function (value) {
              return _this8.formChange.emit(_this8.form);
            });

            if (this.merchant !== null) {
              this.form.controls.name.setValue(this.merchant.name);
              this.form.controls.fiscalCode.setValue(this.merchant.fiscalCode);
              this.form.controls.address.setValue(this.merchant.address);
              this.form.controls.cap.setValue(this.merchant.zipCode);
              this.form.controls.city.setValue(this.merchant.city);
              this.form.controls.country.setValue(this.merchant.country);
              this.form.controls.primaryActivity.setValue(this.merchant.primaryActivity);
              this.form.controls.url.setValue(this.merchant.url);
              this.form.controls.description.setValue(this.merchant.description);
            }
          }
        }]);

        return MerchantFormComponent;
      }();

      MerchantFormComponent.ɵfac = function MerchantFormComponent_Factory(t) {
        return new (t || MerchantFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      MerchantFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MerchantFormComponent,
        selectors: [["app-forms-merchant"]],
        inputs: {
          form: "form",
          merchant: "merchant"
        },
        outputs: {
          formChange: "formChange"
        },
        decls: 101,
        vars: 64,
        consts: [[3, "formGroup"], [1, "full-width"], ["colspan", "2"], ["matInput", "", "type", "text", "min", "8", "formControlName", "name", "required", "", 3, "placeholder"], ["matInput", "", "type", "text", "minlength", "16", "maxlength", "16", "formControlName", "fiscalCode", "required", "", 3, "placeholder"], ["cf", ""], ["align", "start"], [1, "row", "form-subgroup"], [1, "description", 3, "innerHTML"], ["matInput", "", "type", "text", "formControlName", "address", 3, "placeholder"], ["colspan", "1"], ["matInput", "", "formControlName", "cap", 3, "placeholder"], ["cap", ""], ["matInput", "", "type", "text", "formControlName", "city", 3, "placeholder"], ["appearance", "fill"], ["formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], [3, "inset"], ["formControlName", "primaryActivity"], ["matInput", "", "type", "text", "formControlName", "url", 3, "placeholder"], [1, "example-full-width"], ["matInput", "", "formControlName", "description", 1, "form-subgroup", 3, "placeholder"], [1, "description"], [3, "value"]],
        template: function MerchantFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-hint", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-hint", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "td", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, MerchantFormComponent_mat_option_63_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "mat-divider", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](71, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, MerchantFormComponent_mat_option_73_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-form-field", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "textarea", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](92, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 26, "SIGN_UP.MERCHANT.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 28, "SIGN_UP.MERCHANT.NAME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 30, "SIGN_UP.MERCHANT.NAME_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 32, "SIGN_UP.MERCHANT.CF"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _r0.value.length, " / ", _r0.maxLength, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 34, "SIGN_UP.MERCHANT.CF_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 36, "SIGN_UP.MERCHANT.OPTIONAL_TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](35, 38, "SIGN_UP.MERCHANT.ADDRESS"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 40, "SIGN_UP.MERCHANT.ADDRESS_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 42, "SIGN_UP.MERCHANT.CAP"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _r1.value.length, " / 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 44, "SIGN_UP.MERCHANT.CAP_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 46, "SIGN_UP.MERCHANT.CITY"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 48, "SIGN_UP.MERCHANT.SELECT_COUNTRY"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countryList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](71, 50, "SIGN_UP.MERCHANT.BUSINESS"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.businessList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 52, "SIGN_UP.MERCHANT.BUSINESS_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 54, "SIGN_UP.MERCHANT.WEBSITE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](86, 56, "SIGN_UP.MERCHANT.OPTIONAL_WEBSITE_TEXT"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](92, 58, "SIGN_UP.MERCHANT.DESCRIPTION"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 60, "SIGN_UP.MERCHANT.DESCRIPTION_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 62, "SIGN_UP.MERCHANT.DESCRIPTION_TEXT"), " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: ["mat-divider.mat-divider-inset[_ngcontent-%COMP%] {\n    margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLW1lcmNoYW50LmRpcmVjdGl2ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImZvcm1zLW1lcmNoYW50LmRpcmVjdGl2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGl2aWRlci5tYXQtZGl2aWRlci1pbnNldCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG4iXX0= */", ".full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n}\n\n.form-subgroup[_ngcontent-%COMP%] {\n    border: solid 2px #e0e5ef;\n    padding: 1em 0 1em 0;\n    margin: 2em 0 2em 0;\n    border-radius: 15px;\n}\n\n.description[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n    margin-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmRpcmVjdGl2ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJmb3Jtcy5kaXJlY3RpdmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLXN1Ymdyb3VwIHtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZTBlNWVmO1xuICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xuICAgIG1hcmdpbjogMmVtIDAgMmVtIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4ubWF0LWRpdmlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "QCGB":
    /*!**********************************************!*\
      !*** ./src/app/privacy/pos/pos.component.ts ***!
      \**********************************************/

    /*! exports provided: PrivacyPosComponent */

    /***/
    function QCGB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPosComponent", function () {
        return PrivacyPosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");

      var PrivacyPosComponent = function PrivacyPosComponent() {
        _classCallCheck(this, PrivacyPosComponent);
      };

      PrivacyPosComponent.ɵfac = function PrivacyPosComponent_Factory(t) {
        return new (t || PrivacyPosComponent)();
      };

      PrivacyPosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyPosComponent,
        selectors: [["app-privacy-pos"]],
        decls: 22,
        vars: 0,
        consts: [[1, "container"], ["href", "https://www.eugdpr.org/"]],
        template: function PrivacyPosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy Policy \u2018WOM Point of Service\u2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Personal data collected for the following purposes and using the following services: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Authentication: password and username ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Non-continuous geolocation: geographic location ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " WOM POS will ask for the following permissions during regular operation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Location: using your device\u2019s GPS to find current location (this permission is optional) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Communication protocols with the WOM POS online service have been developed in order to be privacy-preserving by design: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Unique identifiers of sessions and other sensitive data are never transmitted to the online service and are kept on the device; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " No personal information is ever stored on our servers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " The service is compliant with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "EU General Data Protection Regulation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3MuY29tcG9uZW50LmNzcyJ9 */", ".container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InByaXZhY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "R9+F":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signin/signin.component.ts ***!
      \***********************************************************/

    /*! exports provided: SignInComponent */

    /***/
    function R9F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
        return SignInComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "Gywy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_services/user.service */
      "VITL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");

      function SignInComponent_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
        }
      }

      var _c0 = function _c0() {
        return ["/authentication/request-new-password"];
      };

      var _c1 = function _c1() {
        return ["/authentication/signup"];
      };

      var SignInComponent = /*#__PURE__*/function () {
        function SignInComponent(fb, route, router, userService, translate) {
          _classCallCheck(this, SignInComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.userService = userService;
          this.translate = translate;
        }

        _createClass(SignInComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/user/home';
                      this.form = this.fb.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                      });
                      _context3.next = 4;
                      return this.userService.checkAuthenticated();

                    case 4:
                      if (!_context3.sent) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 7;
                      return this.router.navigate([this.returnUrl]);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this9 = this;

              var username, password;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.loginInvalid = false;
                      this.formSubmitAttempt = false;

                      if (this.form.valid) {
                        try {
                          console.log('request login...');
                          username = this.form.get('username').value;
                          password = this.form.get('password').value;
                          this.userService.login(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
                            _this9.userService.getLoggedUser().pipe().subscribe(function (user) {
                              _this9.router.navigate([_this9.returnUrl]);
                            }, function (error) {
                              console.log(error);
                              _this9.error = error;
                            });
                          }, function (error) {
                            console.log(error);

                            _this9.translate.get(['SIGN_IN.ERR.LOGIN', 'SIGN_IN.ERR.LOGIN']).subscribe(function (res) {
                              if (error.status === 403) {
                                _this9.error = res['SIGN_IN.ERR.LOGIN'];
                              } else {
                                _this9.error = res['SIGN_IN.ERR.LOGIN'];
                              }

                              _this9.loginInvalid = true;
                            });
                          });
                        } catch (err) {
                          console.log(err);
                          this.loginInvalid = true;
                        }
                      } else {
                        this.formSubmitAttempt = true;
                      }

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return SignInComponent;
      }();

      SignInComponent.ɵfac = function SignInComponent_Factory(t) {
        return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
      };

      SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SignInComponent,
        selectors: [["app-signin"]],
        decls: 31,
        vars: 30,
        consts: [[3, "formGroup", "ngSubmit"], [4, "ngIf"], [1, "full-width-input"], ["matInput", "", "formControlName", "username", "required", "", 3, "placeholder"], ["matInput", "", "type", "password", "formControlName", "password", "required", "", 3, "placeholder"], ["mat-raised-button", "", "color", "primary"], [1, "bottom-buttons"], [1, "nav-link", "text-spacing", 3, "routerLink"]],
        template: function SignInComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_2_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SignInComponent_mat_error_6_Template, 2, 1, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 12, "SIGN_IN.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginInvalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 14, "SIGN_IN.EMAIL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 16, "SIGN_IN.ERR.EMAIL"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 18, "SIGN_IN.PASSWORD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 20, "SIGN_IN.ERR.PASSWORD"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 22, "SIGN_IN.BTN_SIGN_IN"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](28, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 24, "SIGN_IN.BTN_FORGOT_PASSWORD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](29, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 26, "SIGN_IN.BTN_SIGN_UP"));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 2em auto;\r\n  text-align: center;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: block !important;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.bottom-buttons[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n}\r\n\r\n.text-spacing[_ngcontent-%COMP%] {\r\n  padding: 0 1em 0 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5ib3R0b20tYnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4udGV4dC1zcGFjaW5nIHtcclxuICBwYWRkaW5nOiAwIDFlbSAwIDFlbTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "STBS":
    /*!****************************************************!*\
      !*** ./src/app/privacy/pocket/pocket.component.ts ***!
      \****************************************************/

    /*! exports provided: PrivacyPocketComponent */

    /***/
    function STBS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPocketComponent", function () {
        return PrivacyPocketComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");

      var PrivacyPocketComponent = function PrivacyPocketComponent() {
        _classCallCheck(this, PrivacyPocketComponent);
      };

      PrivacyPocketComponent.ɵfac = function PrivacyPocketComponent_Factory(t) {
        return new (t || PrivacyPocketComponent)();
      };

      PrivacyPocketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyPocketComponent,
        selectors: [["app-privacy-pocket"]],
        decls: 16,
        vars: 0,
        consts: [[1, "container"], ["href", "https://www.eugdpr.org/"]],
        template: function PrivacyPocketComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy Policy \u2018WOM Pocket\u2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " The Pocket mobile application and its online services are designed to be fully anonymous and will never collect personal information from their users. WOM Pocket will ask for the following permissions during regular operation: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Camera: Using your device\u2019s camera to scan a QR-Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " It is required to grant these permissions otherwise the stated functions may not work as intended. Communication protocols with the Pocket online service have been developed in order to be privacy-preserving by design: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Unique identifiers of sessions and other sensitive data are never transmitted to the online service and are kept on the device; ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " No personal information is ever stored on our servers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The service is compliant with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "EU General Data Protection Regulation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2NrZXQuY29tcG9uZW50LmNzcyJ9 */", ".container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InByaXZhY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "X6d8");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");
      /* harmony import */


      var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./breadcrumbs/breadcrumbs.component */
      "YHbe");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");

      var AppComponent = function AppComponent(translate) {
        _classCallCheck(this, AppComponent);

        this.title = 'app';
        translate.addLangs(['en', 'it']);
        translate.setDefaultLang('it');
        console.log('browser lang: ', translate.getBrowserLang());

        if (translate.getBrowserLang()) {
          translate.use(translate.getBrowserLang());
        }
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 6,
        vars: 0,
        consts: [["fxLayout", "column", "fxFlexFill", ""], ["fxFlex", "", 1, "main-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-breadcrumbs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        styles: [".wide[_ngcontent-%COMP%] {\r\n  margin: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZGUge1xyXG4gIG1hcmdpbjogMWVtO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "TsVY":
    /*!**********************************************!*\
      !*** ./src/app/privacy/privacy.component.ts ***!
      \**********************************************/

    /*! exports provided: PrivacyComponent */

    /***/
    function TsVY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
        return PrivacyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");

      var PrivacyComponent = function PrivacyComponent() {
        _classCallCheck(this, PrivacyComponent);
      };

      PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) {
        return new (t || PrivacyComponent)();
      };

      PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyComponent,
        selectors: [["app-privacy"]],
        decls: 6,
        vars: 0,
        consts: [["lang", "en"], ["charset", "UTF-8"]],
        template: function PrivacyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InByaXZhY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "VITL":
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /*! exports provided: UserService */

    /***/
    function VITL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "Gywy");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "Ts7P");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_models */
      "nPby");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "Is5F");

      var UserService = /*#__PURE__*/function () {
        function UserService(http) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.localUrlV1 = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].v1 + 'user/';
          this.localUrlV2 = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].v2 + 'user/';

          var localStorageUserLogin = _models__WEBPACK_IMPORTED_MODULE_3__["UserLogin"].fromJson(JSON.parse(localStorage.getItem('currentUserLogin')));

          this.currentUserLoginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](localStorageUserLogin);
          this.currentUserLogin = this.currentUserLoginSubject.asObservable();

          var localStorageUser = _models__WEBPACK_IMPORTED_MODULE_3__["User"].fromJson(JSON.parse(localStorage.getItem('currentUser')));

          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](localStorageUser);
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(UserService, [{
          key: "currentUserValue",
          get: function get() {
            return this.currentUserSubject.value;
          }
        }, {
          key: "currentUserLoginValue",
          get: function get() {
            return this.currentUserLoginSubject.value;
          }
        }, {
          key: "checkAuthenticated",
          value: function checkAuthenticated() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", this.currentUserSubject.getValue() !== null && this.currentUserSubject.getValue() !== undefined);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
          /**
           * Login and retrieve the user id and bearer token
           * @param email username is always email
           * @param password password associated for the username
           */

        }, {
          key: "login",
          value: function login(email, password) {
            var _this10 = this;

            return this.http.post(this.localUrlV1 + 'login', {
              /*
              email,
              password,
              clientName: '',
              persistent: true
              */
            }, {
              observe: 'response',
              headers: {
                Authorization: 'Basic ' + btoa(email + ':' + password)
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              // login successful if there's a valid user in the response
              if (response.body) {
                var login = _models__WEBPACK_IMPORTED_MODULE_3__["UserLogin"].fromJson(response.body); // store user details and jwt token in local storage to keep user logged in between page refreshes


                localStorage.setItem('currentUserLogin', JSON.stringify(login));

                _this10.currentUserLoginSubject.next(login);

                return login;
              }
            }));
          }
          /**
           * Notify the server that the user has logged out & remove local storage data
           */

        }, {
          key: "logout",
          value: function logout() {
            this.http.post(this.localUrlV1 + 'logout', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              console.log('logout: ' + value);
            })); // remove user from local storage to log user out

            localStorage.removeItem('currentUserLogin');
            localStorage.removeItem('currentUser');
            this.currentUserLoginSubject.next(null);
            this.currentUserSubject.next(null);
          }
          /**
           * Get user data for current user id
           */

        }, {
          key: "getLoggedUser",
          value: function getLoggedUser() {
            var _this11 = this;

            return this.http.get(this.localUrlV1 + this.currentUserLoginSubject.value.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              // user id is correct if value is not null
              if (user) {
                // hydrate a full User object from its JSON representation (to have its methods/logic)
                user = _models__WEBPACK_IMPORTED_MODULE_3__["User"].fromJson(user); // store user details in local storage to save user data in between page refreshes

                localStorage.setItem('currentUser', JSON.stringify(user));

                _this11.currentUserSubject.next(user);
              }

              return user;
            }));
          }
          /**
           * Register a new user
           * @param data user data
           */

        }, {
          key: "register",
          value: function register(data) {
            return this.http.post(this.localUrlV1 + 'register', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * Update an existing user's data
           * @param data user data
           */

        }, {
          key: "update",
          value: function update(data) {
            return this.http.patch(this.localUrlV1 + this.currentUserLoginSubject.value.id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * verify status of user account
           */

        }, {
          key: "verify",
          value: function verify() {
            return this.http.post(this.localUrlV1 + this.currentUserLoginSubject.value.id + '/verify', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * ask for password reset
           * @param email registered user's email (username)
           */

        }, {
          key: "passwordResetRequest",
          value: function passwordResetRequest(email) {
            return this.http.post(this.localUrlV1 + 'password-reset', {
              email: email
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * Send new password
           * @param userId user's id to reset password for
           * @param token confirmation token
           * @param password new password
           */

        }, {
          key: "passwordReset",
          value: function passwordReset(userId, token, password) {
            return this.http.post(this.localUrlV1 + userId + '/password-reset', {
              token: token,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ɵfac = function UserService_Factory(t) {
        return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
      };

      UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: UserService,
        factory: UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "W/7B":
    /*!***********************************************!*\
      !*** ./src/app/_services/merchant.service.ts ***!
      \***********************************************/

    /*! exports provided: MerchantService */

    /***/
    function W7B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantService", function () {
        return MerchantService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "Is5F");

      var MerchantService = /*#__PURE__*/function () {
        function MerchantService(http) {
          _classCallCheck(this, MerchantService);

          this.http = http;
          this.localUrlV1 = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].v1 + 'merchant/';
          this.localUrlV2 = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].v2 + 'merchant/';
        }
        /**
         * Get merchant data from specific merchant id
         * @param id merchant id
         */


        _createClass(MerchantService, [{
          key: "getMerchant",
          value: function getMerchant(id) {
            return this.http.get(this.localUrlV1 + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * Update all information of a merchant
           * @param merchant data to update
           */

        }, {
          key: "update",
          value: function update(merchant) {
            return this.http.patch(this.localUrlV1 + merchant.id, {
              name: merchant.name,
              fiscalCode: merchant.fiscalCode,
              primaryActivity: merchant.primaryActivity,
              address: merchant.address,
              zipCode: merchant.zipCode,
              city: merchant.city,
              country: merchant.country,
              description: merchant.description,
              url: merchant.url
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }));
          }
          /**
           * Create a new merchant
           * @param merchant data of merchant to create
           */

        }, {
          key: "register",
          value: function register(merchant) {
            return this.http.put(this.localUrlV1, {
              name: merchant.name,
              fiscalCode: merchant.fiscalCode,
              primaryActivityType: merchant.primaryActivity,
              address: merchant.address,
              zipCode: merchant.zipCode,
              city: merchant.city,
              country: merchant.country,
              description: merchant.description,
              url: merchant.url
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (response) {
              return response;
            }));
          }
        }]);

        return MerchantService;
      }();

      MerchantService.ɵfac = function MerchantService_Factory(t) {
        return new (t || MerchantService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      MerchantService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MerchantService,
        factory: MerchantService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "YHbe":
    /*!******************************************************!*\
      !*** ./src/app/breadcrumbs/breadcrumbs.component.ts ***!
      \******************************************************/

    /*! exports provided: BreadcrumbsComponent */

    /***/
    function YHbe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
        return BreadcrumbsComponent;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");
      /* harmony import */


      var primeng_lts_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng-lts/breadcrumb */
      "H6Hf");

      var BreadcrumbsComponent = /*#__PURE__*/function () {
        function BreadcrumbsComponent(router, activatedRoute, translate) {
          _classCallCheck(this, BreadcrumbsComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.translate = translate;
          this.home = {
            icon: 'pi pi-home',
            url: 'home'
          };
        }

        _createClass(BreadcrumbsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"];
            })).subscribe(function () {
              return _this12.menuItems = _this12.createBreadcrumbs(_this12.activatedRoute.root);
            });
          }
        }, {
          key: "createBreadcrumbs",
          value: function createBreadcrumbs(route) {
            var _this13 = this;

            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
            var breadcrumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var children = route.children;
            var menu = [];
            breadcrumbs.forEach(function (b) {
              var label = _this13.translate.instant(b.label);

              menu.push({
                label: label,
                url: b.url
              });
            });

            if (children.length === 0) {
              return menu;
            }

            var _iterator = _createForOfIteratorHelper(children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                var routeURL = child.snapshot.url.map(function (segment) {
                  return segment.path;
                }).join('/');

                if (routeURL !== '') {
                  url += "/".concat(routeURL);
                }

                var labelVal = child.snapshot.data[BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB];

                if (labelVal !== undefined) {
                  var label = this.translate.instant(labelVal);
                  menu.push({
                    label: label,
                    url: url
                  });
                }

                return this.createBreadcrumbs(child, url, menu);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);

        return BreadcrumbsComponent;
      }();

      BreadcrumbsComponent.ROUTE_DATA_BREADCRUMB = 'breadcrumb';

      BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) {
        return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
      };

      BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: BreadcrumbsComponent,
        selectors: [["app-breadcrumbs"]],
        decls: 1,
        vars: 2,
        consts: [[3, "home", "model"]],
        template: function BreadcrumbsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-breadcrumb", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("home", ctx.home)("model", ctx.menuItems);
          }
        },
        directives: [primeng_lts_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["Breadcrumb"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, translateFactory, isMock, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "translateFactory", function () {
        return translateFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isMock", function () {
        return isMock;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "Gywy");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "iBjH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "dAwq");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "Is5F");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");
      /* harmony import */


      var _home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./home */
      "wn6f");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./nav/nav.component */
      "izVM");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "lU6W");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "wzcP");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "aDUM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "XGyc");
      /* harmony import */


      var _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./authentication/signin/signin.component */
      "R9+F");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./footer/footer.component */
      "fp1T");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/divider */
      "lSNd");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "HKvi");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/dialog */
      "pkbZ");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "I4Ee");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "L/ns");
      /* harmony import */


      var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./authentication/signup/signup.component */
      "umax");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/flex-layout */
      "rdBl");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/select */
      "b5vR");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "23B3");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/stepper */
      "V0t2");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/expansion */
      "gzRm");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "9mPs");
      /* harmony import */


      var _merchant_dashboard_merchant_dashboard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./merchant/dashboard/merchant-dashboard.component */
      "gACF");
      /* harmony import */


      var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./privacy/privacy.component */
      "TsVY");
      /* harmony import */


      var _privacy_instrument_instrument_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./privacy/instrument/instrument.component */
      "CdOL");
      /* harmony import */


      var _privacy_pocket_pocket_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./privacy/pocket/pocket.component */
      "STBS");
      /* harmony import */


      var _privacy_pos_pos_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./privacy/pos/pos.component */
      "QCGB");
      /* harmony import */


      var _helpers_HttpMockRequestInterceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./_helpers/HttpMockRequestInterceptor */
      "e4nH");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _helpers_httpInterceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./_helpers/httpInterceptor */
      "Bs1o");
      /* harmony import */


      var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./user/home/user-home.component */
      "0w7n");
      /* harmony import */


      var _forms_pos_forms_pos_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./_forms/pos/forms-pos.directive */
      "N5Id");
      /* harmony import */


      var _forms_user_forms_user_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./_forms/user/forms-user.directive */
      "APwk");
      /* harmony import */


      var _forms_merchant_forms_merchant_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./_forms/merchant/forms-merchant.directive */
      "Q+FD");
      /* harmony import */


      var _progressSpinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./_progressSpinner/progress-spinner.component */
      "jXya");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "Di2d");
      /* harmony import */


      var _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./_overlay/overlay.module */
      "j/75");
      /* harmony import */


      var _user_not_verified_user_not_verified_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./user/not-verified/user-not-verified.component */
      "GJy+");
      /* harmony import */


      var _user_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./user/add-merchant/add-merchant.component */
      "f3YW");
      /* harmony import */


      var _user_add_pos_add_pos_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./user/add-pos/add-pos.component */
      "hQfH");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ngx-cookie-service */
      "hpvP");
      /* harmony import */


      var _authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./authentication/reset-password/reset-password.component */
      "yMLD");
      /* harmony import */


      var _authentication_signup_signup_login_error_directive__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ./authentication/signup/signup-login-error.directive */
      "yHGR");
      /* harmony import */


      var _user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./user/verify/user-verify.component */
      "+OP2");
      /* harmony import */


      var _pageNotFound_page_not_found_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ./pageNotFound/page-not-found.component */
      "wAdQ");
      /* harmony import */


      var _authentication_requestNewPassword_request_new_password_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./authentication/requestNewPassword/request-new-password.component */
      "xEFJ");
      /* harmony import */


      var _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./merchant/merchant.component */
      "r04s");
      /* harmony import */


      var _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./instrument/instrument.component */
      "bT82");
      /* harmony import */


      var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ./volunteer/volunteer.component */
      "/brd");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./breadcrumbs/breadcrumbs.component */
      "YHbe");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "AoII");
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! @angular/google-maps */
      "C7Gb");
      /* harmony import */


      var primeng_lts_breadcrumb__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! primeng-lts/breadcrumb */
      "H6Hf"); // AoT requires an exported function for factories


      var createTranslateLoader = function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json?cb=' + _environments_environment__WEBPACK_IMPORTED_MODULE_39__["environment"].i18n);
      };

      function translateFactory(translate) {
        var _this14 = this;

        return function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    translate.setDefaultLang('en');
                    translate.use('en');
                    return _context6.abrupt("return", new Promise(function (resolve) {
                      translate.onLangChange.subscribe(function () {
                        resolve();
                      });
                    }));

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));
        };
      }

      var isMock = _environments_environment__WEBPACK_IMPORTED_MODULE_39__["environment"].mock;

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
          useFactory: translateFactory,
          deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]],
          multi: true
        }, isMock ? [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _helpers_HttpMockRequestInterceptor__WEBPACK_IMPORTED_MODULE_38__["HttpMockRequestInterceptor"],
          multi: true
        }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_51__["CookieService"]] : [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _helpers_httpInterceptor__WEBPACK_IMPORTED_MODULE_40__["TokenInterceptorService"],
          multi: true
        }, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_51__["CookieService"]]],
        imports: [[_app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([{
          path: '',
          component: _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
          pathMatch: 'full'
        }]), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
          defaultLanguage: 'en',
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
          }
        }), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_63__["GoogleMapsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_46__["OverlayModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_47__["AppOverlayModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__["MatGridListModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_63__["GoogleMapsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], primeng_lts_breadcrumb__WEBPACK_IMPORTED_MODULE_64__["BreadcrumbModule"]], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _home__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SignInComponent"], _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["MerchantSignUpComponent"], _merchant_dashboard_merchant_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["MerchantDashboardComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_34__["PrivacyComponent"], _privacy_instrument_instrument_component__WEBPACK_IMPORTED_MODULE_35__["PrivacyInstrumentComponent"], _privacy_pocket_pocket_component__WEBPACK_IMPORTED_MODULE_36__["PrivacyPocketComponent"], _privacy_pos_pos_component__WEBPACK_IMPORTED_MODULE_37__["PrivacyPosComponent"], _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_41__["UserHomeComponent"], _forms_pos_forms_pos_directive__WEBPACK_IMPORTED_MODULE_42__["PosFormComponent"], _forms_user_forms_user_directive__WEBPACK_IMPORTED_MODULE_43__["UserFormComponent"], _forms_merchant_forms_merchant_directive__WEBPACK_IMPORTED_MODULE_44__["MerchantFormComponent"], _progressSpinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_45__["ProgressSpinnerComponent"], _user_not_verified_user_not_verified_component__WEBPACK_IMPORTED_MODULE_48__["UserNotVerifiedComponent"], _user_add_merchant_add_merchant_component__WEBPACK_IMPORTED_MODULE_49__["AddMerchantDialogComponent"], _user_add_pos_add_pos_component__WEBPACK_IMPORTED_MODULE_50__["AddPosDialogComponent"], _authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_52__["ResetPasswordComponent"], _authentication_signup_signup_login_error_directive__WEBPACK_IMPORTED_MODULE_53__["LogInErrorDialogComponent"], _user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_54__["UserVerifyComponent"], _authentication_requestNewPassword_request_new_password_component__WEBPACK_IMPORTED_MODULE_56__["RequestNewPasswordComponent"], _pageNotFound_page_not_found_component__WEBPACK_IMPORTED_MODULE_55__["PageNotFoundComponent"], _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_57__["MerchantComponent"], _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_58__["InstrumentComponent"], _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_59__["VolunteerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_60__["AboutComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_61__["BreadcrumbsComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_63__["GoogleMapsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_46__["OverlayModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_47__["AppOverlayModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__["MatGridListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_62__["MatGridListModule"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_63__["GoogleMapsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexLayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__["FlexModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], primeng_lts_breadcrumb__WEBPACK_IMPORTED_MODULE_64__["BreadcrumbModule"]],
          exports: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZrHR":
    /*!****************************************!*\
      !*** ./src/app/_models/countryList.ts ***!
      \****************************************/

    /*! exports provided: countryList */

    /***/
    function ZrHR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "countryList", function () {
        return countryList;
      });

      var countryList = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas (the)', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia (Plurinational State of)', 'Bonaire, Sint Eustatius and Saba', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory (the)', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Cayman Islands (the)', 'Central African Republic (the)', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands (the)', 'Colombia', 'Comoros (the)', 'Congo (the Democratic Republic of the)', 'Congo (the)', 'Cook Islands (the)', 'Costa Rica', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czechia', 'Côte d\'Ivoire', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic (the)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Falkland Islands (the) [Malvinas]', 'Faroe Islands (the)', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories (the)', 'Gabon', 'Gambia (the)', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and McDonald Islands', 'Holy See (the)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea (the Democratic People\'s Republic of)', 'Korea (the Republic of)', 'Kuwait', 'Kyrgyzstan', 'Lao People\'s Democratic Republic (the)', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands (the)', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia (Federated States of)', 'Moldova (the Republic of)', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands (the)', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger (the)', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands (the)', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine, State of', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines (the)', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Republic of North Macedonia', 'Romania', 'Russian Federation (the)', 'Rwanda', 'Réunion', 'Saint Barthélemy', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten (Dutch part)', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan (the)', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands (the)', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates (the)', 'United Kingdom of Great Britain and Northern Ireland (the)', 'United States Minor Outlying Islands (the)', 'United States of America (the)', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela (Bolivarian Republic of)', 'Viet Nam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe', 'Åland Islands'];
      /***/
    },

    /***/
    "bBj/":
    /*!************************************************!*\
      !*** ./src/app/_models/primaryActivityType.ts ***!
      \************************************************/

    /*! exports provided: primaryActivityType */

    /***/
    function bBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "primaryActivityType", function () {
        return primaryActivityType;
      });

      var primaryActivityType = ['Agricolture', 'Construction', 'Manifacture', 'RetailCommerce', 'Transport', 'Lodging', 'Food', 'Information', 'Finance', 'Travel', 'Education', 'Health', 'Sports', 'Services', 'Entertainment', 'Organizations'];
      /***/
    },

    /***/
    "bT82":
    /*!****************************************************!*\
      !*** ./src/app/instrument/instrument.component.ts ***!
      \****************************************************/

    /*! exports provided: InstrumentComponent */

    /***/
    function bT82(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstrumentComponent", function () {
        return InstrumentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");

      var InstrumentComponent = function InstrumentComponent() {
        _classCallCheck(this, InstrumentComponent);
      };

      InstrumentComponent.ɵfac = function InstrumentComponent_Factory(t) {
        return new (t || InstrumentComponent)();
      };

      InstrumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InstrumentComponent,
        selectors: [["app-instrument"]],
        decls: 3,
        vars: 0,
        consts: [[1, "container"], [1, "page-title"]],
        template: function InstrumentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Instrument");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVtZW50LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "bW1R":
    /*!********************************!*\
      !*** ./src/app/_models/pos.ts ***!
      \********************************/

    /*! exports provided: Pos, PosRegistration */

    /***/
    function bW1R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pos", function () {
        return Pos;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PosRegistration", function () {
        return PosRegistration;
      });

      var Pos = /*#__PURE__*/function () {
        function Pos() {
          _classCallCheck(this, Pos);
        }

        _createClass(Pos, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new Pos(), json);
          }
        }]);

        return Pos;
      }();

      var PosRegistration = /*#__PURE__*/function () {
        function PosRegistration() {
          _classCallCheck(this, PosRegistration);
        }

        _createClass(PosRegistration, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new PosRegistration(), json);
          }
        }]);

        return PosRegistration;
      }();
      /***/

    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: appRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () {
        return appRoutingModule;
      });
      /* harmony import */


      var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_helpers/auth.guard */
      "p3Fh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home */
      "wn6f");
      /* harmony import */


      var _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication/signin/signin.component */
      "R9+F");
      /* harmony import */


      var _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./authentication/signup/signup.component */
      "umax");
      /* harmony import */


      var _merchant_dashboard_merchant_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./merchant/dashboard/merchant-dashboard.component */
      "gACF");
      /* harmony import */


      var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./privacy/privacy.component */
      "TsVY");
      /* harmony import */


      var _privacy_pos_pos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./privacy/pos/pos.component */
      "QCGB");
      /* harmony import */


      var _privacy_pocket_pocket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./privacy/pocket/pocket.component */
      "STBS");
      /* harmony import */


      var _privacy_instrument_instrument_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./privacy/instrument/instrument.component */
      "CdOL");
      /* harmony import */


      var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user/home/user-home.component */
      "0w7n");
      /* harmony import */


      var _user_not_verified_user_not_verified_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user/not-verified/user-not-verified.component */
      "GJy+");
      /* harmony import */


      var _authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./authentication/reset-password/reset-password.component */
      "yMLD");
      /* harmony import */


      var _user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user/verify/user-verify.component */
      "+OP2");
      /* harmony import */


      var _pageNotFound_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pageNotFound/page-not-found.component */
      "wAdQ");
      /* harmony import */


      var _authentication_requestNewPassword_request_new_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./authentication/requestNewPassword/request-new-password.component */
      "xEFJ");
      /* harmony import */


      var _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./merchant/merchant.component */
      "r04s");
      /* harmony import */


      var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./volunteer/volunteer.component */
      "/brd");
      /* harmony import */


      var _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./instrument/instrument.component */
      "bT82");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
          data: {
            breadcrumb: null
          }
        }, {
          path: 'home',
          component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
          data: {
            breadcrumb: 'BREADCRUMBS.HOME'
          }
        }, {
          path: 'about',
          component: _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
          data: {
            breadcrumb: 'BREADCRUMBS.ABOUT'
          }
        }, {
          path: 'volunteer',
          component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_17__["VolunteerComponent"],
          data: {
            breadcrumb: 'BREADCRUMBS.VOLUNTEER'
          }
        }, {
          path: 'merchant',
          component: _merchant_merchant_component__WEBPACK_IMPORTED_MODULE_16__["MerchantComponent"],
          data: {
            breadcrumb: 'BREADCRUMBS.MERCHANT'
          }
        }, {
          path: 'instrument',
          component: _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_18__["InstrumentComponent"],
          data: {
            breadcrumb: 'BREADCRUMBS.INSTRUMENT'
          }
        }, {
          path: 'user',
          data: {
            breadcrumb: 'BREADCRUMBS.USER.USER'
          },
          children: [{
            path: 'merchant',
            component: _merchant_dashboard_merchant_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["MerchantDashboardComponent"],
            canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
            data: {
              breadcrumb: 'BREADCRUMBS.USER.MERCHANT'
            }
          }, {
            path: 'not-verified',
            component: _user_not_verified_user_not_verified_component__WEBPACK_IMPORTED_MODULE_11__["UserNotVerifiedComponent"],
            canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
            data: {
              breadcrumb: 'BREADCRUMBS.USER.ERROR'
            }
          }, {
            path: 'home',
            component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_10__["UserHomeComponent"],
            canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
            data: {
              breadcrumb: 'BREADCRUMBS.USER.HOME'
            }
          }, {
            path: 'verify',
            component: _user_verify_user_verify_component__WEBPACK_IMPORTED_MODULE_13__["UserVerifyComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.USER.VERIFY'
            }
          }]
        }, {
          path: 'authentication',
          data: {
            breadcrumb: 'BREADCRUMBS.AUTHENTICATION.AUTHENTICATION'
          },
          children: [{
            path: 'signin',
            component: _authentication_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.SIGNIN'
            }
          }, {
            path: 'signup',
            component: _authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["MerchantSignUpComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.SIGNUP'
            }
          }, {
            path: 'reset-password',
            component: _authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_12__["ResetPasswordComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.RESET_PASSWORD'
            }
          }, {
            path: 'request-new-password',
            component: _authentication_requestNewPassword_request_new_password_component__WEBPACK_IMPORTED_MODULE_15__["RequestNewPasswordComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.AUTHENTICATION.NEW_PASSWORD'
            }
          }]
        }, {
          path: 'privacy',
          component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyComponent"],
          data: {
            breadcrumb: 'BREADCRUMBS.PRIVACY.PRIVACY'
          },
          children: [{
            path: 'pos',
            component: _privacy_pos_pos_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyPosComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.POS'
            }
          }, {
            path: 'pocket',
            component: _privacy_pocket_pocket_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyPocketComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.POCKET'
            }
          }, {
            path: 'instrument',
            component: _privacy_instrument_instrument_component__WEBPACK_IMPORTED_MODULE_9__["PrivacyInstrumentComponent"],
            data: {
              breadcrumb: 'BREADCRUMBS.PRIVACY.INSTRUMENT'
            }
          }]
        }, {
          path: '**',
          component: _pageNotFound_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
        }]
      }];

      var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);
      /***/

    },

    /***/
    "e4nH":
    /*!********************************************************!*\
      !*** ./src/app/_helpers/HttpMockRequestInterceptor.ts ***!
      \********************************************************/

    /*! exports provided: HttpMockRequestInterceptor */

    /***/
    function e4nH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpMockRequestInterceptor", function () {
        return HttpMockRequestInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "Is5F");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "Ts7P");
      /* harmony import */


      var _user_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user.json */
      "CRgA");

      var _user_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./user.json */
      "CRgA", 1);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "I2fu"); // @ts-ignore


      var urls = [{
        url: 'https://wom.social/api/v2/auth/merchant',
        json: _user_json__WEBPACK_IMPORTED_MODULE_2___namespace
      }];

      var HttpMockRequestInterceptor = /*#__PURE__*/function () {
        function HttpMockRequestInterceptor(injector) {
          _classCallCheck(this, HttpMockRequestInterceptor);

          this.injector = injector;
        }

        _createClass(HttpMockRequestInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _iterator2 = _createForOfIteratorHelper(urls),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var element = _step2.value;

                if (request.url === element.url) {
                  console.log('Loaded from json : ' + request.url);
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]({
                    status: 200,
                    body: element.json["default"]
                  }));
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            console.log('Loaded from http call :' + request.url);
            return next.handle(request);
          }
        }]);

        return HttpMockRequestInterceptor;
      }();

      HttpMockRequestInterceptor.ɵfac = function HttpMockRequestInterceptor_Factory(t) {
        return new (t || HttpMockRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]));
      };

      HttpMockRequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: HttpMockRequestInterceptor,
        factory: HttpMockRequestInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "f3YW":
    /*!*************************************************************!*\
      !*** ./src/app/user/add-merchant/add-merchant.component.ts ***!
      \*************************************************************/

    /*! exports provided: AddMerchantDialogComponent, MerchantDialogData */

    /***/
    function f3YW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMerchantDialogComponent", function () {
        return AddMerchantDialogComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantDialogData", function () {
        return MerchantDialogData;
      });
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../_models */
      "nPby");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "pkbZ");
      /* harmony import */


      var _models_dialogType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_models/dialogType */
      "G4zF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _services_merchant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_services/merchant.service */
      "W/7B");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _forms_merchant_forms_merchant_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../_forms/merchant/forms-merchant.directive */
      "Q+FD");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      function AddMerchantDialogComponent_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r0.data.type === ctx_r0.dialogTypes.create ? "USER.ADD_MERCHANT.INPUT_ERROR" : "USER.EDIT_MERCHANT.INPUT_ERROR"), " ");
        }
      }

      function AddMerchantDialogComponent_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r1.data.type === ctx_r1.dialogTypes.create ? "USER.ADD_MERCHANT.API_ERROR" : "USER.EDIT_MERCHANT.API_ERROR"), " ");
        }
      }

      var AddMerchantDialogComponent = /*#__PURE__*/function () {
        function AddMerchantDialogComponent(data, dialogRef, merchantService, cd) {
          _classCallCheck(this, AddMerchantDialogComponent);

          this.data = data;
          this.dialogRef = dialogRef;
          this.merchantService = merchantService;
          this.cd = cd;
          this.dialogTypes = _models_dialogType__WEBPACK_IMPORTED_MODULE_3__["DialogType"];
        }

        _createClass(AddMerchantDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.merchantData = this.data.data;
            this.cd.detectChanges();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            switch (this.data.type) {
              case _models_dialogType__WEBPACK_IMPORTED_MODULE_3__["DialogType"].create:
                this.create();
                break;

              case _models_dialogType__WEBPACK_IMPORTED_MODULE_3__["DialogType"].edit:
                this.edit();
                break;
            }
          }
        }, {
          key: "create",
          value: function create() {
            var _this15 = this;

            var merchant = this.createMerchantDataStruct();
            this.merchantService.register(merchant).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (result) {
              console.log(result);

              _this15.dialogRef.close(true);
            }, function (error) {
              _this15.formApiError = true;
              console.log(error);
            });
          }
        }, {
          key: "edit",
          value: function edit() {
            var _this16 = this;

            var merchant = this.createMerchantDataStruct();
            merchant.id = this.merchantData.id;
            this.merchantService.update(merchant).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (result) {
              console.log(result);

              _this16.dialogRef.close(true);
            }, function (error) {
              _this16.formApiError = true;
              console.log(error);
            });
          }
        }, {
          key: "createMerchantDataStruct",
          value: function createMerchantDataStruct() {
            this.formInputError = this.formMerchant === undefined;
            var merchant = new _models__WEBPACK_IMPORTED_MODULE_0__["Merchant"]();
            merchant.fiscalCode = this.formMerchant.controls.fiscalCode.value;
            merchant.country = this.formMerchant.controls.country.value;
            merchant.city = this.formMerchant.controls.city.value;
            merchant.zipCode = this.formMerchant.controls.cap.value;
            merchant.address = this.formMerchant.controls.address.value;
            merchant.primaryActivity = this.formMerchant.controls.primaryActivity.value;
            merchant.name = this.formMerchant.controls.name.value; // Optional values

            if (this.formMerchant.controls.url.value !== '') {
              merchant.url = this.formMerchant.controls.url.value;
            }

            if (this.formMerchant.controls.description.value !== '') {
              merchant.description = this.formMerchant.controls.description.value;
            }

            return merchant;
          }
        }]);

        return AddMerchantDialogComponent;
      }();

      AddMerchantDialogComponent.ɵfac = function AddMerchantDialogComponent_Factory(t) {
        return new (t || AddMerchantDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_merchant_service__WEBPACK_IMPORTED_MODULE_5__["MerchantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      AddMerchantDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: AddMerchantDialogComponent,
        selectors: [["app-merchant-dialog"]],
        decls: 14,
        vars: 13,
        consts: [["mat-dialog-title", ""], [4, "ngIf"], [3, "form", "merchant", "formChange"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"]],
        template: function AddMerchantDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AddMerchantDialogComponent_mat_error_4_Template, 3, 3, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AddMerchantDialogComponent_mat_error_5_Template, 3, 3, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-forms-merchant", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("formChange", function AddMerchantDialogComponent_Template_app_forms_merchant_formChange_6_listener($event) {
              return ctx.formMerchant = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-dialog-actions", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddMerchantDialogComponent_Template_button_click_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 7, ctx.data.type === ctx.dialogTypes.create ? "USER.ADD_MERCHANT.TITLE" : "USER.EDIT_MERCHANT.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formInputError);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.formApiError);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("form", ctx.formMerchant)("merchant", ctx.merchantData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 9, ctx.data.type === ctx.dialogTypes.create ? "USER.ADD_MERCHANT.CANCEL" : "USER.EDIT_MERCHANT.CANCEL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 11, ctx.data.type === ctx.dialogTypes.create ? "USER.ADD_MERCHANT.ADD" : "USER.EDIT_MERCHANT.ADD"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _forms_merchant_forms_merchant_directive__WEBPACK_IMPORTED_MODULE_7__["MerchantFormComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWVyY2hhbnQuY29tcG9uZW50LmNzcyJ9 */"]
      });

      var MerchantDialogData = function MerchantDialogData() {
        _classCallCheck(this, MerchantDialogData);
      };
      /***/

    },

    /***/
    "fp1T":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function fp1T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "X6d8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");

      var _c0 = function _c0() {
        return ["/privacy"];
      };

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.currentYear = new Date().getFullYear();
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 11,
        vars: 3,
        consts: [[1, "container"], ["fxLayout", "row", "color", "primary"], ["fxFlex", "100%"], [3, "routerLink"], ["href", "https://www.digit.srl", "target", "_blank"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "DIGIT srl");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("WOM\xA0Platform\xA0\u2014\xA0", ctx.currentYear, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["footer[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  \r\n  background-color: #444558;\r\n  color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: aqua;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCO29CQUNrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLypwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgcGFkZGluZy10b3A6IDFlbTsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ1NTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogYXF1YTtcclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "gACF":
    /*!********************************************************************!*\
      !*** ./src/app/merchant/dashboard/merchant-dashboard.component.ts ***!
      \********************************************************************/

    /*! exports provided: MerchantDashboardComponent */

    /***/
    function gACF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantDashboardComponent", function () {
        return MerchantDashboardComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_services/user.service */
      "VITL");

      var MerchantDashboardComponent = function MerchantDashboardComponent(userService) {
        _classCallCheck(this, MerchantDashboardComponent);

        this.userService = userService;
        userService.getLoggedUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["first"])()).subscribe(function (user) {
          console.log(user);
        });
      };

      MerchantDashboardComponent.ɵfac = function MerchantDashboardComponent_Factory(t) {
        return new (t || MerchantDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
      };

      MerchantDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MerchantDashboardComponent,
        selectors: [["app-merchant"]],
        decls: 2,
        vars: 0,
        consts: [[1, "mat-card"]],
        template: function MerchantDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Merchant\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXJjaGFudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "hQfH":
    /*!***************************************************!*\
      !*** ./src/app/user/add-pos/add-pos.component.ts ***!
      \***************************************************/

    /*! exports provided: AddPosDialogComponent */

    /***/
    function hQfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPosDialogComponent", function () {
        return AddPosDialogComponent;
      });
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../_models */
      "nPby");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "pkbZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _services_pos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_services/pos.service */
      "/vYq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _forms_pos_forms_pos_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../_forms/pos/forms-pos.directive */
      "N5Id");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      function AddPosDialogComponent_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "USER.ADD_POS.INPUT_ERROR"), " ");
        }
      }

      function AddPosDialogComponent_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "USER.ADD_POS.API_ERROR"), " ");
        }
      }

      var AddPosDialogComponent = /*#__PURE__*/function () {
        function AddPosDialogComponent(data, dialogRef, posService) {
          _classCallCheck(this, AddPosDialogComponent);

          this.data = data;
          this.dialogRef = dialogRef;
          this.posService = posService;
        }

        _createClass(AddPosDialogComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            var _this17 = this;

            this.formInputError = this.formPos === undefined;

            if (this.formPos.controls.latitude.value === 0) {
              this.formInputError = true;
              return;
            }

            var pos = new _models__WEBPACK_IMPORTED_MODULE_0__["PosRegistration"]();
            pos.longitude = this.formPos.controls.longitude.value;
            pos.latitude = this.formPos.controls.latitude.value;
            pos.name = this.formPos.controls.name.value;
            pos.ownerMerchantId = this.data; // Optional values

            if (this.formPos.controls.url.value !== '') {
              pos.url = this.formPos.controls.url.value;
            }

            this.posService.register(pos).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (result) {
              console.log(result);

              _this17.dialogRef.close(true);
            }, function (error) {
              _this17.formApiError = true;
              console.log(error);
            });
          }
        }]);

        return AddPosDialogComponent;
      }();

      AddPosDialogComponent.ɵfac = function AddPosDialogComponent_Factory(t) {
        return new (t || AddPosDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_pos_service__WEBPACK_IMPORTED_MODULE_4__["PosService"]));
      };

      AddPosDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: AddPosDialogComponent,
        selectors: [["app-pos-dialog"]],
        decls: 14,
        vars: 12,
        consts: [["mat-dialog-title", ""], [4, "ngIf"], [3, "form", "formChange"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"]],
        template: function AddPosDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddPosDialogComponent_mat_error_4_Template, 3, 3, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddPosDialogComponent_mat_error_5_Template, 3, 3, "mat-error", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "app-forms-pos", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("formChange", function AddPosDialogComponent_Template_app_forms_pos_formChange_6_listener($event) {
              return ctx.formPos = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-dialog-actions", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddPosDialogComponent_Template_button_click_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 6, "USER.ADD_POS.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formInputError);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.formApiError);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("form", ctx.formPos);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, "USER.ADD_POS.CANCEL"));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, "USER.ADD_POS.ADD"));
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _forms_pos_forms_pos_directive__WEBPACK_IMPORTED_MODULE_6__["PosFormComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcG9zLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "izVM":
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /*! exports provided: NavComponent */

    /***/
    function izVM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "Gywy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/user.service */
      "VITL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "aDUM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "XGyc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "wzcP");

      function NavComponent_button_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_button_27_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "NAV.SIGN_OUT"));
        }
      }

      function NavComponent_button_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_button_69_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, "NAV.SIGN_OUT"));
        }
      }

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent(router, translate, userService) {
          var _this18 = this;

          _classCallCheck(this, NavComponent);

          this.router = router;
          this.translate = translate;
          this.userService = userService;
          this.isExpanded = false;
          this.openMenu = false;
          this.isOver = false;
          this.userService.currentUserLogin.subscribe(function (x) {
            return _this18.currentUserLogin = x;
          });
        }

        _createClass(NavComponent, [{
          key: "isLogged",
          get: function get() {
            return this.currentUserLogin != null;
          }
        }, {
          key: "clickMenu",
          value: function clickMenu() {
            this.openMenu = !this.openMenu;
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isExpanded = false;
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.isExpanded = !this.isExpanded;
          }
        }, {
          key: "navigate",
          value: function navigate(link) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.openMenu = false;
                      _context7.next = 3;
                      return this.router.navigate(['/' + link]);

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.userService.logout();
                      _context8.next = 3;
                      return this.router.navigate(['/home']);

                    case 3:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 70,
        vars: 39,
        consts: [[1, "app-toolbar"], ["src", "assets/images/wom-logo-bianco.png"], [1, "example-spacer"], ["mat-button", "", 1, "nav-button", 3, "click"], ["mat-button", "", "class", "nav-button", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon", "nav-icon-button", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_3_listener() {
              return ctx.navigate("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_7_listener() {
              return ctx.navigate("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_11_listener() {
              return ctx.navigate("volunteer");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_15_listener() {
              return ctx.navigate("merchant");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_19_listener() {
              return ctx.navigate("instrument");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_23_listener() {
              return ctx.navigate("user/home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, NavComponent_button_27_Template, 4, 3, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-menu", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_33_listener() {
              return ctx.navigate("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_39_listener() {
              return ctx.navigate("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_45_listener() {
              return ctx.navigate("volunteers");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "person_pin_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_51_listener() {
              return ctx.navigate("merchant");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "store");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_57_listener() {
              return ctx.navigate("instrument");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "timer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_63_listener() {
              return ctx.navigate("user/home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, NavComponent_button_69_Template, 6, 3, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, "NAV.HOME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 17, "NAV.ABOUT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 19, "NAV.VOLUNTEERS"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 21, "NAV.MERCHANT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 23, "NAV.INSTRUMENT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 25, "NAV.PROFILE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 27, "NAV.HOME"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 29, "NAV.ABOUT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 31, "NAV.VOLUNTEERS"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 33, "NAV.MERCHANT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 35, "NAV.INSTRUMENT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](68, 37, "NAV.PROFILE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: [".mat-toolbar[_ngcontent-%COMP%] {\r\n  background-color: #444558;\r\n}\r\nbutton.mat-menu-item[_ngcontent-%COMP%] {\r\n  outline:none;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.app-toolbar[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  position: fixed;\r\n  position: -ms-device-fixed; \r\n  top: 0; \r\n  z-index: 1000; \r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 50%;\r\n}\r\n.nav-button[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n.nav-icon-button[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .nav-button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n@media (min-width: 769px) {\r\n  .nav-icon-button[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsMEJBQTBCLEVBQUUseUJBQXlCO0VBQ3JELE1BQU0sRUFBRSx5Q0FBeUM7RUFDakQsYUFBYSxFQUFFLCtEQUErRDtBQUNoRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDU1ODtcclxufVxyXG5idXR0b24ubWF0LW1lbnUtaXRlbSB7XHJcbiAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uYXBwLXRvb2xiYXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcG9zaXRpb246IC1tcy1kZXZpY2UtZml4ZWQ7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXHJcbiAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cclxuICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLm5hdi1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdi1pY29uLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBSRVNQT05TSVZFICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgLm5hdi1pY29uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "j/75":
    /*!********************************************!*\
      !*** ./src/app/_overlay/overlay.module.ts ***!
      \********************************************/

    /*! exports provided: OverlayService, AppOverlayModule */

    /***/
    function j75(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppOverlayModule", function () {
        return AppOverlayModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "Di2d");
      /* harmony import */


      var _overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./overlay.service */
      "/gxm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "OverlayService", function () {
        return _overlay_service__WEBPACK_IMPORTED_MODULE_2__["OverlayService"];
      });

      var AppOverlayModule = function AppOverlayModule() {
        _classCallCheck(this, AppOverlayModule);
      };

      AppOverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppOverlayModule
      });
      AppOverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        factory: function AppOverlayModule_Factory(t) {
          return new (t || AppOverlayModule)();
        },
        providers: [_overlay_service__WEBPACK_IMPORTED_MODULE_2__["OverlayService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppOverlayModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"]]
        });
      })();
      /***/

    },

    /***/
    "jXya":
    /*!****************************************************************!*\
      !*** ./src/app/_progressSpinner/progress-spinner.component.ts ***!
      \****************************************************************/

    /*! exports provided: ProgressSpinnerComponent */

    /***/
    function jXya(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressSpinnerComponent", function () {
        return ProgressSpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _overlay_overlay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_overlay/overlay.service */
      "/gxm");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "HKvi");

      var _c0 = ["progressSpinnerRef"];

      function ProgressSpinnerComponent_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-spinner", 1);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.color)("diameter", ctx_r1.diameter)("mode", ctx_r1.mode)("strokeWidth", ctx_r1.strokeWidth)("value", ctx_r1.value);
        }
      }

      var ProgressSpinnerComponent = /*#__PURE__*/function () {
        function ProgressSpinnerComponent(vcRef, overlayService) {
          _classCallCheck(this, ProgressSpinnerComponent);

          this.vcRef = vcRef;
          this.overlayService = overlayService;
          this.diameter = 100;
          this.backdropEnabled = true;
          this.positionGloballyCenter = true;
        }

        _createClass(ProgressSpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Config for Overlay Service
            this.progressSpinnerOverlayConfig = {
              hasBackdrop: this.backdropEnabled
            };

            if (this.positionGloballyCenter) {
              this.progressSpinnerOverlayConfig.positionStrategy = this.overlayService.positionGloballyCenter();
            } // Create Overlay for progress spinner


            this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
            if (this.displayProgressSpinner && !this.overlayRef.hasAttached()) {
              this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
            } else if (!this.displayProgressSpinner && this.overlayRef.hasAttached()) {
              this.overlayRef.detach();
            }
          }
        }]);

        return ProgressSpinnerComponent;
      }();

      ProgressSpinnerComponent.ɵfac = function ProgressSpinnerComponent_Factory(t) {
        return new (t || ProgressSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_overlay_overlay_service__WEBPACK_IMPORTED_MODULE_1__["OverlayService"]));
      };

      ProgressSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProgressSpinnerComponent,
        selectors: [["app-progress-spinner"]],
        viewQuery: function ProgressSpinnerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressSpinnerRef = _t.first);
          }
        },
        inputs: {
          color: "color",
          diameter: "diameter",
          mode: "mode",
          strokeWidth: "strokeWidth",
          value: "value",
          backdropEnabled: "backdropEnabled",
          positionGloballyCenter: "positionGloballyCenter",
          displayProgressSpinner: "displayProgressSpinner"
        },
        decls: 2,
        vars: 0,
        consts: [["progressSpinnerRef", ""], [3, "color", "diameter", "mode", "strokeWidth", "value"]],
        template: function ProgressSpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressSpinnerComponent_ng_template_0_Template, 1, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }
        },
        directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "jZhJ":
    /*!*********************************!*\
      !*** ./src/app/_models/user.ts ***!
      \*********************************/

    /*! exports provided: UserRegistrationPayload, User, UserLogin */

    /***/
    function jZhJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationPayload", function () {
        return UserRegistrationPayload;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLogin", function () {
        return UserLogin;
      });
      /**
       * User registration data request
       */


      var UserRegistrationPayload = function UserRegistrationPayload() {
        _classCallCheck(this, UserRegistrationPayload);
      };
      /**
       * User data response
       */


      var User = /*#__PURE__*/function (_UserRegistrationPayl) {
        _inherits(User, _UserRegistrationPayl);

        var _super2 = _createSuper(User);

        function User() {
          _classCallCheck(this, User);

          return _super2.apply(this, arguments);
        }

        _createClass(User, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new User(), json);
          }
        }]);

        return User;
      }(UserRegistrationPayload);
      /**
       * User Login data response
       */


      var UserLogin = /*#__PURE__*/function () {
        function UserLogin() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var verified = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          _classCallCheck(this, UserLogin);

          this.id = id;
          this.token = token;
          this.verified = verified;
        }

        _createClass(UserLogin, null, [{
          key: "fromJson",
          value: function fromJson(json) {
            if (json === null) {
              return null;
            }

            return Object.assign(new UserLogin(), json);
          }
        }]);

        return UserLogin;
      }();
      /***/

    },

    /***/
    "nPby":
    /*!**********************************!*\
      !*** ./src/app/_models/index.ts ***!
      \**********************************/

    /*! exports provided: Merchant, MerchantContainer, Merchants, Pos, PosRegistration, UserRegistrationPayload, User, UserLogin, countryList, Aim, Titles, primaryActivityType */

    /***/
    function nPby(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _merchant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./merchant */
      "86yW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Merchant", function () {
        return _merchant__WEBPACK_IMPORTED_MODULE_0__["Merchant"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MerchantContainer", function () {
        return _merchant__WEBPACK_IMPORTED_MODULE_0__["MerchantContainer"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Merchants", function () {
        return _merchant__WEBPACK_IMPORTED_MODULE_0__["Merchants"];
      });
      /* harmony import */


      var _pos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pos */
      "bW1R");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Pos", function () {
        return _pos__WEBPACK_IMPORTED_MODULE_1__["Pos"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PosRegistration", function () {
        return _pos__WEBPACK_IMPORTED_MODULE_1__["PosRegistration"];
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user */
      "jZhJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserRegistrationPayload", function () {
        return _user__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationPayload"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return _user__WEBPACK_IMPORTED_MODULE_2__["User"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UserLogin", function () {
        return _user__WEBPACK_IMPORTED_MODULE_2__["UserLogin"];
      });
      /* harmony import */


      var _countryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./countryList */
      "ZrHR");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "countryList", function () {
        return _countryList__WEBPACK_IMPORTED_MODULE_3__["countryList"];
      });
      /* harmony import */


      var _aim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./aim */
      "2UKG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Aim", function () {
        return _aim__WEBPACK_IMPORTED_MODULE_4__["Aim"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Titles", function () {
        return _aim__WEBPACK_IMPORTED_MODULE_4__["Titles"];
      });
      /* harmony import */


      var _primaryActivityType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./primaryActivityType */
      "bBj/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "primaryActivityType", function () {
        return _primaryActivityType__WEBPACK_IMPORTED_MODULE_5__["primaryActivityType"];
      });
      /***/

    },

    /***/
    "p3Fh":
    /*!****************************************!*\
      !*** ./src/app/_helpers/auth.guard.ts ***!
      \****************************************/

    /*! exports provided: AuthGuard */

    /***/
    function p3Fh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services */
      "J9tS");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/user.service */
      "VITL");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService, userService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
          this.userService = userService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUserLogin = this.userService.currentUserLoginValue;

            if (currentUserLogin) {
              var verified = true; // check if user has validated email

              if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
                verified = currentUserLogin.verified;
              }

              if (state.url.includes('not-verified')) {
                if (verified) {
                  this.router.navigate(['user/home']).then(function (r) {});
                }
              } else if (!verified) {
                this.router.navigate(['/user/not-verified'], {
                  queryParams: {
                    returnUrl: state.url
                  }
                }).then(function (r) {});
              }

              return true;
            }

            if (state.url === '/merchant' || state.url === '/user/home') {
              this.router.navigate(['/authentication/signin'], {
                queryParams: {
                  returnUrl: state.url
                }
              }).then(function (r) {});
              return false;
            } // not logged in so redirect to login page with the return url


            this.router.navigate(['/'], {
              queryParams: {
                returnUrl: state.url
              }
            }).then(function (r) {});
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "r04s":
    /*!************************************************!*\
      !*** ./src/app/merchant/merchant.component.ts ***!
      \************************************************/

    /*! exports provided: MerchantComponent */

    /***/
    function r04s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantComponent", function () {
        return MerchantComponent;
      });
      /* harmony import */


      var _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/google-maps */
      "C7Gb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "X6d8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      function MerchantComponent_map_marker_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "map-marker", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapClick", function MerchantComponent_map_marker_11_Template_map_marker_mapClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var marker_r1 = ctx.$implicit;

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.openInfo(_r2, marker_r1.info);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var marker_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", marker_r1.position)("label", marker_r1.label)("title", marker_r1.title)("options", marker_r1.options);
        }
      }

      var MerchantComponent = /*#__PURE__*/function () {
        function MerchantComponent() {
          _classCallCheck(this, MerchantComponent);

          this.infoContent = '';
          this.markers = [];
          this.zoom = 12;
          this.options = {
            mapTypeId: 'hybrid',
            clickableIcons: true,
            zoomControl: true,
            scrollwheel: true,
            disableDoubleClickZoom: false,
            maxZoom: 15,
            minZoom: 3
          };
        }

        _createClass(MerchantComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            navigator.geolocation.getCurrentPosition(function (position) {
              _this19.center = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
            }, function () {
              _this19.center = {
                lat: 43.83833794129076,
                lng: 13.02318609717848
              };
            });
            this.addMarker();
            this.addMarker();
            this.addMarker();
          }
        }, {
          key: "zoomIn",
          value: function zoomIn() {
            if (this.zoom < this.options.maxZoom) {
              this.zoom++;
            }
          }
        }, {
          key: "zoomOut",
          value: function zoomOut() {
            if (this.zoom > this.options.minZoom) {
              this.zoom--;
            }
          }
        }, {
          key: "click",
          value: function click(event) {
            console.log(event);
          }
        }, {
          key: "logCenter",
          value: function logCenter() {
            console.log(JSON.stringify(this.map.getCenter()));
          }
        }, {
          key: "addMarker",
          value: function addMarker() {
            this.markers.push({
              position: {
                lat: 43.83833794129076 + (Math.random() - 0.5) * 2 / 10,
                lng: 13.02318609717848 + (Math.random() - 0.5) * 2 / 10
              },
              // label: {
              //   color: 'red',
              //   text: 'Marker label ' + (this.markers.length + 1),
              // },
              title: 'Marker title ' + (this.markers.length + 1),
              info: 'Marker info ' + (this.markers.length + 1),
              options: {
                animation: google.maps.Animation.DROP
              }
            });
          }
        }, {
          key: "openInfo",
          value: function openInfo(marker, content) {
            this.infoContent = content;
            this.infoWindow.open(marker);
          }
        }]);

        return MerchantComponent;
      }();

      MerchantComponent.ɵfac = function MerchantComponent_Factory(t) {
        return new (t || MerchantComponent)();
      };

      MerchantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MerchantComponent,
        selectors: [["app-merchant"]],
        viewQuery: function MerchantComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMap"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["MapInfoWindow"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t.first);
          }
        },
        decls: 25,
        vars: 20,
        consts: [[1, "container"], [1, "page-title"], ["fxLayout", "row wrap", "fxLayoutGap", "20px grid"], ["fxFlex", "100%"], [1, "page-secondary-title", 3, "innerHTML"], [3, "innerHTML"], ["fxFlex", "100%", "height", "500px", "width", "100%", 3, "zoom", "center", "options", "mapClick"], [3, "position", "label", "title", "options", "mapClick", 4, "ngFor", "ngForOf"], ["fxFlex", "50%", "fxFlex.xs", "100%"], ["href", "https://play.google.com/store/apps/details?id=social.wom.pos", "title", "Download WOM POS from Google Play"], ["src", "assets/images/badge_google_play.png", "alt", "Google Play", 2, "max-width", "100%"], ["href", "https://apps.apple.com/it/app/wom-pos/id1468252634", "title", "Download WOM POS from App Store"], ["src", "assets/images/badge_app_store.png", "alt", "Apple App Store", 2, "max-width", "100%"], [3, "position", "label", "title", "options", "mapClick"], ["markerElem", "mapMarker"]],
        template: function MerchantComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "google-map", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mapClick", function MerchantComponent_Template_google_map_mapClick_10_listener($event) {
              return ctx.click($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MerchantComponent_map_marker_11_Template, 2, 4, "map-marker", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "map-info-window");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, "MERCHANT.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, "VOLUNTEER.SECTION_A.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 14, "VOLUNTEER.SECTION_A.A"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zoom", ctx.zoom)("center", ctx.center)("options", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.markers);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.infoContent);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 16, "MERCHANT.SECTION_B.TITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 18, "MERCHANT.SECTION_B.A"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["GoogleMap"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["MapInfoWindow"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_0__["MapMarker"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXJjaGFudC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "umax":
    /*!***********************************************************!*\
      !*** ./src/app/authentication/signup/signup.component.ts ***!
      \***********************************************************/

    /*! exports provided: MerchantSignUpComponent */

    /***/
    function umax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantSignUpComponent", function () {
        return MerchantSignUpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "Gywy");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_models */
      "nPby");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "6JL0");
      /* harmony import */


      var _signup_login_error_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./signup-login-error.directive */
      "yHGR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "pkbZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../_services/user.service */
      "VITL");
      /* harmony import */


      var _services_merchant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../_services/merchant.service */
      "W/7B");
      /* harmony import */


      var _services_pos_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../_services/pos.service */
      "/vYq");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/stepper */
      "V0t2");
      /* harmony import */


      var _forms_user_forms_user_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../_forms/user/forms-user.directive */
      "APwk");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "23B3");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/divider */
      "lSNd");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _progressSpinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../_progressSpinner/progress-spinner.component */
      "jXya");
      /* harmony import */


      var _forms_merchant_forms_merchant_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../_forms/merchant/forms-merchant.directive */
      "Q+FD");
      /* harmony import */


      var _forms_pos_forms_pos_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../_forms/pos/forms-pos.directive */
      "N5Id");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      function MerchantSignUpComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "SIGN_UP.TIMEOUT_ERROR"), " ");
        }
      }

      function MerchantSignUpComponent_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "SIGN_UP.FORM_ERROR"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, ctx_r1.errorMessage), " ");
        }
      }

      function MerchantSignUpComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "SIGN_UP.REPRESENTATIVE.STEPPER_TITLE"));
        }
      }

      function MerchantSignUpComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "SIGN_UP.MERCHANT.STEPPER_TITLE"));
        }
      }

      function MerchantSignUpComponent_app_forms_merchant_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-forms-merchant", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("formChange", function MerchantSignUpComponent_app_forms_merchant_24_Template_app_forms_merchant_formChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r9.formMerchant = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r5.formMerchant)("merchant", null);
        }
      }

      function MerchantSignUpComponent_mat_checkbox_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MerchantSignUpComponent_mat_checkbox_26_Template_mat_checkbox_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r11.requirePosRegistration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.requirePosRegistration);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "SIGN_UP.POS.CHECKBOX"), " ");
        }
      }

      function MerchantSignUpComponent_app_forms_pos_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-forms-pos", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("formChange", function MerchantSignUpComponent_app_forms_pos_27_Template_app_forms_pos_formChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r13.formPos = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r7.formPos);
        }
      }

      function MerchantSignUpComponent_ng_template_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, "SIGN_UP.DONE"));
        }
      }

      var _c0 = function _c0() {
        return ["/authentication/signin"];
      };

      var MerchantSignUpComponent = /*#__PURE__*/function () {
        function MerchantSignUpComponent(dialog, fb, route, router, userService, merchantService, posService) {
          var _this20 = this;

          _classCallCheck(this, MerchantSignUpComponent);

          this.dialog = dialog;
          this.fb = fb;
          this.route = route;
          this.router = router;
          this.userService = userService;
          this.merchantService = merchantService;
          this.posService = posService;
          this.userRegistered = false;
          this.userSignedIn = false; // Spinner

          this.color = 'primary';
          this.mode = 'indeterminate';
          this.value = 50;
          this.displayProgressSpinner = false;

          this.showProgressSpinner = function () {
            _this20.displayProgressSpinner = true;
            setTimeout(function () {
              if (!_this20.signupComplete) {
                _this20.displayProgressSpinner = false;
                _this20.signupInvalid = true;
                _this20.signupTimeout = true;
              }
            }, 10000);
          };

          this.termsAndConditionsText = 'Insert t&c text here';
        }

        _createClass(MerchantSignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
                      this.formSubmit = this.fb.group({
                        termsConditionsCheckbox: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue],
                        tcInfo: [{
                          value: this.termsAndConditionsText,
                          disabled: true
                        }, !_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                      });

                    case 2:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this21 = this;

            this.errorMessage = '';
            this.signupInvalid = false;
            this.signupComplete = false;
            this.showProgressSpinner();
            var merchantFormValid = this.requireMerchantRegistration ? this.formMerchant !== undefined && this.formMerchant.valid : true;
            var posFormValid = this.requirePosRegistration ? this.formPos !== undefined && this.formPos.valid : true;

            if (!this.form.valid || !this.formSubmit.valid || !merchantFormValid || !posFormValid) {
              this.signupInvalid = true;
              this.signupComplete = true;
              this.displayProgressSpinner = false;
              return;
            }

            var userData = new _models__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationPayload"]();
            userData.email = this.form.controls.email.value;
            userData.name = this.form.controls.firstName.value;
            userData.password = this.form.controls.password.value;
            userData.surname = this.form.controls.lastName.value;

            if (this.userRegistered) {
              this.logIn(userData.email, userData.password);
              return;
            }

            this.userService.register(userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (result) {
              if (result.id !== null) {
                console.log(result);
                _this21.userRegistered = true;

                _this21.logIn(userData.email, userData.password);
              }
            }, function (error) {
              if (error.status === 422) {
                _this21.errorMessage = 'SIGN_UP.EMAIL_EXISTS_ERROR';
              } else {
                _this21.errorMessage = 'SIGN_UP.GENERIC_ERROR';
              }

              _this21.signupInvalid = true;
              _this21.signupComplete = true;
              _this21.displayProgressSpinner = false;
              console.log(error);
            });
          }
        }, {
          key: "registerMerchant",
          value: function registerMerchant() {
            var _this22 = this;

            var merchant = new _models__WEBPACK_IMPORTED_MODULE_2__["Merchant"]();
            merchant.fiscalCode = this.formMerchant.controls.fiscalCode.value;
            merchant.country = this.formMerchant.controls.country.value;
            merchant.city = this.formMerchant.controls.city.value;
            merchant.zipCode = this.formMerchant.controls.cap.value;
            merchant.address = this.formMerchant.controls.address.value;
            merchant.primaryActivity = this.formMerchant.controls.primaryActivity.value;
            merchant.name = this.formMerchant.controls.name.value; // Optional values

            if (this.formMerchant.controls.url.value !== '') {
              merchant.url = this.formMerchant.controls.url.value;
            }

            if (this.formMerchant.controls.description.value !== '') {
              merchant.description = this.formMerchant.controls.description.value;
            }

            this.merchantService.register(merchant).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (result) {
              console.log(result);

              if (_this22.requirePosRegistration) {
                _this22.registerPos(result.id);
              } else {
                _this22.displayProgressSpinner = false;
                _this22.signupComplete = true;

                _this22.router.navigate(['/user/home']).then(function (r) {
                  return r;
                });
              }
            }, function (error) {
              if (error.status === 422) {
                _this22.errorMessage = 'SIGN_UP.FISCAL_CODE_EXISTS_ERROR';
              } else {
                _this22.errorMessage = 'SIGN_UP.GENERIC_ERROR';
              }

              _this22.signupInvalid = true;
              _this22.displayProgressSpinner = false;
              _this22.signupComplete = true;
              console.log(error);
            });
          }
        }, {
          key: "registerPos",
          value: function registerPos(merchantId) {
            var _this23 = this;

            var pos = new _models__WEBPACK_IMPORTED_MODULE_2__["PosRegistration"]();
            pos.longitude = this.formPos.controls.longitude.value;
            pos.latitude = this.formPos.controls.latitude.value;
            pos.name = this.formPos.controls.name.value;
            pos.ownerMerchantId = merchantId; // Optional values

            if (this.formPos.controls.url.value !== '') {
              pos.url = this.formPos.controls.url.value;
            }

            this.posService.register(pos).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (result) {
              console.log(result);
              _this23.displayProgressSpinner = false;
              _this23.signupComplete = true;

              _this23.router.navigate(['/user/home']).then(function (r) {
                return r;
              });
            }, function (error) {
              _this23.signupInvalid = true;
              _this23.errorMessage = 'SIGN_UP.GENERIC_ERROR';
              _this23.displayProgressSpinner = false;
              _this23.signupComplete = true;
              console.log(error);
            });
          }
        }, {
          key: "logIn",
          value: function logIn(username, password) {
            var _this24 = this;

            if (this.userSignedIn) {
              console.log('user already signed in');

              if (this.requireMerchantRegistration) {
                this.registerMerchant();
              } else {
                this.displayProgressSpinner = false;
                this.signupComplete = true;
                this.router.navigate(['/user/home']).then(function (r) {
                  return r;
                });
              }

              return;
            }

            this.userService.login(username, password).pipe().subscribe(function (result) {
              console.log(result);

              _this24.userService.getLoggedUser().pipe().subscribe(function (user) {
                console.log('user');
                _this24.userSignedIn = true;

                if (_this24.requireMerchantRegistration) {
                  _this24.registerMerchant();
                } else {
                  _this24.displayProgressSpinner = false;
                  _this24.signupComplete = true;

                  _this24.router.navigate(['/user/home']).then(function (r) {
                    return r;
                  });
                }
              }, function (error) {
                _this24.displayProgressSpinner = false;
                _this24.signupComplete = true;
                console.log(error);
              });
            }, function (error) {
              _this24.signupInvalid = true;
              _this24.errorMessage = error.title;
              _this24.displayProgressSpinner = false;
              _this24.signupComplete = true;
              console.log(error);

              var dialogRef = _this24.dialog.open(_signup_login_error_directive__WEBPACK_IMPORTED_MODULE_4__["LogInErrorDialogComponent"]);

              dialogRef.afterClosed().subscribe(function (result) {
                _this24.router.navigate(['/authentication/signin']).then(function (r) {
                  return r;
                });
              });
            });
          }
        }, {
          key: "tcLinkClicked",
          value: function tcLinkClicked() {
            this.router.navigate(['/privacy']).then(function (r) {
              return r;
            });
          }
        }]);

        return MerchantSignUpComponent;
      }();

      MerchantSignUpComponent.ɵfac = function MerchantSignUpComponent_Factory(t) {
        return new (t || MerchantSignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_merchant_service__WEBPACK_IMPORTED_MODULE_9__["MerchantService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_pos_service__WEBPACK_IMPORTED_MODULE_10__["PosService"]));
      };

      MerchantSignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: MerchantSignUpComponent,
        selectors: [["app-merchant-signup"]],
        decls: 63,
        vars: 55,
        consts: [[3, "innerHTML"], [3, "routerLink"], [4, "ngIf"], ["linear", ""], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], [3, "form", "disabled", "formChange"], [3, "stepControl", "optional"], [1, "mat-checkbox-merchant", 3, "ngModel", "ngModelChange"], [3, "form", "merchant", "formChange", 4, "ngIf"], [3, "inset"], ["class", "mat-checkbox-merchant", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "form", "formChange", 4, "ngIf"], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""], [3, "formGroup"], ["matInput", "", "formControlName", "tcInfo", 1, "form-subgroup"], ["appearance", "example-full-width", 2, "height", "10px"], ["matInput", "", "formControlName", "termsConditionsCheckbox", 3, "hidden"], ["formControlName", "termsConditionsCheckbox", 1, "example-margin", 3, "checked"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "example-margin", 3, "color", "mode", "value", "backdropEnabled", "positionGloballyCenter", "displayProgressSpinner"], [3, "form", "merchant", "formChange"], [3, "form", "formChange"]],
        template: function MerchantSignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, MerchantSignUpComponent_mat_error_11_Template, 3, 3, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, MerchantSignUpComponent_mat_error_12_Template, 6, 6, "mat-error", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-horizontal-stepper", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, MerchantSignUpComponent_ng_template_16_Template, 2, 3, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "app-forms-user", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("formChange", function MerchantSignUpComponent_Template_app_forms_user_formChange_17_listener($event) {
              return ctx.form = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-step", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, MerchantSignUpComponent_ng_template_19_Template, 2, 3, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-checkbox", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MerchantSignUpComponent_Template_mat_checkbox_ngModelChange_20_listener($event) {
              return ctx.requireMerchantRegistration = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, MerchantSignUpComponent_app_forms_merchant_24_Template, 1, 2, "app-forms-merchant", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "mat-divider", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, MerchantSignUpComponent_mat_checkbox_26_Template, 4, 4, "mat-checkbox", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, MerchantSignUpComponent_app_forms_pos_27_Template, 1, 1, "app-forms-pos", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, MerchantSignUpComponent_ng_template_37_Template, 2, 3, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-checkbox", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "mat-divider", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MerchantSignUpComponent_Template_button_click_59_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "app-progress-spinner", 22);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 34, "SIGN_UP.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 36, "SIGN_UP.SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](54, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 38, "SIGN_UP.BTN_ALREADY_REGISTERED"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupTimeout);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupInvalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx.form)("disabled", ctx.userRegistered);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.formMerchant)("optional", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.requireMerchantRegistration);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 40, "SIGN_UP.MERCHANT.CHECKBOX"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requireMerchantRegistration);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requireMerchantRegistration);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.requirePosRegistration && ctx.requireMerchantRegistration);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 42, "SIGN_UP.BACK"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 44, "SIGN_UP.NEXT"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("stepControl", ctx.formSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 46, "SIGN_UP.TERMS_CONDITIONS_TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 48, "SIGN_UP.TC_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.termsConditionsChecked);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 50, "SIGN_UP.TERMS_CONDITIONS"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inset", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 52, "SIGN_UP.BTN_SIGN_UP"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("backdropEnabled", true)("positionGloballyCenter", true)("displayProgressSpinner", ctx.displayProgressSpinner);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepLabel"], _forms_user_forms_user_directive__WEBPACK_IMPORTED_MODULE_14__["UserFormComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"], _progressSpinner_progress_spinner_component__WEBPACK_IMPORTED_MODULE_20__["ProgressSpinnerComponent"], _forms_merchant_forms_merchant_directive__WEBPACK_IMPORTED_MODULE_21__["MerchantFormComponent"], _forms_pos_forms_pos_directive__WEBPACK_IMPORTED_MODULE_22__["PosFormComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslatePipe"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\r\n  max-width: 600px;\r\n  margin: 2em auto;\r\n  text-align: left;\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.form-subgroup[_ngcontent-%COMP%] {\r\n  border: solid 2px #e0e5ef;\r\n  padding: 0.5em;\r\n  margin: 0 0 0.5em 0;\r\n  border-radius: 15px;\r\n  resize: none;\r\n  height: 100px;\r\n  width: calc(100% - 1em);\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  font-size: 0.9em;\r\n}\r\n\r\n.mat-divider[_ngcontent-%COMP%] {\r\n  margin-bottom: 10px !important;\r\n}\r\n\r\n.mat-checkbox-merchant[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLXN1Ymdyb3VwIHtcclxuICBib3JkZXI6IHNvbGlkIDJweCAjZTBlNWVmO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIG1hcmdpbjogMCAwIDAuNWVtIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMWVtKTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4ubWF0LWRpdmlkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jaGVja2JveC1tZXJjaGFudCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "wAdQ":
    /*!**********************************************************!*\
      !*** ./src/app/pageNotFound/page-not-found.component.ts ***!
      \**********************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function wAdQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");

      var PageNotFoundComponent = function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      };

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 17,
        vars: 0,
        consts: [[1, "page_404"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "col-sm-10", "col-sm-offset-1", "text-center"], [1, "four_zero_four_bg"], [1, "text-center"], [1, "contant_box_404"], [1, "h2"], ["href", "/home", 1, "link_404"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Look like you're lost ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "the page you are looking for not available!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Go Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
        styles: [".page_404[_ngcontent-%COMP%]{\n    padding:40px 0;\n    background:#fff;\n    font-family: 'Arvo', serif;\n}\n\n\n.page_404[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width:100%;\n}\n\n\n.four_zero_four_bg[_ngcontent-%COMP%]{\n\n    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);\n    height: 400px;\n    background-position: center;\n}\n\n\n.four_zero_four_bg[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size:80px;\n}\n\n\n.four_zero_four_bg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-size:80px;\n}\n\n\n.link_404[_ngcontent-%COMP%]{\n    color: #fff!important;\n    padding: 10px 20px;\n    background: #39ac31;\n    margin: 20px 0;\n    display: inline-block;\n}\n\n\n.contant_box_404[_ngcontent-%COMP%]{\n    margin-top:-50px;\n}\n\n\n.text-center[_ngcontent-%COMP%] {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzt3QkFFd0I7OztBQUd4QjtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7O0lBRUksK0ZBQStGO0lBQy9GLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7OztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT1cbiAgICA0MDQgcGFnZVxuPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbi5wYWdlXzQwNHtcbiAgICBwYWRkaW5nOjQwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdBcnZvJywgc2VyaWY7XG59XG5cbi5wYWdlXzQwNCAgaW1ne1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5mb3VyX3plcm9fZm91cl9iZ3tcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2Nkbi5kcmliYmJsZS5jb20vdXNlcnMvMjg1NDc1L3NjcmVlbnNob3RzLzIwODMwODYvZHJpYmJibGVfMS5naWYpO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5cbi5mb3VyX3plcm9fZm91cl9iZyBoMXtcbiAgICBmb250LXNpemU6ODBweDtcbn1cblxuLmZvdXJfemVyb19mb3VyX2JnIGgze1xuICAgIGZvbnQtc2l6ZTo4MHB4O1xufVxuXG4ubGlua180MDR7XG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzlhYzMxO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jb250YW50X2JveF80MDR7XG4gICAgbWFyZ2luLXRvcDotNTBweDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "wn6f":
    /*!*******************************!*\
      !*** ./src/app/home/index.ts ***!
      \*******************************/

    /*! exports provided: HomeComponent */

    /***/
    function wn6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.component */
      "9vUh");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
      });
      /***/

    },

    /***/
    "xEFJ":
    /*!*************************************************************************************!*\
      !*** ./src/app/authentication/requestNewPassword/request-new-password.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: RequestNewPasswordComponent */

    /***/
    function xEFJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestNewPasswordComponent", function () {
        return RequestNewPasswordComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_services/user.service */
      "VITL");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");

      function RequestNewPasswordComponent_mat_card_content_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "REQUEST_NEW_PASSWORD.REQUEST_SENT"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "REQUEST_NEW_PASSWORD.HOME"));
        }
      }

      function RequestNewPasswordComponent_mat_card_content_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RequestNewPasswordComponent_mat_card_content_6_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.requestPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, "SIGN_UP.REPRESENTATIVE.EMAIL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 5, "REQUEST_NEW_PASSWORD.REQUEST_BUTTON"));
        }
      }

      var RequestNewPasswordComponent = /*#__PURE__*/function () {
        function RequestNewPasswordComponent(userService, fb) {
          _classCallCheck(this, RequestNewPasswordComponent);

          this.userService = userService;
          this.fb = fb;
          this.requestSent = false;
        }

        _createClass(RequestNewPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]
            });
          }
        }, {
          key: "requestPassword",
          value: function requestPassword() {
            var _this25 = this;

            if (!this.form.valid) {
              console.log('input not valid');
              return;
            }

            if (this.form.controls.email.value === null) {
              console.log('email not inserted');
              return;
            }

            this.userService.passwordResetRequest(this.form.controls.email.value).pipe().subscribe(function (response) {
              _this25.requestSent = true;
              console.log(response);
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return RequestNewPasswordComponent;
      }();

      RequestNewPasswordComponent.ɵfac = function RequestNewPasswordComponent_Factory(t) {
        return new (t || RequestNewPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]));
      };

      RequestNewPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RequestNewPasswordComponent,
        selectors: [["app-request-new-password"]],
        decls: 7,
        vars: 5,
        consts: [[4, "ngIf"], ["href", "/home"], [3, "formGroup"], [1, "full-width"], [2, "width", "100%"], ["matInput", "", "type", "email", "formControlName", "email", "required", "", 3, "placeholder"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function RequestNewPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RequestNewPasswordComponent_mat_card_content_5_Template, 6, 6, "mat-card-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RequestNewPasswordComponent_mat_card_content_6_Template, 13, 7, "mat-card-content", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, "REQUEST_NEW_PASSWORD.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.requestSent);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.requestSent);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    max-width: 600px;\n    margin: 2em auto;\n    text-align: center;\n}\n\n.label[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block !important;\n}\n\n.full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.text-spacing[_ngcontent-%COMP%] {\n    padding: 0 1em 0 1em;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtbmV3LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoicmVxdWVzdC1uZXctcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMmVtIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRleHQtc3BhY2luZyB7XG4gICAgcGFkZGluZzogMCAxZW0gMCAxZW07XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "yHGR":
    /*!***********************************************************************!*\
      !*** ./src/app/authentication/signup/signup-login-error.directive.ts ***!
      \***********************************************************************/

    /*! exports provided: LogInErrorDialogComponent */

    /***/
    function yHGR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogInErrorDialogComponent", function () {
        return LogInErrorDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "pkbZ");

      var LogInErrorDialogComponent = function LogInErrorDialogComponent(dialogRef) {
        _classCallCheck(this, LogInErrorDialogComponent);

        this.dialogRef = dialogRef;
      };

      LogInErrorDialogComponent.ɵfac = function LogInErrorDialogComponent_Factory(t) {
        return new (t || LogInErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      LogInErrorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogInErrorDialogComponent,
        selectors: [["app-signup-login-error-dialog"]],
        decls: 0,
        vars: 0,
        template: function LogInErrorDialogComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtbG9naW4tZXJyb3IuZGlyZWN0aXZlLmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "yMLD":
    /*!***************************************************************************!*\
      !*** ./src/app/authentication/reset-password/reset-password.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function yMLD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "P2P6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../_services/user.service */
      "VITL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "4i9L");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "L/ns");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "dlgS");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "GpQZ");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Cq4z");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "zjsz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "08HT");

      function ResetPasswordComponent_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SIGN_UP.REPRESENTATIVE.EXPIRED_LINK_ERROR"), " ");
        }
      }

      function ResetPasswordComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "SIGN_UP.REPRESENTATIVE.PASSWORD_NO_MATCH_ERROR"), " ");
        }
      }

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(userService, route, fb, snackBar, router, translate) {
          _classCallCheck(this, ResetPasswordComponent);

          this.userService = userService;
          this.route = route;
          this.fb = fb;
          this.snackBar = snackBar;
          this.router = router;
          this.translate = translate;
          this.passwordNoMatch = false;
          this.expiredLink = false;

          if (userService.currentUserValue !== null) {
            userService.logout();
          }
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.route.queryParams.subscribe(function (params) {
              _this26.userId = params.userId;
              _this26.token = params.token;
            });
            this.user = this.userService.currentUserValue;
            console.log(this.userId);
            this.form = this.fb.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]],
              passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]]
            });
          }
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            var _this27 = this;

            this.expiredLink = false;

            if (!this.form.valid || this.form.controls === null) {
              return;
            }

            if (!this.checkPasswords()) {
              this.passwordNoMatch = true;
              return;
            }

            var pswd = this.form.controls.password.value;
            this.userService.passwordReset(this.userId, this.token, pswd).pipe().subscribe(function (response) {
              var snackTitle = _this27.translate.instant('RESET_PASSWORD.SNACKBAR_SUCCESS');

              var snackAction = _this27.translate.instant('RESET_PASSWORD.SNACKBAR_HOME');

              var snackBarRef = _this27.snackBar.open(snackTitle, snackAction, {
                duration: 5000
              });

              snackBarRef.onAction().subscribe(function () {
                _this27.router.navigate(['/authentication/signin']).then(function (r) {
                  return r;
                });
              });
              snackBarRef.afterDismissed().subscribe(function () {
                _this27.router.navigate(['/authentication/signin']).then(function (r) {
                  return r;
                });
              });
              console.log('password reset success');
            }, function (error) {
              // link already used if 404
              _this27.expiredLink = true;
              console.log('error: ', error);
            });
          }
        }, {
          key: "checkPasswords",
          value: function checkPasswords() {
            if (this.form.controls.password === null || this.form.controls.passwordRepeat === null) {
              return false;
            }

            return this.form.controls.password.value === this.form.controls.passwordRepeat.value;
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 34,
        vars: 23,
        consts: [[3, "formGroup"], [1, "full-width"], [2, "width", "100%"], ["matInput", "", "minlength", "8", "type", "password", "formControlName", "password", "required", "", 3, "placeholder"], ["password", ""], ["align", "start"], ["matInput", "", "type", "password", "minlength", "8", "formControlName", "passwordRepeat", "required", "", 3, "placeholder"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-hint", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ResetPasswordComponent_mat_error_28_Template, 3, 3, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ResetPasswordComponent_mat_error_29_Template, 3, 3, "mat-error", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_31_listener() {
              return ctx.resetPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, "RESET_PASSWORD.TITLE"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 13, "SIGN_UP.REPRESENTATIVE.PASSWORD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _r0.value.length, " / ", _r0.minLength, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 15, "SIGN_UP.REPRESENTATIVE.PASSWORD_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 17, "SIGN_UP.REPRESENTATIVE.REPEAT_PASSWORD"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 19, "SIGN_UP.REPRESENTATIVE.PASSWORD_ERROR"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.expiredLink);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordNoMatch);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 21, "RESET_PASSWORD.RESET_BUTTON"));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["mat-card[_ngcontent-%COMP%] {\n    max-width: 600px;\n    margin: 2em auto;\n    text-align: center;\n}\n\n.label[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block !important;\n}\n\n.full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n\n.text-spacing[_ngcontent-%COMP%] {\n    padding: 0 1em 0 1em;\n}\n\nbutton[_ngcontent-%COMP%] {\n    margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMmVtIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRleHQtc3BhY2luZyB7XG4gICAgcGFkZGluZzogMCAxZW0gMCAxZW07XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "iBjH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "I2fu");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map