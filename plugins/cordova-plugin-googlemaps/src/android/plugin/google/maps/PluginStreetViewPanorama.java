package plugin.google.maps;

import android.app.Activity;
import android.graphics.Point;
import android.view.View;
import android.view.ViewGroup;

import com.google.android.gms.maps.OnStreetViewPanoramaReadyCallback;
import com.google.android.gms.maps.StreetViewPanorama;
import com.google.android.gms.maps.StreetViewPanoramaOptions;
import com.google.android.gms.maps.StreetViewPanoramaView;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.StreetViewPanoramaCamera;
import com.google.android.gms.maps.model.StreetViewPanoramaLink;
import com.google.android.gms.maps.model.StreetViewPanoramaLocation;
import com.google.android.gms.maps.model.StreetViewPanoramaOrientation;
import com.google.android.gms.maps.model.StreetViewSource;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;


public class PluginStreetViewPanorama extends MyPlugin implements
    IPluginView, StreetViewPanorama.OnStreetViewPanoramaCameraChangeListener,
    StreetViewPanorama.OnStreetViewPanoramaChangeListener,
    StreetViewPanorama.OnStreetViewPanoramaClickListener {

  private Activity mActivity;
  private StreetViewPanoramaView panoramaView;
  private StreetViewPanorama panorama;
  private String panoramaId;
  private boolean isVisible = true;
  private boolean isClickable = true;
  private final String TAG = "StreetView";
  private String divId;
  private int viewDepth = 0;

  @Override
  public void initialize(CordovaInterface cordova, final CordovaWebView webView) {
    super.initialize(cordova, webView);
    mActivity = cordova.getActivity();
  }

  public int getViewDepth() {
    return viewDepth;
  }
  public String getDivId() {
    return this.divId;
  }
  public String getOverlayId() {
    return this.panoramaId;
  }
  public ViewGroup getView() {
    return this.panoramaView;
  }


  public boolean getVisible() {
    return isVisible;
  }
  public boolean getClickable() {
    return isClickable;
  }
  public void getPanorama(final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    JSONObject meta = args.getJSONObject(0);
    panoramaId = meta.getString("__pgmId");
    viewDepth = meta.getInt("depth");

    JSONObject jsOptions = args.getJSONObject(1);
    divId = args.getString(2);

    StreetViewPanoramaOptions svOptions = new StreetViewPanoramaOptions();
    if (jsOptions.has("camera")) {
      JSONObject cameraOpts = jsOptions.getJSONObject("camera");
      Object target = cameraOpts.get("target");
      if (target instanceof JSONObject) {
        JSONObject targetJson = cameraOpts.getJSONObject("target");
        LatLng position = new LatLng(targetJson.getDouble("lat"), targetJson.getDouble("lng"));

        if (cameraOpts.has("source")) {
          StreetViewSource source = "OUTDOOR".equals(cameraOpts.getString("source")) ?
              StreetViewSource.OUTDOOR : StreetViewSource.DEFAULT;
          if (cameraOpts.has("radius")) {
            svOptions.position(position, cameraOpts.getInt("radius"), source);
          } else {
            svOptions.position(position, source);
          }
        } else {
          if (cameraOpts.has("radius")) {
            svOptions.position(position, cameraOpts.getInt("radius"));
          } else {
            svOptions.position(position);
          }
        }
      } else if (target instanceof String) {
        svOptions.panoramaId(cameraOpts.getString("target"));
      }

      if (cameraOpts.has("bearing") ||
          cameraOpts.has("tilt") ||
          cameraOpts.has("zoom")) {
        StreetViewPanoramaCamera.Builder builder = StreetViewPanoramaCamera.builder();
        if (cameraOpts.has("bearing")) {
          builder.bearing = (float) cameraOpts.getDouble("bearing");
        }
        if (cameraOpts.has("tilt")) {
          builder.tilt = (float) cameraOpts.getDouble("tilt");
        }
        if (cameraOpts.has("zoom")) {
          builder.zoom = (float) cameraOpts.getDouble("zoom");
        }
        svOptions.panoramaCamera(builder.build());
      }
    }

    if (jsOptions.has("gestures")) {
      JSONObject gestures = jsOptions.getJSONObject("gestures");
      if (gestures.has("panning")) {
        svOptions.panningGesturesEnabled(gestures.getBoolean("panning"));
      }
      if (gestures.has("zoom")) {
        svOptions.zoomGesturesEnabled(gestures.getBoolean("zoom"));
      }
    }

    if (jsOptions.has("controls")) {
      JSONObject controls = jsOptions.getJSONObject("controls");
      if (controls.has("navigation")) {
        svOptions.userNavigationEnabled(controls.getBoolean("navigation"));
      }
      if (controls.has("streetNames")) {
        svOptions.streetNamesEnabled(controls.getBoolean("streetNames"));
      }
    }
    panoramaView = new StreetViewPanoramaView(mActivity, svOptions);

    mActivity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        panoramaView.onCreate(null);
        panoramaView.setTag(getViewDepth());

        panoramaView.getStreetViewPanoramaAsync(new OnStreetViewPanoramaReadyCallback() {
          @Override
          public void onStreetViewPanoramaReady(StreetViewPanorama streetViewPanorama) {
            panoramaView.onResume();
            panorama = streetViewPanorama;

            panorama.setOnStreetViewPanoramaCameraChangeListener(PluginStreetViewPanorama.this);
            panorama.setOnStreetViewPanoramaChangeListener(PluginStreetViewPanorama.this);
            panorama.setOnStreetViewPanoramaClickListener(PluginStreetViewPanorama.this);

            // Don't support this because iOS does not support this feature.
            //panorama.setOnStreetViewPanoramaLongClickListener(PluginStreetViewPanorama.this);


            mapCtrl.mPluginLayout.addPluginOverlay(PluginStreetViewPanorama.this);
            callbackContext.success();
          }
        });
      }
    });
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
  }

  @Override
  public void onPause(boolean multitasking) {
    super.onPause(multitasking);
    if (panoramaView != null && panoramaView.isActivated()) {
      panoramaView.onPause();
    }

    //mapCtrl.mPluginLayout.removePluginOverlay(this.panoramaId);

  }
  @Override
  public void onResume(boolean multitasking) {
    super.onResume(multitasking);
    if (panoramaView != null && panoramaView.isActivated()) {
      panoramaView.onResume();
    }
    //mapCtrl.mPluginLayout.addPluginOverlay(PluginStreetViewPanorama.this);
  }

  public void attachToWebView(JSONArray args, final CallbackContext callbackContext) {
    mapCtrl.mPluginLayout.addPluginOverlay(this);
    callbackContext.success();
  }

  public void detachFromWebView(JSONArray args, final CallbackContext callbackContext) {
    mapCtrl.mPluginLayout.removePluginOverlay(this.panoramaId);
    callbackContext.success();
  }

  public void setPanningGesturesEnabled(final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    final boolean boolValue = args.getBoolean(0);

    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        panorama.setPanningGesturesEnabled(boolValue);
        callbackContext.success();
      }
    });
  }

  public void setZoomGesturesEnabled(final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    final boolean boolValue = args.getBoolean(0);

    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        panorama.setZoomGesturesEnabled(boolValue);
        callbackContext.success();
      }
    });
  }

  public void setNavigationEnabled(final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    final boolean boolValue = args.getBoolean(0);

    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        panorama.setUserNavigationEnabled(boolValue);
        callbackContext.success();
      }
    });
  }

  public void setStreetNamesEnabled(final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    final boolean boolValue = args.getBoolean(0);

    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        panorama.setStreetNamesEnabled(boolValue);
        callbackContext.success();
      }
    });
  }
  public void setVisible(final JSONArray args, final CallbackContext callbackContext) throws JSONException {
    final boolean boolValue = args.getBoolean(0);

    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        panoramaView.setVisibility(boolValue ? View.VISIBLE : View.INVISIBLE);
        callbackContext.success();
      }
    });
  }


  public void setPosition(final JSONArray args, final CallbackContext callbackContext) throws JSONException {

    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {

        try {
          JSONObject cameraOpts = args.getJSONObject(0);
          Object target = cameraOpts.get("target");

          if (target instanceof JSONObject) {
            JSONObject targetJson = (JSONObject)target;
            LatLng position = new LatLng(targetJson.getDouble("lat"), targetJson.getDouble("lng"));

            if (cameraOpts.has("source")) {
              StreetViewSource source = "OUTDOOR".equals(cameraOpts.getString("source")) ?
                  StreetViewSource.OUTDOOR : StreetViewSource.DEFAULT;
              if (cameraOpts.has("radius")) {
                panorama.setPosition(position, cameraOpts.getInt("radius"), source);
              } else {
                panorama.setPosition(position, source);
              }
            } else {
              if (cameraOpts.has("radius")) {
                panorama.setPosition(position, cameraOpts.getInt("radius"));
              } else {
                panorama.setPosition(position);
              }
            }
          } else if (target instanceof String) {
            panorama.setPosition(cameraOpts.getString("target"));
          }

          callbackContext.success();
        } catch (JSONException e) {
          e.printStackTrace();
          callbackContext.error("" + e.getMessage());
        }
      }
    });
  }

  public void setPov(final JSONArray args, final CallbackContext callbackContext) throws JSONException {

    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {

        try {
          final JSONObject cameraPosition = args.getJSONObject(0);

          StreetViewPanoramaCamera currentCamera = panorama.getPanoramaCamera();
          float bearing = cameraPosition.has("bearing") ? (float) cameraPosition.getDouble("bearing") : currentCamera.bearing;
          float tilt = cameraPosition.has("tilt") ? (float) cameraPosition.getDouble("tilt") : currentCamera.tilt;
          float zoom = cameraPosition.has("zoom") ? (float) cameraPosition.getDouble("zoom") : currentCamera.zoom;
          long duration = cameraPosition.has("duration") ? (long) cameraPosition.getDouble("duration") : 1000;

          StreetViewPanoramaCamera newCamera = new StreetViewPanoramaCamera.Builder()
                                                    .bearing(bearing)
                                                        .zoom(zoom)
                                                        .tilt(tilt)
                                                        .build();
          panorama.animateTo(newCamera, duration);

          callbackContext.success();
        } catch (Exception e) {
          e.printStackTrace();
          callbackContext.error("" + e.getMessage());
        }
      }
    });
  }

  public void remove(JSONArray args, final CallbackContext callbackContext) {
    mapCtrl.mPluginLayout.removePluginOverlay(this.panoramaId);
    cordova.getActivity().runOnUiThread(new Runnable() {
      @Override
      public void run() {
        panorama.setOnStreetViewPanoramaLongClickListener(null);
        panorama.setOnStreetViewPanoramaClickListener(null);
        panorama.setOnStreetViewPanoramaChangeListener(null);
        panorama.setOnStreetViewPanoramaCameraChangeListener(null);

        System.gc();
        Runtime.getRuntime().gc();
        if (callbackContext != null) {
          callbackContext.success();
        }
        PluginStreetViewPanorama.this.onDestroy();
      }
    });
  }

  @Override
  public void onStreetViewPanoramaCameraChange(StreetViewPanoramaCamera streetViewPanoramaCamera) {
    try {
      JSONObject camera = new JSONObject();
      camera.put("bearing", streetViewPanoramaCamera.bearing);
      camera.put("tilt", streetViewPanoramaCamera.tilt);
      camera.put("zoom", streetViewPanoramaCamera.zoom);

//      StreetViewPanoramaOrientation svOrientation = streetViewPanoramaCamera.getOrientation();
//      JSONObject orientation = new JSONObject();
//      orientation.put("bearing", svOrientation.bearing);
//      orientation.put("tilt", svOrientation.tilt);
//      camera.put("orientation", orientation);

      String jsonStr = camera.toString(0);
      jsCallback(
          String.format(
              Locale.ENGLISH,
              "javascript:if('%s' in plugin.google.maps){plugin.google.maps['%s']({evtName:'%s', callback:'_onPanoramaCameraChange', args: [%s]});}",
              panoramaId, panoramaId, "panorama_camera_change", jsonStr));
    } catch (Exception e) {
      // ignore
      e.printStackTrace();
    }

  }

  private void jsCallback(final String js) {
    this.mActivity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        webView.loadUrl(js);
      }
    });
  }

  @Override
  public void onStreetViewPanoramaChange(StreetViewPanoramaLocation streetViewPanoramaLocation) {
    try {
      String jsonStr = "null";
      if (streetViewPanoramaLocation != null) {
        JSONObject location = new JSONObject();
        location.put("panoId", streetViewPanoramaLocation.panoId);

        JSONObject position = new JSONObject();
        position.put("lat", streetViewPanoramaLocation.position.latitude);
        position.put("lng", streetViewPanoramaLocation.position.longitude);
        location.put("latLng", position);

        JSONArray links = new JSONArray();
        for (StreetViewPanoramaLink stLink : streetViewPanoramaLocation.links) {
          JSONObject link = new JSONObject();
          link.put("panoId", stLink.panoId);
          link.put("bearing", stLink.bearing);
          links.put(link);
        }
        location.put("links", links);

        jsonStr = location.toString(0);
      }
      jsCallback(
          String.format(
              Locale.ENGLISH,
              "javascript:if('%s' in plugin.google.maps){plugin.google.maps['%s']({evtName:'%s', callback:'_onPanoramaLocationChange', args: [%s]});}",
              panoramaId, panoramaId, "panorama_location_change", jsonStr));
    } catch (Exception e) {
      // ignore
      e.printStackTrace();
    }

  }

  @Override
  public void onStreetViewPanoramaClick(StreetViewPanoramaOrientation streetViewPanoramaOrientation) {

    try {
      JSONObject clickInfo  = new JSONObject();
      JSONObject orientation = new JSONObject();
      orientation.put("bearing", streetViewPanoramaOrientation.bearing);
      orientation.put("tilt", streetViewPanoramaOrientation.tilt);
      clickInfo.put("orientation", orientation);

      Point point = panorama.orientationToPoint(streetViewPanoramaOrientation);
      JSONArray pointArray = new JSONArray();
      pointArray.put((int)((double)point.x / (double)density));
      pointArray.put((int)((double)point.y / (double)density));
      clickInfo.put("point", pointArray);

      String jsonStr = clickInfo.toString(0);
      jsCallback(
          String.format(
              Locale.ENGLISH,
              "javascript:if('%s' in plugin.google.maps){plugin.google.maps['%s']({evtName:'%s', callback:'_onPanoramaEvent', args: [%s]});}",
              panoramaId, panoramaId, "panorama_click", jsonStr));
    } catch (Exception e) {
      // ignore
      e.printStackTrace();
    }

  }

}
