<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      height="400px"
    >
      <template v-slot:default >
        <div style="width:100%;" class="grid-3">

          <div  class="d-flex flex-column align-center justify-center grid-3-1">
            <v-img width="300px" :src="rocket"></v-img>
            <h2>Space Flight News</h2>
          </div>
          <div style="width:100%;" class="grid-3-2 d-flex align-center justify-space-between">
            <search  class="mr-2"/>
            <v-select  class="mr-2"  label="Filtrar" :items="items"></v-select>
          </div>
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
import search from './components/Search.vue';

export default Vue.extend({
  name: 'App',
  components: {
    search,
  },
  data: () => ({
    rocket,
    items: ['antigos', 'recentes'],
  }),
});
</script>
<style lang="scss">
 .grid-3 {
   display: grid;
   grid-template-columns: 30% 1fr 30%;
 }
 .grid-3-0 {
   grid-column: 1/2;
 }
 .grid-3-1 {
   grid-column: 2/3;
 }
 .grid-3-2 {
   grid-column: 3/4;
 }
</style>
