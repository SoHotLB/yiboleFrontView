<template>
    <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:500px" @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map>
</template>
<script>
export default {
    data () {
        return {
            center: {lng: 109.45744048529967, lat: 36.49771311230842},
            zoom: 13
        }
    },
    methods: {
        handler({ BMap, map }) {
            var point = new BMap.Point(116.387052, 39.938046)
            map.centerAndZoom(point, 13)
            var marker = new BMap.Marker(point) // 创建标注
            map.addOverlay(marker) // 将标注添加到地图中
            var circle = new BMap.Circle(point, 6, {
                strokeColor: 'Red',
                strokeWeight: 6,
                strokeOpacity: 1,
                Color: 'Red',
                fillColor: '#f03'
            })
            map.addOverlay(circle)
        },
        getClickInfo(e) {
            console.log(e.point.lng)
            console.log(e.point.lat)
            this.center.lng = e.point.lng
            this.center.lat = e.point.lat
        }
    }
}
</script>
<style scoped>
.info {
    color: grey;
    font-size: 12px;
}
</style>
