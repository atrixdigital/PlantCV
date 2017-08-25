webpackJsonp([2],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(fireauth, navCtrl, alertCtrl, loadingCtrl) {
        this.fireauth = fireauth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Logging in please wait",
            duration: 3000
        });
        loader.present();
        this.fireauth.auth.signInWithEmailAndPassword(this.uname.value, this.password.value).then(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: 'Logged In',
                subTitle: 'You are logged In',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }).catch(function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], LoginPage.prototype, "uname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "password", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      \n    </ion-col>\n    <ion-col xl>\n      <ion-avatar item-start>\n    <img src="assets/img/login.png">\n    </ion-avatar>\n    </ion-col>\n    <ion-col>\n      \n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n <ion-list>\n\n  <ion-item>\n     <ion-avatar item-start>\n    <img src="assets/img/username.png">\n    </ion-avatar>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" #username></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n    <img src="assets/img/password.png">\n    </ion-avatar>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" #password></ion-input>\n  </ion-item>\n</ion-list>\n<div padding>\n  <button color="secondary" ion-button full (click) = "signIn()">Sign In</button>\n</div>\n\n<div padding>\n  <button color="secondary" ion-button full (click) = "register()">Register</button>\n</div>\n</ion-content>'/*ion-inline-end:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(fire, navCtrl, navParams, alertCtrl, loadingCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Registering user please wait",
            duration: 3000
        });
        loader.present();
        this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
            .then(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: 'User registered',
                subTitle: 'Please log In now',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }).catch(function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
        console.log(this.uname.value, this.password.value);
    };
    RegisterPage.prototype.signIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('username'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "uname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "password", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      \n    </ion-col>\n    <ion-col xl>\n      <ion-avatar item-start>\n    <img src="assets/img/registration.png">\n    </ion-avatar>\n    </ion-col>\n    <ion-col>\n      \n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n <ion-list>\n\n  <ion-item>\n   <ion-avatar item-start>\n    <img src="assets/img/username.png">\n    </ion-avatar>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="text" #username></ion-input>\n  </ion-item>\n\n  <ion-item>\n   <ion-avatar item-start>\n    <img src="assets/img/password.png">\n    </ion-avatar>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" #password></ion-input>\n  </ion-item>\n</ion-list>\n<div padding>\n  <button color="secondary" ion-button full (click) = "register()">Register</button>\n</div>\n\n<div padding>\n  <button color="secondary" ion-button full (click) = "signIn()">Sign In</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		697,
		1
	],
	"../pages/register/register.module": [
		696,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 222;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__disease_disease__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__disease_disease__["a" /* DiseasePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Sensor" tabIcon="home"></ion-tab>\n \n  <ion-tab [root]="tab2Root" tabTitle="Diseases" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import {Http} from '@angular/http';
/**
 * Generated class for the DiseasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DiseasePage = (function () {
    function DiseasePage(db, androidPermissions, navCtrl, camera, http, alertCtrl) {
        this.db = db;
        this.androidPermissions = androidPermissions;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.submit = false;
        this.dbPath = "/diseases";
    }
    // 922428CF
    DiseasePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DiseasePage');
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (success) { return console.log('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermissions([_this.androidPermissions.PERMISSION.CAMERA, _this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]); });
    };
    DiseasePage.prototype.refrestValues = function () {
        this.base64Image = "";
        this.name.value = "";
    };
    DiseasePage.prototype.takePicture = function (source) {
        var _this = this;
        if (source == "camera") {
            this.sourceSelection = this.camera.PictureSourceType.CAMERA;
        }
        else if (source == "gallery") {
            this.sourceSelection = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        this.camera.getPicture({
            sourceType: this.sourceSelection,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
            //      targetWidth: 1000,
            //      targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    //this will update the firebase photo
    DiseasePage.prototype.setSpecial = function () {
        this.db.list(this.dbPath).update(this.name, {
            image: this.base64Image,
        });
        //  console.log("setting up special photo")
        // let data ={
        //   currentImg:this.base64Image,
        //   name:this.name.value
        // } 
        // let myHeaders = new Headers();
        //   myHeaders.append('Content-Type', 'application/json');    
        //      let options = new RequestOptions({ headers: myHeaders });
        // this.http.post('https://plantcv.fwd.wf/disease/special',data,options)
        // .map(res=>res.json()).subscribe((data)=>{
        //   console.log(data.message);
        // },(err)=>{
        //   console.log(err);
        // });
    };
    DiseasePage.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            name: this.name.value,
            currentImg: this.base64Image
        };
        if (!data.currentImg) {
            var ImgAlert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Please upload an Image',
                buttons: ['OK']
            });
            ImgAlert.present();
        }
        else if (!data.name) {
            var CropAlert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Please select a crop',
                buttons: ['OK']
            });
            CropAlert.present();
        }
        console.log(data);
        var myHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: myHeaders });
        this.http.post('https://plantcv.fwd.wf/disease/', data, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error.message || error);
            setTimeout(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: error.message || error,
                    buttons: ['OK']
                });
                alert.present();
            }, 10);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error.message || error);
        })
            .subscribe(function (res) {
            _this.submit = true;
            _this.result = res;
            setTimeout(function () {
                var alert = _this.alertCtrl.create({
                    title: '<img src="' + _this.base64Image + '"/>',
                    subTitle: '<p>' + _this.result.message + '<br> <b>Solution :</b>' + _this.result.solution,
                    buttons: ['OK']
                });
                alert.present();
                _this.refrestValues();
            }, 1200);
        }, function (err) {
            setTimeout(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Result :',
                    subTitle: 'Server Error' + _this.result.message,
                    buttons: ['OK']
                });
                alert.present();
                _this.refrestValues();
            }, 2200);
        });
    };
    return DiseasePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('name'),
    __metadata("design:type", Object)
], DiseasePage.prototype, "name", void 0);
DiseasePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-disease',template:/*ion-inline-start:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/disease/disease.html"*/'<ion-header>\n  <ion-navbar color="twitter">\n    <ion-title>\n      Disease\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top >\n\n\n<ion-grid>\n  <ion-row>\n   \n    <ion-col xl>\n    \n     <img src="assets/img/disease.jpg" style="width:100%">\n    \n    </ion-col>\n   \n  </ion-row>\n</ion-grid>\n\n\n\n\n<ion-list padding>\n\n\n\n\n\n  <ion-item>\n    <ion-avatar item-start>\n     <img src="assets/img/fruits.png"></ion-avatar>\n    <ion-label>Crop</ion-label>\n    <ion-select #name>\n      <ion-option value="apple">Apple</ion-option>\n      <ion-option value="mango">mango</ion-option>\n      <ion-option value="orange">Orange</ion-option>\n      <ion-option value="banana">Banana</ion-option>\n      <ion-option value="peach">Peach</ion-option>\n      <ion-option value="strawberry">Strawberry</ion-option>\n      </ion-select>\n  </ion-item>\n\n\n <ion-item>\n  <ion-avatar  item-start (click)="setSpecial()">\n     <img src="assets/img/gallery.png">\n  </ion-avatar>\n    \n    <ion-grid>\n        <ion-row>\n         \n          <ion-col xl>\n          \n           <img [src]="base64Image" *ngIf="base64Image" />\n         \n          </ion-col>\n         \n          </ion-row>\n           <ion-row>\n              <button ion-button (click)="takePicture(\'gallery\')"> Gallery </button>\n            <button ion-button (click)="takePicture(\'camera\')"> Camera </button>\n         </ion-row>\n      </ion-grid>\n  </ion-item>\n\n\n  \n\n</ion-list>  \n\n<div padding>\n  <button color="secondary" ion-button full (click) = "onSubmit()">submit</button>\n</div>\n\n\n  \n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/disease/disease.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_android_permissions__["a" /* AndroidPermissions */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DiseasePage);

//# sourceMappingURL=disease.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_values_values__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, value) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.value = value;
    }
    HomePage.prototype.refrestValues = function () {
        this.temperature.value = "";
        this.ph.value = "";
        this.sunlight.value = "";
        this.moisture.value = "";
    };
    HomePage.prototype.submit = function () {
        var _this = this;
        if (this.temperature.value > 0 && this.temperature.value < 55 && this.ph.value > 0 && this.ph.value < 14) {
            // console.log(this.temperature.value);
            //  console.log(this.ph.value);
            // console.log(this.sunlight.value);
            // console.log(this.moisture.value);
            var data = this.temperature.value + " " + this.ph.value + " " + this.sunlight.value + " " + this.moisture.value;
            // console.log(data);
            this.value.getvalues(data).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data.minMatch[0].label);
                var alert = _this.alertCtrl.create({
                    title: "<h1>Result </h1>",
                    subTitle: data.bestMatch.toUpperCase() + " is best for this soil<hr>",
                    message: "Soil is also suitable for <br>" + data.minMatch[0].label.toUpperCase() + "<br>" + data.minMatch[1].label.toUpperCase() + "<br>" + data.minMatch[2].label.toUpperCase() + "<br>" + data.minMatch[3].label.toUpperCase() + ".",
                    buttons: ['OK']
                });
                alert.present();
            }, function (err) { return console.log(err); }, function () {
                _this.refrestValues();
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Invalid values',
                buttons: ['OK']
            });
            alert_1.present();
            this.refrestValues();
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('temp'),
    __metadata("design:type", Object)
], HomePage.prototype, "temperature", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ph'),
    __metadata("design:type", Object)
], HomePage.prototype, "ph", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('sunlight'),
    __metadata("design:type", Object)
], HomePage.prototype, "sunlight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('moisture'),
    __metadata("design:type", Object)
], HomePage.prototype, "moisture", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="twitter">\n    <ion-title>\n      Sensor\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-top >\n\n\n<ion-grid>\n  <ion-row>\n   \n    <ion-col xl>\n    \n     <img src="assets/img/home.jpg" style="width:100%">\n    \n    </ion-col>\n   \n  </ion-row>\n</ion-grid>\n\n\n\n\n<ion-list padding>\n\n\n\n  <ion-item>\n    <ion-avatar item-start>\n    <img src="assets/img/temperature.png">\n    </ion-avatar>\n    <ion-label floating>Temperature</ion-label>\n    <ion-input type="number"  min="0" max="50"  #temp></ion-input>\n  </ion-item>\n\n  \n  \n\n  <ion-item>\n     <ion-avatar item-start>\n      <img src="assets/img/ph.png"></ion-avatar>\n    <ion-label floating>pH</ion-label>\n    <ion-input type="number" min="0" max="14" #ph></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-avatar item-start>\n     <img src="assets/img/sunlight.png"></ion-avatar>\n    <ion-label>Sunlight</ion-label>\n    <ion-select #sunlight>\n      <ion-option value="high">High</ion-option>\n      <ion-option value="low">low</ion-option>\n      <ion-option value="normal">normal</ion-option>\n      </ion-select>\n  </ion-item>\n\n\n <ion-item>\n  <ion-avatar item-start>\n    <img src="assets/img/moisture.png"> </ion-avatar>\n    <ion-label>Moisture</ion-label>\n    <ion-select #moisture>\n      <ion-option value="dry+">Dry +</ion-option>\n      <ion-option value="dry-">Dry -</ion-option>\n      <ion-option value="wet+">Wet +</ion-option>\n      <ion-option value="wet-">Wet -</ion-option>\n      </ion-select>\n  </ion-item>\n\n\n  \n\n</ion-list>  \n\n<div padding>\n  <button color="secondary" ion-button full (click) = "submit()">submit</button>\n</div>\n\n\n  \n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_values_values__["a" /* ValuesProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValuesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ValuesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ValuesProvider = (function () {
    function ValuesProvider(http) {
        this.http = http;
        console.log('Hello ValuesProvider Provider');
    }
    ValuesProvider.prototype.getvalues = function (data) {
        console.log(data);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append("Access-Control-Allow-Origin", "http://localhost:8100");
        return this.http.post("https://plantcv.fwd.wf/sensor/data", { name: data }, {
            headers: header
        });
    };
    return ValuesProvider;
}());
ValuesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ValuesProvider);

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(339);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_disease_disease__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_values_values__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_android_permissions__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseAuth = {
    apiKey: "AIzaSyA1xI8zkTTyQVsGQ8tPMY4dsvVd6sSoCqs",
    authDomain: "jobsfiverr-4acf1.firebaseapp.com",
    databaseURL: "https://jobsfiverr-4acf1.firebaseio.com",
    projectId: "jobsfiverr-4acf1",
    storageBucket: "jobsfiverr-4acf1.appspot.com",
    messagingSenderId: "80394490012"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_disease_disease__["a" /* DiseasePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_disease_disease__["a" /* DiseasePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_values_values__["a" /* ValuesProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/moeidsaleem/Desktop/Atrix/Projects/plantCV/ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map