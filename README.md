# FreeStuffGeoApp
This is starter app for Kroka project demonstrated in my youtube channel 

Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
Prerequisites:

```sh
npm install -g ionic

ionic start 
```

* choose sidemenu type project
```sh
cd [projectname]

ionic serve 
```

* it will open on http://localhost:8100/


Installing plugins:

```sh
ionic cordova plugin add cordova-plugin-geolocation

npm install @ionic-native/geolocation

ionic cordova plugin add cordova-plugin-camera

npm install @ionic-native/camera
```

Build Project :


```sh
ionic cordova build android
```



