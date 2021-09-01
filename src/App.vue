<template>
  <v-app app>
    <app-header></app-header>
    <v-main>
      <router-view />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from "@/components/app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
export default {
  name: "App",

  // data: () => ({
  //   //
  // }),
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
