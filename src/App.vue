<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      height="400px"
    >
      <template v-slot:default >
        <div style="width:100%;" class="d-flex flex-column align-center justify-center">
          <v-img width="300px" :src="rocket"></v-img>
          <h2>Space Flight News</h2>
        </div>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import rocket from './assets/rocket-1206.svg';

export default Vue.extend({
  name: 'App',

  data: () => ({
    rocket,
  }),
});
</script>
