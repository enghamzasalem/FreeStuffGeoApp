import {Component, OnInit} from "@angular/core";
import {ToastController, Platform, LoadingController} from "@ionic/angular";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  HtmlInfoWindow
} from "@ionic-native/google-maps";
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  map: GoogleMap;
  loading: any;
  capturedSnapURL: string;
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform
  ) {}

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
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

  async onButtonClick() {
    this.map.clear();
    var locations = [
      ["Bondi Beach", 55.7444001, 48.5541523, 4],
      ["Coogee Beach", 54.7444001, 49.5541523, 5],
      ["Cronulla Beach", 55.7244001, 48.5241523, 3],
      ["Manly Beach", 52.7444001, 45.5541523, 2],
      ["Maroubra Beach", 52.7444001, 43.5541523, 1]
    ];
    var marker, i;

    for (i = 0; i < locations.length; i++) {
      this.map.addMarkerSync({
        title: locations[i][0].toString(),
        snippet: "This plugin is awesome!",
        position: {
          lat: Number(locations[i][1]),
          lng: Number(locations[i][2])
        },
        animation: GoogleMapsAnimation.BOUNCE
      });
    }
    this.loading = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await this.loading.present();
    let htmlInfoWindow = new HtmlInfoWindow();

    // flip-flop contents
    // https://davidwalsh.name/css-flip
    let frame: HTMLElement = document.createElement("div");
    // Get the location of you
    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        this.loading.dismiss();
        console.log(JSON.stringify(location, null, 2));
        // Move the map camera to the location with animation
        locations.push(["My Location", location.latLng.lat, location.latLng.lng, 4]);
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });
        this.camera.getPicture(this.cameraOptions).then(
          imageData => {
            // this.camera.DestinationType.FILE_URI gives file URI saved in local
            // this.camera.DestinationType.DATA_URL gives base64 URI

            let base64Image = "data:image/jpeg;base64," + imageData;
            this.capturedSnapURL = base64Image;
          },
          err => {
            console.log(err);
            // Handle error
          }
        );
        frame.innerHTML =
          `
        <div class="flip-container" id="flip-container">
          <div class="flipper">
            <div class="front">
            <h3>Title </h3>
            <img src="` +
          this.capturedSnapURL +
          `" width="100%">
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
        let marker: Marker = this.map.addMarkerSync({
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
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: "middle"
    });

    toast.present();
  }
}
