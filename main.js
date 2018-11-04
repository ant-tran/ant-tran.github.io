(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-contact-form/app-contact-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/app-contact-form/app-contact-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"contactForm\">\n  <div class=\"input-container\">\n    <input type=\"text\" id=\"name\" name=\"name\" required placeholder=\"Name\" />\n    <label for=\"name\"></label>\n  </div>\n\n  <div class=\"input-container\">\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"Email Address\" />\n    <label for=\"email\"></label>\n    <div class=\"requirements\">\n      Must be a valid email address.\n    </div>\n  </div>\n\n  <div class=\"input-container\">\n    <textarea type=\"message\" id=\"message\" name=\"message\" required placeholder=\"Message\" data-gramm_editor=\"false\"></textarea>\n    <label for=\"message\" id=\"textAreaLabel\"></label>\n    <div class=\"requirements\">\n      You must include a message.\n    </div>\n  </div>\n\n  <button class=\"submit-button\" id=\"sendMessageButton\" type=\"submit\"></button>\n\n  <input id='one' type='checkbox' required/>\n  <label for='one'>\n    <span></span>\n    I'm not a robot\n    <ins><i>I'm not a robot</i></ins>\n  </label>\n</form>\n"

/***/ }),

/***/ "./src/app/app-contact-form/app-contact-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/app-contact-form/app-contact-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\");\n.input-container {\n  margin: 5px 0; }\nform {\n  max-width: 450px;\n  margin: 0 auto; }\nform > div {\n    position: relative;\n    background: #444;\n    border-bottom: 0px solid #2f3542; }\nform > div > input::-webkit-input-placeholder, form > div textarea::-webkit-input-placeholder {\n      color: white;\n      opacity: 0.3;\n      font-weight: 600;\n      position: absolute;\n      top: 22px;\n      left: 20px;\n      letter-spacing: 0.7px; }\nform > div > input:-ms-input-placeholder, form > div textarea:-ms-input-placeholder {\n      color: white;\n      opacity: 0.3;\n      font-weight: 600;\n      position: absolute;\n      top: 22px;\n      left: 20px;\n      letter-spacing: 0.7px; }\nform > div > input::-ms-input-placeholder, form > div textarea::-ms-input-placeholder {\n      color: white;\n      opacity: 0.3;\n      font-weight: 600;\n      position: absolute;\n      top: 22px;\n      left: 20px;\n      letter-spacing: 0.7px; }\nform > div > input::placeholder, form > div textarea::placeholder {\n      color: white;\n      opacity: 0.3;\n      font-weight: 600;\n      position: absolute;\n      top: 22px;\n      left: 20px;\n      letter-spacing: 0.7px; }\nform > div > input[type=\"text\"],\n    form > div > input[type=\"email\"],\n    form > div > textarea[type=\"message\"] {\n      color: #fff;\n      caret-color: #fff;\n      width: 100%;\n      border: 0;\n      padding: 20px 20px 20px 50px;\n      background: #444;\n      font-size: 20px; }\nform > div > input[type=\"text\"]:focus,\n      form > div > input[type=\"email\"]:focus,\n      form > div > textarea[type=\"message\"]:focus {\n        outline: 0; }\nform > div > input[type=\"text\"]:focus + label,\n        form > div > input[type=\"email\"]:focus + label,\n        form > div > textarea[type=\"message\"]:focus + label {\n          opacity: 0; }\nform > div > input[type=\"text\"]:valid,\n      form > div > input[type=\"email\"]:valid,\n      form > div > textarea[type=\"message\"]:valid {\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADTSURBVGhD7dJBCsIwEIXhLBS8hmvxCN7YvRvv4t6168RXzUAp1jRJdWbgfVCEmjjzg4GIiIiImsQYT3jOKaVdfuVPjnggIuHz4jJmHCHcxXyKGODd8Bfb5mO2McIKRljBCCsYYQUjemHIfo0h2hEHPPfeYbivH/Ee2T4U9/QiMGCDQbfXxJHa4aoRoneJ3vural2m9d5P1S5Ve/6vli639Jyq0pKl7/PP2PBl2aubCDEXM2U6QpRiXESIuRhXEWIa4zJCSIzrCIGIo/sIIiIi30J4AiVANE4+1yNJAAAAAElFTkSuQmCC);\n        background-size: 20px;\n        background-repeat: no-repeat;\n        background-position: 20px 20px; }\nform > div > input[type=\"text\"]:valid + label,\n        form > div > input[type=\"email\"]:valid + label,\n        form > div > textarea[type=\"message\"]:valid + label {\n          opacity: 0; }\nform > div > input[type=\"text\"]:invalid:not(:focus):not(:placeholder-shown),\n      form > div > input[type=\"email\"]:invalid:not(:focus):not(:placeholder-shown),\n      form > div > textarea[type=\"message\"]:invalid:not(:focus):not(:placeholder-shown) {\n        background: pink;\n        color: #fa0016; }\nform > div > input[type=\"text\"]:invalid:not(:focus):not(:placeholder-shown) + label,\n        form > div > input[type=\"email\"]:invalid:not(:focus):not(:placeholder-shown) + label,\n        form > div > textarea[type=\"message\"]:invalid:not(:focus):not(:placeholder-shown) + label {\n          opacity: 0; }\nform > div > input[type=\"text\"]:invalid:focus:not(:placeholder-shown) ~ .requirements,\n      form > div > input[type=\"email\"]:invalid:focus:not(:placeholder-shown) ~ .requirements,\n      form > div > textarea[type=\"message\"]:invalid:focus:not(:placeholder-shown) ~ .requirements {\n        max-height: 200px;\n        padding: 0 30px 20px 50px;\n        color: red; }\nform > div .requirements {\n      padding: 0 30px 0 50px;\n      color: #999;\n      max-height: 0;\n      transition: 0.28s;\n      overflow: hidden;\n      color: red;\n      font-style: italic; }\ntextarea[type=\"message\"] {\n  resize: none;\n  height: 200px; }\n/*Checkbox Styles*/\ninput[type='checkbox'] {\n  height: 0;\n  width: 0;\n  display: none; }\ninput[type='checkbox'] + label {\n  position: relative;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  color: #9e9e9e;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1); }\ninput[type='checkbox'] + label > ins {\n  position: absolute;\n  display: block;\n  bottom: 0;\n  left: 2em;\n  height: 0;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n  transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1); }\ninput[type='checkbox'] + label > ins > i {\n  position: absolute;\n  bottom: 0;\n  font-style: normal;\n  color: #f07874; }\ninput[type='checkbox'] + label > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 1em;\n  width: 1em;\n  height: 1em;\n  background: transparent;\n  border: 2px solid #9E9E9E;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1); }\ninput[type='checkbox'] + label:hover, input[type='checkbox']:focus + label {\n  color: #fff; }\ninput[type='checkbox'] + label:hover > span, input[type='checkbox']:focus + label > span {\n  background: rgba(255, 255, 255, 0.1); }\ninput[type='checkbox']:checked + label > ins {\n  height: 100%; }\ninput[type='checkbox']:checked + label > span {\n  border: .5em solid #f07874;\n  -webkit-animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);\n          animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1); }\ninput[type='checkbox']:checked + label > span:before {\n  content: \"\";\n  position: absolute;\n  top: 1.2em;\n  left: .4em;\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%;\n  -webkit-animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;\n          animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards; }\n@-webkit-keyframes shrink-bounce {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  33% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes shrink-bounce {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  33% {\n    -webkit-transform: scale(0.85);\n            transform: scale(0.85); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@-webkit-keyframes checkbox-check {\n  0% {\n    width: 0;\n    height: 0;\n    border-color: #fff;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  33% {\n    width: .2em;\n    height: 0;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  100% {\n    width: .3em;\n    height: .5em;\n    border-color: #fff;\n    -webkit-transform: translate3d(-0.1em, -0.9em, 0) rotate(45deg);\n            transform: translate3d(-0.1em, -0.9em, 0) rotate(45deg); } }\n@keyframes checkbox-check {\n  0% {\n    width: 0;\n    height: 0;\n    border-color: #fff;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  33% {\n    width: .2em;\n    height: 0;\n    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);\n            transform: translate3d(0, 0, 0) rotate(45deg); }\n  100% {\n    width: .3em;\n    height: .5em;\n    border-color: #fff;\n    -webkit-transform: translate3d(-0.1em, -0.9em, 0) rotate(45deg);\n            transform: translate3d(-0.1em, -0.9em, 0) rotate(45deg); } }\n/*SUBMIT BUTTON*/\n.submit-button {\n  position: relative;\n  margin-top: 10px;\n  float: right; }\n.submit-button {\n  outline: none;\n  height: 40px;\n  text-align: center;\n  width: 130px;\n  border-radius: 40px;\n  background: none;\n  border: 2px solid #fff;\n  color: #fff;\n  letter-spacing: 1px;\n  text-shadow: 0;\n  font-size: 12px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.25s ease; }\n.submit-button:hover {\n    color: #4f596f;\n    background: #fff; }\n.submit-button:active {\n    letter-spacing: 2px; }\n.submit-button:after {\n    content: \"SUBMIT\"; }\n.onclic {\n  width: 40px;\n  border-color: #bbbbbb;\n  border-width: 3px;\n  font-size: 0;\n  border-left-color: #fff;\n  -webkit-animation: rotating 2s 0.25s linear infinite;\n          animation: rotating 2s 0.25s linear infinite; }\n.onclic:after {\n    content: \"\"; }\n.onclic:hover {\n    color: #fff;\n    background: #4f596f; }\n.validate {\n  font-size: 13px;\n  color: #4f596f;\n  background: #fff; }\n.validate:after {\n    font-family: 'FontAwesome';\n    content: \"\\f00c\"; }\n@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n/*BODY STYLES*/\nbody {\n  padding: 20px; }\n* {\n  box-sizing: border-box;\n  font-family: Raleway, sans-serif; }\n@media screen and (max-width: 500px) {\n  #contactForm {\n    padding: 0 20px; } }\n"

/***/ }),

/***/ "./src/app/app-contact-form/app-contact-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-contact-form/app-contact-form.component.ts ***!
  \****************************************************************/
/*! exports provided: AppContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContactFormComponent", function() { return AppContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppContactFormComponent = /** @class */ (function () {
    function AppContactFormComponent() {
    }
    AppContactFormComponent.prototype.ngOnInit = function () {
        this.email = '';
        this.endpoint = 'http://localhost:3000/contact_me.php';
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            // this.email = document.getElementById('name').value);
            e.preventDefault();
            document.getElementById('sendMessageButton').classList.add('onclic');
            setTimeout(function () {
                validate();
            }, 250);
            function validate() {
                setTimeout(function () {
                    document.getElementById('sendMessageButton').classList.remove('onclic');
                    document.getElementById('sendMessageButton').classList.add('validate');
                }, 2250);
            }
            setTimeout(function () {
                callback();
            }, 450);
            function callback() {
                setTimeout(function () {
                    document.getElementById('sendMessageButton').classList.remove('validate');
                }, 1250);
            }
            setTimeout(function () {
                var contactForm = document.getElementById('contactForm');
                // contactForm.submit();
            }, 3400);
        });
    };
    AppContactFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! ./app-contact-form.component.html */ "./src/app/app-contact-form/app-contact-form.component.html"),
            styles: [__webpack_require__(/*! ./app-contact-form.component.scss */ "./src/app/app-contact-form/app-contact-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppContactFormComponent);
    return AppContactFormComponent;
}());



/***/ }),

/***/ "./src/app/app-draw-btn/app-draw-btn.component.html":
/*!**********************************************************!*\
  !*** ./src/app/app-draw-btn/app-draw-btn.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"draw-btn\">\n  <a>\n    <span class=\"text\">EXPLORE</span>\n    <span class=\"line -right\"></span>\n    <span class=\"line -top\"></span>\n    <span class=\"line -left\"></span>\n    <span class=\"line -bottom\"></span>\n  </a>\n</section>\n"

/***/ }),

/***/ "./src/app/app-draw-btn/app-draw-btn.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/app-draw-btn/app-draw-btn.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".draw-btn a {\n  color: white;\n  padding: 0.7em calc(0.7em * 1.2);\n  display: inline-block;\n  border: 3px solid transparent;\n  position: relative;\n  font-size: 1.5em;\n  cursor: pointer;\n  letter-spacing: 0.07em;\n  text-decoration: none; }\n  .draw-btn a .text {\n    -webkit-transform: translate3d(0, 0.7em, 0);\n            transform: translate3d(0, 0.7em, 0);\n    display: block;\n    transition: -webkit-transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s, -webkit-transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s; }\n  .draw-btn a:after {\n    position: absolute;\n    content: '';\n    bottom: -3px;\n    left: calc(0.7em * 1.2);\n    right: calc(0.7em * 1.2);\n    height: 3px;\n    background: #343434;\n    -webkit-animation: changeBg2 60s infinite alternate;\n            animation: changeBg2 60s infinite alternate;\n    transition: right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, -webkit-transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s;\n    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;\n    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, -webkit-transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s;\n    -webkit-transform-origin: left;\n            transform-origin: left; }\n  .draw-btn .line {\n  position: absolute;\n  background: #343434;\n  -webkit-animation: changeBg2 60s infinite alternate;\n          animation: changeBg2 60s infinite alternate; }\n  .draw-btn .line.-right, .draw-btn .line.-left {\n    width: 3px;\n    bottom: -3px;\n    top: -3px;\n    -webkit-transform: scale3d(1, 0, 1);\n            transform: scale3d(1, 0, 1); }\n  .draw-btn .line.-top, .draw-btn .line.-bottom {\n    height: 3px;\n    left: -3px;\n    right: -3px;\n    -webkit-transform: scale3d(0, 1, 1);\n            transform: scale3d(0, 1, 1); }\n  .draw-btn .line.-right {\n    right: -3px;\n    transition: -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s, -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;\n    -webkit-transform-origin: top;\n            transform-origin: top; }\n  .draw-btn .line.-top {\n    top: -3px;\n    transition: -webkit-transform 0.08s linear 0.43s;\n    transition: transform 0.08s linear 0.43s;\n    transition: transform 0.08s linear 0.43s, -webkit-transform 0.08s linear 0.43s;\n    -webkit-transform-origin: left;\n            transform-origin: left; }\n  .draw-btn .line.-left {\n    left: -3px;\n    transition: -webkit-transform 0.08s linear 0.51s;\n    transition: transform 0.08s linear 0.51s;\n    transition: transform 0.08s linear 0.51s, -webkit-transform 0.08s linear 0.51s;\n    -webkit-transform-origin: bottom;\n            transform-origin: bottom; }\n  .draw-btn .line.-bottom {\n    bottom: -3px;\n    transition: -webkit-transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);\n    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);\n    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01), -webkit-transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);\n    -webkit-transform-origin: right;\n            transform-origin: right; }\n  .draw-btn a:hover .text,\n.draw-btn a:active .text {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: -webkit-transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n  transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n  transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s, -webkit-transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s; }\n  .draw-btn a:hover:after,\n.draw-btn a:active:after {\n  -webkit-transform: scale3d(0, 1, 1);\n          transform: scale3d(0, 1, 1);\n  right: -3px;\n  left: -3px;\n  -webkit-transform-origin: right;\n          transform-origin: right;\n  transition: right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s, -webkit-transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s;\n  transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;\n  transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s, -webkit-transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s; }\n  .draw-btn a:hover .line,\n.draw-btn a:active .line {\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1); }\n  .draw-btn a:hover .line.-right,\n  .draw-btn a:active .line.-right {\n    transition: -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s, -webkit-transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;\n    -webkit-transform-origin: bottom;\n            transform-origin: bottom; }\n  .draw-btn a:hover .line.-top,\n  .draw-btn a:active .line.-top {\n    transition: -webkit-transform 0.08s linear 0.4s;\n    transition: transform 0.08s linear 0.4s;\n    transition: transform 0.08s linear 0.4s, -webkit-transform 0.08s linear 0.4s;\n    -webkit-transform-origin: right;\n            transform-origin: right; }\n  .draw-btn a:hover .line.-left,\n  .draw-btn a:active .line.-left {\n    transition: -webkit-transform 0.08s linear 0.48s;\n    transition: transform 0.08s linear 0.48s;\n    transition: transform 0.08s linear 0.48s, -webkit-transform 0.08s linear 0.48s;\n    -webkit-transform-origin: top;\n            transform-origin: top; }\n  .draw-btn a:hover .line.-bottom,\n  .draw-btn a:active .line.-bottom {\n    transition: -webkit-transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;\n    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;\n    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s, -webkit-transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;\n    -webkit-transform-origin: left;\n            transform-origin: left; }\n  @-webkit-keyframes changeBg2 {\n  0% {\n    background: #343434; }\n  33.33333333% {\n    background: #343434; }\n  66.66666666% {\n    background: #343434; } }\n  @keyframes changeBg2 {\n  0% {\n    background: #343434; }\n  33.33333333% {\n    background: #343434; }\n  66.66666666% {\n    background: #343434; } }\n"

/***/ }),

/***/ "./src/app/app-draw-btn/app-draw-btn.component.ts":
/*!********************************************************!*\
  !*** ./src/app/app-draw-btn/app-draw-btn.component.ts ***!
  \********************************************************/
/*! exports provided: AppDrawBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDrawBtnComponent", function() { return AppDrawBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDrawBtnComponent = /** @class */ (function () {
    function AppDrawBtnComponent() {
    }
    AppDrawBtnComponent.prototype.ngOnInit = function () {
    };
    AppDrawBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-draw-btn',
            template: __webpack_require__(/*! ./app-draw-btn.component.html */ "./src/app/app-draw-btn/app-draw-btn.component.html"),
            styles: [__webpack_require__(/*! ./app-draw-btn.component.scss */ "./src/app/app-draw-btn/app-draw-btn.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppDrawBtnComponent);
    return AppDrawBtnComponent;
}());



/***/ }),

/***/ "./src/app/app-intro/app-intro.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-intro/app-intro.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text\">\n  Hello, I'm <span id=\"antTran\">Ant Tran</span> <br>\n  <span class=\"text2\">I'm a software developer</span>\n</div>\n"

/***/ }),

/***/ "./src/app/app-intro/app-intro.component.scss":
/*!****************************************************!*\
  !*** ./src/app/app-intro/app-intro.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  line-height: 40px;\n  font-size: 48px;\n  color: #FAFAFA;\n  letter-spacing: 0.07em;\n  text-transform: uppercase; }\n\n.text2 {\n  font-size: 38px; }\n\n#antTran {\n  font-weight: 700;\n  color: #2f3542; }\n\n@media screen and (max-width: 600px) {\n  .text {\n    font-size: 8vw; }\n  .text2 {\n    font-size: 6.3vw; } }\n"

/***/ }),

/***/ "./src/app/app-intro/app-intro.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-intro/app-intro.component.ts ***!
  \**************************************************/
/*! exports provided: AppIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppIntroComponent", function() { return AppIntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppIntroComponent = /** @class */ (function () {
    function AppIntroComponent() {
    }
    AppIntroComponent.prototype.ngOnInit = function () {
    };
    AppIntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./app-intro.component.html */ "./src/app/app-intro/app-intro.component.html"),
            styles: [__webpack_require__(/*! ./app-intro.component.scss */ "./src/app/app-intro/app-intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppIntroComponent);
    return AppIntroComponent;
}());



/***/ }),

/***/ "./src/app/app-navigation/app-navigation.component.html":
/*!**************************************************************!*\
  !*** ./src/app/app-navigation/app-navigation.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navi-container\" id=\"naviBar\">\n  <div class=\"link-wrap\" id=\"menuWrap\">\n    <div class=\"navi-tab active\" id=\"homeLink\" (click)=\"homeScroll()\">home</div>\n    <div class=\"navi-tab\" id=\"aboutLink\" (click)=\"aboutScroll()\">about</div>\n    <div class=\"navi-tab\" id=\"workLink\" (click)=\"workScroll()\">work</div>\n    <div class=\"navi-tab\" id=\"contactLink\" (click)=\"contactScroll()\">contact</div>\n  </div>\n  <i class=\"fa fa-bars navi-bars\" id=\"navHamburger\" (click)=\"naviMenu()\"></i>\n</nav>\n"

/***/ }),

/***/ "./src/app/app-navigation/app-navigation.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/app-navigation/app-navigation.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navi-container {\n  position: absolute;\n  width: 100%;\n  height: 70px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  background: #fff;\n  z-index: 99;\n  text-transform: uppercase;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  border-bottom: 4px #b0ce72 solid;\n  -webkit-animation: changeBottomBorder 60s infinite alternate;\n          animation: changeBottomBorder 60s infinite alternate; }\n  .navi-container--top {\n    position: fixed;\n    top: 0; }\n  .navi-container--top.scrollUp {\n      transition: 0.5s;\n      -webkit-transform: translateY(-80px);\n              transform: translateY(-80px);\n      transition-timing-function: cubic-bezier(0.55, 0.06, 0.68, 0.19); }\n  .navi-container--top.scrollDown {\n      transition: 0.5s;\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px); }\n  nav .active {\n  color: #f07874; }\n  .navi-tab {\n  font-weight: 600;\n  text-align: center;\n  width: 10vw;\n  color: #343434;\n  letter-spacing: 0.1rem;\n  transition: all 0.3s ease;\n  font-size: 1em;\n  display: inline-block;\n  margin: 0 10px; }\n  .navi-tab:hover {\n    color: #f07874;\n    transition: all 0.5s ease; }\n  .navi-tab:active {\n    color: #f07874;\n    transition: all 0.5s ease; }\n  .link-wrap {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  width: 100vw;\n  top: 40%; }\n  .navi-bars {\n  position: absolute;\n  top: 50%;\n  left: 90%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #343434;\n  display: none;\n  font-size: 2em; }\n  @-webkit-keyframes changeBottomBorder {\n  0% {\n    border-bottom: 4px #b0ce72 solid; }\n  33.33333333% {\n    border-bottom: 4px #f07874 solid; }\n  66.66666666% {\n    border-bottom: 4px #f6cf73 solid; } }\n  @keyframes changeBottomBorder {\n  0% {\n    border-bottom: 4px #b0ce72 solid; }\n  33.33333333% {\n    border-bottom: 4px #f07874 solid; }\n  66.66666666% {\n    border-bottom: 4px #f6cf73 solid; } }\n  @media screen and (max-width: 600px) {\n  .navi-tab {\n    width: 100%;\n    text-align: left;\n    margin: 12px; }\n  .navi-bars {\n    display: block; }\n  .link-wrap {\n    max-width: 1200px;\n    width: 100%;\n    position: absolute;\n    top: 70px;\n    background: #fff;\n    overflow: hidden;\n    height: 0;\n    transition: height .3s ease-out; }\n    .link-wrap.scrollUpLink {\n      transition: 0.5s;\n      -webkit-transform: translateY(-180px);\n              transform: translateY(-180px);\n      transition-timing-function: cubic-bezier(0.55, 0.06, 0.68, 0.19); }\n    .link-wrap.scrollDownLink {\n      transition: 0.5s;\n      -webkit-transform: translateY(0px);\n              transform: translateY(0px); }\n  .visible {\n    height: 180px; } }\n"

/***/ }),

/***/ "./src/app/app-navigation/app-navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/app-navigation/app-navigation.component.ts ***!
  \************************************************************/
/*! exports provided: AppNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavigationComponent", function() { return AppNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppNavigationComponent = /** @class */ (function () {
    function AppNavigationComponent() {
        this.prevScrollPos = 0;
        this.menuPop = false;
    }
    AppNavigationComponent.prototype.ngOnInit = function () {
    };
    AppNavigationComponent.prototype.onScroll = function () {
        // definitions
        var topPos = document.getElementById('about').offsetTop;
        var homePos = document.getElementById('home').offsetTop;
        var aboutPos = document.getElementById('about').offsetTop;
        var workPos = document.getElementById('work').offsetTop;
        var contactPos = document.getElementById('contact').offsetTop;
        var winY = window.scrollY;
        // function sticks navbar to the top of the screen when it passes
        if (winY >= topPos) {
            document.getElementById('naviBar').classList.add('navi-container--top');
        }
        else {
            document.getElementById('naviBar').classList.remove('navi-container--top');
        }
        // function detects while scrolling, adding active tag based on scroll position
        if (winY < aboutPos) {
            document.getElementById('homeLink').classList.add('active');
            document.getElementById('aboutLink').classList.remove('active');
            document.getElementById('workLink').classList.remove('active');
            document.getElementById('contactLink').classList.remove('active');
        }
        else if (winY < workPos) {
            document.getElementById('aboutLink').classList.add('active');
            document.getElementById('homeLink').classList.remove('active');
            document.getElementById('workLink').classList.remove('active');
            document.getElementById('contactLink').classList.remove('active');
        }
        else if (winY < contactPos - 100) {
            document.getElementById('workLink').classList.add('active');
            document.getElementById('homeLink').classList.remove('active');
            document.getElementById('aboutLink').classList.remove('active');
            document.getElementById('contactLink').classList.remove('active');
        }
        else {
            document.getElementById('contactLink').classList.add('active');
            document.getElementById('homeLink').classList.remove('active');
            document.getElementById('aboutLink').classList.remove('active');
            document.getElementById('workLink').classList.remove('active');
        }
        // function to hide navbar when scrolling down
        var navbarHeight = aboutPos + 70;
        var navbar = document.getElementById('naviBar');
        var navbarWrap = document.getElementById('menuWrap');
        var currentScrollTop = winY;
        if (this.prevScrollPos < currentScrollTop && winY > navbarHeight) {
            navbar.classList.add('scrollUp');
            navbar.classList.remove('scrollDown');
            navbarWrap.classList.add('scrollUpLink');
            navbarWrap.classList.remove('scrollDownLink');
        }
        else if (this.prevScrollPos > currentScrollTop && !(winY <= navbarHeight)) {
            navbar.classList.add('scrollDown');
            navbar.classList.remove('scrollUp');
            navbarWrap.classList.add('scrollDownLink');
            navbarWrap.classList.remove('scrollUpLink');
        }
        this.prevScrollPos = currentScrollTop;
    };
    AppNavigationComponent.prototype.naviMenu = function () {
        if (this.menuPop == false) {
            document.getElementById('menuWrap').classList.add('visible');
            document.getElementById('navHamburger').classList.add('fa-times');
            document.getElementById('navHamburger').classList.remove('fa-bars');
            this.menuPop = !this.menuPop;
        }
        else {
            document.getElementById('menuWrap').classList.remove('visible');
            document.getElementById('navHamburger').classList.remove('fa-times');
            document.getElementById('navHamburger').classList.add('fa-bars');
            this.menuPop = !this.menuPop;
        }
    };
    AppNavigationComponent.prototype.homeScroll = function () {
        var homePos = document.getElementById('home').offsetTop;
        window.scrollTo({ left: 0, top: homePos, behavior: 'smooth' });
    };
    AppNavigationComponent.prototype.aboutScroll = function () {
        var aboutPos = document.getElementById('about').offsetTop;
        window.scrollTo({ left: 0, top: aboutPos, behavior: 'smooth' });
    };
    AppNavigationComponent.prototype.workScroll = function () {
        var workPos = document.getElementById('work').offsetTop;
        window.scrollTo({ left: 0, top: workPos, behavior: 'smooth' });
    };
    AppNavigationComponent.prototype.contactScroll = function () {
        var contactPos = document.getElementById('contact').offsetTop;
        window.scrollTo({ left: 0, top: contactPos, behavior: 'smooth' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppNavigationComponent.prototype, "onScroll", null);
    AppNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./app-navigation.component.html */ "./src/app/app-navigation/app-navigation.component.html"),
            styles: [__webpack_require__(/*! ./app-navigation.component.scss */ "./src/app/app-navigation/app-navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppNavigationComponent);
    return AppNavigationComponent;
}());



/***/ }),

/***/ "./src/app/app-social/app-social.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-social/app-social.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-btns\">\n  <a href=\"https://www.facebook.com/hi.im.elephant\" class=\"btn facebook\">\n    <i class=\"fa fa-facebook\"></i>\n  </a>\n  <a href=\"https://www.linkedin.com/in/ant-tran/\" class=\"btn linkedin\">\n    <i class=\"fa fa-linkedin\"></i>\n  </a>\n  <a href=\"https://www.instagram.com/ant.ventures/\" class=\"btn instagram\">\n    <i class=\"fa fa-instagram\"></i>\n  </a>\n  <a href=\"https://github.com/ant-tran\" class=\"btn github\">\n    <i class=\"fa fa-github\"></i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/app-social/app-social.component.scss":
/*!******************************************************!*\
  !*** ./src/app/app-social/app-social.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-btns .btn, .social-btns .btn:before, .social-btns .btn .fa {\n  transition: all 0.35s;\n  transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59); }\n\n.social-btns .btn:before {\n  top: 90%;\n  left: -110%; }\n\n.social-btns .btn .fa {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8); }\n\n.social-btns .btn.facebook:before {\n  background-color: #3b5998; }\n\n.social-btns .btn.facebook .fa {\n  color: #989898; }\n\n.social-btns .btn.linkedin:before {\n  background-color: #0077b5; }\n\n.social-btns .btn.linkedin .fa {\n  color: #989898; }\n\n.social-btns .btn.instagram:before {\n  background-color: #4c68d7; }\n\n.social-btns .btn.instagram .fa {\n  color: #989898; }\n\n.social-btns .btn.github:before {\n  background-color: #4078c0; }\n\n.social-btns .btn.github .fa {\n  color: #989898; }\n\n.social-btns .btn:focus:before, .social-btns .btn:hover:before {\n  top: -10%;\n  left: -10%; }\n\n.social-btns .btn:focus .fa, .social-btns .btn:hover .fa {\n  color: #fff;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n\n.social-btns {\n  height: 90px;\n  margin: auto;\n  font-size: 0;\n  text-align: center; }\n\n.social-btns .btn {\n  display: inline-block;\n  background-color: #303030;\n  width: 90px;\n  height: 90px;\n  line-height: 75px;\n  margin: 0 10px;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  border-radius: 28%;\n  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);\n  opacity: 0.99; }\n\n.social-btns .btn:before {\n  content: '';\n  width: 120%;\n  height: 120%;\n  position: absolute;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.social-btns .btn .fa {\n  font-size: 38px;\n  vertical-align: middle; }\n\n@media screen and (max-width: 600px) {\n  .btn {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    margin: 0 !important; } }\n\n@media screen and (max-width: 450px) {\n  .btn {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    margin: 0 -5px !important; } }\n"

/***/ }),

/***/ "./src/app/app-social/app-social.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-social/app-social.component.ts ***!
  \****************************************************/
/*! exports provided: AppSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSocialComponent", function() { return AppSocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSocialComponent = /** @class */ (function () {
    function AppSocialComponent() {
    }
    AppSocialComponent.prototype.ngOnInit = function () {
    };
    AppSocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./app-social.component.html */ "./src/app/app-social/app-social.component.html"),
            styles: [__webpack_require__(/*! ./app-social.component.scss */ "./src/app/app-social/app-social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSocialComponent);
    return AppSocialComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\" rel=\"stylesheet\">\n  <link href=\"https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900\" rel=\"stylesheet\">\n</head>\n\n\n<div class=\"load-container\" id=\"loading\">\n    <div class=\"loader loader--style1\">\n        <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n   width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\n  <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\n  <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n    C22.32,8.481,24.301,9.057,26.013,10.047z\">\n    <animateTransform attributeType=\"xml\"\n      attributeName=\"transform\"\n      type=\"rotate\"\n      from=\"0 20 20\"\n      to=\"360 20 20\"\n      dur=\"0.5s\"\n      repeatCount=\"indefinite\"/>\n    </path>\n  </svg>\n    </div>\n</div>\n\n<div class=\"overflow-wrap\">\n\n<!--- HOME PAGE --->\n  <section class=\"bubbles-container\" id=\"home\">\n        <div class=\"bottom-particles\">\n            <span *ngFor=\"let dummy of ' '.repeat(200).split(''), let x = index\" class=\"bubble\"></span>\n        </div>\n\n        <div class=\"obj-center\" align=\"center\">\n            <app-intro></app-intro>\n        </div>\n\n        <div class=\"obj-center\" id=\"drawBtnContainer\" align=\"center\">\n            <app-draw-btn (click)=\"startScroll()\"></app-draw-btn>\n        </div>\n    </section>\n\n<!--- NAVIGATION BAR --->\n    <app-navigation></app-navigation>\n\n<!--- ABOUT PAGE --->\n    <section id=\"about\">\n        <br><br><br>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 text-center\">\n                    <h2 class=\"block-header fadeIn animated isPaused\">About Me</h2>\n                    <p class=\"fadeIn animated isPaused\">I'm a motivated individual with a drive that will <br> knock your socks off, literally.</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"block col-sm-4\">\n                    <div class=\"about-card slideInLeft animated isPaused\">\n                        <div class=\"introimg\">\n                            <i class=\"fa fa-share\" aria-hidden=\"true\"></i>\n                        </div>\n                        <h3>Simple</h3>\n                        <p class=\"introtext\">I value simple content structure, modern and clean design patterns.</p>\n                    </div>\n                </div>\n                <div class=\"block col-sm-4\">\n                    <div class=\"about-card border-color2 fadeIn animated isPaused\">\n                        <div class=\"introimg\">\n                            <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\n                        </div>\n                        <h3>Responsive</h3>\n                        <p class=\"introtext\">My websites work on any size devices, no matter how big nor small.</p>\n                    </div>\n                </div>\n                <div class=\"block col-sm-4\">\n                    <div class=\"about-card border-color3 slideInRight animated isPaused\">\n                        <div class=\"introimg\">\n                            <i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>\n                        </div>\n                        <h3>Dynamic</h3>\n                        <p class=\"introtext\">I love making websites come to life. Not everything needs to be static.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br><br>\n    </section>\n\n<!--- WORK PAGE --->\n    <section id=\"work\">\n        <br><br><br>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 text-center\">\n                    <h2 class=\"block-header fadeIn animated isPaused\">My skills</h2>\n                    <p class=\"fadeIn animated isPaused\">I focus on web development with <br> various frameworks and languages.</p>\n                </div>\n            </div>\n            <br>\n            <div class=\"row\">\n                <div class=\"col-sm-3 text-center\">\n                    <span data-percent=\"95\" class=\"chart fadeIn animated isPaused\">\n                        <span class=\"percent fadeIn animated isPaused\"></span>\n                    </span>\n                    <h4>CSS/HTML</h4>\n                    <!--<p class=\"chart-para\">blah blah blah</p>-->\n                </div>\n                <div class=\"col-sm-3 text-center\">\n                    <span data-percent=\"90\" class=\"chart fadeIn animated isPaused\">\n                        <span class=\"percent fadeIn animated isPaused\"></span>\n                    </span>\n                    <h4>JavaScript</h4>\n                    <!--<p class=\"chart-para\">blah blah blah</p>-->\n                </div>\n                <div class=\"col-sm-3 text-center\">\n                    <span data-percent=\"62\" class=\"chart fadeIn animated isPaused\">\n                        <span class=\"percent fadeIn animated isPaused\"></span>\n                    </span>\n                    <h4>ASP.NET</h4>\n                    <!--<p class=\"chart-para\">blah blah blah</p>-->\n                </div>\n                <div class=\"col-sm-3 text-center\">\n                    <span data-percent=\"75\" class=\"chart fadeIn animated isPaused\">\n                        <span class=\"percent fadeIn animated isPaused\"></span>\n                    </span>\n                    <h4>Photoshop</h4>\n                    <p class=\"chart-para\"> </p>\n                </div>\n            </div>\n        </div>\n        <br><br>\n    </section>\n\n    <section id=\"videoParallax\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div id=\"carousel-testimonials\" class=\"carousel slide widget_testimonials\" data-ride=\"carousel\">\n                        <div class=\"carousel-inner\">\n                            <div class=\"carousel-item active\">\n                                <p class=\"carousel-introtext\">\n                                    <span>Stay Hungry.<br>Stay Foolish.</span>\n                                </p>\n                                <p class=\"carousel-readmore\">- Steve Jobs -</p>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <p class=\"carousel-introtext\">\n                                    <span>We're changing the world<br>with technology.</span>\n                                </p>\n                                <p class=\"carousel-readmore\">- Bill Gates -</p>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <p class=\"carousel-introtext\">\n                                    <span>Don't try to be like Jackie.<br>Study computers instead.</span>\n                                </p>\n                                <p class=\"carousel-readmore\">- Jackie Chan -</p>\n                            </div>\n                        </div>\n\n                        <a class=\"carousel-control-prev\" href=\"#carousel-testimonials\" role=\"button\" data-slide=\"prev\">\n                            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carousel-testimonials\" role=\"button\" data-slide=\"next\">\n                            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                        </a>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"hero-wrapper\">\n            <div class=\"hero\">\n                <div class=\"overlay\"></div>\n                <figure>\n                    <img id=\"punchVideo\" src=\"../assets/images/punch.gif\"/>\n                    <!--<video id=\"punchVideo\" loop autoplay>-->\n                        <!--<source src=\"../assets/videos/punch1.mp4\" type=\"video/mp4\" />-->\n                    <!--</video>-->\n                </figure>\n            </div>\n        </div>\n        <div class=\"stretch\"></div>\n    </section>\n\n<!--- CONTACT PAGE --->\n    <section id=\"contact\">\n        <br><br><br>\n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n                <h2 class=\"block-header fadeIn animated isPaused\">Get in touch</h2>\n                <p class=\"fadeIn animated isPaused\">Have any questions or want to work together?</p>\n            </div>\n        </div>\n        <div class=\"form-container hatch animated isPaused\">\n            <div class=\"fadeIn animated isPaused\">\n                <app-contact-form></app-contact-form>\n            </div>\n        </div>\n    </section>\n\n<!--- FOOTER  --->\n    <footer>\n        <div class=\"up-arrow\" (click)=\"homeScroll()\">\n            <i class=\"fa fa-angle-up\" id=\"upArrow\"></i>\n            <i class=\"fa fa-angle-up\" id=\"upArrow2\"></i>\n        </div>\n\n        <div class=\"social-container\">\n            <app-social></app-social>\n            <br>\n            Ant Tran <span class=\"copy-mark\">&copy; 2018</span>\n        </div>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\");\n.load-container {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  background: #333333;\n  z-index: 9999;\n  opacity: 1;\n  transition: 0.5s ease; }\n.loader {\n  position: absolute;\n  top: 50%;\n  left: 40%;\n  margin: 0 0 2em;\n  height: 100px;\n  width: 20%;\n  text-align: center;\n  padding: 1em;\n  margin: 0 auto 1em;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-transform: scale(2);\n          transform: scale(2); }\n/*\n  Set the color of the icon\n*/\nsvg path,\nsvg rect {\n  fill: #FF6700; }\n/**********************************************/\n/*              GENERAL STYLES                */\n/**********************************************/\n.isPaused {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused; }\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.overflow-wrap {\n  overflow-x: hidden !important; }\n#contact {\n  background: #4f5870; }\n.block-header {\n  color: #fff;\n  margin-bottom: 22px;\n  margin-top: 0px;\n  font-size: 60px;\n  text-transform: uppercase; }\n.block-header + p {\n  color: #989898;\n  font-size: 20px;\n  position: relative;\n  line-height: 30px;\n  margin-bottom: 60px; }\n.text-center .block-header + p:after {\n  display: block;\n  position: absolute;\n  content: '';\n  width: 170px;\n  height: 1px;\n  background-color: rgba(100, 100, 100, 0.4);\n  bottom: -32px;\n  left: 50%;\n  margin-left: -85px; }\n.block-header + p:after {\n  display: block;\n  position: absolute;\n  content: '';\n  width: 170px;\n  height: 1px;\n  background-color: rgba(100, 100, 100, 0.2);\n  bottom: -28px;\n  left: 0; }\n.section-title, .section-title-left {\n  font-size: 56px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: 600; }\n.section-title-left {\n  text-align: left;\n  padding-left: 30px; }\n.section-subtitle, .section-subtitle-left {\n  text-align: center;\n  color: #fff; }\n.section-subtitle-left {\n  text-align: left;\n  padding-left: 30px; }\n.section-description {\n  font-size: 35px;\n  text-align: left;\n  color: #fff;\n  padding: 15px 30px; }\n.bg-color2 {\n  background: #ff6f6f;\n  position: relative; }\n.bg-color2:after {\n  border-top-color: #ff6f6f; }\n.bg-color1:after, .bg-color2:after, .bg-color3:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  width: 78px;\n  height: 26px;\n  bottom: -26px;\n  left: 50%;\n  margin-left: -38px;\n  border-top: 26px solid #fbcf61;\n  border-left: 38px solid transparent;\n  border-right: 38px solid transparent;\n  border-bottom: none; }\n/**********************************************/\n/*           VIDEO PARALLAX STYLES            */\n/**********************************************/\n#videoParallax {\n  margin: 75px 0; }\nfigure {\n  margin: 0;\n  position: relative;\n  overflow-x: hidden; }\nfigure > h1 {\n    position: absolute;\n    top: 20px;\n    left: 20px;\n    border-right: 3px solid #fff;\n    padding: 5px 10px 5px 5px; }\nfigure > img {\n    width: calc(1900px - 10vw);\n    overflow-x: hidden; }\nvideo {\n  width: 100%;\n  max-width: 100%; }\n.stretch {\n  height: 0;\n  background: red;\n  min-height: 100%;\n  min-width: 100%;\n  background-size: cover;\n  margin-top: 0; }\n.stretch > h1 {\n    padding: 20px; }\n.hero-wrapper {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  height: auto;\n  width: auto;\n  min-height: 20%;\n  min-width: 100%;\n  z-index: -9999;\n  overflow-x: hidden; }\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f07874; }\n#punchVideo {\n  opacity: 0.4; }\n.widget_testimonials {\n  padding: 20px 0; }\n.widget_testimonials .carousel-control.left {\n  left: 0;\n  right: auto; }\n.widget_testimonials .carousel-control.right, .widget_testimonials .carousel-control.left {\n  display: block;\n  width: 50px;\n  height: 50px;\n  top: 50%;\n  right: 0px;\n  margin-top: -25px;\n  z-index: 10; }\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n.widget_testimonials .carousel-introtext {\n  padding: 30px 0 10px 0;\n  font-size: 60px;\n  color: #343434;\n  font-weight: 700;\n  line-height: 1em;\n  text-align: center; }\n.widget_testimonials .carousel-introtext span {\n  position: relative;\n  display: inline-block; }\n.widget_testimonials .carousel-introtext span:before, .widget_testimonials .carousel-introtext span:after {\n  font-family: FontAwesome;\n  display: block;\n  position: absolute;\n  font-size: 40px;\n  left: -55px;\n  top: -20px;\n  content: '\\e808';\n  color: #fff; }\n.widget_testimonials .carousel-readmore {\n  padding: 20px 0;\n  text-align: center;\n  color: #fff;\n  font-size: 40px;\n  line-height: 1; }\n.widget_testimonials .carousel-control.left:before {\n  font-family: FontAwesome;\n  content: '\\f053';\n  font-size: 20px; }\n.widget_testimonials .carousel-control.right:before {\n  font-family: FontAwesome;\n  content: '\\f054';\n  font-size: 20px; }\n.widget_testimonials .carousel-introtext span:after {\n  right: -55px;\n  left: auto;\n  content: '\\f10e'; }\n.widget_testimonials .carousel-introtext span:before {\n  font-family: FontAwesome;\n  display: block;\n  position: absolute;\n  font-size: 40px;\n  left: -55px;\n  top: -20px;\n  content: '\\f10d';\n  color: #fff; }\n/**********************************************/\n/*                HOME STYLES                 */\n/**********************************************/\n.obj-center {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  width: 100vw;\n  height: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n#drawBtnContainer {\n  top: 90%; }\n/**********************************************/\n/*                ABOUT STYLES                */\n/**********************************************/\n#about {\n  padding-top: 100px;\n  background: #343434; }\n#videoText {\n  position: absolute;\n  text-align: center;\n  top: 145%;\n  width: 100%;\n  font-size: 56px;\n  font-weight: bold;\n  color: white;\n  z-index: 3; }\n.about-card {\n  color: #fff;\n  transition: all 0.2s ease;\n  text-align: center;\n  margin: 10px 0 43px;\n  background-color: rgba(100, 100, 100, 0.2);\n  padding: 64px 15px 28px;\n  border-bottom: 10px solid #fbcf61; }\n.about-card > h3 {\n    font-size: 24px;\n    margin: 22px 0 18px;\n    font-weight: 700;\n    text-transform: none; }\n.about-card > p.introtext {\n    margin: 10px 0 30px; }\n.border-color2 {\n  border-color: #ff6f6f !important; }\n.border-color3 {\n  border-color: #a8d164 !important; }\n.introimg {\n  font-size: 90px; }\n.introimg > i:hover {\n    -webkit-animation: pulse 1.5s infinite;\n            animation: pulse 1.5s infinite; }\n/**********************************************/\n/*                WORK STYLES                 */\n/**********************************************/\n#work {\n  background: #242424; }\n#workTitle {\n  color: #fff; }\n.chart {\n  color: white;\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  border-radius: 100%;\n  margin: 20px 0;\n  height: 130px; }\n.chart + h4 {\n  color: white;\n  font-weight: 700;\n  font-size: 24px;\n  margin-bottom: 15px; }\n.chart-para {\n  color: #989898;\n  font-size: 20px;\n  position: relative;\n  line-height: 30px;\n  margin-bottom: 60px; }\n.percent {\n  color: white;\n  font-family: Arial, sans-serif;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 50px;\n  margin-top: -0.7em;\n  margin-left: -0.55em;\n  z-index: 2; }\n.card-container {\n  margin: 0 auto;\n  width: 100%; }\n.card-custom {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  cursor: pointer; }\n.card-custom.col-sm-3 {\n    padding: 0 !important;\n    margin: 25px 15px !important; }\n.card-custom > .card-info {\n    position: relative;\n    z-index: 3;\n    width: 100%;\n    height: 100%;\n    float: left;\n    background: white;\n    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2); }\n.card-custom > .card-info:hover .image-container {\n      background-size: 105%; }\n.card-custom > .card-info > .image-container {\n      width: 100%;\n      height: 75%;\n      background-size: 100%;\n      background-position: center;\n      transition: background-size 0.5s ease; }\n.card-custom > .card-info > .desc-container {\n      width: 100%;\n      height: 25%;\n      background: white;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      box-shadow: 0px -6px 20px 0px rgba(0, 0, 0, 0.1);\n      transition: height 0.5s; }\n.card-custom > .card-info > .desc-container > h1 {\n        width: 100%;\n        float: left;\n        text-transform: uppercase;\n        font-size: 18px;\n        margin: 10px 10px;\n        color: black; }\n.card-custom > .card-info > .desc-container > .description p {\n        text-align: justify;\n        padding: 0px 10px;\n        color: rgba(0, 0, 0, 0.8);\n        max-height: 72px;\n        text-overflow: ellipsis;\n        width: 90%;\n        display: block;\n        overflow: hidden; }\n/**********************************************/\n/*              CONTACT STYLES                */\n/**********************************************/\n#contact {\n  background: #343434; }\n.form-container {\n  padding: 0 0 120px 0; }\n/**********************************************/\n/*              FOOTER STYLES                 */\n/**********************************************/\nfooter {\n  background: #242424;\n  color: #8F9AA7;\n  text-transform: uppercase; }\n.copy-mark {\n  color: #989898;\n  opacity: 0.7; }\n.social-container {\n  text-align: center;\n  padding: 70px 0 50px 0;\n  transition: ease 0.3s; }\n.up-arrow {\n  position: absolute;\n  background: #ff4757;\n  font-size: 4em;\n  width: 75px;\n  height: 75px;\n  line-height: 40pt;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  cursor: pointer;\n  transition: background .5s;\n  margin-top: -30px;\n  text-align: center;\n  color: #FAFAFA;\n  border-radius: 200px;\n  transition: 0.3s; }\n.up-arrow:hover {\n    background: #ff7a86; }\n.up-arrow:hover #upArrow {\n      -webkit-animation: 1.2s arrowMove ease-out infinite;\n              animation: 1.2s arrowMove ease-out infinite; }\n#upArrow {\n  position: relative;\n  width: 75px;\n  height: 75px; }\n#upArrow2 {\n  position: absolute;\n  left: 17px; }\n/**********************************************/\n/*                ANIMATIONS                  */\n/**********************************************/\n@-webkit-keyframes arrowMove {\n  0% {\n    opacity: 1;\n    top: 0; }\n  33.33333333% { }\n  66.66666666% {\n    opacity: 0;\n    top: -25px; }\n  100% {\n    opacity: 0; } }\n@keyframes arrowMove {\n  0% {\n    opacity: 1;\n    top: 0; }\n  33.33333333% { }\n  66.66666666% {\n    opacity: 0;\n    top: -25px; }\n  100% {\n    opacity: 0; } }\n/**********************************************/\n/*              MEDIA QUERIES                 */\n/**********************************************/\n/* HEIGHT */\n@media screen and (max-height: 770px) {\n  #drawBtnContainer {\n    top: 80%; } }\n@media screen and (max-height: 400px) {\n  .obj-center {\n    top: 35%; }\n  #drawBtnContainer {\n    top: 70%; } }\n@media screen and (max-height: 240px) {\n  .obj-center {\n    top: 25%; }\n  #drawBtnContainer {\n    top: 50%; } }\n@media screen and (max-height: 200px) {\n  .obj-center {\n    top: 5%; }\n  #drawBtnContainer {\n    top: 50%; } }\n/* WIDTH */\n@media screen and (min-width: 1680px) {\n  figure > img {\n    width: 105%; } }\n@media screen and (max-width: 700px) {\n  .widget_testimonials .carousel-introtext, .widget_testimonials .carousel-readmore {\n    font-size: 30px; }\n  .widget_testimonials .carousel-introtext span:before {\n    font-size: 15px;\n    left: -35px; }\n  .widget_testimonials .carousel-introtext span:after {\n    font-size: 15px;\n    right: -35px; } }\n@media screen and (max-width: 600px) {\n  .up-arrow {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); } }\n@media screen and (max-width: 450px) {\n  .up-arrow {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6); } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/jquery/easy-pie-chart/dist/jquery.easypiechart.min.js */ "./src/assets/jquery/easy-pie-chart/dist/jquery.easypiechart.min.js");
/* harmony import */ var _assets_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').css({ 'overflow': 'hidden' });
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).bind('scroll', function () {
            window.scrollTo(0, 0);
        });
        setTimeout(function () {
            document.getElementById('loading').style.opacity = '0';
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).unbind('scroll');
            jquery__WEBPACK_IMPORTED_MODULE_1__('body').css({ 'overflow-y': 'visible' });
        }, 3000);
    };
    AppComponent.prototype.onScroll = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.animated').each(function () {
            var elemPos = jquery__WEBPACK_IMPORTED_MODULE_1__(this).offset().top;
            var topWindow = jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop();
            if (elemPos < topWindow + 600) {
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).removeClass('isPaused');
            }
        });
        // circle progress bar
        if (jquery__WEBPACK_IMPORTED_MODULE_1__().easyPieChart) {
            var count = 0;
            var colors_1 = ['#a8d164', '#fbcf61', '#ff6f6f'];
            jquery__WEBPACK_IMPORTED_MODULE_1__('.chart').each(function () {
                var imagePos = jquery__WEBPACK_IMPORTED_MODULE_1__(this).offset().top;
                var topOfWindow = jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop();
                if (imagePos < topOfWindow + 600) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__(this).easyPieChart({
                        barColor: colors_1[count],
                        trackColor: '#343434',
                        scaleColor: false,
                        scaleLength: false,
                        lineCap: 'butt',
                        lineWidth: 10,
                        size: 130,
                        rotate: 0,
                        animate: 2000,
                        onStep: function (from, to, percent) {
                            jquery__WEBPACK_IMPORTED_MODULE_1__(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                }
                count++;
                if (count >= colors_1.length) {
                    count = 0;
                }
            });
        }
        try {
            var element = document.querySelector('.chart');
            new _assets_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__WEBPACK_IMPORTED_MODULE_2__(element, {});
        }
        catch (e) {
            console.log(''); // it will catch an error, just log nothing
        }
    };
    AppComponent.prototype.homeScroll = function () {
        var homePos = document.getElementById('home').offsetTop;
        window.scrollTo({ left: 0, top: homePos, behavior: 'smooth' });
    };
    AppComponent.prototype.startScroll = function () {
        var aboutPos = document.getElementById('about').offsetTop;
        window.scrollTo({ left: 0, top: aboutPos, behavior: 'smooth' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_intro_app_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-intro/app-intro.component */ "./src/app/app-intro/app-intro.component.ts");
/* harmony import */ var _app_draw_btn_app_draw_btn_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-draw-btn/app-draw-btn.component */ "./src/app/app-draw-btn/app-draw-btn.component.ts");
/* harmony import */ var _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-navigation/app-navigation.component */ "./src/app/app-navigation/app-navigation.component.ts");
/* harmony import */ var _app_social_app_social_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-social/app-social.component */ "./src/app/app-social/app-social.component.ts");
/* harmony import */ var _app_contact_form_app_contact_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-contact-form/app-contact-form.component */ "./src/app/app-contact-form/app-contact-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_intro_app_intro_component__WEBPACK_IMPORTED_MODULE_3__["AppIntroComponent"],
                _app_draw_btn_app_draw_btn_component__WEBPACK_IMPORTED_MODULE_4__["AppDrawBtnComponent"],
                _app_navigation_app_navigation_component__WEBPACK_IMPORTED_MODULE_5__["AppNavigationComponent"],
                _app_social_app_social_component__WEBPACK_IMPORTED_MODULE_6__["AppSocialComponent"],
                _app_contact_form_app_contact_form_component__WEBPACK_IMPORTED_MODULE_7__["AppContactFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/assets/jquery/easy-pie-chart/dist/jquery.easypiechart.min.js":
/*!**************************************************************************!*\
  !*** ./src/assets/jquery/easy-pie-chart/dist/jquery.easypiechart.min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a){return b(a)}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");a.appendChild(d),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(a,b){},onStep:function(a,b,c){},onStop:function(a,b){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));"string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?e.easing=jQuery.easing[e.easing]:e.easing=d.easing,"number"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),"boolean"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,"easyPieChart")||(d=a.extend({},b,a(this).data()),a.data(this,"easyPieChart",new c(this,d)))})}});

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/atran1997/Desktop/ant-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map