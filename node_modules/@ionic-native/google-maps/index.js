var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
import { IonicNativePlugin, instanceAvailability, cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability, getPromise } from '@ionic-native/core';
import { Observable } from 'rxjs';
var TARGET_ELEMENT_FINDING_QUERYS = [
    '.show-page #',
    'ion-router-outlet[main] #',
    '#'
];
var LatLng = /** @class */ (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());
export { LatLng };
var LatLngBounds = /** @class */ (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    LatLngBounds.prototype.toString = function () { return cordovaInstance(this, "toString", { "sync": true }, arguments); };
    LatLngBounds.prototype.toUrlValue = function (precision) { return cordovaInstance(this, "toUrlValue", { "sync": true }, arguments); };
    LatLngBounds.prototype.extend = function (LatLng) { return cordovaInstance(this, "extend", { "sync": true }, arguments); };
    LatLngBounds.prototype.contains = function (LatLng) { return cordovaInstance(this, "contains", { "sync": true }, arguments); };
    LatLngBounds.prototype.getCenter = function () { return cordovaInstance(this, "getCenter", { "sync": true }, arguments); };
    Object.defineProperty(LatLngBounds.prototype, "northeast", {
        get: function () { return instancePropertyGet(this, "northeast"); },
        set: function (value) { instancePropertySet(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "southwest", {
        get: function () { return instancePropertyGet(this, "southwest"); },
        set: function (value) { instancePropertySet(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "type", {
        get: function () { return instancePropertyGet(this, "type"); },
        set: function (value) { instancePropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return LatLngBounds;
}());
export { LatLngBounds };
var VisibleRegion = /** @class */ (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    VisibleRegion.prototype.toString = function () { return cordovaInstance(this, "toString", { "sync": true }, arguments); };
    VisibleRegion.prototype.toUrlValue = function (precision) { return cordovaInstance(this, "toUrlValue", { "sync": true }, arguments); };
    VisibleRegion.prototype.contains = function (LatLng) { return cordovaInstance(this, "contains", { "sync": true }, arguments); };
    Object.defineProperty(VisibleRegion.prototype, "northeast", {
        get: function () { return instancePropertyGet(this, "northeast"); },
        set: function (value) { instancePropertySet(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "southwest", {
        get: function () { return instancePropertyGet(this, "southwest"); },
        set: function (value) { instancePropertySet(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farLeft", {
        get: function () { return instancePropertyGet(this, "farLeft"); },
        set: function (value) { instancePropertySet(this, "farLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farRight", {
        get: function () { return instancePropertyGet(this, "farRight"); },
        set: function (value) { instancePropertySet(this, "farRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearLeft", {
        get: function () { return instancePropertyGet(this, "nearLeft"); },
        set: function (value) { instancePropertySet(this, "nearLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearRight", {
        get: function () { return instancePropertyGet(this, "nearRight"); },
        set: function (value) { instancePropertySet(this, "nearRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "type", {
        get: function () { return instancePropertyGet(this, "type"); },
        set: function (value) { instancePropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return VisibleRegion;
}());
export { VisibleRegion };
/**
 * @hidden
 */
export var StreetViewSource = {
    DEFAULT: 'DEFAULT',
    OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
export var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    POI_CLICK: 'poi_click',
    MY_LOCATION_CLICK: 'my_location_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end',
    KML_CLICK: 'kml_click',
    PANORAMA_READY: 'panorama_ready',
    PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
    PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
    PANORAMA_CLICK: 'panorama_click'
};
/**
 * @hidden
 */
export var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
export var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
var GoogleMaps = /** @class */ (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    GoogleMaps.create = function (element, options) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            else if (typeof element === 'object') {
                options = element;
                element = null;
            }
            var googleMap = new GoogleMap(element, options);
            googleMap.set('_overlays', {});
            return googleMap;
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    /**
     * @deprecation keep this for backward compatibility.
     * @hidden
     */
    GoogleMaps.prototype.create = function (element, options) {
        console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
        return GoogleMaps.create(element, options);
    };
    /**
     * Creates a new StreetView instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {StreetViewOptions} [options] Options
     * @return {StreetViewPanorama}
     */
    GoogleMaps.createPanorama = function (element, options) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            return new StreetViewPanorama(element, options);
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    GoogleMaps.pluginName = "GoogleMaps";
    GoogleMaps.pluginRef = "plugin.google.maps";
    GoogleMaps.plugin = "cordova-plugin-googlemaps";
    GoogleMaps.repo = "https://github.com/mapsplugin/cordova-plugin-googlemaps";
    GoogleMaps.document = "https://ionicframework.com/docs/native/google-maps/";
    GoogleMaps.install = "ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID=\"YOUR_ANDROID_API_KEY_IS_HERE\" --variable API_KEY_FOR_IOS=\"YOUR_IOS_API_KEY_IS_HERE\"";
    GoogleMaps.installVariables = ["API_KEY_FOR_ANDROID", "API_KEY_FOR_IOS"];
    GoogleMaps.platforms = ["Android", "iOS", "Browser"];
    return GoogleMaps;
}(IonicNativePlugin));
export { GoogleMaps };
var displayErrorMessage = function (element, message) {
    var errorDiv = document.createElement('div');
    errorDiv.innerHTML = message;
    errorDiv.style.color = 'red';
    errorDiv.style.position = 'absolute';
    errorDiv.style.width = '80%';
    errorDiv.style.height = '50%';
    errorDiv.style.top = '0px';
    errorDiv.style.bottom = '0px';
    errorDiv.style.right = '0px';
    errorDiv.style.left = '0px';
    errorDiv.style.padding = '0px';
    errorDiv.style.margin = 'auto';
    element.style.position = 'relative';
    element.style.backgroundColor = '#ccc7';
    element.appendChild(errorDiv);
};
var normalizeArgumentsOfEventListener = function (_objectInstance, args) {
    if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
        if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = _this;
        }
        else if (_objectInstance.__pgmId.indexOf('markercluster_') !== -1) {
            var _overlays = _objectInstance.getMap().get('_overlays') || {};
            var overlay = _overlays[args[args.length - 1].getId()];
            if (!overlay) {
                var markerJS = args[args.length - 1];
                var markerId_1 = markerJS.getId();
                var markerCluster = _objectInstance;
                overlay = new Marker(markerCluster.getMap(), markerJS);
                _objectInstance.getMap().get('_overlays')[markerId_1] = overlay;
                markerJS.one(markerJS.getId() + '_remove', function () {
                    _objectInstance.getMap().get('_overlays')[markerId_1] = null;
                    delete _objectInstance.getMap().get('_overlays')[markerId_1];
                });
            }
            args[args.length - 1] = overlay;
        }
        else {
            args[args.length - 1] = _objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
        }
    }
    return args;
};
var BaseClass = /** @class */ (function () {
    function BaseClass(objInstance) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (!objInstance) {
                objInstance = new (GoogleMaps.getPlugin().BaseClass)();
            }
            this._objectInstance = objInstance;
        }
        else {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.');
        }
    }
    BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.addEventListener(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addEventListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".');
                return _this.addEventListenerOnce(eventName);
            }
        })();
    };
    BaseClass.prototype.get = function (key) { return cordovaInstance(this, "get", { "sync": true }, arguments); };
    BaseClass.prototype.set = function (key, value, noNotify) { return cordovaInstance(this, "set", { "sync": true }, arguments); };
    BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) { return cordovaInstance(this, "bindTo", { "sync": true }, arguments); };
    BaseClass.prototype.on = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.on(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.one = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.hasEventListener = function () { return cordovaInstance(this, "hasEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.empty = function () { return cordovaInstance(this, "empty", { "sync": true }, arguments); };
    BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return cordovaInstance(this, "trigger", { "sync": true }, arguments);
    };
    BaseClass.prototype.destroy = function () { return cordovaInstance(this, "destroy", { "sync": true }, arguments); };
    BaseClass.prototype.removeEventListener = function (eventName, listener) { return cordovaInstance(this, "removeEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.off = function (eventName, listener) { return cordovaInstance(this, "off", { "sync": true }, arguments); };
    BaseClass.plugin = "cordova-plugin-googlemaps";
    BaseClass.pluginName = "GoogleMaps";
    BaseClass.pluginRef = "plugin.google.maps.BaseClass";
    BaseClass.repo = "";
    return BaseClass;
}());
export { BaseClass };
var BaseArrayClass = /** @class */ (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = this;
        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
            _this = _super.call(this, initialData) || this;
        }
        else if (Array.isArray(initialData)) {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)(initialData)) || this;
        }
        else {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)([])) || this;
        }
        return _this;
    }
    BaseArrayClass.prototype.empty = function (noNotify) { return cordovaInstance(this, "empty", { "sync": true }, arguments); };
    BaseArrayClass.prototype.forEach = function (fn) { return cordovaInstance(this, "forEach", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<void>}
     */
    BaseArrayClass.prototype.forEachAsync = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.forEach(fn, resolve);
        });
    };
    BaseArrayClass.prototype.map = function (fn) { return cordovaInstance(this, "map", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapAsync = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.map(fn, resolve);
        });
    };
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapSeries = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.mapSeries(fn, resolve);
        });
    };
    BaseArrayClass.prototype.filter = function (fn) { return cordovaInstance(this, "filter", { "sync": true }, arguments); };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<T[]>} returns a new filtered array
     */
    BaseArrayClass.prototype.filterAsync = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.filter(fn, resolve);
        });
    };
    BaseArrayClass.prototype.getArray = function () { return cordovaInstance(this, "getArray", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getAt = function (index) { return cordovaInstance(this, "getAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getLength = function () { return cordovaInstance(this, "getLength", { "sync": true }, arguments); };
    BaseArrayClass.prototype.indexOf = function (element) { return cordovaInstance(this, "indexOf", { "sync": true }, arguments); };
    BaseArrayClass.prototype.reverse = function () { return cordovaInstance(this, "reverse", { "sync": true }, arguments); };
    BaseArrayClass.prototype.sort = function () { return cordovaInstance(this, "sort", { "sync": true }, arguments); };
    BaseArrayClass.prototype.insertAt = function (index, element, noNotify) { return cordovaInstance(this, "insertAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.pop = function (noNotify) { return cordovaInstance(this, "pop", { "sync": true }, arguments); };
    BaseArrayClass.prototype.push = function (element, noNotify) { return cordovaInstance(this, "push", { "sync": true }, arguments); };
    BaseArrayClass.prototype.removeAt = function (index, noNotify) { return cordovaInstance(this, "removeAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.setAt = function (index, element, noNotify) { return cordovaInstance(this, "setAt", { "sync": true }, arguments); };
    BaseArrayClass.pluginName = "BaseArrayClass";
    BaseArrayClass.plugin = "cordova-plugin-googlemaps";
    BaseArrayClass.pluginRef = "plugin.google.maps.BaseArrayClass";
    return BaseArrayClass;
}(BaseClass));
export { BaseArrayClass };
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Circle.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Circle.prototype.getMap = function () {
        return this._map;
    };
    Circle.prototype.setCenter = function (latLng) { return cordovaInstance(this, "setCenter", { "sync": true }, arguments); };
    Circle.prototype.getCenter = function () { return cordovaInstance(this, "getCenter", { "sync": true }, arguments); };
    Circle.prototype.getRadius = function () { return cordovaInstance(this, "getRadius", { "sync": true }, arguments); };
    Circle.prototype.setRadius = function (radius) { return cordovaInstance(this, "setRadius", { "sync": true }, arguments); };
    Circle.prototype.setFillColor = function (color) { return cordovaInstance(this, "setFillColor", { "sync": true }, arguments); };
    Circle.prototype.getFillColor = function () { return cordovaInstance(this, "getFillColor", { "sync": true }, arguments); };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { return cordovaInstance(this, "setStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.getStrokeWidth = function () { return cordovaInstance(this, "getStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.setStrokeColor = function (strokeColor) { return cordovaInstance(this, "setStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.getStrokeColor = function () { return cordovaInstance(this, "getStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    Circle.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    Circle.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Circle.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Circle.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Circle.prototype.getBounds = function () { return cordovaInstance(this, "getBounds", { "sync": true }, arguments); };
    Circle.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Circle.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    return Circle;
}(BaseClass));
export { Circle };
var Environment = /** @class */ (function () {
    function Environment() {
    }
    /**
     * Set environment variables.
     */
    Environment.setEnv = function (envOptions) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setEnv(envOptions);
    };
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    Environment.getLicenseInfo = function () {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    Environment.setBackgroundColor = function (color) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation This method is static. Please use Environment.getLicenseInfo()
     * @hidden
     */
    Environment.prototype.getLicenseInfo = function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment.getLicenseInfo();
    };
    /**
     * @deprecation This method is static. Please use Environment.setBackgroundColor()
     * @hidden
     */
    Environment.prototype.setBackgroundColor = function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment.setBackgroundColor(color);
    };
    Environment.plugin = "cordova-plugin-googlemaps";
    Environment.pluginName = "GoogleMaps";
    Environment.pluginRef = "plugin.google.maps.environment";
    Environment.repo = "";
    return Environment;
}());
export { Environment };
var Geocoder = /** @class */ (function () {
    function Geocoder() {
    }
    /**
     * @deprecation This method is static. Please use Geocoder.geocode()
     * @hidden
     */
    Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    Geocoder.geocode = function (request) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return getPromise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return getPromise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    Geocoder.pluginName = "GoogleMaps";
    Geocoder.pluginRef = "plugin.google.maps.Geocoder";
    Geocoder.plugin = "cordova-plugin-googlemaps";
    Geocoder.repo = "";
    return Geocoder;
}());
export { Geocoder };
var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    LocationService.getMyLocation = function (options) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Return true if the application has geolocation permission
     * @return {Promise<boolean>}
     */
    LocationService.hasPermission = function () {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
        });
    };
    LocationService.pluginName = "GoogleMaps";
    LocationService.pluginRef = "plugin.google.maps.LocationService";
    LocationService.plugin = "cordova-plugin-googlemaps";
    LocationService.repo = "";
    return LocationService;
}());
export { LocationService };
var Encoding = /** @class */ (function () {
    function Encoding() {
    }
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    Encoding.decodePath = function (encoded, precision) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.decodePath(encoded, precision);
    };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    Encoding.encodePath = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().encoding.encodePath(path);
    };
    /**
     * @deprecation This method is static. Please use Encoding.decodePath()
     * @hidden
     */
    Encoding.prototype.decodePath = function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding.decodePath(encoded, precision);
    };
    /**
     * @deprecation This method is static. Please use Encoding.encodePath()
     * @hidden
     */
    Encoding.prototype.encodePath = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding.encodePath(path);
    };
    Encoding.pluginName = "GoogleMaps";
    Encoding.pluginRef = "plugin.google.maps.geometry.encoding";
    Encoding.plugin = "cordova-plugin-googlemaps";
    Encoding.repo = "";
    return Encoding;
}());
export { Encoding };
var Poly = /** @class */ (function () {
    function Poly() {
    }
    /**
     * Returns true if the specified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.containsLocation = function (location, path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the specified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.isLocationOnEdge = function (location, path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    Poly.pluginName = "GoogleMaps";
    Poly.pluginRef = "plugin.google.maps.geometry.poly";
    Poly.plugin = "cordova-plugin-googlemaps";
    Poly.repo = "";
    return Poly;
}());
export { Poly };
var Spherical = /** @class */ (function () {
    function Spherical() {
    }
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    Spherical.computeDistanceBetween = function (from, to) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    Spherical.computeOffset = function (from, distance, heading) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    Spherical.computeOffsetOrigin = function (to, distance, heading) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    Spherical.computeLength = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeArea = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeSignedArea = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    Spherical.computeHeading = function (from, to) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    Spherical.interpolate = function (from, to, fraction) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
     * @hidden
     */
    Spherical.prototype.computeDistanceBetween = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffset()
     * @hidden
     */
    Spherical.prototype.computeOffset = function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
     * @hidden
     */
    Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeLength()
     * @hidden
     */
    Spherical.prototype.computeLength = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical.computeLength(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeArea()
     * @hidden
     */
    Spherical.prototype.computeArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical.computeArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeSignedArea()
     * @hidden
     */
    Spherical.prototype.computeSignedArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical.computeSignedArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeHeading()
     * @hidden
     */
    Spherical.prototype.computeHeading = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical.computeHeading(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.interpolate()
     * @hidden
     */
    Spherical.prototype.interpolate = function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical.interpolate(from, to, fraction);
    };
    Spherical.pluginName = "GoogleMaps";
    Spherical.pluginRef = "plugin.google.maps.geometry.spherical";
    Spherical.plugin = "cordova-plugin-googlemaps";
    Spherical.repo = "";
    return Spherical;
}());
export { Spherical };
var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(element, options) {
        var _this = this;
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // -------------------
            // Create a panorama
            // -------------------
            if (element instanceof HTMLElement) {
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(getPromise(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 20) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            if (targets.length > 1) {
                                reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
                            }
                            else {
                                reject(new Error('Can not find the element [#' + element + ']'));
                            }
                        }
                    }, 100);
                }), options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
        return _this;
    }
    StreetViewPanorama.prototype.setPov = function (pov) { return cordovaInstance(this, "setPov", {}, arguments); };
    StreetViewPanorama.prototype.setPosition = function (cameraPosition) { return cordovaInstance(this, "setPosition", {}, arguments); };
    StreetViewPanorama.prototype.setPanningGesturesEnabled = function (gestureEnable) { return cordovaInstance(this, "setPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanningGesturesEnabled = function () { return cordovaInstance(this, "getPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setZoomGesturesEnabled = function (gestureEnable) { return cordovaInstance(this, "setZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getZoomGesturesEnabled = function () { return cordovaInstance(this, "getZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setStreetNamesEnabled = function (gestureEnable) { return cordovaInstance(this, "setStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getStreetNamesEnabled = function () { return cordovaInstance(this, "getStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setNavigationEnabled = function (gestureEnable) { return cordovaInstance(this, "setNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getNavigationEnabled = function () { return cordovaInstance(this, "getNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLinks = function () { return cordovaInstance(this, "getLinks", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLocation = function () { return cordovaInstance(this, "getLocation", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanoId = function () { return cordovaInstance(this, "getPanoId", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPosition = function () { return cordovaInstance(this, "getPosition", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    StreetViewPanorama.pluginName = "StreetViewPanorama";
    StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
    return StreetViewPanorama;
}(BaseClass));
export { StreetViewPanorama };
var GoogleMap = /** @class */ (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options, __timeout) {
        var _this = this;
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // ---------------
            // Create a map
            // ---------------
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(getPromise(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 20) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            if (targets.length > 1) {
                                reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
                            }
                            else {
                                reject(new Error('Can not find the element [#' + element + ']'));
                            }
                        }
                    }, __timeout == null ? 100 : __timeout);
                }), options)) || this;
            }
            else if (element === null && options) {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(null, options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            console.error(errorMessage.join(''));
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginmapid');
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
        }
        return _this;
    }
    GoogleMap.prototype.setDiv = function (domNode) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                if (!domNode) {
                    _this._objectInstance.setDiv();
                    return;
                }
                if (typeof domNode === 'string') {
                    (getPromise(function (resolve, reject) {
                        var i, targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginmapid');
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                resolve(targets[0]);
                                return;
                            }
                        }
                        reject('Can not find [#' + domNode + '] element');
                    }))
                        .then(function (element) {
                        _this._objectInstance.setDiv(element);
                    });
                }
                else {
                    if (domNode instanceof HTMLElement &&
                        !domNode.offsetParent &&
                        domNode.offsetWidth >= 100 && domNode.offsetHeight >= 100) {
                        _this._objectInstance.setDiv(domNode);
                    }
                    else {
                        throw new Error(domNode.tagName + ' is too small. Must be bigger than 100x100.');
                    }
                }
            }
        })();
    };
    GoogleMap.prototype.getDiv = function () { return cordovaInstance(this, "getDiv", { "sync": true }, arguments); };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { return cordovaInstance(this, "setMapTypeId", { "sync": true }, arguments); };
    GoogleMap.prototype.animateCamera = function (cameraPosition) { return cordovaInstance(this, "animateCamera", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomIn = function () { return cordovaInstance(this, "animateCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomOut = function () { return cordovaInstance(this, "animateCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return cordovaInstance(this, "moveCamera", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomIn = function () { return cordovaInstance(this, "moveCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomOut = function () { return cordovaInstance(this, "moveCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.getCameraPosition = function () { return cordovaInstance(this, "getCameraPosition", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTarget = function () { return cordovaInstance(this, "getCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraZoom = function () { return cordovaInstance(this, "getCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraBearing = function () { return cordovaInstance(this, "getCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTilt = function () { return cordovaInstance(this, "getCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTarget = function (latLng) { return cordovaInstance(this, "setCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraZoom = function (zoomLevel) { return cordovaInstance(this, "setCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTilt = function (tiltAngle) { return cordovaInstance(this, "setCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraBearing = function (bearing) { return cordovaInstance(this, "setCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.panBy = function (x, y) { return cordovaInstance(this, "panBy", { "sync": true }, arguments); };
    GoogleMap.prototype.getVisibleRegion = function () { return cordovaInstance(this, "getVisibleRegion", { "sync": true }, arguments); };
    GoogleMap.prototype.getMyLocation = function (options) { return cordovaInstance(this, "getMyLocation", {}, arguments); };
    GoogleMap.prototype.setClickable = function (isClickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    GoogleMap.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    GoogleMap.prototype.clear = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                if (_this.get('_overlays')) {
                    Object.keys(_this.get('_overlays')).forEach(function (overlayId) {
                        _this.get('_overlays')[overlayId] = null;
                        delete _this.get('_overlays')[overlayId];
                    });
                }
                return getPromise(function (resolve) {
                    _this._objectInstance.clear(function () { return resolve(); });
                });
            }
        })();
    };
    GoogleMap.prototype.fromLatLngToPoint = function (latLng) { return cordovaInstance(this, "fromLatLngToPoint", {}, arguments); };
    GoogleMap.prototype.fromPointToLatLng = function (point) { return cordovaInstance(this, "fromPointToLatLng", {}, arguments); };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { return cordovaInstance(this, "setMyLocationEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setMyLocationButtonEnabled = function (enabled) { return cordovaInstance(this, "setMyLocationButtonEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.getFocusedBuilding = function () { return cordovaInstance(this, "getFocusedBuilding", {}, arguments); };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { return cordovaInstance(this, "setIndoorEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { return cordovaInstance(this, "setTrafficEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { return cordovaInstance(this, "setCompassEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { return cordovaInstance(this, "setAllGesturesEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { return cordovaInstance(this, "setPadding", { "sync": true }, arguments); };
    GoogleMap.prototype.setOptions = function (options) { return cordovaInstance(this, "setOptions", { "sync": true }, arguments); };
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addMarker(options, function (marker) {
                        if (marker) {
                            var overlayId_1 = marker.getId();
                            var overlay_1 = new Marker(_this, marker);
                            _this.get('_overlays')[overlayId_1] = overlay_1;
                            marker.one(overlayId_1 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_1] = null;
                                    overlay_1.destroy();
                                }
                            });
                            resolve(overlay_1);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var marker = _this._objectInstance.addMarker(options);
                var overlayId = marker.getId();
                var overlay = new Marker(_this, marker);
                _this.get('_overlays')[overlayId] = overlay;
                marker.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                        if (markerCluster) {
                            var overlayId_2 = markerCluster.getId();
                            var overlay_2 = new MarkerCluster(_this, markerCluster);
                            _this.get('_overlays')[overlayId_2] = overlay_2;
                            markerCluster.one('remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_2] = null;
                                    overlay_2.destroy();
                                }
                            });
                            markerCluster.set('_overlays', new BaseArrayClass());
                            resolve(overlay_2);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerClusterSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var markerCluster = _this._objectInstance.addMarkerCluster(options);
                var overlayId = markerCluster.getId();
                var overlay = new MarkerCluster(_this, markerCluster);
                _this.get('_overlays')[overlayId] = overlay;
                markerCluster.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                markerCluster.set('_overlays', new BaseArrayClass());
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addCircle(options, function (circle) {
                        if (circle) {
                            var overlayId_3 = circle.getId();
                            var overlay_3 = new Circle(_this, circle);
                            _this.get('_overlays')[overlayId_3] = overlay_3;
                            circle.one(overlayId_3 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_3] = null;
                                    overlay_3.destroy();
                                }
                            });
                            resolve(overlay_3);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addCircleSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var circle = _this._objectInstance.addCircle(options);
                var overlayId = circle.getId();
                var overlay = new Circle(_this, circle);
                _this.get('_overlays')[overlayId] = overlay;
                circle.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addPolygon(options, function (polygon) {
                        if (polygon) {
                            var overlayId_4 = polygon.getId();
                            var overlay_4 = new Polygon(_this, polygon);
                            _this.get('_overlays')[overlayId_4] = overlay_4;
                            polygon.one(overlayId_4 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_4] = null;
                                    overlay_4.destroy();
                                }
                            });
                            resolve(overlay_4);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolygonSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var polygon = _this._objectInstance.addPolygon(options);
                var overlayId = polygon.getId();
                var overlay = new Polygon(_this, polygon);
                _this.get('_overlays')[overlayId] = overlay;
                polygon.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addPolyline(options, function (polyline) {
                        if (polyline) {
                            var overlayId_5 = polyline.getId();
                            var overlay_5 = new Polyline(_this, polyline);
                            _this.get('_overlays')[overlayId_5] = overlay_5;
                            polyline.one(overlayId_5 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_5] = null;
                                    overlay_5.destroy();
                                }
                            });
                            resolve(overlay_5);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolylineSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var polyline = _this._objectInstance.addPolyline(options);
                var overlayId = polyline.getId();
                var overlay = new Polyline(_this, polyline);
                _this.get('_overlays')[overlayId] = overlay;
                polyline.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                        if (tileOverlay) {
                            var overlayId_6 = tileOverlay.getId();
                            var overlay_6 = new TileOverlay(_this, tileOverlay);
                            _this.get('_overlays')[overlayId_6] = overlay_6;
                            tileOverlay.one(overlayId_6 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_6] = null;
                                    overlay_6.destroy();
                                }
                            });
                            resolve(overlay_6);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addTileOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var tileOverlay = _this._objectInstance.addTileOverlay(options);
                var overlayId = tileOverlay.getId();
                var overlay = new TileOverlay(_this, tileOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                tileOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                        if (groundOverlay) {
                            var overlayId_7 = groundOverlay.getId();
                            var overlay_7 = new GroundOverlay(_this, groundOverlay);
                            _this.get('_overlays')[overlayId_7] = overlay_7;
                            groundOverlay.one(overlayId_7 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_7] = null;
                                    overlay_7.destroy();
                                }
                            });
                            resolve(overlay_7);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var groundOverlay = _this._objectInstance.addGroundOverlay(options);
                var overlayId = groundOverlay.getId();
                var overlay = new GroundOverlay(_this, groundOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                groundOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                        if (kmlOverlay) {
                            var overlayId_8 = kmlOverlay.getId();
                            var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                            _this.get('_overlays')[overlayId_8] = overlay_8;
                            kmlOverlay.one(overlayId_8 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_8] = null;
                                    overlay_8.destroy();
                                }
                            });
                            resolve(overlay_8);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.toDataURL = function (options) { return cordovaInstance(this, "toDataURL", {}, arguments); };
    GoogleMap.pluginName = "GoogleMaps";
    GoogleMap.plugin = "cordova-plugin-googlemaps";
    return GoogleMap;
}(BaseClass));
export { GoogleMap };
var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    GroundOverlay.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    GroundOverlay.prototype.getMap = function () {
        return this._map;
    };
    GroundOverlay.prototype.setBounds = function (bounds) { return cordovaInstance(this, "setBounds", { "sync": true }, arguments); };
    GroundOverlay.prototype.setBearing = function (bearing) { return cordovaInstance(this, "setBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.getBearing = function () { return cordovaInstance(this, "getBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.setImage = function (imageUrl) { return cordovaInstance(this, "setImage", { "sync": true }, arguments); };
    GroundOverlay.prototype.setOpacity = function (opacity) { return cordovaInstance(this, "setOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.getOpacity = function () { return cordovaInstance(this, "getOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.setZIndex = function (index) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return GroundOverlay;
}(BaseClass));
export { GroundOverlay };
var HtmlInfoWindow = /** @class */ (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        return _super.call(this, new (GoogleMaps.getPlugin().HtmlInfoWindow)()) || this;
    }
    HtmlInfoWindow.prototype.setBackgroundColor = function (color) { return cordovaInstance(this, "setBackgroundColor", {}, arguments); };
    HtmlInfoWindow.prototype.setContent = function (content, cssOptions) { return cordovaInstance(this, "setContent", {}, arguments); };
    HtmlInfoWindow.prototype.open = function (marker) { return cordovaInstance(this, "open", {}, arguments); };
    HtmlInfoWindow.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    HtmlInfoWindow.plugin = "cordova-plugin-googlemaps";
    HtmlInfoWindow.pluginName = "GoogleMaps";
    HtmlInfoWindow.pluginRef = "plugin.google.maps.HtmlInfoWindow";
    HtmlInfoWindow.repo = "";
    return HtmlInfoWindow;
}(BaseClass));
export { HtmlInfoWindow };
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Marker.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () {
        return this._map;
    };
    Marker.prototype.setPosition = function (latLng) { return cordovaInstance(this, "setPosition", { "sync": true }, arguments); };
    Marker.prototype.getPosition = function () { return cordovaInstance(this, "getPosition", { "sync": true }, arguments); };
    Marker.prototype.showInfoWindow = function () { return cordovaInstance(this, "showInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.hideInfoWindow = function () { return cordovaInstance(this, "hideInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.setAnimation = function (animation) { return cordovaInstance(this, "setAnimation", { "sync": true }, arguments); };
    Marker.prototype.setDisableAutoPan = function (disableAutoPan) { return cordovaInstance(this, "setDisableAutoPan", { "sync": true }, arguments); };
    Marker.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Marker.prototype.isVisible = function () { return cordovaInstance(this, "isVisible", { "sync": true }, arguments); };
    Marker.prototype.setTitle = function (title) { return cordovaInstance(this, "setTitle", { "sync": true }, arguments); };
    Marker.prototype.getTitle = function () { return cordovaInstance(this, "getTitle", { "sync": true }, arguments); };
    Marker.prototype.setSnippet = function (snippet) { return cordovaInstance(this, "setSnippet", { "sync": true }, arguments); };
    Marker.prototype.getSnippet = function () { return cordovaInstance(this, "getSnippet", { "sync": true }, arguments); };
    Marker.prototype.setOpacity = function (alpha) { return cordovaInstance(this, "setOpacity", { "sync": true }, arguments); };
    Marker.prototype.getOpacity = function () { return cordovaInstance(this, "getOpacity", { "sync": true }, arguments); };
    Marker.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Marker.prototype.setIconAnchor = function (x, y) { return cordovaInstance(this, "setIconAnchor", { "sync": true }, arguments); };
    Marker.prototype.setInfoWindowAnchor = function (x, y) { return cordovaInstance(this, "setInfoWindowAnchor", { "sync": true }, arguments); };
    Marker.prototype.isInfoWindowShown = function () { return cordovaInstance(this, "isInfoWindowShown", { "sync": true }, arguments); };
    Marker.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Marker.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Marker.prototype.setDraggable = function (draggable) { return cordovaInstance(this, "setDraggable", { "sync": true }, arguments); };
    Marker.prototype.isDraggable = function () { return cordovaInstance(this, "isDraggable", { "sync": true }, arguments); };
    Marker.prototype.setFlat = function (flat) { return cordovaInstance(this, "setFlat", { "sync": true }, arguments); };
    Marker.prototype.setIcon = function (icon) { return cordovaInstance(this, "setIcon", { "sync": true }, arguments); };
    Marker.prototype.setRotation = function (rotation) { return cordovaInstance(this, "setRotation", { "sync": true }, arguments); };
    Marker.prototype.getRotation = function () { return cordovaInstance(this, "getRotation", { "sync": true }, arguments); };
    return Marker;
}(BaseClass));
export { Marker };
var MarkerCluster = /** @class */ (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    MarkerCluster.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarker = function (marker) { return cordovaInstance(this, "addMarker", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarkers = function (markers) { return cordovaInstance(this, "addMarkers", { "sync": true }, arguments); };
    MarkerCluster.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    MarkerCluster.prototype.getMap = function () {
        return this._map;
    };
    return MarkerCluster;
}(BaseClass));
export { MarkerCluster };
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polygon.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polygon.prototype.getMap = function () {
        return this._map;
    };
    Polygon.prototype.setPoints = function (points) { return cordovaInstance(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polygon.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polygon.prototype.setHoles = function (holes) { return cordovaInstance(this, "setHoles", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    Polygon.prototype.getHoles = function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    Polygon.prototype.setFillColor = function (fillColor) { return cordovaInstance(this, "setFillColor", { "sync": true }, arguments); };
    Polygon.prototype.getFillColor = function () { return cordovaInstance(this, "getFillColor", { "sync": true }, arguments); };
    Polygon.prototype.setStrokeColor = function (strokeColor) { return cordovaInstance(this, "setStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeColor = function () { return cordovaInstance(this, "getStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    Polygon.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    Polygon.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Polygon.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    Polygon.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Polygon.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Polygon.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { return cordovaInstance(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeWidth = function () { return cordovaInstance(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.setGeodesic = function (geodesic) { return cordovaInstance(this, "setGeodesic", { "sync": true }, arguments); };
    Polygon.prototype.getGeodesic = function () { return cordovaInstance(this, "getGeodesic", { "sync": true }, arguments); };
    return Polygon;
}(BaseClass));
export { Polygon };
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polyline.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polyline.prototype.getMap = function () {
        return this._map;
    };
    Polyline.prototype.setPoints = function (points) { return cordovaInstance(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polyline.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polyline.prototype.setGeoDesic = function (geoDesic) { return cordovaInstance(this, "setGeoDesic", { "sync": true }, arguments); };
    Polyline.prototype.getGeodesic = function () { return cordovaInstance(this, "getGeodesic", { "sync": true }, arguments); };
    Polyline.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Polyline.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    Polyline.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    Polyline.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeColor = function (strokeColor) { return cordovaInstance(this, "setStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeColor = function () { return cordovaInstance(this, "getStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeWidth = function (strokeWidth) { return cordovaInstance(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeWidth = function () { return cordovaInstance(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.setZIndex = function (index) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Polyline.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Polyline.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return Polyline;
}(BaseClass));
export { Polyline };
var TileOverlay = /** @class */ (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    TileOverlay.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    TileOverlay.prototype.getMap = function () {
        return this._map;
    };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { return cordovaInstance(this, "setFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.getFadeIn = function () { return cordovaInstance(this, "getFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.setOpacity = function (opacity) { return cordovaInstance(this, "setOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.getOpacity = function () { return cordovaInstance(this, "getOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getTileSize = function () { return cordovaInstance(this, "getTileSize", { "sync": true }, arguments); };
    TileOverlay.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return TileOverlay;
}(BaseClass));
export { TileOverlay };
var KmlOverlay = /** @class */ (function (_super) {
    __extends(KmlOverlay, _super);
    function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        Object.defineProperty(self, 'camera', {
            value: _this._objectInstance.camera,
            writable: false
        });
        Object.defineProperty(self, 'kmlData', {
            value: _this._objectInstance.kmlData,
            writable: false
        });
        return _this;
    }
    KmlOverlay.prototype.getDefaultViewport = function () { return cordovaInstance(this, "getDefaultViewport", { "sync": true }, arguments); };
    KmlOverlay.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    KmlOverlay.prototype.getMap = function () { return this._map; };
    KmlOverlay.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return KmlOverlay;
}(BaseClass));
export { KmlOverlay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1tYXBzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFnNklBO0FBaDZJQSxPQUFPLHNHQU9MLGlCQUFpQixFQUNqQixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLElBQU0sNkJBQTZCLEdBQWE7SUFDOUMsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixHQUFHO0NBQ0osQ0FBQzs7SUF1QkEsZ0JBQVksR0FBVyxFQUFFLEdBQVc7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEtBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsU0FBa0I7UUFDM0IsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQztpQkF4REg7Ozs7SUEwRUUsc0JBQVksTUFBa0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJ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QyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xDLEtBQUssRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU07WUFDbEMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ25DLEtBQUssRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU87WUFDbkMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDOztJQUNMLENBQUM7SUFNRCx1Q0FBa0I7SUFPbEIsMEJBQUs7SUFFTDs7O09BR0c7SUFDSCwyQkFBTSxHQUFOLGNBQXNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFPekMsK0JBQVUsYUFBQyxPQUFnQjtJQU8zQiwrQkFBVTtJQU9WLGlDQUFZLGFBQUMsU0FBa0I7SUFPL0IsaUNBQVk7SUFNWiwyQkFBTTtxQkExNUlSO0VBcTFJZ0MsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZUNoZWNrLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxuICBjaGVja0F2YWlsYWJpbGl0eSxcbiAgZ2V0UHJvbWlzZVxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUzogc3RyaW5nW10gPSBbXG4gICcuc2hvdy1wYWdlICMnLFxuICAnaW9uLXJvdXRlci1vdXRsZXRbbWFpbl0gIycsXG4gICcjJ1xuXTtcblxuZXhwb3J0IHR5cGUgTWFwVHlwZSA9XG4gICdNQVBfVFlQRV9OT1JNQUwnXG4gIHwgJ01BUF9UWVBFX1JPQURNQVAnXG4gIHwgJ01BUF9UWVBFX1NBVEVMTElURSdcbiAgfCAnTUFQX1RZUEVfSFlCUklEJ1xuICB8ICdNQVBfVFlQRV9URVJSQUlOJ1xuICB8ICdNQVBfVFlQRV9OT05FJztcblxuZXhwb3J0IGludGVyZmFjZSBJTGF0TG5nIHtcbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIExhdExuZyBpbXBsZW1lbnRzIElMYXRMbmcge1xuXG4gIGxhdDogbnVtYmVyO1xuICBsbmc6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcbiAgICB0aGlzLmxhdCA9IGxhdDtcbiAgICB0aGlzLmxuZyA9IGxuZztcbiAgfVxuXG4gIGVxdWFscyhvdGhlcjogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxhdCA9PT0gb3RoZXIubGF0ICYmIHRoaXMubG5nID09PSBvdGhlci5sbmc7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmxhdCArICcsJyArIHRoaXMubG5nO1xuICB9XG5cbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA2O1xuXG4gICAgcmV0dXJuIHRoaXMubGF0LnRvRml4ZWQocHJlY2lzaW9uKSArICcsJyArIHRoaXMubG5nLnRvRml4ZWQocHJlY2lzaW9uKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElMYXRMbmdCb3VuZHMge1xuICBub3J0aGVhc3Q6IElMYXRMbmc7XG4gIHNvdXRod2VzdDogSUxhdExuZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXRMbmdCb3VuZHMgaW1wbGVtZW50cyBJTGF0TG5nQm91bmRzIHtcblxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5vcnRoZWFzdDogSUxhdExuZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzb3V0aHdlc3Q6IElMYXRMbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgdHlwZTogc3RyaW5nO1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHBvaW50cz86IElMYXRMbmdbXSkge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpKS5MYXRMbmdCb3VuZHMocG9pbnRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0byBzdHJpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyBvZiB0aGUgZm9ybSBcImxhdF9zdyxsbmdfc3csbGF0X25lLGxuZ19uZVwiIGZvciB0aGlzIGJvdW5kcywgd2hlcmUgXCJzd1wiIGNvcnJlc3BvbmRzIHRvIHRoZSBzb3V0aHdlc3QgY29ybmVyIG9mIHRoZSBib3VuZGluZyBib3gsIHdoaWxlIFwibmVcIiBjb3JyZXNwb25kcyB0byB0aGUgbm9ydGhlYXN0IGNvcm5lciBvZiB0aGF0IGJveC5cbiAgICogQHBhcmFtIHByZWNpc2lvbiB7bnVtYmVyfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0b1VybFZhbHVlKHByZWNpc2lvbj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dGVuZHMgdGhpcyBib3VuZHMgdG8gY29udGFpbiB0aGUgZ2l2ZW4gcG9pbnQuXG4gICAqIEBwYXJhbSBMYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBleHRlbmQoTGF0TG5nOiBJTGF0TG5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBsYXQvbG5nIGlzIGluIHRoaXMgYm91bmRzLlxuICAgKiBAcGFyYW0gTGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgY29udGFpbnMoTGF0TG5nOiBJTGF0TG5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBjZW50ZXIgb2YgdGhpcyBMYXRMbmdCb3VuZHNcbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2VudGVyKCk6IExhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwQ29udHJvbE9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgY29tcGFzcyBvbiBvciBvZmYuXG4gICAqL1xuICBjb21wYXNzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIG15TG9jYXRpb24gYnV0dG9uIG9uIG9yIG9mZi4gSWYgdHVybnMgb24gdGhpcyBidXR0b24sIHRoZSBhcHBsaWNhdGlvbiBkaXNwbGF5cyBhIHBlcm1pc3Npb24gZGlhbG9nIHRvIG9idGFpbiB0aGUgZ2VvbG9jYXRpb24gZGF0YS5cbiAgICovXG4gIG15TG9jYXRpb25CdXR0b24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgbXlMb2NhdGlvbiBjb250cm9sKGJsdWUgZG90KSBvbiBvciBvZmYuIElmIHR1cm5zIG9uIHRoaXMgY29udHJvbCwgdGhlIGFwcGxpY2F0aW9uIGRpc3BsYXlzIGEgcGVybWlzc2lvbiBkaWFsb2cgdG8gb2J0YWluIHRoZSBnZW9sb2NhdGlvbiBkYXRhLlxuICAgKi9cbiAgbXlMb2NhdGlvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBpbmRvb3IgcGlja2VyIG9uIG9yIG9mZi5cbiAgICovXG4gIGluZG9vclBpY2tlcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICoqQW5kcm9pZCoqXG4gICAqIFR1cm5zIHRoZSBtYXAgdG9vbGJhciBvbiBvciBvZmYuXG4gICAqL1xuICBtYXBUb29sYmFyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKipBbmRyb2lkKipcbiAgICogVHVybnMgdGhlIHpvb20gY29udHJvbGxlciBvbiBvciBvZmYuXG4gICAqL1xuICB6b29tPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwR2VzdHVyZU9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgc2Nyb2xsIGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICBzY3JvbGw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgdGlsdCBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgdGlsdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSB6b29tIGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICB6b29tPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHJvdGF0ZSBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgcm90YXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwWm9vbU9wdGlvbnMge1xuICBtaW5ab29tPzogbnVtYmVyO1xuICBtYXhab29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcFBhZGRpbmdPcHRpb25zIHtcbiAgbGVmdD86IG51bWJlcjtcbiAgdG9wPzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG4gIHJpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcFByZWZlcmVuY2VPcHRpb25zIHtcblxuICAvKipcbiAgICogTWluaW11bSBhbmQgbWF4aW11bSB6b29tIGxldmVscyBmb3Igem9vbWluZyBnZXN0dXJlcy5cbiAgICovXG4gIHpvb20/OiBHb29nbGVNYXBab29tT3B0aW9ucztcblxuICAvKipcbiAgICogUGFkZGluZ3Mgb2YgY29udHJvbHMuXG4gICAqL1xuICBwYWRkaW5nPzogR29vZ2xlTWFwUGFkZGluZ09wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSAzRCBidWlsZGluZ3MgbGF5ZXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgYnVpbGRpbmc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBib3VuZHMgbGltaXQgZm9yIHVzZXIgcGFubmluZyBnZXN0dXJlLlxuICAgKi9cbiAgZ2VzdHVyZUJvdW5kcz86IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIG1hcFR5cGUgW29wdGlvbnNdXG4gICAqL1xuICBtYXBUeXBlPzogTWFwVHlwZSB8IHN0cmluZztcblxuICAvKipcbiAgICogY29udHJvbHMgW29wdGlvbnNdXG4gICAqL1xuICBjb250cm9scz86IEdvb2dsZU1hcENvbnRyb2xPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBnZXN0dXJlcyBbb3B0aW9uc11cbiAgICovXG4gIGdlc3R1cmVzPzogR29vZ2xlTWFwR2VzdHVyZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE1hcCBzdHlsZXMgW29wdGlvbnNdXG4gICAqIEByZWYgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvc3R5bGUtcmVmZXJlbmNlXG4gICAqL1xuICBzdHlsZXM/OiBhbnlbXTtcblxuICAvKipcbiAgICogSW5pdGlhbCBjYW1lcmEgcG9zaXRpb24gW29wdGlvbnNdXG4gICAqL1xuICBjYW1lcmE/OiBDYW1lcmFQb3NpdGlvbjxhbnk+O1xuXG4gIC8qKlxuICAgKiBwcmVmZXJlbmNlcyBbb3B0aW9uc11cbiAgICovXG4gIHByZWZlcmVuY2VzPzogR29vZ2xlTWFwUHJlZmVyZW5jZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvc2l0aW9uPFQ+IHtcbiAgLyoqXG4gICAqIFRoZSBjZW50ZXIgbG9jYXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3LlxuICAgKlxuICAgKiBbdXNhZ2UgMV1cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4gPSB7XG4gICAqICAgdGFyZ2V0OiB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICB6b29tOiAxMFxuICAgKiB9XG4gICAqXG4gICAqIFt1c2FnZSAyXSBUaGUgem9vbSBwcm9wZXJ0eSBpcyBpZ25vcmVkIHdoZW4geW91IHNwZWNpZnkgbXVsdGlwbGUgcG9zaXRpb25cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZ1tdPiA9IHtcbiAgICogICB0YXJnZXQ6IFtcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufVxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgdGFyZ2V0PzogVDtcbiAgLyoqXG4gICAqIFZpZXcgYW5nbGVcbiAgICovXG4gIHRpbHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBab29tIGxldmVsXG4gICAqL1xuICB6b29tPzogbnVtYmVyO1xuICAvKipcbiAgICogTWFwIG9yaWVudGF0aW9uXG4gICAqL1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogQ2FtZXJhIHBhZGRpbmcgaW4gcGl4ZWxcbiAgICovXG4gIHBhZGRpbmc/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBDZW50ZXIgcG9zaXRpb24gb2YgY2lyY2xlXG4gICAqL1xuICBjZW50ZXI6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFJhZGl1cyBvZiBjaXJjbGUgaW4gbWV0ZXJcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxcbiAgICovXG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgY2lyY2xlXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIGZpbGxDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVjZWl2ZSB0aGUgQ0lSQ0xFX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBoaWRlXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogWi1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyUmVxdWVzdCB7XG5cbiAgLyoqXG4gICAqIFRoZSBhZGRyZXNzIHByb3BlcnR5IG9yIHBvc2l0aW9uIHByb3BlcnR5IGlzIHJlcXVpcmVkLlxuICAgKiBZb3UgY2FuIG5vdCBzcGVjaWZ5IGJvdGggcHJvcGVydHkgYXQgdGhlIHNhbWUgdGltZS5cbiAgICpcbiAgICogW2dlb2NvZGluZyB1c2FnZTFdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgYWRkcmVzczogXCJMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSwgVVNBXCJcbiAgICogfVxuICAgKlxuICAgKiBbZ2VvY29kaW5nIHVzYWdlMl1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBhZGRyZXNzOiBbXG4gICAqICAgIFwiTG9zIEFuZ2VsZXMsIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgICBcIlNhbiBGcmFuY2lzY28sIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgYWRkcmVzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UxXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiB7XCJsYXRcIjogMzcuNDIxNjU1LCBcImxuZ1wiOiAtMTIyLjA4NTYzN31cbiAgICogfVxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UyXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiBbXG4gICAqICAgIHtcImxhdFwiOiAzNy40MjE2NTUsIFwibG5nXCI6IC0xMjIuMDg1NjM3fSxcbiAgICogICAge1wibGF0XCI6IDM3LjMzMiwgXCJsbmdcIjogLTEyMi4wMzA3ODF9XG4gICAqICAgXVxuICAgKiB9XG4gICAqL1xuICBwb3NpdGlvbj86IElMYXRMbmcgfCBJTGF0TG5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJSZXN1bHQge1xuICBhZG1pbkFyZWE/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xuICBleHRyYT86IHtcbiAgICBmZWF0dXJlTmFtZT86IHN0cmluZztcbiAgICBsaW5lcz86IHN0cmluZ1tdO1xuICAgIHBlcm1pc2VzPzogc3RyaW5nO1xuICAgIHBob25lPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZ1xuICB9O1xuICBsb2NhbGU/OiBzdHJpbmc7XG4gIGxvY2FsaXR5Pzogc3RyaW5nO1xuICBwb3NpdGlvbj86IElMYXRMbmc7XG4gIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gIHN1YkFkbWluQXJlYT86IHN0cmluZztcbiAgc3ViTG9jYWxpdHk/OiBzdHJpbmc7XG4gIHN1YlRob3JvdWdoZmFyZT86IHN0cmluZztcbiAgdGhvcm91Z2hmYXJlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXlPcHRpb25zIHtcbiAgLyoqXG4gICAqIFVSTCBvZiBvdmVybGF5XG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogQm91bmRzLCBhcnJheSBvZiBJTGF0TG5nXG4gICAqL1xuICBib3VuZHM6IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVjZWl2ZSB0aGUgR1JPVU5EX09WRVJMQVlfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGhpZGVcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcGFjaXR5LiBGcm9tIDAuMCB0byAxLjAgLlxuICAgKi9cbiAgb3BhY2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogQmVhcmluZ1xuICAgKi9cbiAgYmVhcmluZz86IG51bWJlcjtcblxuICAvKipcbiAgICogWi1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckljb24ge1xuICB1cmw/OiBzdHJpbmc7XG4gIHNpemU/OiB7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGljb24gaW1hZ2UgdXJsIG9yIHByb3BlcnRpZXMuIEFsc28geW91IGNhbiBzcGVjaWZ5IEhUTUwgQ29sb3IgdmFsdWVzLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc3BlY2lmeSB0aGUgaW1hZ2UgYXMgQmFzZTY0XG4gICAqL1xuICBpY29uPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc25pcHBldCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHNuaXBwZXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgcG9zaXRpb246IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqICBTcGVjaWZ5IHRoZSBhbmNob3Igb2YgdGhlIEluZm9XaW5kb3dcbiAgICovXG4gIGluZm9XaW5kb3dBbmNob3I/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogXHRTcGVjaWZ5IHRoZSBhbmNob3Igb2YgaWNvbiBpbWFnZVxuICAgKi9cbiAgYW5jaG9yPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGVuYWJsZSB0byBkcmFnIHRoZSBtYXJrZXIuIChEZWZhdWx0OiBmYWxzZSkgSW1wb3J0YW50ISBEcmFnIHN0YXJ0cyBhZnRlciBsb25nIHByZXNzZWQgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byB1c2UgYSBmbGF0IG1hcmtlci4gKERlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZmxhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgcm90YXRpb24gYW5nbGUuIChEZWZhdWx0OiAwKVxuICAgKi9cbiAgcm90YXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlLiAoRGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBvcHRpb25zIGZvciB0aXRsZS4gVGhpcyBwcm9wZXJ0eSB3b3JrIGZvciBub3JtYWwgSW5mb1dpbmRvdy5cbiAgICovXG4gIHN0eWxlcz86IGFueTtcblxuICAvKipcbiAgICogV2hpY2ggYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiBtYXJrZXIgaXMgYWRkZWQgdG8gYSBtYXAuXG4gICAqL1xuICBhbmltYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZ2hlciB6SW5kZXggdmFsdWUgb3ZlcmxheXMgd2lsbCBiZSBkcmF3biBvbiB0b3Agb2YgbG93ZXIgekluZGV4IHZhbHVlIHRpbGUgbGF5ZXJzIGFuZCBvdmVybGF5cy5cbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvIHBhbm5pbmcgd2hlbiB0aGUgbWFya2VyIGlzIGNsaWNrZWQuXG4gICAqL1xuICBkaXNhYmxlQXV0b1Bhbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyTGFiZWwge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGJvbGQgZm9udFxuICAgKi9cbiAgYm9sZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmb250IHNpemUgaW4gcGl4ZWxcbiAgICovXG4gIGZvbnRTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBjb2xvciBzdHJpbmdzXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGl0YWxpYyBmb250XG4gICAqL1xuICBpdGFsaWM/OiBib29sZWFuO1xuXG59XG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckNsdXN0ZXJJY29uIHtcbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIGNsdXN0ZXJpbmdcbiAgICovXG4gIG1pbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgY2x1c3RlcmluZ1xuICAgKi9cbiAgbWF4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBhbmNob3IgcG9zaXRpb24gb2YgdGhlIG1hcmtlclxuICAgKi9cbiAgYW5jaG9yPzogYW55O1xuXG4gIC8qKlxuICAgKiBsYWJlbCBvcHRpb24gZm9yIGNsdXN0ZXJlZCBtYXJrZXJcbiAgICovXG4gIGxhYmVsPzogTWFya2VyTGFiZWw7XG5cbiAgLyoqXG4gICAqIGljb24gdXJsXG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbiBzaXplXG4gICAqL1xuICBzaXplPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJDbHVzdGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIHpvb20gbGV2ZWwgb2YgY2x1c3RlcmluZ1xuICAgKiAoZGVmYXVsdDogMTUsIG1heDogMTgpXG4gICAqL1xuICBtYXhab29tTGV2ZWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERyYXcgYSByZWN0YW5nbGUgdGhhdCBjb250YWlucyBhbGwgbG9jYXRpb25zIG9mIGNsdXN0ZXJlZCB3aGVuIHlvdSB0YXAgb24gYSBjbHVzdGVyIG1hcmtlci5cbiAgICogKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICBib3VuZHNEcmF3PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUG9zaXRpb24gbGlzdFxuICAgKiBbXG4gICAqICAge3RpdGxlOiBcInN0b3JlIEFcIiwgcG9zaXRpb246IHtsYXQ6IC4uLiwgbG5nOiAuLi59fSxcbiAgICogICB7dGl0bGU6IFwic3RvcmUgQlwiLCBwb3NpdGlvbjoge2xhdDogLi4uLCBsbmc6IC4uLn19LFxuICAgKiAgIHt0aXRsZTogXCJzdG9yZSBDXCIsIHBvc2l0aW9uOiB7bGF0OiAuLi4sIGxuZzogLi4ufX1cbiAgICogXVxuICAgKi9cbiAgbWFya2VyczogTWFya2VyT3B0aW9uc1tdO1xuXG4gIC8qKlxuICAgKiBDb25kaXRpb25zIG9mIGNsdXN0ZXJpbmdcbiAgICogW1xuICAgKiAgIHtpY29uOiBcImFzc2V0cy9zbWFsbC5wbmdcIiwgbWluOiAyLCBtYXg6IDEwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbWlkZGxlLnBuZ1wiLCBtaW46IDExLCBtYXg6IDMwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbGFyZ2UucG5nXCIsIG1pbjogMzF9XG4gICAqIF1cbiAgICovXG4gIGljb25zOiBNYXJrZXJDbHVzdGVySWNvbltdO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb24ge1xuICBsYXRMbmc/OiBMYXRMbmc7XG4gIGVsYXBzZWRSZWFsdGltZU5hbm9zPzogYW55O1xuICB0aW1lPzogc3RyaW5nO1xuICBhY2N1cmFjeT86IGFueTtcbiAgYmVhcmluZz86IG51bWJlcjtcbiAgYWx0aXR1ZGU/OiBhbnk7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBwcm92aWRlcj86IGFueTtcbiAgaGFzaENvZGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlMb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gdHJ5IHRvIHVzZSBHUFMgbWFuZGF0b3J5LlxuICAgKiBJbiBmYWxzZSwgdGhlIHBsdWdpbiB0cnkgdG8gdXNlIEdQUyBhbmQgbmV0d29yay5cbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZW5hYmxlSGlnaEFjY3VyYWN5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXSB0byBzcGVjaWZ5IHRoZSB2ZXJ0aXhlcy5cbiAgICogWW91IG5lZWQgdG8gY29udGFpbiB0d28gcG9pbnRzIGF0IGxlYXN0LlxuICAgKi9cbiAgcG9pbnRzOiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGRyYXcgdGhlIGN1cnZlIHBvbHlnb24gYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICBzdHJva2VXaWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgcG9seWdvblxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHBvbHlnb25cbiAgICogKEludmlzaWJsZSBwb2x5Z29uIGlzIG5vdCBjbGlja2FibGUsIGRlZmF1bHQgdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWVyYXJjaHkgei1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXVtdIHRvIGNyZWF0ZSBob2xlcyBpbiBwb2x5Z29uXG4gICAqL1xuICBob2xlcz86IElMYXRMbmdbXVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byByZWNlaXZlIHRoZSBQT0xZR09OX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBhc3MgSUxhdExuZ1tdIHRvIHNwZWNpZnkgdGhlIHZlcnRpeGVzLlxuICAgKiBZb3UgbmVlZCB0byBjb250YWluIHR3byBwb2ludHMgYXQgbGVhc3QuXG4gICAqL1xuICBwb2ludHM6IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgcG9seWxpbmVcbiAgICogKEludmlzaWJsZSBwb2x5bGluZSBpcyBub3QgY2xpY2thYmxlLCBkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gZHJhdyB0aGUgY3VydmUgcG9seWxpbmUgYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gcmVjZWl2ZSB0aGUgUE9MWUxJTkVfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheU9wdGlvbnMge1xuICAvKipcbiAgICogVGhpcyBjYWxsYmFjayBtdXN0IFJldHVybnMgc3RyaW5nIG9mIGltYWdlIFVSTCwgb3IgUHJvbWlzZS5cbiAgICogSWYgbm8gdGlsZSwgeW91IG5lZWQgdG8gUmV0dXJucyBudWxsLlxuICAgKi9cbiAgLy8gZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPjtcbiAgZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgdGlsZWxheWVyXG4gICAqIChkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXggb2YgdGlsZWxheWVyXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQ6IDUxMnB4XG4gICAqL1xuICB0aWxlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogRGVmYXVsdDogMS4wXG4gICAqL1xuICBvcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBkaXNwbGF5IHRoZSB0aWxlIGluZm9ybWF0aW9uIG92ZXIgdGhlIHRpbGUgaW1hZ2VzLlxuICAgKi9cbiAgZGVidWc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvRGF0YVVybE9wdGlvbnMge1xuICAvKipcbiAgICogVHJ1ZSBpZiB5b3Ugd2FudCBnZXQgaGlnaCBxdWFsaXR5IG1hcCBzbmFwc2hvdFxuICAgKi9cbiAgdW5jb21wcmVzcz86IGJvb2xlYW47XG59XG5cblxuLyoqXG4gKiBPcHRpb25zIGZvciBtYXAuYWRkS21sT3ZlcmxheSgpIG1ldGhvZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEttbE92ZXJsYXlPcHRpb25zIHtcbiAgLypcbiAgICogVGhlIHVybCBvciBmaWxlIHBhdGggb2YgS01MIGZpbGUuIEtNWiBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZC5cbiAgICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qXG4gICAqIERvIG5vdCBmaXJlIHRoZSBLTUxfQ0xJQ0sgZXZlbnQgaWYgZmFsc2UuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLypcbiAgICogRG8gbm90IGRpc3BsYXkgdGhlIGRlZmF1bHQgaW5mb1dpbmRvdyBpZiB0cnVlLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgc3VwcHJlc3NJbmZvV2luZG93cz86IGJvb2xlYW47XG5cbiAgLypcbiAgICogaWNvbiBvcHRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBNYXJrZXJJY29uO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgRW52aXJvbm1lbnQuc2V0RW52KClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnZPcHRpb25zIHtcbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwczpgIChvbiBzZXJ2ZXIpXG4gICAqL1xuICBBUElfS0VZX0ZPUl9CUk9XU0VSX1JFTEVBU0U/OiBzdHJpbmc7XG5cbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwOmAgKGxvY2FsIGRldmVsb3BtZW50KVxuICAgKi9cbiAgQVBJX0tFWV9GT1JfQlJPV1NFUl9ERUJVRz86IHN0cmluZztcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVmlzaWJsZVJlZ2lvbiBpbXBsZW1lbnRzIElMYXRMbmdCb3VuZHMge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgbm9ydGhlYXN0IG9mIHRoZSBib3VuZHMgdGhhdCBjb250YWlucyB0aGUgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0IGFuZCBuZWFyUmlnaHQuXG4gICAqIFNpbmNlIHRoZSBtYXAgdmlldyBpcyBhYmxlIHRvIHJvdGF0ZSwgdGhlIGZhclJpZ2h0IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgbm9ydGhlYXN0LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3J0aGVhc3Q6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3V0aHdlc3Qgb2YgdGhlIGJvdW5kcyB0aGF0IGNvbnRhaW5zIHRoZSBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQgYW5kIG5lYXJSaWdodC5cbiAgICogU2luY2UgdGhlIG1hcCB2aWV3IGlzIGFibGUgdG8gcm90YXRlLCB0aGUgbmVhckxlZnQgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBzb3V0aHdlc3QuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHNvdXRod2VzdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIGZhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhckxlZnQ6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmYXJSaWdodCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIHRvcC1yaWdodCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSBib3R0b20tbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5lYXJMZWZ0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhclJpZ2h0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgYm90dG9tLXJpZ2h0IG9mIHRoZSBtYXAgdmlldy5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmVhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBjb25zdGFudCB2YWx1ZSA6IGBWaXNpYmxlUmVnaW9uYFxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc291dGh3ZXN0OiBMYXRMbmdCb3VuZHMsIG5vcnRoZWFzdDogTGF0TG5nQm91bmRzLCBmYXJMZWZ0OiBJTGF0TG5nLCBmYXJSaWdodDogSUxhdExuZywgbmVhckxlZnQ6IElMYXRMbmcsIG5lYXJSaWdodDogSUxhdExuZykge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpKS5WaXNpYmxlUmVnaW9uKHNvdXRod2VzdCwgbm9ydGhlYXN0LCBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQsIG5lYXJSaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdG8gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIGZvcm0gXCJsYXRfc3csbG5nX3N3LGxhdF9uZSxsbmdfbmVcIiBmb3IgdGhpcyBib3VuZHMsIHdoZXJlIFwic3dcIiBjb3JyZXNwb25kcyB0byB0aGUgc291dGh3ZXN0IGNvcm5lciBvZiB0aGUgYm91bmRpbmcgYm94LCB3aGlsZSBcIm5lXCIgY29ycmVzcG9uZHMgdG8gdGhlIG5vcnRoZWFzdCBjb3JuZXIgb2YgdGhhdCBib3guXG4gICAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF0L2xuZyBpcyBpbiB0aGlzIGJvdW5kcy5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbnRhaW5zKExhdExuZzogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgU3RyZWV0Vmlld1NvdXJjZSA9IHtcbiAgREVGQVVMVDogJ0RFRkFVTFQnLFxuICBPVVRET09SOiAnT1VURE9PUidcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0UG92T3B0aW9uIHtcbiAgYmVhcmluZzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdTZXRQb3NpdGlvbk9wdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQYW5vIHtcbiAgdGFyZ2V0OiBzdHJpbmc7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQb3NpdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zIHtcbiAgc3RyZWV0TmFtZXM/OiBib29sZWFuO1xuICBuYXZpZ2F0aW9uPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0dlc3R1cmVPcHRpb25zIHtcbiAgcGFubmluZz86IGJvb2xlYW47XG4gIHpvb21pbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdPcHRpb25zIHtcblxuICAvKlxuICAgKiBjYW1lcmE6IFtvcHRpb25zXSBJbml0aWFsIGNhbWVyYSBwb3NpdGlvblxuICAgKi9cbiAgY2FtZXJhPzogU3RyZWV0Vmlld0NhbWVyYVBhbm8gfCBTdHJlZXRWaWV3Q2FtZXJhUG9zaXRpb247XG5cbiAgLyoqXG4gICAqIGNvbnRyb2xzIFtvcHRpb25zXVxuICAgKi9cbiAgY29udHJvbHM/OiBTdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIGdlc3R1cmVzIFtvcHRpb25zXVxuICAgKi9cbiAgZ2VzdHVyZXM/OiBTdHJlZXRWaWV3R2VzdHVyZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld05hdmlnYXRpb25MaW5rIHtcblxuICAvKipcbiAgICogcGFub3JhbWEgSWRcbiAgICovXG4gIHBhbm9JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBiZWFyaW5nIChoZWFkaW5nKVxuICAgKi9cbiAgYmVhcmluZzogbnVtYmVyO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0xvY2F0aW9uIHtcblxuICBsYXRMbmc6IElMYXRMbmc7XG5cbiAgbGlua3M6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdO1xuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogWW91IGNhbiBsaXN0ZW4gdG8gdGhlc2UgZXZlbnRzIHdoZXJlIGFwcHJvcHJpYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBHb29nbGVNYXBzRXZlbnQgPSB7XG4gIE1BUF9SRUFEWTogJ21hcF9yZWFkeScsXG4gIE1BUF9DTElDSzogJ21hcF9jbGljaycsXG4gIE1BUF9MT05HX0NMSUNLOiAnbWFwX2xvbmdfY2xpY2snLFxuICBQT0lfQ0xJQ0s6ICdwb2lfY2xpY2snLFxuICBNWV9MT0NBVElPTl9DTElDSzogJ215X2xvY2F0aW9uX2NsaWNrJyxcbiAgTVlfTE9DQVRJT05fQlVUVE9OX0NMSUNLOiAnbXlfbG9jYXRpb25fYnV0dG9uX2NsaWNrJyxcbiAgSU5ET09SX0JVSUxESU5HX0ZPQ1VTRUQ6ICdpbmRvb3JfYnVpbGRpbmdfZm9jdXNlZCcsXG4gIElORE9PUl9MRVZFTF9BQ1RJVkFURUQ6ICdpbmRvb3JfbGV2ZWxfYWN0aXZhdGVkJyxcbiAgQ0FNRVJBX01PVkVfU1RBUlQ6ICdjYW1lcmFfbW92ZV9zdGFydCcsXG4gIENBTUVSQV9NT1ZFOiAnY2FtZXJhX21vdmUnLFxuICBDQU1FUkFfTU9WRV9FTkQ6ICdjYW1lcmFfbW92ZV9lbmQnLFxuICBPVkVSTEFZX0NMSUNLOiAnb3ZlcmxheV9jbGljaycsXG4gIFBPTFlHT05fQ0xJQ0s6ICdwb2x5Z29uX2NsaWNrJyxcbiAgUE9MWUxJTkVfQ0xJQ0s6ICdwb2x5bGluZV9jbGljaycsXG4gIENJUkNMRV9DTElDSzogJ2NpcmNsZV9jbGljaycsXG4gIEdST1VORF9PVkVSTEFZX0NMSUNLOiAnZ3JvdW5kb3ZlcmxheV9jbGljaycsXG4gIElORk9fQ0xJQ0s6ICdpbmZvX2NsaWNrJyxcbiAgSU5GT19MT05HX0NMSUNLOiAnaW5mb19sb25nX2NsaWNrJyxcbiAgSU5GT19DTE9TRTogJ2luZm9fY2xvc2UnLFxuICBJTkZPX09QRU46ICdpbmZvX29wZW4nLFxuICBNQVJLRVJfQ0xJQ0s6ICdtYXJrZXJfY2xpY2snLFxuICBNQVJLRVJfRFJBRzogJ21hcmtlcl9kcmFnJyxcbiAgTUFSS0VSX0RSQUdfU1RBUlQ6ICdtYXJrZXJfZHJhZ19zdGFydCcsXG4gIE1BUktFUl9EUkFHX0VORDogJ21hcmtlcl9kcmFnX2VuZCcsXG4gIE1BUF9EUkFHOiAnbWFwX2RyYWcnLFxuICBNQVBfRFJBR19TVEFSVDogJ21hcF9kcmFnX3N0YXJ0JyxcbiAgTUFQX0RSQUdfRU5EOiAnbWFwX2RyYWdfZW5kJyxcbiAgS01MX0NMSUNLOiAna21sX2NsaWNrJyxcbiAgUEFOT1JBTUFfUkVBRFk6ICdwYW5vcmFtYV9yZWFkeScsXG4gIFBBTk9SQU1BX0NBTUVSQV9DSEFOR0U6ICdwYW5vcmFtYV9jYW1lcmFfY2hhbmdlJyxcbiAgUEFOT1JBTUFfTE9DQVRJT05fQ0hBTkdFOiAncGFub3JhbWFfbG9jYXRpb25fY2hhbmdlJyxcbiAgUEFOT1JBTUFfQ0xJQ0s6ICdwYW5vcmFtYV9jbGljaydcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgR29vZ2xlTWFwc0FuaW1hdGlvbiA9IHtcbiAgQk9VTkNFOiAnQk9VTkNFJyxcbiAgRFJPUDogJ0RST1AnXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEdvb2dsZU1hcHNNYXBUeXBlSWQgPSB7XG4gIE5PUk1BTDogJ01BUF9UWVBFX05PUk1BTCcsXG4gIFJPQURNQVA6ICdNQVBfVFlQRV9OT1JNQUwnLFxuICBTQVRFTExJVEU6ICdNQVBfVFlQRV9TQVRFTExJVEUnLFxuICBIWUJSSUQ6ICdNQVBfVFlQRV9IWUJSSUQnLFxuICBURVJSQUlOOiAnTUFQX1RZUEVfVEVSUkFJTicsXG4gIE5PTkU6ICdNQVBfVFlQRV9OT05FJ1xufTtcblxuLyoqXG4gKiBAbmFtZSBHb29nbGUgTWFwc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB1c2VzIHRoZSBuYXRpdmUgR29vZ2xlIE1hcHMgU0RLXG4gKiBOb3RlOiBBcyBvZiBJb25pYyBuYXRpdmUgNC4wLCB0aGlzIHVzaW5nIHRoZSAyLjAgdmVyc2lvbiBvZiB0aGUgZ29vZ2xlIG1hcHMgcGx1Z2luLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgcGx1Z2luIGlzIHVwZGF0ZWRcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtcbiAqICBHb29nbGVNYXBzLFxuICogIEdvb2dsZU1hcCxcbiAqICBHb29nbGVNYXBzRXZlbnQsXG4gKiAgR29vZ2xlTWFwT3B0aW9ucyxcbiAqICBDYW1lcmFQb3NpdGlvbixcbiAqICBNYXJrZXJPcHRpb25zLFxuICogIE1hcmtlclxuICogfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dvb2dsZS1tYXBzJztcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlL1wiO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gKiAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gKiAgIG1hcDogR29vZ2xlTWFwO1xuICogICBjb25zdHJ1Y3RvcigpIHsgfVxuICpcbiAqICAgaW9uVmlld0RpZExvYWQoKSB7XG4gKiAgICB0aGlzLmxvYWRNYXAoKTtcbiAqICAgfVxuICpcbiAqICBsb2FkTWFwKCkge1xuICpcbiAqICAgICBsZXQgbWFwT3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyA9IHtcbiAqICAgICAgIGNhbWVyYToge1xuICogICAgICAgICB0YXJnZXQ6IHtcbiAqICAgICAgICAgICBsYXQ6IDQzLjA3NDE5MDQsXG4gKiAgICAgICAgICAgbG5nOiAtODkuMzgwOTgwMlxuICogICAgICAgICB9LFxuICogICAgICAgICB6b29tOiAxOCxcbiAqICAgICAgICAgdGlsdDogMzBcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogICAgIHRoaXMubWFwID0gR29vZ2xlTWFwcy5jcmVhdGUoJ21hcF9jYW52YXMnLCBtYXBPcHRpb25zKTtcbiAqXG4gKiAgICAgbGV0IG1hcmtlcjogTWFya2VyID0gdGhpcy5tYXAuYWRkTWFya2VyU3luYyh7XG4gKiAgICAgICB0aXRsZTogJ0lvbmljJyxcbiAqICAgICAgIGljb246ICdibHVlJyxcbiAqICAgICAgIGFuaW1hdGlvbjogJ0RST1AnLFxuICogICAgICAgcG9zaXRpb246IHtcbiAqICAgICAgICAgbGF0OiA0My4wNzQxOTA0LFxuICogICAgICAgICBsbmc6IC04OS4zODA5ODAyXG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogICAgIG1hcmtlci5vbihHb29nbGVNYXBzRXZlbnQuTUFSS0VSX0NMSUNLKVxuICogICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgICAgICAgIGFsZXJ0KCdjbGlja2VkJyk7XG4gKiAgICAgICB9KTtcbiAqICAgICB9KTtcbiAqICAgfVxuICogfVxuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIEdvb2dsZU1hcHNcbiAqIEdvb2dsZU1hcFxuICogU3RyZWV0Vmlld1xuICogQ2lyY2xlXG4gKiBFbmNvZGluZ1xuICogRW52aXJvbm1lbnRcbiAqIEdlb2NvZGVyXG4gKiBHcm91bmRPdmVybGF5XG4gKiBIdG1sSW5mb1dpbmRvd1xuICogR2VvY29kZXJcbiAqIExhdExuZ1xuICogTGF0TG5nQm91bmRzXG4gKiBNYXJrZXJcbiAqIE1hcmtlckNsdXN0ZXJcbiAqIFBvbHlnb25cbiAqIFBvbHlsaW5lXG4gKiBTcGhlcmljYWxcbiAqIEttbE92ZXJsYXlcbiAqIFBvbHlcbiAqIFRpbGVPdmVybGF5XG4gKiBCYXNlQ2xhc3NcbiAqIEJhc2VBcnJheUNsYXNzXG4gKiBAaW50ZXJmYWNlc1xuICogR29vZ2xlTWFwT3B0aW9uc1xuICogQ2FtZXJhUG9zaXRpb25cbiAqIENpcmNsZU9wdGlvbnNcbiAqIEdlb2NvZGVyUmVxdWVzdFxuICogR2VvY29kZXJSZXN1bHRcbiAqIEdyb3VuZE92ZXJsYXlPcHRpb25zXG4gKiBJTGF0TG5nXG4gKiBNYXJrZXJJY29uXG4gKiBNYXJrZXJPcHRpb25zXG4gKiBNYXJrZXJDbHVzdGVySWNvblxuICogTWFya2VyQ2x1c3Rlck9wdGlvbnNcbiAqIE15TG9jYXRpb25cbiAqIE15TG9jYXRpb25PcHRpb25zXG4gKiBQb2x5Z29uT3B0aW9uc1xuICogUG9seWxpbmVPcHRpb25zXG4gKiBUaWxlT3ZlcmxheU9wdGlvbnNcbiAqIEttbE92ZXJsYXlPcHRpb25zXG4gKiBWaXNpYmxlUmVnaW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIGRvY3VtZW50OiAnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9uYXRpdmUvZ29vZ2xlLW1hcHMvJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIC0tdmFyaWFibGUgQVBJX0tFWV9GT1JfQU5EUk9JRD1cIllPVVJfQU5EUk9JRF9BUElfS0VZX0lTX0hFUkVcIiAtLXZhcmlhYmxlIEFQSV9LRVlfRk9SX0lPUz1cIllPVVJfSU9TX0FQSV9LRVlfSVNfSEVSRVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBUElfS0VZX0ZPUl9BTkRST0lEJywgJ0FQSV9LRVlfRk9SX0lPUyddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgR29vZ2xlTWFwIGluc3RhbmNlXG4gICAqIEBwYXJhbSBlbGVtZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gRWxlbWVudCBJRCBvciByZWZlcmVuY2UgdG8gYXR0YWNoIHRoZSBtYXAgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge0dvb2dsZU1hcE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBHb29nbGVNYXBPcHRpb25zLCBvcHRpb25zPzogR29vZ2xlTWFwT3B0aW9ucyk6IEdvb2dsZU1hcCB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZWxlbWVudC50YWdOYW1lfVtfX3BsdWdpbk1hcElkPScke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJyl9J10gaGFzIGFscmVhZHkgbWFwLmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zID0gZWxlbWVudCBhcyBHb29nbGVNYXBPcHRpb25zO1xuICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdvb2dsZU1hcDogR29vZ2xlTWFwID0gbmV3IEdvb2dsZU1hcChlbGVtZW50IGFzIEhUTUxFbGVtZW50IHwgc3RyaW5nLCBvcHRpb25zKTtcbiAgICAgIGdvb2dsZU1hcC5zZXQoJ19vdmVybGF5cycsIHt9KTtcbiAgICAgIHJldHVybiBnb29nbGVNYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBrZWVwIHRoaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNyZWF0ZShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEdvb2dsZU1hcE9wdGlvbnMsIG9wdGlvbnM/OiBHb29nbGVNYXBPcHRpb25zKTogR29vZ2xlTWFwIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBQbGVhc2UgdXNlIEdvb2dsZU1hcHMuY3JlYXRlKCknKTtcbiAgICByZXR1cm4gR29vZ2xlTWFwcy5jcmVhdGUoZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBTdHJlZXRWaWV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBlbGVtZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gRWxlbWVudCBJRCBvciByZWZlcmVuY2UgdG8gYXR0YWNoIHRoZSBtYXAgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVldFZpZXdPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3UGFub3JhbWF9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlUGFub3JhbWEoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsIG9wdGlvbnM/OiBTdHJlZXRWaWV3T3B0aW9ucyk6IFN0cmVldFZpZXdQYW5vcmFtYSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZWxlbWVudC50YWdOYW1lfVtfX3BsdWdpbk1hcElkPScke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJyl9J10gaGFzIGFscmVhZHkgbWFwLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFN0cmVldFZpZXdQYW5vcmFtYShlbGVtZW50LCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UodGFyZ2V0c1swXSwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlFcnJvck1lc3NhZ2UgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBlcnJvckRpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgZXJyb3JEaXYuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgZXJyb3JEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBlcnJvckRpdi5zdHlsZS53aWR0aCA9ICc4MCUnO1xuICBlcnJvckRpdi5zdHlsZS5oZWlnaHQgPSAnNTAlJztcbiAgZXJyb3JEaXYuc3R5bGUudG9wID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUubWFyZ2luID0gJ2F1dG8nO1xuXG4gIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjNyc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xufTtcblxuY29uc3Qgbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyID0gKF9vYmplY3RJbnN0YW5jZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueVtdID0+IHtcbiAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUNsYXNzKSB7XG4gICAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnTWFwJyB8fCBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0udHlwZSA9PT0gJ1N0cmVldFZpZXdQYW5vcmFtYScpIHtcbiAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9IHRoaXM7XG4gICAgfSBlbHNlIGlmIChfb2JqZWN0SW5zdGFuY2UuX19wZ21JZC5pbmRleE9mKCdtYXJrZXJjbHVzdGVyXycpICE9PSAtMSkge1xuICAgICAgY29uc3QgX292ZXJsYXlzOiBhbnkgPSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKSB8fCB7fTtcbiAgICAgIGxldCBvdmVybGF5OiBNYXJrZXIgPSBfb3ZlcmxheXNbYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCldO1xuICAgICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IG1hcmtlckpTOiBhbnkgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IG1hcmtlcklkOiBzdHJpbmcgPSBtYXJrZXJKUy5nZXRJZCgpO1xuICAgICAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyID0gX29iamVjdEluc3RhbmNlIGFzIE1hcmtlckNsdXN0ZXI7XG4gICAgICAgIG92ZXJsYXkgPSBuZXcgTWFya2VyKG1hcmtlckNsdXN0ZXIuZ2V0TWFwKCksIG1hcmtlckpTKTtcbiAgICAgICAgX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gb3ZlcmxheTtcbiAgICAgICAgbWFya2VySlMub25lKG1hcmtlckpTLmdldElkKCkgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF0gPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gb3ZlcmxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJncztcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VDbGFzcy9SRUFETUUubWRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQ2xhc3MnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2xhc3Mge1xuICBwcm90ZWN0ZWQgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob2JqSW5zdGFuY2U/OiBhbnkpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICBpZiAoIW9iakluc3RhbmNlKSB7XG4gICAgICAgIG9iakluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VDbGFzcykoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gb2JqSW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgZXhlY3V0aW5nIGFueSBtZXRob2RzLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhlIGhhbmRsZXIgZm9yIHRoZSBldmVudCB0aGF0IGlzIHRocm93biBieSB0aGUgdGFyZ2V0LCB3aGVyZSB0aGUgbWluaW11bSBpbnRlcnZhbCBiZXR3ZWVuIGV2ZW50cyAoaW4gbWlsbGlzZWNvbmRzKSBpcyBzcGVjaWZpZWQgYXMgYSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gZXZlbnQgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcGFyYW0gdGhyb3R0bGVJbnRlcnZhbCB7bnVtYmVyfSB0aHJvdHRsZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gYWRkVGhyb3R0bGVkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgdGhyb3R0bGVJbnRlcnZhbDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaHJvdHRsZWRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gIC8vICAgICAgIG9ic2VydmVyLm5leHQobmV3QXJncyk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB3b3JrcyBvbmNlLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRFdmVudExpc3RlbmVyT25jZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25lKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIHJlc29sdmUobmV3QXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgd29ya3Mgb25jZS5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTGlzdGVuZXJPbmNlKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tHb29nbGVNYXBzXSBcImFkZExpc3RlbmVyT25jZVwiIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJhZGRFdmVudExpc3RlbmVyT25jZVwiLicpO1xuICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXJPbmNlKGV2ZW50TmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhbHVlXG4gICAqIEBwYXJhbSBrZXkge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldChrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBrZXkgbmFtZSBmb3IgdGhlIHZhbHVlLiBgKGtleSlfY2hhbmdlZGAgd2lsbCBiZSBmaXJlZCB3aGVuIHlvdSBzZXQgdmFsdWUgdGhyb3VnaCB0aGlzIG1ldGhvZC5cbiAgICogQHBhcmFtIHZhbHVlIHthbnl9XG4gICAqIEBwYXJhbSBub05vdGlmeSB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBmaXJpbmcgdGhlIGAoa2V5KV9jaGFuZ2VkYCBldmVudC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGtleSB0byBhbm90aGVyIG9iamVjdFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSB0YXJnZXQge2FueX0gVGhlIHRhcmdldCBvYmplY3QgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHBhcmFtIHRhcmdldEtleT8ge3N0cmluZ30gW29wdGlvbnNdICBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLiBJZiB5b3Ugb21pdCB0aGlzLCB0aGUgYGtleWAgYXJndW1lbnQgaXMgdXNlZC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBgKGtleSlfY2hhbmdlZGAgZXZlbnQgd2hlbiB5b3UgYmluZCBmaXJzdCB0aW1lLCBiZWNhdXNlIHRoZSBpbnRlcm5hbCBzdGF0dXMgaXMgY2hhbmdlZCBmcm9tIGB1bmRlZmluZWRgIHRvIHNvbWV0aGluZy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGJpbmRUbyhrZXk6IHN0cmluZywgdGFyZ2V0OiBhbnksIHRhcmdldEtleT86IHN0cmluZywgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbihldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZFRocm90dGxlZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIC8vIG9uVGhyb3R0bGVkKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vblRocm90dGxlZChldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAvLyAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAvLyAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJPbmNlYFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb25lKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbmUoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgcmVzb2x2ZShuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoaXMgb2JqZWN0IGhhcyBldmVudCBsaXN0ZW5lciBmb3IgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGhhc0V2ZW50TGlzdGVuZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgc3RvcmVkIHZhbHVlc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHkoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7YW55fSBbb3B0aW9uc10gVGhlIGRhdGEgeW91IHdhbnQgdG8gcGFzcyB0byBldmVudCBsaXN0ZXJuZXJzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgLi4ucGFyYW1ldGVyczogYW55W10pOiB2b2lkIHtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIG9mZigpIGFuZCBlbXB0eSgpXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYmplY3RJbnN0YW5jZS50eXBlID09PSAnTWFwJykge1xuICAgICAgY29uc3QgbWFwOiBHb29nbGVNYXAgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKTtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0SWQoKV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcihzKVxuICAgKiBUaGUgYHJlbW92ZUV2ZW50TGlzdGVuZXIoKWAgaGFzIHRocmVlIHVzYWdlczpcbiAgICogIC0gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV2ZW50TmFtZVwiLCBsaXN0ZW5lckZ1bmN0aW9uKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBvbmUgcGFydGljdWxhciBldmVudCBsaXN0ZW5lclxuICAgKiAgLSByZW1vdmVFdmVudExpc3RlbmVyKFwiZXZlbnROYW1lXCIpO1xuICAgKiAgICAgVGhpcyByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgdGhhdCBhZGRlZCBmb3IgdGhlIGV2ZW50IG5hbWUuXG4gICAqICAtIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBhbGwgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFtvcHRpb25zXSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBsaXN0ZW5lciB7RnVuY3Rpb259IFtvcHRpb25zXSBFdmVudCBsaXN0ZW5lclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmBcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBbb3B0aW9uc10gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIge0Z1bmN0aW9ufSBbb3B0aW9uc10gRXZlbnQgbGlzdGVuZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIG9mZihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VBcnJheUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jhc2VBcnJheUNsYXNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQXJyYXlDbGFzcydcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUFycmF5Q2xhc3M8VD4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhPzogVFtdIHwgYW55KSB7XG4gICAgaWYgKGluaXRpYWxEYXRhIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykge1xuICAgICAgc3VwZXIoaW5pdGlhbERhdGEpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpbml0aWFsRGF0YSkpIHtcbiAgICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykoaW5pdGlhbERhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIobmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKShbXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50cy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGVtcHR5KG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZm9yRWFjaChmbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBmb3JFYWNoQXN5bmMoZm46ICgoZWxlbWVudDogVCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmZvckVhY2goZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIHRoZW4gUmV0dXJucyBhIG5ldyB2YWx1ZS5cbiAgICogVGhlbiB5b3UgY2FuIGdldCB0aGUgcmVzdWx0cyBvZiBlYWNoIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBtYXAoZm46IChlbGVtZW50OiBULCBpbmRleDogbnVtYmVyKSA9PiBhbnkpOiBhbnlbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBUaGVuIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHRzIG9mIGVhY2ggY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBtYXBBc3luYyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKG5ld0VsZW1lbnQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5tYXAoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMgYG1hcEFzeW5jYCwgYnV0IGtlZXAgdGhlIGV4ZWN1dGlvbiBvcmRlclxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgbWFwU2VyaWVzKGZuOiAoKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAobmV3RWxlbWVudDogYW55KSA9PiB2b2lkKSA9PiB2b2lkKSk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm1hcFNlcmllcyhmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZpbHRlcigpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1RbXX0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZmlsdGVyKGZuOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikgPT4gYm9vbGVhbik6IFRbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXJBc3luYygpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8VFtdPn0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgZmlsdGVyQXN5bmMoZm46IChlbGVtZW50OiBULCBjYWxsYmFjazogKHJlc3VsdDogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZCk6IFByb21pc2U8VFtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5maWx0ZXIoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgQXJyYXkuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleE9mKCkgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgZm91bmQgaW4gdGhlIGFycmF5LCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaW5kZXhPZihlbGVtZW50OiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJldmVyc2UoKSBtZXRob2QgcmV2ZXJzZXMgYW4gYXJyYXkgaW4gcGxhY2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZXZlcnNlKCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzb3J0KCkgbWV0aG9kIHNvcnRzIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSBpbiBwbGFjZSBhbmQgcmV0dXJucyB0aGUgYXJyYXkuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzb3J0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgaW5zZXJ0X2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpbnNlcnRBdChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBULCBub05vdGlmeT86IGJvb2xlYW4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoYXQgZWxlbWVudC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwb3Aobm9Ob3RpZnk/OiBib29sZWFuKTogVCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgb25lIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIG5ldyBsZW5ndGggb2YgdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gZWxlbWVudCB7b2JqZWN0fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBTZXQgdHJ1ZSB0byBwcmV2ZW50IGluc2VydF9hdCBldmVudHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwdXNoKGVsZW1lbnQ6IFQsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCByZW1vdmVfYXQgZXZlbnQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVBdChpbmRleDogbnVtYmVyLCBub05vdGlmeT86IGJvb2xlYW4pOiBUIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge29iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgc2V0X2F0IGV2ZW50LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QXQoaW5kZXg6IG51bWJlciwgZWxlbWVudDogVCwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQ2lyY2xlL1JFQURNRS5tZFxuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2VudGVyIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gbGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2VudGVyKGxhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2VudGVyIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDZW50ZXIoKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHJhZGl1cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNpcmNsZSByYWRpdXMuXG4gICAqIEBwYXJhbSByYWRpdXMge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGaWxsQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmlsbENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSB3aWR0aC5cbiAgICogQHBhcmFtIHN0cm9rZVdpZHRoIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIHdpZHRoICh1bml0OiBwaXhlbCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSBjb2xvciAob3V0dGVyIGNvbG9yKS5cbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgY2lyY2xlLlxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIGNsaWNrYWJsZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2lyY2xlIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgekluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF0TG5nQm91bmRzIChyZWN0YW5nbGUpIHRoYXQgY29udGFpbnMgdGhlIGNpcmNsZS5cbiAgICogQHJldHVybiB7TGF0TG5nQm91bmRzfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Qm91bmRzKCk6IExhdExuZ0JvdW5kcyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjaXJjbGUgdmlzaWJpbGl0eVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIHZpc2libGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5lbnZpcm9ubWVudCcsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICAvKipcbiAgICogU2V0IGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICovXG4gIHN0YXRpYyBzZXRFbnYoZW52T3B0aW9uczogRW52T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRFbnYoZW52T3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcGVuIHNvdXJjZSBzb2Z0d2FyZSBsaWNlbnNlIGluZm9ybWF0aW9uIGZvciBHb29nbGUgTWFwcyBTREsgZm9yIGlPUy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc3RhdGljIGdldExpY2Vuc2VJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCh0ZXh0OiBzdHJpbmcpID0+IHJlc29sdmUodGV4dCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYXBwLlxuICAgKiBAcGFyYW0gY29sb3JcbiAgICovXG4gIHN0YXRpYyBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBnZXRMaWNlbnNlSW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygpJyk7XG4gICAgcmV0dXJuIEVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKScpO1xuICAgIEVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcihjb2xvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5HZW9jb2RlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlciB7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogUHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHRbXT4+IHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpJyk7XG4gICAgcmV0dXJuIEdlb2NvZGVyLmdlb2NvZGUocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgcG9zaXRpb24gdG8gYWRkcmVzcyBhbmQgdmljZSB2ZXJzYVxuICAgKiBAcGFyYW0ge0dlb2NvZGVyUmVxdWVzdH0gcmVxdWVzdCBSZXF1ZXN0IG9iamVjdCB3aXRoIGVpdGhlciBhbiBhZGRyZXNzIG9yIGEgcG9zaXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHQ+Pn1cbiAgICovXG4gIHN0YXRpYyBnZW9jb2RlKHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCk6IFByb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PiB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIGlmIChyZXF1ZXN0LmFkZHJlc3MgaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QuYWRkcmVzcykgfHxcbiAgICAgIHJlcXVlc3QucG9zaXRpb24gaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QucG9zaXRpb24pKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogW1xuICAgICAgLy8gICAgXCJLeW90bywgSmFwYW5cIixcbiAgICAgIC8vICAgIFwiVG9reW8sIEphcGFuXCJcbiAgICAgIC8vICAgXVxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuR2VvY29kZXIuZ2VvY29kZShyZXF1ZXN0LCAobXZjQXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChtdmNBcnJheSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgQmFzZUFycmF5Q2xhc3MobXZjQXJyYXkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogXCJLeW90bywgSmFwYW5cIlxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5HZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QsIChyZXN1bHRzOiBHZW9jb2RlclJlc3VsdFtdKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkxvY2F0aW9uU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZGV2aWNlIGxvY2F0aW9uIHdpdGhvdXQgbWFwXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TXlMb2NhdGlvbj59XG4gICAqL1xuICBzdGF0aWMgZ2V0TXlMb2NhdGlvbihvcHRpb25zPzogTXlMb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPE15TG9jYXRpb24+IHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPE15TG9jYXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmdldE15TG9jYXRpb24ob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIGFwcGxpY2F0aW9uIGhhcyBnZW9sb2NhdGlvbiBwZXJtaXNzaW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59XG4gICAqL1xuICBzdGF0aWMgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmhhc1Blcm1pc3Npb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVuY29kaW5nIHtcblxuICAvKipcbiAgICogRGVjb2RlcyBhbiBlbmNvZGVkIHBhdGggc3RyaW5nIGludG8gYSBzZXF1ZW5jZSBvZiBMYXRMbmdzLlxuICAgKiBAcGFyYW0gZW5jb2RlZCB7c3RyaW5nfSBhbiBlbmNvZGVkIHBhdGggc3RyaW5nXG4gICAqIEBwYXJhbSBwcmVjaXNpb24/IHtudW1iZXJ9IGRlZmF1bHQ6IDVcbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZVBhdGgoZW5jb2RlZDogc3RyaW5nLCBwcmVjaXNpb24/OiBudW1iZXIpOiBJTGF0TG5nW10ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW5jb2RpbmcuZGVjb2RlUGF0aChlbmNvZGVkLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgYSBzZXF1ZW5jZSBvZiBMYXRMbmdzIGludG8gYW4gZW5jb2RlZCBwYXRoIHN0cmluZy5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fSBhIHNlcXVlbmNlIG9mIExhdExuZ3NcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZVBhdGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBzdHJpbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW5jb2RpbmcuZW5jb2RlUGF0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmRlY29kZVBhdGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkZWNvZGVQYXRoKGVuY29kZWQ6IHN0cmluZywgcHJlY2lzaW9uPzogbnVtYmVyKTogSUxhdExuZ1tdIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZGVjb2RlUGF0aCgpJyk7XG4gICAgcmV0dXJuIEVuY29kaW5nLmRlY29kZVBhdGgoZW5jb2RlZCwgcHJlY2lzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmVuY29kZVBhdGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBlbmNvZGVQYXRoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZW5jb2RlUGF0aCgpJyk7XG4gICAgcmV0dXJuIEVuY29kaW5nLmVuY29kZVBhdGgocGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5wb2x5JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIFBvbHkge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBpcyBpbiB0aGUgcG9seWdvbiBwYXRoXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7SUxhdExuZ31cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXX1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBjb250YWluc0xvY2F0aW9uKGxvY2F0aW9uOiBJTGF0TG5nLCBwYXRoOiBJTGF0TG5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnBvbHkuY29udGFpbnNMb2NhdGlvbihsb2NhdGlvbiwgcGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gaXMgb24gdGhlIHBvbHlsaW5lIHBhdGhcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdfVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzTG9jYXRpb25PbkVkZ2UobG9jYXRpb246IElMYXRMbmcsIHBhdGg6IElMYXRMbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkucG9seS5pc0xvY2F0aW9uT25FZGdlKGxvY2F0aW9uLCBwYXRoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LnNwaGVyaWNhbCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTcGhlcmljYWwge1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaXN0YW5jZSwgaW4gbWV0ZXJzLCBiZXR3ZWVuIHR3byBMYXRMbmdzLlxuICAgKiBAcGFyYW0gbG9jYXRpb25BIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gbG9jYXRpb25CIHtJTGF0TG5nfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTGF0TG5nIHJlc3VsdGluZyBmcm9tIG1vdmluZyBhIGRpc3RhbmNlIGZyb20gYW4gb3JpZ2luIGluIHRoZSBzcGVjaWZpZWQgaGVhZGluZyAoZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gbm9ydGgpXG4gICAqIEBwYXJhbSBmcm9tIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gZGlzdGFuY2Uge251bWJlcn1cbiAgICogQHBhcmFtIGhlYWRpbmcge251bWJlcn1cbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVPZmZzZXQoZnJvbTogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGZyb20sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsb2NhdGlvbiBvZiBvcmlnaW4gd2hlbiBwcm92aWRlZCB3aXRoIGEgTGF0TG5nIGRlc3RpbmF0aW9uLCBtZXRlcnMgdHJhdmVsbGVkIGFuZCBvcmlnaW5hbCBoZWFkaW5nLiBIZWFkaW5ncyBhcmUgZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gTm9ydGguIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBudWxsIHdoZW4gbm8gc29sdXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9IFRoZSBkZXN0aW5hdGlvbiBMYXRMbmcuXG4gICAqIEBwYXJhbSBkaXN0YW5jZSB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgdHJhdmVsbGVkLCBpbiBtZXRlcnMuXG4gICAqIEBwYXJhbSBoZWFkaW5nIHtudW1iZXJ9IFRoZSBoZWFkaW5nIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gbm9ydGguXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlT2Zmc2V0T3JpZ2luKHRvOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4odG8sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsZW5ndGggb2YgdGhlIGdpdmVuIHBhdGguXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVMZW5ndGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgY29tcHV0ZWQgYXJlYSB1c2VzIHRoZSBzYW1lIHVuaXRzIGFzIHRoZSByYWRpdXMuXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn0uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgYXJlYSBvZiBhIGNsb3NlZCBwYXRoLiBUaGUgc2lnbmVkIGFyZWEgbWF5IGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcGF0aC5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVTaWduZWRBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWFkaW5nIGZyb20gb25lIExhdExuZyB0byBhbm90aGVyIExhdExuZy4gSGVhZGluZ3MgYXJlIGV4cHJlc3NlZCBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIE5vcnRoIHdpdGhpbiB0aGUgcmFuZ2UgKC0xODAsMTgwKS5cbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVIZWFkaW5nKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTGF0TG5nIHdoaWNoIGxpZXMgdGhlIGdpdmVuIGZyYWN0aW9uIG9mIHRoZSB3YXkgYmV0d2VlbiB0aGUgb3JpZ2luIExhdExuZyBhbmQgdGhlIGRlc3RpbmF0aW9uIExhdExuZy5cbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9ICAgICBUaGUgTGF0TG5nIGZyb20gd2hpY2ggdG8gc3RhcnQuXG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ30gICAgICAgVGhlIExhdExuZyB0b3dhcmQgd2hpY2ggdG8gdHJhdmVsLlxuICAgKiBAcGFyYW0gZnJhY3Rpb24ge251bWJlcn0gIEEgZnJhY3Rpb24gb2YgdGhlIGRpc3RhbmNlIHRvIHRyYXZlbCBmcm9tIDAuMCB0byAxLjAgLlxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgaW50ZXJwb2xhdGUoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcsIGZyYWN0aW9uOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmludGVycG9sYXRlKGZyb20sIHRvLCBmcmFjdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbigpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2VlbigpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb20sIHRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZU9mZnNldChmcm9tOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldCgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KGZyb20sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZU9mZnNldE9yaWdpbih0bzogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4oKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZU9mZnNldE9yaWdpbih0bywgZGlzdGFuY2UsIGhlYWRpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlTGVuZ3RoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlQXJlYSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVBcmVhKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVBcmVhKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZVNpZ25lZEFyZWEocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlSGVhZGluZyhmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlSGVhZGluZygpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlSGVhZGluZyhmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuaW50ZXJwb2xhdGUoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBpbnRlcnBvbGF0ZShmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZywgZnJhY3Rpb246IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZShmcm9tLCB0bywgZnJhY3Rpb24pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1N0cmVldFZpZXdQYW5vcmFtYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnXG59KVxuZXhwb3J0IGNsYXNzIFN0cmVldFZpZXdQYW5vcmFtYSBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogU3RyZWV0Vmlld09wdGlvbnMpIHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIENyZWF0ZSBhIHBhbm9yYW1hXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFdpZHRoID49IDEwMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLlN0cmVldFZpZXcuZ2V0UGFub3JhbWEoZWxlbWVudCwgb3B0aW9ucykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlbGVtZW50LnRhZ05hbWUgKyAnIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuU3RyZWV0Vmlldy5nZXRQYW5vcmFtYShnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50OiBudW1iZXI7XG4gICAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgY29uc3QgdGltZXI6IGFueSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTW2ldICsgZWxlbWVudCkpO1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5tYXBpZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW3RhcmdldHNbMF0sIG9wdGlvbnNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KysgPCAyMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPCAxMDAgfHwgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPCAxMDApIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih0YXJnZXRzWzBdLnRhZ05hbWUgKyAnWyMnICsgZWxlbWVudCArICddIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdUaGVyZSBhcmUgbXVsdGlwbGUgXCInICsgZWxlbWVudCArICdcIiBlbGVtZW50cy4gVXNlIGRpZmZlcmVudCBpZCB0byBwcmV2ZW50IGVycm9yLicpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDYW4gbm90IGZpbmQgdGhlIGVsZW1lbnQgWyMnICsgZWxlbWVudCArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSksIG9wdGlvbnMpKTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2Uuam9pbignJykpO1xuICAgIH1cblxuICB9XG5cblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9pbnQgb2YgdmlldyBmb3IgdGhlIFN0cmVldCBWaWV3IHBhbm9yYW1hLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldFBvdihwb3Y6IFN0cmVldFZpZXdDYW1lcmFQYW5vKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBTdHJlZXRWaWV3UGFub3JhbWEgdG8gYSBnaXZlbiBsb2NhdGlvbi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRQb3NpdGlvbihjYW1lcmFQb3NpdGlvbjogU3RyaW5nIHwgU3RyZWV0Vmlld1NldFBvc2l0aW9uT3B0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhYmlsaXR5IGZvciB1c2VycyB0byB1c2UgcGFuIGFyb3VuZCBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UGFubmluZ0dlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgcGFubmluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQYW5uaW5nR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gem9vbSBvbiB0aGUgcGFub3JhbWEgdXNpbmcgZ2VzdHVyZXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Wm9vbUdlc3R1cmVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgem9vbWluZyBnZXN0dXJlIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRab29tR2VzdHVyZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gc2VlIHN0cmVldCBuYW1lcyBvbiB0aGUgcGFub3JhbWEuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3RyZWV0TmFtZXNFbmFibGVkKGdlc3R1cmVFbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBzdHJlZXQgbmFtZXMgY29udHJvbCBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3RyZWV0TmFtZXNFbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gbW92ZSBiZXR3ZWVuIHBhbm9yYW1hcy5cbiAgICogQHBhcmFtIGdlc3R1cmVFbmFibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXROYXZpZ2F0aW9uRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgbmF2aWdhdGlvbiBjb250cm9sIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXROYXZpZ2F0aW9uRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmF2aWdhdGlvbiBsaW5rcyAoU3RyZWV0Vmlld0xvY2F0aW9uLmxpbmtzKVxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldExpbmtzKCk6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3TG9jYXRpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRMb2NhdGlvbigpOiBTdHJlZXRWaWV3TG9jYXRpb24geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBhbm9yYW1hIGlkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBhbm9JZCgpOiBzdHJpbmcgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHBvc2l0aW9uIChTdHJlZXRWaWV3TG9jYXRpb24ubGF0TG5nKVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQb3NpdGlvbigpOiBJTGF0TG5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBwYW5vcmFtYSBjb21wbGV0ZWx5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJ1xufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXAgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCB8IHN0cmluZywgb3B0aW9ucz86IEdvb2dsZU1hcE9wdGlvbnMsIF9fdGltZW91dD86IG51bWJlcikge1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBDcmVhdGUgYSBtYXBcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0V2lkdGggPj0gMTAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChlbGVtZW50LCBvcHRpb25zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVsZW1lbnQudGFnTmFtZSArICcgaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKGdldFByb21pc2U8YW55W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBsZXQgY291bnQ6IG51bWJlcjtcbiAgICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICBjb25zdCB0aW1lcjogYW55ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVNbaV0gKyBlbGVtZW50KSk7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbm1hcGlkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbdGFyZ2V0c1swXSwgb3B0aW9uc10pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQrKyA8IDIwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA8IDEwMCB8fCB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA8IDEwMCkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHRhcmdldHNbMF0udGFnTmFtZSArICdbIycgKyBlbGVtZW50ICsgJ10gaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZXJlIGFyZSBtdWx0aXBsZSBcIicgKyBlbGVtZW50ICsgJ1wiIGVsZW1lbnRzLiBVc2UgZGlmZmVyZW50IGlkIHRvIHByZXZlbnQgZXJyb3IuJykpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCB0aGUgZWxlbWVudCBbIycgKyBlbGVtZW50ICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfX3RpbWVvdXQgPT0gbnVsbCA/IDEwMCA6IF9fdGltZW91dCk7XG4gICAgICAgIH0pLCBvcHRpb25zKSk7XG5cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gbnVsbCAmJiBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChudWxsLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UodGFyZ2V0c1swXSwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcCBkaXZcbiAgICogQHBhcmFtIGRvbU5vZGUge0hUTUxFbGVtZW50IHwgc3RyaW5nfSBbb3B0aW9uc10gSWYgeW91IHdhbnQgdG8gZGlzcGxheSB0aGUgbWFwIGluIGFuIGh0bWwgZWxlbWVudCwgeW91IG5lZWQgdG8gc3BlY2lmeSBhbiBlbGVtZW50IG9yIGlkLiBJZiBvbWl0IHRoaXMgYXJndW1lbnQsIHRoZSBtYXAgaXMgZGV0YWNoZWQgZnJvbSB3ZWJ2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBzZXREaXYoZG9tTm9kZT86IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5zZXREaXYoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb21Ob2RlID09PSAnc3RyaW5nJykge1xuICAgICAgKGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBpLCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGRvbU5vZGUpKTtcbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2lubWFwaWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoID49IDEwMCAmJiB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0c1swXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCdDYW4gbm90IGZpbmQgWyMnICsgZG9tTm9kZSArICddIGVsZW1lbnQnKTtcbiAgICAgIH0pKVxuICAgICAgLnRoZW4oKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdihlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9tTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmXG4gICAgICAgICAgIWRvbU5vZGUub2Zmc2V0UGFyZW50ICYmXG4gICAgICAgICAgZG9tTm9kZS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZG9tTm9kZS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdihkb21Ob2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihkb21Ob2RlLnRhZ05hbWUgKyAnIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgSFRNTCBlbGVtZW50XG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGl2KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFwIHR5cGUgaWRcbiAgICogQHBhcmFtIG1hcFR5cGVJZCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TWFwVHlwZUlkKG1hcFR5cGVJZDogTWFwVHlwZSB8IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmEoY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIGluIHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmFab29tSW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBvdXQgdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYVpvb21PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYShjYW1lcmFQb3NpdGlvbjogQ2FtZXJhUG9zaXRpb248YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgaW4gdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYVpvb21JbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIG91dCB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhWm9vbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEuXG4gICAqIEByZXR1cm4ge0NhbWVyYVBvc2l0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhUG9zaXRpb24oKTogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRhcmdldCBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhVGFyZ2V0KCk6IElMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHpvb20gbGV2ZWxcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhWm9vbSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIGJlYXJpbmdcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhQmVhcmluZygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgY2FtZXJhIHRpbHQgKHZpZXcgYW5nbGUpXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYVRpbHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjZW50ZXIgcG9zaXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3XG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmcgfCBJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFUYXJnZXQobGF0TG5nOiBJTGF0TG5nIHwgSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHpvb20gbGV2ZWwgb2YgdGhlIGNhbWVyYVxuICAgKiBAcGFyYW0gem9vbUxldmVsIHtudW1iZXJ9IFpvb20gbGV2ZWxcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVpvb20oem9vbUxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNhbWVyYSB2aWV3IGFuZ2xlXG4gICAqIEBwYXJhbSB0aWx0QW5nbGUge251bWJlcn0gVGlsdCBhbmdsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhVGlsdCh0aWx0QW5nbGU6IG51bWJlcik6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0IGNhbWVyYSBiZWFyaW5nXG4gICAqIEBwYXJhbSBiZWFyaW5nIHthbnl9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFCZWFyaW5nKGJlYXJpbmc6IGFueSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNlbnRlciBvZiB0aGUgbWFwIGJ5IHRoZSBnaXZlbiBkaXN0YW5jZSBpbiBwaXhlbHNcbiAgICogQHBhcmFtIHgge251bWJlcn1cbiAgICogQHBhcmFtIHkge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhbkJ5KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7IH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHZpc2libGUgcmVnaW9uIChzb3V0aFdlc3QgYW5kIG5vcnRoRWFzdClcbiAgICogQHJldHVybiB7VmlzaWJsZVJlZ2lvbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGVSZWdpb24oKTogVmlzaWJsZVJlZ2lvbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBkZXZpY2UgbG9jYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxNeUxvY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRNeUxvY2F0aW9uKG9wdGlvbnM/OiBNeUxvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8TXlMb2NhdGlvbj4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPE15TG9jYXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTG9jYXRpb25TZXJ2aWNlLmdldE15TG9jYXRpb24ob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gaWdub3JlIGFsbCBjbGlja3Mgb24gdGhlIG1hcFxuICAgKiBAcGFyYW0gaXNDbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoaXNDbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgbWFwIGNvbXBsZXRlbHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkuZm9yRWFjaCgob3ZlcmxheUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvdmVybGF5cywgc3VjaCBhcyBtYXJrZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkuZm9yRWFjaCgob3ZlcmxheUlkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBkZWxldGUgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuY2xlYXIoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSB1bml0IGZyb20gTGF0TG5nIHRvIHRoZSBwaXhlbHMgZnJvbSB0aGUgbGVmdC90b3Agb2YgdGhlIG1hcCBkaXZcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGZyb21MYXRMbmdUb1BvaW50KGxhdExuZzogSUxhdExuZyk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgdW5pdCBmcm9tIHRoZSBwaXhlbHMgZnJvbSB0aGUgbGVmdC90b3AgdG8gdGhlIExhdExuZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPExhdExuZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZnJvbVBvaW50VG9MYXRMbmcocG9pbnQ6IG51bWJlcltdKTogUHJvbWlzZTxMYXRMbmc+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIE15TG9jYXRpb24gY29udHJvbCAoYmx1ZSBkb3QpXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TXlMb2NhdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIE15TG9jYXRpb24gYnV0dG9uXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50bHkgZm9jdXNlZCBidWlsZGluZ1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0Rm9jdXNlZEJ1aWxkaW5nKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIGluZG9vciBtYXBcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJbmRvb3JFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSB0cmFmZmljIGxheWVyXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VHJhZmZpY0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIGNvbXBhc3MgYnV0dG9uXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q29tcGFzc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHByZWZlcmVuY2UgZm9yIHdoZXRoZXIgYWxsIGdlc3R1cmVzIHNob3VsZCBiZSBlbmFibGVkIG9yIGRpc2FibGVkXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QWxsR2VzdHVyZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdmlzaWJpbGl0eSBvZiB0aGUgbWFwXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWRqdXN0IHRoZSBtYXAgcGFkZGluZyAoc2FtZSBhcyBDU1MgcGFkZGluZyBydWxlKVxuICAgKiBAcGFyYW0gdG9wIHtudW1iZXJ9XG4gICAqIEBwYXJhbSByaWdodCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gbGVmdCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gYm90dG9tIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQYWRkaW5nKHRvcDogbnVtYmVyLCByaWdodD86IG51bWJlciwgYm90dG9tPzogbnVtYmVyLCBsZWZ0PzogbnVtYmVyKTogdm9pZCB7IH1cblxuICAvKipcbiAgICogU2V0IG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wdGlvbnMob3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxNYXJrZXI+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXIob3B0aW9uczogTWFya2VyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TWFya2VyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXIob3B0aW9ucywgKG1hcmtlcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXIpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlci5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXk6IE1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywgbWFya2VyKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgbWFya2VyLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEBSZXR1cm5zIHtNYXJrZXJ9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlclN5bmMob3B0aW9uczogTWFya2VyT3B0aW9ucyk6IE1hcmtlciB7XG4gICAgY29uc3QgbWFya2VyOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXIob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBtYXJrZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5OiBNYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMsIG1hcmtlcik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIG1hcmtlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlciBjbHVzdGVyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJDbHVzdGVyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1hcmtlckNsdXN0ZXI+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXJDbHVzdGVyKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXJDbHVzdGVyIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TWFya2VyQ2x1c3Rlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zLCAobWFya2VyQ2x1c3RlcjogYW55KSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXJDbHVzdGVyKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkID0gbWFya2VyQ2x1c3Rlci5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgTWFya2VyQ2x1c3Rlcih0aGlzLCBtYXJrZXJDbHVzdGVyKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgbWFya2VyQ2x1c3Rlci5vbmUoJ3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtYXJrZXJDbHVzdGVyLnNldCgnX292ZXJsYXlzJywgbmV3IEJhc2VBcnJheUNsYXNzKCkpO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgY2x1c3RlciBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyQ2x1c3Rlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQFJldHVybnMge01hcmtlckNsdXN0ZXJ9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlckNsdXN0ZXJTeW5jKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJPcHRpb25zKTogTWFya2VyQ2x1c3RlciB7XG4gICAgY29uc3QgbWFya2VyQ2x1c3RlcjogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlckNsdXN0ZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5OiBNYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXIodGhpcywgbWFya2VyQ2x1c3Rlcik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIG1hcmtlckNsdXN0ZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1hcmtlckNsdXN0ZXIuc2V0KCdfb3ZlcmxheXMnLCBuZXcgQmFzZUFycmF5Q2xhc3MoKSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNpcmNsZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7Q2lyY2xlT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPENpcmNsZT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZENpcmNsZShvcHRpb25zOiBDaXJjbGVPcHRpb25zKTogUHJvbWlzZTxDaXJjbGUgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxDaXJjbGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZENpcmNsZShvcHRpb25zLCAoY2lyY2xlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGNpcmNsZSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gY2lyY2xlLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBDaXJjbGUodGhpcywgY2lyY2xlKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgY2lyY2xlLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2lyY2xlIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtDaXJjbGVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge0NpcmNsZX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkQ2lyY2xlU3luYyhvcHRpb25zOiBDaXJjbGVPcHRpb25zKTogQ2lyY2xlIHtcbiAgICBjb25zdCBjaXJjbGU6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZENpcmNsZShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGNpcmNsZS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgQ2lyY2xlKHRoaXMsIGNpcmNsZSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIGNpcmNsZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5Z29uXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5Z29uT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFBvbHlnb24+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5Z29uKG9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogUHJvbWlzZTxQb2x5Z29uIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8UG9seWdvbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWdvbihvcHRpb25zLCAocG9seWdvbjogYW55KSA9PiB7XG4gICAgICAgIGlmIChwb2x5Z29uKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5Z29uLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5Z29uKHRoaXMsIHBvbHlnb24pO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBwb2x5Z29uLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWdvbiBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWdvbk9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UG9seWdvbn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWdvblN5bmMob3B0aW9uczogUG9seWdvbk9wdGlvbnMpOiBQb2x5Z29uIHtcbiAgICBjb25zdCBwb2x5Z29uOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5Z29uKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWdvbi5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWdvbih0aGlzLCBwb2x5Z29uKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgcG9seWdvbi5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlsaW5lXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5bGluZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxQb2x5bGluZT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlsaW5lKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IFByb21pc2U8UG9seWxpbmUgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxQb2x5bGluZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWxpbmUob3B0aW9ucywgKHBvbHlsaW5lOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHBvbHlsaW5lKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5bGluZS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWxpbmUodGhpcywgcG9seWxpbmUpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBwb2x5bGluZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlsaW5lIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5bGluZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UG9seWxpbmV9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlsaW5lU3luYyhvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQb2x5bGluZSB7XG4gICAgY29uc3QgcG9seWxpbmU6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlsaW5lKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWxpbmUuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlsaW5lKHRoaXMsIHBvbHlsaW5lKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgcG9seWxpbmUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge1RpbGVPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFRpbGVPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkVGlsZU92ZXJsYXkob3B0aW9uczogVGlsZU92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxUaWxlT3ZlcmxheSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFRpbGVPdmVybGF5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaWxlT3ZlcmxheShvcHRpb25zLCAodGlsZU92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAodGlsZU92ZXJsYXkpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHRpbGVPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUaWxlT3ZlcmxheSh0aGlzLCB0aWxlT3ZlcmxheSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIHRpbGVPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGlsZSBvdmVybGF5IGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtUaWxlT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7VGlsZU92ZXJsYXl9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFRpbGVPdmVybGF5U3luYyhvcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnMpOiBUaWxlT3ZlcmxheSB7XG4gICAgY29uc3QgdGlsZU92ZXJsYXk6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFRpbGVPdmVybGF5KG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gdGlsZU92ZXJsYXkuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRpbGVPdmVybGF5KHRoaXMsIHRpbGVPdmVybGF5KTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgdGlsZU92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7R3JvdW5kT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxHcm91bmRPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkR3JvdW5kT3ZlcmxheShvcHRpb25zOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8R3JvdW5kT3ZlcmxheSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEdyb3VuZE92ZXJsYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEdyb3VuZE92ZXJsYXkob3B0aW9ucywgKGdyb3VuZE92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZ3JvdW5kT3ZlcmxheSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gZ3JvdW5kT3ZlcmxheS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgR3JvdW5kT3ZlcmxheSh0aGlzLCBncm91bmRPdmVybGF5KTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgZ3JvdW5kT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGdyb3VuZCBvdmVybGF5IGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtHcm91bmRPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtHcm91bmRPdmVybGF5fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRHcm91bmRPdmVybGF5U3luYyhvcHRpb25zOiBHcm91bmRPdmVybGF5T3B0aW9ucyk6IEdyb3VuZE92ZXJsYXkge1xuICAgIGNvbnN0IGdyb3VuZE92ZXJsYXk6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEdyb3VuZE92ZXJsYXkob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBncm91bmRPdmVybGF5LmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBHcm91bmRPdmVybGF5KHRoaXMsIGdyb3VuZE92ZXJsYXkpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBncm91bmRPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEga21sIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge0ttbE92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8S21sT3ZlcmxheT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEttbE92ZXJsYXkob3B0aW9uczogS21sT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPEttbE92ZXJsYXk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxLbWxPdmVybGF5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRLbWxPdmVybGF5KG9wdGlvbnMsIChrbWxPdmVybGF5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGttbE92ZXJsYXkpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGttbE92ZXJsYXkuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IEttbE92ZXJsYXkodGhpcywga21sT3ZlcmxheSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIGttbE92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhc2U2NCBlbmNvZGVkIHNjcmVlbiBjYXB0dXJlIG9mIHRoZSBtYXAuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtUb0RhdGFVcmxPcHRpb25zfSBbb3B0aW9uc10gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgdG9EYXRhVVJMKG9wdGlvbnM/OiBUb0RhdGFVcmxPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHsgcmV0dXJuOyB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91bmRPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYm91bmRzIG9mIHRoZSBHcm91bmRPdmVybGF5XG4gICAqIEBwYXJhbSBib3VuZHMgeyBJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRCb3VuZHMoYm91bmRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBiZWFyaW5nIG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gYmVhcmluZyB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QmVhcmluZyhiZWFyaW5nOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGJlYXJpbmcgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJlYXJpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW1hZ2Ugb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBpbWFnZVVybCB7c3RyaW5nfSBVUkwgb2YgaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEltYWdlKGltYWdlVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG9wYWNpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5IGZyb20gMC4wIHRvIDEuMFxuICAgKiBAcGFyYW0gb3BhY2l0eSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3BhY2l0eShvcGFjaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IG9wYWNpdHlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0T3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBncm91bmQgb3ZlcmxheSBpcyBjbGlja2FibGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ3JvdW5kIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZ3JvdW5kIG92ZXJsYXkgekluZGV4IG9yZGVyXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdyb3VuZCBvdmVybGF5IHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkh0bWxJbmZvV2luZG93JyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgSHRtbEluZm9XaW5kb3cgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5IdG1sSW5mb1dpbmRvdykoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYmFja2dyb3VuZENvbG9yXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldEJhY2tncm91bmRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHlvdXIgSFRNTCBjb250ZW50cy5cbiAgICogQHBhcmFtIGNvbnRlbnQge2FueX0gU3RyaW5nIGNvbnRhaW5pbmcgdGV4dCBvciBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIGNzc09wdGlvbnM/IHthbnl9IENTUyBzdHlsZXMgZm9yIHRoZSBjb250YWluZXIgZWxlbWVudCBvZiBIVE1MSW5mb1dpbmRvd1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nIHwgRWxlbWVudCwgY3NzT3B0aW9ucz86IGFueSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIGh0bWxJbmZvV2luZG93XG4gICAqIEBwYXJhbSBtYXJrZXIge01hcmtlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKG1hcmtlcjogYW55KTogYW55IHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgaHRtbEluZm9XaW5kb3dcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBjbG9zZSgpOiB2b2lkIHtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWFya2VyIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXJrZXIgcG9zaXRpb24uXG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb3NpdGlvbihsYXRMbmc6IElMYXRMbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFya2VyIHBvc2l0aW9uLlxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UG9zaXRpb24oKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIG5vcm1hbCBpbmZvV2luZG93IG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzaG93SW5mb1dpbmRvdygpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBub3JtYWwgaW5mb1dpbmRvdyBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaGlkZUluZm9XaW5kb3coKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgYW5pbWF0aW9uIGVpdGhlciBgRFJPUGAgb3IgYEJPVU5DRWBcbiAgICogQHBhcmFtIGFuaW1hdGlvbiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91ICoqZG8gbm90IHdhbnQqKiB0byBtb3ZlIHRoZSBtYXAgd2hlbiB5b3UgY2xpY2sgb24gdGhlIG1hcmtlci5cbiAgICogQHBhcmFtIGRpc2FibGVBdXRvUGFuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGlzYWJsZUF1dG9QYW4oZGlzYWJsZUF1dG9QYW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gaGlkZSB0aGUgbWFya2VyLlxuICAgKiBAcGFyYW0gdmlzaWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXJrZXIgaXMgdmlzaWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRpdGxlIG9mIHRoZSBub3JtYWwgaW5mb1dpbmRvdy5cbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGl0bGUgc3RyaW5ncy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBzbmlwcGV0IG9mIHRoZSBub3JtYWwgaW5mb1dpbmRvdy5cbiAgICogQHBhcmFtIHNuaXBwZXQge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFNuaXBwZXQoc25pcHBldDogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc25pcHBldCBzdHJpbmdzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTbmlwcGV0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcmtlciBvcGFjaXR5IGZyb20gMC4wIHRvIDEuMC5cbiAgICogQHBhcmFtIGFscGhhIHtudW1iZXJ9IE9wYWNpdHlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wYWNpdHkoYWxwaGE6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciBvcGFjaXR5LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IE9wYWNpdHlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE9wYWNpdHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW5mbyB3aW5kb3cgYW5jaG9yLiBUaGlzIGRlZmF1bHRzIHRvIDUwJSBmcm9tIHRoZSBsZWZ0IG9mIHRoZSBpbWFnZSBhbmQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgaW1hZ2UuXG4gICAqIEBwYXJhbSB4IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gbGVmdCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gdG9wIG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEljb25BbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBpbmZvIHdpbmRvdyBhbmNob3IuIFRoaXMgZGVmYXVsdHMgdG8gNTAlIGZyb20gdGhlIGxlZnQgb2YgdGhlIGltYWdlIGFuZCBhdCB0aGUgdG9wIG9mIHRoZSBpbWFnZS5cbiAgICogQHBhcmFtIHgge251bWJlcn0gRGlzdGFuY2UgZnJvbSBsZWZ0IG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICogQHBhcmFtIHkge251bWJlcn0gRGlzdGFuY2UgZnJvbSB0b3Agb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SW5mb1dpbmRvd0FuY2hvcih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaW5mb1dpbmRvdyBpcyBzaG93biBvbiB0aGUgbWFya2VyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpc0luZm9XaW5kb3dTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlnaGVyIHpJbmRleCB2YWx1ZSBvdmVybGF5cyB3aWxsIGJlIGRyYXduIG9uIHRvcCBvZiBsb3dlciB6SW5kZXggdmFsdWUgdGlsZSBsYXllcnMgYW5kIG92ZXJsYXlzLlxuICAgKiBAcGFyYW0geSB7bnVtYmVyfSB6LWluZGV4XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgei1pbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IGFsbG93IGFsbCB1c2VycyB0byBkcmFnIHRoZSBtYXJrZXIuXG4gICAqIEBwYXJhbSBkcmFnZ2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXJrZXIgZHJhZyBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNEcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGJlIGZsYXQgbWFya2VyLlxuICAgKiBAcGFyYW0gZmxhdCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZsYXQoZmxhdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGljb24gdXJsIGFuZC9vciBzaXplXG4gICAqIEBwYXJhbSBpY29uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJY29uKGljb246IE1hcmtlckljb24pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXJrZXIgcm90YXRpb24gYW5nbGUuXG4gICAqIEBwYXJhbSByb3RhdGlvbiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Um90YXRpb24ocm90YXRpb246IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciByb3RhdGlvbiBhbmdsZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Um90YXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcmtlckNsdXN0ZXIgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgbWFya2VyIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBtYXJrZXIge01hcmtlck9wdGlvbnN9IG9uZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gc2tpcFJlZHJhdz8ge2Jvb2xlYW59IG1hcmtlciBjbHVzdGVyIGRvZXMgbm90IHJlZHJhdyB0aGUgbWFya2VyIGNsdXN0ZXIgaWYgdHJ1ZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZE1hcmtlcihtYXJrZXI6IE1hcmtlck9wdGlvbnMpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbWFya2VyIGxvY2F0aW9uc1xuICAgKiBAcGFyYW0gbWFya2VycyB7TWFya2VyT3B0aW9uc1tdfSBtdWx0aXBsZSBsb2NhdGlvblxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJPcHRpb25zW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG1hcmtlciBjbHVzdGVyXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldCgnX292ZXJsYXlzJywgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gcG9pbnRzLlxuICAgKiBAcGFyYW0gcG9pbnRzIHtJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb2ludHMocG9pbnRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzcy5cbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIHBvaW50cy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqL1xuICBnZXRQb2ludHMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4ge1xuICAgIHJldHVybiBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4odGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gaG9sZXMuXG4gICAqIEBwYXJhbSBob2xlcyB7SUxhdExuZ1tdW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRIb2xlcyhob2xlczogSUxhdExuZ1tdW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzcy5cbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIGhvbGVzLlxuICAgKiBAcmV0dXJuIHtCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+fVxuICAgKi9cbiAgZ2V0SG9sZXMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPiB7XG4gICAgY29uc3QgaG9sZXM6IElMYXRMbmdbXVtdID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCk7XG4gICAgY29uc3QgcmVzdWx0czogQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPiA9IG5ldyBCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+KCk7XG4gICAgaG9sZXMuZm9yRWFjaCgoaG9sZTogSUxhdExuZ1tdKSA9PiB7XG4gICAgICByZXN1bHRzLnB1c2goaG9sZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZmlsbGluZyBjb2xvciAoaW5uZXIgY29sb3IpXG4gICAqIEBwYXJhbSBmaWxsQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZpbGxDb2xvcihmaWxsQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZpbGxDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzdHJva2UgY29sb3IgKG91dGVyIGNvbG9yKVxuICAgKiBAcGFyYW0gc3Ryb2tlQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlnb24gc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcilcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBwb2x5Z29uXG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIGNsaWNrYWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIHBvbHlnb25cbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlnb24gaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSB6SW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiB6SW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcG9seWdvbi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIHN0cm9rZSB3aWR0aFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBvbHlnb24gc3Ryb2tlIHdpZHRoXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbCBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZiB0aGUgRWFydGguXG4gICAqIEBwYXJhbSBnZW9kZXNpYyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEdlb2Rlc2ljKGdlb2Rlc2ljOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIGdlb2Rlc2ljLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0R2VvZGVzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHBvaW50cy5cbiAgICogQHBhcmFtIHBvaW50cyB7SUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UG9pbnRzKHBvaW50czogSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgQmFzZUFycmF5Q2xhc3NcbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIHBvaW50cy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqL1xuICBnZXRQb2ludHMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4ge1xuICAgIHJldHVybiBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4odGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgZWRnZXMgb2YgdGhlIHBvbHlsaW5lIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbCBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZiB0aGUgRWFydGguXG4gICAqIEBwYXJhbSBnZW9EZXNpYyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEdlb0Rlc2ljKGdlb0Rlc2ljOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5bGluZSBpcyBnZW9kZXNpY1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0R2VvZGVzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUgcG9seWxpbmVcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgcG9seWxpbmVcbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIGNsaWNrYWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSBjb2xvclxuICAgKiBAcGFyYW0gc3Ryb2tlQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlsaW5lIGNvbG9yXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHN0cm9rZSB3aWR0aFxuICAgKiBAcGFyYW0gc3Ryb2tlV2lkdGgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHN0cm9rZSB3aWR0aCAodW5pdDogcGl4ZWwpLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlsaW5lIHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwb2x5bGluZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVGlsZU92ZXJsYXkgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgdGlsZXMgc2hvdWxkIGZhZGUgaW4uXG4gICAqIEBwYXJhbSBmYWRlSW4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGYWRlSW4oZmFkZUluOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIHRpbGVzIHNob3VsZCBmYWRlIGluXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGYWRlSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgekluZGV4IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgekluZGV4IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgb3BhY2l0eSBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEBwYXJhbSBvcGFjaXR5IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcGFjaXR5KG9wYWNpdHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9wYWNpdHkgb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0aWxlIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRpbGUgc2l6ZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VGlsZVNpemUoKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0aWxlIG92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEttbE92ZXJsYXkgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgJ2NhbWVyYScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX29iamVjdEluc3RhbmNlLmNhbWVyYSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsICdrbWxEYXRhJywge1xuICAgICAgICB2YWx1ZTogdGhpcy5fb2JqZWN0SW5zdGFuY2Uua21sRGF0YSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmlld3BvcnQgdG8gY29udGFpbnMgYWxsIG92ZXJsYXlzXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREZWZhdWx0Vmlld3BvcnQoKTogQ2FtZXJhUG9zaXRpb248SUxhdExuZyB8IElMYXRMbmdbXT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBHb29nbGVNYXAgeyByZXR1cm4gdGhpcy5fbWFwOyB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUga21sIG92ZXJsYXlcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUga21sIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgS21sT3ZlcmxheVxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBLbWxPdmVybGF5IGlzIGNsaWNrYWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBLbWxPdmVybGF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==