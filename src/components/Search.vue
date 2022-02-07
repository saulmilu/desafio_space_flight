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
  props: {
    titleSearch: String,
  },
  data() {
    return {
      search: this.titleSearch,
    };
  },
  watch: {
    titleSearch() {
      this.search = this.titleSearch;
    },
    search() {
      this.$emit('input', this.search);
    },
  },
});
</script>

<style>

</style>
