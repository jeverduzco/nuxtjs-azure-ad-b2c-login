<template>
  <div>
    <v-container grid-list-xl>
      <v-layout
        wrap
        column
        justify-center
        align-center
        min-width="100%"
      >
        <v-flex>
          <div class="text-xs-center">
            <Welcome />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Welcome from '~/components/Welcome.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Welcome
  },
  data() {
    return {
      title: 'Ejemplo de Azure AD B2C y Nuxt.js',
      description:
        'Este ejemplo inicia sesión con Azure Active Directory B2C y cambia el icono de usuario si existe un usuario.'
    }
  },
  computed: {
    ...mapGetters({
      dark: 'dark/dark'
    })
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>
