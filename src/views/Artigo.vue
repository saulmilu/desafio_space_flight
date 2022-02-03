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
  artigos : Artigo[]
}

export default Vue.extend({
  name: 'Artigo',
  data(): Data {
    return {
      count: 0,
      indice: 0,
      limit: 10,
      artigos: [],
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
      this.artigos = [...this.artigos, ...res];
      this.indice -= this.limit;
    },
  },
});
</script>

<style>
</style>
