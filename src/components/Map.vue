<template>
  <div id="map-viewer">
    <!-- <sm-viewer :scene-url="URL"></sm-viewer> -->
  </div>
</template>

<script>
export default {
  name: 'map',
  data: () => {
    return {
      URL: "http://www.supermapol.com/realspace/services/3D-ZF_normal/rest/realspace"
    }
  },
  mounted: function() {
    let viewer = new window.Cesium.Viewer('map-viewer');
    const scene = viewer.scene
    scene.open(this.URL);  //url为在SuperMap iServer上发布的服务地址

    // 隐藏地球上的所有图层
    // let layers = viewer.scene.imageryLayers
    // layers.removeAll();

    // 设置背景
    // viewer.scene.globe.baseColor = window.Cesium.Color.GHOSTWHITE // 地球背景色
    // viewer.scene.skyBox.show = false; // 隐藏天空盒子
    // viewer.scene.backgroundColor = window.Cesium.Color.GHOSTWHITE // 空间背景色
    // viewer.scene.skyAtmosphere.show = false // 隐藏大气圈

    // 设置鼠标
    viewer.scene.screenSpaceCameraController.tiltEventTypes = [window.Cesium.CameraEventType.RIGHT_DRAG, window.Cesium.CameraEventType.PINCH];
    viewer.scene.screenSpaceCameraController.zoomEventTypes = [window.Cesium.CameraEventType.WHEEL, window.Cesium.CameraEventType.PINCH];
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(window.Cesium.ScreenSpaceEventType.LEFT_CLICK);
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(window.Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

  }
}
</script>

<style scoped>

</style>