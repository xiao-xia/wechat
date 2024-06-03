(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/seckill/seckill"],{

/***/ 282:
/*!***************************************************************************!*\
  !*** B:/bdwwww/bdwww/wechat/main.js?{"page":"pages%2Fseckill%2Fseckill"} ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _seckill = _interopRequireDefault(__webpack_require__(/*! ./pages/seckill/seckill.vue */ 283));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_seckill.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 283:
/*!********************************************************!*\
  !*** B:/bdwwww/bdwww/wechat/pages/seckill/seckill.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seckill.vue?vue&type=template&id=63a05534& */ 284);
/* harmony import */ var _seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seckill.vue?vue&type=script&lang=js& */ 286);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _seckill_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seckill.vue?vue&type=style&index=0&lang=scss& */ 288);
/* harmony import */ var _aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 40);

var renderjs





/* normalize component */

var component = Object(_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__["render"],
  _seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/seckill/seckill.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 284:
/*!***************************************************************************************!*\
  !*** B:/bdwwww/bdwww/wechat/pages/seckill/seckill.vue?vue&type=template&id=63a05534& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./seckill.vue?vue&type=template&id=63a05534& */ 285);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_template_id_63a05534___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 285:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!B:/bdwwww/bdwww/wechat/pages/seckill/seckill.vue?vue&type=template&id=63a05534& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.showPage
    ? _vm.__map(_vm.barList, function (secktime, index) {
        var $orig = _vm.__get_orig(secktime)
        var m0 = _vm.getHour(secktime.startTime)
        var m1 = _vm.getMinute(secktime.startTime)
        return {
          $orig: $orig,
          m0: m0,
          m1: m1,
        }
      })
    : null
  var g0 = _vm.showPage ? _vm.productlist.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 286:
/*!*********************************************************************************!*\
  !*** B:/bdwwww/bdwww/wechat/pages/seckill/seckill.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aaa_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./seckill.vue?vue&type=script&lang=js& */ 287);
/* harmony import */ var _aaa_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aaa_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _aaa_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _aaa_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_aaa_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 287:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!B:/bdwwww/bdwww/wechat/pages/seckill/seckill.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 33);
var _index3 = __webpack_require__(/*! ../../API/skeillArr/index.js */ 50);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  data: function data() {
    return {
      //isActive:false,
      seckillStatus: '',
      isFade: false,
      showPage: false,
      seckillMsg: '',
      timeHour: '00',
      timeMinute: '00',
      timeSecond: '00',
      timeId: '',
      skebur: 0,
      timerEndTime: '',
      loadingModal: false,
      percentage: 50,
      seckillTimeIds: '',
      seckillId: '',
      endTime: '',
      barList: [{
        seckillTime: '11:00',
        rushbuy: '抢购中'
      }, {
        seckillTime: '15:00',
        rushbuy: '即将开始'
      }, {
        seckillTime: '19:00',
        rushbuy: '即将开始'
      }],
      productlist: [],
      finalTime: ''
    };
  },
  computed: _objectSpread({}, (0, _vuex.mapState)(['token'])),
  onLoad: function onLoad(options) {
    this.seckillMsg = options.state;
    console.log(this.seckillMsg);
  },
  onShow: function onShow() {
    this.getSkeill();
  },
  onHide: function onHide() {},
  methods: {
    skeillbar: function skeillbar(secktime) {
      console.log(secktime);
      this.barList.map(function (item) {
        item.isActive = false;
      });
      secktime.isActive = true;
      if (secktime.seckillStatus == '未开始') {
        this.isFade = false;
        this.seckillMsg = '距开始';
        this.finalTime = secktime.startTime;
        this.setTimer();
      } else if (secktime.seckillStatus == '抢购中') {
        this.isFade = false;
        this.seckillMsg = '距结束';
        this.finalTime = secktime.endTime;
        this.setTimer();
      } else {
        this.seckillMsg = '秒杀已结束';
        this.isFade = true;
        clearInterval(this.timeId);
        this.timeHour = '00';
        this.timeMinute = '00';
        this.timeSecond = '00';
      }
      /*this.timerEndTime = secktime.endTime;
      this.setTimer()*/
      this.skebur = secktime.id;
      console.log(this.skebur);
      this.getSkeillgoods(this.seckillId, secktime.id);
    },
    /*detailshere(goodsId){
    	uni.navigateTo({
    		url:'/pages/seckill/seckdeil?id='+goodsId
    	})
    },*/
    getSkeill: function getSkeill() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, current, bool, index, _index, _index2;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uni.showLoading({
                  title: '加载中'
                });
                _context.next = 3;
                return (0, _index3.getListTile)(_this.token, 1);
              case 3:
                res = _context.sent;
                if (res) {
                  _this.barList = res.data.seckillTime; //秒杀时间段
                  _this.barList.map(function (item) {
                    item.isActive = false;
                  });
                  console.log(_this.barList);
                  _this.seckillId = res.data.seckillTitle.id; //进入秒杀页面的秒杀时间id
                  //this.getSkeillgoods(this.seckillId,'');//请求商品数据
                  uni.hideLoading();
                  _this.showPage = true;
                }
                current = new Date();
                console.log(current.getHours());
                _this.barList.forEach(function (item, i) {
                  //let start=new Date()
                  // console.log(current.getHours()>this.handleHour(item.endTime))
                  // console.log(this.handleHour(item.startTime))
                  // console.log(this.handleHour(item.endTime))
                  var now = current.getHours();
                  var start = _this.handleHour(item.startTime);
                  var end = _this.handleHour(item.endTime);
                  //console.log('now:',now,' start:',start,' end:',end)
                  if (now < start) {
                    //当前时间小于开始时间
                    console.log(111111);
                    item.seckillStatus = '未开始';
                  } else if (now >= end) {
                    item.seckillStatus = '已结束';
                  } else if (start <= now < end) {
                    console.log(1111);
                    item.seckillStatus = '抢购中';
                  }
                });
                bool = _this.barList.some(function (item) {
                  return item.seckillStatus == '抢购中';
                });
                if (bool) {
                  index = _this.barList.findIndex(function (item) {
                    return item.seckillStatus == '抢购中';
                  });
                  _this.barList.map(function (item) {
                    item.isActive = false;
                  });
                  _this.barList[index].isActive = true;
                  _this.finalTime = _this.barList[index].endTime;
                  _this.setTimer();
                  _this.getSkeillgoods(_this.seckillId, _this.barList[index].id);
                } else if (_this.barList.some(function (item) {
                  return item.seckillStatus == '未开始';
                })) {
                  _this.barList.map(function (item) {
                    item.isActive = false;
                  });
                  _index = _this.barList.findIndex(function (item) {
                    return item.seckillStatus == '未开始';
                  });
                  _this.barList[_index].isActive = true;
                  _this.finalTime = _this.barList[_index].startTime;
                  _this.setTimer();
                  _this.getSkeillgoods(_this.seckillId, _this.barList[_index].id);
                } else if (_this.barList.every(function (item) {
                  return item.seckillStatus == '已结束';
                })) {
                  _this.barList.map(function (item) {
                    item.seckillStatus == '未开始';
                  });
                  _index2 = _this.barList.findIndex(function (item) {
                    return item.seckillStatus == '未开始';
                  });
                  _this.barList[_index2].isActive = true;
                  _this.finalTime = _this.barList[_index2].startTime;
                  _this.setTimer();
                  _this.getSkeillgoods(_this.seckillId, _this.barList[_index2].id);
                }
              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getSkeillgoods: function getSkeillgoods(seckillId, id) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _index3.getListGoods)(_this2.token, seckillId, id);
              case 2:
                res = _context2.sent;
                if (res) {
                  _this2.productlist = res.data;
                  _this2.skebur = res.seckillTimeId;
                  /*	this.barList.forEach(item=>{
                  		if(item.id == this.skebur) {
                  			let nowtime = new Date(); 
                  			let startTime = new Date(item.startTime)
                  			if(nowtime.getTime()<startTime.getTime()){
                  				console.log(110)
                  				this.timerEndTime = item.startTime;
                  				this.setTimer()
                  			}else if(nowtime.getTime()>=startTime.getTime()){
                  				this.timerEndTime = item.endTime;
                  				this.setTimer()
                  			}
                  		}
                  	})*/
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setTimer: function setTimer() {
      clearInterval(this.timeId);
      this.timeId = setInterval(this.countDown, 1000);
    },
    countDown: function countDown() {
      //let afterFinal=this.formate(this.finalTime)
      //console.log(this.finalTime)
      var newFinalTime = this.finalTime.replace(/-/g, "/");
      //console.log(newFinalTime)
      var resultTime = new Date(newFinalTime);
      //console.log(resultTime)
      //let newResultTime=this.formate(resultTime)
      //console.log(newResultTime)
      var resultHms = resultTime.getTime();
      var curTime = new Date();
      //console.log(curTime)
      var curHms = curTime.getTime();
      if (resultHms - curHms < 0) {
        var cz = curHms - resultHms;
      } else {
        var cz = resultHms - curHms;
      }
      var h = Math.floor(cz / 1000 / 60 / 60 % 24);
      h = h < 10 ? "0" + h : h;
      this.timeHour = h;
      var m = Math.floor(cz / 1000 / 60 % 60);
      m = m < 10 ? "0" + m : m;
      this.timeMinute = m;
      var s = Math.floor(cz / 1000 % 60);
      s = s < 10 ? "0" + s : s;
      this.timeSecond = s;
    },
    /*	timerAction(endtime) {
    		var nowtime = new Date();  //获取当前时间
    		var lefttime = endtime.getTime() - nowtime.getTime();  //距离结束时间的毫秒数
    		var leftd,lefth,leftm,lefts;
    		if(lefttime > 0) {
    			this.isFade=false
    			leftd = Math.floor(lefttime/(1000*60*60*24));  //计算天数
    			lefth = Math.floor(lefttime/(1000*60*60)%24);  //计算小时数
    			leftm = Math.floor(lefttime/(1000*60)%60);  //计算分钟数
    			lefts = Math.floor(lefttime/1000%60); //计算秒数
    			if(leftd > 0) {
    			  lefth += leftd * 24;
    			}
    			if(lefth < 10) {
    			  lefth = '0' + lefth
    			}
    			if(leftm < 10) {
    			  leftm = '0' + leftm
    			}
    			if(lefts < 10) {
    			  lefts = '0' + lefts
    			}
    		}else {
    			leftd = lefth = leftm = lefts = '00';
    			this.isFade=true
    			this.seckillMsg='秒杀已结束'
    		}
    		this.timeHour = lefth;
    		this.timeMinute = leftm;
    		this.timeSecond = lefts;
    	},*/
    handleHour: function handleHour(time) {
      if (time) {
        var timeArr = time.replace(" ", ":").replace(/\:/g, "-").split("-");
        if (timeArr[3] == '00') {
          timeArr[3] = '24';
        }
        return parseFloat(timeArr[3]);
      }
    },
    getHour: function getHour(time) {
      if (time) {
        var timeArr = time.replace(" ", ":").replace(/\:/g, "-").split("-");
        return timeArr[3];
      }
    },
    getMinute: function getMinute(time) {
      if (time) {
        var timeArr = time.replace(" ", ":").replace(/\:/g, "-").split("-");
        return timeArr[4];
      }
    },
    timeFormat: function timeFormat(param) {
      return param < 10 ? '0' + param : param;
    },
    // rushbuywhere(){
    // 	uni.switchTab({
    // 		url:'../shopcart/shopcart'
    // 	})
    // },
    estabwhere: function estabwhere(id, presentPrice, originalPrice) {
      if (this.seckillMsg == '秒杀已结束') {
        return;
      } else if (this.seckillMsg == '距开始') {
        uni.showToast({
          title: '抢购还未开始',
          icon: 'none'
        });
        return;
      }
      uni.navigateTo({
        url: '../rushPurchase/rushPurchase?id=' + id + '&goodsFinalTime=' + this.finalTime + '&originalPrice=' + originalPrice + '&presentPrice=' + presentPrice
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 288:
/*!******************************************************************************************!*\
  !*** B:/bdwwww/bdwww/wechat/pages/seckill/seckill.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aaa_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_aaa_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../aaa/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./seckill.vue?vue&type=style&index=0&lang=scss& */ 289);
/* harmony import */ var _aaa_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_aaa_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aaa_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_aaa_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _aaa_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_aaa_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _aaa_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_aaa_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_aaa_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_aaa_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_aaa_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_aaa_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_seckill_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 289:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!B:/bdwwww/bdwww/wechat/pages/seckill/seckill.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[282,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/seckill/seckill.js.map