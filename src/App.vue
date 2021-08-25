<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from "@/components/app/AppHeader";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppHeader,
  },
};
</script>
