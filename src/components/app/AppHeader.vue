<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.route">
            <v-list-item-action>
              <v-icon left v-html="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <!-- <router-link to="/" tag="span" style="cursor:pointer"> -->
      <router-link to="/" custom v-slot="{ navigate }" style="cursor:pointer">
        <span @click="navigate" role="link">
          <v-toolbar-title v-text="'CRM СИСТЕМ'"></v-toolbar-title>
        </span>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in menuItems" plain :key="i" :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selectedItem: null,
    sidenav: null,
    dropdown: null,
    layout: null,
  }),
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems() {
      return this.isUserAuthenticated
        ? [
            { title: "Нүүр", icon: "mdi-home", route: "/home" },
            { title: "Бүтээгдхүүн", icon: "mdi-view-list", route: "/products" },
            {
              title: "Гарах",
              icon: "mdi-logout",
              route: "/logout",
            },
          ]
        : [
            { title: "Нүүр", icon: "mdi-home", route: "/home" },
            { title: "Бүтээгдхүүн", icon: "mdi-home", route: "/products" },
            {
              title: "Нэвтрэх",
              icon: "mdi-login",
              route: "/signin",
            },
          ];
    },
  },
};
</script>


