<template>
  <section class="section backdrop">
    <div class="container is-flex is-align-items-center">
      <div class="container backdrop-form">
        <!-- Troca de linguagem -->
        <div class="p-4 has-text-primary is-size-7">
          <span class="lang-selector" v-for="l in $store.getters.langs" :key="l.key" @click="$ml.change(l.key)">
            {{ l.name }}
          </span>
        </div>
        <!-- Título -->
        <div class="backdrop-form-logo has-text-primary p-4">
          <b-icon icon="notebook-edit" class="mr-2" size="is-large" />
          <span class="is-hidden-mobile">{{ $ml.get('brand-name') }}</span>
        </div>

        <!-- Formulário -->
        <div class="p-4">
          <b-field :label="$ml.get('login-label')" custom-class="has-text-primary">
            <b-input
              v-model="username"
              custom-class="has-text-primary"
              maxlength="100" 
              :has-counter="false"
              @keyup.enter.native="authenticate"
            />
          </b-field>
          <b-field :label="$ml.get('senha-label')" custom-class="has-text-primary">
            <b-input
              v-model="password"
              custom-class="has-text-primary"
              type="password"
              maxlength="100"
              :has-counter="false"
              @keyup.enter.native="authenticate"
            />
          </b-field>
        </div>

        <!-- Botões -->
        <div class="has-text-centered p-4">
          <b-button type="is-primary" @click="authenticate">{{ $ml.get('entrar-btn') }}</b-button>
          <br />
          <p class="pt-4">
            <router-link :to="{ name: 'Signup' }">{{ $ml.get('cadastro-link') }}</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    authenticate() {
      if (this.username == "admin" && this.password == "admin") {
        const credentials = {username: this.username, password: this.password}
        this.$store.dispatch('login', credentials)
      } else {
        this.$buefy.dialog.alert({
          message: this.$ml.get('incorrect-credentials-msg'),
          confirmText: "OK",
          type: "is-danger",
        })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop-form-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
}
</style>