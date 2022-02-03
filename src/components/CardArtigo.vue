<template>
  <v-container grid-list-xs>
    <v-card>
      <div class="d-flex flex-no-wrap justify-space-between ">
        <div class="d-flex flex-column   justify-space-between  totalW totalH">
          <div>
            <v-card-title
              class="text-h5"
              v-text="title"
            ></v-card-title>

            <!-- <v-card-subtitle v-text="item.artist"></v-card-subtitle> -->
            <v-card-text>
              <div class="d-lg-flex justify-space-between align-center mb-6">
                <h4>{{toDate(publishedAt)}}</h4>
                <v-btn outlined color="primary" dark>{{newsSite}}</v-btn>
              </div>
              <p v-text="summary"></p>
            </v-card-text>

          </div>
          <div class="">
            <v-card-text>
              <v-btn :href="url" color="success"> Ver Mais </v-btn>
            </v-card-text>
          </div>
        </div>

        <v-avatar
          class="ma-6"
          size="320"
          tile
        >
          <v-img :src="imageUrl" :lazy-src="placeholder">
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import placeholder from '../assets/placeholder300.png';

export default Vue.extend({
  name: 'CardArtigo',
  props: {
    id: Number,
    title: String,
    url: String,
    imageUrl: String,
    newsSite: String,
    summary: String,
    publishedAt: String,
    updatedAt: String,
    featured: Boolean,
    launches: Array,
    events: Array,
  },
  data() {
    return ({
      placeholder,
    });
  },
  methods: {
    toDate(date : string) {
      const newdate = new Date(date);
      return `${newdate.getDate()}-${newdate.getMonth() + 1}-${newdate.getFullYear()}`;
    },
  },
});
</script>

<style>
  .totalW{
    width: 100%;
  }
  .totalH {
    height: 360px;
  }

</style>
