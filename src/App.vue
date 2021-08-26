<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view />
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from "@/components/app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
