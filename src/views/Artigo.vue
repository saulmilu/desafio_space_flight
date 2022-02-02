<template>
  <v-container grid-list-xs class="d-flex flex-column justify-center">
    <section>
      <card-artigo/>
    </section>
    <div class="align-self-center">
      <v-btn outlined color="primary" dark>Read More</v-btn>
    </div>
  </v-container>

</template>

<script lang="ts">
import Vue from 'vue';
import CardArtigo from '../components/CardArtigo.vue';

export default Vue.extend({
  name: 'Artigo',
  data() {
    return {
    };
  },
  components: {
    CardArtigo,
  },
});
</script>

<style>
</style>
