<template>
  <div>
    <v-text-field
      name="pesquisa"
      label="Search"
      v-model="search"
      append-icon="mdi-magnify"
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      search: '',
    };
  },
});
</script>

<style>

</style>
