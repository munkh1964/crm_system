<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in btnMenuItems" :key="i" :to="item.route">
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
        <v-btn v-for="(item, i) in btnMenuItems" plain :key="i" :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="isUserAuthenticated">
        <v-menu offset-y v-for="(menu,i) in userMenuItems" :key="'menu'+i">
          <template v-slot:activator="{ on }">
            <v-btn plain v-on="on">
              <v-icon>{{ menu.icon }}</v-icon>
              {{ menu.title }}
            </v-btn>

          </template>
          <v-list class="primary">
            <v-list-item link v-for="(item, index) in menu.submenus" :key="index">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-if="item.id=='exit'" @click.prevent="signout">{{ item.name }}</v-list-item-title>
              <v-list-item-title v-else>{{ item.name }}</v-list-item-title>
            </v-list-item>
            <!-- <v-list-item link>
              <v-icon>mdi-badge</v-icon>
              <v-list-item-content>
                <v-list-item-title @click.prevent="signout">Гарах</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <!-- <v-btn v-for="(item, i) in menuItems" plain :key="i" :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{item.title}}
        </v-btn>
        
v-if="error !== null"        
         -->

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
    btnMenuItems() {
      return this.isUserAuthenticated
        ? [
            { title: "Нүүр", icon: "mdi-home", route: "/home" },
            { title: "Бүтээгдхүүн", icon: "mdi-view-list", route: "/products" },
          ]
        : [
            { title: "Нүүр", icon: "mdi-home", route: "/home" },
            { title: "Бүтээгдхүүн", icon: "mdi-home", route: "/products" },
            { title: "Нэвтрэх", icon: "mdi-login", route: "/signin" },
          ];
    },
    userMenuItems() {
      return this.isUserAuthenticated
        ? [
            {
              title: "User",
              icon: "mdi-person",
              submenus: [
                { id: "profile", name: "Өрөө", icon: "mdi-account-box" },
                { id: "exit", name: "Гарах", icon: "mdi-logout" },
              ],
            },
          ]
        : false;
    },
  },
  methods: {
    signout() {
      this.$store.dispatch("SignOut");
    },
  },
};
</script>


//  https://codepen.io/scp-nm/pen/BgLbBJ   Vuetify Toolbar with Dropdown Menu - CodePen
//  https://stackoverflow.com/questions/54337639/how-to-create-vuetify-toolbar-link-dropdown-menu/54337755 
//  https://codesandbox.io/s/4ikl3?file=/src/layouts/DefaultLayout.vue   