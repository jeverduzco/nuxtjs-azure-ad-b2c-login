<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      fixed
      flat
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn
        @click.stop="toggleDark"
        icon
      >
        <v-icon>invert_colors</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <no-ssr>
        <v-btn
          v-if="user == null"
          @click="setUri"
          icon
        >
          <v-icon>perm_identity</v-icon>
        </v-btn>
        <v-btn
          v-if="user !== null"
          @click="logout"
          icon
        >
          <v-icon>how_to_reg</v-icon>
        </v-btn>
      </no-ssr>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
      inset
      absolute
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-divider />
        <v-card-actions class="justify-center">
          Autor: <strong> Jesús Verduzco</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      date: new Date().getFullYear(),
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'INICIO',
          to: '/'
        }
      ],
      right: true,
      title: 'Nuxt.js and Azure AD B2C'
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    user: function() {
      if (process.browser) {
        return this.$AuthService.getUser()
      }
    },
    ...mapGetters({
      dark: 'dark/dark',
      uri: 'uri/uri'
    })
  },
  methods: {
    setUri() {
      const url = window.location.pathname
      if (url !== '/auth') {
        this.$store.commit('uri/setUri', url)
        this.$router.push('/auth')
      } else {
        const uri = this.uri
        this.$AuthService.login(uri)
      }
    },
    logout() {
      this.$AuthService.logout()
    },
    ...mapMutations({
      toggleDark: 'dark/toggleDark'
    })
  }
}
</script>
