import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ToastController, Platform, LoadingController } from "@ionic/angular";
import { GoogleMaps, GoogleMapsEvent, GoogleMapsAnimation, HtmlInfoWindow } from "@ionic-native/google-maps";
let Tab1Page = class Tab1Page {
    constructor(loadingCtrl, toastCtrl, platform) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Since ngOnInit() is executed before `deviceready` event,
            // you have to wait the event.
            yield this.platform.ready();
            yield this.loadMap();
        });
    }
    loadMap() {
        this.map = GoogleMaps.create("map_canvas", {
            camera: {
                target: {
                    lat: 43.0741704,
                    lng: -89.3809802
                },
                zoom: 18,
                tilt: 30
            }
        });
    }
    onButtonClick() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.map.clear();
            this.loading = yield this.loadingCtrl.create({
                message: "Please wait..."
            });
            yield this.loading.present();
            let htmlInfoWindow = new HtmlInfoWindow();
            // flip-flop contents
            // https://davidwalsh.name/css-flip
            let frame = document.createElement("div");
            // Get the location of you
            this.map
                .getMyLocation()
                .then((location) => {
                this.loading.dismiss();
                console.log(JSON.stringify(location, null, 2));
                // Move the map camera to the location with animation
                this.map.animateCamera({
                    target: location.latLng,
                    zoom: 17,
                    tilt: 30
                });
                frame.innerHTML =
                    `
        <div class="flip-container" id="flip-container">
          <div class="flipper">
            <div class="front">
            <h3>Title </h3>
            <img src="assets/imgs/hearst_castle.jpg">
          </div>
          <div class="back">
          ` +
                        location.latLng +
                        `
            </div>
          </div>
        </div>`;
                htmlInfoWindow.setContent(frame, {
                    width: "170px"
                });
                // add a marker
                let marker = this.map.addMarkerSync({
                    title: "@ionic-native/google-maps plugin!",
                    snippet: "This plugin is awesome!",
                    position: location.latLng,
                    animation: GoogleMapsAnimation.BOUNCE
                });
                // show the infoWindow
                marker.showInfoWindow();
                // If clicked it, display the alert
                marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
                    htmlInfoWindow.open(marker);
                });
            })
                .catch(err => {
                this.loading.dismiss();
                this.showToast(err.error_message);
            });
        });
    }
    showToast(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                position: "middle"
            });
            toast.present();
        });
    }
};
Tab1Page = tslib_1.__decorate([
    Component({
        selector: "app-tab1",
        templateUrl: "tab1.page.html",
        styleUrls: ["tab1.page.scss"]
    }),
    tslib_1.__metadata("design:paramtypes", [LoadingController, ToastController, Platform])
], Tab1Page);
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map