<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.route">
            <v-list-item-action>
              <v-icon left v-html="link.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'CRM СИСТЕМ'"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(link, i) in links" plain :key="i" :to="link.route">
          <v-icon left v-html="link.icon"></v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Нүүр", icon: "mdi-home", route: "/home" },
      { title: "Бүтээгдхүүн", icon: "mdi-home", route: "/products" },
      { title: "Нэвтрэх", icon: "mdi-lock-open-variant", route: "/login" },
    ],
    drawer: false,
    sidenav: null,
    dropdown: null,
    layout: null,
  }),
  computed: {},
};
</script>


