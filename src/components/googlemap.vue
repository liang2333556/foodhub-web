<template>
  <div>
    <label>
      <h1 class="text">Please input the name of restaurant:</h1>
        <GmapAutocomplete class="search"
          :position.sync="markers[0].position" @keyup.enter="usePlace" @place_changed="setPlace"
                          style="position:relative;left:300px"
                          :options="{
       zoomControl: true,//缩放控制
       mapTypeControl: true,
       scaleControl: true,//规模控制
       streetViewControl: true,//街景控制
       rotateControl: false,//旋转控制
       fullscreenControl: true,//全屏控制
       disableDefaultUi: true,//默认ui
     }"
        >
        </GmapAutocomplete>
        <button style="position:relative;left:300px" @click="usePlace">Ok</button>
    </label>

    <gmap-map
      class="map"
      :center="centers"
      :zoom="11"
      map-type-id="terrain"
      style="width:60%; height: 500px;  position:relative;left:300px;"
    >
      <gmap-marker
        @dragend="updateMaker"
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="centers=m.position"
      ></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
/* eslint-disable */

export default {
        data() {
            return {
                centers: {lat: 51.508742,lng: -0.120850},
                markers: [{
                    position: {lat: 51.508742,lng: -0.120850}
                }],
                place: null,
            }
        },
        description: 'Autocomplete Example (#164)',
        mounted() {

        },
        methods: {
            setPlace(place) {
                this.place = place
            },
            setDescription(description) {
                this.description = description;
            },
            usePlace(place) {
                if (this.place) {
                    var newPostion = {
                        lat: this.place.geometry.location.lat(),
                        lng: this.place.geometry.location.lng(),
                    };
                    this.centers = newPostion;
                    this.markers[0].position =  newPostion;
                    this.place = null;
                }
            },

            updateMaker: function(event) {
                console.log('updateMaker, ', event.latLng.lat());
                this.markers[0].position = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng(),
                }
            },
        }
    }
</script>
