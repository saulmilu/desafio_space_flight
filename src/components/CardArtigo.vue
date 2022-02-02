<template>
  <v-container grid-list-xs>
    <v-card>
      <div class="d-flex flex-no-wrap justify-space-between ">
        <div class="d-flex flex-column flex-no-wrap justify-space-between  totalW totalH">
          <div>
            <v-card-title
              class="text-h5"
              v-text="item.title"
            ></v-card-title>

            <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            <v-card-text>
              <div class="d-lg-flex justify-space-between align-center mb-6">
                <h4>25/08/2020</h4>
                <v-btn outline color="primary" dark>Site</v-btn>
              </div>
              <p> {{principal}}</p>
            </v-card-text>

          </div>
          <div class="">
            <v-card-text>
              <v-btn  color="success">Ver Mais</v-btn>
            </v-card-text>
          </div>
        </div>

        <v-avatar
          class="ma-6"
          size="350"
          tile
        >
          <v-img :src="item.src"></v-img>
        </v-avatar>
      </div>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CardArtigo',
  data() {
    return ({
      principal: `Phasellus a mauris dolor. Aenean facilisis et orci eu tempus. 
        Phasellus iaculis metus tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Curabitur tincidunt vulputate est, in pretium lectus pretium nec. Fusce nec purus massa. 
        Aenean gravida malesuada lectus, et consequat metus egestas eu. Aenean sed leo tortor. 
        Aliquam ac suscipit odio. Fusce tempor ut tortor consequat tempor. 
        Nullam ut nibh pulvinar lectus placerat fermentum et sed purus. Proin fringilla ligula urna, in laoreet odio ultrices at. 
        Sed tincidunt diam ligula, ut ultricies mi eleifend eu. Integer auctor imperdiet eros, vitae mollis leo malesuada ut. Ut pretium imperdiet gravida.
      `,
      item: {
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        artist: 'Chloe Vrens',
        title: 'Artista',
      },
    });
  },
});
</script>

<style>
  .totalW{
    width: 100%;
  }
  .totalH {
    height: 100%;
  }

</style>
