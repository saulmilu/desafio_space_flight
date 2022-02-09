<template>
  <v-container grid-list-xs class="d-flex flex-column justify-center">
    <section >
      <card-artigo v-for="artigo of artigos" :key="artigo.id" v-bind="artigo" />
    </section>
    <div class="align-self-center">
      <v-btn outlined color="primary" dark @click="getSpaceFlight">Read More</v-btn>
    </div>
  </v-container>

</template>

<script lang="ts">
import Vue from 'vue';
import CardArtigo from '../components/CardArtigo.vue';
import { totalArtigos, artigoService, Artigo } from './artigo.service';

interface Data {
  count: number,
  indice: number,
  limit : number,
  artigos : Artigo[],
  preFilter : Artigo[],
}

export default Vue.extend({
  name: 'Artigo',
  data(): Data {
    return {
      count: 0,
      indice: 0,
      limit: 10,
      artigos: [],
      preFilter: [],
    } as Data;
  },
  mounted() {
    totalArtigos().then((a) => {
      this.count = a;
      this.indice = this.count - this.limit;
      console.log(this.indice, this.count);
      return this.getSpaceFlight();
    })
      .then(() => { console.log('dados obtidos'); console.log(this.artigos); });
  },
  components: {
    CardArtigo,
  },
  methods: {
    async getSpaceFlight() {
      const res = await artigoService(this.indice);
      this.artigos = [...this.preFilter, ...res];
      this.preFilter = this.artigos;
      this.indice -= this.limit;
      this.$store.commit('filterTitle', '');
    },
  },
  computed: {
    filterTitle() {
      const title = this.$store.getters.filterTitle;
      return title;
    },
  },
  watch: {
    filterTitle() {
      this.artigos = this.filterTitle !== '' ? this.preFilter.filter((a) => a.title.includes(this.filterTitle)) : this.preFilter;
    },
  },
});
</script>

<style>
</style>
