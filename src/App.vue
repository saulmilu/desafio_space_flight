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
            <search v-model="titleSearch"  class="mr-2"/>
            <v-select v-model="itemSelected" class="mr-2"
              label="Filtrar" :items="items"></v-select>
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
import debounce from 'lodash.debounce';
import search from './components/Search.vue';
import rocket from './assets/rocket-1206.svg';

export default Vue.extend({
  name: 'App',
  components: {
    search,
  },
  data: () => ({
    rocket,
    items: ['antigos', 'recentes'],
    itemSelected: '',
    titleSearch: '',
  }),
  created() {
    this.debounceCommitFilter = debounce(this.commitFilter, 2000);
  },
  computed: {
    cleanTitleSearch() {
      const title = this.$store.getters.filterTitle;
      return title;
    },
  },
  watch: {
    titleSearch(newValue) {
      console.log(' titleSearch call');
      if (newValue === '') {
        console.log(`title search cleared ${this.titleSearch}`);
      } else {
      this.debounceCommitFilter();
      }
    },
    cleanTitleSearch(newValue, oldValue) {
      console.log('clean title');
      if (newValue === '') {
        console.log(' cleared');
        this.titleSearch = newValue;
        console.log(` title is ${this.titleSearch}`);
      }
    },
  },
  methods: {
    commitFilter() {
      console.log(`'comitando ' ${this.titleSearch}`);
      this.$store.commit('filterTitle', this.titleSearch);
    },
  },
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
