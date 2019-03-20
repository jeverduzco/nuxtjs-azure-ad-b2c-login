<template>
  <div id="resumen">
    <v-container grid-list-xl>
      <v-layout
        wrap
        row
        justify-center
        align-center
        min-width="100%"
      >
        <v-flex>
          <div class="text-xs-center">
            <v-card
              flat
            >
              <v-card-title 
                id="nombre"
                class="headline"
              >
                Iniciar Sesión
              </v-card-title>
              <v-card-text>
                <p>
                  Estamos iniciado tu sesión, una vez este tu sesión este iniciada te redimiremos a la página anterior 😊
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      url: ''
    }
  },
  computed: {
    user() {
      return this.$AuthService.getUser()
    },
    ...mapGetters({
      uri: 'uri/uri'
    })
  },
  mounted() {
    if (this.user === null) {
      const url = this.uri
      this.$AuthService.login(url)
    } else {
      this.$router.push('/')
    }
  }
}
</script>
