<template>
  <v-carousel show-arrows-on-hover hide-delimiters cycle>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" transition="scroll-y-transition">
      <v-row class="fill-height" align="center">
        <div class="text-h2 white--text pl-5">
          {{ item.text }}
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        text: "askkjasasd kasdkjas jksdfjksd өббоөаорбаөаб",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        text: "олрбыолөаб олбрөалорбгужэүшугж вьтсчтслоарболаөб",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        text: "kljglkasd ldkfgsdj",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        text: "askkjasasd kasdkjas jksdfjksd өббоөаорбаөаб",
      },
    ],
  }),
};
</script>

<style scoped>
</style>